const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");




client.on("ready", () => {
let channel =     client.channels.get("541264198034915348")
setInterval(function() {
channel.send(`Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , `);
}, 25)
})


  console.log(`Logged in as ${client.user.tag}!`);

         client.on('message', message => {
            if (message.content === '!kh') {
                  msg.reply('#credit @GX||Đøvĕè#3902 5000');
              
 
            }
});
    
 
 client.login(process.env.BOT_TOKEN);

    
    
    
