var pageLinks = document.links;
var stuff = []

for (var num = 0; num < pageLinks.length; num++) {
	stuff.push(pageLinks[num].href);
}

akkert(stuff);