/* ============================================================
   FLAG MOSAIC – script.js
   Mahjong Solitaire with World Flag Emojis
   Mock Pi Network • Arabic RTL • Mobile-First
============================================================ */
'use strict';

// ─────────────────────────────────────────────
// 1. TRANSLATIONS
// ─────────────────────────────────────────────
const TRANSLATIONS = {
  ar: {
    appTitle:'Flag Mosaic', appSub:'العب • اكتشف • اجمع',
    connectPi:'اتصل بـ Pi', playGuest:'العب كضيف',
    home:'الرئيسية', play:'العب', profile:'الملف', wallet:'المحفظة', settings:'الإعدادات',
    level:'المستوى', stars:'النجوم', flags:'الأعلام',
    score:'النتيجة', time:'الوقت', earned:'كسبت', nextLevel:'المستوى التالي',
    newDiscovery:'اكتشاف جديد!', capital:'العاصمة', continent:'القارة', awesome:'رائع!',
    dailyReward:'مكافأة اليوم', claim:'استلم',
    shuffle:'خلط', hint:'تلميح', undo:'تراجع',
    gamesPlayed:'مباريات', matches:'تطابقات', flagsColl:'أعلام',
    achievements:'الإنجازات', flagCollection:'مجموعة الأعلام',
    balance:'رصيدك', mockPi:'محاكاة Pi Network', shop:'المتجر', buy:'شراء', transactions:'سجل المعاملات',
    audio:'الصوت', music:'موسيقى', sfx:'مؤثرات', appearance:'المظهر',
    darkMode:'الوضع الليلي', largeText:'نص كبير', language:'اللغة',
    account:'الحساب', logout:'تسجيل الخروج', resetProgress:'إعادة التعيين',
    leaderboard:'المتصدرون', paused:'متوقف', resume:'استأنف',
    modeClassic:'كلاسيك', modeTimed:'محدود الوقت', modeChallenge:'تحدي',
    youWin:'فزت!', noHints:'لا يوجد تلميح متاح', shuffled:'تم الخلط!',
    notEnoughPi:'رصيد غير كافٍ', undone:'تم التراجع', noMoves:'لا حركات للتراجع',
    boardCleared:'أحسنت! تم تطهير اللوحة',
    connectingPi:'جارٍ الاتصال بـ Pi Network…',
    welcomeBack:'مرحباً بعودتك',
  },
  en: {
    appTitle:'Flag Mosaic', appSub:'Play • Discover • Collect',
    connectPi:'Connect with Pi', playGuest:'Play as Guest',
    home:'Home', play:'Play', profile:'Profile', wallet:'Wallet', settings:'Settings',
    level:'Level', stars:'Stars', flags:'Flags',
    score:'Score', time:'Time', earned:'Earned', nextLevel:'Next Level',
    newDiscovery:'New Discovery!', capital:'Capital', continent:'Continent', awesome:'Awesome!',
    dailyReward:'Daily Reward', claim:'Claim',
    shuffle:'Shuffle', hint:'Hint', undo:'Undo',
    gamesPlayed:'Games', matches:'Matches', flagsColl:'Flags',
    achievements:'Achievements', flagCollection:'Flag Collection',
    balance:'Your Balance', mockPi:'Pi Network Mock', shop:'Shop', buy:'Buy', transactions:'Transactions',
    audio:'Audio', music:'Music', sfx:'SFX', appearance:'Appearance',
    darkMode:'Dark Mode', largeText:'Large Text', language:'Language',
    account:'Account', logout:'Logout', resetProgress:'Reset Progress',
    leaderboard:'Leaderboard', paused:'Paused', resume:'Resume',
    modeClassic:'Classic', modeTimed:'Timed', modeChallenge:'Challenge',
    youWin:'You Win!', noHints:'No hint available', shuffled:'Board shuffled!',
    notEnoughPi:'Not enough Pi', undone:'Move undone', noMoves:'No moves to undo',
    boardCleared:'Board cleared!',
    connectingPi:'Connecting to Pi Network…',
    welcomeBack:'Welcome back',
  },
  fr: {
    appTitle:'Flag Mosaic', appSub:'Joue • Découvre • Collectionne',
    connectPi:'Connecter avec Pi', playGuest:'Jouer en invité',
    home:'Accueil', play:'Jouer', profile:'Profil', wallet:'Portefeuille', settings:'Paramètres',
    level:'Niveau', stars:'Étoiles', flags:'Drapeaux',
    score:'Score', time:'Temps', earned:'Gagné', nextLevel:'Niveau suivant',
    newDiscovery:'Nouvelle découverte!', capital:'Capitale', continent:'Continent', awesome:'Super!',
    dailyReward:'Récompense du jour', claim:'Réclamer',
    shuffle:'Mélanger', hint:'Indice', undo:'Annuler',
    gamesPlayed:'Parties', matches:'Paires', flagsColl:'Drapeaux',
    achievements:'Succès', flagCollection:'Collection de drapeaux',
    balance:'Votre solde', mockPi:'Simulation Pi Network', shop:'Boutique', buy:'Acheter', transactions:'Transactions',
    audio:'Audio', music:'Musique', sfx:'Effets', appearance:'Apparence',
    darkMode:'Mode sombre', largeText:'Grand texte', language:'Langue',
    account:'Compte', logout:'Déconnexion', resetProgress:'Réinitialiser',
    leaderboard:'Classement', paused:'Pause', resume:'Reprendre',
    modeClassic:'Classique', modeTimed:'Chrono', modeChallenge:'Défi',
    youWin:'Victoire!', noHints:'Aucun indice', shuffled:'Mélangé!',
    notEnoughPi:'Pi insuffisant', undone:'Annulé', noMoves:'Aucun coup à annuler',
    boardCleared:'Plateau nettoyé!',
    connectingPi:'Connexion à Pi Network…',
    welcomeBack:'Bon retour',
  }
};

