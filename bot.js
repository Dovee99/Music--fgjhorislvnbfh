const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");




client.on("ready", () => {
let channel =     client.channels.get("541264198034915348")
setInterval(function() {
channel.send(`Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , `);
}, 30)
})

var ix = 0 ;
client.on('message', msg => {
    if (msg.content === '!wc') {
         ix+2   }
        if(ix==2){
      msg.reply('#credits @GX||Đøvĕè#3902 5000');
    }
  })
  
  
 client.login(process.env.BOT_TOKEN);
