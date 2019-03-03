const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");




client.on("ready", () => {
let channel =     client.channels.get("541264198034915348")
setInterval(function() {
channel.send(`Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , `);
}, 25)
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'السلام عليكم ورحمة الله وبركاته') {
              message.channel.send('**وعليكم السلام ورحمة الله وبركاته**');
              message.channel.sendFile("./photoshop.PNG");
               
 
            }
});
 
 client.login(process.env.BOT_TOKEN);

    
    
    
