const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./users.db');

db.serialize(() => {
    db.run("ALTER TABLE users ADD COLUMN email TEXT", (err) => {
        if (err) {
            console.error("Error adding column:", err);
        } else {
            console.log("Column 'email' added successfully.");
        }
    });
});

db.close();