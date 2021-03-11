const {MessageEmbed} = require("discord.js")
const fs = require("fs")
const db = require("../../json/db.json")

exports.run = async (client, message, args) => {

  // Vérifier les arguments
  let member = message.mentions.users.first()

  if(args[1] == "all" && member){

    db[message.guild.id][member.id]["cash"] += db[message.guild.id][message.author.id]["cash"]

    message.channel.send(

      new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`Monsieur ${member.username},\n
        Vous avez reçu ${db[message.guild.id][message.author.id]["cash"]}$ de la part de ${message.author.username}`)

    )

    db[message.guild.id][message.author.id]["cash"] -= db[message.guild.id][message.author.id]["cash"]

    return fs.writeFileSync("./json/db.json", JSON.stringify(db, 0, 4))

  }

  if(!args[1] || isNaN(args[1]) || !member)
    return message.channel.send(
      new MessageEmbed()
        .setColor("RED")
        .setDescription(`Utilisation: ${this.help.usage}`)
    ).then(msg => {msg.delete({timeout: 5000}); message.delete()})
  
  // Vérifier la bdd

  if(!db[message.guild.id]) db[message.guild.id]={}   

  if(!db[message.guild.id][message.author.id]) db[message.guild.id][message.author.id] = {"bank":0, "cash":0}

  if(!db[message.guild.id][member.id]) db[message.guild.id][member.id] = {"bank":0, "cash":0}

  // Vérifier le solde cash

  if(db[message.guild.id][message.author.id]["cash"] < args[1])
    return message.channel.send(
      new MessageEmbed()
        .setColor("RED")
        .setDescription(`Tu n'a que ${db[message.guild.id][message.author.id]["bank"]}$ en banque`)
    ).then(msg => {msg.delete({timeout: 5000}); message.delete()})
  
  // Envoyer l'argent

  db[message.guild.id][member.id]["cash"] += parseFloat(args[1])
  db[message.guild.id][message.author.id]["cash"] -= parseFloat(args[1])

  // Fait le message

  message.channel.send(
    new MessageEmbed()
      .setColor("BLUE")
      .setDescription(`Monsieur ${member.username},\n
      Vous avez reçu ${args[1]}$ de la part de ${message.author.username}`)
  )

}

exports.help = {
  name: "pay",
  usage: "pay [<@user>] [<number>]"
}