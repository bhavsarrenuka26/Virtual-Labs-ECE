const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

const User = require('../models/User');
const verifyToken = require('../middleware/verifyToken');
const verifyAdmin = require('../middleware/verifyAdmin')

// register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, yearOfStudy } = req.body;
    const lowerEmail = email.toLowerCase();

    let finalYearOfStudy = yearOfStudy;
    let admissionYear = "N/A", branch = "N/A", rollNo = "N/A", studentType = "N/A";
    let isAdminRole = false;

    const dsyRegex = /^s(\d{2})([a-z]{2})(\d{3})@(ms\.)?pict\.edu$/;
    const regularRegex = /^(c|i|e|ece|aids)2k(\d{2})(\d{1,4})@(ms\.)?pict\.edu$/;
    const facultyRegex = /^[a-z0-9.]+@pict\.edu$/;

    if (dsyRegex.test(lowerEmail)) {
      const match = lowerEmail.match(dsyRegex);
      studentType = "DSY";
      admissionYear = match[1];
      branch = match[2];
      rollNo = match[3];


      if (finalYearOfStudy === "Faculty") {
        return res.status(400).json({ message: "Student emails cannot register as Faculty." });
      }

    } else if (regularRegex.test(lowerEmail)) {
      const match = lowerEmail.match(regularRegex);
      studentType = "Regular";
      branch = match[1];
      admissionYear = match[2];
      rollNo = match[3];


      if (finalYearOfStudy === "Faculty") {
        return res.status(400).json({ message: "Student emails cannot register as Faculty." });
      }

    } else if (facultyRegex.test(lowerEmail)) {
      studentType = "Faculty";
      branch = "Faculty";
      isAdminRole = true;
      finalYearOfStudy = "Faculty";

    } else {
      return res.status(400).json({
        message: "Must use a valid PICT email (e.g., s24ec006@ms.pict.edu)"
      });
    }

    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message: "Password must be at least 8 characters long, include a number, and a special symbol."
      });
    }



    const existingUser = await User.findOne({ email: lowerEmail });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Encrypt  the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    const newUser = new User({
      name,
      email: lowerEmail,
      password: hashedPassword,
      yearOfStudy: finalYearOfStudy,
      admissionYear,
      branch,
      rollNo,
      isAdmin: isAdminRole
    });


    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
});

// login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const lowerEmail = email.toLowerCase();

    // Find the user
    const user = await User.findOne({ email: lowerEmail });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Generate the Token 
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    // Send the token and user info 
    res.status(200).json({
      token,
      user: { id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin }
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
});
// get profile

router.get('/me', verifyToken, async (req, res) => {
  try {

    const rawUser = await User.findById(req.user.id);



    const user = await User.findById(req.user.id)
      .select('-password')
      .populate({
        path: 'completedLabs.assignmentId',
        populate: {
          path: 'subjectId',
          model: 'Subject'
        }
      });


    const validLabs = user.completedLabs.filter(lab => lab.assignmentId != null);


    const userResponse = {
      ...user._doc,
      completedLabs: validLabs
    };

    res.json(userResponse);

  } catch (error) {
    console.error("Profile Fetch Error:", error);
    return res.status(500).json({ message: "Error fetching profile" });
  }
});


// submit quiz
router.post('/submit-quiz', verifyToken, async (req, res) => {
  try {
    const { assignmentId, score } = req.body;


    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });


    const alreadyCompleted = user.completedLabs.find(
      (lab) => lab.assignmentId.toString() === assignmentId
    );

    if (alreadyCompleted) {
      if (score > alreadyCompleted.score) {
        alreadyCompleted.score = score;

      } else {
        return res.status(200).json({ message: "Score submitted, but previous score was higher!" });
      }
    } else {

      user.completedLabs.push({ assignmentId, score });
    }
    await user.save();

    res.status(200).json({
      message: "First attempt completed! Your score has been officially recorded.",
      isFirstAttempt: true,
      score: score
    });

  } catch (error) {
    console.error("Error submitting quiz:", error);
    res.status(500).json({ message: "Server error while submitting quiz." });
  }
});

//forgot password

router.post('/forgot-password', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ error: "No user found with this email" });
    }

    const resetToken = crypto.randomBytes(20).toString('hex');

    user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    user.resetPasswordExpire = Date.now() + 15 * 60 * 1000; // 15 minutes
    await user.save();

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

    const message = `
      <h1>You requested a password reset</h1>
      <p>Please click on the following link to reset your password:</p>
      <a href="${resetUrl}" clicktracking=off>${resetUrl}</a>
      <p>This link will expire in 15 minutes.</p>
      <p>If you did not request this, please ignore this email.</p>
    `;

    await resend.emails.send({
      from: 'ECE-Virtual-Labs <onboarding@resend.dev>',
      to: user.email,
      subject: 'Virtual Labs - Password Reset',
      html: message
    });

    res.status(200).json({ message: "Email sent successfully!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Email could not be sent" });
  }
});

//Reset Password 
router.put('/reset-password/:token', async (req, res) => {
  try {
    const resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ error: "Invalid or expired token" });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.status(200).json({ message: "Password updated successfully!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
module.exports = router;