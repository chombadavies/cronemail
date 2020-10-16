const request = require('request-promise');
// const { APIError } = require('../lib/errors')

module.exports = async function sendSMS(recipient) {
  const smsTask = {
    method: 'POST',
    uri: 'http://178.79.191.79:6093/sms/res/request/send',
    body: recipient,
    json: true, // Automatically stringifies the body to JSON
  };

  return request(smsTask)
    .then((parsedBody) => parsedBody)
    .catch(() => {
      throw new APIError('We cant log you in at this time, try again later.')
    });
};
