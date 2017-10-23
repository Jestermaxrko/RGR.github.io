var news = [
	{title:"WWE TLC 2017",
		text: "This sunday live in Toronto",
		
		url: "url('first.jpg')"
	},

	{title:"WWE 2K18 Game",
		text: "New graphics, new roster ",
		url: "url('second.jpg')"
	},

	{title:"Wrestlemania results",
		text: "Watch results",
		url: "url('third.jpg')"
	},
	{title:"WWE No Mercy",
		text: "Highlights of show",
		url: "url('fourth.jpg')"
		
	}
]

var list = document.getElementById("news_point").getElementsByTagName("li");
var timer = setInterval(changeNewsByTimer,15000);

function change_news(elem){
	clearInterval(timer);
	var li = document.getElementsByClassName("active");	
	if(li.length) li[0].removeAttribute("class");
	elem.className = "active";
	document.getElementById("news_title").innerHTML = news[elem.value].title;
	document.getElementById("news_text").innerHTML = news[elem.value].text;
	document.getElementById("latest_news").style.backgroundImage = news[elem.value].url;
	timer = setInterval(changeNewsByTimer,15000);
}

function changeNewsByTimer(){
	var li = document.getElementsByClassName("active");
	var pos = li[0].value;
	li[0].removeAttribute("class");

	if(pos==3) pos =0;
	else pos++;
	list[pos].className="active";
	document.getElementById("news_title").innerHTML = news[pos].title;
	document.getElementById("news_text").innerHTML = news[pos].text;
	document.getElementById("latest_news").style.backgroundImage = news[pos].url;
}


	
	