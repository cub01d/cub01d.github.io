document.addEventListener("DOMContentLoaded", function () {
var popcorn = Popcorn("#mainvideo");

// if adblock
if(popcorn.pop === undefined) {
    document.getElementById("facts").innerHTML = "<h1>Please disable adblock for an interactive video experience.</h1>";
}

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
    "start": 5.709,
    "end": 18,
    "target": "thumbnails",
    "text": "<img src='pictures/mccafe.png' class='thumb' onmouseover='display(this.id)' onmouseout='hide(this)' id='mccafe' />" +
          "<img src='pictures/hotcakes.png' class='thumb' onmouseover='display(this.id)' onmouseout='hide(this)' id='hotcakes' />" +
        "<img src='pictures/sausage-mcmuffin.png' class='thumb' onmouseover='display(this.id)' onmouseout='hide(this)' id='sausage-mcmuffin' />",
});

popcorn.pop({
    "text":"You can hover over the icons \nto view the nutritional facts.",
    "target": "video",
    "start": 6.009,
    "icon": "left.png",
    "end": 10.4,
    "style": "z-index:4; left:400px; top:450px;"
});

popcorn.footnote({
   "start": 5.8,
   "end": 7.466,
   "text": "<h3 style='color:black'>McCaf&eacute; with Condiments</h3><img src='pictures/mccafe.png' style='width:250px; position:absolute; top: 55px; left:30px;' />",
   "target": "image"
});

popcorn.footnote({
   "start": 5.8,
   "end": 7.466,
   "text": "<img src='nutrition/mccafe.png' />",
   "target": "facts"
});

popcorn.footnote({
   "start": 7.467,
   "end": 8.6,
   "text": "<h2 style='color:black; position:relative; top:85px'>Hotcakes</h2><img src='pictures/hotcakes.png' style='width:320px; position:absolute; top:-40px;' />",
   "target": "image"
});

popcorn.footnote({
   "start": 7.467,
   "end": 8.6,
   "text": "<img src='nutrition/hotcakes.png' />",
   "target": "facts"
});

popcorn.footnote({
   "start": 8.6,
   "end": 10.4,
   "text": "<h2 style='color:black; position:relative; top:5px'>Sausage McMuffin</h2><img src='pictures/sausage-mcmuffin.png' style='width:250px; position:absolute; top:40px; left:24px;' />",
   "target": "image"
});

popcorn.footnote({
   "start": 8.6,
   "end": 10.4,
   "text": "<img src='nutrition/sausage-mcmuffin.png' />",
   "target": "facts"
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
    "text": "There are other healthier diets out there.",
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
	"start": 20,
	"end": 24.5,
	"target": "image",
	"text": "<img src='pictures/broccoli.jpg' style='width:320px; position:absolute; top:3px;' />"
});

popcorn.footnote({
	"start": 20,
	"end": 26,
	"target": "facts",
	"text": "<h5 style='color:black;'>SOURCES:</h5><ul><li><a href='http://www.nutrition-and-you.com/vegetable-nutrition.html' onclick='video.pause()' target='_blank'>Vegetable nutrition facts and the health benefits of vegetables</a></li><li><a href='http://www.livestrong.com/article/348507-what-kind-of-vegetables-contain-soluble-fiber/' onclick='video.pause()' target='_blank'>LIVESTRONG article: What kind of vegetables contain soluble fiber?</a></li></ul>"
});

popcorn.pop({
    "start": 26.248,
    "end": 31.522,
    "target": "video",
    "text": "Fruits and vegetables with a variety of colors contain \nmany different minerals and antioxidants. Check below \nfor more information.",
    "top": 33,
    "left": 5
});

popcorn.footnote({
	"start": 26.248,
	"end": 33.522,
	"target": "image",
	"text": "<img src='pictures/food-rainbow.jpg' style='width:300px; position:absolute; top:40px; left:10px;' />"
});

popcorn.footnote({
	"start": 26.248,
	"end": 33.522,
	"text": "<a href='http://ezinearticles.com/?Colorful-Foods,-Potent-Antioxidants&id=481874' target='_blank' onclick='video.pause()'><img src='nutrition/screen.png' /></a>",
	"target": "facts"
});

popcorn.pop({
    "start": 34,
    "end": 38,
    "target": "video",
    "text": "Eating fruits and vegetables can \nprevent surprises, such as heart \nattacks and strokes, and can \nalso lower blood pressure.",
    "top": 35,
    "left": 5
});

