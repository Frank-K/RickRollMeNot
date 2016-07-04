var pageLinks = document.links;
var stuff = [];
var bool = false;
var link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

for (var num = 0; num < pageLinks.length; num++) {
	
	if (pageLinks[num].href == link) {
		bool = true;
		
		pageLinks[num].setAttribute('id', 'RickRoll');
		pageLinks[num].setAttribute('class', 'hint--right hint--error');
		pageLinks[num].setAttribute('aria-label', "You're about to get RickRoll'd!");
		pageLinks[num].setAttribute('z-index', '999999999');
	}



}

if (bool == true){
	alert('YOU ARE ABOUT TO GET RICK ROLLED!');
}
else {
	alert('REALX YOU ARE SAFE');
}