// Mengambil koneksi dari config.js
const pool = require('../config.js');
const fs = require('fs');

const seedQuery = fs.readFileSync("./seeding.sql", "utf-8");

pool.query(seedQuery, (err, result) => {
    // Error Handler
    if (err) throw err;

    console.log('seeding success');
    pool.end();
})