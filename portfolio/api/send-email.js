// Simple Node.js Express API endpoint for sending email using nodemailer
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Configure your Gmail credentials here (use environment variables in production!)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "harshharsh811811@gmail.com", // your Gmail
    pass: "YOUR_APP_PASSWORD", // use an App Password, not your real password
  },
});

app.post("/api/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    await transporter.sendMail({
      from: email,
      to: "harshharsh811811@gmail.com",
      subject: subject || "Contact from Portfolio",
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Email API running on port ${PORT}`));
