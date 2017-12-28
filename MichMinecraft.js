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

	for (var x = 0; x < mineCraft.matrix.length; x++) {
		for (var y = 0; y < mineCraft.matrix.length; y++) {
			var box = $("<div/>")
				.addClass("box skyblue")
			$('#mainBoard').append(box);

			mineCraft.matrix[x][y] = box;
		}
	}

	//adding dirt
	for (var i = 14; i < mineCraft.matrix.length; i++) {
		for (var j = 0; j < mineCraft.matrix.length; j++) {
			mineCraft.matrix[i][j].removeClass("skyblue")
			mineCraft.matrix[i][j].addClass("dirt");
		}
	}

	for (var i = 13; i < mineCraft.matrix[14]; i++) {
		for (var j = 0; j < mineCraft.matrix.length; j++) {
			mineCraft.matrix[i][j].removeClass("skyblue")
			mineCraft.matrix[i][j].addClass("dirtWithGrass");
		}
	}


};


$(document).ready(function () {
	mineCraft.init();
});








