var boardGrid = ["E", "E", "E", "E", "E", "E", "E", "E", "E"];

var running = false;

$(document).ready(function() {
    running = true;

    $("#newGame").click(function() {
        location.reload();
    });

    $(".tic").click(function() {
        if (running == false) {
            return;
        }

        var clickedX = checkClicked(this);

        if (clickedX) {
            alert("Already clicked");
            return;
        }
        $(this).data("clicked", true);

        var gridId = $(this).data("grid-id");

        boardGrid[gridId] = "X";

        $(this).addClass("belize-hole");

        checkWinner(boardGrid);

        var available = findAvailable(boardGrid);

        checkTie(available);

        var randomGridId = getRandomGridId(available);

        boardGrid[randomGridId] = "O";

        var selector = "[data-grid-id= " + randomGridId + "]";

        var clickedY = checkClicked(selector);

        if (clickedY) {
            alert("Already clicked");
            return;
        }
        $(selector).addClass("pumpkin");

        $(selector).data("clicked", true);

        checkWinner(boardGrid);
    });
});

function findAvailable(board) {
    var available = new Array();
    var avl = new Array();

    for(var i=0; i<9; i++) {
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
    if ((board[0] == board[1] && board[1] == board[2] && board[0] == "X") ||
        (board[3] == board[4] && board[4] == board[5] && board[3] == "X") ||
        (board[6] == board[7] && board[7] == board[8] && board[6] == "X") ||
        (board[0] == board[3] && board[3] == board[6] && board[0] == "X") ||
        (board[1] == board[4] && board[4] == board[7] && board[1] == "X") ||
        (board[2] == board[5] && board[5] == board[8] && board[2] == "X") ||
        (board[0] == board[4] && board[4] == board[8] && board[0] == "X") ||
        (board[2] == board[4] && board[4] == board[6] && board[2] == "X")) {
            $(".winner-box").addClass("belize-hole");
            $("#winner").html("\"X\" won the match");
            running = false;
    }

    if ((board[0] == board[1] && board[1] == board[2] && board[0] == "O") ||
        (board[3] == board[4] && board[4] == board[5] && board[3] == "O") ||
        (board[6] == board[7] && board[7] == board[8] && board[6] == "O") ||
        (board[0] == board[3] && board[3] == board[6] && board[0] == "O") ||
        (board[1] == board[4] && board[4] == board[7] && board[1] == "O") ||
        (board[2] == board[5] && board[5] == board[8] && board[2] == "O") ||
        (board[0] == board[4] && board[4] == board[8] && board[0] == "O") ||
        (board[2] == board[4] && board[4] == board[6] && board[2] == "O")) {
            $(".winner-box").addClass("pumpkin");
            $("#winner").html("\"O\" won the match");
            running = false;
    }
}

function checkTie(available) {
    if (available.length == 0) {
        $("#winner").html("Match Tied");
    }
}

function checkClicked(selector) {
    if ($(selector).data("clicked")) {
        return true;
    } else {
        return false;
    }
}
