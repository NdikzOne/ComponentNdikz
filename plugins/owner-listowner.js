let fs = require('fs')

let handler = async (m, { conn, text }) => {
    const sortedOwners = global.owner.sort((a, b) => a.localeCompare(b))
    let tesk = `${htki} *LIST NOMOR OWNER* ${htka}\n`
    sortedOwners.forEach((owner, index) => {
        tesk += `${index + 1}. @${owner.replace(/[^0-9]/g, '')}\n`
    })
    m.reply(tesk, null, { markdown: true })
}

handler.help = ['listowner']
handler.tags = ['owner']
handler.command = /^listowner|ownerlist$/i
handler.owner = true

module.exports = handler