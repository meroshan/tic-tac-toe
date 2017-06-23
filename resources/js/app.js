var boardGrid = ["E", "E", "E", "E", "E", "E", "E", "E", "E"];

$(document).ready(function() {
    $("#newGame").click(function() {
        location.reload();
    });

    $(".tic").click(function() {
        var gridId = $(this).data("grid-id");

        boardGrid[gridId] = "X";

        $(this).addClass("belize-hole");

        var winner = checkWinner(boardGrid);

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

function checkWinner(board) {
    if (board[0] == board[1] == board[2] == "X" ||
        board[3] == board[4] == board[5] == "X" ||
        board[6] == board[7] == board[8] == "X" ||
        board[0] == board[3] == board[6] == "X" ||
        board[1] == board[4] == board[7] == "X" ||
        board[2] == board[5] == board[8] == "X" ||
        board[0] == board[4] == board[8] == "X" ||
        board[2] == board[4] == board[6] == "X" ) {
            console.log(board)
            alert("Player wins the match");
        }
}
