const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    
    
    yearCode: { type: String },
    admissionYear: { type: String },
    branch: { type: String },
    rollNo: { type: String },
    isAdmin: { type: Boolean, default: false },
    labScores: [{
        assignmentId: { type: Number },
        score: { type: Number },
        maxScore: { type: Number },
        completedAt: { type: Date, default: Date.now }
    }],
   completedLabs: [
  {
    assignmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Assignment'
    },
    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject'
    },
    score: Number,
    completedAt: {
      type: Date,
      default: Date.now
    }
  }
],
    yearOfStudy: { 
        type: String, 
        enum: ['SE', 'TE', 'BE','Faculty'], 
        required: true 
    },
isAdmin: {
      type: Boolean,
      default: false
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
    
}, 

{ timestamps: true });

module.exports = mongoose.model('User', userSchema);