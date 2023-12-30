const { readdirSync, readFileSync, writeFileSync } = require("fs-extra");
const { join, resolve } = require('path')
const { execSync } = require('child_process');
const config = require("../../config.json");
const chalk = require("chalk");
const chalkAnimation = require('chalkercli');
const listPackage = JSON.parse(readFileSync('../../package.json')).dependencies;
const fs = require("fs");
const login = require('../system/login/index.js');
const moment = require("moment-timezone");
const logger = require("./system-settings/console/console-logger.js");
const gradient = require("gradient-string");
const process = require("process");
execSync("rm -rf ../../mods/cmds/cache && mkdir -p ../../mods/cmds/cache && rm -rf ../../mods/events/cache && mkdir -p ../../mods/events/cache && rm -rf cache && mkdir -p cache ", (error, stdout, stderr) => {
    if (error) {
        console.log(`error : ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr : ${stderr} `);
        return;
    }});
console.log(chalk.bold.cyan(`\n` + `𝙾𝙺, 𝙸𝚃𝚂 𝚃𝙸𝙼𝙴 𝚃𝙾 𝙲𝙻𝙴𝙰𝚁 𝙲𝙰𝙲𝙷𝙴, 𝙿𝙻𝙴𝙰𝚂𝙴 𝚆𝙰𝙸𝚃. . .\n`));
logger.loader("deleted bot caches successfully.", "[ 𝙲𝙰𝙲𝙷𝙴 ] •");
const listbuiltinModules = require("module").builtinModules;
logger.loader("initializing variables.", "[ 𝙲𝙰𝙲𝙷𝙴 ] •");
console.log(chalk.bold.blue(`\n` + `𝙾𝙺, 𝙰𝙻𝙻 𝙳𝙾𝙽𝙴.\n`));

global.client = new Object({
    commands: new Map(),
    events: new Map(),
    cooldowns: new Map(),
    eventRegistered: new Array(),
    handleSchedule: new Array(),
    handleReaction: new Array(),
    handleReply: new Array(),
    mainPath: process.cwd(),
    configPath: new String(),
    getTime: function (option) {
        switch (option) {
        case "seconds":
            return `${moment.tz("Asia/Manila").format("ss")}`;
        case "minutes":
            return `${moment.tz("Asia/Manila").format("mm")}`;
        case "hours":
            return `${moment.tz("Asia/Manila").format("HH")}`;
        case "date":
            return `${moment.tz("Asia/Manila").format("DD")}`;
        case "month":
            return `${moment.tz("Asia/Manila").format("MM")}`;
        case "year":
            return `${moment.tz("Asia/Manila").format("YYYY")}`;
        case "fullHour":
            return `${moment.tz("Asia/Manila").format("HH:mm:ss")}`;
        case "fullYear":
            return `${moment.tz("Asia/Manila").format("DD/MM/YYYY")}`;
        case "fullTime":
            return `${moment.tz("Asia/Manila").format("HH:mm:ss DD/MM/YYYY")}`;
        }
    },
    timeStart: Date.now()
});

global.data = new Object({
    threadInfo: new Map(),
    threadData: new Map(),
    userName: new Map(),
    userBanned: new Map(),
    threadBanned: new Map(),
    commandBanned: new Map(),
    threadAllowNSFW: new Array(),
    allUserID: new Array(),
    allCurrenciesID: new Array(),
    allThreadID: new Array()
});

global.utils = require("./utils.js");
global.loading = require("./system-settings/console/console-logger.js");
global.nodemodule = new Object();
global.config = new Object();
global.configModule = new Object();
global.moduleData = new Array();
global.language = new Object();
global.account = new Object();

const cheerful = gradient.fruit
const crayon = gradient('yellow', 'lime', 'green');
const sky = gradient('#3446eb', '#3455eb', '#3474eb');
const BLUE = ('#3467eb');

const errorMessages = [];
if (errorMessages.length > 0) {
    console.log("commands with errors : ");
    errorMessages.forEach(({ command, error }) => {
        console.log(`${command}: ${error}`);
    });
}

var configValue;
try {
    global.client.configPath = join(global.client.mainPath, "../../config.json");
    configValue = require(global.client.configPath);
    logger.loader("found config.json file.");
} catch (e) {
    return logger.loader('"config.json" file not found."', "[ 𝙴𝚁𝚁𝙾𝚁 ] •");
}

try {
    for (const key in configValue) global.config[key] = configValue[key];
    logger.loader("config loaded");
} catch (e) {
    return logger.loader("can't load file config", "[ 𝙴𝚁𝚁𝙾𝚁 ] •")
}
const { Sequelize, sequelize } = require("../system/database/index.js");

