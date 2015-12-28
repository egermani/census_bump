
var years = ["1890","1880","1870","1860", "1850", "1840", "1830", "1820", "1810", "1800", "1790"];
var censuses = ["A Game of Thrones", "A Clash of Kings", "A Storm of Swords", "A Feast for Crows", "A Dance with Dragons", "6th census.", "5th census.", "4th census.", "3rd census.", "2nd census.", "1st census."];

var sideEnds = {
  "1790":0,
  "1800":13,
  "1810":22,
  "1820":29,
  "1830":41,
  "1840":49
};

var heraldryPalettes = {
  "houseStark": ["#F3F3F3", "#9C9C9C"],
  "houseLannister": ["#8B1919", "#FED600"],
  "houseBaratheon": ["#FFD71A", "#313131"],
  "nightsWatch": ["#040404", "#0B0B0B"],
  "houseBaelish": ["#339900", "#B5B5B5"],
  "houseTargaryen": ["#181717", "#D1381B"],
  "houseMormont": ["#65BD65", "#3C893C"],
  "houseFrey": ["#BDBDBD", "#2044E9"],
  "houseTully": ["#184C84", "#7F0000"],
  "houseArryn": ["#5D91EB", "#FFFFFF"],
  "houseCassel": ["#7D7D7D", "#2E2E2E"],
  "houseClegane": ["#FCFF00", "#2C2C2C"],
  "stokeworth": ["#009900", "#FFFFFF"],
  "kingsguard": ["#E7D281", "#F5F5F5"],
  "houseGreyjoy": ["#7F7F7F", "#FC9108"],
  "tarly": ["#009900", "#E34334"],
  "bolton": ["#FF93CA", "#E44434"],
  "houseTyrell": ["#006600", "#FED700"],
  "dondarrion": ["#2E2E2E", "#FCFCFC"],
  "houseLannister": ["#8B1919", "#FED600"],
  "housePayne": ["#FFD71A", "#A601A6"],
  "seaworth": ["#000000", "#C8C8C8"],
  "houseHollard": ["#E24334", "#1F43EB"],
  "houseTarth": ["#0000FF", "#FF007F"],
  "houseReed": ["#BFCBBD", "#2B2B2B"],
  "bywater": ["#1F43EB", "#FFFFFF"],
  "fieryheart": ["#8B0000", "#D4AF37"],
  "houseManderly": ["#019DAA", "#03490A"],
  "houseMartell": ["#FC7C11", "#AB011B"],
  "stormcrows": ["#D2B48C", "#FECD50"],
  "meereen": ["#EAEAEA", "#F4F4F4"],
  "houseConnington": ["#FFFFFF", "#E24334"],
  "houseRyswell": ["#0A0909", "#FF5800"],
  "windswept": ["#6305D7", "#FFFFFF"],
  "secondSons": ["#E3E4E5", "#B1B0B1"],
  "borell": ["#BFCBBD", "#FEFEFE"],
  "houseKarstark": ["#0B0B0B", "#121212"],
  "goldenCompany": ["#0C0C0C", "#FED700"],
  "faithstar": ["#FB00DD", "#22FFF4", "#00FF00"],
  "houseHarlaw": ["#0C0C0C", "#010101"],
  "hunt": ["#FFFFFF", "#A35C34"],
  "houseRoyceOfTheGatesOfTheMoon": ["#A700A7", "#D5613C"],
  "houseVelaryon": ["#00CCCC", "#FEFEFE"],
  "creightonLongbough": ["#006600", "#663300"],
  "unknown": ["#69543E", "#5C4B3D"],
  "stannis": ["#740001", "#D1B41D"],
  "lem": ["#FAE41B"],
};

