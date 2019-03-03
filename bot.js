const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");




client.on("ready", () => {
let channel =     client.channels.get("541264198034915348")
setInterval(function() {
channel.send(`Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , `);
}, 30)
})

var prefix = "!"

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });



  
  
 client.login(process.env.BOT_TOKEN);