// ─────────────────────────────────────────────
// 2. COUNTRY DATA (194 countries, no Israel)
// ─────────────────────────────────────────────
const COUNTRIES = [
  {f:'🇦🇫',n:'Afghanistan',c:'Kabul',ct:'Asia',fact:'Home to the Hindukush mountains.'},
  {f:'🇦🇱',n:'Albania',c:'Tirana',ct:'Europe',fact:'Land of eagles — Shqipëri.'},
  {f:'🇩🇿',n:'Algeria',c:'Algiers',ct:'Africa',fact:'Largest country in Africa.'},
  {f:'🇦🇩',n:'Andorra',c:'Andorra la Vella',ct:'Europe',fact:'One of the smallest states in Europe.'},
  {f:'🇦🇴',n:'Angola',c:'Luanda',ct:'Africa',fact:'Rich in oil and diamonds.'},
  {f:'🇦🇬',n:'Antigua & Barbuda',c:'Saint John\'s',ct:'Americas',fact:'365 beaches — one per day.'},
  {f:'🇦🇷',n:'Argentina',c:'Buenos Aires',ct:'Americas',fact:'Birthplace of tango.'},
  {f:'🇦🇲',n:'Armenia',c:'Yerevan',ct:'Asia',fact:'One of the world\'s oldest civilizations.'},
  {f:'🇦🇺',n:'Australia',c:'Canberra',ct:'Oceania',fact:'Home to the world\'s largest coral reef.'},
  {f:'🇦🇹',n:'Austria',c:'Vienna',ct:'Europe',fact:'Classical music capital of the world.'},
  {f:'🇦🇿',n:'Azerbaijan',c:'Baku',ct:'Asia',fact:'Land of Fire.'},
  {f:'🇧🇸',n:'Bahamas',c:'Nassau',ct:'Americas',fact:'700+ islands.'},
  {f:'🇧🇭',n:'Bahrain',c:'Manama',ct:'Asia',fact:'Tiny island nation in the Gulf.'},
  {f:'🇧🇩',n:'Bangladesh',c:'Dhaka',ct:'Asia',fact:'One of the most densely populated countries.'},
  {f:'🇧🇧',n:'Barbados',c:'Bridgetown',ct:'Americas',fact:'Birthplace of rum.'},
  {f:'🇧🇾',n:'Belarus',c:'Minsk',ct:'Europe',fact:'Known as the lungs of Europe.'},
  {f:'🇧🇪',n:'Belgium',c:'Brussels',ct:'Europe',fact:'More castles per km² than any country.'},
  {f:'🇧🇿',n:'Belize',c:'Belmopan',ct:'Americas',fact:'Home to the Blue Hole marine site.'},
  {f:'🇧🇯',n:'Benin',c:'Porto-Novo',ct:'Africa',fact:'Birthplace of Vodou.'},
  {f:'🇧🇹',n:'Bhutan',c:'Thimphu',ct:'Asia',fact:'Measures success by Gross National Happiness.'},
  {f:'🇧🇴',n:'Bolivia',c:'Sucre',ct:'Americas',fact:'World\'s highest navigable lake — Titicaca.'},
  {f:'🇧🇦',n:'Bosnia & Herzegovina',c:'Sarajevo',ct:'Europe',fact:'Hosts medieval stećci tombstones.'},
  {f:'🇧🇼',n:'Botswana',c:'Gaborone',ct:'Africa',fact:'World\'s largest elephant population.'},
  {f:'🇧🇷',n:'Brazil',c:'Brasília',ct:'Americas',fact:'Largest country in South America.'},
  {f:'🇧🇳',n:'Brunei',c:'Bandar Seri Begawan',ct:'Asia',fact:'One of the smallest but richest countries.'},
  {f:'🇧🇬',n:'Bulgaria',c:'Sofia',ct:'Europe',fact:'Oldest country in Europe to keep its name.'},
  {f:'🇧🇫',n:'Burkina Faso',c:'Ouagadougou',ct:'Africa',fact:'Home to the largest film festival in Africa.'},
  {f:'🇧🇮',n:'Burundi',c:'Gitega',ct:'Africa',fact:'Drum is the national symbol.'},
  {f:'🇨🇻',n:'Cabo Verde',c:'Praia',ct:'Africa',fact:'Volcanic archipelago in the Atlantic.'},
  {f:'🇰🇭',n:'Cambodia',c:'Phnom Penh',ct:'Asia',fact:'Home to Angkor Wat — largest temple.'},
  {f:'🇨🇲',n:'Cameroon',c:'Yaoundé',ct:'Africa',fact:'Africa in miniature.'},
  {f:'🇨🇦',n:'Canada',c:'Ottawa',ct:'Americas',fact:'Second largest country on Earth.'},
  {f:'🇨🇫',n:'Central African Republic',c:'Bangui',ct:'Africa',fact:'Heart of Africa.'},
  {f:'🇹🇩',n:'Chad',c:"N'Djamena",ct:'Africa',fact:'Dead Sea of Africa — Lake Chad is shrinking.'},
  {f:'🇨🇱',n:'Chile',c:'Santiago',ct:'Americas',fact:'Longest north-south country in the world.'},
  {f:'🇨🇳',n:'China',c:'Beijing',ct:'Asia',fact:'Most populous country with 5000 years of history.'},
  {f:'🇨🇴',n:'Colombia',c:'Bogotá',ct:'Americas',fact:'Only South American country with two coastlines.'},
  {f:'🇰🇲',n:'Comoros',c:'Moroni',ct:'Africa',fact:'Perfume Islands of the Indian Ocean.'},
  {f:'🇨🇬',n:'Congo (Republic)',c:'Brazzaville',ct:'Africa',fact:'Named after the Congo River.'},
  {f:'🇨🇩',n:'Congo (DRC)',c:'Kinshasa',ct:'Africa',fact:'Second largest country in Africa.'},
  {f:'🇨🇷',n:'Costa Rica',c:'San José',ct:'Americas',fact:'No army since 1948.'},
  {f:'🇨🇮',n:"Côte d'Ivoire",c:'Yamoussoukro',ct:'Africa',fact:"World's largest cocoa producer."},
  {f:'🇭🇷',n:'Croatia',c:'Zagreb',ct:'Europe',fact:'Origin of the necktie.'},
  {f:'🇨🇺',n:'Cuba',c:'Havana',ct:'Americas',fact:'Largest island in the Caribbean.'},
  {f:'🇨🇾',n:'Cyprus',c:'Nicosia',ct:'Europe',fact:'Only divided capital in the world.'},
  {f:'🇨🇿',n:'Czech Republic',c:'Prague',ct:'Europe',fact:'Beer consumption capital of the world.'},
  {f:'🇩🇰',n:'Denmark',c:'Copenhagen',ct:'Europe',fact:'Happiest country ranking regular.'},
  {f:'🇩🇯',n:'Djibouti',c:'Djibouti City',ct:'Africa',fact:'One of the hottest places on Earth.'},
  {f:'🇩🇲',n:'Dominica',c:'Roseau',ct:'Americas',fact:'Nature Isle of the Caribbean.'},
  {f:'🇩🇴',n:'Dominican Republic',c:'Santo Domingo',ct:'Americas',fact:'First permanent European settlement in the Americas.'},
  {f:'🇪🇨',n:'Ecuador',c:'Quito',ct:'Americas',fact:'First country to grant rights to nature.'},
  {f:'🇪🇬',n:'Egypt',c:'Cairo',ct:'Africa',fact:'Home to the last remaining ancient wonder.'},
  {f:'🇸🇻',n:'El Salvador',c:'San Salvador',ct:'Americas',fact:'Smallest country in Central America.'},
  {f:'🇬🇶',n:'Equatorial Guinea',c:'Malabo',ct:'Africa',fact:'Only Spanish-speaking country in Africa.'},
  {f:'🇪🇷',n:'Eritrea',c:'Asmara',ct:'Africa',fact:'Asmara is a UNESCO Art Deco city.'},
  {f:'🇪🇪',n:'Estonia',c:'Tallinn',ct:'Europe',fact:'Most digitally advanced society.'},
  {f:'🇸🇿',n:'Eswatini',c:'Mbabane',ct:'Africa',fact:'One of the last absolute monarchies.'},
  {f:'🇪🇹',n:'Ethiopia',c:'Addis Ababa',ct:'Africa',fact:"Cradle of humanity — Lucy's bones found here."},
  {f:'🇫🇯',n:'Fiji',c:'Suva',ct:'Oceania',fact:'330 islands in the South Pacific.'},
  {f:'🇫🇮',n:'Finland',c:'Helsinki',ct:'Europe',fact:'Land of a thousand lakes.'},
  {f:'🇫🇷',n:'France',c:'Paris',ct:'Europe',fact:'Most visited country in the world.'},
  {f:'🇬🇦',n:'Gabon',c:'Libreville',ct:'Africa',fact:'80% covered in rainforest.'},
  {f:'🇬🇲',n:'Gambia',c:'Banjul',ct:'Africa',fact:'Smallest country in mainland Africa.'},
  {f:'🇬🇪',n:'Georgia',c:'Tbilisi',ct:'Asia',fact:'One of the oldest wine regions.'},
  {f:'🇩🇪',n:'Germany',c:'Berlin',ct:'Europe',fact:'World\'s largest beer festival — Oktoberfest.'},
  {f:'🇬🇭',n:'Ghana',c:'Accra',ct:'Africa',fact:'First sub-Saharan country to gain independence.'},
  {f:'🇬🇷',n:'Greece',c:'Athens',ct:'Europe',fact:'Birthplace of democracy and the Olympics.'},
  {f:'🇬🇩',n:'Grenada',c:"Saint George's",ct:'Americas',fact:'Spice Island of the Caribbean.'},
  {f:'🇬🇹',n:'Guatemala',c:'Guatemala City',ct:'Americas',fact:'Heart of the Maya civilization.'},
  {f:'🇬🇳',n:'Guinea',c:'Conakry',ct:'Africa',fact:'Second largest bauxite reserves.'},
  {f:'🇬🇼',n:'Guinea-Bissau',c:'Bissau',ct:'Africa',fact:'Archipelago of 88 islands.'},
  {f:'🇬🇾',n:'Guyana',c:'Georgetown',ct:'Americas',fact:'Only English-speaking country in South America.'},
  {f:'🇭🇹',n:'Haiti',c:'Port-au-Prince',ct:'Americas',fact:'First Black republic in the world.'},
  {f:'🇭🇳',n:'Honduras',c:'Tegucigalpa',ct:'Americas',fact:'Home to Copán Maya ruins.'},
  {f:'🇭🇺',n:'Hungary',c:'Budapest',ct:'Europe',fact:'Budapest — Pearl of the Danube.'},
  {f:'🇮🇸',n:'Iceland',c:'Reykjavik',ct:'Europe',fact:'Land of fire and ice.'},
  {f:'🇮🇳',n:'India',c:'New Delhi',ct:'Asia',fact:'World\'s largest democracy.'},
  {f:'🇮🇩',n:'Indonesia',c:'Jakarta',ct:'Asia',fact:'World\'s largest archipelago.'},
  {f:'🇮🇷',n:'Iran',c:'Tehran',ct:'Asia',fact:'Ancient Persian empire heartland.'},
  {f:'🇮🇶',n:'Iraq',c:'Baghdad',ct:'Asia',fact:'Cradle of civilization — Mesopotamia.'},
  {f:'🇮🇪',n:'Ireland',c:'Dublin',ct:'Europe',fact:'Emerald Isle.'},
  {f:'🇮🇹',n:'Italy',c:'Rome',ct:'Europe',fact:'More UNESCO heritage sites than any other.'},
  {f:'🇯🇲',n:'Jamaica',c:'Kingston',ct:'Americas',fact:'Birthplace of reggae and Bob Marley.'},
  {f:'🇯🇵',n:'Japan',c:'Tokyo',ct:'Asia',fact:'Land of the Rising Sun.'},
  {f:'🇯🇴',n:'Jordan',c:'Amman',ct:'Asia',fact:'Home to Petra — rose-red city.'},
  {f:'🇰🇿',n:'Kazakhstan',c:'Astana',ct:'Asia',fact:'World\'s largest landlocked country.'},
  {f:'🇰🇪',n:'Kenya',c:'Nairobi',ct:'Africa',fact:'Safari capital of the world.'},
  {f:'🇰🇮',n:'Kiribati',c:'South Tarawa',ct:'Oceania',fact:'First country to see the new year.'},
  {f:'🇰🇼',n:'Kuwait',c:'Kuwait City',ct:'Asia',fact:'One of the richest per capita countries.'},
  {f:'🇰🇬',n:'Kyrgyzstan',c:'Bishkek',ct:'Asia',fact:'Land of the Tian Shan mountains.'},
  {f:'🇱🇦',n:'Laos',c:'Vientiane',ct:'Asia',fact:'Most bombed country per capita in history.'},
  {f:'🇱🇻',n:'Latvia',c:'Riga',ct:'Europe',fact:'Baltic amber coast.'},
  {f:'🇱🇧',n:'Lebanon',c:'Beirut',ct:'Asia',fact:'Paris of the Middle East.'},
  {f:'🇱🇸',n:'Lesotho',c:'Maseru',ct:'Africa',fact:'Entirely surrounded by South Africa.'},
  {f:'🇱🇷',n:'Liberia',c:'Monrovia',ct:'Africa',fact:'Founded by freed American slaves.'},
  {f:'🇱🇾',n:'Libya',c:'Tripoli',ct:'Africa',fact:'90% of the country is desert.'},
  {f:'🇱🇮',n:'Liechtenstein',c:'Vaduz',ct:'Europe',fact:'Doubly landlocked in Europe.'},
  {f:'🇱🇹',n:'Lithuania',c:'Vilnius',ct:'Europe',fact:'Geometric center of Europe.'},
  {f:'🇱🇺',n:'Luxembourg',c:'Luxembourg City',ct:'Europe',fact:'Highest GDP per capita in the EU.'},
  {f:'🇲🇬',n:'Madagascar',c:'Antananarivo',ct:'Africa',fact:'90% of wildlife found nowhere else.'},
  {f:'🇲🇼',n:'Malawi',c:'Lilongwe',ct:'Africa',fact:'The Warm Heart of Africa.'},
  {f:'🇲🇾',n:'Malaysia',c:'Kuala Lumpur',ct:'Asia',fact:'Home to the iconic Petronas Towers.'},
  {f:'🇲🇻',n:'Maldives',c:'Malé',ct:'Asia',fact:'Lowest-lying country — avg 1.5m above sea.'},
  {f:'🇲🇱',n:'Mali',c:'Bamako',ct:'Africa',fact:'Timbuktu was a medieval centre of learning.'},
  {f:'🇲🇹',n:'Malta',c:'Valletta',ct:'Europe',fact:'Smallest EU member by population.'},
  {f:'🇲🇭',n:'Marshall Islands',c:'Majuro',ct:'Oceania',fact:'Part of the Pacific Ring of Fire.'},
  {f:'🇲🇷',n:'Mauritania',c:'Nouakchott',ct:'Africa',fact:'Ancient caravan crossroads.'},
  {f:'🇲🇺',n:'Mauritius',c:'Port Louis',ct:'Africa',fact:'Dodo bird was native here.'},
  {f:'🇲🇽',n:'Mexico',c:'Mexico City',ct:'Americas',fact:'Home to the oldest university in North America.'},
  {f:'🇫🇲',n:'Micronesia',c:'Palikir',ct:'Oceania',fact:'607 islands in the Western Pacific.'},
  {f:'🇲🇩',n:'Moldova',c:'Chișinău',ct:'Europe',fact:'Largest wine cellar in the world.'},
  {f:'🇲🇨',n:'Monaco',c:'Monaco',ct:'Europe',fact:'Most densely populated sovereign state.'},
  {f:'🇲🇳',n:'Mongolia',c:'Ulaanbaatar',ct:'Asia',fact:'Birthplace of the Mongol Empire.'},
  {f:'🇲🇪',n:'Montenegro',c:'Podgorica',ct:'Europe',fact:'Name means Black Mountain.'},
  {f:'🇲🇦',n:'Morocco',c:'Rabat',ct:'Africa',fact:'Gateway between Europe and Africa.'},
  {f:'🇲🇿',n:'Mozambique',c:'Maputo',ct:'Africa',fact:'Long Indian Ocean coastline.'},
  {f:'🇲🇲',n:'Myanmar',c:'Naypyidaw',ct:'Asia',fact:'Home to Shwedagon Pagoda.'},
  {f:'🇳🇦',n:'Namibia',c:'Windhoek',ct:'Africa',fact:'Oldest desert — Namib.'},
  {f:'🇳🇷',n:'Nauru',c:'Yaren',ct:'Oceania',fact:'Third smallest country in the world.'},
  {f:'🇳🇵',n:'Nepal',c:'Kathmandu',ct:'Asia',fact:'Home to 8 of the world\'s 10 tallest peaks.'},
  {f:'🇳🇱',n:'Netherlands',c:'Amsterdam',ct:'Europe',fact:'25% of land below sea level.'},
  {f:'🇳🇿',n:'New Zealand',c:'Wellington',ct:'Oceania',fact:'First country to give women the right to vote.'},
  {f:'🇳🇮',n:'Nicaragua',c:'Managua',ct:'Americas',fact:'Land of lakes and volcanoes.'},
  {f:'🇳🇪',n:'Niger',c:'Niamey',ct:'Africa',fact:'Largest country in West Africa.'},
  {f:'🇳🇬',n:'Nigeria',c:'Abuja',ct:'Africa',fact:'Most populous country in Africa.'},
  {f:'🇰🇵',n:'North Korea',c:'Pyongyang',ct:'Asia',fact:'Most isolated country in the world.'},
  {f:'🇲🇰',n:'North Macedonia',c:'Skopje',ct:'Europe',fact:'Land of Alexander the Great.'},
  {f:'🇳🇴',n:'Norway',c:'Oslo',ct:'Europe',fact:'Country with most Nobel Peace Prize winners.'},
  {f:'🇴🇲',n:'Oman',c:'Muscat',ct:'Asia',fact:'Gateway to the Arabian Sea.'},
  {f:'🇵🇰',n:'Pakistan',c:'Islamabad',ct:'Asia',fact:'Land of K2 — second highest peak.'},
  {f:'🇵🇼',n:'Palau',c:'Ngerulmud',ct:'Oceania',fact:'Home to jellyfish lake.'},
  {f:'🇵🇦',n:'Panama',c:'Panama City',ct:'Americas',fact:'Canal connecting Atlantic and Pacific.'},
  {f:'🇵🇬',n:'Papua New Guinea',c:'Port Moresby',ct:'Oceania',fact:'Most linguistically diverse country.'},
  {f:'🇵🇾',n:'Paraguay',c:'Asunción',ct:'Americas',fact:'Landlocked heart of South America.'},
  {f:'🇵🇪',n:'Peru',c:'Lima',ct:'Americas',fact:'Home to Machu Picchu and Inca empire.'},
  {f:'🇵🇭',n:'Philippines',c:'Manila',ct:'Asia',fact:'7,641 islands in the Pacific.'},
  {f:'🇵🇱',n:'Poland',c:'Warsaw',ct:'Europe',fact:'Second largest country in Central Europe.'},
  {f:'🇵🇹',n:'Portugal',c:'Lisbon',ct:'Europe',fact:'Oldest country in Europe by borders.'},
  {f:'🇶🇦',n:'Qatar',c:'Doha',ct:'Asia',fact:'Hosted FIFA World Cup 2022.'},
  {f:'🇷🇴',n:'Romania',c:'Bucharest',ct:'Europe',fact:'Land of Transylvania and Count Dracula.'},
  {f:'🇷🇺',n:'Russia',c:'Moscow',ct:'Europe',fact:'Largest country by area in the world.'},
  {f:'🇷🇼',n:'Rwanda',c:'Kigali',ct:'Africa',fact:'Land of a thousand hills.'},
  {f:'🇰🇳',n:'Saint Kitts & Nevis',c:'Basseterre',ct:'Americas',fact:'Smallest nation in the Americas.'},
  {f:'🇱🇨',n:'Saint Lucia',c:'Castries',ct:'Americas',fact:'Two Nobel Prize laureates per capita.'},
  {f:'🇻🇨',n:'Saint Vincent & Grenadines',c:'Kingstown',ct:'Americas',fact:'Breadfruit plant was first brought here.'},
  {f:'🇼🇸',n:'Samoa',c:'Apia',ct:'Oceania',fact:'Land of the long white cloud.'},
  {f:'🇸🇲',n:'San Marino',c:'San Marino City',ct:'Europe',fact:'Oldest republic in the world.'},
  {f:'🇸🇹',n:'São Tomé & Príncipe',c:'São Tomé',ct:'Africa',fact:'Smallest African country by area.'},
  {f:'🇸🇦',n:'Saudi Arabia',c:'Riyadh',ct:'Asia',fact:'Largest country in the Middle East.'},
  {f:'🇸🇳',n:'Senegal',c:'Dakar',ct:'Africa',fact:'Gateway to West Africa.'},
  {f:'🇷🇸',n:'Serbia',c:'Belgrade',ct:'Europe',fact:'White city on the confluence of rivers.'},
  {f:'🇸🇨',n:'Seychelles',c:'Victoria',ct:'Africa',fact:'World\'s smallest capital — Victoria.'},
  {f:'🇸🇱',n:'Sierra Leone',c:'Freetown',ct:'Africa',fact:'Land of diamonds.'},
  {f:'🇸🇬',n:'Singapore',c:'Singapore',ct:'Asia',fact:'City-state with a heart.'},
  {f:'🇸🇰',n:'Slovakia',c:'Bratislava',ct:'Europe',fact:'Castle density per km² is remarkable.'},
  {f:'🇸🇮',n:'Slovenia',c:'Ljubljana',ct:'Europe',fact:'Green paradise of Central Europe.'},
  {f:'🇸🇧',n:'Solomon Islands',c:'Honiara',ct:'Oceania',fact:'Site of pivotal WWII battles.'},
  {f:'🇸🇴',n:'Somalia',c:'Mogadishu',ct:'Africa',fact:'Longest coastline in Africa.'},
  {f:'🇿🇦',n:'South Africa',c:'Pretoria',ct:'Africa',fact:'Rainbow Nation with 11 official languages.'},
  {f:'🇸🇸',n:'South Sudan',c:'Juba',ct:'Africa',fact:'World\'s youngest country (2011).'},
  {f:'🇪🇸',n:'Spain',c:'Madrid',ct:'Europe',fact:'Second largest country in EU.'},
  {f:'🇱🇰',n:'Sri Lanka',c:'Sri Jayawardenepura Kotte',ct:'Asia',fact:'Pearl of the Indian Ocean.'},
  {f:'🇸🇩',n:'Sudan',c:'Khartoum',ct:'Africa',fact:'More pyramids than Egypt.'},
  {f:'🇸🇷',n:'Suriname',c:'Paramaribo',ct:'Americas',fact:'Most forested country in the world.'},
  {f:'🇸🇪',n:'Sweden',c:'Stockholm',ct:'Europe',fact:'Venice of the North.'},
  {f:'🇨🇭',n:'Switzerland',c:'Bern',ct:'Europe',fact:'Holds 1,500+ years of neutrality.'},
  {f:'🇸🇾',n:'Syria',c:'Damascus',ct:'Asia',fact:'Damascus — oldest continuously inhabited city.'},
  {f:'🇹🇼',n:'Taiwan',c:'Taipei',ct:'Asia',fact:'Silicon island of Asia.'},
  {f:'🇹🇯',n:'Tajikistan',c:'Dushanbe',ct:'Asia',fact:'93% mountainous terrain.'},
  {f:'🇹🇿',n:'Tanzania',c:'Dodoma',ct:'Africa',fact:'Home to Kilimanjaro and Serengeti.'},
  {f:'🇹🇭',n:'Thailand',c:'Bangkok',ct:'Asia',fact:'Land of Smiles.'},
  {f:'🇹🇱',n:'Timor-Leste',c:'Dili',ct:'Asia',fact:'One of the youngest countries (2002).'},
  {f:'🇹🇬',n:'Togo',c:'Lomé',ct:'Africa',fact:'Only capital city on the Atlantic coast.'},
  {f:'🇹🇴',n:'Tonga',c:"Nuku'alofa",ct:'Oceania',fact:'Last Polynesian monarchy.'},
  {f:'🇹🇹',n:'Trinidad & Tobago',c:'Port of Spain',ct:'Americas',fact:'Birthplace of calypso and steelpan.'},
  {f:'🇹🇳',n:'Tunisia',c:'Tunis',ct:'Africa',fact:'Launched Arab Spring in 2010.'},
  {f:'🇹🇷',n:'Turkey',c:'Ankara',ct:'Asia',fact:'Straddles two continents.'},
  {f:'🇹🇲',n:'Turkmenistan',c:'Ashgabat',ct:'Asia',fact:'Darvaza gas crater — Door to Hell.'},
  {f:'🇹🇻',n:'Tuvalu',c:'Funafuti',ct:'Oceania',fact:'Fourth smallest country in the world.'},
  {f:'🇺🇬',n:'Uganda',c:'Kampala',ct:'Africa',fact:'Pearl of Africa.'},
  {f:'🇺🇦',n:'Ukraine',c:'Kyiv',ct:'Europe',fact:'Breadbasket of Europe.'},
  {f:'🇦🇪',n:'UAE',c:'Abu Dhabi',ct:'Asia',fact:'Home to the world\'s tallest building.'},
  {f:'🇬🇧',n:'United Kingdom',c:'London',ct:'Europe',fact:'Once ruled a quarter of the world.'},
  {f:'🇺🇸',n:'United States',c:'Washington D.C.',ct:'Americas',fact:'World\'s largest economy.'},
  {f:'🇺🇾',n:'Uruguay',c:'Montevideo',ct:'Americas',fact:'First country to legalize marijuana.'},
  {f:'🇺🇿',n:'Uzbekistan',c:'Tashkent',ct:'Asia',fact:'Ancient Silk Road oasis city — Samarkand.'},
  {f:'🇻🇺',n:'Vanuatu',c:'Port Vila',ct:'Oceania',fact:'Happiest country on Earth (HPI).'},
  {f:'🇻🇦',n:'Vatican City',c:'Vatican City',ct:'Europe',fact:'Smallest independent state in the world.'},
  {f:'🇻🇪',n:'Venezuela',c:'Caracas',ct:'Americas',fact:'Home to Angel Falls — world\'s tallest.'},
  {f:'🇻🇳',n:'Vietnam',c:'Hanoi',ct:'Asia',fact:'Ha Long Bay — UNESCO natural wonder.'},
  {f:'🇾🇪',n:'Yemen',c:'Sana\'a',ct:'Asia',fact:'Sana\'a is one of the oldest cities on Earth.'},
  {f:'🇿🇲',n:'Zambia',c:'Lusaka',ct:'Africa',fact:'Victoria Falls — smoke that thunders.'},
  {f:'🇿🇼',n:'Zimbabwe',c:'Harare',ct:'Africa',fact:'Great Zimbabwe ruins date to 11th century.'},
];

