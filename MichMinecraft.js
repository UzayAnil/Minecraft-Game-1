var mineCraft = {};


($(".tool")).click(function () {
    console.log("Hello!");
})

mineCraft.init = function () {
    mineCraft.createBoard();
    toolCreator();
}


var toolNames = ["pickaxe", "shovel", "axe"];
var toolPics = ["Pickaxe.png", "Shovel.png", "Axe.png"];

function toolCreator() {
    for (var i = 0; i < toolNames.length; i++) {
        var div = $("<div/>");
        div.addClass("tool " + toolNames[i]);
        var image = $("<img/>");
        image.addClass("toolImage");
        image.attr("src", toolPics[i]);
        div.append(image);
        var toolText = $("<p/>");
        toolText.text(toolNames[i]);
        $(".textToolBar").append(div);
        div.append(toolText);
        div.on("click", toolClick);
        $("p").css("font-size", "10px");
    }
}

//Initalized the variable and created click event
var currentTool;
var hasTool;

function toolClick() {
    currentTool = $(this);
    hasTool = currentTool.attr("class");
    currentTool.toggleClass("toolBackgroundColor");
}


//adding color indicator 
var colorIndicator = $("<div/>")
.addClass("box skyblue backgroundIndicator");
$(".col-lg-3").append(colorIndicator);

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
            if (x == 14) {
                box.addClass("dirtWithGrass");
            }

            //adding rocks
            else if ((x === 13 && y === 13) || (x === 13 && y === 14) || (x === 13 && y === 20)) {
                box.addClass("rock");
            }
            //adding tree bark
            else if ((x === 13 && y === 16) || (x === 12 && y === 16) || (x === 11 && y === 16)) {
                box.addClass("treeBark");
            }
            //adding tree leaves
            else if ((x === 8 && y === 17) || (x === 10 && y === 17) || (x === 9 && y === 17) || (x === 10 && y === 15) || (x === 8 && y === 15) || (x === 9 && y === 15)
                || (x === 8 && y === 15) || (x === 8 && y === 16) || (x === 9 && y === 16) || (x === 10 && y === 16)) {

                box.addClass("treeLeaf");
            }
            //adding bush
            else if ((x === 13 && y === 1) || (x === 13 && y === 2) || (x === 13 && y === 3) || (x === 13 && y === 4) || (x === 12 && y === 2) || (x === 12 && y === 3)) {
                box.addClass("justGrass");
            }

            //adding the cloud
            else if ((x === 4 && y === 4) || (x === 4 && y === 5) || (x === 4 && y === 6) || (x === 4 && y === 7) || (x === 4 && y === 8) || (x === 3 && y === 5) || (x === 3 && y === 6) || (x === 3 && y === 7) || (x === 5 && y === 6) || (x === 5 && y === 5) || (x === 5 && y === 7)) {
                box.removeClass("skyblue");
                box.addClass("cloud");
            }
            box.on("click", selectedDiv);
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

selectedDiv = function () {

    if (hasTool == 'tool pickaxe' || hasTool == 'tool axe' || hasTool == 'tool shovel') {
        var divSelected = $(this).attr("class");


        if (divSelected != 'box skyblue') {

            if ((divSelected === 'box skyblue dirt') && (hasTool === 'tool shovel')) {    
                ($('.backgroundIndicator').data(divSelected));
                $(this).removeClass('dirt');
                removeClassesFromBackGroundIndicatorDiv();
                $('.backgroundIndicator').addClass('dirt');  
            }

            else if ((divSelected === 'box skyblue dirtWithGrass') && (hasTool === 'tool shovel')) {
                ($('.backgroundIndicator').data(divSelected));
                $(this).removeClass('dirtWithGrass');
                removeClassesFromBackGroundIndicatorDiv();
                $('.backgroundIndicator').addClass('dirtWithGrass');
            }

            else if ((divSelected === 'box skyblue treeBark') && (hasTool === 'tool axe')) {
                ($('.backgroundIndicator').data(divSelected));
                $(this).removeClass('treeBark');
                removeClassesFromBackGroundIndicatorDiv();
                $('.backgroundIndicator').addClass('treeBark');
            }

            else if ((divSelected === 'box skyblue treeLeaf') && (hasTool === 'tool axe')) {
                ($('.backgroundIndicator').data(divSelected));
                $(this).removeClass('treeLeaf');
                removeClassesFromBackGroundIndicatorDiv();
                $('.backgroundIndicator').addClass('treeLeaf');
            }
            
            else if ((divSelected === 'box skyblue justGrass') && (hasTool === 'tool axe')) {
                ($('.backgroundIndicator').data(divSelected));
                $(this).removeClass('justGrass');
                removeClassesFromBackGroundIndicatorDiv();
                $('.backgroundIndicator').addClass('justGrass');
            }

            else if ((divSelected === 'box skyblue rock') && (hasTool === 'tool pickaxe')) {
                ($('.backgroundIndicator').data(divSelected));
                $(this).removeClass('rock');
                removeClassesFromBackGroundIndicatorDiv();
                $('.backgroundIndicator').addClass('rock');
            }
        }
        else {
            var selectedColor = $('.backgroundIndicator');
            
            removeClassesFromBlockDiv(this);

            if (selectedColor.hasClass('dirt')) {
                $(this).addClass("dirt");
            }
            else if (selectedColor.hasClass('dirtWithGrass')) {
                $(this).addClass("dirtWithGrass");
            }
            else if (selectedColor.hasClass('treeBark')) {
                $(this).addClass("treeBark");
            }
            else if (selectedColor.hasClass('treeLeaf')) {
                $(this).addClass("box skyblue treeLeaf");
            }
            else if (selectedColor.hasClass("justGrass")) {
                $(this).addClass("box skyblue justGrass");
            }

            else if (selectedColor.hasClass('rock')) {
                $(this).addClass("box skyblue rock");
            }
            removeClassesFromBackGroundIndicatorDiv();
        }
    }
}

function removeClassesFromBackGroundIndicatorDiv() {
    $('.backgroundIndicator').removeClass('dirt');
    $('.backgroundIndicator').removeClass('dirtWithGrass');
    $('.backgroundIndicator').removeClass('treeBark');
    $('.backgroundIndicator').removeClass('treeLeaf');
    $('.backgroundIndicator').removeClass('rock');
    $('.backgroundIndicator').removeClass('justGrass');
}

function removeClassesFromBlockDiv(element) {
    $(element).removeClass('dirt');
    $(element).removeClass('dirtWithGrass');
    $(element).removeClass('treeBark');
    $(element).removeClass('treeLeaf');
    $(element).removeClass('rock');
    $(element).removeClass('justGrass');
}



$("#tutorialModalButton").click(function() {
	$('.modal').css("display", "block");
});

$("#startButton").click(function() {
	location.reload();
});

$("span").click(function() {
	$('.modal').css("display", "none");
})


$("#beginGameButton").click(function() {
	$("#myModalIntro").css("display", "none");

})

$(".backgroundIndicator").on("click", function() {
    console.log("fff")
});
