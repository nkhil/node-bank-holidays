const { bankHolidays } = require('../adapters');
const { serviceError } = require('../errors');

exports.listAllHolidays = async (req, res) => {
  const holidays = await bankHolidays.listAllHolidays();
  res.json(holidays);
};

exports.test = (req, res) => {
  res.json('Hello World');
};


// module.exports = {
//   list
// };

// const rp = require('request-promise');

// let holidaysInEnglandAndWales;

// exports.getData = async (req, res) => {
//   const response = await rp({
//     url: 'https://www.gov.uk/bank-holidays.json',
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     json: true,
//     resolveWithFullResponse: true
//   });
//   holidaysInEnglandAndWales = response.body['england-and-wales'].events;
//   return holidaysInEnglandAndWales;
// };

// exports.futureHolidays = async (req, res) => {
//   const holidaysInEnglandAndWales = await this.getData();
//   console.log(holidaysInEnglandAndWales);
//   res.json(holidaysInEnglandAndWales);
// };
