function colors() {
	setcolor(1);
}
function setcolor(element) {
	var thing = '#color-' + element
	$(thing).css('background-color', 'red')
}
colors();