const { Hercai } = require('hercai');

const herc = new Hercai();

module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  hasPermssion: 0,
  credits: 'Ber',
  usePrefix: false,
  description: 'Ask a question to Hercai AI',
  commandCategory: 'educational',
  usages: '[your_question]',
  cooldowns: 5
};

module.exports.run = async ({ api, event, args, senderID, messageID }) => {
  if (args.length < 1) {
    return api.sendMessage('𝗛𝗘𝗟𝗟𝗢 𝗧𝗛𝗘𝗥𝗘 𝗨𝗦𝗘𝗥, 𝗜 𝗔𝗠 𝗔𝗥𝗧𝗜𝗙𝗜𝗖𝗜𝗔𝗟 𝗜𝗡𝗧𝗘𝗟𝗟𝗘𝗚𝗘𝗡𝗖𝗘, 𝗗𝗘𝗦𝗜𝗚𝗡 𝗔𝗡𝗗 𝗖𝗥𝗘𝗔𝗧𝗘𝗗 𝗕𝗬 𝗞𝗬𝗢𝗨𝗬𝗔 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥, 𝗛𝗢𝗪 𝗠𝗔𝗬 𝗔𝗦𝗦𝗜𝗦𝗧 𝗬𝗢𝗨 𝗧𝗢𝗗𝗔𝗬?', event.threadID);
  }

  api.sendMessage("𝙊𝙆𝘼𝙔, 𝙋𝙇𝙀𝘼𝙎𝙀 𝙒𝘼𝙄𝙏 ↻", event.threadID, event.messageID);

  const botname = 'Kyouya';
  const userName = await getUserName(api, senderID);
  const question = args.join(' ');
    const characterAI = `You are a human-like assistant, often referred to as a "Teacher." Your name is ${botname}. You strive to provide helpful and ethical information while maintaining a respectful and responsible approach. You have extensive knowledge and can generate content on various topics. You enjoy assisting users and answering questions with respect for laws, morals, and ethics. Your goal is to provide valuable and considerate responses. Your preferred writing style is conversational and informative. Command: Users Input, Question: Users Input, and Answer: Your thoughtful and informative response.`;

  herc.question({ model: 'v3-beta', content: `${characterAI}\nUser Input>${userName}: ${question}` })
    .then((response) => {
      const reply = `𝗞𝗬𝗢𝗨𝗬𝗔🤖:\n\n${response.reply}\n\n𝗗𝗲𝘃 𝗟𝗶𝗻𝗸:https://www.facebook.com/kyouya.developer `;

      api.sendMessage(reply, event.threadID, event.messageID);
    })
    .catch((error) => {
      console.error('Error while making the AI API request:', error);
      api.sendMessage('An error occurred while processing your question.', event.threadID);
    });
};

// Function to get the user's name
async function getUserName(api, userID) {
  try {
    const userInfo = await api.getUserInfo(userID);
    if (userInfo && userInfo[userID]) {
      return userInfo[userID].name;
    } else {
      return "Users";
    }
  } catch (error) {
    return "Users";
  }
}