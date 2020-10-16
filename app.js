
// const smsNotifier = require('./tools/smsNotifier');
const cron = require('node-cron');
const nodemailer = require('nodemailer');



const schedulemail = cron.schedule('* * * * * *', () => {
  

  const mailOptions = {
    from: 'chombadavies29@gmail.com',
    to: 'david@dataintegrated.co.ke',
    subject: 'cron job trials',
    text: 'there we get going',
  };
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    //   port: 587,
    auth: {
      user: 'chombadavies29@gmail.com',
      pass: '00ch3711',
    },
  });
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log('email sent ' + info.response);
    }
  });
  },
  {
    scheduled: true,
    timezone: "Africa/Nairobi"
  }
);



module.exports = {
  
  schedulemail
}
// const schedulesms = cron.schedule(
//   '* * * * * *',
//   () => {
//     return new Promise((resolve) => {
//       const smsTask = {
//         params: {
//           gsm: 254-728333742,
//           text: 'cron sms trials',
//           instName: 'Data Integrated Limited',
//           appName: 'Mobitill Driver Service',
//         },
//       };
//       resolve(smsNotifier( smsTask));
//     });
//   },
//   {
//     scheduled: true,
//     timezone: 'Africa/Nairobi',
//   }
// );

// module.exports = {
//   schedulesms,

// };
