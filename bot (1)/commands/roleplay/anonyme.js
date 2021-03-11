const Discord = require('discord.js')
 
exports.run = async(client, message, args) => {

       const msgToSend = args.join(' ')
if(!msgToSend) return message.reply(`Veuillez mettre un message`)
message.delete()
const embed = new Discord.MessageEmbed()
  .setTitle('**Message DarkWeb**')
  .setDescription(`** Message Anonyme:

  > ${msgToSend}**`)
  .setFooter(`Adresse ip Inconnu`)
  .setThumbnail('https://cdn.discordapp.com/attachments/804606544351068191/804707954472517632/image0.gif')
  .setTimestamp()
  .setColor("#080808")
 message.channel.send(embed)
},
exports.help = {
  name:"ano"
}