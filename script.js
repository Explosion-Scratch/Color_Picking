colors();
function colors() {
	var no = random(6);
	setcolor(1);
	setcolor(2);
	setcolor(3);
	setcolor(4);
	setcolor(5);
	setcolor(6);
}
function setcolor(element) {
	var thing = '#color-' + element
	var color = 'rgba(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	$(thing).css('background-color', color)
}
function random(up_to) {
	return Math.floor((Math.random() * up_to) + 1);
}
