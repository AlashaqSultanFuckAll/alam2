const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'
client.on('ready', () => {
  console.log('======================================')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=======================================')
});

client.on('message', message => {
    var prefix = "$";

      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == 394565174184640524) return;


    if (message.content.startsWith(prefix + 'playing')) {
    if (message.author.id !== '394565174184640524') return message.reply('**  لا تلعب ياحبيبي في حساب غيرك**')
    client.user.setGame(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
    } else


    if (message.content.startsWith(prefix + 'streem')) {
    if (message.author.id !== '394565174184640524') return message.reply('**  لا تلعب ياحبيبي في حساب غيرك **')
    client.user.setGame(argresult, "http://twitch.tv/fivestore");
        message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
    } else

    if (message.content.startsWith(prefix + 'setname')) {
    if (message.author.id !== '394565174184640524') return message.reply('**  لا تلعب ياحبيبي في حساب غيرك **')
      client.user.setUsername(argresult).then
          message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
      return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
    } else

    if (message.content.startsWith(prefix + 'setavatar')) {
    if (message.author.id !== '394565174184640524') return message.reply('** لا تلعب ياحبيبي في حساب غيرك **')
    client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
    }



     });

client.login(process.env.BOT_TOKEN);

