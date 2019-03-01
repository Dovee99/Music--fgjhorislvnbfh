const Discord = require('discord.js');
const client = new Discord.Client();// npm install discord.js --save
 


    
     var guild = client.guilds.get('508627023808430130');
         setInterval(function(){
var role = guild.roles.find(role=> role.name === 'Support Team');
if(!role) return;
             role.edit({
                 color : "RANDOM"
             });
         }, 1700)
});
    
 
 client.login(process.env.BOT_TOKEN);
