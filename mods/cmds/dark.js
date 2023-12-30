const axios = require("axios");

module.exports.config = {
    name: "dark",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝙰𝚒𝚗𝚣",
    usePrefix: false,
    description: "𝙳𝚊𝚛𝚔(𝙰𝙸)",
    commandCategory: "no prefix",
    usages: "𝙰𝚂𝙺/𝚀𝚄𝙴𝚂𝚃𝙸𝙾𝙽𝚂",
    cooldowns: 2
};

module.exports.run = async function({ api, event }) {

    const { messageID, threadID, senderID, body } = event;
    const ainz = threadID,
    kyo = messageID;
    const args = event.body.split(/\s+/);
  args.shift();
    const content = args.join(' ');
  if (!content) {
    api.sendMessage("⚫ | 𝙷𝚒 𝙸'𝚊𝚖 𝙳𝚊𝚛𝚔(𝙰𝙸) 𝚑𝚘𝚠 𝚌𝚊𝚗 𝚒 𝚑𝚎𝚕𝚙 𝚢𝚘𝚞 𝚝𝚘𝚍𝚊𝚢?", ainz);
    return;
  }
    try {
      api.setMessageReaction("🟠", kyo, (err) => { }, true);
      api.sendMessage("💬 |  𝙳𝚊𝚛𝚔(𝙰𝙸) 𝚒𝚜 𝚝𝚑𝚒𝚗𝚔𝚒𝚗𝚐. . .", ainz);
        const res = await axios.get(`http://blackboxai-api-wapper.ainzkyodev.repl.co/api/box?query=${content}`);
      const text = res.data;
      const respond = text.answer;
      const formattedReply = formatFont(respond);

        if (res.data.error) {
            api.setMessageReaction("🔴", kyo, (err) => { }, true);
            api.sendMessage(`🔴 | 𝚂𝚘𝚛𝚛𝚢 𝚒 𝚌𝚊𝚗𝚝 𝚛𝚎𝚜𝚙𝚘𝚗𝚍 𝚝𝚘 𝚢𝚘𝚞𝚛 ${content} 𝚑𝚎𝚛𝚎'𝚜 𝚠𝚑𝚢: ${res.data.error}`, ainz, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, kyo);
        } else {
            api.setMessageReaction("🟢", kyo, (err) => { }, true);
            api.sendMessage(`🟣 | 𝚀𝚞𝚎𝚛𝚢: ${content}\n\n🧠 | 𝙷𝚒 𝚝𝚑𝚒𝚜 𝚒𝚜 𝙳𝚊𝚛𝚔(𝙰𝙸) 𝚊𝚗𝚍 𝚝𝚑𝚒𝚜 𝚒𝚜 𝚖𝚢 𝙰𝚗𝚜𝚠𝚎𝚛:\n\n${formattedReply}`, ainz, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, kyo);
        }
    } catch (error) {
        console.error(error);
        api.setMessageReaction("🔴", kyo, (err) => { }, true);
        api.sendMessage("🔴 | 𝙰𝚗 𝚎𝚛𝚛𝚘𝚛 𝚘𝚌𝚌𝚞𝚛𝚎𝚍 𝚠𝚑𝚒𝚕𝚎 𝚏𝚎𝚝𝚌𝚑𝚒𝚗𝚐 𝚝𝚑𝚎 𝚊𝚗𝚜𝚠𝚎𝚛 𝚘𝚛 𝚍𝚊𝚝𝚊!.", ainz, kyo);
    }
};

function formatFont(text) {
  const fontMapping = {
    a: "𝖺", b: "𝖻", c: "𝖼", d: "𝖽", e: "𝖾", f: "𝖿", g: "𝗀", h: "𝗁", i: "𝗂", j: "𝗃", k: "𝗄", l: "𝗅", m: "𝗆",
    n: "𝗇", o: "𝗈", p: "𝗉", q: "𝗊", r: "𝗋", s: "𝗌", t: "𝗍", u: "𝗎", v: "𝗏", w: "𝗐", x: "𝗑", y: "𝗒", z: "𝗓",
    A: "𝖠", B: "𝖡", C: "𝖢", D: "𝖣", E: "𝖤", F: "𝖥", G: "𝖦", H: "𝖧", I: "𝖨", J: "𝖩", K: "𝖪", L: "𝖫", M: "𝖬",
    N: "𝖭", O: "𝖮", P: "𝖯", Q: "𝖰", R: "𝖱", S: "𝖲", T: "𝖳", U: "𝖴", V: "𝖵", W: "𝖶", X: "𝖷", Y: "𝖸", Z: "𝖹"
  };

  let formattedText = "";
  for (const char of text) {
    if (char in fontMapping) {
      formattedText += fontMapping[char];
    } else {
      formattedText += char;
    }
  }

  return formattedText;
}