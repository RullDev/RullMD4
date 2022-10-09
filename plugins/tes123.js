import fs from 'fs'

import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix: _p }) => {

let info = `Halo Bang Script ini Masih Banyak Bug (｡>_<｡)`



let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'


conn.reply(m.chat, info, m, { quoted: fakes },{ contextInfo: { externalAdReply: { showAdAttribution: true,
      mediaUrl: "https://bit.ly/3eggcxd",
      mediaType: 2,
      description: "https://youtube.com/channel/UC1oSMQCd3XKVxYwSh4RE2Nw", 
      title: global.titlebot,
      body: wm,
      thumbnail: thumb,
      sourceUrl: sig  }}})

}

handler.customPrefix = /^(tes|bot|oscar|test)$/i

handler.command = new RegExp



export default handler
