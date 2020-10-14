function colors() {
	setcolor(1);
}
function setcolor(element) {
	var thing = '#color-' + element
	var color = 'rgba(' + Math.floor((Math.random() * 255) + 1);
	$(thing).css('background-color', 'red')
}
colors();