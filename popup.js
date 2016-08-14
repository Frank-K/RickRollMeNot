function testt(){
	//document.getElementById('links').innerHTML = 'hello my name is frank';

	chrome.storage.sync.get(['totalLinks', 'totalTime', 'totalPages'], function(itemm2) {
		var delay = Math.round((itemm2['totalTime'] / itemm2['totalPages']) * 100)/10000;

		document.getElementById('links').innerHTML = ('<b>Links Checked:</b> ' + Number(itemm2['totalLinks']).toLocaleString());
		document.getElementById('delay').innerHTML = ('<b>Average Delay:</b> ' + delay + 's');
	});
}

window.addEventListener('load', testt);

//document.addEventListener('load', testt);