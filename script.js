var no = random(6);
var correct = 'rgba(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
colors();
function colors() {
	setcolor(1);
	setcolor(2);
	setcolor(3);
	setcolor(4);
	setcolor(5);
	setcolor(6);
}
function setcolor(element) {
	if (no != element) {
		var thing = '#color-' + element
		var color = 'rgba(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
		$(thing).css('background-color', color)
	};
	
}
function random(up_to) {
	return Math.floor((Math.random() * up_to) + 1);
}
