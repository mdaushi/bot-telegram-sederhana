// const config = require('./config')
// if(config.status == 'prod'){
//     const { Composer } = require('micro-bot')
//     var bot = new Composer
// }else{
//     const { Telegraf } = require('telegraf')
//     var bot = new Telegraf('1626615561:AAHExRvQ-YmYJJ8EjJonBH4qtlgShVbLl-0')
// }
// require('./help')(bot)
// if(config.status == 'prod'){
//     module.exports = bot
// }else{
//     bot.launch()
// }


// // Enable graceful stop
// process.once('SIGINT', () => bot.stop('SIGINT'))
// process.once('SIGTERM', () => bot.stop('SIGTERM'))

const { Telegraf } = require('telegraf')

const bot = new Telegraf('1626615561:AAHExRvQ-YmYJJ8EjJonBH4qtlgShVbLl-0')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.launch({
    webhook: {
      domain: 'https://testing-fiva.herokuapp.com/',
      port: 3000,
    }
  })
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

