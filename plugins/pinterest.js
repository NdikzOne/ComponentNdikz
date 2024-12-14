let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    const { generateWAMessageFromContent, generateWAMessageContent, proto, prepareWAMessageMedia } = require("@adiwajshing/baileys") 
    let id = `${Math.floor(Math.random() * 5)}`
	  if (!text) throw `Contoh: ${usedPrefix + command} Anime BlueArchive`
async function createImage(url) {
        const { imageMessage } = await generateWAMessageContent({
            image: { url }
        }, { upload: conn.waUploadToServer });
        return imageMessage;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
m.reply(`Pin Akan Di kirim Di Priv Chat Kasihan Yang Internal nya Dikitಥ_ಥ`)
    let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
    let res = data.resource_response.data.results.map(v => v.images.orig.url);

    shuffleArray(res); // Mengacak array
    let images = res.slice(0, 6); // Mengambil 5 gambar pertama dari array yang sudah diacak
   // let urlnya = images.
    let cards = await Promise.all(images.map(async (url, index) => ({
        body: proto.Message.InteractiveMessage.Body.fromObject({ text: `Image ke - ${index + 1}\nUrl: ${url}` }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: wm }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: 'Hasil.',
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [{
                name: "cta_url",
                buttonParamsJson: `{"display_text":"url","Klik disini":"${url}","merchant_url":"${url}"}`
            }]
        })
    })));

    const msg = generateWAMessageFromContent(m.sender, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.create({ text: 'Hasil\nResult Form Image Pinterest:' }),
                    footer: proto.Message.InteractiveMessage.Footer.create({ text: global.namabot }),
                    header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards })
                })
            }
        }
    }, {});

    await conn.relayMessage(m.sender, msg.message, { messageId: msg.key.id });
    
    
    /*
    let id = `${Math.floor(Math.random() * 5)}`
	  if (!text) throw `Contoh: ${usedPrefix + command} cewe cantik`
      try {
let res = await fetch(`${webapi}api/search/pinterest?q=${text}&apikey=${apichan}`)
let wes = await res.json()
                let was = wes.data
let cita = wes.data[Math.floor(Math.random() * was.length)]
    conn.sendFile(m.sender, cita, null, "*PINTEREST*\n\npencarian dari: " + text, m)
      } catch (e) {
          m.reply('WEB PUSAT ERORR! TIDAK BISA DI GANGGU GUGAT HARAP BERSABAR\nNTAR BISA KEMBALI')
      }
	*/
}
    
handler.help = ['pinterest <text>']
handler.tags = ['internet']
handler.command = /^(pinterest|pin)$/i
handler.group = true
handler.limit = true

module.exports = handler