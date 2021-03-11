const {MessageEmbed} = require("discord.js")
const fs = require("fs")

exports.run = async(client, message, args) => {
  const db = JSON.parse(fs.readFileSync("json/db.json"))
  if(!db[message.guild.id]) db[message.guild.id] = {}
  let member = message.mentions.members.first() || message.member
  if(!db[message.guild.id][member.user.id]) db[message.guild.id][member.user.id] = {"nom":null, "prenom":null, "age":null}

  await fs.writeFileSync("json/db.json", JSON.stringify(db, 0, 4))

  let nom = db[message.guild.id][member.user.id]["nom"] || "<:zylim_off:784869799750139914> | Non spécifié"
  let prenom = db[message.guild.id][member.user.id]["prenom"] || "<:zylim_off:784869799750139914> | Non spécifié"
  let age = db[message.guild.id][member.user.id]["age"] || "<:zylim_off:784869799750139914> | Non spécifié"
  let sexe = db[message.guild.id][member.user.id]["sexe"] || "<:zylim_off:784869799750139914> | Non spécifié"
  let naissance = db[message.guild.id][member.user.id]["naissance"] || "<:zylim_off:784869799750139914> | Non spécifié"

  message.channel.send(

    new MessageEmbed()
      .setColor("YELLOW")
      .setDescription(`**Monsieur ${member.user.username},

      Voici votre carte d'identité :** 

      *Prénom : ${prenom} 
      
      Nom :  ${nom}
      
      Age : ${age}
      
      Sexe : ${sexe}
      
      Lieu de naissance : ${naissance}*`)
      .setThumbnail('https://cdn.discordapp.com/attachments/804606544351068191/810470662174801920/image1.png')
      .setFooter(`${message.guild.name}`)
      .setTimestamp()
      
  )

}

exports.help = {
  name: "id",
  usage: "id",
  aliases: ["identity", "ci"],
  description: "Affiche la carte d'identité."
  
  }