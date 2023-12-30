const axios = require("axios");
const fs = require('fs');
const path = require('path');

module.exports.config = {
  name: "gobard",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ADONIS DEV (ISOY DEV)",
  description: "",
  usePrefix: false,
  commandCategory: "AI",
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args, commandModules, prefix }) {
  const question = args.join("");
  const userId = event.senderID;
  const gobard = process.env["gobard"];
  if (!question) {
    api.sendMessage('Please Provide A question or query', event.threadID, event.messageID);
  } else {
    try {
      api.sendMessage('Generating Response, Please Wait!!!!', event.threadID, event.messageID);

      if (event.type === "message_reply") {

        const replyMessage = event.body;
        const originalMessage = event.messageReply.body;

        if (event.messageReply.attachments && event.messageReply.attachments.length > 0) {
          for (const attachment of event.messageReply.attachments) {
            if (attachment.type === "photo") {
              const largePreviewUrl = attachment.url;
              const filename = attachment.filename;
              const imageResponse = await axios.get(largePreviewUrl, {
                responseType: "arraybuffer",
              });

              fs.writeFileSync(`cache/${filename}`, Buffer.from(imageResponse.data, "binary"));
              var res = await axios.get(`https://api-bard.easy0.repl.co/api/bard?message=${encodeURIComponent(question)}&url=${encodeURIComponent(attachment.url)}&userID=${encodeURIComponent(userId)}&api=ISOYXD`);
            }
          }
        }
      } else {

        var res = await axios.get(`https://api-bard.easy0.repl.co/api/bard?message=${encodeURIComponent(question)}&userID=${encodeURIComponent(userId)}&api=ISOYXD`);
      }

      const respond = res.data.content;
      const imageUrls = res.data.images;

      if (Array.isArray(imageUrls) && imageUrls.length > 0) {

        const attachments = [];

        for (let i = 0; i < imageUrls.length; i++) {
          const url = imageUrls[i];
          const imagePath = `cache/image${i + 1}.png`;

          try {
            const imageResponse = await axios.get(url, {
              responseType: "arraybuffer",
            });

            fs.writeFileSync(imagePath, imageResponse.data);
            attachments.push(fs.createReadStream(imagePath));
          } catch (error) {
            api.sendMessage('Error While Saving Image', event.threadID, event.messageID);
          }
        }

        api.sendMessage({
          body: `${respond}`,
          attachment: attachments,
        }, event.threadID, event.messageID);
      } else {
        api.sendMessage(respond, event.threadID, event.messageID);
      }
    } catch (error) {
      api.sendMessage('An error occurred while processing your request', event.threadID, event.messageID);
      console.log(error);
    }
  }
};