const Discord = require("discord.js")
const prefix = "?"

const bot = new Discord.Client({ disableEveryone: true })

bot.on("ready", async() => {
    console.log(`Descriptive is ready!`)
    
    bot.user.setActivity("Spaxe » ?home", {
  type: "PLAYING"

});
});

bot.on("message", async message => {
    if (message.author.bot) return;

    if (message.content.indexOf(prefix) !== 0) return;
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase()

    if (command == "server-rule") {
        var countdownEmbed = new Discord.MessageEmbed()
            .setColor('#2e3136')
            .setImage('https://cdn.dribbble.com/users/43762/screenshots/1193016/mtn-graph-dribbbble.gif')


        var countdownEmbed2 = new Discord.MessageEmbed()
           	.setColor('#2e3136')
            .setTitle(`<:rule:833638001870503976> Server Rules`)
            .setDescription(`**1.** Treat everyone with respect. Absolutely no harassment, witch hunting, sexism, racism, or hate speech will be tolerated.\n\n**2.** No spam or self-promotion (server invites, advertisements, etc) without permission from a staff member. This includes DMing fellow members.\n\n**3.** No NSFW or obscene content. This includes text, images, or links featuring nudity, sex, hard violence, or other graphically disturbing content.\n\n**4.** If you see something against the rules or something that makes you feel unsafe, let staff know. We want this server to be a welcoming space!`)

        .setThumbnail(bot.user.avatarURL)
            .setFooter(`engine by: ${message.author.username}`)

        message.channel.send({ embed: countdownEmbed }).then((msg) => {
            setTimeout(function() {
                msg.edit(countdownEmbed2);
            }, 1000)
        })
    }
    
if (command == "battery-charge") {
    
    var low = new Discord.MessageEmbed()
    .setColor('#2e3136')
    .setDescription(`<:battery_low:833638000905945109>`)

    var full = new Discord.MessageEmbed()
    .setColor('#2e3136')
    .setDescription(`<:battery_full:833638002885918760>`)
    
            message.channel.send({ embed: low }).then((msg) => {
            setTimeout(function() {
                msg.edit(full);
            }, 4000)
        })
}
    
if (command == "cut-off") {
    var cut = new Discord.MessageEmbed()
       	.setColor('#2e3136')
    	.setImage('https://media1.tenor.com/images/bd030a7745e1ae72a6c27e13a23fbfdf/tenor.gif?itemid=14870978')
    message.channel.send(cut)
}
    
if (command == "server-members") {
    var members = new Discord.MessageEmbed()
    	.setColor('#2e3136')
    	.setTitle(`<:pensil:833631773425401926> Server Members`)
		.setDescription(`On this server we have **${message.guild.memberCount}** member's`)
    	.setImage('https://cdn.discordapp.com/attachments/834125930778853407/834338737861165106/20210421_100351.png')
    message.channel.send(members)
}
    
if (command == "author") {
    var members = new Discord.MessageEmbed()
    	.setColor('#2e3136')
    	.setTitle(`<:dev:833637949916315709> Bot Author`)
		.setDescription(`**.Szymak#0007**\n\n<:szymakdev:834422233186172988> - <@&832345644148588596> \n\n[Github](https://github.com/szymakDEV)\n[Discord](https://discord.com/users/800409527454662696
)`)
    .setImage('https://cdn.discordapp.com/attachments/833601054435966978/835086019401089104/unknown.png')
    message.channel.send(members)
}
    
if (command == "home") {
    var members = new Discord.MessageEmbed()
    	.setColor('#2e3136')
    	.setTitle(`You have been helped!`)
		.setDescription("**<:category:833638000697016340> | Server**\n\n<:channel:833631941097947156> | `?server-members`\n<:channel:833631941097947156> | `?server-rule`\n\n**<:category:833638000697016340> Tools**\n\n<:channel:833631941097947156> | `?cut-off`\n\n**<:category:833638000697016340> | Bot**\n\n<:channel:833631941097947156> | `?advertising`\n<:channel:833631941097947156> | `?author`\n<:channel:833631941097947156> | `?bot-link`\n\n ** <:category:833638000697016340> | Fun**\n\n<:channel:833631941097947156> | `?battery-charge`\n\nPrefix: `?`\nCommand's: `7`")
    	.setImage('https://cdn.discordapp.com/attachments/833617075423412275/834431801585958972/20210421_161336.png')
    message.channel.send(members)
}
    
if (command == "advertising") {
    var advertising = new Discord.MessageEmbed()
        .setColor('#2e3136')
    	.setTitle(`Descriptive bot advertising!`)
    	.setDescription(`**Descriptive**\nJoin us and have fun!\n\n
Are you looking for a bot that offers a beautiful design and cool commands? This is the right place for you!\n\n**SOCIALS**\n[Support server](https://discord.gg/s9BDjA5Jpk)\n[Bot github](https://github.com/szymakDEV/Descriptive)\n[Add a bot](https://discord.com/oauth2/authorize?client_id=833601159541030914&scope=bot&permissions=805314686)`)
    	.setImage('https://cdn.discordapp.com/attachments/833617075423412275/834431801585958972/20210421_161336.png')
    
    message.channel.send(advertising)
}
    
if (command == "message") {
    var message = new Discord.MessageEmbed()
    message.delete() 

   if (message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(message.content.slice(prefix.length+7)) 
   else
   return message.channel.send("To send a message from the bot you must have the appropriate Moderation permissions!")  
    
  	message.channel.send(message)
}
    
if (command == "ogloszenie") {
    var ogloszenie = new Discord.MessageEmbed()
    .setTitle('Advertisement')
    .setDescription("Discord server expanded!\nServer got new channels!")
    message.channel.send(ogloszenie)
    }
   
});

bot.login('token')
