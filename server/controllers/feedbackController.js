const Feedback = require("../models/Feedback");

// Create feedback
const createFeedback = async (req, res) => {
  try {
    const { name, email, event, rating, message } = req.body;

    // Basic validation
    if (!name || !email || !event || !rating || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const feedback = await Feedback.create({
      name,
      email,
      event,
      rating,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      feedback,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to submit feedback",
      error: error.message,
    });
  }
};

// Get all feedback
const getAllFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: feedback.length,
      feedback,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch feedback",
      error: error.message,
    });
  }
};

module.exports = {
  createFeedback,
  getAllFeedback,
};