(async () => {
    let process = require('process');
    process.on('uncaughtException', function(err) {
        console.log(`𝕖𝕣𝕣𝕠𝕣❕`);
        console.log(err);
    });
    const events = require('events');
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
    const akinator = require("discord.js-akinator");
    const os = require("os-utils");
    const lyricsFinder = require('lyrics-finder');
    let URL = require('url')
    const ms = require("ms")
    let https = require("https")
    let fs = require('fs');
    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const s4d = {
        Discord,
        database: new Database(`./database.json`),
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

    function dhm(ms) {
        const days = Math.floor(ms / (24 * 60 * 60 * 1000));
        const daysms = ms % (24 * 60 * 60 * 1000);
        const hours = Math.floor(daysms / (60 * 60 * 1000));
        const hoursms = ms % (60 * 60 * 1000);
        const minutes = Math.floor(hoursms / (60 * 1000));
        const minutesms = ms % (60 * 1000);
        const sec = Math.floor(minutesms / 1000);
        return days + " days, " + hours + " Hrs, " + minutes + " Minutes, " + sec + " Seconds"
    }
    var Commands_since_bot_started, arguments2, command, gamemode;


    await s4d.client.login((process.env.TOKEN)).catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
        if (e.toString().toLowerCase().includes("token")) {
            throw new Error("An invalid token was provided!")
        } else {
            throw new Error("Intents are not turned on!")
        }
    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == '*work') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            s4dmessage.channel.send({
                content: String('I\'m working!')
            });
            s4dmessage.channel.send({
                content: String('Our bot is moving to slash commands please us them next time!')
            });
        }
        if ((s4dmessage.content) == '*who') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            s4dmessage.channel.send({
                content: String('Hello! I\'m a discord bot made by TanItYT! I\'m still in development and will improve!')
            });
            s4dmessage.channel.send({
                content: String('Our bot is moving to slash commands please us them next time!')
            });
        }
        if ((s4dmessage.content) == '*ping') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            s4dmessage.channel.send({
                content: String(('Pong! ' + String(s4d.client.ws.ping)))
            });
            s4dmessage.channel.send({
                content: String('Our bot is moving to slash commands please us them next time!')
            });
        }
        if ((s4dmessage.content) == '*bad word') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            (s4dmessage.author).send({
                content: String(([':warning: Hello ', s4dmessage.author, ', you sent a message classified as insult in ', s4dmessage.guild, ' saying || ', s4dmessage.content, ' ||. Please refrain from this type of language in the future. If this seems like a mistake, try rephrasing what you said to make it less toxic.'].join('')))
            });
            s4d.client.channels.cache.get('921786095161704449').send({
                content: String(([s4dmessage.author, ' Has said a bad word || ', s4dmessage.content, ' ||.'].join('')))
            });
            s4dmessage.delete();
        }
        if ((s4dmessage.content) == '*help') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            s4dmessage.channel.send({
                content: String('Hello! I\'m a discord bot made by TanItYT try some of my commands! *ping *who *bad word *help *work *akinator *numbercmd *issue')
            });
            s4dmessage.channel.send({
                content: String('Our bot is moving to slash commands please us them next time!')
            });
        }
        if ((s4dmessage.content) == '*uptime') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            s4dmessage.channel.send({
                content: String('Hello! I\'m a discord bot made by TanItYT try some of my commands! *ping *who *bad word *help *work')
            });
            s4dmessage.channel.send({
                content: String('Our bot is moving to slash commands please us them next time!')
            });
        }
        if ((s4dmessage.content) == '*name') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            s4dmessage.channel.send({
                content: String((['Hmm is your name ', s4dmessage.author, '?'].join('')))
            });
            s4dmessage.channel.send({
                content: String('Our bot is moving to slash commands please us them next time!')
            });
        }
        if ((s4dmessage.content) == '*numbercmd') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            s4dmessage.channel.send({
                content: String('Hello! I\'m a discord bot made by TanItYT try some of my commands! *ping *who *bad word *help *work')
            });
            s4dmessage.channel.send({
                content: String('Our bot is moving to slash commands please us them next time!')
            });
        }
        if ((s4dmessage.content) == '*code') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            s4dmessage.channel.send({
                content: String('https://github.com/TanItYT/Discord-bot')
            });
            s4dmessage.channel.send({
                content: String('Our bot is moving to slash commands please us them next time!')
            });
        }
        if ((s4dmessage.content) == '*issue') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            s4dmessage.channel.send({
                content: String('https://github.com/TanItYT/Discord-bot/issues/new')
            });
            s4dmessage.channel.send({
                content: String('Our bot is moving to slash commands please us them next time!')
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
            await delay(Number(2) * 1000);

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

    s4d.client.on('guildMemberAdd', async (param1) => {
        s4d.joiningMember = param1;
        (s4d.joiningMember).send({
            content: String((['Have a great time here in ', s4d.joiningMember.guild, ' also make sure to read the rules 😉                                      Rules 1.do, not spam (warn) 2.Do not abuse the bots (warn) 3.do not advertise your server unless I told you that you can (kick) 4.do does not say anything mean (kick) 5.do does not give me stupid ideas in #ideas (warn) 6.Do does not swear (ban) 7.Do does not say a single letter in chat (warn) 8. if you have any questions please DM the mod  9.Do not beg for things (warn) 10.Do is not put any more than 30-minute songs in rythm (warn) 11.Make sure to verify that you are not a bot in the server if you do not I will kick/ban you. 12.Follow all discord guidelines https://discord.com/guidelines (ban) 13.If a heated argument arises, a staff member may interject, either with a warning or a mute. Releasing another member’s private or otherwise personal information without their permission is strictly prohibited, and will grant you an immediate ban. (ban) 14.Do did not post any NSFW text or images (ban)'].join('')))
        });
        s4d.joiningMember = null
    });

    s4d.client.on('interactionCreate', async (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.member.user.id)
        if ((interaction.commandName) == 'work') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            await interaction.reply({
                content: 'slash commands is working!',
                ephemeral: false,
                components: []
            });
        }
        if ((interaction.commandName) == 'help') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            await interaction.reply({
                content: 'Hello! I\'m a discord bot made by TanItYT try some of my commands!',
                ephemeral: false,
                components: []
            });
        }
        if ((interaction.commandName) == 'ping') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            await interaction.reply({
                content: ('Pong! ' + String(s4d.client.ws.ping)),
                ephemeral: false,
                components: []
            });
        }
        if ((interaction.commandName) == 'uptime') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            await interaction.reply({
                content: (['My uptime is ', dhm(os.sysUptime()).toString(), ' || NOT ALWAYS ACCURATE ||'].join('')),
                ephemeral: false,
                components: []
            });
        }
        if ((interaction.commandName) == 'name') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            await interaction.reply({
                content: (['Hmm is your name ', interaction.member.user, '?'].join('')),
                ephemeral: false,
                components: []
            });
        }
        if ((interaction.commandName) == 'numbercmd') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            await interaction.reply({
                content: ('The commands that have been sent so far since the bot started is ' + String(Commands_since_bot_started)),
                ephemeral: false,
                components: []
            });
        }
        if ((interaction.commandName) == 'onlywork') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            await interaction.reply({
                content: 'Check the below message',
                ephemeral: true,
                components: []
            });
        }
        if ((interaction.commandName) == 'onlywork') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            await interaction.reply({
                content: 'Check the below message',
                ephemeral: true,
                components: []
            });
        }
        if ((interaction.commandName) == 'code') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            await interaction.reply({
                content: 'https://github.com/TanItYT/Discord-bot',
                ephemeral: false,
                components: []
            });
        }
        if ((interaction.commandName) == 'issue') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            await interaction.reply({
                content: 'https://github.com/TanItYT/Discord-bot/issues/new',
                ephemeral: false,
                components: []
            });
        }
        if ((interaction.commandName) == 'youtube') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            await interaction.reply({
                content: 'https://www.youtube.com/tanityt',
                ephemeral: false,
                components: []
            });
        }
        if ((interaction.commandName) == 'twitter') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            await interaction.reply({
                content: 'https://twitter.com/TanitYTreal',
                ephemeral: false,
                components: []
            });
        }
        if ((interaction.commandName) == 'meme') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;

            const musakui = require('musakui');
            musakui('memes')
                .then(result => {
                    var postTitle = result.title
                    var postUrl = result.reddit_url
                    var postImg = result.media_url
                    var postUpvotes = result.upvotes
                    var postComs = result.comments
                    let embed = new Discord.MessageEmbed()
                    embed.setColor('#ff0000');
                    embed.setTitle((postTitle))
                        .setURL((postUrl));
                    embed.setImage((postImg));
                    (interaction.channel).send({
                        embeds: [embed]
                    });


                })
                .catch(error => console.log(error));
        }
        if ((interaction.commandName) == 'about') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            await interaction.reply({
                content: 'https://cdn.discordapp.com/attachments/892936801231179810/948106777629712384/unknown.png',
                ephemeral: false,
                components: []
            });
        }
        if ((interaction.commandName) == 'teststring') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            await interaction.reply({
                content: 'Line 1 \\n Line 2',
                ephemeral: false,
                components: []
            });
        }
        if ((interaction.commandName) == 'yttogether') {
            Commands_since_bot_started = (typeof Commands_since_bot_started == 'number' ? Commands_since_bot_started : 0) + 1;
            let embed = new Discord.MessageEmbed()
            embed.setTitle('Click here to start watch together!')
                .setURL('https://discord.gg/m5D74QUMs4');
            await interaction.reply({
                embeds: [(embed)],
                ephemeral: false,
                components: []
            });

        }

    });

    s4d.client.on('channelUpdate', async (oldChannel, newChannel) => {
        s4d.client.channels.cache.get('921786095161704449').send({
            content: String((['The channel ', oldChannel.name, ' has been updated to ', newChannel.name].join('')))
        });

    });

    s4d.client.on('channelDelete', async (channel) => {
        s4d.client.channels.cache.get('921786095161704449').send({
            content: String((['The channel ', channel.name, ' has been deleted'].join('')))
        });

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