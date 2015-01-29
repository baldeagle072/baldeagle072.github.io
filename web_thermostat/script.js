function sendCommand(command) {
	var url = getCommandUrl();
	$.get(url, {command: command});
};

function getCommandUrl(){
	var url = "command/?" + window.location.href.slice(window.location.href.indexOf('?') + 1)
	return url;
};