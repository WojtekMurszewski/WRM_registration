const express = require('express');
const app = express();
const port = 3000;

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
    console.log(req.body)
    res.send("Pod tym adresem można dodać nową rejestrację na badanie")
})

app.get('/get-test', (req, res) => {
    console.log(req.query) 
    res.send("Pod tym adresem można pobrać dane o rejestracji na badanie")
});

app.get('/remove-test', (req, res) => {
    console.log(req.query) 
    res.send("Pod tym adresem można usunąć rejestrację na badanie")
});

// --> Obsługa rejestracji na wizyty
app.post("/add-visit", function (req, res) {
    console.log(req.body)
    res.send("Pod tym adresem można dodać nową rejestrację na wizytę")
})

app.get('/get-visit', (req, res) => {
    console.log(req.query) 
    res.send("Pod tym adresem można pobrać dane o rejestracji na wizytę")
});

app.get('/remove-visit', (req, res) => {
    console.log(req.query) 
    res.send("Pod tym adresem można usunąć rejestrację na wizytę")
});

// --> Obsługa logowania
app.post("/login", function (req, res) {
    console.log(req.body)
    res.send("Pod tym adresem można zalogować się do systemu")
})

app.get('/logout', (req, res) => {
    console.log(req.query) 
    res.send("Pod tym adresem można wylogować się z systemu")
});

// Nasłuchiwanie na porcie 3000
app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});

