function colors() {
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
function random() {
	return Math.floor((Math.random() * 255) + 1);
}
setInterval(function(){
	colors();
}, 500);
