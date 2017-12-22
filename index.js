
const YTDL =require("ytdl-core");
const Discord = require("discord.js");
const Token = "MzkyNjUyNDE3Nzg4OTM2MTky.DRqVpw.6lys8xSVim-tbP7xGKNxA00y8mY";
var servers ={};


var bot = new  Discord.Client();
const Prefix = "-";
function generateHex(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}
var optiuni = [
    "Da","Nu","Poate","Fuck you"
];
bot.on("ready",function(){
console.log("ready");
});

bot.on("guildMemberAdd", function(member){
 member.guild.channels.find("name", "general").sendMessage(member.toString()+ "Bun venit pe sv \n Foloseste comanda Info pentru ajutor");
member.addRole(member.guild.roles.find("name","Member"));
member.guild.createRole({
name:member.user.username,
color:generateHex(),
Permissions:[]
}).then(function(role){
    member.addRole(role);
})

})
bot.on("guildMemberRemove",function(remove){
remove.guild.channels.find("name","general").sendMessage(remove.toString()+ "A iesit de pe sv");

}); 






bot.on("message",function(message){
if(message.author.equals(bot.user)) return;



if(!message.content.startsWith(Prefix)) return;
var args = message.content.substring(Prefix.length).split(" ");

switch(args[0].toLocaleLowerCase()){
case "ping":
message.channel.sendMessage("pong");
break;
case "intrebare" :
if(args[1]){
message.channel.sendMessage(optiuni[Math.floor(Math.random() * optiuni.length)]);

}
else{
message.channel.sendMessage("Nu este intrebare");

}
break;
case "info" :
var embed = new Discord.RichEmbed()
.setTitle("Games Roles")
.setAuthor("Author Andutub", "https://i.imgur.com/lwV040b.jpg")
.addField("Dead By Daylight", "Pentru a primi DeadByDaylight\nTrebuie sa scrii -dbd.addrole", true,)
.addField("Brawlhalla", "Pentru a primi Brawlhalla\nTrebuie sa scrii -brawlhalla.addrole",true)
.addField("Counter-Strike: Global Offensive", "Pentru a primi CS:GO\nTrebuie sa scrii-cs:go.addrole",true)
.addField("Deceit", "Pentru a primi rolul Deceit\nTrebuie sa scrii -deceit.addrole",true)
.addField("Fortnite", "Pentru a primi rolul Fortnite\nTrebuie sa scrii -fortnite.addrole",true)
.addField("LeagueOfLegends", "Pentru a primi rolul LeagueOfLegends\nTrebuie sa scrii -lol.addrole",true)
.addField("Unturned", "Pentru a primi rolul Unturned\nTrebuie sa scrii -unturned.addrole",true)
.setColor(0xFF7C00)
.setFooter("Pentru alte roluri faceti cerere pe canalul Roles")
.setThumbnail("https://i.imgur.com/LmMUnkU.jpg")
message.channel.sendEmbed(embed);
break;
case "mention":
message.channel.sendMessage(message.author.toString() + "Vino la Dead by daylight");
break;
case "poza":
message.channel.sendMessage(message.author.avatarURL);
break;
case "dbd.addrole":
message.member.addRole(message.member.guild.roles.find("name","DeadByDaylight" ));
message.channel.sendMessage("Ai primit rolul DeadByDaylight");
break;
case "brawlhalla.addrole":
message.member.addRole(message.member.guild.roles.find("name","Brawlhalla" ));
message.channel.sendMessage("Ai primit rolul Brawlhalla");
break;
case "cs:go.addrole":
message.member.addRole(message.member.guild.roles.find("name","CS:GO"));
message.channel.sendMessage("Ai primit rolul CS:GO");
break;
case "deceit.addrole":
message.member.addRole(message.member.guild.roles.find("name", "Deceit"));
message.channel.sendMessage("Ai primit rolul Deceit");
break;
case "fortnite.addrole":
message.member.addRole(message.member.guild.roles.find("name", "Fortnite"));
message.channel.sendMessage("Ai primit rolul Fortnite");
break;
case "unturned.addrole":
message.member.addRole(message.member.guild.roles.find("name", "Unturned"));
message.channel.sendMessage("Ai primit rolul Unturned");
break;
case "lol.addrole":
message.member.addRole(message.member.guild.roles.find("name", "LeagueOfLegends"));
message.channel.sendMessage("Ai primit rolul LeagueOfLegends");
break;
case "remove":
message.member.removeRole(message.member.guild.roles.find("name","Member"));
break;
default:
message.channel.sendMessage("Invalid Command");
break;




}//Switch Final


});
bot.login(Token);


