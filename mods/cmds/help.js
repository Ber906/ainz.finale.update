const moment = require("moment-timezone");
const time = moment.tz("Asia/Manila").format("DD/MM/YYYY || HH:mm:s");

module.exports.config = {
  name: "help",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "berber",
  description: "𝖢𝗈𝗆𝗆𝖺𝗇𝖽 𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇𝗌",
  usePrefix: true,
  commandCategory: "𝗁𝖾𝗅𝗉/𝖼𝗈𝗆𝗆𝖺𝗇𝖽 𝗅𝗂𝗌𝗍",
  usages: "[help]",
  cooldowns: 1,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 300
  }
};

module.exports.languages = {
  //"vi": {
  //	"moduleInfo": "「 %1 」\n%2\n\n❯ Cách sử dụng: %3\n❯ Thuộc nhóm: %4\n❯ Thời gian chờ: %5 giây(s)\n❯ Quyền hạn: %6\n\n» Module code by %7 «",
  //	"helpList": '[ Hiện tại đang có %1 lệnh có thể sử dụng trên bot này, Sử dụng: "%2help nameCommand" để xem chi tiết cách sử dụng! ]"',
  //	"user": "Người dùng",
  //      "adminGroup": "Quản trị viên nhóm",
  //      "adminBot": "Quản trị viên bot"
//	},
  "en": {
    "moduleInfo": "[ %1 ]\n%2\n\n𝖴𝗌𝖺𝗀𝖾: %3\n𝖢𝖺𝗍𝖾𝗀𝗈𝗋𝗒: %4\n𝖢𝗈𝗈𝗅𝖽𝗈𝗐𝗇: %5 𝗌𝖾𝖼𝗈𝗇𝖽𝗌\n𝖯𝖾𝗋𝗆𝗂𝗌𝗌𝗂𝗈𝗇: %6\n𝖢𝗋𝖾𝖽𝗂𝗍𝗌: %7",
    "helpList": 'use help 2, to view other commands',
    "user": "user",
        "𝖺𝖽𝗆𝗂𝗇𝖦𝗋𝗈𝗎𝗉": "𝗀𝗋𝗈𝗎𝗉 𝖺𝖽𝗆𝗂𝗇",
        "𝖺𝖽𝗆𝗂𝗇𝖡𝗈𝗍": "𝖻𝗈𝗍 𝖺𝖽𝗆𝗂𝗇"
  }
};

module.exports.handleEvent = function ({ api, event, getText }) {
  const { commands } = global.client;
  const { threadID, messageID, body } = event;

  if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
  const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
  if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const command = commands.get(splitBody[1].toLowerCase());
  const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports. run = function({ api, event, args, getText }) {
  const { commands } = global.client;
  const { threadID, messageID } = event;
  const command = commands.get((args[0] || "").toLowerCase());
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
  const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

  if (!command) {
    const arrayInfo = [];
    const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 10;
    //*số thứ tự 1 2 3.....cú pháp ${++i}*//
    let i = 0;
    let msg = "";

    for (var [name, value] of (commands)) {
      name += ``;
      arrayInfo.push(name);
    }

    arrayInfo.sort((a, b) => a.data - b.data);

    const startSlice = numberOfOnePage*page - numberOfOnePage;
    i = startSlice;
    const returnArray = arrayInfo.slice(startSlice, startSlice + numberOfOnePage);

    for (let item of returnArray) msg += `╭──────────𖣘\n︱─➣#${++i}. ${prefix}${item}\n╰──────────𖣘\n`;

    const siu = `𝖫𝗂𝗌𝗍 𝗈𝖿 𝖢𝗈𝗆𝗆𝖺𝗇𝖽𝗌`;


 const text = `\n𝖯𝖺𝗀𝖾: [ ${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)} ]\n\n[ ${time} ]`;

    return api.sendMessage(siu + "\n\n" + msg  + text, threadID, async (error, info) => {
      if (autoUnsend) {
        await new Promise(resolve => setTimeout(resolve, delayUnsend * 1000));
        return api.unsendMessage(info.messageID);
      } else return;
    }, event.messageID);
  }

  return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
};
