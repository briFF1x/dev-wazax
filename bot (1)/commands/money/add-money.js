const {MessageEmbed} = require("discord.js")
const db = require("../../json/db.json")
const fs = require("fs")

exports.run = async (client, message, args) => {

 
  if(!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      new MessageEmbed()
        .setColor("RED")
        .setDescription(`:x: | Tu n'a pas la permission de faire ceci`)
    )
  
  // Récupérer le membre
  let member = message.mentions.users.first()
  if(!args[1] || isNaN(args[1]) || !member)
    return message.channel.send(
      new MessageEmbed()
        .setColor("RED")
        .setDescription(`Utilisation: ${this.help.usage}`)
    ).then(msg => {msg.delete({timeout: 5000}); message.delete()})
  
  // Ajouter la money a la bank de l'utilisateur


  // Vérifier la database => si db[message.guild.id] éxiste pas : le créer

  if(!db[message.guild.id]) db[message.guild.id] = {}

  // Vérifier la database => si db[message.guild.id][message.member.id] n'éxiste pas : le créer avec "money": 0 et "bank" : 0

  if(!db[message.guild.id][message.author.id]) db[message.guild.id][message.author.id] = {"bank":0, "cash":0}

  // Ajouter args[1] à bank du joueur

  db[message.guild.id][member.id]["bank"] += parseFloat(args[1])
  

  // Enregistrer la db
  
  fs.writeFileSync("./json/db.json", JSON.stringify(db, 0, 4))

  message.channel.send(
    new MessageEmbed()
      .setColor("BLUE")
      .setDescription(`${args[1]}$ ont été donné à ${member.username} par le gouvernement`)
      .setThumbnail('https://cdn.discordapp.com/attachments/804606544351068191/815715299608625152/image0.gif')
  )
}

exports.help = {
  name: "add-money",
  usage: "add-money [<@user>] [<number>]",
  description: "Commande de give (money) admin"
}