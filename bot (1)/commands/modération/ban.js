exports.run = (message, args) => {
    if (!message.member.hasPermission('BAN_MEMBERS') ) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande')
    const member = message.mentions.members.first()
    if (!member) return message.channel.send('Veuillez mentionner une personne à bannir.')
    if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez pas bannir le propriétaire du serveur.')
    if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas bannir une personne supérieur à vous.')

    const reason = args.slice(1).join(' ') || 'aucune raison fournie'
     if (!member.bannable) return message.channel.send
        ('f')
}

exports.help = {
}