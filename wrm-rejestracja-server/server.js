const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:4200',
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());

// Połączenie z bazami danych
const Datastore = require('nedb')

const wizyty = new Datastore({
    filename: 'databases/visits.db',
    autoload: true
});

const badania = new Datastore({
    filename: 'databases/tests.db',
    autoload: true
});

const pacjenci = new Datastore({
    filename: 'databases/patients.db',
    autoload: true
});

// --> Obsługa rejestracji na badania
app.post("/add-test", function (req, res) {
    doc = req.body;
    badania.insert(doc, function (err, newDoc) {
        if (err) {
            console.error("Błąd podczas zapisywania badania:", err);
            res.send(err);
        } else {
            console.log("Dodano badanie: " + newDoc._id)
            console.log(newDoc)
            res.send("OK");
        }
    })
})

app.get('/get-test', (req, res) => {
    console.log(req.query)
    res.send("Pod tym adresem można pobrać dane o rejestracji na badanie")
});

app.post('/remove-test', (req, res) => {
    id = req.body.id
    badania.remove({ _id:  id}, { multi: true }, function (err, numRemoved) {
        if (err) {
            console.error("Błąd podczas usuwania:", err);
            res.send(false);
        } else {
            console.log("Usunięto wpisów: " + numRemoved);
            res.send(JSON.stringify(numRemoved));
        }
    });
});

// --> Obsługa rejestracji na wizyty
app.post("/add-visit", function (req, res) {
    doc = req.body
    wizyty.insert(doc, function (err, newDoc) {
        if (err) {
            console.error("Błąd podczas zapisywania wizyty:", err);
            res.send(err);
        } else {
            console.log("Dodano wizytę: " + newDoc._id)
            console.log(newDoc)
            res.send("OK");
        }
    })
})

app.get('/get-visit', (req, res) => {
    console.log(req.query)
    res.send("Pod tym adresem można pobrać dane o rejestracji na wizytę")
});

app.post('/remove-visit', (req, res) => {
    id = req.body.id
    wizyty.remove({ _id:  id}, { multi: true }, function (err, numRemoved) {
        if (err) {
            console.error("Błąd podczas usuwania:", err);
            res.send(false);
        } else {
            console.log("Usunięto wpisów: " + numRemoved);
            res.send(JSON.stringify(numRemoved));
        }
    });
});

// --> Obsługa logowania
app.post("/login", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    console.log('Username:', username);
    console.log('Password:', password);

    pacjenci.count({ username: username, password: password},  function (err, count) {
        if(count === 1){
            res.send(true);
        }
        else{
            res.send(false);
        }
    });
})

// app.get('/logout', (req, res) => {
//     // console.log(req.query)
//     res.send("Pod tym adresem można wylogować się z systemu")
// });

// Nasłuchiwanie na porcie 3000
app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});

