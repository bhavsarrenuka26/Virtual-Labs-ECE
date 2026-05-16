const express = require('express');
const router = express.Router();
const OpenAI = require('openai');
const mongoose = require('mongoose');

const Lab = require('../models/Assignment');

//open router client
const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,

  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5173",
    "X-Title": "Viro AI",
  },
});

//AI route
router.post('/ask', async (req, res) => {

  try {

    const { question, labId } = req.body;

    //validation
    if (!question || !question.trim()) {
      return res.status(400).json({
        error: "Question is required"
      });
    }

    //non academic filter
    const forbiddenTopics = [
      "recipe",
      "cook",
      "cooking",
      "food",
      "paneer",
      "kulfi",
      "movie",
      "movies",
      "actor",
      "actress",
      "cricket",
      "football",
      "politics",
      "religion",
      "relationship",
      "love",
      "girlfriend",
      "boyfriend",
      "dating",
      "instagram",
      "tiktok",
      "fashion",
      "celebrity",
      "song",
      "music"
    ];

    const lowerQuestion = question.toLowerCase();

    const isForbidden = forbiddenTopics.some(topic =>
      lowerQuestion.includes(topic)
    );

    if (isForbidden) {
      return res.json({
        answer:
          "I'm designed to assist with academic and virtual lab related topics only."
      });
    }

    //system prompt
    let systemPrompt = "";

   //1 - lab sepecific 
    if (labId && mongoose.Types.ObjectId.isValid(labId)) {

      const currentLab = await Lab.findById(labId);

      if (!currentLab) {
        return res.status(404).json({
          error: "Lab not found"
        });
      }

      systemPrompt = `
You are Viro AI, an expert academic assistant for a Virtual Labs platform.

The student is currently performing this experiment.

Lab Title:
${currentLab.title}

Lab Aim:
${currentLab.aim}

Lab Theory:
${currentLab.theory?.slice(0, 2000)}

STRICT RULES:
1. Answer ONLY academic and technical questions.
2. Stay strictly related to the current experiment.
3. Help students understand concepts clearly.
4. Do not directly solve quizzes or assignments.
5. Use short structured explanations.
6. If the question is unrelated, reply:
"I'm designed to assist with academic and virtual lab related topics only."

Student Question:
${question}
`;
    }

   //2 - Global
    else {

      systemPrompt = `
You are Viro AI, a smart academic assistant for a Virtual Labs platform.

You ONLY help with:
- academics
- engineering
- electronics
- coding
- networking
- communication systems
- embedded systems
- programming
- virtual lab experiments
- technical concepts

STRICT RULES:
1. Refuse all non-academic questions.
2. Never answer cooking, entertainment, celebrities, politics, relationships, religion, or social topics.
3. For unrelated topics, ONLY reply:
"I'm designed to assist with academic and virtual lab related topics only."

4. Keep answers concise and structured.
5. Maintain a professional and student-friendly tone.

Student Question:
${question}
`;
    }

    //response
    const completion = await client.chat.completions.create({

      model: "openai/gpt-3.5-turbo",

      messages: [
        {
          role: "system",
          content: systemPrompt,
        }
      ],

      max_tokens: 300,

    });
//final ans
    const answer =
      completion.choices[0]?.message?.content ||
      "No response generated.";

    res.json({ answer });

  } catch (error) {

    console.error("AI Error:", error);

    //rate limit
    if (error.status === 429) {
      return res.status(429).json({
        error: "AI rate limit exceeded. Try again later."
      });
    }

   //api error
    if (error.status === 404) {
      return res.status(404).json({
        error: "AI model unavailable."
      });
    }

    //general error
    res.status(500).json({
      error: "Viro AI is currently unavailable."
    });

  }

});

module.exports = router;