(async () => {
    let process = require('process');
    process.on('uncaughtException', function(err) {
        console.log(`𝕖𝕣𝕣𝕠𝕣❕`);
        console.log(err);
    });
    let Discord = require("discord.js")
    let Database = require("easy-json-database")
    let {
        MessageEmbed,
        MessageButton,
        MessageActionRow,
        Intents,
        Permissions,
        MessageSelectMenu
    } = require("discord.js")
    let logs = require("discord-logs")
    let dootabase = new Database("./database.json")
    const akinator = require("discord.js-akinator");
    const os = require("os-utils");
    const ms = require("ms")
    let https = require("https")
    require('events').EventEmitter.defaultMaxListeners = 50;
    let fs = require('fs');
    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const s4d = {
        Discord,
        database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/database.json`),
        fire: null,
        joiningMember: null,
        reply: null,
        tokenInvalid: false,
        tokenError: null,
        player: null,
        manager: null,
        Inviter: null,
        message: null,
        notifer: null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };
    s4d.client = new s4d.Discord.Client({
        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
        partials: ["REACTION", "CHANNEL"]
    });
    s4d.client.on('ready', () => {
        console.log(s4d.client.user.tag + " is alive!")
    })
    logs(s4d.client);
    var Commands_since_bot_started, arguments2, command, gamemode;


    await s4d.client.login((process.env.TOKEN)).catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == '*work') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            s4dmessage.channel.send({
                content: String('I\'m working!')
            });
        }
        if ((s4dmessage.content) == '*who') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            s4dmessage.channel.send({
                content: String('Hello! I\'m a discord bot made by TanItYT! I\'m still in development and will improve!')
            });
        }
        if ((s4dmessage.content) == '*ping') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            s4dmessage.channel.send({
                content: String(('Pong! ' + String(s4d.client.ws.ping)))
            });
        }
        if ((s4dmessage.content) == '*bad word') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            (s4dmessage.author).send({
                content: String(([':warning: Hello ', s4dmessage.author, ', you sent a message classified as insult in ', s4dmessage.guild, ' saying ', s4dmessage.content, '. Please refrain from this type of language in the future. If this seems like a mistake, try rephrasing what you said to make it less toxic.'].join('')))
            });
            s4d.client.channels.cache.get('921786095161704449').send({
                content: String(([s4dmessage.author, ' Has said a bad word ', s4dmessage.content].join('')))
            });
            s4dmessage.delete();
        }
        if ((s4dmessage.content) == '*help') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            s4dmessage.channel.send({
                content: String('Hello! I\'m a discord bot made by TanItYT try some of my commands! *ping *who *bad word *help *work *akinator *numbercmd')
            });
        }
        if ((s4dmessage.content) == '*uptime') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            s4dmessage.channel.send({
                content: String(('My uptime is ' + String(os.sysUptime())))
            });
        }
        if ((s4dmessage.content) == '*name') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            s4dmessage.channel.send({
                content: String((['Hmm is your name ', s4dmessage.author, '?'].join('')))
            });
        }
        if ((s4dmessage.content) == '*numbercmd') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            s4dmessage.channel.send({
                content: String(('The commands that have been sent so far since the bot started is ' + String(Commands_since_bot_started)))
            });
        }

    });

    s4d.client.on('ready', async () => {

        while (s4d.client && s4d.client.token) {
            await delay(50);
            s4d.client.user.setPresence({
                status: "online",
                activities: [{
                    name: 'https://youtube.com/tanityt',
                    type: "WATCHING"
                }]
            });
            await delay(Number(2) * 1000);
            s4d.client.user.setPresence({
                status: "online",
                activities: [{
                    name: 'https://twitter.com/TanitYTreal',
                    type: "WATCHING"
                }]
            });

            console.log('ran')
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (!((s4dmessage.author).bot)) {
            arguments2 = (s4dmessage.content).split(' ');
            command = arguments2.splice(0, 1)[0];
            if (command == '*akinator') {
                command = arguments2.splice(0, 1)[0];
                if (command == 'c') {
                    gamemode = 'character';
                } else if (command == 'a') {
                    gamemode = 'animal';
                } else if (command == 'o') {
                    gamemode = 'object';
                } else {
                    gamemode = 'character';
                }
                akinator(s4dmessage, {
                    language: "en",
                    childMode: true,
                    gameType: gamemode,
                    useButtons: true
                })
            }
        }

    });

    return s4d
})();
const express = require('express')
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})