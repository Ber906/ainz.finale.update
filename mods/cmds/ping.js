module.exports.config = {
    name: 'ping',
    version: '1.0.0',
    hasPermssion: 0,
    credits: '𝙰𝚒𝚗𝚣',
    usePrefix: false,
    description: 'Display Bot Ms/Ping',
    commandCategory: 'system',
    usages: '',
    cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
  var { body, senderID, threadID, messageID } = event;
  const moment = require("moment-timezone");
  var senderID = String(senderID),
    threadID = String(threadID);
  const dateNow = Date.now()
  const time = moment.tz("Asia/Manila").format("HH:MM:ss DD/MM/YYYY");
  const args = (body || '').trim().split(/ +/);
  const commandName = args.shift()?.toLowerCase();
  api.sendMessage(global.getText("handleCommand", "executeCommand", time, commandName, senderID, threadID, args.join(" "), (Date.now()) - dateNow), event.threadID);
};