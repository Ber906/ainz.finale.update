const axios = require('axios');
const fs = require('fs');
const path = require('path');
const request = require('request');
const moment = require("moment-timezone");
const time = moment.tz("Asia/Manila").format("DD/MM/YYYY || HH:mm:s");

const redroomAutoState = {};
const redroomAutoInterval = {};
let videoCounter = 0;
let errorVideoCounter = 0;
const lastVideoError = {};
const defaultInterval = 60 * 60 * 1000; 

module.exports.config = {
  name: 'redroom',//on,off,status,interval
  version: '10.0',
  hasPermssion: 2,
  credits: '𝙰𝚒𝚗𝚣',
  usePrefix: false,
  description: '(𝚛𝚊𝚗𝚍𝚘𝚖 18+ video)',
  commandCategory: '𝚏𝚘𝚛 𝚏𝚞𝚗',
  usages: '',
  cooldowns: 0
};

const redroom = async (api, event, threadID) => {
  try {
  let url = "https://hazeyy-redroom-v2-api.kyrinwu.repl.co";

    let { data } = await axios.get(url + "/files");
    let getFiles = await axios.get(url + "/" + data.file, { responseType: "arraybuffer" });
    const res = await axios.get(`https://labs.bible.org/api/?passage=random&type=json`);

    const ainz = res.data[0];
    const a = ainz.bookname;
    const b = ainz.chapter;
    const c = ainz.verse;
    const d = ainz.text;

    videoCounter++;

    const randomFileName = `${Math.floor(Math.random() * 99999999)}${data.type}`;
    const filePath = path.join(__dirname, 'cache', randomFileName);

    fs.writeFileSync(filePath, Buffer.from(getFiles.data, 'binary'));

    const message = {
      body: `📀 | 𝙷𝚎𝚛𝚎\'𝚜 𝚢𝚘𝚞𝚛 𝚛𝚎𝚚𝚞𝚎𝚜𝚝𝚒𝚗𝚐 𝟷𝟾+ 𝚟𝚒𝚍𝚎𝚘, 𝚆𝚊𝚝𝚌𝚑 𝚠𝚎𝚕𝚕 𝚞𝚜𝚎𝚛.\n\n📖 | 𝙷𝚎𝚛𝚎\'𝚜 𝚛𝚊𝚗𝚍𝚘𝚖 𝚋𝚒𝚋𝚕𝚎𝚟𝚎𝚛𝚜𝚎 𝚛𝚎𝚊𝚍 𝚝𝚑𝚒𝚜 𝚊𝚏𝚝𝚎𝚛 𝚠𝚊𝚝𝚌𝚑𝚒𝚗𝚐:\n𝙱𝚘𝚘𝚔𝚗𝚊𝚖𝚎: ${a}\n\n𝙲𝚑𝚊𝚙𝚝𝚎𝚛: ${b}\n\n𝚅𝚎𝚛𝚜𝚎: ${c}\n\n𝚃𝚎𝚡𝚝: ${d}\n\n𝚃𝚒𝚖𝚎 𝚊𝚗𝚍 𝙳𝚊𝚝𝚎: [ ${time} ]`,
      attachment: fs.createReadStream(filePath),
    }

     api.sendMessage(message, event.threadID);

    api.sendMessage("🟣 | 𝚃𝚑𝚎 𝚟𝚒𝚍𝚎𝚘 𝚠𝚒𝚕𝚕 𝚋𝚎 𝚜𝚎𝚗𝚝 𝚒𝚗 𝚊 𝚏𝚎𝚠 𝚖𝚒𝚗𝚞𝚝𝚎𝚜. 𝙿𝚕𝚎𝚊𝚜𝚎 𝚠𝚊𝚒𝚝 𝚏𝚘𝚛 𝚊 𝚖𝚘𝚖𝚎𝚗𝚝.", event.threadID);

  } catch (error) {
    console.error('🔴 | 𝙴𝚛𝚛𝚘𝚛 𝚏𝚎𝚝𝚌𝚑𝚒𝚗𝚐 𝚘𝚛 𝚜𝚎𝚗𝚍𝚒𝚗𝚐 𝚝𝚑𝚎 𝚟𝚒𝚍𝚎𝚘', error);
    api.sendMessage('🔴 | 𝙴𝚛𝚛𝚘𝚛 𝚜𝚎𝚗𝚍𝚒𝚗𝚐  𝚟𝚒𝚍𝚎𝚘', event.threadID, event.messageID);
    lastVideoError[threadID] = error.message;
    videoCounter++;
    errorVideoCounter++;
  }
}; 

