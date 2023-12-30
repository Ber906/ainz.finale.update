const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports.config = {
  name: 'owner',
  version: '1.0.0',
  hasPermssion: 0,
  credits: '𝙰𝚒𝚗𝚣',
  usePrefix: false,
  description: 'Display bot owner information',
  commandCategory: 'system',
  usages: '',
  cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
  try {
    const ownerInfo = {
      name: `𝙰𝚒𝚗𝚣`,
      gender: '𝙼𝚊𝚕𝚎',
      age: '𝟷𝟼',
      height: '𝟻\'𝟾',
      facebookLink: `${global.config.OWNERLINK}`,
      status: '𝚂𝚒𝚗𝚐𝚕𝚎/𝙲𝚘𝚖𝚙𝚕𝚒𝚌𝚊𝚝𝚎𝚍'
    };

    const videoUrl = [

"https://drive.google.com/uc?export=download&id=18ZCWMSwEi-55ImYsmd7wfdq4MkLP4Ogu",
"https://drive.google.com/uc?export=download&id=18WGg-8oH9gJPbd8DcSFwguTkkdbjVR6s",
"https://drive.google.com/uc?export=download&id=18W1dG5vcZpBJ6WhKWs3Rfw_JFZNi43fS",
"https://drive.google.com/uc?export=download&id=19ftJzAGT4ip76YET6PbmC9e87ZDyBcCT",
"https://drive.google.com/uc?export=download&id=19pZucRudlDOlljVa-Anpi3ZpkRwNuaWP",
"https://drive.google.com/uc?export=download&id=19orvJc7mI-M5Diwp2fGnZrCTW3fbvIV9",
"https://drive.google.com/uc?export=download&id=19fLKEx_5h6-s22-rB0HXVfLZIGxKgA5U",
"https://drive.google.com/uc?export=download&id=19asZSvG-3MtAryKWLyPI5ZLhwbRLhXyx",
];

    const chosenVideoUrl = videoUrl[Math.floor(Math.random() * videoUrl.length)];
    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const filePath = path.join(tmpFolderPath, (Math.random() + 1).toString(36).substring(4) + '_owner_video.mp4'); // adding random string to file name to prevent collision

    const videoResponse = await axios.get(chosenVideoUrl, { responseType: 'arraybuffer' });
    fs.writeFileSync(filePath, Buffer.from(videoResponse.data, 'binary'));

    const response = `
✧ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 ✧\n
𝖭𝖺𝗆𝖾: ${ownerInfo.name}
𝖦𝖾𝗇𝖽𝖾𝗋: ${ownerInfo.gender}
𝖠𝗀𝖾: ${ownerInfo.age}
𝖧𝖾𝗂𝗀𝗁𝗍: ${ownerInfo.height}
𝖥𝖺𝖼𝖾𝖻𝗈𝗈𝗄: ${ownerInfo.facebookLink}
𝖲𝗍𝖺𝗍𝗎𝗌: ${ownerInfo.status}
`;

    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(filePath)
    }, event.threadID, event.messageID);

    fs.unlinkSync(filePath); // delete the video after sending the message

    if (event.body && event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('🎃', event.messageID, (err) => {}, true);
    }

  } catch (error) {
    console.error('Error in owner command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
};