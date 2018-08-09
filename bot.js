const Discord = require('discord.js');
const client = new Discord.Client();

var counting = false;

client.on('message', message => {
  if (message.content === "!count" && !counting) {
    counting = true;
    var channel = client.channels.find('name', 'Countdown');
    channel.join()
      .then(connection => {
        const dispatcher = connection.playFile('./countdown.wav');
        dispatcher.on('end', end => { 
          channel.leave();
          counting = false;
        });
      })
      .catch(err => console.log(err));
    
    count(message, 10);
  }
});

client.login(process.env.BOT_TOKEN);
