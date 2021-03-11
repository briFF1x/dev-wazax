const {MessageEmbed} = require("discord.js")
const db = require("../../json/db.json")
const fs = require("fs")

exports.run = async(client, message, args) => {

  if(!db[message.guild.id]) db[message.guild.id] = {}
  if(!db[message.guild.id][message.author.id]) db[message.guild.id][message.author.id] = {"bank":0, "cash":0, "sale": 0}

  await fs.writeFileSync("./json/db.json", JSON.stringify(db, 0, 4))

  let bank = db[message.guild.id][message.author.id]["bank"]
  let cash = db[message.guild.id][message.author.id]["cash"]
  let sale = db[message.guild.id][message.author.id]["sale"]

  message.channel.send(

    new MessageEmbed()
      .setColor("GREEN")
      .setAuthor(`Monsieur ${message.author.username},`, message.author.avatarURL())
      .setDescription(`**Monsieur ${message.author.username},

      Voici vos soldes bancaire :** 

      <:coin:798063708919300106> | Liquide : ${cash}$ 

      <:emoji_168:793821994863951882> | Banque :  ${bank}$ 

      ||Sale : ${sale} $||
      
      <:emoji_168:793821981048307712> | Total : ${cash+bank}$`)
      .setThumbnail('https://cdn.discordapp.com/attachments/804606544351068191/808745388948848640/image0.gif')
      .setFooter(`${message.guild.name}`)
      .setTimestamp()
      
  )

}

exports.help = {
  name: "money",
  usage: "money",
  aliases: ["balance", "bal"],
  description: "Affiche la somme d'argent que tu a en banque et en cash."
}