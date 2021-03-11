// const {MessageEmbed} = require("discord.js")
// const fs = require("fs")

// /*
// TODO: 
//   - Stockage des param des braquages
//   - Système d'anti braquage ( métier policier )
// */


// exports.run = async(client, message, args) => {
  
  
//   let msg = await message.channel.send(new MessageEmbed()
//   .setAuthor("Choississez votre braquage: Superette, banque, bijouterie, atm")
//   )
//   const filter = (user) => {return user.id == message.author.id}
//   let collector = await msg.channel.awaitMessages(filter, {max:1, time: 15000, errors: ["time"]})
//   collector = collector.first().content
//   let msg_brq = new MessageEmbed()
//   .setAuthor("Vous avez commencé un braquage")
//   let db = JSON.parse(fs.readFileSync("json/db.json"));
//   let default = JSON.parse(fs.readFileSync("json/default.json"));
//   if(!db[message.guild.id]) db[message.guild.id] = {}
//   if(!db[message.guild.id]["braquage"]) db[message.guild.id]["braquage"] = {}
  

//   switch(collector) {
//     case "superette":
//       msg_brq.addFields(
//         {name: "Temps d'attente: ", value: ""},
//         {name: "", value: ""},
//         {name: "", value: ""},
//         {name: "", value: ""},
//       )
//     break
//     case "banque":

//     break
//     case "bijouterie":

//     break
//     case "atm":

//     break
//     default: 
//     message.channel.send("Vous n'avez pas préciser un braquage disponible")
//   }
// }

// exports.help = {
//   name: "braquage",
//   usage: "braquage",
//   description: "Braque un lieux."
  
// }


exports.help = {
  name:"brq"
}