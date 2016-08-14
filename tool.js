var t0 = performance.now();

var pageLinks = document.links;
var stuff = [];
var bool = false;
var linkList = ["https://www.youtube.com/watch?v=dQw4w9WgXcQ", "http://www.youtube.com/watch?v=dQw4w9WgXcQ", "http://adf.ly/KMuXn", "http://adf.ly/IEJfj", "https://goo.gl/1BvNfb",
				"http://goo.gl/wbVpL5", "http://bit.ly/1c9vo1S", "http://bit.ly/IqT6zt", "http://tinyurl.com/2fcpre6", "http://tinyurl.com/y8ufsnp", "http://bc.vc/yAdPyL",
				"http://bc.vc/hsJgnX", "https://is.gd/6Tl7YS", "https://is.gd/WVZvnI"];

// var set = new Set();
// set.add(link);

for (var num = 0; num < pageLinks.length; num++) {
	
	//if (set.has(pageLinks[num].href)) {
	//	pageLinks[num].setAttribute('id', 'RickRoll');
	//	pageLinks[num].setAttribute('class', 'hint--right hint--error');
	//	pageLinks[num].setAttribute('aria-label', "You're about to get RickRoll'd!");
	//	pageLinks[num].overflow = 'visible';
	//}
	

	if (linkList.indexOf(pageLinks[num].href) > -1){
		console.log('link found');
		pageLinks[num].setAttribute('onclick', 'alert("You are about to be rickrolled")');
	}



}

var t1 = performance.now();

function confirmation(){
	if (window.confirm("You ASDFREQASD are about to be rickrolled  Do you want to continue?")){
		window.open("http://bit.do/list-of-url-shorteners.php", 'BYE');
	}
}

/*chrome.storage.sync.set({'foo':'hello'}, function() {
	console.log('Saved');
}); */

/*chrome.storage.sync.get('totalLinks', function(itemm) {

	if (itemm['totalLinks'] == null) {
		console.log('null');
		chrome.storage.sync.set({'totalLinks': pageLinks.length});
	} else {
		var newTotalLinks = itemm['totalLinks'] + pageLinks.length;
		chrome.storage.sync.set({'totalLinks': newTotalLinks});
		console.log(itemm['totalLinks']);
		console.log(newTotalLinks);
	}

})

chrome.storage.sync.get('totalTime', function(itemm2) {

	if (itemm['totalTime'] == null) {
		console.log('null');
		chrome.storage.sync.set({'totalTime': pageLinks.length});
	} else {
		var newTotalTime = itemm['totalTime'] + (t1 - t0);
		chrome.storage.sync.set({'totalTime': newTotalTime});
		console.log(itemm['totalTime']);
		console.log(newTotalTime);
	}

})
*/

//chrome.storage.sync.set({'totalLinks' : 100});

chrome.storage.sync.get(['totalLinks', 'totalTime', 'totalPages'], function(itemm) {
	console.log(itemm);
	if (itemm['totalLinks'] == undefined) {
		console.log('hello');
		chrome.storage.sync.set({'totalLinks' : pageLinks.length});
	} else {
		var newTotalLinks = itemm['totalLinks'] + pageLinks.length;
		chrome.storage.sync.set({'totalLinks': newTotalLinks});
	}

	if (itemm['totalTime'] == undefined) {
		console.log('hello again');
		var baseTime = (t1 - t0);
		chrome.storage.sync.set({'totalTime' : baseTime});
	} else {
		var newTotalTime = itemm['totalTime'] + (t1 - t0);
		chrome.storage.sync.set({'totalTime' : newTotalTime});
	}

	if (itemm['totalPages'] == undefined) {
		chrome.storage.sync.set({'totalPages' : 1});
	} else {
		var num = itemm['totalPages'] + 1;
		chrome.storage.sync.set({'totalPages' : num});
	}
	
	console.log('Links ' + newTotalLinks);
	console.log('Time ' + newTotalTime);
});

// 'alert("You are about to be rickrolled")'