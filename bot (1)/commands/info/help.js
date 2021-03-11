const Discord = require('discord.js')
 
exports.run = async(client, message, args) => {

  message.delete()
  const embed = new Discord.MessageEmbed()
  .setTitle(`**<:antenne:798063493680201769> →  Pannel Aide**`)
  .setDescription(` <a:emoji_167:793821899171692574> → Economie

  
  <:niveau:754465638642090076> → RolePlay
  

  <a:devzyroq:754471821054705705> → Modération
  
  
  <a:azylim_parametres:783011702898688030> → Configuration`)
  .setFooter(`Commande par ${message.author.username}`)
  .setThumbnail('')
  .setTimestamp()
  .setColor("#0a00ff")
 message.channel.send(embed).then(m => {
  m.react('<a:emoji_167:793821899171692574>')
  m.react('<:niveau:754465638642090076>')
  m.react('<a:devzyroq:754471821054705705>')
  m.react('<a:azylim_parametres:783011702898688030>')
 })
}


exports.help = {
  name:"help"
}