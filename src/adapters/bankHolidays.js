const rp = require('request-promise');
const { ServiceError } = require('../errors');

const listAllHolidays = async () => {
  try {
    const response = await rp({
      url: 'https://www.gov.uk/bank-holidays.json',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      json: true,
      resolveWithFullResponse: true
    });
    console.log({ message: 'Successfully retrieved bank bolidays' });
    return response.body;
  } catch (err) {
    console.log({ err: err.message, message: 'Error Obtaining bank holidays' });
    throw new ServiceError(err);
  }
};

module.exports = {
  listAllHolidays
};
