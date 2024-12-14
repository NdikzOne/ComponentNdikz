const fetch = require('node-fetch');

let handler = async (m, { conn, args }) => {
    if(!args[0]) return m.reply('Contoh /pinterestvideo https://pinterest.com//')
    try {
        const response = await fetch(`https://id.pinterest.com/resource/BaseSearchResource/get/?source_url=${args[0]}`);
        const tes = await response.json();
            const videos = tes.resource_response.data.results.videos.video_list.V_720P.url;
                conn.sendFile(m.chat, videos, 'video.mp4', 'Berikut adalah video yang Anda minta:', m);
    } catch (error) {
        console.error('Error:', error);
        conn.reply(m.chat, 'Terjadi kesalahan saat mengambil video.', m);
    }
};

handler.command = /^(pinterestvideo|videopinterest)$/i;

module.exports = handler;