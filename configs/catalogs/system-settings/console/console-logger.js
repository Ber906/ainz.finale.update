const chalk = require('chalk');
const gradient= require('gradient-string');
const chalkAnimation = require('chalkercli');
const color = gradient('blue', 'purple');
const crayon = gradient('yellow', 'lime', 'green');
const blu = gradient("#243aff", "#4687f0", "#5800d4");
const sky = gradient('#0905ed','#346eeb', '#344feb');

module.exports = (text, type) => {
  switch (type) {
    case "warn":
      process.stderr.write(color(`[ 𝚆𝙰𝚁𝙽 ] •`) + text + '\n');
      break;
    case "error":
      process.stderr.write(chalk.bold.hex("#ff0000").bold(`[ 𝙴𝚁𝚁𝙾𝚁 ] •`) + text + '\n');
      break;
    case "load":
      process.stderr.write(blu(`[ 𝙽𝙴𝚆 𝚄𝚂𝙴𝚁 ] •`) + text + '\n');
      break;
    default:
      process.stderr.write(sky(`${String(type)}`) + text + '\n');
      break;
  }
};
module.exports.error = (text, type) => {
  process.stderr.write(chalk.hex("#ff0000")(`[ 𝙴𝚁𝚁𝙾𝚁 ] •`) + text + '\n');
};

module.exports.err = (text, type) => {
  process.stderr.write(chalk.hex("#ff0000")(`[ 𝙴𝚁𝚁𝙾𝚁 ] •`) + text) + '\n';
};

module.exports.warn = (text, type) => {
  process.stderr.write(crayon(`[ 𝚆𝙰𝚁𝙽 ] •`) + text + '\n');
};

module.exports.commands = (text, type) => {
  process.stderr.write(blu(`[ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 ] •`) + text + '\n');
};

module.exports.events = (text, type) => {
  process.stderr.write(blu(`[ 𝙴𝚅𝙴𝙽𝚃 ] •`) + text + '\n');
};

module.exports.warn = (text, type) => {
  process.stderr.write(crayon(`[ 𝚆𝙰𝚁𝙽 ] •`) + text + '\n');
};

module.exports.loader = (data, option) => {
  switch (option) {
    case "warn":
      process.stderr.write(crayon(`[ 𝚆𝙰𝚁𝙽 ] •`) + data + '\n');
      break;
    case "error":
      process.stderr.write(chalk.hex("#ff0000")(`[ 𝙴𝚁𝚁𝙾𝚁 ] •`) + data + '\n');
      break;
    default:
      process.stderr.write(blu(`[ 𝙺𝚈𝙾𝚄𝚈𝙰 ] •`) + data + '\n');
      break;
  }
                  }