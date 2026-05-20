const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const dns = require('dns');

dns.setServers(['8.8.8.8', '1.1.1.1']); 

const app = express();

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Models
const Assignment = require('./models/Assignment'); 
const Subject = require('./models/Subject');

//  Routes
const assignmentRoutes = require('./routes/assignment');
app.use('/api/assignments', assignmentRoutes);

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);



const aiRoutes = require('./routes/aiRoutes'); 
app.use('/api/ai', aiRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch((err) => console.error('Database connection failed:', err));


app.get('/', (req, res) => {
    res.send('DMSL Virtual Lab Backend is running!');
});

//  Fetch all subjects for the dashboard
app.get('/api/subjects', async (req, res) => {
  try {
    const subjects = await Subject.find({}); 
    res.status(200).json(subjects); 
  } catch (error) {
    console.error("Error fetching subjects:", error);
    res.status(500).json({ message: "Server Error fetching subjects" });
  }
});

//Add new subject
app.post('/api/subjects', async (req, res) => {
  try {
    const newSubject = new Subject({
      name: req.body.name,
      year: "SE",
      semester: 3,
      icon: "📚",
      color: "#102b51"
    }); 
    const savedSubject = await newSubject.save();
    res.status(201).json(savedSubject);
  } catch (error) {
    console.error("Error creating subject:", error);
    res.status(500).json({ message: "Server Error creating subject" });
  }
});

//Fetch all experiments for a specific subject
app.get('/api/assignments/subject/:subjectId', async (req, res) => {
  try {
    const labs = await Assignment.find({ subjectId: req.params.subjectId });
    res.status(200).json(labs);
  } catch (error) {
    console.error("Error fetching labs for subject:", error);
    res.status(500).json({ message: "Server Error fetching subject labs" });
  }
});

//fetch specific exp
app.get('/api/assignments/:id', async (req, res) => {
  try {
    let assignment;

   
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
      assignment = await Assignment.findById(req.params.id);
    } 
    
    else {
     
      const dbmsSubject = await Subject.findOne({ name: "Database Management Systems Lab" });
      
      if (dbmsSubject) {
    
        assignment = await Assignment.findOne({
          assignmentId: Number(req.params.id),
          subjectId: dbmsSubject._id
        });
      }
    }
    
    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found in database" });
    }
    
    res.status(200).json(assignment);
  } catch (error) {
    console.error("Error fetching single assignment:", error);
    res.status(500).json({ message: "Server Error" });
  }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});