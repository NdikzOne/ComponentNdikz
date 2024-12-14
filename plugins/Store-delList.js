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

/*let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Uhm.. mana yg mau di hapus?\nContoh:\n*${usedPrefix + command} Key*`;
	let chat = global.db.data.chats[m.chat]
	if (!('store' in chat)) chat.store = []
	let store = chat.store
	if (!store[0]) throw 'belum ada list di grup ini!';
	let where = null;
	let isinya = null;
	await Object.keys(store).forEach(function(isi) {
		if (store[isi].id === m.chat && store[isi].key === text) {
			where = isi
			isinya = store[isi]
		}
	});
	if (where !== null) {
		m.reply(`berhasil menghapus *${isinya.key}* dari daftar list!`)
		.then(() => {
			store.splice(where, 1)
			return !0
		})
	} else {
		throw `Maaf, *${text}* tidak ditemukan di list!\nketik *${usedPrefix}liststore* untuk melihat list nya.`;
	}
}*/
 const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@adiwajshing/baileys") 
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let store = global.db.data.chats[m.chat].store;
	if (!('store' in db.data.chats[m.chat])) store = []
	if (!store[0]) throw `Belum ada list store di grup ini.\nuntuk menambahkan ketik *${usedPrefix}addlist*`;
    let name = await conn.getName(m.chat) || ''
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
     let listMessage = {
    title: 'Menu Store ⇲', 
    sections
};
    let menyu = `𝙱𝚎𝚛𝚒𝚔𝚞𝚝 𝚊𝚍𝚊𝚕𝚊𝚑 𝚕𝚒𝚜𝚝 𝙱𝚞𝚝𝚝𝚘𝚗 
𝚂𝚝𝚘𝚛𝚎 𝙶𝚛𝚘𝚞𝚙 𝙺𝚊𝚖𝚒 🛍️

≡ *Silahkan Pilih List yang Akan Dihapus* ⇣⇣

${htki} LIST STORE ${htka}`
    for (let i of store) {
		if (i.id == m.chat) sections.push({
rows: [{
  title: i.key, 
  description: "List Store pada: "+name, 
  id: `/${command} ${i.key}`
  }]
 })
	}
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
	if (!text) return await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
	let chat = global.db.data.chats[m.chat]
	if (!('store' in chat)) chat.store = []
	//if (!store[0]) throw 'belum ada list di grup ini!';
	let where = null;
	let isinya = null;
	await Object.keys(store).forEach(function(isi) {
		if (store[isi].id === m.chat && store[isi].key === text) {
			where = isi
			isinya = store[isi]
		}
	});
	if (where !== null) {
		m.reply(`berhasil menghapus *${isinya.key}* dari daftar list!`)
		.then(() => {
			store.splice(where, 1)
			return !0
		})
	} else {
		throw `Maaf, *${text}* tidak ditemukan di list!\nketik *${usedPrefix}liststore* untuk melihat list nya.`;
	}
}
handler.help = ["dellist"]
handler.tags = ["store"]
handler.command = /^dellist$/i
handler.group = true
handler.admin = true
module.exports = handler