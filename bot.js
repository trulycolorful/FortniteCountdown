const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  if (message.content === "!count") {
    count(5);
  }
});

function count(number) {
  if(number > 0) {
    message.reply(number);
    number--;
    setTimeout(count(number), 1000);
  }
}

client.login(process.env.BOT_TOKEN);
