const chalk = require('chalk');
const moment = require('moment');
const dateNow = moment().format("LLLL");
const dayOfYear = moment().format("DDD");
const seconds = moment().startOf('day');
const dls = moment().isDST();

console.log(chalk.blue('Hello world!'));

console.log(`It is ${chalk.blue(dateNow)}.`);

console.log(`It is the ${chalk.magenta(dayOfYear + 'th')} day of the year.`);

console.log(`It is ${chalk.yellow(moment().diff(seconds, 'seconds'))} seconds into the day.`);

if (dls) {
  console.log('It ' + chalk.green('is') + ' during Daylight Savings Time.');
} else {
  console.log('It ' + chalk.green('is not') + ' during Daylight Savings Time.');
}
