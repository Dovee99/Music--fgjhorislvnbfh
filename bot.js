const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");




clie bot.on('message', message => {
    if (message.content === 'spam') {
        message.channel.send('spam');
        while (message.channel.send('spam')) {
            if (message.content === 'stop spam') {
                return message.channel.send('stopped');
            }
        }
    }
});
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
