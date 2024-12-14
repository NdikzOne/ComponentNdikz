const axios = require('axios');
const FormData = require('form-data');
const { fromBuffer } = require('file-type');
let fs = require('fs') 

module.exports = async buffer => {
  try {
    const { ext } = await fromBuffer(buffer)
    const fd = new FormData()
    fd.append('fileToUpload', buffer, new Date() * 1 + '.' + ext)
    fd.append('reqtype', 'fileupload')

    const { data } = await axios.post('https://catbox.moe/user/api.php', fd, {
      headers: fd.getHeaders(),
    });
    return data?.trim() || 'failed'
  } catch (e) {
    throw new Error(`Upload error: ${e.message}`)
  }
}