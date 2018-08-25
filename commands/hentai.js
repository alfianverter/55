exports.run = async (beta, message, args, level) => {
  function getRandomHex () {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
  }

  const Discord = require('discord.js')
  const randomPuppy = require('random-puppy')


  if (message.channel.nsfw) {

    randomPuppy('hentai')
      .then(url => {
        const embed = new Discord.RichEmbed()
              .setTitle(`HENTAI!!!`)
              .setImage(url)
              .setColor(getRandomHex())
        return message.channel.send({ embed })
      })
  } else {
    message.channel.send('Sorry but this is only for nsfw channels.')
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 'User'
}

exports.help = {
  name: 'hentai',
  category: 'Fun & NSWF',
  description: 'Hentai pics for lewd people.',
  usage: 'hentai'
}
