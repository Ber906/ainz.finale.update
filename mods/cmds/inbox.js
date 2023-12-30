module.exports.config = {
    name: "inbox",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Kyoo",
    usePrefix: true,
    description: "ibx",
    commandCategory: "inbox",
    usages: "[ask]",
    cooldowns: 2,
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    let { messageID, threadID, senderID, body } = event;
    let tid = threadID,
    mid = messageID;
    const content = encodeURIComponent(args.join(" "));
    if (!args[0]) return api.sendMessage(`Please type ${global.config.PREFIX}inbox [temporaryemail]`, tid, mid);
    try {
        const res = await axios.get(`http://mail.ainzkyodev.repl.co/get/${content}`);
        const jane = res.data[0];
        const a = jane.from;
        const b = jane.subject;
        const c = jane.body;
        const d = jane.date;
        if (res.data.error) {
            api.sendMessage(`Error: ${res.data.error}`, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        } else {
            api.sendMessage(`𝗛𝗲𝗿𝗲'𝘀 𝘁𝗵𝗲 𝗶𝗻𝗯𝗼𝘅 𝗼𝗳 ${content}\n\n𝗙𝗿𝗼𝗺: ${a}\n\n𝗦𝘂𝗯𝗷𝗲𝗰𝘁 𝗼𝗳 𝗺𝗲𝘀𝘀𝗮𝗴𝗲: ${b}\n\n𝗕𝗼𝗱𝘆 𝗼𝗳 𝗺𝗲𝘀𝘀𝗮𝗴𝗲:\n${c}\n${d}`, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while fetching the data.", tid, mid);
    }
};