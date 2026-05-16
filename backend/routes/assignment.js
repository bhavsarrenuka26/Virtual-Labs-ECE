const express = require('express');
const router = express.Router();
const Assignment = require('../models/Assignment'); 

const verifyToken = require('../middleware/verifyToken');
const verifyAdmin = require('../middleware/verifyAdmin');

// 1. Fetch all assignments

router.get('/', async (req, res) => {
    try {
        const assignments = await Assignment.find();
        res.status(200).json(assignments);
    } catch (error) {
        res.status(500).json({ message: "Error fetching assignments", error });
    }
});

// 2. Add an assignment 
router.post('/', verifyToken, verifyAdmin, async (req, res) => {
    try {
        const newAssignment = new Assignment(req.body);
        const savedAssignment = await newAssignment.save();
        res.status(201).json(savedAssignment);
    } catch (error) {
        res.status(400).json({ message: "Error saving assignment", error });
    }
});

// 3.Update existing lab 
router.put('/update/:id', verifyToken, verifyAdmin, async (req, res) => {
    try {
      
        const updatePayload = {
            demoVideoUrl: req.body.demoVideoUrl,
            labManualLink: req.body.labManualLink,
            references: req.body.references
        };

       
        if (req.body.info && req.body.info.theory !== undefined) {
            updatePayload['info.theory'] = req.body.info.theory;
        }
        if (req.body.info && req.body.info.aim !== undefined) {
            updatePayload['info.aim'] = req.body.info.aim;
        }

        const updatedLab = await Assignment.findByIdAndUpdate(
            req.params.id,
            { $set: updatePayload },
            { new: true } // Returns the updated document
        );

        if (!updatedLab) return res.status(404).json({ message: "Lab not found" });

        res.status(200).json({ message: "Lab updated successfully!", lab: updatedLab });
    } catch (error) {
        console.error("Update Error:", error);
        res.status(500).json({ message: "Server error updating lab" });
    }
});

// 4. Create a new lab
router.post('/add-lab', verifyToken, verifyAdmin, async (req, res) => {
  try {
   
    const existingLabsCount = await Assignment.countDocuments({ subjectId: req.body.subjectId });
    
    
    const nextExperimentNumber = existingLabsCount + 1; 

    //  Create the lab
    const newLab = new Assignment({
      title: req.body.title,
      subjectId: req.body.subjectId,
      shortDesc: "Newly added experiment", 
      assignmentId: nextExperimentNumber,
      
     
      info: {
        aim: req.body.aim || "",      
        theory: req.body.theory || ""
      },
      quiz: req.body.quiz || [] 
    });

    const savedLab = await newLab.save();
    res.status(201).json(savedLab);
  } catch (error) {
    console.error("Error creating lab:", error);
    res.status(500).json({ message: "Server Error creating lab" });
  }
});

// Add quiz to an existing lab 
router.post('/:id/quiz', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const { questionText, options, correctAnswerIndex } = req.body;

    if (!questionText || !options || options.length < 2 || correctAnswerIndex === undefined) {
      return res.status(400).json({ message: "Invalid quiz data provided." });
    }

    const updatedLab = await Assignment.findByIdAndUpdate(
      req.params.id,
      { $push: { quiz: { questionText, options, correctAnswerIndex: Number(correctAnswerIndex) } } },
      { new: true }
    );

    if (!updatedLab) return res.status(404).json({ message: "Experiment not found." });

    res.status(200).json({ message: "Quiz question added!", lab: updatedLab });
  } catch (error) {
    console.error("Error adding quiz:", error);
    res.status(500).json({ message: "Server error adding quiz." });
  }
});
    
module.exports = router;