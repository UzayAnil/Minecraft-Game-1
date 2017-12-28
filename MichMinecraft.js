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
				.addClass("box skyblue");
			if (x==14){
				box.addClass("dirtWithGrass");
				
			}

			//adding rocks
			else if ((x === 13 && y === 13) || (x === 13 && y === 14) || (x===13 && y ===20)) {
				box.addClass("rock");
			}
			//adding tree bark
			else if ((x === 13&&y===16) || (x === 12&&y===16) || (x === 11&&y===16)) {
				box.addClass("treeBark");
			}
			//adding tree leaves
			else if ((x === 8 && y===17)|| (x===10 && y === 17) || (x === 9 && y===17) || (x === 10 && y===15)||(x === 8 && y===15)||(x === 9 && y===15)
			||(x === 8 && y===15)||(x === 8 && y===16)||(x === 9 && y===16)||(x === 10&&y===16)) {
	
				box.addClass("treeLeaf");
			}
			//adding bush
			else if((x===13&&y===1) || (x===13&&y===2)||(x===13&&y===3)||(x===13&&y===4)||(x===12&&y===2)||(x===12&&y===3)) {
				box.addClass("justGrass");
			}

			//adding the cloud
			else if((x===4&&y===4)||(x===4&&y===5) ||(x===4&&y===6) || (x===4&&y===7)|| (x===4&&y===8) || (x===3&&y===5) || (x===3&&y===6) || (x===3&&y===7)||(x===5&&y===6)||(x===5&&y===5)||(x===5&&y===7)){
				box.removeClass("skyblue");
				box.addClass("cloud");
			}
			box.on("click", whatever);
			$('#mainBoard').append(box);

			mineCraft.matrix[x][y] = box;
		}
	}

	//adding dirt
	for (var i = 15; i < mineCraft.matrix.length; i++) {
		for (var j = 0; j < mineCraft.matrix.length; j++) {
			mineCraft.matrix[i][j].addClass("dirt");
		}
	}

};

$(document).ready(function () {
	mineCraft.init();

});

whatever=function(){
	console.log("whatever");
}








