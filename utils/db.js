'use strict';

const mysql = require("mysql2");

// Crie a conexão com o banco de dados MySQL
const connection = mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "secret",
    database: "library",
});

// Conecte-se ao MySQL
connection.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao MySQL:", err);
        throw err;
    }
    console.log("Conectado ao MySQL!");
});

module.exports = connection;