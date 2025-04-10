// Importing modules
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db');

// Import routes
const userRoutes = require('./routes/userRoutes'); // ✅
const fuelRoutes = require('./routes/fuelRoutes'); // ✅

dotenv.config();
console.log('DB config:', process.env.DB_USER, process.env.DB_PASS);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes); // ✅
app.use('/api/fuel', fuelRoutes); // ✅

app.get('/', (req, res) => {
  res.send('Fuelify Backend is running 🚀');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
