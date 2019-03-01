\const Discord = require('discord.js');
const client = new Discord.Client();


    client.on("ready", () => {

     var guild = client.guilds.get('server id');
         setInterval(function(){
var role = guild.roles.find(role=> role.name === 'Rainbow');
if(!role) return;
             role.edit({
                 color : "RANDOM"
             });
         }, 1700) 
});



client.login("token bot");
    
    
 
 client.login(process.env.BOT_TOKEN);
