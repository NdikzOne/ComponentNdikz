let yts = require('yt-search')
let handler = async (m, { conn, text }) => {
    
    if(!text) throw "Contoh penggunaan: .yts can i be him"
let yts = require('yt-search')
let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = require("@adiwajshing/baileys") 
let anu = (await yts(text)).all
let video = anu.filter(v => v.type === 'video') 
let channel = anu.filter(v => v.type === 'channel') 
let teks = `${channel.map(v => `*${v.name}* (${v.url})\n_${v.subCountLabel} (${v.subCount}) Subscriber_\n${v.videoCount} video\n────────────────`.trim()

).join("\n")}`+`${video.map(v =>  `*${v.title}* (${v.url})\nDuration: ${v.timestamp}\nUploaded ${v.ago}
\n${v.views} views\n─────────────────`.trim() ).join("\n")}`
let image = channel.length ? channel[0].image : video.length ? video[0].image : urlmenu.main

let sections = [{
  title: `By ${namabot}`, 
  highlight_label: 'start chats', 
  rows: [{
   header: `${namabot}`, 
 title: "Menu",
 description: `back to menu !`, 
 id: '.menu'
 },
 {
  header: `${namabot}`, 
  title: "Owner Bot", 
  description: `Owner Of ${namabot}`, 
  id: '.owner'
 }]
}]

video.forEach(async(data) => {
sections.push({
 title: data.title, 
 rows: [{
  title: "Get Video", 
  description: `Get video from "${data.title}"`, 
  id: `.ytmp4 ${data.url}`
  }, 
  {
  title: "Get Audio", 
  description: `Get audio from "${data.title}"`, 
  id: `.ytmp3 ${data.url}`
  }]
 }) 
}) 
let listMessage = {
    title: 'Click here!', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'ᴘʟᴇᴀsᴇ sᴇʟᴇᴄᴛ ᴛʜᴇ sᴏɴɢ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ ʙᴇʟᴏᴡ',
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `${namabot} By ${namaowner}`,
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            subtitle: `${namabot} By ${namaowner}`,
            hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: image }}, { upload: conn.waUploadToServer })) 
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": JSON.stringify(listMessage) 
              }, 
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"Owner Bot\",\"id\":\".owner\"}"           
              }
           ],
          })
        })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
    
 /*if (!text) throw 'Cari apa?'
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
*${v.title}* (${v.url})
Duration: ${v.timestamp}
Uploaded ${v.ago}
${v.views} views
      `.trim()
      case 'channel': return `
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) Subscriber_
${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷꒦\n')
  m.reply(teks)*/
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i
handler.limit = true

module.exports = handler