for (const property in listPackage) {
    try {
        global.nodemodule[property] = require(property)
    } catch (e) {}
}
const langFile = (readFileSync(`${__dirname}/languages/${global.config.language || "en"}.lang`, {
    encoding: 'utf-8'
})).split(/\r?\n|\r/);
const langData = langFile.filter(item => item.indexOf('#') != 0 && item != '');
for (const item of langData) {
    const getSeparator = item.indexOf('=');
    const itemKey = item.slice(0, getSeparator);
    const itemValue = item.slice(getSeparator + 1, item.length);
    const head = itemKey.slice(0, itemKey.indexOf('.'));
    const key = itemKey.replace(head + '.', '');
    const value = itemValue.replace(/\\n/gi, '\n');
    if (typeof global.language[head] == "undefined") global.language[head] = new Object();
    global.language[head][key] = value;
}

global.getText = function (...args) {
  const langText = global.language;
  if (!langText.hasOwnProperty(args[0])) {
    throw new Error(`${__filename} - not found key language : ${args[0]}`);
  }
  var text = langText[args[0]][args[1]];
  if (typeof text === 'undefined') {
    throw new Error(`${__filename} - not found key text : ${args[1]}`);
  }
  for (var i = args.length - 1; i > 0; i--) {
    const regEx = RegExp(`%${i}`, 'g');
    text = text.replace(regEx, args[i + 1]);
  }
  return text;
};

try {
    var appStateFile = resolve(join(global.client.mainPath, config.APPSTATEPATH || "../../facebookstate.json"));
    var appState = ((process.env.REPL_OWNER || process.env.PROCESSOR_IDENTIFIER) && (fs.readFileSync(appStateFile, 'utf8'))[0] != "[" && config.encryptSt) ? JSON.parse(global.utils.decryptState(fs.readFileSync(appStateFile, 'utf8'), (process.env.REPL_OWNER || process.env.PROCESSOR_IDENTIFIER))) : require(appStateFile);
    logger.loader("found the facebookstate file.")
} catch (e) {
    return logger.loader("can't read the facebookstate file.", "[ 𝙴𝚁𝚁𝙾𝚁 ] •")
}

