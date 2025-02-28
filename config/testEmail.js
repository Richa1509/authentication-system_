import transporter from "./emailConfig.js";

let mailOptions = {
    from: process.env.EMAIL_USER,
    to: "recipient@example.com",
    subject: "Test Email",
    text: "Hello, this is a test email from Nodemailer!"
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Email sent:", info.response);
    }
});
