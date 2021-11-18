const express = require("express");
const mysql = require("mysql")

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jred1215'
});
database.connect((err) => {
    if (err) {
        throw err
    }
    console.log("Database Connection Established Successfully!")
});

const app = express()

app.get('/CreateDatabase', (req, res) => {
    let sql = "CREATE DATABASE FullstackSQL";
    database.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        console.log(result)
        res.send("Created Successfully!")
    });
});

app.get('CREATE TABLE', (req, res) => {
    let sql = "CREATE TABLE postings(id INT AUTO_INCREMENT, title VARCHAR(100), message VARCHAR(100), PRIMARY KEY(id))";
    database.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        console.log(result)
        res.send("Table Created Successfully!")
    )}
})


app.listen('9000', () =>{
    console.log("Server is running!")
})

module.exports = mysql;