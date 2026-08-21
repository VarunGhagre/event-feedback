const express = require("express");

const {
  createFeedback,
  getAllFeedback,
} = require("../controllers/feedbackController");

const router = express.Router();

// Create feedback
router.post("/", createFeedback);

// Get all feedback
router.get("/", getAllFeedback);

module.exports = router;