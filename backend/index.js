const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const app = express();


app.use(cors());
app.use(express.json());

const assignmentRoutes = require('./routes/assignment');
app.use('/api/assignments', assignmentRoutes);
app.use('/api', assignmentRoutes);

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const aiRoutes = require('./routes/aiRoutes');
app.use('/api/ai', aiRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch((err) => console.error('Database connection failed:', err));


app.get('/', (req, res) => {
  res.send('DMSL Virtual Lab Backend is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});