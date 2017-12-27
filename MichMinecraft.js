var mineCraft = {};


mineCraft.init = function () {
	mineCraft.createBoard();
}


mineCraft.createBoard = function () {
	for (var row = 0; row < 19; row++) {
		for (var col = 0; col < 15; col++) {
			mineCraft.tiles = $("<div/>")
				.addClass('tile')
				.appendTo($('#mainBoard'));
		}
		console.log("hello");
	}
}

$(document).ready(function() {
    mineCraft.init();
});







