$('button').on('click', function(e) {
	alert("test");
	var url = getCommandUrl();
	$.get(url, {command: "heatUp"});
});

$('.tstat-heating .up-btn').click(function() {
	
});

$('.tstat-cooling .down-btn').click(function() {
	
});

$('.tstat-cooling .up-btn').click(function() {
	
});

function onClick() {
	alert("test2");
};

function getCommandUrl(){
	var url = "command/?" + window.location.href.slice(window.location.href.indexOf('?') + 1)
	alert(url);
	return url;
};