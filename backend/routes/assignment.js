const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Assignment = require('../models/Assignment');
const Subject = require('../models/Subject');
const verifyToken = require('../middleware/verifyToken');
const verifyAdmin = require('../middleware/verifyAdmin');



// get all subjects
router.get('/subjects', async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching subjects", error });
  }
});

// create a new subject
router.post('/subjects', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const newSubject = new Subject({
      name: req.body.name,
      year: req.body.year || "SE",
      semester: req.body.semester || 3,
      icon: req.body.icon || "📚",
      color: req.body.color || "#102b51"
    });
    const savedSubject = await newSubject.save();
    res.status(201).json(savedSubject);
  } catch (error) {
    console.error("Error creating subject:", error);
    res.status(500).json({ message: "Server Error creating subject" });
  }
});
//add reference
router.put('/subjects/:id/references', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const updated = await Subject.findByIdAndUpdate(
      req.params.id,
      { references: req.body.references },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Subject not found" });
    res.status(200).json({ message: "References updated!", subject: updated });
  } catch (error) {
    console.error("Error updating references:", error);
    res.status(500).json({ message: "Server error updating references." });
  }
});

// delete subject
router.delete('/subjects/:id', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const subjectId = req.params.id;

    const deletedSubject = await Subject.findByIdAndDelete(subjectId);
    if (!deletedSubject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    //delete labs
    await Assignment.updateMany(
      { subjectId },
      { isActive: false }
    );

    res.status(200).json({ message: "Subject and its labs deleted successfully!" });
  } catch (error) {
    console.error("Error deleting subject:", error);
    res.status(500).json({ message: "Server error deleting subject." });
  }
});

//get lab by subject
router.get('/subject/:subjectId', async (req, res) => {
  try {
    const assignments = await Assignment.find({
      subjectId: req.params.subjectId,
      isActive: { $ne: false }
    }).sort({ assignmentId: 1 });

    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching labs", error });
  }
});

// get all assignments
router.get('/', async (req, res) => {
  try {
    const assignments = await Assignment.find({
      isActive: { $ne: false }
    }).sort({ assignmentId: 1 });

    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching assignments", error });
  }
});

//add a  assignment
router.post('/', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const newAssignment = new Assignment(req.body);
    const savedAssignment = await newAssignment.save();
    res.status(201).json(savedAssignment);
  } catch (error) {
    res.status(400).json({ message: "Error saving assignment", error });
  }
});

// update lab
router.put('/update/:id', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const updatePayload = {
      demoVideoUrl: req.body.demoVideoUrl,
      labManualLink: req.body.labManualLink,
      references: req.body.references,
    };

    if (req.body.info?.theory !== undefined) {
      updatePayload['info.theory'] = req.body.info.theory;
    }
    if (req.body.info?.aim !== undefined) {
      updatePayload['info.aim'] = req.body.info.aim;
    }
    if (Array.isArray(req.body.quiz)) {
      updatePayload.quiz = req.body.quiz;
    }

    const updatedLab = await Assignment.findByIdAndUpdate(
      req.params.id,
      { $set: updatePayload },
      { new: true }
    );

    if (!updatedLab) return res.status(404).json({ message: "Lab not found" });

    res.status(200).json({ message: "Lab updated successfully!", lab: updatedLab });
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ message: "Server error updating lab" });
  }
});

// new lab
router.post('/add-lab', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const existingLabsCount = await Assignment.countDocuments({
      subjectId: req.body.subjectId,
      isActive: { $ne: false }
    });

    const newLab = new Assignment({
      title: req.body.title,
      subjectId: req.body.subjectId,
      shortDesc: "Newly added experiment",
      assignmentId: existingLabsCount + 1,
      isActive: true,
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

//delete lab
router.delete('/:id', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const deletedLab = await Assignment.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!deletedLab) {
      return res.status(404).json({ message: "Lab not found" });
    }

    res.status(200).json({ message: "Lab deleted successfully!" });
  } catch (error) {
    console.error("Error deleting lab:", error);
    res.status(500).json({ message: "Server error deleting lab." });
  }
});

//add quiz
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

//get assignment
router.get('/:id', async (req, res) => {
  try {
    let assignment;
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
      assignment = await Assignment.findOne({
        _id: req.params.id,
        isActive: { $ne: false }
      });
    } else {
      const dbmsSubject = await Subject.findOne({ name: "Database Management Systems Lab" });
      if (dbmsSubject) {
        assignment = await Assignment.findOne({
          assignmentId: Number(req.params.id),
          subjectId: dbmsSubject._id,
          isActive: { $ne: false }
        });
      }
    }
    if (!assignment) return res.status(404).json({ message: "Assignment not found" });
    res.status(200).json(assignment);
  } catch (error) {
    console.error("Error fetching assignment:", error);
    res.status(500).json({ message: "Server Error" });
  }
});
module.exports = router;