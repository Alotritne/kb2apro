const { getFile, asyncWait } = kb2abot.helpers;
const citnut = "==== 12 cung hoàng đạo ====\n 1. Ma Kết ♑️\n 2. Bảo Bình ♒️\n 3. Song Ngư ♓️\n 4. Bạch Dương ♈️\n 5.  Kim Ngưu ♉️\n 6. Song Tử ♊️\n 7. Cự Giải ♋️\n 8. Sư tử ♌️\n 9. Xử Nữ ♍️\n10. Thiên Bìn h♎️\n11. Bọ Cạp ♏️\n12. Nhân Mã ♐️\n\nReply tin nhắn theo số để xem thêm về từng cung <3";

module.exports = {
	keywords: ["12cung","cunghoangdao","12cunghoangdao"],
	name: '12 cung hoàng đạo ( no prefix )',
	description: 'plugin của Hoàng Hải Long, dịch sang kb2abot plugin bởi Kadeer(Code by Citnut)',
	guide: '',
	childs: [],
	permission: {'*': '*'},
	datastoreDesign: {
		account: {
			global: {},
			local: {},
		},
		thread: {
			global: {},
			local: {},
		},
	},
	async onLoad() {},
	hookType: 'non-command',
	async onMessage(message, reply) {
		let setting = this.storage.account.global.citSetting;
		if (message.type != "message_reply") return;
		//let message = await handleReply(message);

		if (!setting.autorun) return;
		if (message.type != "message_reply") return;
		if (message.messageReply.body == citnut && message.messageReply.senderID == this.storage.account.global.console.bot.id) {
			switch(message.body){
				case "1":
					fca.sendMessage({
						body: "1. Ma Kết♑️( 22/12 – 19/1 )\n\nCon số may mắn trong ngày: 26, 89 (Tình cảm: Ma Kết luôn biện minh cho sự ngu dốt của mình vì vậy bạn đang vướng phải một số vấn đề nhỏ.Công việc: Bạn mất nhiều thời gian để cân bằng lại giữa công việc và tình cảm.Tiền bạc: Cung hoàng đạo này hiếm khi có tiền tiết kiệm).", 
						attachment: getFile(`./main/deploy/plugins/citnut/data/cunghoangdao/maket.jpg`)
					}, message.threadID, message.messageID);
				break;
				case "2":
					fca.sendMessage({
						body: "2. Bảo Bình♒️( 20/1 – 18/2 )\n\nCon số may mắn trong ngày: 10, 78 (Tình cảm: Bảo Bình không muốn làm người khác mất mặt nên bạn đã chuẩn bị hết tâm lý từ ban đầu rồi.Công việc: Đừng vội trách cứ ai trong lúc này, bạn sẽ không biết đối diện với cấp trên ra sao đâu.Tiền bạc: Ai cũng cần tiền cả nên có vay phải có trả nhé).", 
						attachment: getFile(`./main/deploy/plugins/citnut/data/cunghoangdao/baobinh.jpg`)
					}, message.threadID, message.messageID);
				break;
				case "3":
					fca.sendMessage({
						body: "3. Song Ngư♓️( 19/2 – 20/3 )\n\nCon số may mắn trong ngày: 22, 78 (Tình cảm: Song Ngư và người ấy không có sự thấu hiểu lẫn nhau nên lúc nào bạn cũng là người gây sự trước.Công việc: Trong công việc, nếu không muốn bị người khác để ý hãy làm tốt công việc của mình là được.Tiền bạc: Tạm thời đừng đầu tư bất cứ khoản gì nhé).", 
						attachment: getFile(`./main/deploy/plugins/citnut/data/cunghoangdao/songngu.jpg`)
					}, message.threadID, message.messageID); 
				break;
				case "4":
					fca.sendMessage({
						body: "4. Bạch Dương♈️( 21/3 – 19/4 )\n\nCon số may mắn trong ngày: 23, 56 (Tình cảm: Bạch Dương không có cách nào làm cho người ấy yêu mình trở lại được nên bạn cảm thấy rất bất mãn.Công việc: Cung hoàng đạo này không muốn bị người khác bắt thóp nên bạn đã chọn cách lừa đồng nghiệp.Tiền bạc: Hãy chi tiêu cho những việc thật sự cần thiết thay vì chi tiêu hoang phí như bây giờ nhé).", 
						attachment: getFile(`./main/deploy/plugins/citnut/data/cunghoangdao/bachduong.jpg`)
					}, message.threadID, message.messageID); 
				break;
				case "5":
					fca.sendMessage({
						body: "5. Kim Ngưu♉️( 20/4 – 20/5 )\n\nCon số may mắn trong ngày: 11, 67 (Tình cảm: Kim Ngưu thông minh nhạy bén bình thường đang bị lu mờ dần do một số thế lực từ gia đình của bạn.Công việc: Trong công việc, Kim Ngưu là người không có tiếng nói, bởi vậy bạn rất hay bị bắt nạt.Tiền bạc: Dù bạn có cẩn thận đến mấy cũng bị người khác lừa tiền mà thôi).", 
						attachment: getFile(`./main/deploy/plugins/citnut/data/cunghoangdao/kimnguu.jpg`)
					}, message.threadID, message.messageID); 
				break;
				case "6":
					fca.sendMessage({
						body: "6. Song Tử♊️( 21/5 – 21/6 )\n\nCon số may mắn trong ngày: 70, 99 (Tình cảm: Song Tử bị Sao Kim làm khó trong chuyện tình cảm nên dù có cố gắng đến mấy cũng không có được tình cảm của người khác.Công việc: Hôm nay chỉ vì những lời nói trong lúc xúc động mà cung hoàng đạo này đã khiến cho cấp dưới hiểu nhầm.Tiền bạc: Song Tử không muốn người khác vay tiền).", 
						attachment: getFile(`./main/deploy/plugins/citnut/data/cunghoangdao/songtu.jpg`)
					}, message.threadID, message.messageID); 
				break;
				case "7":
					fca.sendMessage({
						body: "7. Cự Giải♋️( 22/6 – 22/7)\n\nCon số may mắn trong ngày: 31, 68 (Tình cảm: Cự Giải vẫn bình yên sau những cơn sóng lớn mà không cần sợ một thể lực nào quấy phá cả.Công việc: Trong công việc, bạn không quá nhiệt tình nên cấp trên cũng đánh giá thấp sự chủ động của bạn.Tiền bạc: Cự Giải không muốn trả tiền người khác mà bạn chỉ muốn tiêu thôi).", 
						attachment: getFile(`./main/deploy/plugins/citnut/data/cunghoangdao/cugiai.jpg`)
					}, message.threadID, message.messageID); 
				break;
				case "8":
					fca.sendMessage({
						body: "8. Sư tử♌️( 24/7 – 22/8 )\n\nCon số may mắn trong ngày: 14, 88 (Tình cảm: Sư Tử trong ngày hôm nay cần tránh tiếp xúc với những người mới quen vì có thể họ sẽ đem lại nhiều bất lợi cho bạn đấy.Công việc: Trong công việc, Sư Tử đang dần làm quen với việc phải được và mất gì khi mình không lựa chọn đúng.Tiền bạc: Trong chuyện tiền bạc, cung hoàng đạo này khá sòng phẳng nên ai cũng thoải mái với bạn).", 
						attachment: getFile(`./main/deploy/plugins/citnut/data/cunghoangdao/sutu.jpg`)
					}, message.threadID, message.messageID); 
				break;
				case "9":
					fca.sendMessage({
						body: "9. Xử Nữ♍️( 24/8 – 22/9 )\n\nCon số may mắn trong ngày: 25, 90 (Tình cảm: Xử Nữ ngày càng mạnh mẽ là nhờ có Thường Cương tiếp sức.Công việc: Cung hoàng đạo này khá thông minh khi liên tục lựa chọn những phần việc phù hợp với mình.Tiền bạc: Xử Nữ quá tiết kiệm và không dám chi tiêu gì cho bản thân).", 
						attachment: getFile(`./main/deploy/plugins/citnut/data/cunghoangdao/xunu.jpg`)
					}, message.threadID, message.messageID); 
				break;
				case "10":
					fca.sendMessage({
						body: "10. Thiên Bình♎️( 23/9 – 22/10 )\n\nCon số may mắn trong ngày: 22, 45 (Tình cảm: Thiên Bình một khi đã dứt khoát trong chuyện tình cảm thì bạn sẽ không dính líu thêm một chút nào nữa.Công việc: Thiên Bình mong muốn những dự định của mình được thuận lợi.Tiền bạc: Cung hoàng đạo này biết chi tiêu tiết kiệm nên cũng có một khoản kha khá).", 
						attachment: getFile(`./main/deploy/plugins/citnut/data/cunghoangdao/thienbinh.jpg`)
					}, message.threadID, message.messageID); 
				break;
				case "11":
					fca.sendMessage({
						body: "11. Bọ Cạp♏️( 24/11 – 21/11 )\n\nCon số may mắn trong ngày: 34, 89 (Tình cảm: Bọ Cạp không muốn người khác hiểu nhầm về mối quan hệ của mình và người ấy nên bạn liên tục có những hành động rất khó hiểu.Công việc: Bọ Cạp không cần phải tỏ ra đáng thương đâu vì bạn làm gì cũng không che được mắt cấp trên đâu.Tiền bạc: Cung hoàng đạo này rất suy tính trong việc chi tiêu).", 
						attachment: getFile(`./main/deploy/plugins/citnut/data/cunghoangdao/bocap.jpg`)
					}, message.threadID, message.messageID); 
				break;
				case "12":
					fca.sendMessage({
						body: "12. Nhân Mã♐️( 22/11 – 21/12 )\n\nCon số may mắn trong ngày: 25, 60 (Tình cảm: Nhân Mã hôm nay rất thiếu suy nghĩ khi liên tục tin tưởng người ấy vượt qua rào cản với mình và có cuộc sống mới.Công việc: Chòm sao này rất mệt mỏi khi phải làm những chuyện trái với đạo đức nghề nghiệp.Tiền bạc: Nhân Mã không nên chi tiêu bừa bãi trong thời điểm này).", 
						attachment: getFile(`./main/deploy/plugins/citnut/data/cunghoangdao/nhanma.jpg`)
					}, message.threadID, message.messageID); 
				break;
				default:
					fca.sendMessage("Djtconmemaynguvailon nhap 1-12 thoi <3 iu", message.threadID, message.messageID); 
				break
			};
			asyncWait(10000).then(() => {fca.unsendMessage(message.messageReply.messageID)})
		};

		if (setting.autorun != true || message.senderID == this.storage.account.global.console.bot.id) {
		}else if (message.body.toLowerCase().indexOf("12 cung hoàng đạo") == 0 || (message.body.toLowerCase().indexOf("12 cung hoàng đạo") == 0)) {
			fca.sendMessage({
				body: citnut,
				attachment: getFile("./main/deploy/plugins/citnut/data/cunghoangdao/12cunghoangdao.jpg")
			}, message.threadID, message.messageID);
		}
	},

	async onCall(message, reply) {
		let setting = this.storage.account.global.citSetting; 

		if (!setting.run.cunghoangdao) {
			reply(`plugin này đã bị tắt`)
		}else {
			fca.sendMessage({
				body: citnut,
				attachment: getFile("./main/deploy/plugins/citnut/data/cunghoangdao/12cunghoangdao.jpg")
			}, message.threadID, message.messageID);
		}
	}
}