// ─────────────────────────────────────────────
// 3. BOARD LAYOUTS (compressed JSON)
// ─────────────────────────────────────────────
function buildLayout(name) {
  const tiles = [];
  const id = (col, row, layer, key) => ({ col, row, layer, key: key || `${col}-${row}-${layer}` });
  
  if (name === 'pyramid') {
    // Layer 0: 10x8 base
    for (let r = 0; r < 8; r++) for (let c = 0; c < 10; c++) tiles.push(id(c*2, r*2, 0));
    // Layer 1: 8x6
    for (let r = 0; r < 6; r++) for (let c = 0; c < 8; c++) tiles.push(id(c*2+1, r*2+1, 1));
    // Layer 2: 6x4
    for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) tiles.push(id(c*2+2, r*2+2, 2));
    // Layer 3: 4x2
    for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) tiles.push(id(c*2+3, r*2+3, 3));
    // Layer 4: 2x1 apex
    tiles.push(id(4,4,4)); tiles.push(id(5,4,4));
  } else if (name === 'turtle') {
    // Body: 8x6
    for (let r = 1; r < 7; r++) for (let c = 1; c < 9; c++) tiles.push(id(c*2, r*2, 0));
    // Head
    tiles.push(id(10,2,0)); tiles.push(id(12,2,0));
    // Tail
    tiles.push(id(0,8,0)); tiles.push(id(0,10,0));
    // Feet
    tiles.push(id(2,0,0)); tiles.push(id(4,0,0));
    tiles.push(id(12,0,0)); tiles.push(id(14,0,0));
    tiles.push(id(2,14,0)); tiles.push(id(4,14,0));
    tiles.push(id(12,14,0)); tiles.push(id(14,14,0));
    // Layer 1 body
    for (let r = 1; r < 6; r++) for (let c = 1; c < 8; c++) tiles.push(id(c*2+1, r*2+1, 1));
    // Layer 2
    for (let r = 1; r < 5; r++) for (let c = 1; c < 7; c++) tiles.push(id(c*2+2, r*2+2, 2));
    // Top
    tiles.push(id(7,7,3)); tiles.push(id(8,7,3));
  } else if (name === 'dragon') {
    // Dragon body - diagonal S-shape
    const body = [
      [0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],
      [7,1],[7,2],[6,2],[5,2],[4,2],[3,2],[2,2],[1,2],
      [1,3],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4],
      [7,5],[7,6],[6,6],[5,6],[4,6],[3,6],[2,6],[1,6],
    ];
    body.forEach(([c,r]) => tiles.push(id(c*2, r*2, 0)));
    // Wings
    [[0,3],[0,4],[0,5],[8,1],[8,2],[8,3],[8,5],[8,6],[8,7]].forEach(([c,r]) => tiles.push(id(c*2,r*2,0)));
    // Layer 1
    for (let i = 0; i < body.length-4; i++) {
      const [c,r] = body[i+2];
      tiles.push(id(c*2, r*2, 1));
    }
    // Head/tail special
    tiles.push(id(0,0,1)); tiles.push(id(14,12,1));
  } else { // tower
    // Wide base
    for (let r = 0; r < 5; r++) for (let c = 0; c < 12; c++) tiles.push(id(c*2, r*2, 0));
    // Middle sections
    for (let r = 0; r < 4; r++) for (let c = 1; c < 11; c++) tiles.push(id(c*2, r*2+1, 1));
    // Upper
    for (let r = 0; r < 3; r++) for (let c = 2; c < 10; c++) tiles.push(id(c*2, r*2+2, 2));
    // Spire
    for (let r = 0; r < 2; r++) for (let c = 3; c < 9; c++) tiles.push(id(c*2, r*2+3, 3));
    // Apex
    for (let c = 4; c < 8; c++) tiles.push(id(c*2, 8, 4));
    // Top
    tiles.push(id(9,9,5)); tiles.push(id(10,9,5));
  }
  
  // Trim to exactly 144
  while (tiles.length > 144) tiles.pop();
  while (tiles.length < 144) {
    const last = tiles[tiles.length-1];
    tiles.push(id(last.col+1, last.row, last.layer));
  }
  
  return tiles;
}

