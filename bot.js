const Discord = require('discord.js');
const client = new Discord.Client();

var counting = false;

client.on('message', message => {
  let role = message.guild.roles.find(role => role.name === "Muted");
  let darrin = '';
  let bear = '';
  for (var i = 0; i < message.guild.members.length; i++) {
    if (message.guild.members[i].id === '502226394789445632') {
      darrin = message.guild.members[i];
    }
    
    if (message.guild.members[i].id === '512462639377678368') {
      darrin = message.guild.members[i];
    }
  }
  console.log(role.name);
  console.log(bear);
  
  if (message.content === "!mutebear") {
    console.log('muting bear');
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
