const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors(
    {
        origin: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        exposedHeaders: ["Content-Type", "Authorization"],
        credentials: true
    }
))

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  
  
  
app.post("/contact",async (req, res) => {
      
      const { name, email, message } = req.body;
    
      const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: `New Contact Us Message from ${name}`,
        html: `
          <h3>Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      };
    
      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully!'});
      } 
      catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Failed to send message. Please try again later.' });
      }
  })


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})