const LAYOUTS = {
  pyramid: buildLayout('pyramid'),
  turtle:  buildLayout('turtle'),
  dragon:  buildLayout('dragon'),
  tower:   buildLayout('tower'),
};

// ─────────────────────────────────────────────
// 4. ACHIEVEMENTS
// ─────────────────────────────────────────────
const ACHIEVEMENTS = [
  {id:'first_win', icon:'🏆', name:{ar:'أول فوز', en:'First Win', fr:'Première victoire'}, desc:'Win your first game', cond: s => s.gamesWon >= 1},
  {id:'collector10', icon:'🚩', name:{ar:'جمّاع', en:'Collector', fr:'Collectionneur'}, desc:'Collect 10 flags', cond: s => s.flagsCollected.length >= 10},
  {id:'collector50', icon:'🌍', name:{ar:'رحّالة', en:'Explorer', fr:'Explorateur'}, desc:'Collect 50 flags', cond: s => s.flagsCollected.length >= 50},
  {id:'collector100', icon:'🗺️', name:{ar:'مستكشف', en:'World Traveler', fr:'Voyageur'}, desc:'Collect 100 flags', cond: s => s.flagsCollected.length >= 100},
  {id:'speed_5', icon:'⚡', name:{ar:'سريع', en:'Speed Run', fr:'Rapide'}, desc:'Win in under 5 min', cond: s => s.bestTime > 0 && s.bestTime < 300},
  {id:'rich', icon:'💰', name:{ar:'غني', en:'Wealthy', fr:'Riche'}, desc:'Accumulate 1000 Pi', cond: s => s.piBalance >= 1000},
  {id:'matches100', icon:'🎯', name:{ar:'دقيق', en:'Sharp Eye', fr:'Œil acéré'}, desc:'100 total matches', cond: s => s.totalMatches >= 100},
  {id:'level5', icon:'📈', name:{ar:'متقدم', en:'Advanced', fr:'Avancé'}, desc:'Reach level 5', cond: s => s.maxLevel >= 5},
  {id:'level10', icon:'🌟', name:{ar:'محترف', en:'Pro', fr:'Pro'}, desc:'Reach level 10', cond: s => s.maxLevel >= 10},
  {id:'daily3', icon:'📅', name:{ar:'منتظم', en:'Regular', fr:'Régulier'}, desc:'Claim 3 daily rewards', cond: s => s.dailyStreak >= 3},
  {id:'no_hints', icon:'🧠', name:{ar:'عبقري', en:'Genius', fr:'Génie'}, desc:'Win without hints', cond: s => s.winsNoHints >= 1},
  {id:'perfect', icon:'⭐', name:{ar:'مثالي', en:'Perfect', fr:'Parfait'}, desc:'Get 3 stars on 3 levels', cond: s => Object.values(s.levelStars||{}).filter(v=>v>=3).length >= 3},
];