module.exports.run = async ({ api, event }) => {
  const threadID = event.threadID;
  const commandArgs = event.body.toLowerCase().split(' ');

  const allowedAdminUID = '100092359574131';
  if (commandArgs[1] === 'setinterval') {
    const newIntervalValue = parseFloat(commandArgs[2]);
    const newIntervalUnit = commandArgs[3]?.toLowerCase();

    if (!isNaN(newIntervalValue) && newIntervalValue > 0) {
      let newInterval;

      if (newIntervalUnit === 'hour' || newIntervalUnit === 'hours') {
        newInterval = newIntervalValue * 60 * 60 * 1000; // Convert hours to milliseconds
        const unit = newIntervalValue === 1 ? 'hour' : 'hours';
        api.sendMessage(`🕒 | 𝙸𝚗𝚝𝚎𝚛𝚟𝚊𝚕 𝚝𝚒𝚖𝚎 𝚜𝚎𝚝 𝚝𝚘 ${newIntervalValue} ${unit}.`, threadID);
      } else if (newIntervalUnit === 'minute' || newIntervalUnit === 'minutes') {
        newInterval = newIntervalValue * 60 * 1000; // Convert minutes to milliseconds
        const unit = newIntervalValue === 1 ? 'minute' : 'minutes';
        api.sendMessage(`🕒 | 𝙸𝚗𝚝𝚎𝚛𝚟𝚊𝚕 𝚝𝚒𝚖𝚎 𝚜𝚎𝚝 𝚝𝚘 ${newIntervalValue} ${unit}.`, threadID);
      } else {
        api.sendMessage('🔴 | 𝙸𝚗𝚟𝚊𝚕𝚒𝚍 𝚞𝚜𝚎. 𝙿𝚕𝚎𝚊𝚜𝚎 𝚞𝚜𝚎 "minutes" or "hours".', threadID);
        return;
      }

      redroomAutoInterval[threadID] = newInterval;
    } else {
      api.sendMessage('🔴 | 𝙸𝚗𝚟𝚊𝚕𝚒𝚍 𝚒𝚗𝚝𝚎𝚛𝚟𝚊𝚕 𝚝𝚒𝚖𝚎. 𝙿𝚕𝚎𝚊𝚜𝚎 𝚙𝚛𝚘𝚟𝚒𝚍𝚎 𝚊 𝚟𝚊𝚕𝚒𝚍 𝚙𝚘𝚜𝚒𝚝𝚒𝚟𝚎 𝚗𝚞𝚖𝚋𝚎𝚛.', threadID);
    }
    return;
  } else if (commandArgs[1] === 'interval') {
    const currentInterval = redroomAutoInterval[threadID] || defaultInterval;
    const unit = currentInterval === 60 * 60 * 1000 ? 'hour' : 'minute';
    api.sendMessage(`🟡 | 𝙲𝚞𝚛𝚛𝚎𝚗𝚝 𝚒𝚗𝚝𝚎𝚛𝚟𝚊𝚕 𝚒𝚜 𝚜𝚎𝚝 𝚝𝚘 ${currentInterval / (unit === 'hour' ? 60 * 60 * 1000 : 60 * 1000)} ${unit}.`, threadID);
    return;
  } else if (commandArgs[1] === 'on') {
    if (!redroomAutoState[threadID]) {
      redroomAutoState[threadID] = true;
      const intervalUnit = redroomAutoInterval[threadID] ? (redroomAutoInterval[threadID] === 60 * 60 * 1000 ? 'hour' : 'minute') : 'hour';
      const intervalValue = redroomAutoInterval[threadID] ? redroomAutoInterval[threadID] / (intervalUnit === 'hour' ? 60 * 60 * 1000 : 60 * 1000) : 1;
      const intervalMessage = `𝚠𝚒𝚕𝚕 𝚜𝚎𝚗𝚍 𝚟𝚒𝚍𝚎𝚘 𝚎𝚟𝚎𝚛𝚢 ${intervalValue} ${intervalUnit}${intervalValue === 1 ? '' : 's'}`;

      api.sendMessage(`🟢 | 𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚏𝚎𝚊𝚝𝚞𝚛𝚎 𝚒𝚜 𝚝𝚞𝚛𝚗𝚎𝚍 𝚘𝚗, ${intervalMessage}.`, threadID);

      redroom(api, event, threadID);

      setInterval(() => {
        if (redroomAutoState[threadID]) {
          redroom(api, event, threadID);
        }
      }, redroomAutoInterval[threadID] || defaultInterval);
    } else {
      api.sendMessage('𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚏𝚎𝚊𝚝𝚞𝚛𝚎 𝚒𝚜 𝚊𝚕𝚛𝚎𝚊𝚍𝚢 𝚝𝚞𝚛𝚗𝚎𝚍 𝚘𝚗', threadID);
    }
    return;
  } else if (commandArgs[1] === 'off') {
    redroomAutoState[threadID] = false;
    api.sendMessage('🟠 | 𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚏𝚎𝚊𝚝𝚞𝚛𝚎 𝚒𝚜 𝚝𝚞𝚛𝚗𝚎𝚍 𝚘𝚏𝚏 ', threadID);
    return;
  } else if (commandArgs[1] === 'status') {
    const statusMessage = redroomAutoState[threadID] ? 'on' : 'off';
    const intervalMessage = redroomAutoInterval[threadID] ? `Interval time set to ${redroomAutoInterval[threadID] / (redroomAutoInterval[threadID] === 60 * 60 * 1000 ? 60 : 1000)} minutes.` : 'Interval time not set. Using default 1-hour interval.';
        const errorMessage = lastVideoError[threadID] ? `𝙻𝚊𝚜𝚝 𝚟𝚒𝚍𝚎𝚘 𝚎𝚛𝚛𝚘𝚛: ${lastVideoError[threadID]}` : '';

        api.sendMessage(`🟢 | 𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚏𝚎𝚊𝚝𝚞𝚛𝚎 𝚒𝚜 𝚌𝚞𝚛𝚛𝚎𝚗𝚝𝚕𝚢 ${statusMessage}.\n\n🟡 | 𝚃𝚘𝚝𝚊𝚕 𝚟𝚒𝚍𝚎𝚘 𝚜𝚎𝚗𝚝: ${videoCounter}\n\n🟣 | 𝚃𝚘𝚝𝚊𝚕 𝚟𝚒𝚍𝚎𝚘 𝚎𝚛𝚛𝚘𝚛 𝚜𝚎𝚗𝚝: ${errorVideoCounter}\n\n${errorMessage}`, threadID);
        return;
      } else if (commandArgs[1] === 'resetcount') {
        // Check if the user has permission to reset counts
        if (event.senderID === allowedAdminUID) {
          videoCounter = 0;
          errorVideoCounter = 0;
          api.sendMessage('🟢 | 𝚅𝚒𝚍𝚎𝚘 𝚌𝚘𝚞𝚗𝚝𝚜 𝚑𝚊𝚟𝚎 𝚋𝚎𝚎𝚗 𝚛𝚎𝚜𝚎𝚝.', threadID);
        } else {
          api.sendMessage('🔴 | 𝚈𝚘𝚞 𝚍𝚘𝚗𝚝 𝚑𝚊𝚟𝚎 𝚊𝚗𝚢 𝚙𝚎𝚛𝚖𝚒𝚜𝚜𝚒𝚘𝚗𝚜 𝚝𝚘 𝚛𝚎𝚜𝚎𝚝 𝚌𝚘𝚞𝚗𝚝𝚜.', threadID);
        }
        return;
      }

      api.sendMessage('🔴 | 𝙸𝚗𝚟𝚊𝚕𝚒𝚍 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚞𝚜𝚎.\n\n\n🟢 | "redroom on", "redroom off" - 𝚝𝚘 𝚃𝚞𝚛𝚗 (𝙾𝙽) 𝚘𝚛 𝚃𝚞𝚛𝚗 (𝙾𝙵𝙵).\n\n\n🟠 | "redroom setinterval <minutes/hours>" - 𝚂𝚎𝚝 𝚝𝚑𝚎 𝚝𝚒𝚖𝚎𝚛 𝚏𝚘𝚛 𝚟𝚒𝚍𝚎𝚘\n\n\n🟡 | "redroom interval" - 𝚌𝚑𝚎𝚌𝚔 𝚝𝚑𝚎 𝚒𝚗𝚝𝚎𝚛𝚟𝚊𝚕\n\n\n🔵 |  "redroom status" - 𝚌𝚑𝚎𝚌𝚔 𝚝𝚑𝚎 𝚜𝚝𝚊𝚝𝚞𝚜 𝚘𝚏 𝚌𝚘𝚖𝚖𝚊𝚗𝚍.', threadID);
      };