popcorn.footnote({
	"start": 34,
	"end": 38,
	"target": "image",
	"text": "<img src='pictures/heart.jpg' />"
});

popcorn.footnote({
	"start": 34,
	"end": 41,
	"target": "facts",
	"text": "<h5 style='color:black;'>SOURCES:</h5><ul><li><a href='http://www.ehow.com/video_4766268_fruits-can-lower-blood-pressure_.html' target='_blank' onclick='video.pause()'>VIDEO: What Fruits & Vegetables Can Lower Blood Pressure?</a></li><li><a href='http://www.news-medical.net/news/20100217/Eat-fruits-and-vegetables-to-prevent-heart-disease.aspx' target='_blank' onclick='video.pause()'>Eat Fruits and Vegetables to Prevent Heart Disease</a></li></ul>"
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
	"start": 42.222,
	"end": 47.586,
	"text": "<a href='http://lowfatcooking.about.com/od/lowfatbasics/a/servings102504.htm'><img src='pictures/mypyramid.jpg' alt='mypyramid' title='click for more MyPyramid info!' style='width:320px; position:absolute; top:57.4px;' /></a>",
	"target": "image"
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
	"start": 44.2,
	"end": 50.02,
	"text": "<a href='http://www.choosemyplate.gov/' target='_blank' onclick='video.pause()'><img src='pictures/myplate.jpg' alt='choosemyplate.gov' /></a>",
	"target": "facts"
});


popcorn.pop({
	"start": 51,
	"end": 54.4,
	"text": "With the right diet and exercise, \nyou'll be on a rainbow to a healthier \nlifestyle in no time!",
	"target": "video",
	"top": 28,
	"left": 20
});

popcorn.pop({
	"start": 55,
	"end": 59.3,
	"text": "Check out some cool resources below \nfor choosing healthier food choices \ntoday!",
	"target": "video",
	"top": 34,
	"left": 15
});

var list = "<ul>" +
"<li><a href='http://www.mcdonalds.com/us/en/meal_builder.html' target='_blank'>McDonalds Meal Builder and Nutritional Value (0:05-0:10)</a></li>" +
"<li><a href='http://www.nutrition-and-you.com/vegetable-nutrition.html' target='_blank'>Vegetable nutrition facts and the health benefits of vegetables (0:20-0:25)</a></li>" +
"<li><a href='http://www.livestrong.com/article/348507-what-kind-of-vegetables-contain-soluble-fiber/' target='_blank'>LIVESTRONG article: What kind of vegetables contain soluble fiber? (0:20-0:25)</a></li>" +
"<li><a href='http://ezinearticles.com/?Colorful-Foods,-Potent-Antioxidants&id=481874' target='_blank'>Colorful Foods, Potent Antioxidants (0:26-0:34)</a></li>" +
"<li><a href='http://www.news-medical.net/news/20100217/Eat-fruits-and-vegetables-to-prevent-heart-disease.aspx' target='_blank'>Eat Fruits and Vegetables to Prevent Heart Disease (0:34-0:38)</a></li>" +
"<li><a href='http://www.ehow.com/video_4766268_fruits-can-lower-blood-pressure_.html' target='_blank'>VIDEO: What Fruits & Vegetables Can Lower Blood Pressure? (0:34-0:38)</a></li>" +
"<li><a href='http://lowfatcooking.about.com/od/lowfatbasics/a/servings102504.htm' target='_blank'>Moving Away from MyPyramid - Food Groups and Serving Sizes (0:42-0:48)</a></li>" +
"<li><a href='http://www.choosemyplate.gov/' target='_blank'>Choosemyplate.gov (0:44-0:50)</a></li>" +
"<li><a href='http://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/vegetables-full-story/' target='_blank'>Harvard Medical School: What should you eat?</a></li>" +
"</ul>"+
"<br><br>Watch the original on <a href='http://www.youtube.com/watch?v=0f1E9TgS52M' target='_blank'>Youtube!</a>";

popcorn.code({
	"start": 55,
	"onStart": function() {
		document.getElementById('facts').innerHTML="<h5 style='color:black;'>RESOURCES:</h5>" + list;
	}
});

}, false);

function display(id) {
    // facts
    console.log("display called");
    document.getElementById("overlay").innerHTML="<img src='nutrition/"+id+".png' />";

}

function hide() {
    console.log("hide called");
    document.getElementById("overlay").innerHTML="";
}