// ─────────────────────────────────────────────
// 5. LEVEL CONFIG
// ─────────────────────────────────────────────
const LEVELS = Array.from({length:20}, (_,i) => ({
  id: i+1,
  layout: ['pyramid','turtle','dragon','tower'][i % 4],
  tiles: 36 + i * 6,                // grows per level
  piReward: 18 + Math.floor(i * 0.85),
  timeLimit: i < 5 ? 0 : 180 + i * 30, // 0 = unlimited (classic only)
  moveLimit: i < 10 ? 0 : 50 + i * 5,
  starThresholds: [
    Math.floor(800 + i * 200),       // 1 star min score
    Math.floor(1200 + i * 300),      // 2 star
    Math.floor(1800 + i * 400),      // 3 star
  ],
}));

// ─────────────────────────────────────────────
// 6. STATE
// ─────────────────────────────────────────────
const defaultState = () => ({
  lang: 'ar',
  theme: 'dark',
  largeText: false,
  musicOn: true,
  sfxOn: true,
  // Auth
  loggedIn: false,
  username: 'Guest',
  piId: null,
  // Player
  piBalance: 500,
  totalMatches: 0,
  gamesPlayed: 0,
  gamesWon: 0,
  totalStars: 0,
  maxLevel: 1,
  currentLevel: 1,
  bestTime: 0,
  flagsCollected: [],
  levelStars: {},
  levelScores: {},
  achievements: [],
  transactions: [],
  // Daily
  lastDaily: null,
  dailyStreak: 0,
  // Misc
  winsNoHints: 0,
  gameMode: 'classic',
});

let S = defaultState();

function loadState() {
  try {
    const raw = localStorage.getItem('flagMosaicState');
    if (raw) S = { ...defaultState(), ...JSON.parse(raw) };
  } catch(e) { S = defaultState(); }
}
function saveState() {
  try { localStorage.setItem('flagMosaicState', JSON.stringify(S)); } catch(e) {}
}
loadState();

// ─────────────────────────────────────────────
// 7. I18N
// ─────────────────────────────────────────────
function t(key) { return (TRANSLATIONS[S.lang] || TRANSLATIONS.ar)[key] || key; }

function applyTranslations() {
  const dir = S.lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = S.lang;
  document.documentElement.dir  = dir;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (TRANSLATIONS[S.lang]?.[k]) el.textContent = TRANSLATIONS[S.lang][k];
  });
  // Update lang button active state
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === S.lang);
  });
}

// ─────────────────────────────────────────────
// 8. SCREEN NAVIGATION
// ─────────────────────────────────────────────
let currentScreen = 'splash';

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('screen-' + id);
  if (el) el.classList.add('active');
  currentScreen = id;
  
  // Bottom nav visibility
  const nav = document.getElementById('bottomNav');
  if (id === 'splash' || id === 'game') {
    nav.style.display = 'none';
  } else {
    nav.style.display = '';
  }
  
  // Update nav active
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.screen === id);
  });
  
  // Screen-specific refresh
  if (id === 'home') refreshHome();
  if (id === 'profile') refreshProfile();
  if (id === 'wallet') refreshWallet();
  if (id === 'leaderboard') renderLeaderboard();
  if (id === 'settings') refreshSettings();
}

// ─────────────────────────────────────────────
// 9. MOCK PI AUTH
// ─────────────────────────────────────────────
function connectPi() {
  showToast(t('connectingPi'), 'info');
  setTimeout(() => {
    const names = ['AlphaPlayer','CryptoExplorer','FlagMaster','PiChampion','WorldTraveler',
                   'StarSeeker','EagleEye','MosaicKing','PearlHunter','SunRider'];
    S.username = names[Math.floor(Math.random() * names.length)] + Math.floor(Math.random()*999);
    S.piId = 'PI-' + Math.random().toString(36).substr(2,8).toUpperCase();
    S.loggedIn = true;
    saveState();
    finishLogin();
  }, 1500);
}

function playGuest() {
  S.username = 'Guest';
  S.piId = null;
  S.loggedIn = false;
  saveState();
  finishLogin();
}

function finishLogin() {
  checkDailyReward();
  updateHeader();
  showScreen('home');
}

function logout() {
  S.loggedIn = false;
  S.username = 'Guest';
  S.piId = null;
  saveState();
  showScreen('splash');
}

function updateHeader() {
  document.getElementById('headerUsername').textContent = S.username;
  document.getElementById('headerPiId').textContent = S.piId ? 'π ' + S.piId : '—';
  document.getElementById('headerBalance').textContent = S.piBalance.toFixed(1);
}

// ─────────────────────────────────────────────
// 10. DAILY REWARD
// ─────────────────────────────────────────────
function checkDailyReward() {
  const today = new Date().toDateString();
  if (S.lastDaily !== today) {
    const banner = document.getElementById('dailyBanner');
    if (banner) banner.style.display = '';
  }
}

function claimDaily() {
  const today = new Date().toDateString();
  S.piBalance += 20;
  S.lastDaily = today;
  S.dailyStreak = (S.dailyStreak || 0) + 1;
  
  // Random new flag
  const uncollected = COUNTRIES.filter(c => !S.flagsCollected.includes(c.f));
  let newFlag = null;
  if (uncollected.length > 0) {
    newFlag = uncollected[Math.floor(Math.random() * uncollected.length)];
    S.flagsCollected.push(newFlag.f);
  }
  
  addTransaction('+20 π ' + t('dailyReward'), 20, 'earn');
  saveState();
  updateHeader();
  
  // Show daily modal
  if (newFlag) {
    document.getElementById('dailyNewFlag').textContent = newFlag.f + ' ' + newFlag.n;
  }
  document.getElementById('dailyBanner').style.display = 'none';
  document.getElementById('dailyModal').style.display = 'flex';
}

// ─────────────────────────────────────────────
// 11. HOME SCREEN
// ─────────────────────────────────────────────
function refreshHome() {
  updateHeader();
  document.getElementById('homeLevel').textContent = S.maxLevel;
  document.getElementById('homeStars').textContent = S.totalStars + ' ⭐';
  document.getElementById('homeFlags').textContent = S.flagsCollected.length + ' 🚩';
  checkDailyReward();
  renderLevelGrid();
}

function renderLevelGrid() {
  const grid = document.getElementById('levelGrid');
  grid.innerHTML = '';
  LEVELS.forEach(lv => {
    const div = document.createElement('div');
    div.className = 'level-item ' + (lv.id <= S.maxLevel ? (S.levelStars[lv.id] ? 'completed' : 'unlocked') : 'locked');
    if (lv.id > S.maxLevel) {
      div.innerHTML = `<span class="lock-icon">🔒</span><small>${lv.id}</small>`;
    } else {
      const stars = S.levelStars[lv.id] || 0;
      div.innerHTML = `<span>${lv.id}</span><span class="stars">${'⭐'.repeat(stars)}</span>`;
      div.addEventListener('click', () => startLevel(lv.id));
    }
    grid.appendChild(div);
  });
}

// ─────────────────────────────────────────────
// 12. GAME ENGINE
// ─────────────────────────────────────────────
let GAME = {
  tiles: [],       // tile objects
  selected: null,
  history: [],
  score: 0,
  startTime: 0,
  elapsed: 0,
  timerInterval: null,
  hintsUsed: 0,
  shufflesUsed: 0,
  undosUsed: 0,
  levelId: 1,
  paused: false,
  won: false,
  mode: 'classic',
};

