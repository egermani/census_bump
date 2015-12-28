
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

var chart = function() {

  var pillTypes = [
    {func:oneColor, opts: {colors:["#A8B2A5"]}, id:"ned_stark", name:"Ned Stark"},
    {func:oneColor, opts: {colors:["#D4AB80"]}, id:"tyrion_lannister", name:"Tyrion"},
    {func:twoColor, opts: {colors:["#E9D19E","#C0B295"]}, id:"catelyn_stark", name:"Catelyn"},
    {func:twoColor, opts: {colors:["#B7AA8B","#807F5B"]}, id:"robert_baratheon", name:"Robert Barath."},
    {func:twoColorVert, opts: {colors:["#A6906D","#D5A97C"]}, id:"jon_snow", name:"Jon Snow"},
    {func:oneColor, opts: {colors:["#D5AC92"]}, id:"littlefinger", name:"Littlefinger"},
    {func:oneColor, opts: {colors:["#A6906D"]}, id:"jeor_mormont", name:"Jeor Mormont"},
    {func:twoColorDiag, opts: {colors:["#D6AA7D","#C0B395"]}, id:"varys", name:"Varys"},
    {func:oneColor, opts: {colors:["#AAB5A7"]}, id:"robb", name:"Robb"},
    {func:midStripe, opts: {colors:["#E7CE98","#D5AD94"], width:0.5}, id:"dany_targaryen", name:"Daenerys"},
    {func:midStripe, opts: {colors:["#787658","#C28D5E"], width:0.3}, id:"jorah_mormont", name:"Jorah Mormont"},
    {func:twoColor, opts: {colors:["#A6AEA3","#C79063"]}, id:"cersei_lannister", name:"Cersei"},
    {func:oneColor, opts: {colors:["#7A7957"]}, id:"sansa_stark", name:"Sansa"},
    {func:littleSquares, opts: {colors:["#C09364", "#7E949A"]}, id:"grand_maester_pycelle", name:"Pycelle"},
    {func:oneColor, opts: {colors:["#9D9385"]}, id:"maester_luwin", name:"Maester Luwin"},
    {func:longStripe, opts: {colors:["#A8906B", "#ACB4A1"], width:0.6, edge:false}, id:"arya_stark", name:"Arya"},
    {func:bigTri, opts: {colors:["#BFB395", "#E2CB8D"]}, id:"bran_stark", name:"Bran"},
    {func:twoColorVert, opts: {colors:["#D6B094", "#A48D6D"]}, id:"tywin_lannister", name:"Tywin"},
    {func:midFlag, opts: {colors:["#ABB5A5", "#E5C98F"], width:0.25, skew:6}, id:"joffrey_lannister", name:"Joffrey"},
    {func:twoColor, opts: {colors:["#82815C","#C99562"]}, id:"viserys", name:"Viserys"},
    {func:twoColorVert, opts: {colors:["#D1A577","#A7916E"]}, id:"walder_frey", name:"Walder Frey"},
    {func:oneColor, opts: {colors:["#C1B496"]}, id:"brynden_tully", name:"Brynden Tully"},
    {func:twoColor, opts: {colors:["#AA9570","#D3AE99"]}, id:"sam", name:"Sam Tarly"},
    {func:twoColorVert, opts: {colors:["#D5A87B","#BAAD91"]}, id:"aemon_targaryen", name:"Maester Aemon"},
    {func:oneColor, opts: {colors:["#E6CC90"]}, id:"mirri_maz_duur", name:"Mirri Maz Duur"},
    {func:oneColor, opts: {colors:["#D6AB90"]}, id:"lysa_arryn", name:"Lysa Arryn"},
    {func:twoColorDiag, opts: {colors:["#9C9385","#D6AA7A"]}, id:"rodrik_cassel", name:"Rodrik Cassel"},
    {func:doubleStripe, opts: {colors:["#D1A575","#A8AD86"], width:0.08, dist:0.08}, id:"syrio_forel", name:"Syrio Forel"},
    {func:bigTriInverted, opts: {colors:["#A7B2A4", "#E7C991"]}, id:"osha", name:"Osha"},
    {func:twoColorDiag, opts: {colors:["#A6A87E","#998F82"]}, id:"sandor_clegane", name:"Sandor Clegane"},
    {func:twoHooks, opts: {colors:["#C3B79B","#A78659"], width:0.1}, id:"bronn", name:"Bronn"},
    {func:midStripe, opts: {colors:["#D2A375","#A3AEA0"], width:0.5}, id:"barristan_selmy", name:"Barristan Selmy"},
    {func:midStripe, opts: {colors:["#D7AB97","#A0AB9D"], width:0.2, offset:8}, id:"jaime_lannister", name:"Jaime"},
    {func:bigTri, opts: {colors:["#808F7B", "#D4AC92"]}, id:"renly_baratheon", name:"Renly"},
    {func:oneColor, opts: {colors:["#BAAD8F"]}, id:"illyrio", name:"Illyrio"},
    {func:doubleStripe, opts: {colors:["#E3C78D","#D2A98F"], width:0.15, dist:0.0}, id:"theon_greyioy", name:"Theon Greyioy"},
    {func:midStripe, opts: {colors:["#B7AA8C","#A2A67E"], width:0.3} , id:"khal_drogo", name:"Khal Drogo"},
    {func:midFlag, opts: {colors:["#E4C88D", "#928C7D"], width:0.27, skew:6}, id:"alliser_thorne", name:"Alliser Thorne"},
    {func:doubleFlag, opts: {colors:["#948E81", "#D6A772"], width:0.08, dist:0.3}, id:"donal_noye", name:"Donal Noye"},
    {func:twoColorVert, opts: {colors:["#A8B4A7","#D6AA8F"]}, id:"old_nan", name:"Old Nan"},
    {func:oneColor, opts: {colors:["#E6CA90"]}, id:"a_messenger", name:"A Messenger"},
    {func:doubleStripe, opts: {colors:["#A38D6A","#9FADA0"], width:0.15, dist:-0.07}, id:"tobho_mott", name:"Tobho Mott"},
    {func:oneColor, opts: {colors:["#7C7B5A"]}, id:"septa_mordane", name:"Septa Mordane"},
    {func:doubleStripe, opts: {colors:["#948E81","#E0C68C"], width:0.15, dist:0.2}, id:"kevan_lannister", name:"Kevan Lannister"},
    {func:candyStripe, opts: {colors:["#A0ADA0","#948E81"], width:0.20, dist:0.2}, id:"yoren", name:"Yoren"}, //TODO
    {func:twoColor, opts: {colors:["#BAB28E","#C3905F"]}, id:"mya_stone", name:"Mya Stone"},
    {func:oneColor, opts: {colors:["#A89270"]}, id:"stannis_baratheon", name:"Stannis"},
    {func:twoColorDiag, opts: {colors:["#D2AC91","#D3A878"]}, id:"qhorin_halfhand", name:"Qhorin Halfhand"},
    {func:midStripe, opts: {colors:["#9DA89A","#6A828A"], width:0.18, offset:0}, id:"asha_greyjoy", name:"Asha Greyjoy"},
    {func:midFlag, opts: {colors:["#CFA675", "#A3A67E"], width:0.24, skew:6}, id:"davos_seaworth", name:"Davos Seaworth"},
    {func:oneColor, opts: {colors:["#C2B69A"]}, id:"dontos", name:"Dontos"},
    {func:oneColor, opts: {colors:["#807F5B"]}, id:"gendry", name:"Gendry"},
    {func:twoColorDiagRev, opts: {colors:["#A3A679","#CFA773"]}, id:"xaro_xhoan_daxos", name:"Xaro Xhoan Daxos"},
    {func:oneColor, opts: {colors:["#938C7D"]}, id:"edmure_tully", name:"Edmure Tully"},
    {func:midStripe, opts: {colors:["#DCC387","#A3A378"], width:0.5, offset:0}, id:"salladhor_saan", name:"Salladhor Saan"},
    {func:bigTri, opts: {colors:["#948D7D", "#BCB195"]}, id:"ygritte", name:"Ygritte"},
    {func:twoHooks, opts: {colors:["#A4B0A0","#D7A892"], width:0.26}, id:"brienne", name:"Brienne"},
    {func:twoHooks, opts: {colors:["#A58F6C","#9FAE9C"], width:0.15}, id:"hallyne", name:"Hallyne"},
    {func:twoColorVert, opts: {colors:["#CABFA0","#BF8A5A"]}, id:"maester_cressen", name:"Maester Cressen"},
    {func:midStripe, opts: {colors:["#A1A99D","#D2AA76"], width:0.8, offset:0}, id:"shae", name:"Shae"},
    {func:midStripe, opts: {colors:["#BFB496","#D5AE93"], width:0.5, offset:0}, id:"jojen_reed", name:"Jojen Reed"},
    {func:bigTri, opts: {colors:["#D5A78D", "#BFB294"]}, id:"jaqen_h'ghar", name:"Jaqen H'ghar"},
    {func:bigX, opts: {colors:["#A4AFA1", "#D7AC93"], width:1.0}, id:"balon_greyjoy", name:"Balon Greyjoy"},
    {func:bigX, opts: {colors:["#D1A577", "#928D82"], width:1.0}, id:"dolorous_edd", name:"Dolorous Edd"},
    {func:theTeeth, opts: {colors:["#A0ADA3", "#D4AD94", "#B9AC90"], width:1.0}, id:"ramsay_bolton", name:"Ramsay Bolton"},
    {func:theTeeth, opts: {colors:["#D9B094", "#A2B0A6"], width:1.0}, id:"jacelyn_bywater", name:"Jacelyn Bywater"},
    {func:bigX, opts: {colors:["#EACE95", "#C1B29B"], width:1.0}, id:"janos_slynt", name:"Janos Slynt"},
    {func:theTeeth, opts: {colors:["#C2B598", "#C48F5E"], width:1.0}, id:"oberyn_martell", name:"Oberyn Martell"},
    {func:midStripe, opts: {colors:["#E6CC8D","#D7A98F"], width:0.5} , id:"meera_reed", name:"Meera Reed"},
    {func:twoColorVert, opts: {colors:["#A1ADA0","#797957"], skew:12}, id:"mance_rayder", name:"Mance Rayder"},
    {func:twoColorVert, opts: {colors:["#A99370","#82835E"]} , id:"melisandre", name:"Melisandre"},
    {func:midStripe, opts: {colors:["#7E7F5C","#AA9570"], width:0.5, offset:0}, id:"roose_bolton", name:"Roose Bolton"},
    {func:twoColorDiag, opts: {colors:["#7E7D59","#BDB293"]}, id:"tom_sevenstrings", name:"Tom Sevenstrings"},
    {func:twoColorDiag, opts: {colors:["#989180","#D1A772"]} , id:"olenna_tyrell", name:"Olenna Tyrell"},
    {func:twoColor, opts: {colors:["#D6B094","#C89566"]}, id:"tormund_giantsbane", name:"Tormund"},
    {func:bigX, opts: {colors:["#E0C68A", "#968D82"], width:0.4}, id:"kraznys", name:"Kraznys"},
    {func:midFlag, opts: {colors:["#A3AE9C", "#D0A471"], width:0.25, skew:-6}, id:"harwin", name:"Harwin"},
    {func:twoHooks, opts: {colors:["#A1AC9B","#D6AA77"], width:0.25}, id:"thoros", name:"Thoros"},
    {func:longStripe, opts: {colors:["#A2AE9F","#B8AF8C"], width:0.2, edge:true}, id:"arianne_martell", name:"Arianne Martell"},
    {func:longStripe, opts: {colors:["#BBB08D","#7E7D58"], width:0.6, rev:true, edge:false}, id:"septon_meribald", name:"Septon Meribald"},
    {func:midFlag, opts: {colors:["#CDC0A2", "#A1AA99"], width:0.6, skew:20}, id:"doran_martell", name:"Doran Martell"},
    {func:doubleStripeIn, opts: {colors:["#D7A771","#BAAE8C"], width:0.1}, id:"a_kindly_man", name:"A Kindly Man"},
    {func:doubleStripe, opts: {colors:["#A19887","#AAB2A0", "#AAAD85"], width:0.30, dist:0.04}, id:"qyburn", name:"Qyburn"},
    {func:doubleStripe, opts: {colors:["#C08B5C","#C1B395"], width:0.2, dist:0.08}, id:"elder_brother", name:"Elder Brother"},
    {func:midFlag, opts: {colors:["#D4AA8F", "#7D96A1"], width:0.6, skew:20}, id:"dick_crabb", name:"Dick Crabb"},
    {func:midFlag, opts: {colors:["#D3A673", "#9E8468"], width:0.6, skew:20}, id:"hyle_hunt", name:"Hyle Hunt"},
    {func:twoColorVert, opts: {colors:["#D4B193","#A7916F"], skew:-12}, id:"daven_lannister", name:"Daven Lannister"},
    {func:midStripe, opts: {colors:["#E2C689","#D8B096"], width:0.5, offset:0}, id:"genna_lannister", name:"Genna Lannister"},
    {func:twoColor, opts: {colors:["#E3C78C","#BCB091"]}, id:"taena_merryweather", name:"Taena Merryweather"},
    {func:bigTri, opts: {colors:["#7D7C58", "#A28C68"]}, id:"euron_greyjoy", name:"Euron Greyjoy"},
    {func:oneColor, opts: {colors:["#A8B2A5"]}, id:"rodrik_harlaw", name:"Rodrik Harlaw"},
    {func:oneColor, opts: {colors:["#D4AB80"]}, id:"aeron_damphair", name:"Aeron Damphair"},
    {func:twoColor, opts: {colors:["#E9D19E","#C0B295"]}, id:"victarion_greyjoy", name:"Victarion Greyjoy"},
    {func:twoColor, opts: {colors:["#B7AA8B","#807F5B"]}, id:"high_sparrow", name:"High Sparrow"},
    {func:twoColorVert, opts: {colors:["#A6906D","#D5A97C"]}, id:"arys_oakheart", name:"Arys Oakheart"},
    {func:oneColor, opts: {colors:["#D5AC92"]}, id:"myranda_royce", name:"Myranda Royce"},
    {func:oneColor, opts: {colors:["#A6906D"]}, id:"margaery_tyrell", name:"Margaery Tyrell"},
    {func:twoColorDiag, opts: {colors:["#D6AA7D","#C0B395"]}, id:"randyll_tarly", name:"Randyll Tarly"},
    {func:oneColor, opts: {colors:["#AAB5A7"]}, id:"osmund_kettleblack", name:"Osmund Kettleblack"},
    {func:midStripe, opts: {colors:["#E7CE98","#D5AD94"], width:0.5}, id:"podrick_payne", name:"Podrick Payne"},
    {func:midStripe, opts: {colors:["#787658","#C28D5E"], width:0.3}, id:"robert_arryn", name:"Robert Arryn"},
    {func:twoColor, opts: {colors:["#A6AEA3","#C79063"]}, id:"a_maester", name:"A Maester"},
    {func:oneColor, opts: {colors:["#7A7957"]}, id:"alleras", name:"Alleras"},
    {func:littleSquares, opts: {colors:["#C09364", "#7E949A"]}, id:"dareon", name:"Dareon"},
    {func:oneColor, opts: {colors:["#9D9385"]}, id:"lancel_lannister", name:"Lancel Lannister"},
    {func:longStripe, opts: {colors:["#A8906B", "#ACB4A1"], width:0.6, edge:false}, id:"loras_tyrell", name:"Loras Tyrell"},
    {func:bigTri, opts: {colors:["#BFB395", "#E2CB8D"]}, id:"wyman_manderly", name:"Wyman Manderly"},
    {func:twoColorVert, opts: {colors:["#D6B094", "#A48D6D"]}, id:"haldon_halfmaester", name:"Haldon Halfmaester"},
    {func:midFlag, opts: {colors:["#ABB5A5", "#E5C98F"], width:0.25, skew:6}, id:"skahaz_mo_kandaq", name:"Skahaz mo Kandaq"},
    {func:twoColor, opts: {colors:["#82815C","#C99562"]}, id:"hizdahr_zo_loraq", name:"Hizdahr zo Loraq"},
    {func:twoColorVert, opts: {colors:["#D1A577","#A7916E"]}, id:"jon_connington", name:"Jon Connington"},
    {func:oneColor, opts: {colors:["#C1B496"]}, id:"barbrey_dustin", name:"Barbrey Dustin"},
    {func:twoColor, opts: {colors:["#AA9570","#D3AE99"]}, id:"bowen_marsh", name:"Bowen Marsh"},
    {func:twoColorVert, opts: {colors:["#D5A87B","#BAAD91"]}, id:"gerris_drinkwater", name:"Gerris Drinkwater"},
    {func:oneColor, opts: {colors:["#E6CC90"]}, id:"quentyn_martell", name:"Quentyn Martell"},
    {func:oneColor, opts: {colors:["#D6AB90"]}, id:"penny", name:"Penny"},
    {func:twoColorDiag, opts: {colors:["#9C9385","#D6AA7A"]}, id:"daario_naharis", name:"Daario Naharis"},
    {func:doubleStripe, opts: {colors:["#D1A575","#A8AD86"], width:0.08, dist:0.08}, id:"the_tattered_prince", name:"Tattered Prince"},
    {func:bigTriInverted, opts: {colors:["#A7B2A4", "#E7C991"]}, id:"godric_borrell", name:"Godric Borrell"},
    {func:twoColorDiag, opts: {colors:["#A6A87E","#998F82"]}, id:"brown_ben_plumm", name:"Brown Ben Plumm"},
    {func:twoHooks, opts: {colors:["#C3B79B","#A78659"], width:0.1}, id:"reznak_mo_reznak", name:"Reznak mo Reznak"},
    {func:midStripe, opts: {colors:["#D2A375","#A3AEA0"], width:0.5}, id:"vogarro's_whore", name:"Vogarro's Whore"},
    {func:midStripe, opts: {colors:["#D7AB97","#A0AB9D"], width:0.2, offset:8}, id:"galazza_galare", name:"Galazza Galare"},
    {func:bigTri, opts: {colors:["#808F7B", "#D4AC92"]}, id:"aegon_targaryen", name:"Aegon Targaryen"},
    {func:oneColor, opts: {colors:["#BAAD8F"]}, id:"archibald_yronwood", name:"Archie Yronwood"},
    {func:bigTri, opts: {colors:["#808F7B", "#D4AC92"]}, id:"bloodraven", name:"Bloodraven"},
    {func:oneColor, opts: {colors:["#BAAD8F"]}, id:"selyse_baratheon", name:"Selyse Baratheon"},
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
