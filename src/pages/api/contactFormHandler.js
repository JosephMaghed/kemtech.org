// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";

export default async function contactHandle(req, res) {
  const { Name, Email, Message, number, company } = req.body;

  // Open node mailer transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // create email payload
  const data = {
    from: Email,
    to: "h.mamdouh@kemtech.org",
    subject: `Kemtech.org Contact form submission from ${Name}`,
    html: `<h1>New Inquiry from Kemtech.org</h1>
      <h4>new contact form submission</h4><br>
        <p><strong>User name: </strong> ${Name}</p>
        <p><strong>User Email: </strong> ${Email}</p><br>
        <p><strong>Number: </strong> ${number}</p><br>
        <p><strong>Company: </strong> ${company}</p><br>
        <p><strong>Message: </strong> ${Message}</p><br>
      `,
  };

  transporter.sendMail(data, function (err, info) {
    if (err) {
      console.log(err);
      res.status(500).send();
    } else {
      console.log(info);
      res.status(200).send();
    }
  });
}
