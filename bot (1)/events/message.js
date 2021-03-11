const fs = require('fs');

module.exports = async (client, message) => {
  if(!message.guild || message.author.bot) return; 
  // let jsp = await CheckChannel(client, message)
  const prefix = "/"; 
  if(message.content.startsWith(prefix)) {
    const messageArray = message.content.slice(prefix.length).split(" "); 
    const cmd = messageArray.shift(); 
    const args = messageArray.slice(0); 
    let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    if(command) command.run(client, message, args)
  } 
}

// async function CheckChannel(client, message){
//   const db = JSON.parse(fs.readFileSync("json/db.json").toString());
//   const guild = db[message.guild.id]["channels"];
//   for (const [key, values] of Object.entries(guild)) {
//     if(client.channels.cache.has(values)){
//       await client.commands.get(key).run(client, message, message.content.split(" "))
//     }else{
//       delete db[message.guild.id]["channels"][key];
//       console.error(`Channel ${key} ayant pour id ${values} n'existe pas !`) // mieux le faire
//     }
//   }
//   fs.writeFileSync("json/db.json", JSON.stringify(db, 0, 4))
// }

/*
  "id": {
    "channels": {
      "twitter": "id"
    },
    "roles"
  }
*/