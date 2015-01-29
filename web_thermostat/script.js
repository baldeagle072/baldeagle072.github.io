$('button').on('click', function() {
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
	var url = $(location).attr('href');
	alert(url);
	return url;
}