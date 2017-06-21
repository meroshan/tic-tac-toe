var boardGrid = ["E", "E", "E", "E", "E", "E", "E", "E", "E"];

var running = false;

$(document).ready(function() {

    $(".tic").click(function() {
        running = true;
        var gridId = $(this).data("grid-id");

        boardGrid[gridId] = "X";
        $(this).addClass("belize-hole");

        var available = findAvailable(boardGrid);

        var randomGridId = getRandomGridId(available);

        boardGrid[randomGridId] = "O";

        var selector = "[data-grid-id= " + randomGridId + "]";

        $(selector).addClass("pumpkin");
    });
});

function findAvailable(board) {
    var available = new Array();
    var avl = new Array();

    for(var i=1; i<=9; i++) {
        if (board[i] == "E") {
            available.push(i);
        }
    }

    return available;
}

function getRandomGridId(available)
{
    // [TODO what if array is empty]

    if (available.length) {
        var random = available[Math.floor(Math.random() * available.length)];

        return random;
    }

    return;
}
