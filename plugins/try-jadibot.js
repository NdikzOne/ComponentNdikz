let baileys = require("@adiwajshing/baileys")
let { useMultiFileAuthState, DisconnectReason, makeInMemoryStore, jidNormalizedUser, makeCacheableSignalKeyStore, PHONENUMBER_MCC } = baileys
let { Boom } = require("@hapi/boom")
let NodeCache = require("node-cache")
let Pino = require("pino")
let simple = require('../lib/simple')
let fs = require('fs')

if (global.conns instanceof Array) console.log()
else global.conns = []

let handler = async (m, { conn, args, usedPrefix, command, isOwner, text }) => {
conn.reply(m.chat, '```Tunggu Sedang Menyiapkan Code Jadibot...```', m)
let conns = global.conn
let user = global.db.data.users[m.sender]

    let authFile = 'plugins/jadibot/'+m.sender
    let isInit = !fs.existsSync(authFile)
    let { state, saveCreds} = await useMultiFileAuthState(authFile)
    let msgRetryCounterCache = new NodeCache() 
    
    const config = {
    logger: Pino({ level: "fatal" }).child({ level: "fatal" }),
    printQRInTerminal: false,
    mobile: false,
    auth: state,
   // keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
  //  },
    browser: ["Ubuntu","Chrome","20.0.04"],
    markOnlineOnConnect: true,
    generateHighQualityLinkPreview: true,
    msgRetryCounterCache,
    defaultQueryTimeoutMs: undefined
    }
    conn = simple.makeWASocket(config)
    let ev = conn.ev
    
     if (!conn.authState.creds.registered) {
        setTimeout(async () => {
          const _0x5500fb=_0x1c8e;(function(_0x439543,_0x3044e9){const _0x37fda3=_0x1c8e,_0xbbaf1b=_0x439543();while(!![]){try{const _0xa69026=parseInt(_0x37fda3(0x1d9))/0x1*(-parseInt(_0x37fda3(0x1e0))/0x2)+-parseInt(_0x37fda3(0x1e2))/0x3*(parseInt(_0x37fda3(0x1e5))/0x4)+parseInt(_0x37fda3(0x1db))/0x5+-parseInt(_0x37fda3(0x1dd))/0x6*(-parseInt(_0x37fda3(0x1e6))/0x7)+-parseInt(_0x37fda3(0x1e1))/0x8+parseInt(_0x37fda3(0x1d8))/0x9*(-parseInt(_0x37fda3(0x1e4))/0xa)+-parseInt(_0x37fda3(0x1d7))/0xb*(-parseInt(_0x37fda3(0x1de))/0xc);if(_0xa69026===_0x3044e9)break;else _0xbbaf1b['push'](_0xbbaf1b['shift']());}catch(_0x64ff99){_0xbbaf1b['push'](_0xbbaf1b['shift']());}}}(_0x2beb,0xcdbdb));function _0x2beb(){const _0x6faa4=['log','631845dDjNiz','join','192138uIcaYM','52912716qImXtn','replace','142hPYrJV','7862744gyRvqj','132GHgzKH','reply','10zYYAzG','141940RYvoWC','322XyDwnq','match','requestPairingCode','sender','code\x20anda\x20adalah:\x20','11nxrMhZ','12510009wtPchB','17351AXpDZk'];_0x2beb=function(){return _0x6faa4;};return _0x2beb();}function _0x1c8e(_0x1d777b,_0xf12f3e){const _0x2bebb9=_0x2beb();return _0x1c8e=function(_0x1c8e41,_0x282358){_0x1c8e41=_0x1c8e41-0x1d4;let _0x31b178=_0x2bebb9[_0x1c8e41];return _0x31b178;},_0x1c8e(_0x1d777b,_0xf12f3e);}let codek=await conn[_0x5500fb(0x1d4)](parseInt(await m[_0x5500fb(0x1d5)][_0x5500fb(0x1df)](/[^0-9]/g,'')));codek=codek?.[_0x5500fb(0x1e7)](/.{1,4}/g)?.[_0x5500fb(0x1dc)]('-')||codek,conns[_0x5500fb(0x1e3)](m[_0x5500fb(0x1d5)],codek,m),console[_0x5500fb(0x1da)](_0x5500fb(0x1d6)+codek);
        }, 3000);
        }
    async function connectionUpdate(update) {
    const { connection, lastDisconnect } = update
    console.log(update)
    if (connection == 'connecting') {
    console.log(connection)
    } else if (connection == 'close') {
    conns.reply(m.sender, '```⏱️ koneksi terputus & mencoba menyambung ulang...```', m)
        await reloadHandler()
    } else if (connection == 'open') {
    conns.reply(m.sender, '```✅ Tersambung```', m)
    global.conns.push(conn)
    }
    if (lastDisconnect && lastDisconnect.error && lastDisconnect.error.output && lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
    console.log(reloadHandler(true))
    }
   }

    reloadHandler = function (restatConn) {
    let Handler = require('../handler')
    let handler = require('../handler')
    if (Object.keys(Handler || {}).length) handler = Handler
    if (restatConn) {
    try { conn.ws.close() } catch { }
    conn = {
      ...conn, ...simple.makeWASocket(config)
     }
   }
   if (!isInit) {
     conn.ev.off('messages.upsert', conn.handler)
     conn.ev.off('group-participants.update', conn.onParticipantsUpdate)
     conn.ev.off('connection.update', conn.connectionUpdate)
     conn.ev.off('creds.update', conn.credsUpdate)
   }

   conn.welcome = 'Hai, @user!\nSelamat datang di grup *@subject*\n\n@desc'
   conn.bye = 'Selamat tinggal @user!'
   conn.spromote = '@user sekarang admin!'
   conn.sdemote = '@user sekarang bukan admin!'
   conn.handler = handler.handler.bind(conn)
   conn.onParticipantsUpdate = handler.participantsUpdate.bind(conn)
   conn.connectionUpdate = connectionUpdate.bind(conn)
   conn.credsUpdate = saveCreds.bind(conn)

   conn.ev.on('messages.upsert', conn.handler)
   conn.ev.on('group-participants.update', conn.onParticipantsUpdate)
   conn.ev.on('connection.update', conn.connectionUpdate)
   conn.ev.on('creds.update', conn.credsUpdate)
   isInit = false
   return true
}
    reloadHandler()   
}
handler.help = ['bothub *<number>*']
handler.tags = ['jadibot']
handler.command = /^try-jadibot|bothub$/i
handler.jadibot = true
handler.register = true
handler.owner = false
handler.private = false
module.exports = handler