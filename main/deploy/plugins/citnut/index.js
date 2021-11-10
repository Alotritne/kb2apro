const {getInstructor} = kb2abot.helpers;
const childs = [
    'Kadeer/12thi',
    'Kadeer/anime',
    'Kadeer/cunghoangdao',
    'Kadeer/du',
    'Kadeer/DuckBo',
    'Kadeer/hanhtinh',
    'Kadeer/meme',
    'Kadeer/mong'
    'Kadeer/sexy',
    'Kadeer/vidmeme',
    'Kadeer/lmau',
    'Kadeer/vitamin',
    'Kadeer/wibu',
	'img/gainua',
	'img/boy',
	'img/girl',
	'img/cosplay',
	'img/fox',
	'img/jimmy',
	'vid/muaquatpro',
	'vid/hacker',
	'more/tinhtam',
	'more/adminbot',
	'more/adduser',
	'more/cadao',
	'more/uid',
	'more/calendar',
	'more/voice',
	'more/trungthu',
	'more/tet',
	'more/tetthieunhi',
	'more/cathangtu',
	'sing',
	'eco/pay',
	'eco/work',
	'eco/slut',
	'eco/crime',
	'eco/fishing',
	'console',
	'func',
	'unsend',
	'uptime',
	'noprefix/thathinh',
	'noprefix/aothatday',
	'noprefix/botngu',
	'noprefix/concainit',
	'noprefix/dongu',
	'noprefix/vinhbiet',
	'noprefix/happybirthd',
	'noprefix/vovanhoa',
	'noprefix/trieu',
	'noprefix/hao',
	'noprefix/banlanhat',
	'noprefix/he',
	'noprefix/oibanoi',
	'noprefix/thunglung',
	'noprefix/uwu',
	'noprefix/congiap',
	'noprefix/DAT',
	'noprefix/kohieu'
];
module.exports = {
	keywords: ['ℂ𝕀𝕋ℕ𝕌𝕋', 'CITNUT', 'citnut'],

	name: 'Citnut plugins',

	description: 'Official Citnut plugins',

	guide: '',

	childs,

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

	hookType: 'none',

	async onMessage(message, reply) {
		
	},

	async onCall(message, reply) {
		reply(getInstructor('CITNUT ⭐', childs));
	}
};
