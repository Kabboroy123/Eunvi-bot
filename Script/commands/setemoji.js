module.exports.config = {
	name: "setemoji",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Eunvi ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
	description: "Change emoji in group",
	commandCategory: "Group",
	usages: "setemoji [emoji]",
	cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
	const emoji = args.join(" ")
	api.changeThreadEmoji(`${args.join(" ")}`, event.threadID, event.messagaID);
}
