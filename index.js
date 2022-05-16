var express = require('express')
const mysql = require('mysql')
var app = express()

var port = 3000;
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "localhost",
    database: "login"
})

app.listen(port, () => {
    console.log("Sono acceso")
})

app.get("/", (req, res) => {
    connection.query("SELECT * FROM account",
        function (error, results) {
            if (error) throw error;
            console.log("righe: " + results.length)
            res.end()
        })
})





