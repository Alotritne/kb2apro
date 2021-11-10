const fs = require('fs');
const path = require('path');
let access_token = null;

module.exports = {
  keywords: ['sing'],

  name: 'Phát nhạc',

  description: 'Phát nhạc trên yt',

  guide: '<keywords>',

  childs: [],

  permission: {
    '*': '*'
  },

  datastoreDesign: {
    account: {
      global: {},
      local: {}
    },
    thread: {
      global: {},
      local: {}
    }
  },
async onCall(message, reply) {
const axios = require('axios')
const fs = require('fs-extra')
const request = require('request');
   const res = await axios.get(`https://raw.githubusercontent.com/D-Jukiee/data/main/sing.json`);
    const length_KEY = res.data.keySing.length
    const randomAPIKEY = res.data.keySing[Math.floor(Math.random() * length_KEY)]
    const linkYt = kb2abot.helpers.getParam(message.body);

    if (linkYt.indexOf("https://") == 0) {
        var urlsplit = linkYt.split(/^.*(youtu.be\/|v\/|embed\/|watch\?|youtube.com\/user\/[^#]*#([^\/]*?\/)*)\??v?=?([^#\&\?]*).*/);
        const linkUrlSing = urlsplit[3]
        var options = {
            method: 'GET',
            url: 'https://youtube-mp36.p.rapidapi.com/dl',
            params: {
                id: `${linkUrlSing}`
            },
            headers: {
                'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com',
                'x-rapidapi-key': `${randomAPIKEY.API_KEY}`
            }
        };
        const data = await axios.request(options);
        console.log(data.data.link)
        path1 = __dirname + `/sing.m4a`
        const getms = (await axios.get(`${data.data.link}`, {
            responseType: "arraybuffer"
        })).data;
        fs.writeFileSync(path1, Buffer.from(getms, "utf-8"));
    await reply({
      body: `${data.data.title}`,
      attachment: [
        fs.createReadStream(__dirname + `/sing.m4a`)
      ]
    });
    fs.unlinkSync(__dirname + `/sing.m4a`)
  }
  }
};