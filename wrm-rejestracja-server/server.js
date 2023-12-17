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

// --------------------------------> BADANIA <------------------------------------------
// Dodanie rejestracji na badanie
app.post("/add-test", function (req, res) {
    badania.insert(req.body, function (err, newDoc) {
        if (err) {
            res.send(err);
        } else {
            res.send("OK");
        }
    })
})

// Pobranie wszystkich rejestracji na badanie
app.get('/get-all-tests', (req, res) => {
    badania.find({ }, function (err, docs) {
        res.send(JSON.stringify(docs, null, 5));
    });
});

// Pobranie pojedyńczej rejestracji na badanie (na podstawie ID)
app.get('/get-test', (req, res) => {
    badania.findOne({ _id: req.query.id }, function (err, doc) {
        res.send(JSON.stringify(doc, null, 5));
    });
});


// Usunięcie rejestracji na badanie (na podstawie ID)
app.post('/remove-test', (req, res) => {
    badania.remove({ _id:  req.body.id}, { multi: true }, function (err, numRemoved) {
        if (err) {
            res.send(false);
        } else {
            res.send(JSON.stringify(numRemoved));
        }
    });
});

// --------------------------------> WIZYTY <------------------------------------------
// Dodanie rejestracji na wizytę
app.post("/add-visit", function (req, res) {
    wizyty.insert(req.body, function (err, newDoc) {
        if (err) {
            res.send(err);
        } else {
            res.send("OK");
        }
    })
})

// Pobranie wszystkich rejestracji na wizytę
app.get('/get-all-visits', (req, res) => {
    wizyty.find({ }, function (err, docs) {
        res.send(JSON.stringify(docs, null, 5));
    });
});

// Pobranie pojedyńczej rejestracji na wizytę (na podstawie ID)
app.get('/get-visit', (req, res) => {
    wizyty.findOne({ _id: req.query.id }, function (err, doc) {
        res.send(JSON.stringify(doc, null, 5));
    });
});

// Usunięcie rejestracji na wizytę (na podstawie ID)
app.post('/remove-visit', (req, res) => {
    wizyty.remove({ _id:  req.body.id}, { multi: true }, function (err, numRemoved) {
        if (err) {
            res.send(false);
        } else {
            res.send(JSON.stringify(numRemoved));
        }
    });
});

// --------------------------------> LOGOWANIE <------------------------------------------
// Sprawdzanie czy dane konto istnieje
app.post("/login", function (req, res) {
    pacjenci.count({ username: req.body.username, password: req.body.password},  function (err, count) {
        if(count === 1){
            res.send(true);
        }
        else{
            res.send(false);
        }
    });
})

// -------------------------------------------------------------------------------------

// Nasłuchiwanie na porcie 3000
app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});

