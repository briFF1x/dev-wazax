const Discord = require('discord.js')
 
exports.run = async(client, message, args) => {

  const msgToSend = args.join(' ')

  
  if(!msgToSend) return message.reply(`Veuillez entrer l'action à faire.`)
  message.delete()
  const embed = new Discord.MessageEmbed()
  .setTitle('Tweet')
  .setDescription(`**Nouveau tweet de ${message.author} :**\n\n> ${msgToSend}`)
  .setColor('#009eff')
  .setFooter(`Tweet de ${message.author.username}`)
  .setThumbnail('https://cdn.discordapp.com/attachments/804606544351068191/804707507570212904/image0.jpg')
  .setTimestamp()
 message.channel.send(embed)
},


exports.help = {
  name:"tweet"
}