var mineCraft = {};




mineCraft.init = function () {
	mineCraft.createBoard();
}


mineCraft.createBoard = function () {

	mineCraft.matrix = new Array(21);
	for (var i = 0; i < mineCraft.matrix.length; i++) {
		mineCraft.matrix[i] = new Array(21);
		//creating 20 by 20 matrix array
	}
	console.log(mineCraft.matrix);

		for (var x = 0; x < mineCraft.matrix.length; x++) {
			for (var y = 0; y < mineCraft.matrix.length; y++) {
				mineCraft.matrix[x][y] = "";
				var box = $("<div/>")
				.addClass("box")
				$('#mainBoard').append(box);
		}
			}
	
	
	}


$(document).ready(function() {
    mineCraft.init();
});







