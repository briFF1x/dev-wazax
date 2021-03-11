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
  if(!db[message.guild.id]["channels"]) db[message.guild.id]["channels"] = {}
  let channel = message.mentions.channels.first()
  if (!args[0] || !channel)
    return message.channel.send(
      new MessageEmbed()
        .setColor("RED")
        .setDescription(`Utilisation: /set-role [lspd, ems, braquage, tweet, darkweb, lbc, action-rp]`)
    )
  if (!["lspd", "ems", "braquage", "tweet", "darkweb", "lbc", "action-rp"].includes(args[0])) return message.channel.send(
    new MessageEmbed()
      .setColor("RED")
      .setDescription(`:x: | Le métier ${args[0]} n'existe pas
      
      Métiers disponible : lspd,ems,épicier,citoyen,banquier,journaliste,gouvernement`)
  )
  db[message.guild.id]["channels"][args[0]] = channel.id
  fs.writeFileSync("json/db.json", JSON.stringify(db, 0, 4))

  message.channel.send(
    new MessageEmbed()
      .setColor("BLUE")
      .setDescription(`Le channel ${channel.name} ${args[0]} a correctement été configuré`)
      .setThumbnail('')
  )
}

exports.help = {
  name: "set-channel"
}