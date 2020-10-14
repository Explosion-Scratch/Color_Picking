function colors() {
	setcolor(1);
}
function setcolor(element) {
	var thing = '#color-' + element
	var color = 'rgba(' + random() + ',' + random() + ',' + random() + ')';
	$(thing).css('background-color', color)
}
function random() {
	return Math.floor((Math.random() * 255) + 1);
}
colors();