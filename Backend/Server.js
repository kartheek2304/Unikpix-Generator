// const express = require("express");
// const nodemailer = require("nodemailer");
// const app = express();
// app.use(express.json());
// const PORT = 8000;
// app.post("/send-email", (req, res) => {
//   const { name, email, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: "karamsettikartheek@gmail.com",
//       pass: "123456",
//     }
//   });
//   const mailOptions = {
//     from: "karamsettikartheek@gmail.com",
//     to: "karamsettikartheek@gmail.com",
//     subject: "New Coontact form submission",
//     text: `
//     Name:${name}
//     Email:${email}
//     Message:${message}`,
//     // text:'im the man'
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log("kar2 Error", error);
//       res.status(500).json({ success: false, message: "Error sending mail" });
//     } else {
//       console.log("Email Sent", info.response);
//       res.status(200).json({ success: true, message: "Email Sent Successfully" });
//     }
//   });
// });
// app.listen(PORT, () => {
//   console.log(`Listening on PORT ${PORT}`);
// });

// // const express = require('express');
// // const nodemailer = require('nodemailer');

// // const app = express();
// // app.use(express.json());

// // const PORT = 8000;

// // app.post('/send-email', (req,res)=>{
// //     const {name, email, message} = req.body;

// //     const transporter = nodemailer.createTransport({
// //         host: "smtp.gmail.com",
// //         port: 587,
// //         secure: false,
// //         auth: {
// //           user: 'karamsettikartheek23@gmail.com',
// //           pass: '8897479004'
// //         }
// //       });

// //       const mailOptions = {
// //         from: email,
// //         to: 'karamsettikartheek@gmail.com',
// //         subject: 'New Contact Form Submission',
// //         html: `
// //         Name: ${name}
// //         Email: ${email}
// //         Message: ${message}
// //         <h1>Hello</h1>
// //         `,
// //       };

// //       transporter.sendMail(mailOptions, (error, info)=>{
// //         if(error){
// //             console.log('DEV2 ERROR: - ',error);
// //             res.status(500).json({success: false, message: 'Error sending mail!!'})
// //         }else{
// //             console.log("Email Sent!!", info.response);
// //             res.status(200).json({success: true, message:"Email Sent successfully!!"})
// //         }
// //       })
// // });

// // app.listen(PORT, ()=>{
// //     console.log(`Server Running at ${PORT}`)
// // })






const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

const PORT = 8000;

app.post('/send-email', (req,res)=>{
    const {name, email, message} = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: 'kartheekkaramsetti23@gmail.com',
          pass: 'yvnehartmaobznvw'
        }
      });

      const mailOptions = {
        from: email,
        to: 'kartheekkaramsetti23@gmail.com',
        subject: 'New Contact Form Submission',
        html: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
        <h1>Hello</h1>
        `,
      };

      transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log('DEV2 ERROR: - ',error);
            res.status(500).json({success: false, message: 'Error sending mail!!'})
        }else{
            console.log("Email Sent!!", info.response);
            res.status(200).json({success: true, message:"Email Sent successfully!!"})
        }
      })
});



app.listen(PORT, ()=>{
    console.log(`Server Running at ${PORT}`)
})