var ions = new Array();
ions = 	
[
	'ammonium', 'copper(I)', 'hydronium', 'silver', 'cadmium(II)', 'chromium(II)', 
	'copper(II)', 'cobalt(II)', 'iron(II)', 'lead(II)', 'mercury(I)',
	'mercury(II)', 'manganese(II)', 'nickel(II)', 'tin(II)', 'vanadium(II)', 'zinc',
	'cobalt(III)', 'chromium(III)', 'iron(III)', 'lead(III)', 'nickel(III)', 'vanadium(III)',
	'tin(IV)', 'lead(IV)', 'vanadium(IV)', 'manganese(VII)',


	'acetate', 'hypobromite', 'bromite', 'bromate', 'perbromate', 'hypochlorite', 'chlorite', 'chlorate',
	'perchlorate', 'cyanide', 'dihydrogen phosphate', 'formate', 'hydrogen carbonate (bicarbonate)',
	'hydrogen sulfite (bisulfite)', 'hydrogen sulfate (bisulfate)', 'bisulfide', 'hydroxide', 'nitrite',
	'nitrate', 'hypoiodite', 'iodite', 'iodate', 'periodate', 'permanganate', 'thiocyanate',
	'carbonate', 'chromate', 'dichromate', 'hydrogen phosphate', 'oxalate',
	'peroxide', 'sulfite', 'sulfate', 'thiosulfate', 'phosphite', 'phosphate', 'arsenate'
];


var charge = new Array();
charge = 
[
	1,1,1,1,
	2,2,2,2,2,2,2,2,2,2,2,2,2,
	3,3,3,3,3,3,
	4,4,4,
	7,

	
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	2,2,2,2,2,2,2,2,2,
	3,3,3
];

var sign = new Array();
sign = 
[
	'+','+','+','+',
	'+','+','+','+','+','+','+','+','+','+','+','+','+',
	'+','+','+','+','+','+',
	'+','+','+',
	'+',

	'-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-',
	'-','-','-','-','-','-','-','-','-',
	'-','-','-'
];

var symbol = new Array();
symbol = 
[
	'NH<sub>4</sub>', 'Cu(1)', 'H<sub>3</sub>O', 'Ag',
	'Cd', 'Cr(2)', 'Cu(2)', 'Co(2)', 'Fe(2)', 'Pb(2)', 'Hg<sub>2</sub>', 'Hg', 'Mn(2)', 'Ni(2)', 'Sn(2)', 'V(2)', 'Zn',
	'Co(3)', 'Cr(3)', 'Fe(3)', 'Pb(3)', 'Ni(3)', 'V(3)',
	'Sn(4)', 'Pb(4)', 'V(4)',
	'Mn(7)',
	
	'CH<sub>3</sub>COO/C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>', 'BrO', 'BrO<sub>2</sub>', 'BrO<sub>3</sub>',
	'BrO<sub>4</sub>', 'ClO', 'ClO<sub>2</sub>', 'ClO<sub>3</sub>', 'ClO<sub>4</sub>', 'CN', 
	'H<sub>2</sub>PO<sub>4</sub>', 'HCOO', 'HCO<sub>3</sub>', 'HSO<sub>3</sub>', 'HSO<sub>4</sub>', 'HS', 
	'OH', 'NO<sub>2</sub>', 'NO<sub>3</sub>', 'IO', 'IO<sub>2</sub>', 'IO<sub>3</sub>', 'IO<sub>4</sub>',
	'MnO<sub>4</sub>', 'SCN',
	'CO<sub>3</sub>', 'CrO<sub>4</sub>', 'Cr<sub>2</sub>O<sub>7</sub>', 'HPO<sub>4</sub>', 
	'C<sub>2</sub>O<sub>4</sub>', 'O<sub>2</sub>', 'SO<sub>3</sub>', 'SO<sub>4</sub>',
	'S<sub>2</sub>O<sub>3</sub>', 'PO<sub>3</sub>', 'PO<sub>4</sub>', 'AsO<sub>4</sub>'
]

var id; // id is the id number (e.g ions[id], charge[id], etc)
var rand; //global
var correct=0;
var incorrect=0;
var data;
var prev;
var answer = new Array();






function update() {

	data="<tr><td>"+ions[prev]+"</td><td>"+symbol[prev]+"</td><td>"+charge[prev]+"</td><td>"+sign[prev]+"</td></tr>";

	document.getElementById("correct").innerHTML=correct;
	document.getElementById("incorrect").innerHTML=incorrect;
	document.getElementById("tbody").innerHTML=data;
}


function clear(){
	var radio = document.getElementsByName("sign");
	document.getElementById("name").value="";
	document.getElementById("symboltd").innerHTML="<input type=\"text\" id=\"symbol\" onkeyup=\"if(event.keyCode==13) document.getElementById('button').click()\" style=\"width: 75px\">";
	document.getElementById("charge").value="";
	for(var i=0; i<radio.length; i++){
		radio[i].checked=false;
	}
	prev=id;
	id=Math.floor(Math.random()*64);
	rand=(0.5>=Math.random());		// if rand is true, show name, else show symbol

	if (rand) {
		document.getElementById("name").value=ions[id];
	} else {
		document.getElementById("symboltd").innerHTML=symbol[id];
	}
	
	answer = [ions[id], symbol[id], charge[id], sign[id]];

}

function check(){
	if (rand) {
		if (symbol[id].indexOf("(")>0) {
			if(document.getElementById("symbol").value != symbol[id].substring(0,symbol[id].indexOf("("))) {
				incorrect++;
				clear();
				update();
				return 0;
			}
		} else	
		if (symbol[id].indexOf("<")>0) {
			if (document.getElementById("symbol").value != symbol[id].replace(/\<\/?sub\>/g,"") ) {
				incorrect++;
				clear();
				update();
				return 0;
			}
		}	
	} else {
		if (document.getElementById("name").value!=ions[id]) {
			incorrect++;
			clear();
			update();
			return 0;
		}
	}
	if (document.getElementById("charge").value!=charge[id]) {
		incorrect++;
		clear();
		update();
		return 0;
	}
	if (document.getElementById("sign+").checked && sign[id]=="-") {
		incorrect++;
		clear();
		update();
		return 0;
	}
	if (document.getElementById("sign-").checked && sign[id]=="+") {
		incorrect++;
		clear();
		update();
		return 0;
	}
	correct++;
	clear();
	update();
	return 0;
}	
































