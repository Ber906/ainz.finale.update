const axios = require('axios');
const fs = require('fs');
const gtts = require('gtts');
const moment = require("moment-timezone");
const time = moment.tz("Asia/Manila").format("DD/MM/YYYY || HH:mm:s");

module.exports.config = {
  name: "bard",
  version: "10.0.0",
  hasPermission: 0,
  credits: "Ainz/Kyouya",
  usePrefix: false,
  description: "『 𝙂𝙤𝙤𝙜𝙡𝙚 𝘽𝙖𝙧𝙙𝘼𝙄 𝙑𝙤𝙞𝙘𝙚 𝙭 𝙄𝙢𝙖𝙜𝙚 𝙧𝙚𝙘𝙤𝙜𝙣𝙞𝙩𝙞𝙤𝙣 𝙭 𝙄𝙢𝙖𝙜𝙚 𝙚𝙣𝙝𝙖𝙣𝙘𝙞𝙣𝙜 』",
  commandCategory: "no prefix",
  usages: "𝖬𝗈𝖽𝖾𝗅 𝖡𝖺𝗋𝖽𝗏𝟣𝟢 𝖡𝗒 𝖠𝗂𝗇𝗓/𝖪𝗒𝗈𝗎𝗒𝖺",
  cooldowns: 3,
};

