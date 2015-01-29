function onClick() {
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

function getCommandUrl(){
	var url = "command/?" + window.location.href.slice(window.location.href.indexOf('?') + 1)
	alert(url);
	return url;
};