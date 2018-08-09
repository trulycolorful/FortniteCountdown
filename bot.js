const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  if (message.content === "!count") {
    for(var i = 5; i > 0; i--) {
      message.reply(i);
      sleep(2500);
    }
  }
});

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time || 2500);
    });
}

client.login(process.env.BOT_TOKEN);
