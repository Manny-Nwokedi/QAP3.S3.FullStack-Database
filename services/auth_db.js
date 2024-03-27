// auth_db.js for Manny Eats Inc
 
const Pool = require('pg').Pool
const pool = new Pool({
user: 'postgres',
host: 'localhost',
database: 'mannyeatsinc',
password: 'Zack2012',
port: 5433,
});
 
pool.connect((err) => {
    if (err) {
    console.error('Error connecting to the database', err);
    } else {
    console.log('Connected to the PostgreSQL database mannyeatsinc');
    }
});
 
module.exports = pool;
 