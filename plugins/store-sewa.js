let handler = async (m, { conn, text, usedPrefix, args, participants }) => {
      var time = db.data.users[m.sender].lastjoin + 86400000
  var linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
  var delay = time => new Promise(res => setTimeout(res, time))
 
  var name = m.sender
  var fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6285828357727@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  let premiumList = [
    {
      duration: "1 DAY",
      price: 5000,
      command: "1D",
    },
    {
      duration: "3 DAY",
      price: 7000,
      command: "3D",
    },
    {
      duration: "7 DAY",
      price: 10000,
      command: "7D",
    },
    {
      duration: "30 DAY",
      price: 20000,
      command: "30D",
    },
    {
      duration: "360 DAY",
      price: 45000,
      command: "360D",
    },
  ];

  if (!text) {
    let listText = "*HARGA SEWA BOT:*\n\n";
    premiumList.forEach((premium, index) => {
      listText += `${index + 1}. SEWA ${premium.duration}\n`;
      listText += `◦  Price : *${premium.price.toLocaleString()}* Saldo\n`;
      listText += `◦  *Command :* .buysewa ${premium.command}\n\n`;
    });

    conn.reply(m.chat, listText, m, {
      contextInfo: {
        externalAdReply: {
          title: namabot,
          body: "Hello, please choose your premium plan.",
          thumbnailUrl: "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/20230602_095645.jpg",
          sourceUrl: "https://instagram.com/moe.sazumiviki",
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });

    return;
  }

  let days = parseInt(text);
  if (isNaN(days)) return conn.reply(m.chat, "Invalid input. Please enter the number of days you want to buy.", m);

  let selectedPremium = premiumList.find((premium) => premium.command.toLowerCase() === args[0].toLowerCase());
  if (!selectedPremium) return conn.reply(m.chat, "Tidak ada list harga seperti itu.", m);

  let user = global.db.data.users[m.sender];
  if (!user) return conn.reply(m.chat, "nomor kamu belum terdaftar dalam database.", m);

  let balance = db.data.users[m.sender].saldo
  let price = selectedPremium.price * days;
  //if (balance > price) return conn.reply(m.chat, "Saldo kamu kurang silahkan deposit", m);
    if (balance < price) {
 m.reply('Saldo User Anda Kurang!. Silahkan Melakukan Deposit Terlebih Dahulu')
 } else if(balance > price) { 

  var [_, code] = args[1].match(linkRegex) || []
  if (!args[1]) throw `Link nya mana?\ncontoh .buysewa 30D link` 
  if (!code) throw `Link tidak valid!`
//  if (!args[1]) throw `berapa hari?`
//  if (isNaN(args[1])) throw `Hanya angka, mewakili hari!`
  var anubot = owner[0]
  m.reply(`Tunggu 3 detik bot akan join`)
  await delay(3000)
  try {
  var res = await conn.groupAcceptInvite(code)
  var b = await conn.groupMetadata(res)
  var d = b.participants.map(v => v.id)
  var member = d.toString()
  var e = await d.filter(v => v.endsWith(anubot + '@s.whatsapp.net'))
  var jumlahHari = 86400000 * days
  var now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
  else global.db.data.chats[res].expired = now + jumlahHari
  if (e.length) await m.reply(`Sukses invite bot ke group\n\n${await conn.getName(res)}\n\nBot akan keluar secara otomatis setelah *${msToDate(global.db.data.chats[res].expired - now)}*`)
  if (e.length) await conn.reply(res, `Ada @${anubot} Owner-ku Di Sini, Aku Mau Keluar Aja Dah, Takut Kena Marah.

@${conn.user.jid.split(`@`)[0]} akan keluar 5 detik lagi
Bye😑
Thanks dah invite *${m.name}*`, fkonn, {
    mentions: d
     }).then(async () => {
     await delay(5000)
     }).then( async () => {
     await conn.reply(res, `Tapi Boong 🤭`, 0)
     await conn.reply(owner[0]+'@s.whatsapp.net', `*INVITING!*\n\n@${m.sender.split('@')[0]} telah mengundang ${conn.user.name} ke grup\n\n${await conn.getName(res)}\n\n${res}\n\nPesan : ${args[1]}\n\nBot akan keluar otomatis setelah *${msToDate(global.db.data.chats[res].expired - now)}*`, null, {mentions: [m.sender]})
     })
     if (!e.length) await conn.reply(owner[0]+'@s.whatsapp.net', `*INVITING!*\n\n@${m.sender.split('@')[0]} telah mengundang ${conn.user.name} ke grup\n\n${await conn.getName(res)}\n\n${res}\n\nPesan : ${args[1]}\n\nBot akan keluar otomatis setelah *${msToDate(global.db.data.chats[res].expired - now)}*`, null, {mentions: [m.sender]})
     if (!e.length) await m.reply(`Sukses invite bot ke group\n\n${await conn.getName(res)}\n\nBot akan keluar secara otomatis setelah *${msToDate(global.db.data.chats[res].expired - now)}*`).then(async () => {
     let mes = `Hello Everyone👋🏻

*${conn.user.name}* adalah salah satu Bot WhatsApp Multi-Device yang di bangun dengan Node.js, *${conn.user.name}* Baru aja di invite oleh *${m.name}*
Untuk menggunakan *${conn.user.name}* silahkan ketik
#menu

@${conn.user.jid.split('@')[0]} akan keluar secara otomatis setelah *${msToDate(global.db.data.chats[res].expired - now)}*`
  await conn.sendB(res, mes, wm, null, [[`Owner`, `.owner`], [`Menu`, `${usedPrefix}menu`]], fkonn, {
        mentions: d
         })
     })
    } catch (e) {
      conn.reply(owner[0]+'@s.whatsapp.net', `Maaf bot tidak bisa bergabung ke grup!`)
     // throw `Maaf bot tidak bisa bergabung ke grup!`
      }
db.data.users[m.sender].saldo -= price * 1
  conn.reply(m.chat, `You have successfully purchased *${selectedPremium.duration}* SewaBot.`, m);
 }
};

handler.command = /^buysewa$/i;
handler.help = ["buysewa [duration]"];
handler.tags = ["main"];
handler.register = true;

module.exports = handler;