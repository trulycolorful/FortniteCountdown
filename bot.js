const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', message => {
  if (message.content === "!count") {
    count(message, 5);
  }
});

function count(message, number) {
  if(number > 0) {
    message.reply(number);
    number--;
    setTimeout(function() { count(message, number) }, 1000);
  }
}

client.login(process.env.BOT_TOKEN);
