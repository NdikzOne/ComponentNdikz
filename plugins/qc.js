const { fetch } = require('node-fetch')
const { addExif } = require('../lib/sticker.js')
const { Sticker } = require('wa-sticker-formatter')
const FormData = require('form-data'); // Import module FormData
let axios = require('axios')

let handler = async (m, { conn, text }) => {
   if (!text) return m.reply('masukan text')
   if (text.length > 30) return m.reply('Maksimal 30 Teks!')
    m.reply(`New /qc2 Untuk Membuat QC Story`)
let { name, premium, level, limit, exp, lastclaim, registered, regTime, age } = global.DATABASE.data.users[m.sender]
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/320b066dc81928b782c7b.png')
        let ppurl = await convertToTelegraph(pp)
try {
    let as = `${webapi}api/canvas/quoted?nama=${name}&ppurl=${ppurl}&q=${text}&apikey=${apichan}`
   let stiker = await createSticker(as, false, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
  conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
    } catch (error) {
    console.log(error)
        let randomColor = ['#ef1a11', '#89cff0', '#660000', '#87a96b', '#e9f6ff', '#ffe7f7', '#ca86b0', '#83a3ee', '#abcc88', '#80bd76', '#6a84bd', '#5d8d7f', '#530101', '#863434', '#013337', '#133700', '#2f3641', '#cc4291', '#7c4848', '#8a496b', '#722f37', '#0fc163', '#2f3641', '#e7a6cb', '#64c987', '#e6e6fa', '#ffa500'];

const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];

    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/320b066dc81928b782c7b.png')

   const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": apiColor,
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.name,
            "photo": {
               "url": pp
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   const json = await axios.post('https://quote-api.bokov68872.repl.co/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
   let stiker = await createSticker(buffer, false, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
 //   m.reply("server error")
  }
//}
  }

handler.help = ['qc']
handler.tags = ['sticker']
handler.command = /^(qc|quoted|quotly)$/i
handler.register = true
module.exports = handler

async function convertToTelegraph(imageUrl) {
    const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');
    try {
        // Mengunduh gambar dari URL
        const response = await fetch(imageUrl);
        const buffer = await response.buffer();

        // Membuat objek FormData dan menambahkan file ke dalamnya
        const form = new FormData();
        form.append('file', buffer, { filename: 'image.jpg' });

        // Kirim permintaan untuk mengunggah file ke tmpfiles.org
        const uploadResponse = await fetch('https://tmpfiles.org/api/v1/upload', {
            method: 'POST',
            body: form
        });

        // Mendapatkan respons JSON
        const data = await uploadResponse.json();

        // Cek jika respons sukses
        if (uploadResponse.ok) {
          //  console.log(data.data.url)
            // Kembalikan URL file yang diunggah
            const modifiedUrl = data.data.url.replace('org/', 'org/dl/');
            return modifiedUrl;
        } else {
            throw new Error(data.error || 'Failed to upload file');
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle error accordingly
        return null;
    }
}

async function createSticker(img, url, packName, authorName, quality) {
	let stickerMetadata = {
		type: 'full',
		pack: global.packname,
		author: global.author,
		quality
	}
	return (new Sticker(img ? img : url, stickerMetadata)).toBuffer()
}

async function mp4ToWebp(file, stickerMetadata) {
	if (stickerMetadata) {
		if (!stickerMetadata.pack) stickerMetadata.pack = global.packname
		if (!stickerMetadata.author) stickerMetadata.author = global.author
		if (!stickerMetadata.crop) stickerMetadata.crop = false
	} else if (!stickerMetadata) {
		stickerMetadata = { pack: global.packname, author: global.author, crop: false }
	}
	let getBase64 = file.toString('base64')
	const Format = {
		file: `data:video/mp4;base64,${getBase64}`,
		processOptions: {
			crop: stickerMetadata?.crop,
			startTime: '00:00:00.0',
			endTime: '00:00:7.0',
			loop: 0
		},
		stickerMetadata: {
			...stickerMetadata
		},
		sessionInfo: {
			WA_VERSION: '2.2106.5',
			PAGE_UA: 'WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
			WA_AUTOMATE_VERSION: '3.6.10 UPDATE AVAILABLE: 3.6.11',
			BROWSER_VERSION: 'HeadlessChrome/88.0.4324.190',
			OS: 'Windows Server 2016',
			START_TS: 1614310326309,
			NUM: '6247',
			LAUNCH_TIME_MS: 7934,
			PHONE_VERSION: '2.20.205.16'
		},
		config: {
			sessionId: 'session',
			headless: true,
			qrTimeout: 20,
			authTimeout: 0,
			cacheEnabled: false,
			useChrome: true,
			killProcessOnBrowserClose: true,
			throwErrorOnTosBlock: false,
			chromiumArgs: [
				'--no-sandbox',
				'--disable-setuid-sandbox',
				'--aggressive-cache-discard',
				'--disable-cache',
				'--disable-application-cache',
				'--disable-offline-load-stale-cache',
				'--disk-cache-size=0'
			],
			executablePath: 'C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe',
			skipBrokenMethodsCheck: true,
			stickerServerEndpoint: true
		 }
	}
	let res = await fetch('https://sticker-api.openwa.dev/convertMp4BufferToWebpDataUrl', {
		method: 'post',
		headers: {
			Accept: 'application/json, text/plain, /',
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(Format)
	})
	return Buffer.from((await res.text()).split(';base64,')[1], 'base64')
}