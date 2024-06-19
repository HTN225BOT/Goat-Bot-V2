module.exports = {
    config: {
        name: "salut",
        version: "1.0",
        author: "HAMED JUNIOR 🎶",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("𝐲𝐨, 𝐜'𝐞𝐬𝐭 𝐜𝐨𝐦𝐦𝐞𝐧𝐭, 𝐦𝐨𝐢 𝐣𝐞 𝐬𝐮𝐢𝐬 𝐭𝐨𝐧 𝐚𝐬𝐬𝐢𝐬𝐭𝐚𝐧𝐭 𝐯𝐢𝐫𝐭𝐮𝐞𝐥 𝐭𝐮 𝐚𝐬 𝐝𝐞𝐬 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬 𝐧'𝐡𝐞́𝐬𝐢𝐭𝐞𝐳 𝐩𝐚𝐬 😉");
}
};
