const express = require('express')
const app = express()
const mysql = require('mysql')

require('dotenv').config()

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    port: process.env.MYSQL_PORT
});

connection.connect(function(error){
    if(error){
        throw error
    }else{
        console.log("Success Connection");
    }
});
connection.end();

app.listen(8081, () => {
    console.log("Server start in the port 8081");
});