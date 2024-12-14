let handler = async (m, { conn }) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastbobol)
    let _timers = (3600000 - __timers)
    let timers = clockString(_timers) 
let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    
    if (new Date - global.db.data.users[m.sender].lastbobol > 3600000) {
let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
    let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
    let Aku = (randomaku * 1)
    let Kamu = (randomkamu * 1)
    
    if (Aku > Kamu) {
        
                const asd = [
    { text: "Mencoba membobol", timeout: 100 },
    { text: "Meng-Hack Bank", timeout: 100 },
    { text: "#1261 Kode Terinput", timeout: 100 },
    { text: "*CODE IS INVALID*", timeout: 100 },
    { text: "*ALERT BERBUNYI*", timeout: 100 },
    { text: "BERLARII.... KAMU BERLARI", timeout: 100 },
    { text: "KAMU TERTANGKAP", timeout: 100 },
    { text: "MONEY KAMU HILANG SEBESAR Rp3.000.000 dikenakan Denda", timeout: 100 }
  ];

  const erq = await conn.sendMessage(m.chat, { text: 'ʟᴏᴀᴅɪɴɢ...' }, { quoted: m });

     for (let i = 0; i < asd.length; i++) {
    await new Promise(resolve => setTimeout(resolve, asd[i].timeout));
await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: erq,
        type: 14,
        editedMessage: {
          conversation: asd[i].text
        }
      }
    }, { quoted: m });
  }
        
        user.money -= 3000000
        global.db.data.users[m.sender].lastbobol = new Date * 1
      } else if (Aku < Kamu) {
          const asde = [
    { text: "Mencoba membobol", timeout: 100 },
    { text: "Meng-Hack Bank", timeout: 100 },
    { text: "#1261 Kode Terinput", timeout: 100 },
    { text: "*CODE IS A VALID*", timeout: 100 },
    { text: "*ALERT BERBUNYI*", timeout: 100 },
    { text: "BANK TER-HACK", timeout: 100 },
    { text: "KAMU LOLOS KABUR DARI POLISI", timeout: 100 },
    { text: "SELAMAT MENDAPATKAN Rp3.000.000 HASIL MENCURI BANK", timeout: 100 }
  ];

  const erqe = await conn.sendMessage(m.chat, { text: 'ʟᴏᴀᴅɪɴɢ...' }, { quoted: m });

     for (let i = 0; i < asde.length; i++) {
    await new Promise(resolve => setTimeout(resolve, asde[i].timeout));
await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: erqe,
        type: 14,
        editedMessage: {
          conversation: asde[i].text
        }
      }
    }, { quoted: m });
  }
          
        user.money += 3000000
     //   conn.sendFile( m.chat, mbansos, 'b.jpg', `Kamu berhasil  korupsi dana bansos,  Dan kamu mendapatkan 3 Juta rupiah`, m)
    //    global.db.data.users[m.sender].lastbansos = new Date * 1

	//	let hsl = `
//${htki} Hasil Berburu ${htka}
//`
        
		user.lastbobol = new Date * 1
	} 
}else m.reply(`\n*Wahh Kamu Hampir ketahuan mencuri Bersembunyi dulu sekitar ${timers}*\n*Untuk bisa melanjutkan Rob Bank Kembali*\n`)
}
handler.help = ['berburu']
handler.tags = ['rpg']
handler.command = /^(bobolbank|robbank)$/i
handler.limit = 2
handler.register = true

module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}