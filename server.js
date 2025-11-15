const express = require("express");
const path = require("path");
const db = require("./db");

const app = express();
app.use(express.static("public"));

/* ---------- SEARCH ROUTE ---------- */
app.get("/search", (req, res) => {
    const searchTerm = "%" + req.query.q + "%";

    const query = "SELECT * FROM posts WHERE title LIKE ?";
    
    db.execute(query, [searchTerm], (err, results) => {
        if (err) return res.json([]);
        res.json(results);
    });
});

/* ---------- HOME PAGE ---------- */
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
