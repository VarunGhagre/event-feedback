const express = require("express");
const cors = require("cors");
require("dotenv").config();
const feedbackRoutes = require("./routes/feedbackRoutes");

const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.json({
        message: "Event Feedback Management API is running"
    });
});

app.use("/api/feedback", feedbackRoutes);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})