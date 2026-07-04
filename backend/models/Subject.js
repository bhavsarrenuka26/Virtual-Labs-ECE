const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  year: { 
    type: String, 
    required: true,
    enum: ['SE', 'TE', 'BE'] 
  },
  semester: { 
    type: Number, 
    required: true 
  },
  icon: { 
    type: String 
  },
  description: { 
    type: String 
  },
  color: { 
    type: String 
  },
  
   references: [
    {
      title: { type: String, required: true }, 
      url:   { type: String, required: true },
    }
  ],
}, { timestamps: true });

module.exports = mongoose.model('Subject', subjectSchema);