const {MessageEmbed} = require("discord.js")
const fs = require("fs")

exports.run = async (client, message, args) => {

  const db = JSON.parse(fs.readFileSync("json/db.json"))
  let vowels = /[aeiou]/gi;
  const member = message.mentions.members.first()
  if(!db[message.guild.id]) db[message.guild.id] = {}
  if(!db[message.guild.id][member.user.id]) db[message.guild.id][member.user.id] = {}
  if(!db[message.guild.id]?.roles["gouvernement"]) return message.channel.send(
    new MessageEmbed()
      .setColor("RED")  
      .setDescription(`:x: | Le rôle pour le gouvernement n'a pas été définis.`))
  if(!message.member.roles.cache.some(e => e.id == db[message.guild.id]?.roles["gouvernement"])) return message.channel.send(
    new MessageEmbed()
      .setColor("RED")
      .setDescription(`:x: | Tu n'a pas la permission de faire ceci`)
  )
  db[message.guild.id][member.user.id][args[1]] = args[2]
  if(args[0] == "age" && isNaN(parseInt(args[2]))) return message.channel.send(
    new MessageEmbed()
      .setColor("RED")  
      .setDescription(`:x: | ${args[2]} n'est pas un âge valide.`)
  )
  if(args[0] == "age" && args[2] >= 99 ) return message.channel.send(
    new MessageEmbed()
      .setColor("RED")  
      .setDescription(`:x: | ${args[2]} n'est pas un âge valide.`)
  )

  fs.writeFileSync("json/db.json", JSON.stringify(db, 0, 4))

  message.channel.send(
    new MessageEmbed()
      .setColor("BLUE")
      .setTitle('<:ci:819325997211975720> | Modification Carte d\'identité')
      .setDescription(`<:homme:819331764753006688> | Citoyen → ${member.user.tag}
      

      <a:azylim_parametres:783011702898688030> | Valeur modifiée → ${args[1]}
      
      
      <:zylim_on:783011493645254656> | Nouvelle valeur →  ${args[2]}
      
      `)
      .setThumbnail('https://cdn.discordapp.com/attachments/782709402737180672/819322389308768266/819322353002479646.gif')
  )
}

exports.help = {
  name: "config-ci",
  usage: "config-ci [<@user>] [<a config>] [<nouvelle valeur>]",
  aliases: ["cci"],
  description: "Commande de give (money) admin"
}