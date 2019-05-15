exports.checkIfHolidayIsInFuture = holiday => {
  if (Date.parse(holiday.date) > Date.parse(new Date())) {
    return true;
  }
  return false;
};

exports.holidaysInTheFuture = holidays => {
  const futureHolidays = [];
  holidays.map(holiday =>
    this.checkIfHolidayIsInFuture(holiday) ? futureHolidays.push(holiday) : ''
  );
  return futureHolidays;
};
