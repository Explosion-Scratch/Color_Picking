var no = random(6);
var correct = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
colors();
$('#lookfor').html(correct);
$('#new-game, #wrong').hide();
function newgame() {
	no = random(6);
  correct = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	colors();
	$('#lookfor').html(correct);
	$('.color').css('opacity', '1');
	$('#new-game').slideDown();
	setTimeout(() => {  $('#new-game').slideUp() }, 2000);

}


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
	if (no != element) {
		var color = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
		$(thing).css('background-color', color);
	} else {
		$(thing).css('background-color', correct);
	};
	
}
function random(up_to) {
	return Math.floor((Math.random() * up_to) + 1);
}

function checkoutput(number) {
	if (number == no) {
		console.log('Correct!');
		newgame();
	} else {
		$('output').html('Incorrect!')
		$('#color-'+ number).css('opacity', '0');
	}
};
