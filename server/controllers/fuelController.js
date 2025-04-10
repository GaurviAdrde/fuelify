const db = require('../config/db');

exports.submitFuelRequest = (req, res) => {
  const { user_id, fuel_type, quantity, deadline } = req.body;
  const query = 'INSERT INTO fuel_requests (user_id, fuel_type, quantity, deadline) VALUES (?, ?, ?, ?)';
  db.query(query, [user_id, fuel_type, quantity, deadline], (err, result) => {
    if (err) {
      console.error('Error submitting fuel request:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Fuel request submitted successfully', requestId: result.insertId });
  });
};

exports.getAllRequests = (req, res) => {
  db.query('SELECT * FROM fuel_requests', (err, results) => {
    if (err) {
      console.error('Error fetching requests:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json(results);
  });
};
