const validateSubBoard = function(board, sbr, sbc) {
    var map = {};
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (map[board[i + sbr][j + sbc]]) return false;
            map[board[i + sbr][j + sbc]] = true;
        }
    }
    return true;
};

export const validateSubBoards = function(board) {
    var boardIndices = [0, 3, 6];

    for (var i = 0; i < boardIndices.length; i++) {
        for (var j = 0; j < boardIndices.length; j++) {
            if (!validateSubBoard(board, boardIndices[i], boardIndices[j]))
            return false;
        }
    }

    return true;
}
