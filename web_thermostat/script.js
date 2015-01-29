$('.tstat-heating div a.down-btn').click(function() {
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
	var url = window.location.pathname;
	alert(url);
	return url;
}