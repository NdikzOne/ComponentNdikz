var fetch = require('node-fetch')
var ytdl = require('ytdl-core')
var yts = require('yt-search')
var youtube = require("yt-search");
var yt = require('ytdl-core');
var {
    youtubeSearch,
    youtubedl,
    youtubedlv2,
    youtubedlv3
} = require('@bochilteam/scraper');
var handler = async (m, {
    conn,
    text,
    usedPrefix
}) => {
    if (!text) throw 'Link video nya?'
    try {
        var res = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=IchanZX&url=${text}`)
  			var user = await res.json()
  			var v = user.result
          //  var url = 'https://www.youtube.com/watch?v=' + videoId
         //   var tess = await audioyt(url)
            var hard = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=IchanZX&url=${text}`)
            var jaz = await hard.json()
            var jazz = jaz.result
            var sce = await jazz.link
            // var sce = `https://aemt.me/youtube?url=${text}&filter=audioonly&quality=lowestaudio&contenttype=audio/mpeg`
            //var cvr = await audioyt(url)
          //  var sce = cvr.url
            
            var tmb = v.thumbnail
            var captionvid = `∘ Title: ${v.title}\n∘ Thumbnail: ${v.thumbnail}\n∘ Bot By: ${wm}\n∘ Url:  ${text}\n\n *Proses Sedang Mengirim Audio....*`
            var pesan = await conn.sendMessage(m.chat, {
                text: captionvid,
                contextInfo: {
                    externalAdReply: {
                        title: "",
                        body: "Powered by",
                        thumbnailUrl: tmb,
                        sourceUrl: text,
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            })
            conn.sendMessage(m.chat, {
                audio: {
                    url: sce
                },
                mimetype: 'audio/mpeg',
                contextInfo: {
                    externalAdReply: {
                        title: v.title,
                        body: "",
                        thumbnailUrl: tmb,
                        sourceUrl: v.url,
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            }, {
                quoted: pesan
            })
        
        conn.sendMessage(m.chat, { document: { url: sce}, mimetype: 'document', fileName: `${v.title}.mp3`}, {quoted: m})
    } catch (e) {
        m.reply('Error: ' + 'Internal server down')
    }
}
handler.command = handler.help = ['yta3', 'ytmp33'];
handler.tags = ['downloader'];
handler.exp = 0;
handler.limit = true;
handler.premium = false;
module.exports = handler;
