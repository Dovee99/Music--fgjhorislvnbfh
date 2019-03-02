const Discord = require('discord.js');
const client = new Discord.Client();


 client.on("ready", () => {
 
     var guild = client.guilds.get('508627023808430130');//أيدي سيرفرك
         setInterval(function(){
var role = guild.roles.find(role=> role.name === 'VIP');//إسم الرتبة
if(!role) return;
             role.edit({
                 color : "RANDOM"
             });
         }, 1700)
});



    
    
 
 client.login(process.env.BOT_TOKEN);
