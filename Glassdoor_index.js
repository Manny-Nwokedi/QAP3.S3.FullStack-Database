const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'manny1983',
  host: 'localhost',
  database: 'Manny Eats Inc',
  password: 'Zack2012',
  port: 5432,
});

app.get('/glassdoor', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM glassdoor_api');
    const data = result.rows;
    client.release();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});