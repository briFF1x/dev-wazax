const Discord = require('discord.js')
 
exports.run = async(client, message, args) => {

  const msgToSend = args.join(' ')

  if(!msgToSend) return message.reply(`Veuillez entrer l'action à faire.`)
  message.delete()
  const embed = new Discord.MessageEmbed()
  .setTitle('**Action**')
  .setDescription(`**${message.author} fait l'action suivante:** 

  > *${msgToSend}*`)
  .setFooter(`Action de ${message.author.username}`)
  .setThumbnail('https://cdn.discordapp.com/attachments/804606544351068191/804708265191407646/image0.gif')
  .setTimestamp()
  .setColor("#ffffff")
 message.channel.send(embed)
},


exports.help = {
  name:"action"
}