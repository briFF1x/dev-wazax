const {Client, Collection} = require("discord.js");
const {readdirSync} = require("fs")
const client = new Client();
client.commands = new Collection()
client.aliases = new Collection()

readdirSync("commands").map(cat => {
  readdirSync("commands/"+cat).map(file => {
    try {
      file = require(`./commands/${cat}/${file}`)
      client.commands.set(file.help.name, file)
      if(file.help.aliases) file.help.aliases.map(aliases => client.aliases.set(aliases, file.help.name))
      console.log(`${file.help.name} Has been loaded`)
    } catch (err) {
      console.log(`${file}: ERROR: ${err}`)
    }
  })
})

readdirSync("events").map(e => {
  try {
    client.on(e.split(".").shift(), require("./events/"+e).bind(null, client))
  } catch (err) {
    console.log(`${e}: ERROR: ${err}`)
  }
})

client.login("Nzg3NzQwMzQ3NzA1ODUxOTA0.X9ZWXg.MnAZv8GkZuN0Nn504HDvtWmE1Fo")