function startLevel(levelId, mode) {
  GAME.levelId = levelId;
  GAME.mode = mode || S.gameMode;
  GAME.tiles = [];
  GAME.selected = null;
  GAME.history = [];
  GAME.score = 0;
  GAME.hintsUsed = 0;
  GAME.shufflesUsed = 0;
  GAME.undosUsed = 0;
  GAME.paused = false;
  GAME.won = false;
  
  const lv = LEVELS[levelId - 1];
  const layout = LAYOUTS[lv.layout] || LAYOUTS.pyramid;
  
  // Pick countries for this level
  const numPairs = Math.min(Math.floor(layout.length / 2), COUNTRIES.length, 72);
  const shuffled = [...COUNTRIES].sort(() => Math.random() - 0.5).slice(0, numPairs);
  
  // Create pairs
  let flagPool = [...shuffled, ...shuffled].sort(() => Math.random() - 0.5);
  
  // Assign to layout positions
  const usedSlots = layout.slice(0, flagPool.length * 1);
  GAME.tiles = usedSlots.map((slot, i) => ({
    ...slot,
    id: i,
    flag: flagPool[i] || COUNTRIES[i % COUNTRIES.length],
    removed: false,
    element: null,
  }));
  
  // Ensure solvability (simplified — shuffle until valid hint exists)
  ensureSolvable();
  
  showScreen('game');
  renderBoard();
  startTimer();
  
  document.getElementById('gameLevelLabel').textContent = 'L' + levelId;
  updateGameStats();
  playAudio('bg-zen', true);
}

function ensureSolvable() {
  // Quick check: make at least one free pair
  for (let attempt = 0; attempt < 5; attempt++) {
    if (findHint()) return;
    // Shuffle flags among free tiles
    const free = GAME.tiles.filter(t => !t.removed && isFree(t));
    const flags = free.map(t => t.flag);
    flags.sort(() => Math.random() - 0.5);
    free.forEach((t, i) => { t.flag = flags[i]; });
  }
}

function isFree(tile) {
  if (tile.removed) return false;
  
  // Check no tile above
  const hasAbove = GAME.tiles.some(t =>
    !t.removed &&
    t.layer === tile.layer + 1 &&
    Math.abs(t.col - tile.col) < 2 &&
    Math.abs(t.row - tile.row) < 2
  );
  if (hasAbove) return false;
  
  // Check one horizontal side is clear
  const blockedLeft = GAME.tiles.some(t =>
    !t.removed &&
    t.layer === tile.layer &&
    t.col === tile.col - 2 &&
    Math.abs(t.row - tile.row) < 2
  );
  const blockedRight = GAME.tiles.some(t =>
    !t.removed &&
    t.layer === tile.layer &&
    t.col === tile.col + 2 &&
    Math.abs(t.row - tile.row) < 2
  );
  
  return !blockedLeft || !blockedRight;
}

function findHint() {
  const free = GAME.tiles.filter(t => !t.removed && isFree(t));
  for (let i = 0; i < free.length; i++) {
    for (let j = i + 1; j < free.length; j++) {
      if (free[i].flag.f === free[j].flag.f) return [free[i], free[j]];
    }
  }
  return null;
}

// ─────────────────────────────────────────────
// 13. BOARD RENDERING
// ─────────────────────────────────────────────
const TILE_W = () => Math.min(Math.max(58, window.innerWidth * 0.085), 82);
const TILE_H = () => TILE_W() * 1.17;
const TILE_OFFSET = 4; // 3D offset px per layer

function renderBoard() {
  const board = document.getElementById('gameBoard');
  board.innerHTML = '';
  
  const tw = TILE_W(), th = TILE_H();
  
  if (GAME.tiles.length === 0) return;
  
  const maxCol = Math.max(...GAME.tiles.map(t => t.col));
  const maxRow = Math.max(...GAME.tiles.map(t => t.row));
  const maxLayer = Math.max(...GAME.tiles.map(t => t.layer));
  
  const boardW = (maxCol + 2) * (tw / 2) + maxLayer * TILE_OFFSET + tw;
  const boardH = (maxRow + 2) * (th / 2) + maxLayer * TILE_OFFSET + th;
  
  board.style.width  = boardW + 'px';
  board.style.height = boardH + 'px';
  
  // Sort by layer for z-index
  const sorted = [...GAME.tiles].sort((a,b) => a.layer - b.layer);
  
  sorted.forEach(tile => {
    if (tile.removed) return;
    
    const el = document.createElement('div');
    el.className = 'tile';
    el.dataset.id = tile.id;
    
    const x = tile.col * (tw / 2) + tile.layer * TILE_OFFSET;
    const y = tile.row * (th / 2) - tile.layer * TILE_OFFSET;
    
    el.style.left = x + 'px';
    el.style.top  = y + 'px';
    el.style.width  = tw + 'px';
    el.style.height = th + 'px';
    el.style.zIndex = tile.layer * 100 + tile.row;
    
    const free = isFree(tile);
    if (!free) el.classList.add('locked');
    
    el.innerHTML = `<div class="tile-inner">${tile.flag.f}</div>`;
    
    el.addEventListener('click', () => onTileClick(tile.id));
    
    tile.element = el;
    board.appendChild(el);
  });
  
  updateGameStats();
}

function onTileClick(tileId) {
  if (GAME.paused || GAME.won) return;
  const tile = GAME.tiles.find(t => t.id === tileId);
  if (!tile || tile.removed || !isFree(tile)) {
    playAudio('error');
    return;
  }
  
  playAudio('click');
  
  if (!GAME.selected) {
    GAME.selected = tile;
    tile.element?.classList.add('selected');
  } else if (GAME.selected.id === tile.id) {
    // Deselect
    GAME.selected.element?.classList.remove('selected');
    GAME.selected = null;
  } else if (GAME.selected.flag.f === tile.flag.f) {
    // MATCH!
    matchTiles(GAME.selected, tile);
  } else {
    // No match
    GAME.selected.element?.classList.remove('selected');
    playAudio('error');
    GAME.selected = tile;
    tile.element?.classList.add('selected');
  }
}

function matchTiles(a, b) {
  playAudio('match');
  
  // Save undo history
  GAME.history.push({ a: a.id, b: b.id, flags: [a.flag.f, b.flag.f] });
  
  // Score
  const baseScore = 100;
  const timeBonus = Math.max(0, 50 - Math.floor(GAME.elapsed / 10));
  GAME.score += baseScore + timeBonus;
  S.totalMatches++;
  
  // Flash animation
  a.element?.classList.add('matched-flash');
  b.element?.classList.add('matched-flash');
  
  // Add flag to collection
  const country = COUNTRIES.find(c => c.f === a.flag.f);
  const isNew = country && !S.flagsCollected.includes(a.flag.f);
  if (isNew) S.flagsCollected.push(a.flag.f);
  
  // Remove after animation
  setTimeout(() => {
    a.removed = b.removed = true;
    a.element?.classList.remove('selected', 'matched-flash');
    b.element?.classList.remove('selected', 'matched-flash');
    a.element?.classList.add('removing');
    b.element?.classList.add('removing');
    
    // Spawn sparkles
    if (a.element) spawnParticles(a.element);
    if (b.element) spawnParticles(b.element);
    
    setTimeout(() => {
      a.element?.remove();
      b.element?.remove();
      GAME.selected = null;
      
      // Update free states
      rerenderFreeTiles();
      updateGameStats();
      
      // Check win
      const remaining = GAME.tiles.filter(t => !t.removed);
      if (remaining.length === 0) {
        winLevel(isNew ? country : null);
      } else if (!findHint()) {
        // No moves — auto shuffle if possible
        showToast('🔀 ' + t('shuffled'), 'info');
        shuffleBoard(true);
      }
      
      saveState();
    }, 600);
  }, 100);
  
  GAME.selected = null;
}

function rerenderFreeTiles() {
  GAME.tiles.forEach(tile => {
    if (tile.removed || !tile.element) return;
    const free = isFree(tile);
    tile.element.classList.toggle('locked', !free);
  });
}

function updateGameStats() {
  document.getElementById('gameScore').textContent = GAME.score;
  const rem = GAME.tiles.filter(t => !t.removed).length;
  document.getElementById('gameTilesLeft').textContent = rem + ' 🀄';
}

// ─────────────────────────────────────────────
// 14. TIMER
// ─────────────────────────────────────────────
function startTimer() {
  GAME.startTime = Date.now();
  GAME.elapsed = 0;
  clearInterval(GAME.timerInterval);
  GAME.timerInterval = setInterval(() => {
    if (!GAME.paused && !GAME.won) {
      GAME.elapsed = Math.floor((Date.now() - GAME.startTime) / 1000);
      const m = Math.floor(GAME.elapsed / 60);
      const s = GAME.elapsed % 60;
      document.getElementById('gameTimer').textContent = m + ':' + String(s).padStart(2,'0');
      
      // Timed mode check
      if (GAME.mode === 'timed') {
        const lv = LEVELS[GAME.levelId - 1];
        if (lv.timeLimit > 0 && GAME.elapsed >= lv.timeLimit) {
          endGame(false);
        }
      }
    }
  }, 1000);
}

function stopTimer() { clearInterval(GAME.timerInterval); }

// ─────────────────────────────────────────────
// 15. WIN / LOSE
// ─────────────────────────────────────────────
function winLevel(discoveredCountry) {
  GAME.won = true;
  stopTimer();
  playAudio('win');
  
  const lv = LEVELS[GAME.levelId - 1];
  const stars = calcStars(lv, GAME.score, GAME.elapsed);
  const piEarned = lv.piReward;
  
  // Update state
  S.piBalance += piEarned;
  S.gamesPlayed++;
  S.gamesWon++;
  if (GAME.hintsUsed === 0) S.winsNoHints++;
  const prevStars = S.levelStars[GAME.levelId] || 0;
  S.levelStars[GAME.levelId] = Math.max(prevStars, stars);
  if (stars > prevStars) S.totalStars += (stars - prevStars);
  S.maxLevel = Math.max(S.maxLevel, GAME.levelId + 1);
  if (!S.bestTime || GAME.elapsed < S.bestTime) S.bestTime = GAME.elapsed;
  
  addTransaction(`+${piEarned}π Level ${GAME.levelId}`, piEarned, 'earn');
  checkAchievements();
  saveState();
  
  // Win modal
  const starsStr = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
  document.getElementById('winStars').textContent = starsStr;
  document.getElementById('wScore').textContent = GAME.score;
  const m = Math.floor(GAME.elapsed/60), s = GAME.elapsed%60;
  document.getElementById('wTime').textContent = m + ':' + String(s).padStart(2,'0');
  document.getElementById('wPi').textContent = '+' + piEarned + ' π';
  document.getElementById('winModal').style.display = 'flex';
  
  // Discovery modal (after win modal)
  if (discoveredCountry) {
    setTimeout(() => showDiscovery(discoveredCountry), 2200);
  }
}

