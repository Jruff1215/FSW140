const express = require("express");
const mysql = require("mysql")

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: "FullstackSQL"
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

app.get('/CreateTable', (req, res) => {
    let sql = "CREATE TABLE FullstackSQL (id INT AUTO_INCREMENT, title VARCHAR(100), message VARCHAR(250), PRIMARY KEY (id))";
    database.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        console.log(result)
        res.send("Table Created Successfully!");
    
    });
});

app.get('/InsertRow1' , (req, res) => {
    let post = {title: 'First Posting', message: 'This is my first message'}
    let sql = "INSERT INTO FullstackSQL SET ?";
    database.query(sql, post, (err, result) => {
        if (err) {
            throw err
        }
        console.log(result)
        res.send("Row 1 Inserted Successfully!");
    })
})

app.get('/InsertRow2' , (req, res) => {
    let post = {title: 'Second Posting', message: 'This is my second message'}
    let sql = "INSERT INTO FullstackSQL SET ?";
    database.query(sql, post, (err, result) => {
        if (err) {
            throw err
        }
        console.log(result)
        res.send("Row 2 Inserted Successfully!");
    })
})

app.get('/GetPostings', (req, res) => {
    let sql = "SELECT * FROM FullstackSQL";
    database.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        console.log(result)
        res.send(" SELECT Query without WHERE Clause Successful!");
    })
})

app.get('/GetPosting/:id', (req, res) => {
    let sql = `SELECT * FROM FullstackSQL WHERE id =${req.params.id}`;
    database.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        console.log(result)
        res.send(" SELECT Query Including WHERE Clause Successful!");
    })
})

app.get('/UpdatePosting/:id', (req, res) => {
    let newPost = "Data Updated"
    let sql = `UPDATE fullstackSQL SET title = '${newPost}' WHERE id =${req.params.id}`;
    database.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        console.log(result)
        res.send("UPDATE was Successful!");
    })
})

app.get('/DeletePosting/:id', (req, res) => {
    let sql = `DELETE FROM fullstackSQL WHERE id =${req.params.id}`;
    database.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        console.log(result)
        res.send("DELETE was Successful!");
    })
})

app.listen('9000', () => {
    console.log("Server is running!");
})