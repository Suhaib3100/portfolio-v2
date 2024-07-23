// src/actions/send-email-nodemailer.ts

import nodemailer from 'nodemailer';

interface FormData {
  email: string;
  title: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'connect@agency.quickrisers.com',
    pass: 'Zaka310@',
  },
});

const emailTemplate = (title: string, message: string, senderEmail: string, footerText: string) => `
  <html>
    <head>
      <style>
        body {
          background-color: #1f1f1f;
          color: #e0e0e0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: auto;
          background-color: #2c2c2c;
          border: 1px solid #333;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }
        .header {
          background-color: #1f1f1f;
          text-align: center;
          padding: 20px;
        }
        .header img {
          max-width: 150px;
        }
        .content {
          padding: 20px;
        }
        .content h2 {
          color: #ffffff;
          font-size: 24px;
          margin-bottom: 10px;
        }
        .content p {
          color: #e0e0e0;
          font-size: 16px;
          margin: 0 0 10px;
        }
        .footer {
          background-color: #1f1f1f;
          text-align: center;
          padding: 10px;
          color: #666;
        }
        .footer p {
          margin: 0;
          font-size: 14px;
        }
        hr {
          border: 0;
          border-top: 1px solid #333;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://protool.cloud/logosaas.png" alt="Protool Logo" />
        </div>
        <div class="content">
          <h2>${title}:</h2>
          <p>${message}</p>
          <hr/>
          <p>Sender Email: ${senderEmail}</p>
        </div>
        <div class="footer">
          <p>${footerText}</p>
        </div>
      </div>
    </body>
  </html>
`;

export const sendEmailNodemailer = async (formData: FormData) => {
  const { email, title, message } = formData;

  // Set up email data for admin notification
  const adminMailOptions = {
    from: '"Contact Form" <connect@agency.quickrisers.com>',
    to: 'suhaibking310@gmail.com',
    subject: `Protool Message from ${email}`,
    html: emailTemplate(title, message, email, 'Powered by Suhaib King'),
  };

  // Set up email data for user confirmation
  const userMailOptions = {
    from: '"Contact Form" <connect@agency.quickrisers.com>',
    to: email,
    subject: 'Thank you for reaching out!',
    html: emailTemplate(
      'Thank You for Your Submission',
      'We have received your message and will get back to you soon. If you have any urgent concerns, please feel free to contact us.',
      email,
      'Powered by Suhaib King'
    ),
  };

  // Send admin notification email
  try {
    const adminInfo = await transporter.sendMail(adminMailOptions);
    console.log('Admin message sent: %s', adminInfo.messageId);
  } catch (error) {
    console.error('Error sending admin email: %s', error);
    return { error };
  }

  // Send user confirmation email
  try {
    const userInfo = await transporter.sendMail(userMailOptions);
    console.log('User confirmation sent: %s', userInfo.messageId);
    return { success: true, messageId: userInfo.messageId };
  } catch (error) {
    console.error('Error sending user confirmation email: %s', error);
    return { error };
  }
};