module.exports.run = async ({ api, event }) => {
  const { threadID, messageID, type, messageReply, body } = event;

const args = event.body.split(/\s+/);
  args.shift();

    if (event.type === "message_reply") {
    if (event.messageReply.attachments[0]) {
      const attachment = event.messageReply.attachments[0];

      if (attachment.type === "audio") {
        const audioUrl = attachment.url;
        convertVoiceToText(audioUrl, api, event); 
        return;
      } else if (attachment.type === "photo") {
        const photoURL = attachment.url;
        enhance(photoURL, api, event);
        const imageUrl = attachment.url;
        imageIdentifying(imageUrl, api, event);
        return;
      }
    }
  }

  const question = args.join(' ');

  if (!question) {
    api.sendMessage("☄️ 𝖧𝖾𝗅𝗅𝗈 𝖨 𝖺𝗆 𝖡𝖺𝗋𝖽 𝖠𝖨, 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖻𝗒 𝖦𝗈𝗈𝗀𝗅𝖾\n\n𝖧𝗈𝗐 𝗆𝖺𝗒 𝖺𝗌𝗌𝗂𝗌𝗍 𝗒𝗈𝗎 𝗍𝗈𝖽𝖺𝗒?", event.threadID);
    return;
  }

  try {
    api.sendTypingIndicator(event.threadID);

    api.setMessageReaction("🕧", event.messageID, (err) => { }, true);
    api.sendMessage("💭 | 𝖦𝗈𝗈𝗀𝗅𝖾 𝖡𝖺𝗋𝖽 𝖠𝖨 𝗂𝗌 𝖳𝗁𝗂𝗇𝗄𝗂𝗇𝗀...", event.threadID);

    const response = await axios.get(`https://api-bard-kyouya.files120.repl.co/bard?ask=${encodeURIComponent(question)}`);

    const reply = response.data.message;

    if (reply.trim() !== "") {
      const formattedReply = formatFont(reply);

      const gttsService = new gtts(formattedReply, 'en');
      gttsService.save('bard_response.mp3', function () {
        api.sendMessage(
          {
            attachment: fs.createReadStream('bard_response.mp3'),
            body: `🎃 | 𝙂𝙤𝙤𝙜𝙡𝙚 𝘽𝙖𝙧𝙙(𝘼𝙄)\n\n✎﹏﹏﹏﹏: ${question}\n\n🧠 | 𝘼𝙣𝙨𝙬𝙚𝙧 𝙗𝙮 𝘽𝙖𝙧𝙙(𝘼𝙄):\n\n${formattedReply}\n\n𝖨 𝗁𝗈𝗉𝖾 𝗂𝗍 𝗁𝖾𝗅𝗉𝗌 ☄️\n${time}\n`,
            mentions: [
              {
                tag: 'BARD Response',
                id: api.getCurrentUserID(),
              },
            ],
          },
          event.threadID
        );
      });
    } else {
      api.sendMessage("🔴 𝖤𝗋𝗋𝗈𝗋 𝗀𝖾𝗇𝖾𝗋𝖺𝗍𝗂𝗇𝗀 𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖾 𝖿𝗋𝗈𝗆 𝖦𝗈𝗈𝗀𝗅𝖾 𝖡𝖺𝗋𝖽 𝖠𝖨", event.threadID);
    }
  } catch (error) {
    console.error(error);
    api.sendMessage("🔴 𝖠𝗇 𝖾𝗋𝗋𝗈𝗋 𝗈𝖼𝖼𝗎𝗋𝖾𝖽, 𝖯𝗅𝖾𝖺𝗌𝖾 𝗍𝗋𝗒 𝖺𝗀𝖺𝗂𝗇 𝗅𝖺𝗍𝖾𝗋.", event.threadID);
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

async function convertVoiceToText(audioUrl, api, event) {
  try {
    api.sendMessage("🔊 | 𝙂𝙤𝙤𝙜𝙡𝙚 𝘽𝙖𝙧𝙙(𝘼𝙄) 𝖢𝗈𝗇𝗏𝖾𝗋𝗍𝗂𝗇𝗀 𝗒𝗈𝗎𝗋 𝖺𝗎𝖽𝗂𝗈 𝗍𝗈 𝗍𝖾𝗑𝗍, 𝖯𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍. . .", event.threadID);

    const response = await axios.get(`https://hazeyy-apis-combine.kyrinwu.repl.co/api/try/voice2text?url=${encodeURIComponent(audioUrl)}`);
    const text = response.data.transcription;

    if (text) {
      const formattedText = formatFont(text);
      api.sendMessage(`🎃 | 𝙂𝙤𝙤𝙜𝙡𝙚 𝘽𝙖𝙧𝙙(𝘼𝙄) 𝖢𝗈𝗇𝗏𝖾𝗋𝗍𝖾𝖽 𝖵𝗈𝗂𝖼𝖾 𝗍𝗈 𝖳𝖾𝗑𝗍\n\n ${formattedText}`, event.threadID, event.messageID);
    } else {
      api.sendMessage("🔴 𝖴𝗇𝖺𝖻𝗅𝖾 𝗍𝗈 𝖼𝗈𝗇𝗏𝖾𝗋𝗍 𝖺𝗎𝖽𝗂𝗈 𝗍𝗈 𝗍𝖾𝗑𝗍", event.threadID, event.messageID);
    }
  } catch (error) {
    console.error("🔴 𝖠𝗇 𝖾𝗋𝗋𝗈𝗋 𝗈𝖼𝖼𝗎𝗋𝖾𝖽 𝗐𝗁𝗂𝗅𝖾 𝖼𝗈𝗇𝗏𝖾𝗋𝗍𝗂𝗇𝗀 𝖺𝗎𝖽𝗂𝗈:", error);
    api.sendMessage("🔴 𝖠𝗇 𝖾𝗋𝗋𝗈𝗋 𝗈𝖼𝖼𝗎𝗋𝖾𝖽 𝗐𝗁𝗂𝗅𝖾 𝖼𝗈𝗇𝗏𝖾𝗋𝗍𝗂𝗇𝗀 𝖺𝗎𝖽𝗂𝗈:", event.threadID, event.messageID);
  }
    }

async function enhance(photoURL, api, event) {
  try {
          api.sendMessage("🕟 | 𝖤𝗇𝗁𝖺𝗇𝖼𝗂𝗇𝗀, 𝗉𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍 𝖿𝗈𝗋 𝖺 𝗆𝗈𝗆𝖾𝗇𝗍...", event.threadID);

      const response = await axios.get(`https://hazeyy-apis-combine.kyrinwu.repl.co/api/try/remini?url=${encodeURIComponent(photoURL)}`);
      const processedImageURL = response.data.image_data;
      const img = (await axios.get(processedImageURL, { responseType: "arraybuffer" })).data;

    const pathie = __dirname + `/cache/bard.jpg`;
    const { threadID, messageID } = event;
      fs.writeFileSync(pathie, Buffer.from(img, 'binary'));

      api.sendMessage({
        body: "✨ 𝖤𝗇𝗁𝖺𝗇𝖼𝖾𝖽 𝖲𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒",
        attachment: fs.createReadStream(pathie)
      }, event.threadID, () => fs.unlinkSync(pathie), event.messageID);
    } catch (error) {
      api.sendMessage(`🔴 𝖤𝗋𝗋𝗈𝗋 𝗉𝗋𝗈𝖼𝖾𝗌𝗌𝗂𝗇𝗀 𝗂𝗆𝖺𝗀𝖾: ${error}`, event.threadID, event.messageID);
    }
}

async function imageIdentifying(imageUrl, api, event) {
  const args = event.body.split(/\s+/);
  args.shift();
  const query = args.join(' ');
  const userId = event.senderID;

  try {
    api.sendMessage("↻ | 𝖦𝗈𝗈𝗀𝗅𝖾 𝖡𝖺𝗋𝖽 𝖠𝖨 𝗋𝖾𝖼𝗈𝗀𝗇𝗂𝗍𝗂𝗈𝗇𝗂𝗇𝗀, 𝖯𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍...", event.threadID);

        const response = await axios.get(`https://api-bard.easy0.repl.co/api/bard?message=${encodeURIComponent(query)}&url=${encodeURIComponent(imageUrl)}&userID=${encodeURIComponent(userId)}&api=ISOYXD`);
    const caption = response.data.content;

    if (caption) {
      const formattedCaption = formatFont(caption);
      api.sendMessage(`🟢 | 𝖦𝗈𝗈𝗀𝗅𝖾 𝖡𝖺𝗋𝖽 𝖠𝖨 𝖨𝗆𝖺𝗀𝖾 𝗋𝖾𝖼𝗈𝗀𝗇𝗂𝗍𝗂𝗈𝗇\n\n ${formattedCaption}`, event.threadID, event.messageID);
    } else {
      api.sendMessage("🔴 𝖥𝖺𝗂𝗅𝖾𝖽 𝗍𝗈 𝖼𝗈𝗇𝗏𝖾𝗋𝗍 𝗂𝗆𝖺𝗀𝖾.", event.threadID, event.messageID);
    }
  } catch (error) {
    console.error("🔴 𝖤𝗋𝗋𝗈𝗋 𝗂𝗆𝖺𝗀𝖾 𝗋𝖾𝖼𝗈𝗀𝗇𝗂𝗍𝗂𝗈𝗇:", error);
    api.sendMessage(`🔴 𝖤𝗋𝗋𝗈𝗋 𝗂𝗆𝖺𝗀𝖾 𝗋𝖾𝖼𝗈𝗀𝗇𝗂𝗍𝗂𝗈𝗇 ${error}`, event.threadID, event.messageID);
  }
}