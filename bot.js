const Discord = require('discord.js');
const client = new Discord.Client();

var counting = false;

client.on('message', message => {
  if (message.content === "!count" && !counting) {
    counting = true;
    count(message, 15);
  }
});

function count(message, number) {
  if(number > 0) {
    message.reply(number);
    number--;
    setTimeout(function() { count(message, number) }, 1000);
  } else {
    counting = false;
  }
}

client.login(process.env.BOT_TOKEN);
