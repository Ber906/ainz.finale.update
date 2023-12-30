module.exports.config = {
  name: "rs",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Ainz",
  description: "restart ai",
  usePrefix: false,
  commandCategory: "no prefix",
  usage: "rs",
  cooldowns: 3,
};
module.exports.run = async ({ api, event, args }) => {
const { threadID, messageID } = event;
  return api.sendMessage(`[ OK ] • ${global.config.BOTNAME} The bot are now restarting...`, threadID, () => process.exit(1), messageID);
 };