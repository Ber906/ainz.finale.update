module.exports.config = {
  name: "rsql",
  version: "7.0.0",
  hasPermssion: 2,
  credits: "𝙰𝚒𝚗𝚣",
  usePrefix: false,
  description: "reset database",
  commandCategory: "no prefix",
  usages: "[shell]",
  cooldowns: 0,
  dependencies: {
    "child_process": "",
    "process": ""
  }
};
module.exports.run = async function({ api, event, args, Threads, Users, Currencies, models, getText }) {  
const { exec } = require("child_process");
const process = require("process");
const { threadID, messageID } = event;
let text = args.join(" ")
exec(`rm -rf ../../configs/system/datasqlite/kyouya.sqlite`, (error, stdout, stderr) => {
    if (error) {
        api.sendMessage(`error : \n${error.message}`, event.threadID, event.messageID);
        return;
    }
    if (stderr) {
        api.sendMessage(`stderr : ${stderr}`, event.threadID, event.messageID);
        return;
    }
    return api.sendMessage(`🟣| 𝚂𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢 𝚛𝚎𝚜𝚎𝚝 𝚝𝚑𝚎 𝚍𝚊𝚝𝚊𝚋𝚊𝚜𝚎, 𝚁𝚎𝚜𝚝𝚊𝚛𝚝𝚒𝚗𝚐 𝚙𝚕𝚎𝚊𝚜𝚎 𝚋𝚎 𝚙𝚊𝚝𝚒𝚎𝚗𝚝.`, threadID, (e, info) => {
      setTimeout(() => {
        process.exit(1)
      }, 1000)
  });
});
}