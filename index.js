const Discord = require('discord.js');
const prefix = ';;'
const config = require("./config.json");
const token = process.env.token
const cookie = process.env.cookie
const request = require('request');
const rbx = require ('noblox.js')
const client = new Discord.Client();
const chalk = require('chalk');
const figlet = require('figlet');


client.once('ready', () => {
    console.log('Ready!')
    client.user.setActivity('Fun Times Amusement Park', { type: 'WATCHING'})
})

rbx.cookieLogin(cookie);

client.on('message', (message) => {
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        if (message.member.roles.has('663189301827338250')) {
            ;
        }
        else if (message.member.roles.has('664963796665892905')) {
            if (message.content.startsWith(`${prefix}rscheck`)) {
                var thisArg = message.content.split(' ')
                thisArg.shift()
                var finalArg = thisArg.join(' ')
                const thisEmbed = new Discord.RichEmbed()
                    .setTitle(':calendar: Recruitment Session Scheduled :calendar:')
                    .setDescription('React with a :white_check_mark: for a Recruitment Session on the specified date!')
                    .addField('Host', message.author)
                    .addField('Date & Time', finalArg)
                    .setColor('0x#33FFF0')
                    .setFooter('Bot created by mvh2016 | mvh#3155')
                var channelToSend = client.channels.get('665180552005025802')
                channelToSend.send(thisEmbed)
                message.channel.send(':white_check_mark: | Event check message successfully posted! '+message.author)
                channelToSend.send('<@&663183646374494208>')

            }
        }
    }

    catch {
        console.error('Error found in the rscheck section.')
    }

// Amusement Park Session Check

    try {
        if (message.member.roles.has('663189301827338250')) {
            ;
        }
        else if (message.member.roles.has('664963796665892905')) {
            if (message.content.startsWith(`${prefix}rscheck`)) {
                var thisArg = message.content.split(' ')
                thisArg.shift()
                var finalArg = thisArg.join(' ')
                const thisEmbed = new Discord.RichEmbed()
                    .setTitle(':calendar: Amusement Park Session Scheduled :calendar:')
                    .setDescription('React with a :white_check_mark: for an Amusement Park Session on the specified date!')
                    .addField('Host', message.author)
                    .addField('Date & Time', finalArg)
                    .setColor('0x#33FFF0')
                    .setFooter('Bot created by mvh2016 | mvh#3155')
                var channelToSend = client.channels.get('665180552005025802')
                channelToSend.send(thisEmbed)
                message.channel.send(':white_check_mark: | Event check message successfully posted! '+message.author)
                channelToSend.send('<@&663183646374494208>')

            }
        }
    }

    catch {
        console.error('Error found in the sessioncheck section.')
    }

// RS Start

    try {
        if (message.member.roles.has('663189301827338250')) {
            ;
        }
        else if (message.member.roles.has('664963796665892905')) {
            if (message.content.startsWith(`${prefix}rsstart`)) {
                var thisArg = message.content.split(' ')
                thisArg.shift()
                var finalArg = thisArg.join(' ')
                const RSEmbed = new Discord.RichEmbed()
                    .setTitle(':family: Recruitment Session Starting :family:')
                    .setDescription('A recruitment session is starting.')
                    .addField('Host', message.author)
                    .addField('Notes', finalArg)
                    .setColor('0x#33FFF0')
                    .setFooter('Bot created by mvh2016 | mvh#3155')
                var channelToSend = client.channels.get('665180552005025802')
                channelToSend.send(RSEmbed)
                message.channel.send(':white_check_mark: | Event message successfully announced! '+message.author)
                channelToSend.send('<@&663183646374494208>')
            }
        }
    }

    catch {
        console.error('Error found in the RS Start section.')
    }

// Park Session Start

    try {
        if (message.member.roles.has('663189301827338250')) {
            ;
        }
        else if (message.member.roles.has('664963796665892905')) {
            if (message.content.startsWith(`${prefix}sessionstart`)) {
                var thisArg = message.content.split(' ')
                thisArg.shift()
                var finalArg = thisArg.join(' ')
                const APEmbed = new Discord.RichEmbed()
                    .setTitle(':balloon: Amusement Park Session Starting :balloon:')
                    .setDescription('An Amusement Park Session is starting.')
                    .addField('Host', message.author)
                    .addField('Notes', finalArg)
                    .setColor('0x#33FFF0')
                    .setFooter('Bot created by mvh2016 | mvh#3155')
                var channelToSend = client.channels.get('665180552005025802')
                channelToSend.send(APEmbed)
                message.channel.send(':white_check_mark: | Event message successfully announced! '+message.author)
                channelToSend.send('<@&663183646374494208>')
            }
        }
    }

    catch {
        console.error('Error found in the AP Start section.')
    }

// RS End

    try {
        if (message.member.roles.has('663189301827338250')) {
            ;
        }
        else if (message.member.roles.has('664963796665892905')) {
            if (message.content.startsWith(`${prefix}rsend`)) {
                var thisArg = message.content.split(' ')
                thisArg.shift()
                var finalArg = thisArg.join(' ')
                const RSEmbed2 = new Discord.RichEmbed()
                    .setTitle(':family: Recruitment Session Ending :family:')
                    .setDescription('The recruitment session has ended.')
                    .addField('Host', message.author)
                    .setColor('0x#33FFF0')
                    .setFooter('Bot created by mvh2016 | mvh#3155')
                var channelToSend = client.channels.get('665180552005025802')
                channelToSend.send(RSEmbed2)
                message.channel.send(':white_check_mark: | Event ending smessage successfully announced! '+message.author)
                //channelToSend.send('<@&663183646374494208>')
            }
        }
    }

    catch {
        console.error('Error found in the RS End section.')
    }

// AP End

try {
    if (message.member.roles.has('663189301827338250')) {
        ;
    }
    else if (message.member.roles.has('664963796665892905')) {
        if (message.content.startsWith(`${prefix}sessionend`)) {
            var thisArg = message.content.split(' ')
            thisArg.shift()
            var finalArg = thisArg.join(' ')
            const RSEmbed2 = new Discord.RichEmbed()
                .setTitle(':balloon: Amusement Park Session Ending :balloon:')
                .setDescription('The amusement park session has ended.')
                .addField('Host', message.author)
                .setColor('0x#33FFF0')
                .setFooter('Bot created by mvh2016 | mvh#3155')
            var channelToSend = client.channels.get('665180552005025802')
            channelToSend.send(RSEmbed2)
            message.channel.send(':white_check_mark: | Event ending smessage successfully announced! '+message.author)
            //channelToSend.send('<@&663183646374494208>')
        }
    }
}

catch {
    console.error('Error found in the AP End section.')
}

// Event Logging

    try {

        //console.log(message.channel.id)
        if (message.author.id === '668834860793856009') {
            ;
        }
        else {
            if (message.channel.id === '665331323996733441') {
                //console.log ('Message is in channel!')
                var splitContent = message.content.split('\n')
                var getUsername = splitContent[0]
                var getAttendees = splitContent[1]
                var getTypeOfEvent = splitContent[2]
                var getProof = splitContent[3]
                var splitUsername = getUsername.split(': ')
                var splitAttendees = getAttendees.split(': ')
                var splitToe = getTypeOfEvent.split(': ')
                var splitProof = getProof.split(': ')
                if (splitUsername[0] === 'Username') {
                    if (splitAttendees[0] === 'Attendees') {
                        if (splitToe[0] === 'Type of Event') {
                            if (splitProof[0] === 'Proof') {
                                if ((splitProof[1]).includes('http:')) {
                                    const eventLogEmbed = new Discord.RichEmbed()
                                    .setTitle(':pencil: Confirmed Event Log :pencil:')
                                    .setDescription('HoD+ - Review this and allocate points!')
                                    .addField('Username of Host', (splitUsername[1]), false)
                                    .addField('Attendees', (splitAttendees[1]), false)
                                    .addField('Type of Event', (splitToe[1]), false)
                                    .addField('Proof', (splitProof[1]), false)
                                    .setFooter('Bot created by mvh2016 | mvh#3155')
                                    .setColor('0x#B30BD8')
                                    var sendingChannel = client.channels.get('665346430298488845')
                                    sendingChannel.send(eventLogEmbed)
                                    message.channel.send(':white_check_mark: Your event log has been approved! Wait for a HoD to allocate points. '+message.author)
                                }
                                else {
                                    message.channel.send(':warning: Proof must be in link form (with `http:` at the start. Use gyazo, imgur, or google drive. '+message.author)
                                }
                            
                            }
                            else {
                                message.channel.send(':warning: Invalid format. Use `Proof` instead of '+'`'+(splitProof[0])+'`'+' (case-sensitive)')
                            }
                        }
                        else {
                            message.channel.send(':warning: Invalid format. Use `Type of Event` instead of '+'`'+(splitToe[0])+'`'+' (case-sensitive)')
                        }
                    }
                    else {
                        message.channel.send(':warning: Invalid format. Use `Attendees` instead of '+'`'+(splitAttendees[0])+'`'+' (case-sensitive)')
                    }
                }
                else {
                    message.channel.send(":warning: Invalid format. Use `Username` instead of "+'`'+(splitUsername[0])+'`'+' (case-sensitive)')
                }
            }
            else {
                ;
            }
    
        }
    }
        

    catch { 
        console.error('Error found in the event logging channel.')
        message.channel.send(':warning: Invalid format. Follow pinned messages. '+message.author)
    }

// Command List

    try {

        if (message.content.startsWith(`${prefix}commands`)) {
            const helpEmbed = new Discord.RichEmbed()
                .setTitle(':ferris_wheel: Fun Times Bot :ferris_wheel:')
                .setDescription('A full list of commands that I accept!')
                .addField('`;;rscheck <date & time>`', 'Sends an event check message for a recruitment session. Include the date, time, and timezone. \n**You must have the Event Host role!**', false)
                .addField('`;;rsstart <notes>`', 'Sends a start notification for a recruitment session. Include any notes for attendees, such as where to head to. \n **You must have the Event Host role!**', false)
                .addField('`;;rsend`', 'Sends an ending notification for a recruitment session. \n **You must have the Event Host role!**', false)
                .addField('`;;sessioncheck <date & time>`', 'Sends an event check message for an amusement park session. Include the date, time and timezone. \n **You must have the Event Host role!**', false)
                .addField('`;;sessionstart`', 'Sends a start notification for an amusement park session. Include any notes for attendees, such as where to head to. \n **You must have the Event Host role!**', false)
                .addField('`;;sessionend`', 'Sends an ending notification for an amusement park session. \n **You must have the Event Host role!**', false)
                .setColor('0x#0BA6D8')
                .setFooter('Bot created by mvh2016 | mvh#3155')
            message.channel.send(helpEmbed)
        }
        else {
            ;
        }
    }

    catch {
        
    }

    try {

        const request = require('request')

        if (message.content.startsWith(`${prefix}verify`)) {
            const request = require('request');
                request('https://verify.eryn.io/api/user/'+message.author.id, function (error, response, body) {
                    console.error('error:', error); // Print the error if one occurred
                    console.log('body:', body); // Print the HTML for the Google homepage.
                    var result = body.split(',')
                    console.log(result)
                    var newResult = (result[1].split(':'))
                    console.log(newResult)
                    finalResult = newResult[1]
                    console.log(finalResult)
                    lastResult = finalResult.slice(1)
                    lastLastResult = lastResult.slice(0, lastResult.length - 1);
                    console.log(lastLastResult)

                    //Sending the message

                    message.channel.send(':white_check_mark: You have been verified as '+lastLastResult+'. \n\n **If this is not your account, or you\'d like to switch accounts, visit http://verify.eryn.io**')
                    message.member.send(':white_check_mark: You\'ve been verified as '+lastLastResult+' for Fun Times Amusement Park! Welcome! \n\n*This is an automated message. For assistance contact mvh#3155.*')
                    message.member.setNickname(lastLastResult)
                });
            
        }}

    catch {
        message.channel.send('There was an error.')
    }

    if(command === 'setrank') {
        if(!message.member.roles.some(r=>["Ranking Permissions"].includes(r.name)) )
            return message.channel.send({embed: {
                color: 15406156,
                description: "You need the `Ranking Permissions` role to run this command.",
                title: "FTAP Rank System",
                footer: "Bot created by mvh2016 | mvh#3155"
            }});
            var username = args[0]
            var rankIdentifier = Number(args[1]) ? Number(args[1]) : args[1];
            if (!rankIdentifier) return message.channel.send({embed: {
                color: 15406156,
                description: "Please specify a rank.",
                title: "FTAP Rank System",
                footer: "Bot created by mvh2016 | mvh#3155"
            }});
            if (username){
                rbx.getIdFromUsername(username)
                .then(function(id){
                    rbx.getRankInGroup(config.groupId, id)
                    .then(function(rank){
                        if(config.maximumRank <= rank){
                            message.channel.send({embed: {
                                color: 15406156,
                                description: "This rank cannot be ranked by this bot.",
                                title: "FTAP Rank System",
                                footer: "Bot created by mvh2016 | mvh#3155"
                            }});
                        } else {
                            rbx.setRank(config.groupId, id, rankIdentifier)
                            .then(function(newRole){
                                message.channel.send({embed: {
                                    color: 8117429,
                                    description: `You have successfully ranked ${username} to ${rankIdentifier}!`,
                                    title: "FTAP Rank System",
                                    footer: "Bot created by mvh2016 | mvh#3155"
                                }});
                                if(config.logchannelid === 'false') return;
                                var logchannel = message.guild.channels.get(config.logchannelid);
                                logchannel.send({embed: {
                                    color: 11253955,
                                    description: `<@${message.author.id}> has ranked ${username} to ${rankIdentifier}.`,
                                    title: "FTAP Rank System",
                                    footer: {
                                        text: 'Bot created by mvh2016 | mvh#3155'
                                    },
                                    timestamp: new Date(),
                                    thumbnail: {
                                        url: `http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&Format=Png&username=${username}`
                                    }
                                }});
                            }).catch(function(err){
                                console.log(chalk.red('Issue with setRank: ' + err));
                                message.channel.send({embed: {
                                    color: 15406156, 
                                    description: "Oops! Something went wrong. The issue has been logged to the bot console.",
                                    title: "FTAP Rank System",
                                    footer: "Bot created by mvh2016 | mvh#3155"
                                }});
                            })
                        }
                    }).catch(function(err){
                        message.channel.send({embed: {
                            color: 15406156,
                            description: "Oops! Something went wrong. The issue has been logged to the bot console.",
                            title: "FTAP Rank System",
                            footer: "Bot created by mvh2016 | mvh#3155"
                        }});
                    });
                }).catch(function(err){
                    message.channel.send({embed: {
                        color: 15406156,
                        description: `Oops! ${username} does not exist in the Roblox user database. Perhaps you misspelled?`,
                        title: "FTAP Rank System",
                        footer: "Bot created by mvh2016 | mvh#3155"
                    }});
                });
            } else {
                message.channel.send({embed: {
                    color: 15406156,
                    description: "Please specify a target username.",
                    title: "FTAP Rank System",
                    footer: "Bot created by mvh2016 | mvh#3155"
                }});
            }
            return;
    }

    if(command === 'promote') {
        if(!message.member.roles.some(r=>["Ranking Permissions"].includes(r.name)) )
            return message.channel.send({embed: {
                color: 15406156,
                description: "You need the `Ranking Permissions` role to run this command.",
                title: "FTAP Rank System",
                footer: "Bot created by mvh2016 | mvh#3155"
            }});
            var username = args[0]
            if (username){
                rbx.getIdFromUsername(username)
                .then(function(id){
                    rbx.getRankInGroup(config.groupId, id)
                    .then(function(rank){
                        if(config.maximumRank <= rank){
                            message.channel.send({embed: {
                                color: 15406156,
                                description: "This rank cannot be promoted by this bot.",
                                title: "FTAP Rank System",
                                    footer: "Bot created by mvh2016 | mvh#3155"
                            }});
                        } else {
                            rbx.promote(config.groupId, id)
                            .then(function(newRole){
                                message.channel.send({embed: {
                                    color: 8117429,
                                    description: `You have successfully promoted ${username}!`,
                                    title: "FTAP Rank System",
                                    footer: "Bot created by mvh2016 | mvh#3155"
                                }});
                                if(config.logchannelid === 'false') return;
                                var logchannel = message.guild.channels.get(config.logchannelid);
                                logchannel.send({embed: {
                                    color: 11253955,
                                    description: `<@${message.author.id}> has promoted ${username}.`,
                                    title: "FTAP Rank System",
                                    footer: {
                                        text: 'Bot created by mvh2016 | mvh#3155'
                                    },
                                    timestamp: new Date(),
                                    thumbnail: {
                                        url: `http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&Format=Png&username=${username}`
                                    }
                                }});
                            }).catch(function(err){
                                console.log(chalk.red('Issue with promote: ' + err));
                                message.channel.send({embed: {
                                    color: 15406156, 
                                    description: "An error occurred.",
                                    title: "FTAP Rank System",
                                    footer: "Bot created by mvh2016 | mvh#3155"
                                }});
                            })
                        }
                    }).catch(function(err){
                        message.channel.send({embed: {
                            color: 15406156,
                            description: "An error occurred.",
                            title: "FTAP Rank System",
                            footer: "Bot created by mvh2016 | mvh#3155"
                        }});
                    });
                }).catch(function(err){
                    message.channel.send({embed: {
                        color: 15406156,
                        description: `${username} does not exist in the Roblox user database. Please try again.`,
                        title: "FTAP Rank System",
                        footer: "Bot created by mvh2016 | mvh#3155"
                    }});
                });
            } else {
                message.channel.send({embed: {
                    color: 15406156,
                    description: "Please specify a target username.",
                    title: "FTAP Rank System",
                    footer: "Bot created by mvh2016 | mvh#3155"
                }});
            }
            return;
    }

    if(command === "demote") {
        if(!message.member.roles.some(r=>["Ranking Permissions"].includes(r.name)) )
            return message.channel.send({embed: {
                color: 15406156,
                description: "You need the `Ranking Permissions` role to run this command.",
                author: {
                    name: message.author.tag,
                    icon_url: message.author.displayAvatarURL
                }
            }});
            var username = args[0]
            if (username){
                rbx.getIdFromUsername(username)
                .then(function(id){
                    rbx.getRankInGroup(config.groupId, id)
                    .then(function(rank){
                        if(config.maximumRank <= rank){
                            message.channel.send({embed: {
                                color: 15406156,
                                description: "Unfortunately, Fun Times Bot was unable to rank this user.",
                                title: "FTAP Rank System",
                                    footer: "Bot created by mvh2016 | mvh#3155"
                            }});
                        } else {
                            rbx.demote(config.groupId, id)
                            .then(function(newRole){
                                message.channel.send({embed: {
                                    color: 8117429,
                                    description: `You have successfully demoted ${username}!`,
                                    title: "FTAP Rank System",
                                    footer: "Bot created by mvh2016 "
                                }});
                                if(config.logchannelid === 'false') return;
                                var logchannel = message.guild.channels.get(config.logchannelid);
                                logchannel.send({embed: {
                                    color: 11253955,
                                    description: `<@${message.author.id}> has demoted ${username}.`,
                                    title: "FTAP Rank System",
                                    footer: {
                                        text: 'Bot created by mvh2016 | mvh#3155'
                                    },
                                    timestamp: new Date(),
                                    thumbnail: {
                                        url: `http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&Format=Png&username=${username}`
                                    }
                                }});
                            }).catch(function(err){
                                console.log(chalk.red('Issue with demote: ' + err));
                                message.channel.send({embed: {
                                    color: 15406156, 
                                    description: "An error occurred.",
                                    title: "FTAP Rank System",
                                    footer: "Bot created by mvh2016 | mvh#3155"
                                }});
                            })
                        }
                    }).catch(function(err){
                        message.channel.send({embed: {
                            color: 15406156,
                            description: "An error occurred.",
                            title: "FTAP Rank System",
                            footer: "Bot created by mvh2016 | mvh#3155"
                        }});
                    });
                }).catch(function(err){
                    message.channel.send({embed: {
                        color: 15406156,
                        description: `${username} does not exist in the Roblox user database. Please try again.`,
                        title: "FTAP Rank System",
                        footer: "Bot created by mvh2016 | mvh#3155"
                    }});
                });
            } else {
                message.channel.send({embed: {
                    color: 15406156,
                    description: "Please specify a target username.",
                    title: "FTAP Rank System",
                    footer: "Bot created by mvh2016 | mvh#3155"
                }});
            }
            return;
    }
})

client.login(token);