function endGame(won) {
  if (!won) {
    stopTimer();
    showToast('⏰ Time up!', 'error');
    S.gamesPlayed++;
    saveState();
    setTimeout(() => showScreen('home'), 2000);
  }
}

function calcStars(lv, score, time) {
  if (score >= lv.starThresholds[2]) return 3;
  if (score >= lv.starThresholds[1]) return 2;
  if (score >= lv.starThresholds[0]) return 1;
  return 1; // minimum 1 star for completion
}

// ─────────────────────────────────────────────
// 16. CONTROLS (Hint, Shuffle, Undo)
// ─────────────────────────────────────────────
function useHint() {
  if (S.piBalance < 5) { showToast(t('notEnoughPi'), 'error'); return; }
  const pair = findHint();
  if (!pair) { showToast(t('noHints'), 'info'); return; }
  
  S.piBalance -= 5;
  addTransaction('-5π ' + t('hint'), -5, 'spend');
  GAME.hintsUsed++;
  saveState();
  updateHeader();
  
  // Highlight pair
  pair.forEach(tile => {
    tile.element?.classList.add('hint');
    setTimeout(() => tile.element?.classList.remove('hint'), 2000);
  });
}

function shuffleBoard(free = false) {
  if (!free) {
    if (S.piBalance < 10) { showToast(t('notEnoughPi'), 'error'); return; }
    S.piBalance -= 10;
    addTransaction('-10π ' + t('shuffle'), -10, 'spend');
    GAME.shufflesUsed++;
    saveState();
    updateHeader();
  }
  
  // Collect all active tile flags and reshuffle among positions
  const active = GAME.tiles.filter(t => !t.removed);
  const flags = active.map(t => t.flag);
  flags.sort(() => Math.random() - 0.5);
  active.forEach((t, i) => {
    t.flag = flags[i];
    if (t.element) t.element.querySelector('.tile-inner').textContent = flags[i].f;
  });
  
  if (!free) showToast('🔀 ' + t('shuffled'), 'success');
}

function undoMove() {
  if (GAME.history.length === 0) { showToast(t('noMoves'), 'info'); return; }
  if (S.piBalance < 3) { showToast(t('notEnoughPi'), 'error'); return; }
  
  S.piBalance -= 3;
  addTransaction('-3π ' + t('undo'), -3, 'spend');
  GAME.undosUsed++;
  saveState();
  updateHeader();
  
  const last = GAME.history.pop();
  const tileA = GAME.tiles.find(t => t.id === last.a);
  const tileB = GAME.tiles.find(t => t.id === last.b);
  
  if (tileA) tileA.removed = false;
  if (tileB) tileB.removed = false;
  
  // Re-render board
  renderBoard();
  showToast('↩ ' + t('undone'), 'success');
}

// ─────────────────────────────────────────────
// 17. DISCOVERY MODAL
// ─────────────────────────────────────────────
function showDiscovery(country) {
  document.getElementById('discFlag').textContent = country.f;
  document.getElementById('discName').textContent = country.n;
  document.getElementById('discCapital').textContent = country.c;
  document.getElementById('discContinent').textContent = country.ct;
  document.getElementById('discFact').textContent = country.fact;
  document.getElementById('discModal').style.display = 'flex';
}

// ─────────────────────────────────────────────
// 18. PROFILE
// ─────────────────────────────────────────────
function refreshProfile() {
  document.getElementById('profUsername').textContent = S.username;
  document.getElementById('profPiId').textContent = S.piId || '—';
  document.getElementById('psGames').textContent = S.gamesPlayed;
  document.getElementById('psMatches').textContent = S.totalMatches;
  document.getElementById('psStars').textContent = S.totalStars;
  document.getElementById('psFlags').textContent = S.flagsCollected.length;
  
  // XP bar
  const xp = S.totalMatches * 10 + S.gamesWon * 50;
  const lvl = Math.floor(xp / 1000) + 1;
  const progress = (xp % 1000) / 10;
  document.getElementById('xpBar').style.width = progress + '%';
  document.getElementById('xpLabel').textContent = `Lv ${lvl} • ${xp} XP`;
  
  renderAchievements();
  renderFlagCollection();
}

function renderAchievements() {
  const grid = document.getElementById('achievementsGrid');
  grid.innerHTML = '';
  ACHIEVEMENTS.forEach(a => {
    const unlocked = a.cond(S);
    const div = document.createElement('div');
    div.className = 'ach-item' + (unlocked ? '' : ' locked');
    const name = a.name[S.lang] || a.name.en;
    div.innerHTML = `<span class="ach-icon">${a.icon}</span><span class="ach-name">${name}</span>`;
    grid.appendChild(div);
  });
}

function renderFlagCollection() {
  const col = document.getElementById('flagCollection');
  col.innerHTML = '';
  COUNTRIES.forEach(country => {
    const div = document.createElement('div');
    const has = S.flagsCollected.includes(country.f);
    div.className = 'fc-item' + (has ? '' : ' locked');
    div.innerHTML = `<span class="fc-flag">${has ? country.f : '🏳'}</span><small>${has ? country.n : '???'}</small>`;
    if (has) div.title = country.n + ' — ' + country.c;
    col.appendChild(div);
  });
}

// ─────────────────────────────────────────────
// 19. WALLET
// ─────────────────────────────────────────────
function refreshWallet() {
  document.getElementById('walletBalance').textContent = S.piBalance.toFixed(1);
  renderTransactions();
}

function addTransaction(desc, amount, type) {
  S.transactions.unshift({
    desc, amount, type,
    time: new Date().toLocaleTimeString()
  });
  if (S.transactions.length > 50) S.transactions.pop();
}

function renderTransactions() {
  const list = document.getElementById('txList');
  list.innerHTML = '';
  if (S.transactions.length === 0) {
    list.innerHTML = '<p style="color:var(--text3);text-align:center;padding:20px">—</p>';
    return;
  }
  S.transactions.forEach(tx => {
    const div = document.createElement('div');
    div.className = 'tx-item';
    div.innerHTML = `
      <div>
        <div class="tx-desc">${tx.desc}</div>
        <div class="tx-time">${tx.time}</div>
      </div>
      <span class="tx-amt ${tx.type}">${tx.amount > 0 ? '+' : ''}${tx.amount}π</span>
    `;
    list.appendChild(div);
  });
}

function buyItem(item, cost) {
  if (S.piBalance < cost) { showToast(t('notEnoughPi'), 'error'); return; }
  S.piBalance -= cost;
  addTransaction(`-${cost}π Shop: ${item}`, -cost, 'spend');
  saveState();
  refreshWallet();
  updateHeader();
  showToast('✅ Bought: ' + item, 'success');
}

// ─────────────────────────────────────────────
// 20. LEADERBOARD
// ─────────────────────────────────────────────
function renderLeaderboard() {
  const players = [
    {name:'FlagMaster99', score:98500, flags:150, rank:1},
    {name:'PiChampion', score:87200, flags:142, rank:2},
    {name:'WorldTraveler', score:76400, flags:138, rank:3},
    {name:'StarSeeker88', score:65100, flags:125, rank:4},
    {name:'EagleEye', score:54800, flags:118, rank:5},
    {name:'SunRider', score:43200, flags:110, rank:6},
    {name:'PearlHunter', score:38900, flags:105, rank:7},
    {name:'CryptoExplorer', score:29700, flags:99, rank:8},
    {name:'MosaicKing', score:18400, flags:88, rank:9},
    {name:'AlphaPlayer', score:9800, flags:72, rank:10},
  ];
  
  // Insert current player
  if (S.gamesPlayed > 0) {
    players.push({
      name: S.username, 
      score: S.totalMatches * 100 + S.totalStars * 200, 
      flags: S.flagsCollected.length, 
      rank: 11, 
      isMe: true
    });
  }
  
  const body = document.getElementById('lbBody');
  body.innerHTML = '';
  
  players.sort((a,b) => b.score - a.score).slice(0, 11).forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'lb-item' + (p.isMe ? ' me' : '');
    const rankClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
    const rankIcon = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '#' + (i+1);
    div.innerHTML = `
      <span class="lb-rank ${rankClass}">${rankIcon}</span>
      <span class="lb-avatar">🌍</span>
      <div class="lb-info">
        <div class="lb-name">${p.name}${p.isMe ? ' 👈' : ''}</div>
        <div class="lb-sub">🚩 ${p.flags} flags</div>
      </div>
      <span class="lb-score">${p.score.toLocaleString()}</span>
    `;
    body.appendChild(div);
  });
}

// ─────────────────────────────────────────────
// 21. SETTINGS
// ─────────────────────────────────────────────
function refreshSettings() {
  document.getElementById('togMusic').checked = S.musicOn;
  document.getElementById('togSfx').checked = S.sfxOn;
  document.getElementById('togDark').checked = S.theme === 'dark';
  document.getElementById('togLarge').checked = S.largeText;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === S.lang));
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', S.theme);
  document.body.classList.toggle('large-text', S.largeText);
}

