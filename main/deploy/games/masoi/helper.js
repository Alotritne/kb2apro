const fs = require('fs');
const path = require('path');
const axios = require('axios');
const deepExtend = require('deep-extend');
const {Data} = require('./constant');
const {Party} = require('./enum');
const {random} = kb2abot.helpers;

const exampleConfig = require('./gameConfig.example');
const exampleConfigPath = path.join(__dirname, 'gameConfig.example.js');
const configPath = path.join(__dirname, 'gameConfig.js');
let gameConfig;
if (!fs.existsSync(configPath)) {
	fs.writeFileSync(configPath, fs.readFileSync(exampleConfigPath));
	gameConfig = require(exampleConfigPath);
} else {
	gameConfig = {...exampleConfig, ...require(configPath)};
}

const symbols = {
	0: '0⃣',
	1: '1⃣',
	2: '2⃣',
	3: '3⃣',
	4: '4⃣',
	5: '5⃣',
	6: '6⃣',
	7: '7⃣',
	8: '8⃣',
	9: '9⃣'
};
for (let i = 10; i <= 1000; i++) {
	let number = i;
	symbols[i] = '';
	while (number > 0) {
		symbols[i] = symbols[number % 10] + symbols[i];
		number = Math.floor(number / 10);
	}
}

const checkUpdate = async () => {
	if (path.basename(__filename) == 'gameConfig.example.js') return;
	const exVer = require('./gameConfig.example.js').version;
	const curVer = (
		await axios.get(
			'https://drive.google.com/u/0/uc?id=14CIBFaNe9tz9Iz0bqW5V6etEwlCZCe2R&export=download'
		)
	).data.version;
	if (exVer != curVer) {
		console.newLogger.warn(
			`Ma Soi: Da co phien ban moi: ${curVer}! Phien ban hien tai: ${exVer}. Hay truy cap bit.ly/kb2abot`
		);
	}
	if (version != exVer) {
		console.newLogger.warn(
			'Ma Soi: Phien ban config khong tuong thich co the gay loi, vui long backup va xoa file gameConfig.js'
		);
	}
};

const randomItem = arr => {
	return arr[random(0, arr.length - 1)];
};

const dataSetup = setup => {
	const roles = [];
	for (let role in setup.roles) {
		roles.push(...new Array(setup.roles[role]).fill(role));
	}
	return {
		name: setup.name,
		roles,
		org: setup
	};
};

const guide = role => {
	const roleName = role.constructor.name;
	const {party, description, advice} = Data[roleName];
	let partyName;
	for (partyName in Party) if (party == Party[partyName]) break;
	return (
		`BẠN LÀ ${roleName.toUpperCase()}!\n` +
		`Phe: ${partyName} (vẫn có thể bị đổi)\n` +
		`Mô tả: ${description}\n` +
		`Lời khuyên: ${advice}`
	);
};

const verify = async () => {
	try {
		const onlineVersion = (
			await axios.get(
				'https://drive.google.com/u/0/uc?id=14CIBFaNe9tz9Iz0bqW5V6etEwlCZCe2R&export=download'
			)
		).data.version;
		if (exampleConfig.version != onlineVersion) {
			console.newLogger.warn(
				`Da co phien ban moi: ${onlineVersion}, truy cap bit.ly/kb2abot de cap nhat! Phien ban hien tai: ${exampleConfig.version}`
			);
		}
		if (gameConfig.version != exampleConfig.version) {
			console.newLogger.warn(
				`Phien ban config hien tai [${gameConfig.version}] co the khong tuong thich voi ban [${exampleConfig.version}], vui long sua hoac xoa file gameConfig.js!`
			);
		}
	} catch (err) {
		console.error(err);
		console.newLogger.error('Khong the kiem tra cap nhat cho game ma soi!');
	}
};

module.exports = {
	gameConfig,
	symbols,
	checkUpdate,
	randomItem,
	dataSetup,
	guide,
	verify
};