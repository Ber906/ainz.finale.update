const chalk = require('chalk');
//const notifier = require('node-notifier');
console.log(chalk.bold.cyan(`\n` + `𝙴𝙽𝙲𝚁𝚈𝙿𝚃𝙸𝙽𝙶 𝚃𝙷𝙴 𝙰𝙿𝙿𝚂𝚃𝙰𝚃𝙴 𝙿𝙻𝙴𝙰𝚂𝙴 𝚆𝙰𝙸𝚃. . .\n`));

module.exports = (str, end) => {
  console.log(chalk.hex('#b51212')(`[ ${end || '𝙻𝙾𝙶𝙸𝙽'} ] • `) + str);
};
module.exports.onLogger = (str,end,ctscolor) => { 
  var checkbutdak = ctscolor.replace("#",'');
  if (ctscolor.indexOf('#') != 1) {
    console.log(chalk.hex('#b51212')(`[ ${end || '𝙻𝙾𝙶𝙸𝙽'} ] • `) + str);
  }
  else if (!isNaN(checkbutdak)) {
    console.log(chalk.hex('#b51212')(`[ ${end || '𝙻𝙾𝙶𝙸𝙽'} ] • `) + str);
  } 
  else console.log(chalk.hex('#b51212')(`[ ${end || '𝙻𝙾𝙶𝙸𝙽'} ] • `) + str);
}
