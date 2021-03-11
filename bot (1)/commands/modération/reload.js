const Discord = require('discord.js')

    module.exports.run = (client, message, args) => {
            message.channel.send(":gear: **Le bot est entrain de se redémarrer....**")
                .then(() => process.exit(0));
        }
    
    
  module.exports.help = {
    name: 'restart',
  };