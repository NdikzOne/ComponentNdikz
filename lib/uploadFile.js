const fetch = require('node-fetch');
const crypto = require('crypto');
const FormData = require('form-data');
const { fromBuffer, fileTypeFromBuffer } = require('file-type');

/*
* Create by cifumo
* Creator Emilia - MD
* Dont Delete this weem
*/

/**
 * Upload image to catbox
 * Supported mimetype:
 * - image/jpeg
 * - image/jpg
 * - image/pngs
 * - image/webp
 * - video/mp4
 * - video/gif
 * - audio/mpeg
 * - audio/opus
 * - audio/mpa
 * @param {Buffer} buffer Image Buffer
 * @return {Promise<string>}
 */
const UploadFiles = async (content) => {
  const { ext, mime } = (await fileTypeFromBuffer(content)) || {};
  const blob = new Blob([content.toArrayBuffer()], { type: mime });
  const formData = new FormData();
  const randomBytes = crypto.randomBytes(5).toString("hex");
  formData.append("reqtype", "fileupload");
  formData.append("fileToUpload", blob, randomBytes + "." + ext);

  const response = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: formData,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36",
    },
  });

  return await response.text();
}

/**
 * Upload epheremal file to file.io
 * `Expired in 1 day`
 * `100MB Max Filesize`
 * @param {Buffer} buffer File Buffer
 */
const fileIO = async (buffer) => {
  try {
    const { ext } = await fromBuffer(buffer);
    const form = new FormData();
    form.append('file', buffer, 'tmp.' + ext);
    const uploadResponse = await fetch('https://tmpfiles.org/api/v1/upload', {
      method: 'POST',
      body: form
    });

    // Mendapatkan respons JSON
    const data = await uploadResponse.json();

    // Cek jika respons sukses
    if (uploadResponse.ok) {
      // Kembalikan URL file yang diunggah dengan menyesuaikan path
      const modifiedUrl = data.data.url.replace('org/', 'org/dl/');
      return modifiedUrl;
    } else {
      throw new Error(`Failed to upload image to tmpfiles.org: ${data.error}`);
    }
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to upload image');
  }
};

/**
 * Upload file to https://file.botcahx.eu.org/
 * @returns {string|null|(string|null)[]}
 */
const api = async (buffer) => {
  let { ext } = await fromBuffer(buffer);
  let bodyForm = new FormData();
  bodyForm.append("file", buffer, "file." + ext);
  let res = await fetch("https://file.botcahx.eu.org/api/upload.php", {
    method: "post",
    body: bodyForm,
  });
  let data = await res.json();
  let resultUrl = data.result ? data.result.url : '';
  return resultUrl;
}

module.exports = { fileIO, api, UploadFiles}
