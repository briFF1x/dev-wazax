const Discord = require('discord.js')
 
exports.run = async(client, message, args) => {

  const msgToSend = args.join(' ')
  let member = message.mentions.users.first()

  if(!args[0] || !args[1]) return message.reply(`Veuillez entrer l'article et le prix : /lbc [article] [prix].`)
  if(isNaN(args[1]))
    return message.reply(`${args[1]} n'est pas un prix`)
  message.delete()
  const embed = new Discord.MessageEmbed()
  .setTitle('LeBonCoin')
  .setDescription(`**:shopping_cart: | Nouvelle annonce LeBonCoin de ${message.author} :**
  
  
   *:shopping_bags: | Article: ${args[0]}
   
  <:emoji_168:793821994863951882> | Prix: ${args[1]}.*`)
  .setColor('ORANGE')
  .setFooter(`Annonce de ${message.author.username}`)
  .setThumbnail('https://cdn.discordapp.com/attachments/804606544351068191/804707737983254578/image0.png')
  .setTimestamp()
 message.channel.send(embed)
},


exports.help = {
  name:"lbc"
}