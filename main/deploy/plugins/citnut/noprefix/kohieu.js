const { getFile } = kb2abot.helpers;
let attachment = getFile("./main/deploy/plugins/citnut/data/quynhhh.mp3");

module.exports = {
	keywords: ["kohieu", "khonghieu"],

	name: 'ko hiểu sao?',

	description: 'một lệnh cực cute',

	guide: '',

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

	async onLoad() {},

	hookType: 'non-command',

	async onMessage(message, reply) {
		let setting = this.storage.account.global.citSetting;
		if (setting.autorun != true || message.senderID == this.storage.account.global.console.bot.id) {
		}else if (message.body.toLowerCase().includes("ko hiểu") || message.body.toLowerCase().includes("không hiểu")) {
			if (message.type == "message_reply" && message.messageReply.body == "Nhấn mạnh đóo...") return;
			reply({body: "Nhấn mạnh đóo...",attachment})
		}
	},

	async onCall(message, reply) {
		let setting = this.storage.account.global.citSetting;
		if (setting.run.kohieu != true) {
			reply("plugin này đã bị tắt")
		}else {reply({body: "Nhấn mạnh đóo...",attachment})};
	}
};
