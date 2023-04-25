import { useState } from 'react';
import axios from 'axios';

function Update({ record }) {
  const [field1, setField1] = useState(record.field1);
  const [field2, setField2] = useState(record.field2);
  const [field3, setField3] = useState(record.field3);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send an HTTP PUT request to update the record
    axios.put(`/record/${record.id}`, { field1, field2, field3 })
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Field 1:
        <input type="text" value={field1} onChange={(event) => setField1(event.target.value)} />
      </label>
      <label>
        Field 2:
        <input type="text" value={field2} onChange={(event) => setField2(event.target.value)} />
      </label>
      <label>
        Field 3:
        <input type="text" value={field3} onChange={(event) => setField3(event.target.value)} />
      </label>
      <button type="submit">Update</button>
    </form>
  );
}

export default Update;
// server.js

const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

// Endpoint for updating a record
app.put('/records/:id', (req, res) => {
  const id = req.params.id;
  const { field1, field2, field3 } = req.body; // assuming the updated fields are sent as JSON in the request body

  // Create a SQL query that updates the record
  const sql = `UPDATE records SET field1=?, field2=?, field3=? WHERE id=?`;

  // Execute the SQL query using the MySQL driver
  pool.query(sql, [field1, field2, field3, id], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error updating record');
    } else {
      res.send('Record updated successfully');
    }
  });
});

// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));
