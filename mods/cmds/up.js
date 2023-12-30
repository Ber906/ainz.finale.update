const axios = require('axios');
const os = require('os');
const { performance } = require('perf_hooks');

module.exports.config = {
    name: 'up',
    version: '1.0.0',
    hasPermssion: 0,
    credits: '𝙰𝚒𝚗𝚣',
    usePrefix: false,
    description: 'Display Bot Ms/Ping',
    commandCategory: 'system',
    usages: '',
    cooldowns: 0
};

function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({ api, event }) => {
  const dateNow = Date.now()
  const up = process.uptime(); // gets the uptime in seconds
  const days = Math.floor(up / 86400);
  const hours = Math.floor(up % 86400 / 3600);
  const minutes = Math.floor(up % 3600 / 60);
  const seconds = Math.floor(up % 60);
  const cpuCores = os.cpus().length;
  const totalRam = (os.totalmem() / (1024 ** 3)).toFixed(2);
  const freeRam = (os.freemem() / (1024 ** 3)).toFixed(2);   
  const upt = os.uptime();
  const botStatus = "online";
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  const t = global.data.allUserID.length;
  const e = global.data.allThreadID.length;
  const h = pidusage.cpu.toFixed(1);
  const g = byte2mb(pidusage.memory);
  const ping = (Date.now()) - dateNow;
  const response = `Hello, Ainz(AI) has been running for:\n\n🕒 𝗨𝗣𝗧𝗜𝗠𝗘 ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds}\n\n📡 𝗢𝗦: ${os.type()} ${os.release()}\n\n🛡 (𝗖𝗣𝗨)𝗖𝗢𝗥𝗘𝗦: ${cpuCores}\n\n⚔️ (𝗔𝗜)𝗦𝗧𝗔𝗧𝗨𝗦: ${botStatus}\n\n📈 𝗧𝗢𝗧𝗔𝗟 𝗨𝗦𝗘𝗥𝗦: ${t}\n\n📉 𝗧𝗢𝗧𝗔𝗟 𝗧𝗛𝗥𝗘𝗔𝗗𝗦: ${e}\n\n⚖️ (𝗔𝗜)𝗨𝗦𝗔𝗚𝗘: ${h}\n\n📊 (𝗥𝗔𝗠)𝗨𝗦𝗔𝗚𝗘: ${g}\n\n💰 𝗧𝗢𝗧𝗔𝗟(𝗥𝗔𝗠): ${totalRam} 𝗚𝗕\n\n💸 𝗖𝗨𝗥𝗥𝗘𝗡𝗧(𝗥𝗔𝗠): ${freeRam} 𝗚𝗕\n\n🛫 𝗣𝗜𝗡𝗚: ${ping} ms\n\n🕰 (𝗨𝗣𝗧𝗜𝗠𝗘)𝗦𝗘𝗖𝗢𝗡𝗗𝗦: ${upt} seconds\n\n📩 𝗔𝗗𝗠𝗜𝗡 𝗖𝗢𝗡𝗧𝗔𝗖𝗧:\n1. Fb Link: [https://www.facebook.com/berlovesyou]`;

    api.sendMessage(`${response}`, event.threadID);
};