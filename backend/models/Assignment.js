const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  assignmentId: {
    type: Number,
    required: true

  },

  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject'
  },
  title: { type: String, required: true },
  shortDesc: { type: String },
  info: {
    aim: String,
    theory: {
      type: String,
      default: ""
    },
  },
  demoVideoUrl: { type: String },
  quiz: [
    {
      questionText: String,
      options: [String],
      correctAnswerIndex: Number
    }
  ],
  tryYourself: {
    link: String
  },
  references: [
    {
      title: String,
      url: String
    }
  ],
  labManualLink: String,
  isActive: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Assignment', assignmentSchema);