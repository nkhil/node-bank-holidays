const { bankHolidays } = require('../adapters');
const { serviceError } = require('../errors');
const helpers = require('../helpers');

exports.listAllHolidays = async (req, res) => {
  const holidays = await bankHolidays.listAllHolidays();
  res.json(holidays);
};

exports.futureHolidays = async (req, res) => {
  const response = await bankHolidays.listAllHolidays();
  const holidays = response['england-and-wales'].events;
  const holidaysInTheFuture = helpers.holidaysInTheFuture(holidays);
  res.json(holidaysInTheFuture);
};
