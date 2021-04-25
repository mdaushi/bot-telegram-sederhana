module.exports = bot =>{
    bot.start((ctx)=>{
        ctx.reply('Hai '+ctx.from.first_name+', senang bisa bertemu disini.')
        ctx.reply(`
        Nama saya Fiva, saya adalah asisten pribadi anda. yang anda bisa lakukan:
        - membuat todo
        - save password akun
        - Easily set reminders
        - Set reminders for others
        - Get weather updates
        - Set alarm calls
        - Jokes and fun :)
        `)
    })

    bot.help((ctx)=>{
        let pesan = `
        Daftar perintah yang bisa anda lakukan :
        /todo - Daftar yang perlu anda ingat
        /mypass - Daftar Akun anda
        ---------------------------
        /help - untuk bantuan
        `
        ctx.reply(pesan)
    })

}