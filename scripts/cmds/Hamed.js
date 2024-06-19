module.exports = {
  config: {
    name: "HAMED",
    version: "1.0",
    author: "hamed junior",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "🍁EINSTEIN 🍁",
  },
  onStart: async function(){},
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "boss") {
      return message.reply({
        body: "☛❶𝗕𝗢𝗦𝗦 𝗛𝗔𝗠𝗘𝗗 𝗝𝗨𝗡𝗜𝗢𝗥❡\n☛❷𝗧𝗬𝗣𝗘➬ 𝒆́𝒄𝒓𝒊𝒕  [-Callad]:➬\n 𝒑𝒐𝒖𝒓 𝒆́𝒄𝒓𝒊𝒓𝒆 𝒂̀ 𝒎𝒐𝒏 𝑩𝑶𝑺𝑺 \n☛❸𝗹𝗶𝗲𝗻 𝗱𝘂 𝗰𝗼𝗺𝗽𝘁𝗲 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗗𝗘 𝗠𝗢𝗡 𝗕𝗢𝗦𝗦 ➬:https://www.facebook.com/nakashi.rhesus",
        attachment: await global.utils.getStreamFromURL("https://i.ibb.co/429nGtD/image.jpg")
      });
    }
  }
}
