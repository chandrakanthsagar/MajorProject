const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gobburichandrakanth7656@gmail.com',
    pass: 'jitd wogw tquq ydzs '
  }
});

const newregistration= async (email,Name,password)=>{
    const mailOptions = {
        from: 'Chandrakanth.gobburi@kore.com',
        to: email,
        subject: `Welcome to Sports Schedular Web Application, ${Name}!`,
        html: `
        <html>
        <head>
            <style>
                p {
                    margin: 0px;
                    margin-bottom:10px;
                }
            </style>
        </head>
        <body>
            <h3>Dear ${Name},</h3>
            <p>Welcome to the Sports Session Management System! We're thrilled to have you join us and excited for the incredible things you can achieve with your new account.</p>
        
            <p>Your username is: ${email}</p>
            and Password is : ${password}</p>
        
            <p>To get started, simply head over to the Sports Schedular Web Application and sign in using your username and password.</p>
        
            <p>If you have any questions or need assistance, please don't hesitate to reach out to our support team. We're always happy to help!</p>
        
            <p>Welcome aboard, and again, thank you for choosing Sports Schedular Web Application!</p>
        
            <p>Best regards,</p>
        
            <p>The Sports Schedular Web Application Team</p>
        
            <p>The Data Privacy Team</p>
        </body>
        </html>
        
        `
      };

      await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
        } else {
          console.log(`Email sent: ${info.response}`);
        }
      });
}



module.exports ={
  newregistration,
}