var chart = function() {

  var pillTypes = [
    {func:oneColor, opts: {colors: heraldryPalettes["houseStark"]}, id:"ned_stark", name:"Ned Stark"},
    {func:doubleStripe, opts: {colors: heraldryPalettes["houseLannister"], width:0.15, dist:0.2}, id:"tyrion_lannister", name:"Tyrion Lannister"},
    {func:twoColor, opts: {colors: heraldryPalettes["houseStark"]}, id:"catelyn_stark", name:"Catelyn Stark"},
    {func:twoColor, opts: {colors: heraldryPalettes["houseBaratheon"]}, id:"robert_baratheon", name:"Robert Baratheon"},
    {func:twoColorVert, opts: {colors: heraldryPalettes["nightsWatch"]}, id:"jon_snow", name:"Jon Snow"},
    {func:littleSquares, opts: {colors: heraldryPalettes["houseBaelish"]}, id:"littlefinger", name:"Littlefinger"},
    {func:oneColor, opts: {colors: heraldryPalettes["nightsWatch"]}, id:"jeor_mormont", name:"Jeor Mormont"},
    {func:twoColorDiag, opts: {colors: heraldryPalettes["unknown"]}, id:"varys", name:"Varys"},
    {func:oneColor, opts: {colors: heraldryPalettes["houseStark"]}, id:"robb", name:"Robb"},
    {func:midStripe, opts: {colors: heraldryPalettes["houseTargaryen"], width:0.65}, id:"dany_targaryen", name:"Daenerys"},
    {func:midStripe, opts: {colors: heraldryPalettes["houseMormont"], width:0.3}, id:"jorah_mormont", name:"Jorah Mormont"},
    {func:twoColor, opts: {colors: heraldryPalettes["houseLannister"]}, id:"cersei_lannister", name:"Cersei Lannister"},
    {func:oneColor, opts: {colors: heraldryPalettes["houseStark"]}, id:"sansa_stark", name:"Sansa Stark"},
    {func:littleSquares, opts: {colors: heraldryPalettes["unknown"]}, id:"grand_maester_pycelle", name:"Pycelle"},
    {func:oneColor, opts: {colors: heraldryPalettes["houseStark"]}, id:"maester_luwin", name:"Maester Luwin"},
    {func:longStripe, opts: {colors: heraldryPalettes["houseStark"], width:0.6, edge:false}, id:"arya_stark", name:"Arya Stark"},
    {func:bigTri, opts: {colors: heraldryPalettes["houseStark"]}, id:"bran_stark", name:"Bran Stark"},
    {func:twoColorVert, opts: {colors: heraldryPalettes["houseLannister"]}, id:"tywin_lannister", name:"Tywin Lannister"},
    {func:midFlag, opts: {colors: heraldryPalettes["houseLannister"], width:0.25, skew:6}, id:"joffrey_lannister", name:"Joffrey Lannister"},
    {func:twoColor, opts: {colors: heraldryPalettes["houseTargaryen"]}, id:"viserys", name:"Viserys"},
    {func:twoColorVert, opts: {colors: heraldryPalettes["houseFrey"]}, id:"walder_frey", name:"Walder Frey"},
    {func:bigTriInverted, opts: {colors: heraldryPalettes["houseTully"]}, id:"brynden_tully", name:"Brynden Tully"},
    {func:twoColor, opts: {colors: heraldryPalettes["nightsWatch"]}, id:"sam", name:"Sam"},
    {func:twoColorVert, opts: {colors: heraldryPalettes["nightsWatch"]}, id:"aemon_targaryen", name:"Aemon Targaryen"},
    {func:oneColor, opts: {colors: heraldryPalettes["unknown"]}, id:"mirri_maz_duur", name:"Mirri Maz Duur"},
    {func:oneColor, opts: {colors: heraldryPalettes["houseArryn"]}, id:"lysa_arryn", name:"Lysa Arryn"},
    {func:twoColorDiag, opts: {colors: heraldryPalettes["houseCassel"]}, id:"rodrik_cassel", name:"Rodrik Cassel"},
    {func:doubleStripe, opts: {colors: heraldryPalettes["unknown"], width:0.08, dist:0.08}, id:"syrio_forel", name:"Syrio Forel"},
    {func:bigTriInverted, opts: {colors: heraldryPalettes["unknown"]}, id:"osha", name:"Osha"},
    {func:twoColorVert, opts: {colors: heraldryPalettes["houseClegane"]}, id:"sandor_clegane", name:"Sandor Clegane"},
    {func:twoHooks, opts: {colors: heraldryPalettes["stokeworth"], width:0.1}, id:"bronn", name:"Bronn"},
    {func:midStripe, opts: {colors: heraldryPalettes["kingsguard"], width:0.8}, id:"barristan_selmy", name:"Barristan Selmy"},
    {func:midStripe, opts: {colors: heraldryPalettes["houseLannister"], width:0.2, offset:8}, id:"jaime_lannister", name:"Jaime Lannister"},
    {func:candyStripe, opts: {colors: heraldryPalettes["houseBaratheon"]}, id:"renly_baratheon", name:"Renly Baratheon"},
    {func:oneColor, opts: {colors: heraldryPalettes["unknown"]}, id:"illyrio", name:"Illyrio"},
    {func:doubleStripe, opts: {colors: heraldryPalettes["houseGreyjoy"], width:0.15, dist:0.0}, id:"theon_greyioy", name:"Theon Greyioy"},
    {func:midStripe, opts: {colors: heraldryPalettes["unknown"], width:0.3} , id:"khal_drogo", name:"Khal Drogo"},
    {func:midFlag, opts: {colors: heraldryPalettes["nightsWatch"], width:0.27, skew:6}, id:"alliser_thorne", name:"Alliser Thorne"},
    {func:doubleFlag, opts: {colors: heraldryPalettes["nightsWatch"], width:0.08, dist:0.3}, id:"donal_noye", name:"Donal Noye"},
    {func:twoColorVert, opts: {colors: heraldryPalettes["houseStark"]}, id:"old_nan", name:"Old Nan"},
    {func:oneColor, opts: {colors: heraldryPalettes["unknown"]}, id:"a_messenger", name:"A Messenger"},
    {func:doubleStripe, opts: {colors: heraldryPalettes["unknown"], width:0.15, dist:-0.07}, id:"tobho_mott", name:"Tobho Mott"},
    {func:oneColor, opts: {colors: heraldryPalettes["houseStark"]}, id:"septa_mordane", name:"Septa Mordane"},
    {func:midFlag, opts: {colors: heraldryPalettes["houseLannister"], width:0.45, skew:-6}, id:"kevan_lannister", name:"Kevan Lannister"},
    {func:candyStripe, opts: {colors: heraldryPalettes["nightsWatch"], width:0.20, dist:0.2}, id:"yoren", name:"Yoren"}, //TODO
    {func:twoColor, opts: {colors: heraldryPalettes["unknown"]}, id:"mya_stone", name:"Mya Stone"},
    {func:oneColor, opts: {colors: heraldryPalettes["houseStark"]}, id:"benjen_stark", name:"Benjen Stark"},
    {func:twoColorDiag, opts: {colors: heraldryPalettes["nightsWatch"]}, id:"pyp", name:"Pyp"},
    {func:midStripe, opts: {colors: heraldryPalettes["houseTully"], width:0.18, offset:0}, id:"hoster_tully", name:"Hoster Tully"},
    {func:midFlag, opts: {colors: heraldryPalettes["nightsWatch"], width:0.24, skew:6}, id:"waymar_royce", name:"Waymar Royce"},
    {func:twoColorDiagRev, opts: {colors: heraldryPalettes["nightsWatch"]}, id:"grenn", name:"Grenn"},
    {func:oneColor, opts: {colors: heraldryPalettes["nightsWatch"]}, id:"bowen_marsh", name:"Bowen Marsh"},
    {func:midStripe, opts: {colors: heraldryPalettes["nightsWatch"], width:0.5, offset:0}, id:"janos_slynt", name:"Janos Slynt"},
    {func:bigTri, opts: {colors: heraldryPalettes["tarly"]}, id:"randyll_tarly", name:"Randyll Tarly"},
    {func:twoHooks, opts: {colors: heraldryPalettes["unknown"], width:0.26}, id:"shae", name:"Shae"},
    {func:twoHooks, opts: {colors: heraldryPalettes["houseTully"], width:0.15}, id:"edmure_tully", name:"Edmure Tully"},
    {func:twoColorVert, opts: {colors: heraldryPalettes["houseArryn"]}, id:"robert_arryn", name:"Robert Arryn"},
    {func:midStripe, opts: {colors: heraldryPalettes["unknown"], width:0.8, offset:0}, id:"gendry", name:"Gendry"},
    {func:midStripe, opts: {colors: heraldryPalettes["nightsWatch"], width:0.5, offset:0}, id:"dareon", name:"Dareon"},
    {func:bigTri, opts: {colors: heraldryPalettes["bolton"]}, id:"roose_bolton", name:"Roose Bolton"},
    {func:bigX, opts: {colors: heraldryPalettes["houseTyrell"], width:1.0}, id:"loras_tyrell", name:"Loras Tyrell"},
    {func:bigX, opts: {colors: heraldryPalettes["nightsWatch"], width:1.0}, id:"jonos_bracken", name:"Jonos Bracken"},
    {func:theTeeth, opts: {colors: heraldryPalettes["dondarrion"], width:1.0}, id:"beric_dondarrion", name:"Beric Dondarrion"},
    {func:theTeeth, opts: {colors: heraldryPalettes["unknown"], width:1.0}, id:"harwin", name:"Harwin"},
    {func:bigX, opts: {colors: heraldryPalettes["houseLannister"], width:1.0}, id:"tommen", name:"Tommen"},
    {func:theTeeth, opts: {colors: heraldryPalettes["housePayne"], width:1.0}, id:"podrick_payne", name:"Podrick Payne"},
    {func:midStripe, opts: {colors: heraldryPalettes["stannis"], width:0.6} , id:"stannis_baratheon", name:"Stannis"},
    {func:twoColorVert, opts: {colors: heraldryPalettes["nightsWatch"], skew:12}, id:"qhorin_halfhand", name:"Qhorin Halfhand"},
    {func:twoColorVert, opts: {colors: heraldryPalettes["houseGreyjoy"]} , id:"asha_greyjoy", name:"Asha Greyjoy"},
    {func:midStripe, opts: {colors: heraldryPalettes["seaworth"], width:0.5, offset:0}, id:"davos_seaworth", name:"Davos"},
    {func:twoColorDiag, opts: {colors: heraldryPalettes["houseHollard"]}, id:"dontos", name:"Dontos"},
    {func:twoColorDiag, opts: {colors: heraldryPalettes["unknown"]} , id:"xaro_xhoan_daxos", name:"Xaro Xhoan Daxos"},
    {func:twoColor, opts: {colors: heraldryPalettes["unknown"]}, id:"salladhor_saan", name:"Salladhor Saan"},
    {func:bigX, opts: {colors: heraldryPalettes["unknown"], width:0.4}, id:"ygritte", name:"Ygritte"},
    {func:midFlag, opts: {colors: heraldryPalettes["houseTarth"], width:0.45, skew:-6}, id:"brienne", name:"Brienne"},
    {func:twoHooks, opts: {colors: heraldryPalettes["unknown"], width:0.25}, id:"hallyne", name:"Hallyne"},
    {func:longStripe, opts: {colors: heraldryPalettes["unknown"], width:0.2, edge:true}, id:"maester_cressen", name:"Maester Cressen"},
    {func:longStripe, opts: {colors: heraldryPalettes["houseReed"], width:0.6, rev:true, edge:false}, id:"jojen_reed", name:"Jojen Reed"},
    {func:midFlag, opts: {colors: heraldryPalettes["unknown"], width:0.6, skew:20}, id:"jaqen_h'ghar", name:"Jaqen H'ghar"},
    {func:doubleStripeIn, opts: {colors: heraldryPalettes["houseGreyjoy"], width:0.1}, id:"balon_greyjoy", name:"Balon Greyjoy"},
    {func:doubleStripe, opts: {colors: heraldryPalettes["unknown"], width:0.30, dist:0.04}, id:"dolorous_edd", name:"Dolorous Edd"},
    {func:doubleStripe, opts: {colors: heraldryPalettes["bolton"], width:0.2, dist:0.08}, id:"ramsay_bolton", name:"Ramsay Bolton"},
    {func:midFlag, opts: {colors: heraldryPalettes["bywater"], width:0.6, skew:20}, id:"jacelyn_bywater", name:"Jacelyn Bywater"},
    {func:midFlag, opts: {colors: heraldryPalettes["unknown"], width:0.6, skew:20}, id:"chiswyck", name:"Chiswyck"},
    {func:twoColorVert, opts: {colors: heraldryPalettes["unknown"], skew:-12}, id:"weese", name:"Weese"},
    {func:midStripe, opts: {colors: heraldryPalettes["fieryheart"], width:0.65, offset:0}, id:"melisandre", name:"Melisandre"},
    {func:twoColor, opts: {colors: heraldryPalettes["houseLannister"]}, id:"lancel_lannister", name:"Lancel Lannister"},
    {func:bigTri, opts: {colors: heraldryPalettes["houseReed"]}, id:"meera_reed", name:"Meera Reed"},
    {func:oneColor, opts: {colors: heraldryPalettes["unknown"]}, id:"aeron_damphair", name:"Aeron Damphair"},
    {func:twoColorDiag, opts: {colors: heraldryPalettes["fieryheart"]}, id:"selyse_baratheon", name:"Selyse Baratheon"},
    {func:twoColor, opts: {colors: heraldryPalettes["houseManderly"]}, id:"wyman_manderly", name:"Wyman Manderly"},
    {func:twoColor, opts: {colors: heraldryPalettes["unknown"]}, id:"a_captain", name:"A Captain"},
    {func:twoColorVert, opts: {colors: heraldryPalettes["kingsguard"]}, id:"arys_oakheart", name:"Arys Oakheart"},
    {func:oneColor, opts: {colors: heraldryPalettes["unknown"]}, id:"a_sallow_man", name:"A Sallow Man"},
    {func:oneColor, opts: {colors: heraldryPalettes["houseLannister"]}, id:"qyburn", name:"Qyburn"},
    {func:twoColorDiag, opts: {colors: heraldryPalettes["unknown"]}, id:"a_maester", name:"A Maester"},
    {func:oneColor, opts: {colors: heraldryPalettes["stokeworth"]}, id:"falyse_stokeworth", name:"Falyse Stokeworth"},
    {func:midStripe, opts: {colors: heraldryPalettes["houseTyrell"], width:0.5}, id:"margaery_tyrell", name:"Margaery Tyrell"},
    {func:midStripe, opts: {colors: heraldryPalettes["houseGreyjoy"], width:0.3}, id:"victarion_greyjoy", name:"Victarion Greyjoy"},
    {func:twoColor, opts: {colors: heraldryPalettes["kingsguard"]}, id:"osmund_kettleblack", name:"Osmund Kettleblack"},
    {func:oneColor, opts: {colors: heraldryPalettes["houseMartell"]}, id:"oberyn_martell", name:"Oberyn Martell"},
    {func:littleSquares, opts: {colors: heraldryPalettes["nightsWatch"]}, id:"mance_rayder", name:"Mance Rayder"},
    {func:oneColor, opts: {colors: heraldryPalettes["unknown"]}, id:"tom_sevenstrings", name:"Tom Sevenstrings"},
    {func:longStripe, opts: {colors: heraldryPalettes["houseTyrell"], width:0.6, edge:false}, id:"olenna_tyrell", name:"Olenna Tyrell"},
    {func:bigTri, opts: {colors: heraldryPalettes["unknown"]}, id:"tormund_giantsbane", name:"Tormund Giantsbane"},
    {func:twoColorVert, opts: {colors: heraldryPalettes["unknown"]}, id:"kraznys", name:"Kraznys"},
    {func:midFlag, opts: {colors: heraldryPalettes["unknown"], width:0.25, skew:6}, id:"thoros", name:"Thoros"},
    {func:oneColor, opts: {colors: heraldryPalettes["lem"]}, id:"lem_lemoncloak", name:"Lem Lemoncloak"},
    {func:twoColorVert, opts: {colors: heraldryPalettes["houseFrey"]}, id:"lothar_frey", name:"Lothar Frey"},
    {func:oneColor, opts: {colors: heraldryPalettes["unknown"]}, id:"brown_ben_plumm", name:"Brown Ben Plumm"},
    {func:twoColor, opts: {colors: heraldryPalettes["stormcrows"]}, id:"daario_naharis", name:"Daario Naharis"},
    {func:twoColorVert, opts: {colors: heraldryPalettes["unknown"]}, id:"val", name:"Val"},
    {func:oneColor, opts: {colors: heraldryPalettes["unknown"]}, id:"haldon_halfmaester", name:"Haldon Halfmaester"},
    {func:oneColor, opts: {colors: heraldryPalettes["meereen"]}, id:"skahaz_mo_kandaq", name:"Skahaz mo Kandaq"},
    {func:twoColorDiag, opts: {colors: heraldryPalettes["meereen"]}, id:"hizdahr_zo_loraq", name:"Hizdahr zo Loraq"},
    {func:doubleStripe, opts: {colors: heraldryPalettes["houseConnington"], width:0.08, dist:0.08}, id:"jon_connington", name:"Jon Connington"},
    {func:bigTriInverted, opts: {colors: heraldryPalettes["houseRyswell"]}, id:"barbrey_dustin", name:"Barbrey Dustin"},
    {func:twoColorDiag, opts: {colors: heraldryPalettes["windswept"]}, id:"gerris_drinkwater", name:"Gerris Drinkwater"},
    {func:twoHooks, opts: {colors: heraldryPalettes["houseMartell"], width:0.1}, id:"quentyn_martell", name:"Quentyn Martell"},
    {func:midStripe, opts: {colors: heraldryPalettes["secondSons"], width:0.5}, id:"penny", name:"Penny"},
    {func:midStripe, opts: {colors: heraldryPalettes["houseMartell"], width:0.2, offset:8}, id:"doran_martell", name:"Doran Martell"},
    {func:bigTri, opts: {colors: heraldryPalettes["secondSons"]}, id:"the_tattered_prince", name:"The Tattered Prince"},
    {func:oneColor, opts: {colors: heraldryPalettes["borell"]}, id:"godric_borrell", name:"Godric Borrell"},
    {func:bigTri, opts: {colors: heraldryPalettes["unknown"]}, id:"a_kindly_man", name:"A Kindly Man"},
    {func:oneColor, opts: {colors: heraldryPalettes["meereen"]}, id:"reznak_mo_reznak", name:"Reznak mo Reznak"},
    {func:twoColor, opts: {colors: heraldryPalettes["meereen"]}, id:"vogarro's_whore", name:"Vogarro's Whore"},
    {func:oneColor, opts: {colors: heraldryPalettes["meereen"]}, id:"galazza_galare", name:"Galazza Galare"},
    {func:littleSquares, opts: {colors: heraldryPalettes["houseTargaryen"]}, id:"aegon_targaryen", name:"Aegon Targaryen"},
    {func:oneColor, opts: {colors: heraldryPalettes["windswept"]}, id:"archibald_yronwood", name:"Archibald Yronwood"},
    {func:longStripe, opts: {colors: heraldryPalettes["houseTargaryen"], width:0.6, edge:false}, id:"bloodraven", name:"Bloodraven"},
    {func:bigTri, opts: {colors: heraldryPalettes["houseKarstark"]}, id:"alys_karstark", name:"Alys Karstark"},
    {func:twoColorVert, opts: {colors: heraldryPalettes["goldenCompany"]}, id:"harry_strickland", name:"Harry Strickland"},
    {func:doubleStripe, opts: {colors: heraldryPalettes["faithstar"], width:0.25, skew:6}, id:"high_sparrow", name:"High Sparrow"},
    {func:twoColor, opts: {colors: heraldryPalettes["houseMartell"]}, id:"obara_sand", name:"Obara Sand"},
    {func:twoColorVert, opts: {colors: heraldryPalettes["houseMartell"]}, id:"arianne_martell", name:"Arianne Martell"},
    {func:oneColor, opts: {colors: heraldryPalettes["houseHarlaw"]}, id:"rodrik_harlaw", name:"Rodrik Harlaw"},
    {func:twoColor, opts: {colors: heraldryPalettes["houseGreyjoy"]}, id:"euron_greyjoy", name:"Euron Greyjoy"},
    {func:twoColorVert, opts: {colors: heraldryPalettes["unknown"]}, id:"septon_meribald", name:"Septon Meribald"},
    {func:theTeeth, opts: {colors: heraldryPalettes["faithstar"]}, id:"elder_brother", name:"Elder Brother"},
    {func:oneColor, opts: {colors: heraldryPalettes["unknown"]}, id:"dick_crabb", name:"Dick Crabb"},
    {func:twoColorDiag, opts: {colors: heraldryPalettes["hunt"]}, id:"hyle_hunt", name:"Hyle Hunt"},
    {func:doubleStripe, opts: {colors: heraldryPalettes["houseLannister"], width:0.08, dist:0.08}, id:"daven_lannister", name:"Daven Lannister"},
    {func:bigTriInverted, opts: {colors: heraldryPalettes["houseLannister"]}, id:"genna_lannister", name:"Genna Lannister"},
    {func:twoColorDiag, opts: {colors: heraldryPalettes["unknown"]}, id:"taena_merryweather", name:"Taena Merryweather"},
    {func:twoHooks, opts: {colors: heraldryPalettes["houseRoyceOfTheGatesOfTheMoon"], width:0.1}, id:"myranda_royce", name:"Myranda Royce"},
    {func:midStripe, opts: {colors: heraldryPalettes["houseMartell"], width:0.5}, id:"alleras", name:"Alleras"},
    {func:midStripe, opts: {colors: heraldryPalettes["unknown"], width:0.2, offset:8}, id:"rennifer_longwaters", name:"Rennifer Longwaters"},
    {func:bigTri, opts: {colors: heraldryPalettes["houseVelaryon"]}, id:"aurane_waters", name:"Aurane Waters"},
    {func:doubleFlag, opts: {colors: heraldryPalettes["houseTyrell"]}, id:"leo_tyrell", name:"Leo Tyrell"},
    {func:bigTri, opts: {colors: heraldryPalettes["creightonLongbough"]}, id:"creighton_longbough", name:"Creighton Longbough"},
  ];

  var pillMap = d3.map(pillTypes, function(d) { return d.id; });
  var pillWidth = 100;
  var pillHeight = pillWidth / 7;
  var pillSpace = 10;
  var yearSpace = 60;
  var data = [];
  var aspect = 0;
  var margin = {top: 80, right: 50, bottom: 20, left: 100};
  var width;
  var height;
  var orgWidth;
  var orgHeight;
  var svg = null;
  var g = null;
  var defs = null;

  var zooming = false;

  function pillPath(width, height, padding) {

    var edge = width / 10;
    var halfHeight = height / 2;

    var path = "M 0," + halfHeight;
    path += " l " + edge + "," + (-1 * halfHeight);
    path += " l " + (width - (edge * 2)) + ",0";
    path += " l " + edge + "," + halfHeight;
    path += " l " + (-1 * edge) + "," + halfHeight;
    path += " l " + (-1 * (width - (edge * 2))) + ",0";
    path += " Z";

    return path;
  }

  function oneColor(selection, width, height, opts) {
    selection.selectAll("rect")
      .data([opts.colors[0]]).enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", height)
      .attr("fill", function(d) { return d; });
  }

  function twoColor(selection, width, height, opts) {
    selection.selectAll("rect")
      .data(opts.colors).enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", function(d,i) { return (i * height / 2); })
      .attr("width", width)
      .attr("height", height / 2)
      .attr("fill", function(d) { return d; });
  }

  function twoColorVert(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var skew = opts.skew || 0;

    selection
      .append("path")
      .attr("d", function() {
        var path = "M " + ((width / 2) - (skew / 2)) + "," + 0;
        path += " l" + ((width / 2) + (skew / 2)) + "," + 0;
        path += " l" + 0 + "," + height;
        path += " l" + (-1 * ((width / 2) - (skew / 2))) + "," + 0;
        path += " z";
        return path;
      })
      .attr("fill", opts.colors[1]);
  }

  function twoColorDiag(selection, width, height, opts) {
    selection.append("path")
      .attr("d", function() {
        var path = "M 0,0";
        path += " l " + width + ",0";
        path += " l " + (-1 * width) + "," + height;
        path += " z";
        return path;
      })
      .attr("fill", opts.colors[0]);

    selection.append("path")
      .attr("d", function() {
        var path = "M 0," + height;
        path += " l " + width + ",0";
        path += " l " + 0 + "," + (-1 * height);
        path += " z";
        return path;
      })
      .attr("fill", opts.colors[1]);
  }

  function twoColorDiagRev(selection, width, height, opts) {
    selection.append("path")
      .attr("d", function() {
        var path = "M 0,0";
        path += " l " + width + "," + height;
        path += " l " + (-1 * width) + ",0";
        path += " z";
        return path;
      })
      .attr("fill", opts.colors[0]);

    selection.append("path")
      .attr("d", function() {
        var path = "M 0,0";
        path += " l " + width + ",0";
        path += " l " + 0 + "," + height;
        path += " z";
        return path;
      })
      .attr("fill", opts.colors[1]);
  }

  function midStripe(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var stripeWidth = width * opts.width;
    var offset = 0;
    if(opts.offset) {
      offset = opts.offset;
    }

    selection.append("rect")
      .attr("x", ((width / 2) - offset) - (stripeWidth / 2))
      .attr("y", 0)
      .attr("width", stripeWidth)
      .attr("height", height)
      .attr("fill", opts.colors[1]);
  }

  function trapezoid(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var stripeWidth = width * opts.width;
    var offset = 0;
    if(opts.offset) {
      offset = opts.offset;
    }

    selection.append("rect")
      .attr("x", ((width / 2) - offset) - (stripeWidth / 2))
      .attr("y", 0)
      .attr("width", stripeWidth)
      .attr("height", height)
      .attr("fill", opts.colors[1]);
  }

  function doubleStripe(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var stripeWidth = width * opts.width;
    var halfWidth = width / 2;

    if(opts.colors.length > 2) {
      selection.append("rect")
        .attr("x", ((halfWidth / 2) + (halfWidth * opts.dist)))
        .attr("y", 0)
        .attr("width", stripeWidth * 2)
        .attr("height", height)
        .attr("fill", opts.colors[2]);
    }

    selection.selectAll(".stripe")
      .data([0,1]).enter()
      .append("rect")
      .attr("class", "stripe")
      .attr("x", function(d,i) {
        var dist = i === 0 ? (halfWidth * opts.dist) : (halfWidth * opts.dist * -1);
        return (((halfWidth / 2) + dist) - (stripeWidth / 2)) + (halfWidth * i);
      })
      .attr("y", 0)
      .attr("width", stripeWidth)
      .attr("height", height)
      .attr("fill", opts.colors[1]);
  }

  function candyStripe(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var stripeWidth = width * 0.34;
    var skew = 10;
    var edge = width / 10;

    // var stripeWidth = width * opts.width;
    var halfWidth = width / 2;

    selection.selectAll(".stripe")
      .data([0,1]).enter()
      .append("path")
      .attr("class", "stripe")
      .attr("d", function(d,i) {
        var startX = (i === 0) ? edge : edge + (stripeWidth * 2);
        var path = "M " + startX + "," + 0;
        path += " l" + stripeWidth + "," + 0;
        path += " l" + skew + "," + height;
        path += " l" + (-1 * stripeWidth) + "," + 0;
        path += " z";

        return path;
      })
      .attr("fill", opts.colors[1]);
  }

  function longStripe(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var stripeWidth = width * opts.width;

    var edge = opts.edge ?  width / 10 : -40;
    var offset = opts.offset || 0;

    selection
      .append("path")
      .attr("d", function(d,i) {
        var path = "M " + (edge) + "," + height ;
        path += " l" + (width - (((edge) * 2) + stripeWidth)) + "," + (-1 * height);
        path += " l" + stripeWidth + "," + 0;
        path += " l" + (-1 * (width - (((edge) * 2) + stripeWidth))) + "," + (height);
        path += " z";

        return path;
      })
      .attr("transform", opts.rev ? "translate(100, 0) scale(-1, 1)" : "")
      .attr("fill", opts.colors[1]);
  }

  function doubleStripeIn(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var stripeWidth = width * opts.width;

    var edge = width / 10;

    selection.selectAll(".flag")
      .data([0,1]).enter()
      .append("path")
      .attr("d", function(d,i) {
        var path = "M " + edge + "," + height ;
        path += " l" + ((width / 2) - ((edge * 2) + stripeWidth)) + "," + (-1 * height);
        path += " l" + stripeWidth + "," + 0;
        path += " l" + (-1 * ((width / 2) - ((edge * 2) + stripeWidth))) + "," + (height);
        path += " z";

        return path;
      })
      .attr("transform", function(d,i) {  return i == 1 ? "translate(100, 0) scale(-1, 1)" : ""; })
      .attr("fill", opts.colors[1]);
  }

  function doubleFlag(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var flagWidth = width * opts.width;
    var halfWidth = width / 2;
    var skew = 6;

    selection.selectAll(".flag")
      .data([0,1]).enter()
      .append("path")
      .attr("class", "flag")
      .attr("fill", opts.colors[1])
      .attr("d", function(d,i) {
        var dist = i === 0 ? (halfWidth * opts.dist) : (halfWidth * opts.dist * -1);
        var path = "M " + ((((halfWidth / 2) + dist ) - ((flagWidth / 2) + (skew / 2))) + (halfWidth * i)) + "," + height;
        path += " l " + (skew) + "," + (-1 * height);
        path += " l " + flagWidth  + "," + 0;
        path += " l " + (-1 * skew)  + "," + ( height);
        path += " z";
        return path;
      });
  }

  function bigTri(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var edge = width / 10;

    selection.append("path")
      .attr("fill", opts.colors[1])
      .attr("d", function() {
        var path = "M " + edge + "," + height;
        path += " l " + ((width / 2) - edge) + "," + (-1 * height);
        path += " l " + ((width / 2) - edge)  + "," + height;
        path += " z";
        return path;
      });
  }

  function theTeeth(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var edge = width / 8;
    var toothWidth = (width - (edge * 2)) / 2;

    selection.append("path")
      .attr("fill", opts.colors[1])
      .attr("d", function() {
        var path = "M " + edge + "," + 0;
        path += " l " + (toothWidth / 2) + "," + height;
        path += " l " + (toothWidth / 2) + "," + (-1 * height);
        path += " z";
        return path;
      });

    selection.append("path")
      .attr("fill", opts.colors[1])
      .attr("d", function() {
        var path = "M " + (edge + toothWidth) + "," + 0;
        path += " l " + (toothWidth / 2) + "," + height;
        path += " l " + (toothWidth / 2) + "," + (-1 * height);
        path += " z";
        return path;
      });

    var lastCol = opts.colors.length > 2 ? opts.colors[2] : opts.colors[0];

    selection.append("path")
      .attr("fill", lastCol)
      .attr("d", function() {
        var path = "M " + (edge + (toothWidth / 2)) + "," + height;
        path += " l " + (toothWidth / 2) + "," + (-1 * height);
        path += " l " + (toothWidth / 2) + "," + (height);
        path += " z";
        return path;
      });
  }

  function bigX(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var edge = width / 10;
    var xWidth = width * opts.width;

    selection.append("path")
      .attr("fill", opts.colors[1])
      .attr("d", function() {
        var path = "M " + (edge + (width - xWidth)) + "," + 0;
        path += " l " + ((width / 2) - (edge + (width - xWidth) )) + "," + (height / 2);
        path += " l " + ((width / 2) - ((width - xWidth) + edge)) + "," + (-1 * (height / 2));
        path += " z";
        return path;
      });

    selection.append("path")
      .attr("fill", opts.colors[1])
      .attr("d", function() {
        var path = "M " + (edge + (width - xWidth)) + "," + height;
        path += " l " + ((width / 2) - (edge + (width - xWidth))) + "," + (-1 * (height / 2));
        path += " l " + ((width / 2) - ((width - xWidth) + edge)) + "," + ((height / 2));
        path += " z";
        return path;
      });
  }

  function bigTriInverted(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var edge = width / 10;

    selection.append("path")
      .attr("fill", opts.colors[1])
      .attr("d", function() {
        var path = "M " + edge + "," + 0;
        path += " l " + ((width / 2) - edge) + "," + (height);
        path += " l " + ((width / 2) - edge)  + "," + (-1 * height);
        path += " z";
        return path;
      });
  }

  function littleSquares(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);
    var squares = [true,false,true,false,true];
    var squarePad = width / 10;
    var squareWidth = (width - (squarePad * 2)) / squares.length;
    var squareHeight = height / 2;
    selection.selectAll(".little-square")
      .data(squares).enter()
      .append("rect")
      .attr("class", "little-square")
      .attr("fill", opts.colors[1])
      .attr("width", squareWidth)
      .attr("height", squareHeight)
      .attr("x", function(d,i) { return squarePad + (squareWidth * i); })
      .attr("y", function(d,i) { return d ? squareHeight : 0; });
  }

  function midFlag(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var flagWidth = width * opts.width;
    var skew = opts.skew;

    selection.append("path")
      .attr("fill", opts.colors[1])
      .attr("d", function() {
        var path = "M " + ((width / 2) - ((flagWidth / 2) + (skew / 2))) + "," + height;
        path += " l " + (skew) + "," + (-1 * height);
        path += " l " + flagWidth  + "," + 0;
        path += " l " + (-1 * skew)  + "," + ( height);
        path += " z";
        return path;
      });
  }

  function twoHooks(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var hookEdge = width * opts.width;

    selection.append("path")
      .attr("fill", opts.colors[1])
      .attr("d", function() {
        var path = "M " + hookEdge + "," + 0;
        path += " l " + 0 + "," + height / 2;
        path += " l " + (width - (hookEdge * 2)) + "," + 0;
        path += " l " + 0 + "," + height / 2;
        path += " l " + hookEdge + "," + 0;
        path += " l " + 0 + "," + (-1 * height);
        path += " z";
        return path;
      });
  }

  function prepareData(rawData) {
    rawData.forEach(function(d) {
      years.forEach(function(y) {
        d[y] = +d[y];
      });
    });

    return rawData;
  }

  function createLinks(data) {
    var links = [];
    data.forEach(function(d) {
      for(var i = 1; i < years.length; i++) {
        links.push({id:d.id, start:d[years[i-1]], end:d[years[i]], gap:i});
      }
    });

    return links.filter(function(l) { return l.start > 0 && l.end > 0; });
  }

  function getCityTitles(data) {
    endYears = [];
    data.forEach(function(d) {
      var started = false;
      for(var i = 0; i < years.length; i++) {
        if((started) && (isNaN(d[years[i]]) || d[years[i]] == -1)) {
          if(i > 1) {
            var yr = {
              id:d.id,
              year:years[i - 1],
              pos:d[years[i - 1]],
              name:pillMap.get(d.id).name,
              index:i - 1
            };
            endYears.push(yr);
          }
          if((d.id === "nbed") && (i === 7) || (d.id === "wil") && (i === 4)) { //TODO fix bad hack
            continue;
          } else {
            break;
          }
        } else if(i + 1 === years.length) {
          endYears.push({id:d.id, year:years[i], pos:d[years[i]], name:pillMap.get(d.id).name, index:i});
        } else if(!(isNaN(d[years[i]])) && (d[years[i]] !== -1)) {
          if(i > 0 && !started) {
            endYears.push({id:d.id, year:years[i], pos:d[years[i]], name:pillMap.get(d.id).name, index:i});
          } else if(d[years[i]] > sideEnds[years[i]]) {
            endYears.push({id:d.id, year:years[i], pos:d[years[i]], name:pillMap.get(d.id).name, index:i});
          }
          if((d.id === "pet") && (i === 3)) { //TODO fix bad hack
            started = false;
          } else {
            started = true;
          }
        }
      }
    });

    return endYears;
  }

  function getStartCities(data) {
    var startIds = data
    .filter(function(d) { return d[years[0]] > 0; })
    .map(function(d) { return d.id; });
    var cities = startIds.map(function(d) { return {id:d, name:pillMap.get(d).name}; });
    return cities;
  }

  var chart = function(selection) {
    selection.each(function(rawData) {
      data = prepareData(rawData);
      var links = createLinks(data);
      var cityTitles = getCityTitles(data);
      var startCities = getStartCities(data);

      svg = d3.select(this).selectAll("svg").data([data]);
      var gEnter = svg.enter().append("svg").append("g");

      orgWidth = width = (pillWidth + yearSpace) * years.length;
      orgHeight = height = (pillHeight + pillSpace) * 50;


      svg.attr("width", width + margin.left + margin.right );
      svg.attr("height", height + margin.top + margin.bottom );
      svg.attr("viewBox", "0 0 " + (width + margin.left + margin.right) + " " + (height + margin.top + margin.bottom));
      svg.attr("preserveAspectRatio", "xMidYMid");

      aspect = (width + margin.left + margin.right) / (height + margin.left + margin.right);

      defs = svg.append("defs");

      var pill = defs.append("clipPath")
        .attr("id", "pill")
        .append("path")
        .attr("d", pillPath(pillWidth, pillHeight));

      g = svg.select("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      g.selectAll(".city-title")
        .data(startCities).enter()
        .append("text")
        .attr("class", "title city-title start-city")
        .attr("x", 0)
        .attr("dx", -100)
        .attr("dy", pillHeight )
        .attr("y", function(d,i) { return (pillHeight + pillSpace) * i; })
        .text(function(d) { return d.name; })
        .on("mouseover", mouseover)
        .on("mouseout", mouseout);

      var defpills = defs.selectAll("pill")
        .data(pillTypes)
        .enter()
        .append("g")
        .attr("id", function(d) { return d.id; })
        .attr("class", "pill");

      defpills.append("g").attr("clip-path", "url(#pill)")
        .each(function(d,i) {
          d3.select(this).call(d.func, pillWidth, pillHeight, d.opts);
        });

      defpills.append("path")
        .attr("class", "pill-outline")
        .attr("d", pillPath(pillWidth, pillHeight));

      g.selectAll("links").data(links)
        .enter()
        .append("line")
        .attr("class", "link")
        .attr("x1", function(d,i) { return ((pillWidth + yearSpace) * d.gap) - (yearSpace ); })
        .attr("y1", function(d,i) { return (pillHeight + pillSpace) * (d.start - 1) + (pillHeight / 2); })
        .attr("x2", function(d,i) { return ((pillWidth + yearSpace) * d.gap); })
        .attr("y2", function(d,i) { return (pillHeight + pillSpace) * (d.end - 1) + (pillHeight / 2); });

      var year = g.selectAll("year").data(years)
        .enter()
        .append("g")
        .attr("class", "year")
        .attr("transform", function(d,i) { return "translate(" + ((pillWidth + yearSpace) * i) + ",0)";  });

      year.append("text")
        .attr("class", "title year-title")
        .attr("text-anchor", "middle")
        .attr("x", pillWidth / 2)
        .attr("dy", -15)
        .text(function(d) { return d; });

      year.append("text")
        .attr("class", "title year-title")
        .attr("text-anchor", "middle")
        .attr("x", pillWidth / 2)
        .attr("dy", -27)
        .text(function(d,i) { return censuses[i]; });

      year.selectAll("pill-use")
        .data(function(y) {
          return data.map(function(d) {
            return {"id":d.id, "value":d[y]};
          }).filter(function(d) { return d.value > 0; });
        })
        .enter()
        .append("use")
        .attr("xlink:href", function(d) { return "#" + d.id;})
        .attr("class", "pill-use")
        .attr("transform", function(d,i) {
          return "translate(0," + (d.value - 1) * (pillHeight + pillSpace) + ")";
        })
        .on("mouseover", mouseover)
        .on("mouseout", mouseout);

      g.selectAll("end-title")
        .data(cityTitles)
        .enter()
        .append("text")
        .attr("class", "title end-title")
        .attr("transform", function(d,i) {
          var x = ((pillWidth + yearSpace) * d.index);
          var y = (d.pos ) * (pillHeight + pillSpace);
          return "translate(" + x + "," + y + ")";
        })
        .attr("text-anchor", function(d) { return d.pos > sideEnds[d.year] ? "left" : "middle"; })
        .attr("dx", function(d) { return d.pos > sideEnds[d.year] ? pillWidth + 5 : pillWidth / 2;})
        .attr("dy", -1 * (pillHeight - 1))
        .text(function(d) { return d.name; });

      g.append("text")
        .attr("class", "title main-title")
        .attr("x", width / 2)
        .attr("y", -50)
        .attr("text-anchor", "middle")
        .text("characters ranked by words spoken, AGOT - ADWD");

      g.append("text")
        .attr("class", "title zoom-title zoom")
        .attr("x", -100)
        .attr("y", -50)
        .text("zoom")
        .on("click", chart.zoom);

      d3.select(window).on('resize', resize);
      resize();
      // if (Modernizr.mq('only screen and (min-width: 800px)')) {
      //   d3.select(window).on('resize', resize);
      //   resize();
      // }
    });
  };

  function resize() {
    if(!zooming) {
      var p = svg.node().parentNode;
      var targetWidth = +d3.select(p).style("width").replace("px","");
      svg.attr("width", targetWidth);
      svg.attr("height", targetWidth / aspect);
    }
  }

  function mouseover(d,i) {
    defs.selectAll(".pill")
      .classed("highlight", function() {return d3.select(this).attr("id") === d.id;})
      .classed("unhighlight", function(e) {return e.id !== d.id; });
    g.selectAll(".link")
      .classed("highlight", function(e) {return e.id === d.id; })
      .classed("unhighlight", function(e) {return e.id !== d.id; });
    g.selectAll(".start-city")
      .classed("highlight", function(e) {return e.id === d.id; })
      .classed("unhighlight", function(e) {return e.id !== d.id; });
  }

  function mouseout(d,i) {
    defs.selectAll(".pill").classed("highlight", false);
    defs.selectAll(".pill").classed("unhighlight", false);
    g.selectAll(".link").classed("highlight", false);
    g.selectAll(".link").classed("unhighlight", false);
    g.selectAll(".start-city").classed("highlight", false);
    g.selectAll(".start-city").classed("unhighlight", false);
  }

  chart.zoom = function() {
    zooming = true;
    svg.attr("width", orgWidth + margin.left + margin.right);
    svg.attr("height", orgHeight + margin.top + margin.bottom);

    svg.select(".zoom")
      .text("unzoom")
      .on("click", chart.unzoom);
  };

  chart.unzoom = function() {
    zooming = false;
    resize();
    svg.select(".zoom")
      .text("zoom")
      .on("click", chart.zoom);
  };

  return chart;
};

var zooming = false;

$(document).ready(function() {
  var plot = chart();

  function display(error, data) {
    d3.select("#vis").datum(data).call(plot);
  }

  queue()
    .defer(d3.csv, "data/pops.csv")
    .await(display);

  function unzoomSetup() {
    d3.select("#zoom").on("click", function() {
      plot.unzoom();
      d3.select(this)
      .text("zoom");
      zoomSetup();
    });
  }

  function zoomSetup() {
    d3.select("#zoom").on("click", function() {
      if (zooming) {
        plot.unzoom();
        d3.select(this)
          .text("zoom");
      } else {
        plot.zoom();
        d3.select(this)
          .text("unzoom");
      }
      zooming = !zooming;
    });
  }

  zoomSetup();
});
