import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// 1. Email Bhejne Wala Setup (Sender)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // Yahan wo email dalein jiske App Password se email bheja jayega
    // Agar aap chahte hain ki email bhi aapki hi ID se jaye, to yahan apni ID likhein
    user: "atharvkumar43@gmail.com", 
    
    // Yahan wo 16-digit App Password dalein jo aapne Google Account se banaya hai
    // (Ye aapka normal Gmail password nahi hai)
    pass: "teim rbez bjrr thiq", 
  },
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, company, phone, message, type } = req.body;

  const mailOptions = {
    from: email, // Form bharne wale ka email (sirf dikhane ke liye)
    
    // 2. Email Kis Par Aana Chahiye (Receiver) -> Yahan aapki ID aayegi
    to: "atharvkumar43@gmail.com", 
    
    subject: `New Lead: ${type} from ${name}`,
    html: `
      <h3>New Submission Received</h3>
      <p><strong>Type:</strong> ${type}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to atharvkumar43@gmail.com");
    res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});