// ─────────────────────────────────────────────
// 22. ACHIEVEMENTS CHECK
// ─────────────────────────────────────────────
function checkAchievements() {
  ACHIEVEMENTS.forEach(a => {
    if (!S.achievements.includes(a.id) && a.cond(S)) {
      S.achievements.push(a.id);
      const name = a.name[S.lang] || a.name.en;
      showToast('🏆 ' + name + '!', 'success');
    }
  });
}

// ─────────────────────────────────────────────
// 23. AUDIO (Web Audio API)
// ─────────────────────────────────────────────
let audioCtx = null;
let bgSource = null;
const audioBuffers = {};

async function initAudio() {
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const files = ['click','match','error','win','bg-zen'];
    await Promise.all(files.map(async name => {
      try {
        const resp = await fetch(`assets/audio/${name}.mp3`);
        const data = await resp.arrayBuffer();
        audioBuffers[name] = await audioCtx.decodeAudioData(data);
      } catch(e) { /* silent fail */ }
    }));
  } catch(e) {}
}

function playAudio(name, loop = false) {
  if (!audioCtx) return;
  if (name === 'bg-zen' && !S.musicOn) return;
  if (name !== 'bg-zen' && !S.sfxOn) return;
  
  try {
    if (name === 'bg-zen') {
      if (bgSource) { try { bgSource.stop(); } catch(e) {} }
      if (!audioBuffers['bg-zen']) return;
      bgSource = audioCtx.createBufferSource();
      bgSource.buffer = audioBuffers['bg-zen'];
      bgSource.loop = true;
      const gain = audioCtx.createGain();
      gain.gain.value = 0.25;
      bgSource.connect(gain).connect(audioCtx.destination);
      bgSource.start();
      return;
    }
    if (!audioBuffers[name]) return;
    const src = audioCtx.createBufferSource();
    src.buffer = audioBuffers[name];
    const gain = audioCtx.createGain();
    gain.gain.value = 0.7;
    src.connect(gain).connect(audioCtx.destination);
    src.start();
  } catch(e) {}
}

function stopBgMusic() {
  try { if (bgSource) bgSource.stop(); } catch(e) {}
  bgSource = null;
}

// ─────────────────────────────────────────────
// 24. PARTICLE EFFECTS
// ─────────────────────────────────────────────
const canvas = document.getElementById('particleCanvas');
const ctx2d = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function spawnParticles(el) {
  const rect = el.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const count = 28;
  
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 + Math.random() * 0.5;
    const speed = 2 + Math.random() * 4;
    const colors = ['#ffd700','#ff6b6b','#00e676','#00c9ff','#ff9800','#e040fb'];
    particles.push({
      x: cx, y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 2,
      life: 1.0,
      decay: 0.02 + Math.random() * 0.02,
      size: 4 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: Math.random() > 0.5 ? 'circle' : 'star',
    });
  }
}

function drawStar(ctx, x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const a1 = (i * 4 * Math.PI) / 5 - Math.PI / 2;
    const a2 = ((i * 4 + 2) * Math.PI) / 5 - Math.PI / 2;
    if (i === 0) ctx.moveTo(x + r * Math.cos(a1), y + r * Math.sin(a1));
    else ctx.lineTo(x + r * Math.cos(a1), y + r * Math.sin(a1));
    ctx.lineTo(x + (r/2) * Math.cos(a2), y + (r/2) * Math.sin(a2));
  }
  ctx.closePath();
  ctx.fill();
}

function animateParticles() {
  ctx2d.clearRect(0, 0, canvas.width, canvas.height);
  
  particles = particles.filter(p => p.life > 0);
  
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.15; // gravity
    p.life -= p.decay;
    
    ctx2d.globalAlpha = p.life;
    if (p.shape === 'star') {
      drawStar(ctx2d, p.x, p.y, p.size, p.color);
    } else {
      ctx2d.fillStyle = p.color;
      ctx2d.beginPath();
      ctx2d.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx2d.fill();
    }
  });
  ctx2d.globalAlpha = 1;
  
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ─────────────────────────────────────────────
// 25. TOAST
// ─────────────────────────────────────────────
function showToast(msg, type = '') {
  const old = document.querySelector('.toast');
  if (old) old.remove();
  
  const el = document.createElement('div');
  el.className = 'toast ' + type;
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

// ─────────────────────────────────────────────
// 26. SPLASH FLAGS ANIMATION
// ─────────────────────────────────────────────
function renderSplashFlags() {
  const row = document.getElementById('splashFlags');
  const sample = COUNTRIES.sort(() => Math.random() - 0.5).slice(0, 20);
  row.innerHTML = sample.map((c, i) =>
    `<span class="splash-flag-item" style="animation-delay:${i*0.1}s">${c.f}</span>`
  ).join('');
}

// ─────────────────────────────────────────────
// 27. EVENT LISTENERS
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  applyTheme();
  renderSplashFlags();
  
  // Init audio on first user interaction
  document.addEventListener('click', function initAudioOnce() {
    initAudio();
    document.removeEventListener('click', initAudioOnce);
  }, { once: true });
  
  // ── Splash ──
  document.getElementById('btnConnectPi').addEventListener('click', connectPi);
  document.getElementById('btnGuest').addEventListener('click', playGuest);
  
  // If already logged in, skip splash
  if (S.loggedIn || S.gamesPlayed > 0) {
    updateHeader();
    showScreen('home');
  }
  
  // ── Nav ──
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentScreen === 'game') {
        GAME.paused = true;
        stopTimer();
      }
      showScreen(btn.dataset.screen);
    });
  });
  
  // ── Home ──
  document.getElementById('btnPlayHome').addEventListener('click', () => {
    startLevel(S.currentLevel || 1);
  });
  
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      S.gameMode = btn.dataset.mode;
      saveState();
    });
  });
  
  document.getElementById('btnClaimDaily').addEventListener('click', claimDaily);
  
  // ── Game controls ──
  document.getElementById('btnHint').addEventListener('click', useHint);
  document.getElementById('btnShuffle').addEventListener('click', () => shuffleBoard(false));
  document.getElementById('btnUndo').addEventListener('click', undoMove);
  
  document.getElementById('btnPause').addEventListener('click', () => {
    GAME.paused = true;
    stopTimer();
    document.getElementById('pauseModal').style.display = 'flex';
  });
  
  document.getElementById('btnHome').addEventListener('click', () => {
    if (confirm('Quit game?')) {
      stopTimer();
      stopBgMusic();
      showScreen('home');
    }
  });
  
  document.getElementById('btnResume').addEventListener('click', () => {
    document.getElementById('pauseModal').style.display = 'none';
    GAME.paused = false;
    GAME.startTime = Date.now() - GAME.elapsed * 1000;
    startTimer();
  });
  
  document.getElementById('btnPauseHome').addEventListener('click', () => {
    document.getElementById('pauseModal').style.display = 'none';
    stopTimer();
    stopBgMusic();
    showScreen('home');
  });
  
  // ── Win modal ──
  document.getElementById('btnNextLevel').addEventListener('click', () => {
    document.getElementById('winModal').style.display = 'none';
    const next = GAME.levelId + 1;
    if (next <= LEVELS.length) {
      S.currentLevel = next;
      saveState();
      startLevel(next);
    } else {
      showScreen('home');
    }
  });
  
  document.getElementById('btnWinHome').addEventListener('click', () => {
    document.getElementById('winModal').style.display = 'none';
    stopBgMusic();
    showScreen('home');
  });
  
  // ── Discovery ──
  document.getElementById('btnDiscClose').addEventListener('click', () => {
    document.getElementById('discModal').style.display = 'none';
  });
  
  // ── Daily reward ──
  document.getElementById('btnDailyClose').addEventListener('click', () => {
    document.getElementById('dailyModal').style.display = 'none';
  });
  
  // ── Settings ──
  document.getElementById('togMusic').addEventListener('change', e => {
    S.musicOn = e.target.checked;
    if (!S.musicOn) stopBgMusic();
    saveState();
  });
  document.getElementById('togSfx').addEventListener('change', e => {
    S.sfxOn = e.target.checked;
    saveState();
  });
  document.getElementById('togDark').addEventListener('change', e => {
    S.theme = e.target.checked ? 'dark' : 'light';
    applyTheme();
    saveState();
  });
  document.getElementById('togLarge').addEventListener('change', e => {
    S.largeText = e.target.checked;
    applyTheme();
    saveState();
  });
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      S.lang = btn.dataset.lang;
      document.documentElement.lang = S.lang;
      document.documentElement.dir = S.lang === 'ar' ? 'rtl' : 'ltr';
      applyTranslations();
      saveState();
      refreshSettings();
    });
  });
  
  document.getElementById('btnLogout').addEventListener('click', () => {
    if (confirm(t('logout') + '?')) logout();
  });
  
  document.getElementById('btnReset').addEventListener('click', () => {
    if (confirm('Reset all progress?')) {
      const lang = S.lang, theme = S.theme;
      S = defaultState();
      S.lang = lang; S.theme = theme;
      saveState();
      applyTheme();
      applyTranslations();
      showScreen('splash');
      showToast('Progress reset', 'info');
    }
  });
  
  // ── Wallet / Shop ──
  document.querySelectorAll('.btn-buy').forEach(btn => {
    btn.addEventListener('click', () => {
      buyItem(btn.dataset.item, parseInt(btn.dataset.cost));
    });
  });
  
  // ── Handle resize ──
  window.addEventListener('resize', () => {
    resizeCanvas();
    if (currentScreen === 'game' && GAME.tiles.length > 0) {
      renderBoard();
    }
  });
  
  // Initial screen
  if (!S.loggedIn && S.gamesPlayed === 0) {
    showScreen('splash');
  } else {
    updateHeader();
    showScreen('home');
  }
});
