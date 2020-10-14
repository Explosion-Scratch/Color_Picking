function colors() {
	var random = 
	setcolor(1);
	setcolor(2);
	setcolor(3);
	setcolor(4);
	setcolor(5);
	setcolor(6);
}
function setcolor(element) {
	var thing = '#color-' + element
	var color = 'rgba(' + random() + ',' + random() + ',' + random() + ')';
	$(thing).css('background-color', color)
}
function random(up_to) {
	return Math.floor((Math.random() * up_to) + 1);
}
colors();