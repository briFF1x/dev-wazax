const Discord = require('discord.js')

exports.run = async(client, message, args) => {

  const msgToSend = args.join(' ')
  let member = message.mentions.users.first()
   if(!message.member.hasPermission("ADMINISTRATOR, MANAGE MESSAGE"))
    return message.channel.send(
      new MessageEmbed()
        .setColor("RED")
        .setDescription(`:x: | Tu n'a pas la permission de faire ceci`)
    ).then(msg => {message.delete(); msg.delete({timeout: 5000})})


  if (!member) return message.channel.send('Veuillez mentionner le membre à With list.')
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('**WL Acceptée**')
            .setDescription(`${member} Tu as réussi ta candidature ! 
            Pense à lire le règlement pour réussir ton oral !
            
            Les Douaniers enveront un message quand ils seront disponible pour ton recrutement ! 
            
            Bonne chance !`)
            .setColor('20ff36')
            .setThumbnail('https://cdn.discordapp.com/attachments/787776418309210114/804451583856214016/image0.jpg')
            .setFooter('WL ACCEPTE .')
            .setTimestamp()
            )
    },


exports.help = {
  name:"wl-valide"
}