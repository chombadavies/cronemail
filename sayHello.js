

// const cron = require('node-cron');

// const mailOptions = {
//   from: 'chombadavies29@gmail.com',
//   to: 'david@dataintegrated.co.ke',
//   subject: 'cron job trials',
//   text: 'there we get going',
// };

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   //   port: 587,
//   auth: {
//     user: 'chombadavies29@gmail.com',
//     pass: '00ch3711',
//   },
// });

// const schedulemail = cron.schedule( '* * * * * *',() => {
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.send(error);
//     } else {
//       console.log('email sent ' + info.response);
//     }
//   });
//   },
//   {
//     scheduled: true,
//     timezone: "Africa/Nairobi"
//   }
// );



// module.exports = {
  
//   schedulemail
// }