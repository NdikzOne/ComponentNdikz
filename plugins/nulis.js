let handler = async (m, { conn, args, usedPrefix, command }) => {
	if (!args) throw `✳️ Contoh :\n${usedPrefix + command} nama lu`
	 let chat = global.db.data.chats[m.chat]
     let teks = args.join` `
	 m.reply(wait) 
			let res = `https://api.lolhuman.xyz/api/nulis?apikey=${apichan}&text=${teks}`
    conn.sendFile(m.chat, res, null, wm, m)  
}
handler.help = ['n'].map(v => v + 'ulis <teks>')
handler.tags = ['maker']
handler.command = /^nulis$/i
handler.limit = true

module.exports = handler
