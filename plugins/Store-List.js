/**
 * Jangan Di Hapus!!
 * 
 * Buatan @FokusDotId (Fokus ID)
 * Github: https://github.com/fokusdotid
 * 
 * Ingin bikin fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6281320170984
 * 
 */

/**let handler = async (m, { conn, usedPrefix }) => {
	let store = global.db.data.chats[m.chat].store;
	if (!('store' in db.data.chats[m.chat])) store = []
	if (!store[0]) throw `Belum ada list store di grup ini.\nuntuk menambahkan ketik *${usedPrefix}addlist*`;
	let row = []
	for (let i of store) {
		if (i.id == m.chat) row.push({
			title: i.key,
			rowId: i.key
		})
	}
	let name = await conn.getName(m.chat) || ''
	let msg = {
		buttonText: 'LIST STORE',
		text: '\nberikut ini adalah daftar store yg ada di grup ini.',
		footer: wm,
		sections: [{
			title: name, rows: row,
		}]
	}
	conn.sendMessage(m.chat, msg, { quoted: m })
}
handler.help = ["liststore"]
handler.tags = ["store"]
handler.command = /^list(store)?$/i
handler.group = true

module.exports = handler**/


 const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@adiwajshing/baileys") 
 let handler = async (m, { conn, usedPrefix }) => {
	let store = global.db.data.chats[m.chat].store;
	if (!('store' in db.data.chats[m.chat])) store = []
	if (!store[0]) throw `Belum ada list store di grup ini.\nuntuk menambahkan ketik *${usedPrefix}addlist*`;
   
     let name = await conn.getName(m.chat) || ''
	let row = []
      let sections = [{
  title: `${htki} By: ${namabot} ${htka}`, 
  highlight_label: 'start chats', 
  rows: [{
   header: `${namabot}`, 
 title: "Menu",
 description: `🧮 back to menu !`, 
 id: '.menu'
 },
 {
  header: `${namabot}`, 
  title: "Owner Bot", 
  description: `👑Owner Of ${namabot}`, 
  id: '.owner'
 }]
}]
     let NumList = 1
	for (let i of store) {
		if (i.id == m.chat) sections.push({
rows: [{
  title: i.key, 
  description: "List Store pada: "+name, 
  id: i.key
  }]
 })
        NumList++
	}
     
	row = row.join('\n\r')
     let listMessage = {
    title: 'Menu Store ⇲', 
    sections
};
	let menyu = `𝙱𝚎𝚛𝚒𝚔𝚞𝚝 𝚊𝚍𝚊𝚕𝚊𝚑 𝚕𝚒𝚜𝚝 𝙱𝚞𝚝𝚝𝚘𝚗 
𝚂𝚝𝚘𝚛𝚎 𝙶𝚛𝚘𝚞𝚙 𝙺𝚊𝚖𝚒 🛍️

≡ *Silahkan Klik Pada Button Dibawah* ⇣⇣

${htki} LIST STORE ${htka}`
   // let name = await conn.getName(m.chat) || ''
  //  let text = `Berikut ini adalah daftar store yang ada di grup ini⬇️\n${row}\n\n*Silahkan Ketik Kata Kunci Tersebut*\n*Tanpa Menggunakan Tanda #!/.*`

    //conn.sendMessage(m.chat, text, { quoted: m })
   // m.reply(text)
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: saluran,
 newsletterJid: idsal,
 serverMessageId: 143
},
 businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: menyu
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: namabot
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: thumb } }, { upload: conn.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"DEVELOPER 📲","id":".owner"}`
},
      {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"MY WEBISTE 🛍️\",\"url\":\"https://zxcoderid.my.id\",\"merchant_url\":\"https://zxcoderid.my.id\"}"
 },
 ],
 })
 })
 }
 }
}, {})
await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
     console.log(row)
}
handler.help = ["liststore"]
handler.tags = ["store"]
handler.command = /^list(store)?$/i
handler.group = true

module.exports = handler