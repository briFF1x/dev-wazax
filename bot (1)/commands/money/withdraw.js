const {MessageEmbed} = require("discord.js")
const db = require("../../json/db.json")

const fs = require("fs")

exports.run = async (client, message, args) => {

  if(!args[0] || isNaN(args[0]))
    return message.channel.send(
      new MessageEmbed()
        .setColor("RED")
        .setDescription(`Utilisation: ${this.help.usage}`)
    ).then(msg => {msg.delete({timeout: 5000}); message.delete()})
  
  if(!db[message.guild.id]) db[message.guild.id]={}   
  if(!db[message.guild.id][message.author.id]) db[message.guild.id][message.author.id] = {"bank":0, "cash":0}

  if(db[message.guild.id][message.author.id]["bank"] < args[0])
    return message.channel.send(
      new MessageEmbed()
        .setColor("RED")
        .setDescription(`Tu n'a que ${db[message.guild.id][message.author.id]["bank"]}$ en banque`)
    ).then(msg => {msg.delete({timeout: 5000}); message.delete()})
  
  db[message.guild.id][message.author.id]["bank"] -= parseFloat(args[0])
  db[message.guild.id][message.author.id]["cash"] += parseFloat(args[0])
  
  fs.writeFileSync("./json/db.json", JSON.stringify(db, 0, 4))

  let bank = db[message.guild.id][message.author.id]["bank"]

  message.channel.send(
    new MessageEmbed()
      .setColor("BLUE")
      .setDescription(`*Monsieur ${message.author.username},
      
      Vous avez retiré ${args[0]} de votre compte en banque,
      Le solde total de votre compte est de : ${bank+cash}$.*`)
      .setThumbnail('https://cdn.discordapp.com/attachments/804606544351068191/804611219184025601/image1.gif')
  )

}

exports.help = {
  name: "withdraw",
  aliases: ["with"],
  usage: "/with [montant]"
}