const fs = require("fs").promises;
process.on('unhandledRejection', (reason, promise) => {
  console.error('𝚄𝚗𝚑𝚊𝚗𝚍𝚕𝚎𝚍 𝚁𝚎𝚓𝚎𝚌𝚝𝚒𝚘𝚗 𝚊𝚝:', promise, '𝚛𝚎𝚊𝚜𝚘𝚗:', reason);

});

module.exports.config = {
  name: "acpm",
  version: "1.0.0",
  hasPermssion: 2,
  allowedUID: "100092359574131", 
  credits: "𝙰𝚒𝚗𝚣",
  description: "𝚃𝚘𝚐𝚐𝚕𝚎 𝚊𝚞𝚝𝚘𝙰𝚌𝚌𝚎𝚙𝚝𝙼𝚎𝚜𝚜𝚊𝚐𝚎 𝚖𝚘𝚍𝚎",
  usePrefix: false,
  commandCategory: "no prefix",
  usage: "𝚊𝚌𝚙𝚖 𝚘𝚗/𝚘𝚏𝚏/𝚜𝚝𝚊𝚝𝚞𝚜",
  cooldowns: 3
};

function checkAutoacceptStatus(api, threadID, isAutoacceptOn) {
  const statusMessage = isAutoacceptOn
    ? "🟢 | 𝙰𝚞𝚝𝚘𝙰𝚌𝚌𝚎𝚙𝚝𝙼𝚎𝚜𝚜𝚊𝚐𝚎 𝚖𝚘𝚍𝚎 𝚒𝚜 𝚌𝚞𝚛𝚛𝚎𝚗𝚝𝚕𝚢 𝚝𝚞𝚛𝚗 𝚘𝚗."
    : "⚪ | 𝙰𝚞𝚝𝚘𝙰𝚌𝚌𝚎𝚙𝚝𝙼𝚎𝚜𝚜𝚊𝚐𝚎 𝚖𝚘𝚍𝚎 𝚒𝚜 𝚌𝚞𝚛𝚛𝚎𝚗𝚝𝚕𝚢 𝚝𝚞𝚛𝚗 𝚘𝚏𝚏.";

  api.sendMessage(statusMessage, threadID);
}

module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, body } = event;


  if (typeof body !== 'string') {
    console.error("🔴 | 𝙸𝚗𝚟𝚊𝚕𝚒𝚍 𝚋𝚘𝚍𝚢:", body);
    return;
  }

  const command = body.toLowerCase();

  if (command.startsWith("acpm")) {
    const args = command.split(" ");
    const action = args[1];

    try {
      const hasPermission = await checkPermission(api, event.senderID);

      if (!hasPermission) {
        api.sendMessage("🙅‍♂️ | 𝚈𝚘𝚞 𝚍𝚘 𝚗𝚘𝚝 𝚑𝚊𝚟𝚎 𝚙𝚎𝚛𝚖𝚒𝚜𝚜𝚒𝚘𝚗 𝚝𝚘 𝚞𝚜𝚎 𝚝𝚑𝚒𝚜 𝚌𝚘𝚖𝚖𝚊𝚗𝚍.🔴", threadID);
        return;
      }

      if (action === "on" || action === "off" || action === "status") {
        await setAutoaccept(action, api, threadID);
      } else {
        api.sendMessage("🟠 | 𝙸𝚗𝚟𝚊𝚕𝚒𝚍 𝚚𝚞𝚎𝚛𝚢. 𝙿𝚕𝚎𝚊𝚜𝚎 𝚞𝚜𝚎 '𝚊𝚌𝚙𝚖 𝚘𝚗', '𝚊𝚌𝚙𝚖 𝚘𝚏𝚏', or '𝚊𝚌𝚙𝚖 𝚜𝚝𝚊𝚝𝚞𝚜'.", threadID);
      }
    } catch (error) {
      console.error("🔴 | 𝙴𝚛𝚛𝚘𝚛 𝚑𝚊𝚗𝚍𝚕𝚒𝚗𝚐 𝚊𝚞𝚝𝚘𝙰𝚌𝚌𝚎𝚙𝚝𝙼𝚎𝚜𝚜𝚊𝚐𝚎 𝚌𝚘𝚖𝚖𝚊𝚗𝚍:", error);
      api.sendMessage("🔴 | 𝙰𝚗 𝚎𝚛𝚛𝚘𝚛 𝚘𝚌𝚌𝚞𝚛𝚛𝚎𝚍 𝚠𝚑𝚒𝚕𝚎 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚒𝚗𝚐 𝚝𝚑𝚎 𝚌𝚘𝚖𝚖𝚊𝚗𝚍. 𝙲𝚑𝚎𝚌𝚔 𝚝𝚑𝚎 𝚜𝚢𝚜𝚝𝚎𝚖 𝚕𝚘𝚐𝚜 𝚏𝚘𝚛 𝚖𝚘𝚛𝚎 𝚍𝚎𝚝𝚊𝚒𝚕𝚜.", threadID);
    }
  }
};

