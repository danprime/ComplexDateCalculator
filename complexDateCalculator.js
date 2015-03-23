/**
 * Calculates a date like the 3rd Wednesday of November 2015
 * Returns a Javascript Date Object.
 *
 * PARAMETERS:
 * dayOfWeek (1 = Monday, 2 = Tuesday, ... ,7 = Sunday)
 * iterator (1 = First, 2 = Second, 3 = Third )
 * month (1 = January, 2 = February, ... , 12 = December)
 *
 * Example Usage:
 * Calculate the Labour Day (First Monday of September) = complexDateCalculator(1, 1, 9, 2015)
 * Calculate the Tuesday Third of July = complexDateCalculator(2, 3, 7, 2015)
 **/
function complexDateCalculator(dayOfWeek, iterator, month, year) {

  var myDate = new Date();
  myDate.setHours(0, 0, 0, 0);


  if (arguments.length == 3) {
    myDate.setYear(new Date().getFullYear())
  } else {
    myDate.setYear(year);
  }

  myDate.setDate(1);
  myDate.setMonth(month-1);

  // Find Day of week
  while(myDate.getDay() != dayOfWeek) {
    myDate.setDate(myDate.getDate() + 1);
  }

  // Add iterator weeks.
  myDate.setDate(myDate.getDate() + (iterator-1)*7);

  return myDate;
}