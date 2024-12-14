let handler = async (m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, '> Masukan Text/Judul Dari Gambar Yang Ingin Di Cari.\n*Contoh* .pin2 elaina', m)

    try {
        const response = await fetch(`https://id.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Frs%3Drs%26len%3D2%26q&data=%7B%22options%22%3A%7B%22appliedProductFilters%22%3A%22---%22%2C%22article%22%3A%22%22%2C%22auto_correction_disabled%22%3A%22%22%2C%22filters%22%3A%22%22%2C%22price_max%22%3Anull%2C%22price_min%22%3Anull%2C%22query%22%3A%22${encodeURIComponent(text)}%22%2C%22scope%22%3A%22pins%22%2C%22top_pin_id%22%3A%22%22%2C%22first_page_size%22%3A%227%22%2C%22page_size%22%3A%2214%22%7D%2C%22context%22%3A%7B%7D%7D&_=1711581527086`)
        const data = await response.json()
        const images = data.resource_response.data.results.map(result => result.images['736x'].url)
        const gambaracak = Math.floor(Math.random() * images.length)
        const linkgambar = images[gambaracak]

        conn.sendFile(m.chat, linkgambar, 'image.jpg', '', m, false, { thumbnail: Buffer.alloc(0) })
    } catch (error) {
        console.error('Error:', error)
        conn.reply(m.chat, 'Terjadi kesalahan saat mengambil gambar.', m)
    }
}

handler.help = ['pinterest <pencarian>']
handler.tags = ['internet']
handler.command = /^(pin2|pinterest2)$/i

module.exports = handler