// /pages/api/send-mail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { firstName, shopName, phone, email } = req.body;

    // Basic validation
    if (!firstName || !shopName || !phone || !email) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    // Email content
    const mailOptions = {
        from: `"${firstName}" <${email}>`,
        to: process.env.ADMIN_EMAIL,
        subject: `📝 New Form Submission from ${firstName}`,
        text: `
New user submitted the form:

Name: ${firstName}
Shop Name: ${shopName}
Phone Number: ${phone}
Email: ${email}
        `.trim(),
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Nodemailer error:', error);
        return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
    }
}
