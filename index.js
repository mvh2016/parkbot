const Discord = require('discord.js');
const prefix = '//';
const token = process.env.token
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot is ready.')
    client.user.setActivity('Russian Railways', { type: "WATCHING" })
})

client.on('message', message => {
    
    // Verify

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

                message.channel.send('**:white_check_mark: You have been verified as '+lastLastResult+'.** \n\nIf this username is incorrect please verify with RoVer at http://verify.eryn.io/')
                message.member.send(':white_check_mark: You\'ve been verified as '+lastLastResult+' for Fun Times Amusement Park! Welcome! \n\n*This is an automated message. For assistance contact mvh#3155.*')
                message.member.setNickname(lastLastResult)
            });
    }
    
    // DMs

    if(message.guild === null) {
        // Checking if author is bot
        if(message.author.id != '673659346374230017') {
            message.channel.send('Awaiting')
            .then(function(){
                message.channel.awaitMessages(response => message.content, {
                    max: 1,
                    time: 300000000,
                    errors: ['time',]
                })
                .then((collected) => {
                    const collection = (`${collected.first().content}`)
                    if (message.author.id != '673659346374230017') {
                        message.channel.send('Ok, content is '+collection)
                    }
                    else ;
                })
                    .catch(function() {
                        message.channel.send('You didn\'t do as I said.')
                    })
            })
        }
        else ;
    }
    else ;

    if (message.channel.id === '676479335527481364') {
        var arg = message.content.toString().toLowerCase();
        let roleName = message.content;
        if (arg.includes('gmt')) {
            let role = message.guild.roles.find(x => x.name == roleName);
            if (!role){
                message.member.guild.createRole({
                    name: message.content,
                    mentionable: true
                }).then(function(role) {
                    message.member.addRole(role)
                    message.react('✅')
                    message.author.send(':white_check_mark: Timezone role created and added. '+message.author)
                })
            }
            else {
                var thisRole = message.guild.roles.find('name', roleName)
                message.member.addRole(thisRole)
                message.react('✅')
                message.author.send(':white_check_mark: Timezone role added. '+message.author)
            }}
        else if (arg.startsWith('^^')) ;
        else {
            message.react('❌')
            message.author.send(':x: Your timezone input must be an offset of the GMT timezone (i.e. GMT-5, GMT+8, GMT)')
        }
    }

    if (message.content === (`${prefix}help`)) {
        const help = new Discord.RichEmbed()
            .setTitle(':train2: Russian Railways Bot :train2:')
            .setDescription('A list of my commands!')
            .addField(`${prefix}`+'recruitment <time and timezone>', 'Schedules a recruitment session. Make sure to add the time and timezone as an argument.', false)
            .addField(`${prefix}`+'recruitment start', 'Announces the start of a recruitment session.', false)
            .addField(`${prefix}`)
    }
})

client.login(token);