function onBot({ models: botModel }) {
    const loginData = {};
    loginData.appState = appState;
    login(loginData, async (loginError, loginApiData) => {
        if (loginError) {
            if (loginError.error == 'error retrieving userID. this can be caused by a lot of things, including getting blocked by facebook for logging in from an unknown location. try logging in with a browser to verify.') {
                console.log(loginError.error)
                process.exit(0)
            } else {
                console.log(loginError)
                return process.exit(0)
            }
        }

        const fbstate = loginApiData.getAppState();
        loginApiData.setOptions(global.config.FCAOption);
        let d = loginApiData.getAppState();
        d = JSON.stringify(d, null, '\x09');
        if ((process.env.REPL_OWNER || process.env.PROCESSOR_IDENTIFIER) && global.config.encryptSt) {
            d = await global.utils.encryptState(d, process.env.REPL_OWNER || process.env.PROCESSOR_IDENTIFIER);
            writeFileSync(appStateFile, d)
        } else {
            writeFileSync(appStateFile, d)
        }
        global.client.api = loginApiData
        global.config.version = config.version,
        (async () => {
            const commandsPath = `../../mods/cmds`;
            const listCommand = readdirSync(commandsPath).filter(command => command.endsWith('.js') && !command.includes('example') && !global.config.commandDisabled.includes(command));

          console.log(chalk.bold.blue(`\n` + `𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙴𝙽𝙲𝚁𝚈𝙿𝚃𝙴𝙳 𝚃𝙷𝙴 𝙰𝙿𝙿𝚂𝚃𝙰𝚃𝙴.`));
          console.clear();
console.log(chalk.bold.green(`\n` + `𝙸𝙽𝚂𝚃𝙰𝙻𝙻𝙸𝙽𝙶 𝙵𝙴𝙰𝚃𝚄𝚁𝙴𝚂 - 𝙺𝚈𝙾𝚄𝚈𝙰 𝙿𝚁𝙾𝙹𝙴𝙲𝚃 𝟸𝟶𝟸𝟺\n\n${chalk.bold.cyan('𝙸𝙼𝙿𝙾𝚁𝚃𝙸𝙽𝙶 𝙰𝙻𝙻 𝚃𝙷𝙴 𝙽𝙴𝙴𝙳 𝙾𝙽 𝚃𝙷𝙸𝚂 𝚂𝚈𝚂𝚃𝙴𝙼, 𝙿𝙻𝙴𝙰𝚂𝙴 𝚆𝙰𝙸𝚃. . .')}`));
console.log(chalk.bold.blue(`\n` + `𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙿𝙻𝙴𝙰𝚂𝙴 𝚆𝙰𝙸𝚃. . .\n`));
            for (const command of listCommand) {
                try {
                    const module = require(`${commandsPath}/${command}`);
                    const { config } = module;

                  if (!config?.commandCategory) {
  try {
    throw new Error(`[ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 ] • ${command} commandCategory is not in the correct format or empty`);
  } catch (error) {
    console.log(chalk.red(error.message));
    continue;
  }
                  }


                 if (!config?.hasOwnProperty('usePrefix')) {
  console.log(`[ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 ] •`,chalk.hex("#ff0000")(command) + ` does not have the "usePrefix" property.`);
  continue;
                  }

                    if (global.client.commands.has(config.name || '')) {
                        console.log(chalk.red(`[ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 ] • ${chalk.hex("#FFFF00")(command)} module is already loaded.`));
                        continue;
                    }
                    const { dependencies, envConfig } = config;
                    if (dependencies) {
                        Object.entries(dependencies).forEach(([reqDependency, dependencyVersion]) => {
                            if (listPackage[reqDependency]) return;
                            try {
                                execSync(`npm --package-lock false --save install ${reqDependency}${dependencyVersion ? `@${dependencyVersion}` : ''}`, {
                                    stdio: 'inherit',
                                    env: process.env,
                                    shell: true,
                                    cwd: join(__dirname, 'node_modules')
                                });
                                require.cache = {};
                            } catch (error) {
                                const errorMessage = `package - failed to install package ${reqDependency} for module`;
                                global.loading.err(chalk.hex('#ff7100')(errorMessage), '[ 𝙻𝙾𝙰𝙳𝙴𝙳 ] •');
                            }
                        });
                    }

                    if (envConfig) {
                        const moduleName = config.name;
                        global.configModule[moduleName] = global.configModule[moduleName] || {};
                        global.config[moduleName] = global.config[moduleName] || {};
                        for (const envConfigKey in envConfig) {
                            global.configModule[moduleName][envConfigKey] = global.config[moduleName][envConfigKey] ?? envConfig[envConfigKey];
                            global.config[moduleName][envConfigKey] = global.config[moduleName][envConfigKey] ?? envConfig[envConfigKey];
                        }
                        var configPath = require('../../config.json');
                        configPath[moduleName] = envConfig;
                        writeFileSync(global.client.configPath, JSON.stringify(configPath, null, 4), 'utf-8');
                    }


                    if (module.onLoad) {
                        const moduleData = {};
                                moduleData.api = loginApiData;
                                moduleData.models = botModel;
                        try {
                            module.onLoad(moduleData);
                        } catch (error) {
                            const errorMessage = "unable to load the onLoad function of the module."
                            throw new Error(errorMessage, '[ 𝙴𝚁𝚁𝙾𝚁 ] •');
                        }
                    }

                    if (module.handleEvent) global.client.eventRegistered.push(config.name);
                    global.client.commands.set(config.name, module);
                  try {
  global.loading(`${crayon(``)}successfully loaded ${chalk.blueBright(config.name)}`, "[ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 ] •");
                  } catch (err) {
  console.error("an error occurred while loading the command : ", err);
                  }

                  console.err
                } catch (error) {
                    global.loading.err(`${chalk.hex('#ff7100')(``)}failed to load ${chalk.hex("#FFFF00")(command)}` + error , "[ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 ] •");
                }
            }
        })(),

        (async () => {
            const events = readdirSync(join(global.client.mainPath, '../../mods/events')).filter(ev => ev.endsWith('.js') && !global.config.eventDisabled.includes(ev));
          console.log(chalk.bold.blue(`\n` + `𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙳𝙴𝙿𝙻𝙾𝚈𝙴𝙳 𝙰𝙻𝙻 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂.\n`));

            console.log(chalk.bold.green(`\n` + `𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙴𝚅𝙴𝙽𝚃𝚂 𝙿𝙻𝙴𝙰𝚂𝙴 𝚆𝙰𝙸𝚃. . .\n`));
            for (const ev of events) {
                try {
                    const event = require(join(global.client.mainPath, '../../mods/events', ev));
                    const { config, onLoad, run } = event;
                   if (!config || !config.name || !run) {
                        global.loading.err(`${chalk.hex('#ff7100')(``)} ${chalk.hex("#FFFF00")(ev)} module is not in the correct format. `, "[ 𝙴𝚅𝙴𝙽𝚃 ] •");
                        continue;
                    }


if (errorMessages.length > 0) {
    console.log("commands with errors :");
    errorMessages.forEach(({ command, error }) => {
        console.log(`${command}: ${error}`);
    });
}                  

                    if (global.client.events.has(config.name)) {
                        global.loading.err(`${chalk.hex('#ff7100')(``)} ${chalk.hex("#FFFF00")(ev)} module is already loaded`, "[ 𝙴𝚅𝙴𝙽𝚃 ] •");
                        continue;
                    }
                    if (config.dependencies) {
                        const missingDeps = Object.keys(config.dependencies).filter(dep => !global.nodemodule[dep]);
                        if (missingDeps.length) {
                            const depsToInstall = missingDeps.map(dep => `${dep}${config.dependencies[dep] ? '@' + config.dependencies[dep] : ''}`).join(' ');
                            execSync(`npm install --no-package-lock --no-save ${depsToInstall}`, {
                                stdio: 'inherit',
                                env: process.env,
                                shell: true,
                                cwd: join(__dirname, 'node_modules')
                            });
                            Object.keys(require.cache).forEach(key => delete require.cache[key]);
                        }
                    }
                    if (config.envConfig) {
                        const configModule = global.configModule[config.name] || (global.configModule[config.name] = {});
                        const configData = global.config[config.name] || (global.config[config.name] = {});
                        for (const evt in config.envConfig) {
                            configModule[evt] = configData[evt] = config.envConfig[evt] || '';
                        }
                        writeFileSync(global.client.configPath, JSON.stringify({
                            ...require(global.client.configPath),
                            [config.name]: config.envConfig
                        }, null, 2));
                    }
                    if (onLoad) {
                        const eventData = {};
                            eventData.api = loginApiData, eventData.models = botModel;
                        await onLoad(eventData);
                    }
                    global.client.events.set(config.name, event);
                    global.loading(`${crayon(``)}successfully loaded ${chalk.blueBright(config.name)}`, "[ 𝙴𝚅𝙴𝙽𝚃 ] •");
                } 
          catch (err) {
global.loading.err(`${chalk.hex("#ff0000")('')}${chalk.blueBright(ev)} failed with error : ${err.message}`+`\n`, "[ 𝙴𝚅𝙴𝙽𝚃 ] •");
        }
            }
        })();
      console.log(chalk.bold.blue(`\n` + `𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙳𝙴𝙿𝙻𝙾𝚈𝙴𝙳 𝙰𝙻𝙻 𝙴𝚅𝙴𝙽𝚃𝚂.\n`));

        console.log(chalk.bold.cyan(`\n` + `𝚂𝚃𝙰𝚁𝚃𝙸𝙽𝙶 𝙱𝙾𝚃 𝙿𝙻𝙴𝙰𝚂𝙴 𝚆𝙰𝙸𝚃. . .\n`));
        global.loading(`${crayon(``)}loaded ${chalk.blueBright(`${global.client.commands.size}`)} commands and ${chalk.blueBright(`${global.client.events.size}`)} events`, "[ 𝙻𝙾𝙰𝙳𝙴𝚁 ] •");
        global.loading(`${crayon(``)}launch time : ${((Date.now() - global.client.timeStart) / 1000).toFixed()}s`, "[ 𝙻𝙾𝙰𝙳𝙴𝚁 ] •");        
      const { getTime } = global.client;
      const time = getTime('fullTime');
      const activationMessage = `🟢 | This bot is activated at time ${time}`; 
    loginApiData.sendMessage(activationMessage, global.config.ADMINBOT);
console.log(chalk.bold.green(`AINZ-PACK SUCCESSFULLY LAUNCHED!!`));
      const path = require('path');
      const autoGreetPath = path.join(__dirname, 'kyouya.js');
      const autoGreet = require(autoGreetPath);
      const listenerData = {};
        listenerData.api = loginApiData; 
        listenerData.models = botModel;
      const listener = require('../system/listen.js')(listenerData);
        global.custom = require('./kyouya.js')({ api: loginApiData });
        global.handleListen = loginApiData.listenMqtt(async (error, message) => {
            if (error) {
                if (error.error === 'Not logged in.') {
                    logger("your bot account has been logged out", '[ 𝙻𝙾𝙶𝙸𝙽 ] •');
                    return process.exit(1);
                }
                if (error.error === 'Not logged in') {
                    logger("your account has been checkpointed, please confirm your account and log in again.", '[ 𝙲𝙷𝙴𝙲𝙺𝙿𝙾𝙸𝙽𝚃𝚂 ] •');
                    return process.exit(0);
                }
                console.log(error);
                return process.exit(0);
            }
            if (['presence', 'typ', 'read_receipt'].some(data => data === message.type)) return;
            return listener(message);
        });
    });
}
(async() => {
    try {
        await sequelize.authenticate();
        const authentication = {};
        authentication.Sequelize = Sequelize;
        authentication.sequelize = sequelize;
        const models = require('../system/database/model.js')(authentication);
        logger.loader('successfully connected to database.', "[ 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴 ] •")
        const botData = {};
        botData.models = models
        onBot(botData);
    } catch (error) { logger('successfully connected to database.', "[ 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴 ] •") }})();
