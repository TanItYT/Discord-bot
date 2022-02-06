(async () => {
    const Discord = require("discord.js");
    const mySecret = process.env['TOKEN']
    const Database = require("easy-json-database");
    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const s4d = {
        Discord,
        database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
        joiningMember: null,
        reply: null,
        tokenInvalid: false,
        tokenError: null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };
    s4d.client = new s4d.Discord.Client({
        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
        partials: ["REACTION"]
    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == '*work') {
            s4dmessage.channel.send(String('I\'m working!'));
        }
        if ((s4dmessage.content) == '*who') {
            s4dmessage.channel.send(String('Hello! I\'m a discord bot made by TanItYT! I\'m still in development and will improve!'));
        }
        if ((s4dmessage.content) == '*ping') {
            s4dmessage.channel.send(String('Pong!'));
            s4dmessage.channel.send(String((s4d.client.ws.ping)));
        }
        if ((s4dmessage.content) == '*bad word') {
            s4dmessage.delete();
            s4dmessage.channel.send(String('Just stop!'));
            s4dmessage.channel.send(String((s4dmessage.author.username)));
        }
        if ((s4dmessage.content) == '*help') {
            s4dmessage.channel.send(String('Hello! I\'m a discord bot made by TanItYT try some of my commands! *ping *who *bad word *help *work'));
        }

    });

    await s4d.client.login((process.env.TOKEN)).catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
    });


    return s4d;
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