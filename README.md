# ComplexDateCalculator
Calculates a complex date like 3rd wednesday of November
Returns a Javascript Date Object.

##PARAMETERS
* dayOfWeek (1 = Monday, 2 = Tuesday, ... ,7 = Sunday)
* iterator (1 = First, 2 = Second, 3 = Third )
* month (1 = January, 2 = February, ... , 12 = December)
* year - the year you want to calculate from (optional, if null, defaults to current year)

##Example Usage:
* Calculate the Labour Day (First Monday of September) = complexDateCalculator(1, 1, 9, 2015)

    Output: Date 2015-09-07T06:00:00.000Z
* Calculate the Third Tuesday of this year's July = complexDateCalculator(2, 3, 7)

    Output: Date 2015-07-21T06:00:00.000Z
