const Discord = require('discord.js');
const client = new Discord.Client();

var counting = false;

client.on('message', message => {
  let role = message.guild.roles.find(role => role.name === "Muted");
  let darrin = message.guild.members.get('502226394789445632');
  let bear = message.guild.members.get('512462639377678368');;
  
  if (message.content === "!mutebear") {
    bear.addRole(role);
  }
  
  if (message.content === "!mutedarrin") {
    darrin.addRole(role);
  }
  
  if (message.content === "!unmutebear") {
    bear.removeRole(role);
  }
  
  if (message.content === "!unmutedarrin") {
    darrin.removeRole(role);
  }
});

client.login(process.env.BOT_TOKEN);
