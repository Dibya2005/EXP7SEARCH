const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "db17012005",
    database: "exp7db"
});

db.connect((err) => {
    if (err) {
        console.error("DB Connection Error:", err);
        return;
    }
    console.log("Connected to MySQL Database!");
});

module.exports = db;
