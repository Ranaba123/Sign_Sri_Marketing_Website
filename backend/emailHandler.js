const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001; // Backend server port

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email endpoint
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Configure the transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'process.env.EMAIL_USER', // Replace with your admin email
      pass: 'process.env.EMAIL_PASS', // Replace with your admin email password or app-specific password
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    to: 'signsri.official@gmail.com', // Admin's email
    subject: `Message from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
