const axios = require('axios')

// Fungsi untuk mengambil dan mengatur gambar profil bot
const setProfilePicture = async (conn) => {
    let bot = conn.user.jid

    // Mengambil gambar profil dari web API Neko
    let response = await axios.get('https://nekos.life/api/v2/img/profile')
    if (response.status !== 200) throw 'Gagal mengambil gambar dari API'
    
    let imgUrl = response.data.url
    let imgBuffer = await axios.get(imgUrl, { responseType: 'arraybuffer' })
    
    // Mengganti gambar profil bot
    await conn.updateProfilePicture(bot, imgBuffer.data)
}

// Memantau pesan masuk
conn.on('chat-update', async (chatUpdate) => {
    // Cek jika pesan masuk adalah pesan gambar
    if (chatUpdate.hasNewMessage && chatUpdate.messages && chatUpdate.count) {
        let m = chatUpdate.messages.all()[0]

        let mime = (m.msg || m).mimetype || ''
        // Cek jika pesan berisi gambar
        if (/image/.test(mime)) {
            // Panggil fungsi untuk mengubah gambar profil bot
            await setProfilePicture(conn)
        }
    }
})