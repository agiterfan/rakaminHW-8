const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db_dvdRental',
    password: '1997',
    port: 5432,
});

module.exports = pool;