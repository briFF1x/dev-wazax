const { MessageEmbed } = require("discord.js")
const fs = require("fs")

exports.run = async (client, message, args) => {

const db = JSON.parse(fs.readFileSync("json/db.json"))
  

  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      new MessageEmbed()
        .setColor("RED")
        .setDescription(`:x: | Tu n'a pas la permission de faire ceci`)
    )

  if(!db[message.guild.id]) db[message.guild.id] = {}
  if(!db[message.guild.id]["roles"]) db[message.guild.id]["roles"] = {}
  let role = message.mentions.roles.first()
  if (!args[0] || !role)
    return message.channel.send(
      new MessageEmbed()
        .setColor("RED")
        .setDescription(`Utilisation: /set-role [staff/lspd/ems/épicier/citoyen/banquier/journaliste/gouvernement]`)
    )
  if (!["staff", "lspd", "ems", "épicier", "citoyen", "banquier", "journaliste", "gouvernement"].includes(args[0])) return message.channel.send(
    new MessageEmbed()
      .setColor("RED")
      .setDescription(`:x: | Le métier ${args[0]} n'existe pas
      
      Métiers disponible : lspd,ems,épicier,citoyen,banquier,journaliste,gouvernement`)
  )
  db[message.guild.id]["roles"][args[0]] = role.id
  fs.writeFileSync("json/db.json", JSON.stringify(db, 0, 4))

  message.channel.send(
    new MessageEmbed()
      .setColor("BLUE")
      .setDescription(`Le rôle ${role.name} pour le métier: ${args[0]} a correctement été configuré`)
      .setThumbnail('')
  )
}

exports.help = {
  name: "set-role"
}