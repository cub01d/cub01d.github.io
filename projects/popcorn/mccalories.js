document.addEventListener("DOMContentLoaded", function () {
var popcorn = Popcorn("#mainvideo");

 // add a footnote at 2 seconds, and remove it at 6 seconds

popcorn.pop({
    "start": 0.084,
    "end": 2.733,
    "target": "video",
    "exit": 0.3,
    "text": "This is a McDonald\'s TV commercial.",
    "left": 9,
    "top": 38
});

popcorn.pop({
    "start": 2.485,
    "end": 5.273,
    "target": "video",
    "text": "This commerical aired in\nthe Philippines in 2012.",
    "top": 29,
    "left": 25
});

popcorn.pop({
    "start": 5.709,
    "end": 10.4,
    "target": "video",
    "text": "Take a look at the calories \nin these foods.",
    "top": 31,
    "left": 33
});


popcorn.footnote({
   start: 5.8,
   end: 7.466,
   text: "<h3 style='color:black'>McCaf&eacute; with Condiments</h3><img src='pictures/mccafe.png' style='width:250px; position:absolute; top: 55px; left:30px;' />",
   target: "image"
});
popcorn.footnote({
   start: 5.8,
   end: 7.466,
   text: "<img src='nutrition/mccafe.png' />",
   target: "facts"
});



popcorn.footnote({
   start: 7.467,
   end: 8.6,
   text: "<h2 style='color:black; position:relative; top:85px'>Hotcakes</h2><img src='pictures/hotcakes.png' style='width:320px; position:absolute; top:-40px;' />",
   target: "image"
});
popcorn.footnote({
   start: 7.467,
   end: 8.6,
   text: "<img src='nutrition/hotcakes.png' />",
   target: "facts"
});



popcorn.footnote({
   start: 8.6,
   end: 10.4,
   text: "<h2 style='color:black; position:relative; top:5px'>Sausage McMuffin</h2><img src='pictures/sausage-mcmuffin.png' style='width:250px; position:absolute; top:40px; left:24px;' />",
   target: "image"
});
popcorn.footnote({
   start: 8.6,
   end: 10.4,
   text: "<img src='nutrition/sausage-mcmuffin.png' />",
   target: "facts"
});


popcorn.pop({
    "start": 10.5,
    "end": 12,
    "target": "video",
    "text": "Would you eat all of that in one sitting?",
    "top": 36,
    "left": 12
});

popcorn.pop({
    "start": 15.5,
    "end": 18,
    "target": "video",
    "text": "There are alternative ways to eat healthier.",
    "top": 35,
    "left": 12
});


popcorn.pop({
    "start": 20,
    "end": 24.5,
    "target": "video",
    "text": "Incorporating more greens \nin your diet can help lower cholesterol \nand increase fiber intake.",
    "top": 34.2,
    "left": 17.7
});
popcorn.footnote({
	start: 20,
	end: 24.5,
	target: "image",
	text: "<img src='pictures/broccoli.jpg' style='width:320px; position:absolute; top:3px;' />"
});
popcorn.footnote({
	start: 20,
	end: 24.5,
	target: "facts",
	text: "<h5 style='color:black;'>SOURCES:</h5><ul><li><a href=''>link1</a></li><li><a href=''>link2</a></li></ul>"
});




popcorn.pop({
    "start": 26.248,
    "end": 30.522,
    "target": "video",
    "text": "Fruits and vegetables with a variety of colors contain \nmany different minerals and antioxidants. Check below \nfor more information.",
    "top": 33,
    "left": 5
});

popcorn.footnote({
	start: 26.248, 
	end: 33.522,
	target: "image",
	text: "<img src='pictures/food-rainbow.jpg' style='width:300px; position:absolute; top:40px; left:10px;' />"
});

popcorn.footnote({
	start: 26.248,
	end: 33.522,
	text: "<a href='ezinearticles.com/?Colorful-Foods,-Potent-Antioxidants'><img src='nutrition/screen.png' style='' /></a>",
	target: "facts"
});




popcorn.pop({
    "start": 34,
    "end": 38,
    "target": "video",
    "text": "Eating fruits and vegetables can prevent your risk for \nsurprises such as heart attacks and strokes.",
    "top": 35,
    "left": 5
});
popcorn.footnote({
	start: 34,
	end: 38,
	target: "image",
	text: "<img src='pictures/heart.jpg' />"
});
popcorn.footnote({
	start: 34,
	end: 38,
	target: "facts",
	text: "<h5 style='color:black;'>SOURCES:</h5><ul><li><a href=''>link1</a></li><li><a href=''>link2</a></li></ul>"
});



popcorn.pop({
    "start": 41.888,
    "end": 47.586,
    "target": "video",
    "text": "We were taught our serving sizes \naccording to the food pyramid.",
    "top": 7.3,
    "left": 60.8,
    "style": "z-index: 2;"
});

popcorn.footnote({
	start: 42.222,
	end: 47.586,
	text: "<img src='pictures/mypyramid.jpg' style='width:320px; position:absolute; top:57.4px;' />",
	target: "image"
});

popcorn.pop({
    "start": 43.1,
    "end": 47.949,
    "target": "video",
    "text": "Since then, additional research \nhas prompted doctors and health \nprofessionals to change it to the\nway it is now. Take a look.",
    "top": 40.5,
    "left": 27
});

popcorn.footnote({	
	start: 44.9,
	end: 50.02,
	text: "<a href='http://www.choosemyplate.gov/' onclick='myVideo.pause()'><img src='nutrition/myplate.jpg' /></a>",
	target: "facts"
});


popcorn.pop({
	start: 51,
	end: 54.4,
	text: "With the right diet and exercise, \nyou'll be on a rainbow to a healthier \nlifestyle in no time!",
	target: "video",
	top: 28,
	left: 20
});

popcorn.pop({
	start: 54,
	end: 59.3,
	text: "Check out some cool resources below for choosing \nhealthier food choices today!",
	target: "video",
	top: 34,
	left: 15
});

popcorn.code({
	//add references at the end of the video
	start: 55,
	onStart: function() {
		document.getElementById('facts').innerHTML="<h5 style='color:black;'>RESOURCES:</h5><ul><li>Coming soon!</li></ul>"
	}
});

}, false);