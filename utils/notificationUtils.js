// notificationUtils.js
const nodemailer = require('nodemailer');

// Function to send email notification
const sendEmail = async (to, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            // SMTP configuration (e.g., Gmail SMTP)
            service: 'gmail',
            auth: {
                user: 'your_email@gmail.com', // Sender email
                pass: 'your_password' // Sender password
            }
        });

        const mailOptions = {
            from: 'your_email@gmail.com',
            to: to,
            subject: subject,
            text: text
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = { sendEmail };
