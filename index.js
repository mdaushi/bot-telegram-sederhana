const { Telegraf } = require('telegraf')

const bot = new Telegraf('1626615561:AAHExRvQ-YmYJJ8EjJonBH4qtlgShVbLl-0')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.launch()

console.log('bot running')
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

