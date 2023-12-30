module.exports = function({ api, models }) {

  const Users = require("./controllers/users")({ models, api }),
        Threads = require("./controllers/threads")({ models, api }),
        Currencies = require("./controllers/currencies")({ models });
  const logger = require("../catalogs/system-settings/console/console-logger.js");
  const chalk = require("chalk");
  const gradient= require("gradient-string");
  const crayon = gradient('yellow', 'lime', 'green');
  const sky = gradient('#3446eb', '#3455eb', '#3474eb');

  //////////////////////////////////////////////////////////////////////
  //========= Push all variable from database to environment =========//
  //////////////////////////////////////////////////////////////////////

  (async function () {
    try {
      const process = require("process");
      const [threads, users] = await Promise.all([Threads.getAll(), Users.getAll(['userID', 'name', 'data'])]);
      threads.forEach(data => {
        const idThread = String(data.threadID);
        global.data.allThreadID.push(idThread);
        global.data.threadData.set(idThread, data.data || {});
        global.data.threadInfo.set(idThread, data.threadInfo || {});
        if (data.data && data.data.banned) {
          global.data.threadBanned.set(idThread, {
            'reason': data.data.reason || '',
            'dateAdded': data.data.dateAdded || ''
          });
        }
        if (data.data && data.data.commandBanned && data.data.commandBanned.length !== 0) {
          global.data.commandBanned.set(idThread, data.data.commandBanned);
        }
        if (data.data && data.data.NSFW) {
          global.data.threadAllowNSFW.push(idThread);
        }
      });
      users.forEach(dataU => {
        const idUsers = String(dataU.userID);
        global.data.allUserID.push(idUsers);
        if (dataU.name && dataU.name.length !== 0) {
          global.data.userName.set(idUsers, dataU.name);
        }
        if (dataU.data && dataU.data.banned) {
          global.data.userBanned.set(idUsers, {
            'reason': dataU.data.reason || '',
            'dateAdded': dataU.data.dateAdded || ''
          });
        }
        if (dataU.data && dataU.data.commandBanned && dataU.data.commandBanned.length !== 0) {
          global.data.commandBanned.set(idUsers, dataU.data.commandBanned);
        }
      });
      global.loading(`loaded ${chalk.blueBright(`${global.data.allThreadID.length}`)} groups and ${chalk.blueBright(`${global.data.allUserID.length}`)} users\n`, "[ 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴 ] •");


global.loading(`\n${chalk.bold.blue(`𝗞𝗬𝗢𝗨𝗬𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗟𝗢𝗚𝗦 𝟮𝟬𝟮𝟰 ❏`)}\n`, "▄▀█ █ █▄░█ ▀█\x0a█▀█ █ █░▀█ █▄");
    } catch (error) {
      logger.loader(`can't load environment variable, error : ${error}`, '[ 𝙴𝚁𝚁𝙾𝚁 ] •');
    }
  })();	
  global.loading(`${crayon(``)}𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻 𝙺𝚈𝙾𝚄𝚈𝙰 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁\n${sky(`[ 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴 ] •`)} ${(!global.config.BOTNAME) ? "𝙺𝚈𝙾𝚄𝚈𝙰" : global.config.BOTNAME} \n${sky(`[ 𝙱𝙾𝚃 𝚄𝙸𝙳 ] •`)} ${api.getCurrentUserID()} \n${sky(`[ 𝙱𝙾𝚃 𝙿𝚁𝙴𝙵𝙸𝚇 ] •`)} ${global.config.PREFIX}`, "[ 𝙼𝙴𝚂𝚂𝙴𝙽𝙶𝙴𝚁 𝙲𝙷𝙰𝚃𝙱𝙾𝚃 ] •");

  ///////////////////////////////////////////////
  //========= Require all handle need =========//
  //////////////////////////////////////////////

  const handleCommand = require("./handle/handleCommand.js")({ api, Users, Threads, Currencies, models });
  const handleCommandEvent = require("./handle/handleCommandEvent.js")({ api, Users, Threads, Currencies, models });
  const handleReply = require("./handle/handleReply.js")({ api, Users, Threads, Currencies, models });
  const handleReaction = require("./handle/handleReaction.js")({ api, Users, Threads, Currencies, models });
  const handleEvent = require("./handle/handleEvent.js")({ api,  Users, Threads, Currencies, models });
  const handleCreateDatabase = require("./handle/handleCreateDatabase.js")({  api, Threads, Users, Currencies, models });

  //////////////////////////////////////////////////
  //========= Send event to handle need =========//
  /////////////////////////////////////////////////

  return (event) => {
    switch (event.type) {
      case "message":
      case "message_reply":
      case "message_unsend":
        handleCreateDatabase({ event });
        handleCommand({ event });
        handleReply({ event });
        handleCommandEvent({ event });
        break;
      case "change_thread_image": 
        break;
      case "event":
        handleEvent({ event });
        break;
      case "message_reaction":
        handleReaction({ event });
        break;
      default:
        break;
    }
  };
};