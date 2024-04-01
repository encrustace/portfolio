"use server"
import nodemailer from "nodemailer";


export default async function sendEmail(response) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        })
        const mailOptions = {
            from: "encrustfolio@gmail.com",
            to: "encrustace@gmail.com",
            subject: "Message from " + response.name,
            text: "New Message",
            html: htmlBody(response)
        }
        const resp = await transporter.sendMail(mailOptions)
        console.log('Email sent successfully!', resp);
        return JSON.stringify(resp); // Returning info for further processing if needed
    } catch (error) {
        console.error('Error occurred:', error.message);
        throw error; // Rethrow error for handling outside

    }
}

function htmlBody(response) {
    return (
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>OTP Email</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f2f2f2;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    padding: 20px;
                    background-color: #ffffff;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                p {
                    text-align: center;
                    font-size: 18px;
                }
                .message {
                    font-size: 24px;
                    text-align: center;
                    padding: 20px;
                    background-color: #10CB8A;
                    color: #ffffff;
                    border-radius: 8px;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <p>You have received message from: ${response.name}</p>
                <p>Email: ${response.email}</p>
                <p>Mobile: ${response.phone}</p>
                <div class="message">${response.message}</div>
            </div>
        </body>
        </html>
        `
    )
}