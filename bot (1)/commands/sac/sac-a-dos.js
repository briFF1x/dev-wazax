const {MessageEmbed} = require("discord.js")
const fs = require("fs")

exports.run = async(client, message, args) => {
  const db = JSON.parse(fs.readFileSync("json/db.json"))
  if(!db[message.guild.id]) db[message.guild.id] = {}
  let member = message.mentions.members.first() || message.member
  if(!db[message.guild.id][member.user.id]) db[message.guild.id][member.user.id] = {"arme":null, "telephone":null, "gps":null, "crochetage":null, "weed":null? "coke":null, "meth":null}

  await fs.writeFileSync("json/db.json", JSON.stringify(db, 0, 4))

  let arme = db[message.guild.id][member.user.id]["arme"] || "<:zylim_off:784869799750139914> | Aucun"
  let telephone = db[message.guild.id][member.user.id]["telephone"] || "<:zylim_off:784869799750139914> | Aucun"
  let gps = db[message.guild.id][member.user.id]["gps"] || "<:zylim_off:784869799750139914> | Aucun"
  let crochetage = db[message.guild.id][member.user.id]["crochetage"] || "<:zylim_off:784869799750139914> | Aucun"
  let weed = db[message.guild.id][member.user.id]["weed"] || "<:zylim_off:784869799750139914> | Aucun"
  let coke = db[message.guild.id][member.user.id]["coke"] || "<:zylim_off:784869799750139914> | Aucun"
  let meth = db[message.guild.id][member.user.id]["meth"] || "<:zylim_off:784869799750139914> | Aucun"

  message.channel.send(

    new MessageEmbed()
      .setColor("RED")
      .setDescription(`**Monsieur ${member.user.username},

      Voici votre Sac à Dos :** 

      *Armes : ${arme} 
      
      Téléphone :  ${telephone}
      
      GPS : ${gps}
      
      Outil de crochetage : ${crochetage}
      
      Weed : ${weed}*`)
      .setThumbnail('https://cdn.discordapp.com/attachments/819571084591628329/819598326534111262/image0.jpg')
      .setFooter(`${message.guild.name}`)
      .setTimestamp()
      
  )

}

exports.help = {
  name: "sac",
  usage: "sac",
  aliases: ["sac-a-dos", "sad"],
  description: "Affiche la carte d'identité."
  
  }