const Discord = require('discord.js');
const client = new Discord.Client();// npm install discord.js --save
 
lient.on("ready", () => {

     var guild = client.guilds.get('اي دي السيرفر');
         setInterval(function(){
var role = guild.roles.find(role=> role.name === 'اسم الرتبة');
if(!role) return;
             role.edit({
                 color : "RANDOM"
             });
         }, 1700)
});

    
    
    
 
 client.login(process.env.BOT_TOKEN);
