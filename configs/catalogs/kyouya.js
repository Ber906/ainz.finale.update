module.exports = async ({ api, event }) => {
  const logger = require('./system-settings/console/console-logger.js');
  const cron = require("node-cron");


  const configCustom = {
      autoRestart: {
      status: false,
      time: 10, // 60 minutes, 1:00 one hour and 10 minutes
      note: 'to avoid problems, enable periodic bot restarts, set the status to false if you want to disable auto restart function.'
    },
    accpetPending: {
      status: `${global.config.autoAcceptMessage}`,
      time: 1, // 1 minutes
      note: 'approve waiting messages after a certain time, set the status to false if you want to disable auto accept message request.'
    }
  }
  function autoRestart(config) {
    if(config.status) {
      setInterval(async () => {
        logger(`auto restart is processing, please wait.`, "kyouya")
        process.exit(1)
      }, config.time * 60 * 1000)
    }
  }
  function accpetPending(config) {
    if(config.status) {
      setInterval(async () => {
          const list = [
              ...(await api.getThreadList(1, null, ['PENDING'])),
              ...(await api.getThreadList(1, null, ['OTHER']))
          ];
          if (list[0]) {
              api.sendMessage('🟢 This thread is automatically approved by our system.', list[0].threadID);
          }
      }, config.time * 60 * 1000)
    }
  }
autoRestart(configCustom.autoRestart)
accpetPending(configCustom.accpetPending)

  // Function to send greetings
  function sendGreeting(message) {
    // Replace this with your code to send the greeting message
    console.log(message);
  }

  cron.schedule('0 0 6 * * *', () => {
    sendGreeting("Good morning everyone! It's time to wake up.");
  }, {
    scheduled: true,
    timezone: "Asia/Manila"
  });

  cron.schedule('0 0 9 * * *', () => {
    sendGreeting("Good morning! Have a great day ahead.");
  }, {
    scheduled: true,
    timezone: "Asia/Manila"
  });

  cron.schedule('0 0 6 * * *', () => {
    api.getThreadList(30, null, ["INBOX"], (err, list) => {
      if (err) return console.log("ERR: " + err);
      list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ?
        api.sendMessage("Good morning everyone! It's time to wake up.", now.threadID) : '');
    });
  }, {
    scheduled: true,
    timezone: "Asia/Manila"
  });

  cron.schedule('0 0 9 * * *', () => {
    api.getThreadList(30, null, ["INBOX"], (err, list) => {
      if (err) return console.log("ERR: " + err);
      list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ?
        api.sendMessage("Good morning! Have a great day ahead.", now.threadID) : '');
    });
  }, {
    scheduled: true,
    timezone: "Asia/Manila"
  });
  
  cron.schedule('0 0 12 * * *', () => {
    api.getThreadList(30, null, ["INBOX"], (err, list) => {
      if (err) return console.log("ERR: " + err);
      list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ?
        api.sendMessage("Good afternoon! It's lunchtime.", now.threadID) : '');
    });
  }, {
    scheduled: true,
    timezone: "Asia/Manila"
  });

  cron.schedule('0 0 13 * * *', () => {
    api.getThreadList(30, null, ["INBOX"], (err, list) => {
      if (err) return console.log("ERR: " + err);
      list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ?
        api.sendMessage("Good afternoon everyone!", now.threadID) : '');
    });
  }, {
    scheduled: true,
    timezone: "Asia/Manila"
  });

  cron.schedule('0 0 15 * * *', () => {
    api.getThreadList(30, null, ["INBOX"], (err, list) => {
      if (err) return console.log("ERR: " + err);
      list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ?
        api.sendMessage("Hello there! It's 3:00 PM.", now.threadID) : '');
    });
  }, {
    scheduled: true,
    timezone: "Asia/Manila"
  });

  cron.schedule('0 0 17 * * *', () => {
    api.getThreadList(30, null, ["INBOX"], (err, list) => {
      if (err) return console.log("ERR: " + err);
      list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ?
        api.sendMessage("Good afternoon! It's 5:00 PM.", now.threadID) : '');
    });
  }, {
    scheduled: true,
    timezone: "Asia/Manila"
  });

  cron.schedule('0 0 18 * * *', () => {
    api.getThreadList(30, null, ["INBOX"], (err, list) => {
      if (err) return console.log("ERR: " + err);
      list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ?
        api.sendMessage("Good evening! It's 6:00 PM.", now.threadID) : '');
    });
  }, {
    scheduled: true,
    timezone: "Asia/Manila"
  });

  cron.schedule('0 0 19 * * *', () => {
    api.getThreadList(30, null, ["INBOX"], (err, list) => {
      if (err) return console.log("ERR: " + err);
      list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ?
        api.sendMessage("Good evening! It's dinner time.", now.threadID) : '');
    });
  }, {
    scheduled: true,
    timezone: "Asia/Manila"
  });

  cron.schedule('0 0 21 * * *', () => {
    api.getThreadList(30, null, ["INBOX"], (err, list) => {
      if (err) return console.log("ERR: " + err);
      list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ?
        api.sendMessage("Good evening! It's 9:00 PM.", now.threadID) : '');
    });
  }, {
    scheduled: true,
    timezone: "Asia/Manila"
  });

  cron.schedule('0 0 22 * * *', () => {
    api.getThreadList(30, null, ["INBOX"], (err, list) => {
      if (err) return console.log("ERR: " + err);
      list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ?
        api.sendMessage("Goodnight everyone! Sweet dreams.", now.threadID) : '');
    });
  }, {
    scheduled: true,
    timezone: "Asia/Manila"
  });

  cron.schedule('0 0 0 * * *', () => {
    api.getThreadList(30, null, ["INBOX"], (err, list) => {
      if (err) return console.log("ERR: " + err);
      list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ?
        api.sendMessage("Goodnight everyone! It's midnight.", now.threadID) : '');
    });
  }, {
    scheduled: true,
    timezone: "Asia/Manila"
  });
};
