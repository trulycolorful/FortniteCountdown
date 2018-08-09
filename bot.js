const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  if (message.content === "!count") {
    for(var i = 5; i > 0; i--) {
      message.reply(i);
      sleep(10000);
    }
  }
});

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time || 10000);
    });
}

client.login(process.env.BOT_TOKEN);
