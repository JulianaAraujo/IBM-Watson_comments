const mysql = require('mysql2')
const keys = require('./keys')

const connection = mysql.createConnection({
    host: keys.DB_HOST,
    user: keys.DB_USER,
    password: keys.DB_PASS,
    database: keys.DATABASE
  });

//setup da DB, criando banco de dados se não existir
connection.query("CREATE DATABASE IF NOT EXISTS commentsdb", (err) => {
    if (err) throw err;
    connection.query("USE commentsdb", (err) => {
        if (err) throw err;
        connection.query(
        "CREATE TABLE IF NOT EXISTS comments(" +
            "id INT NOT NULL AUTO_INCREMENT," +
            "PRIMARY KEY(id)," +
            "text VARCHAR(255)" +
            ")",
        (err) => {
            if (err) throw err;
        }
        );
    });
});

exports.connection = connection