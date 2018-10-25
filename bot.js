const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'

client.on('message', function(message) {
	const myID = "321779633252990976";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "changename")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('لا تلعب في حساب غيرك ياشاطر');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "stream")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('ا تلعب في حساب غيرك ياشاطر');
        client.user.setGame(args , 'https://twitch.tv/6xlez1');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "listen")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('ا تلعب في حساب غيرك ياشاطر');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
    });
    }
});

client.login(process.env.BOT_TOKEN);