async function setAutoaccept(action, api, threadID) {
  const path = "../../config.json";

  try {
    const configData = JSON.parse(await fs.readFile(path, "utf8"));
    const wasAutoacceptOn = configData.autoacceptMode;

    if (action === "on") {
      configData.autoacceptMode = true;
      configData.autoAcceptMessage = true;
      api.sendMessage("🟡 | 𝙰𝚞𝚝𝚘𝙰𝚌𝚌𝚎𝚙𝚝𝙼𝚎𝚜𝚜𝚊𝚐𝚎 𝚖𝚘𝚍𝚎 𝚠𝚊𝚜 𝚜𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢 𝚎𝚗𝚊𝚋𝚕𝚎𝚍.", threadID);

      setTimeout(() => {
        api.sendMessage("🟠 | 𝙰𝚒𝚗𝚣 (𝙰𝙸) 𝚒𝚜 𝚁𝚎𝚜𝚝𝚊𝚛𝚝𝚒𝚗𝚐. . .", threadID);
        setTimeout(() => {
          api.sendMessage("🟢 | 𝙰𝚒𝚗𝚣 (𝙰𝙸) 𝚍𝚘𝚗𝚎 𝚁𝚎𝚜𝚝𝚊𝚛𝚝𝚒𝚗𝚐", threadID);
        }, 2000); 
        setTimeout(() => {
          process.exit(1); 
        }, 5000); 
      }, 10000);
    } else if (action === "off") {
      configData.autoacceptMode = false;
      configData.autoAcceptMessage = false;
      api.sendMessage("🟡 | 𝙰𝚞𝚝𝚘𝙰𝚌𝚌𝚎𝚙𝚝𝙼𝚎𝚜𝚜𝚊𝚐𝚎 𝚖𝚘𝚍𝚎 𝚠𝚊𝚜 𝚜𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢 𝚞𝚗𝚊𝚋𝚕𝚎𝚍", threadID);

      setTimeout(() => {
        api.sendMessage("🟠 | 𝙰𝚒𝚗𝚣 (𝙰𝙸) 𝚒𝚜 𝚁𝚎𝚜𝚝𝚊𝚛𝚝𝚒𝚗𝚐. . .", threadID);
        setTimeout(() => {
          api.sendMessage("🟢 | 𝙰𝚒𝚗𝚣 (𝙰𝙸) 𝚍𝚘𝚗𝚎 𝚁𝚎𝚜𝚝𝚊𝚛𝚝𝚒𝚗𝚐.", threadID);
        }, 2000); 
        setTimeout(() => {
          process.exit(1); 
        }, 5000); 
      }, 10000); 
    } else if (action === "status") {
      checkAutoacceptStatus(api, threadID, configData.autoacceptMode);
      return;
    }

    await fs.writeFile(path, JSON.stringify(configData, null, 2));

    if ((action === "on" && !wasAutoacceptOn) || (action === "off" && wasAutoacceptOn)) {
    }
  } catch (error) {
    console.error("🔴 | 𝙴𝚛𝚛𝚘𝚛 𝚞𝚙𝚍𝚊𝚝𝚒𝚗𝚐 𝚊𝚞𝚝𝚘𝚊𝚌𝚌𝚎𝚙𝚝 𝚖𝚘𝚍𝚎:", error);
    api.sendMessage("🔴 | 𝙰𝚗 𝚎𝚛𝚛𝚘𝚛 𝚘𝚌𝚌𝚞𝚛𝚛𝚎𝚍 𝚠𝚑𝚒𝚕𝚎 𝚞𝚙𝚍𝚊𝚝𝚒𝚗𝚐 𝚊𝚞𝚝𝚘𝚊𝚌𝚌𝚎𝚙𝚝 𝚖𝚘𝚍𝚎. 𝙲𝚑𝚎𝚌𝚔 𝚝𝚑𝚎 𝚜𝚢𝚜𝚝𝚎𝚖 𝚕𝚘𝚐𝚜 𝚏𝚘𝚛 𝚖𝚘𝚛𝚎 𝚍𝚎𝚝𝚊𝚒𝚕𝚜.", threadID);
  }
}

async function checkPermission(api, senderID) {
  try {
    return senderID === module.exports.config.allowedUID;
  } catch (error) {
    console.error("🔴 | 𝙴𝚛𝚛𝚘𝚛 𝚌𝚑𝚎𝚌𝚔𝚒𝚗𝚐 𝚞𝚜𝚎𝚛 𝚙𝚎𝚛𝚖𝚒𝚜𝚜𝚒𝚘𝚗:", error);
    return false;
  }
}