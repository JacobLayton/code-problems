// https://www.hackerrank.com/challenges/day-of-the-programmer/problem

// It should return a string representing the date of the 256th day of the year given.

function dayOfProgrammer(year) {
  let monthsLessFeb = 31 + 31 + 30 + 31 + 30 + 31 + 31;
  let feb = 28;

  if (year === 1918) {
    feb = 15;
  } else if (year < 1918 && year % 4 === 0) {
    feb = 29;
  } else if (
    (year > 1918 && year % 400 === 0) ||
    (year > 1918 && year % 4 === 0 && year % 100 != 0)
  ) {
    feb = 29;
  }

  let daysAway = 256 - (monthsLessFeb + feb);
  return `${daysAway}.09.${year}`;
}

console.log(dayOfProgrammer(2017)); // Should return "13.09.2017"
console.log(dayOfProgrammer(2016)); // Should return "12.09.2016"
console.log(dayOfProgrammer(1800)); // Should return "12.09.1800"
