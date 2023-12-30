const axios = require('axios');

module.exports.config = {
  name: "iloveyou",
  version: "1.0.",
  hasPermission: 0,
  credits: "RICKCIEL",
  usePrefix: false,
  description: "labyouh",
  commandCategory: "Fun",
  cooldowns: 2,
};

const API_SERVER_URL = 'https://iloveypu.berwinjames.repl.co';

module.exports.run = async ({ api, event }) => {
  try {
    const response = await axios.get(`${API_SERVER_URL}/api/api-magmahalan-tayo`);
    const videoUrls = response.data;

    const randomVideoUrl = videoUrls[Math.floor(Math.random() * videoUrls.length)];

    const videoStreamResponse = await axios.get(randomVideoUrl, { responseType: 'stream' });

    const message = {
      body: "iloveyou",
      attachment: videoStreamResponse.data,
    };

    await api.sendMessage(message, event.threadID, event.messageID);
  } catch (error) {
    console.error('Error fetching or sending the video:', error);
    api.sendMessage("Error sending the video.", event.threadID, event.messageID);
  }
};