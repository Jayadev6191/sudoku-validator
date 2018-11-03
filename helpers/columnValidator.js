export const validateColumns = function(board) {
    for (var i = 0; i < board.length; i++) {
        var map = {};
        for (var j = 0; j < board.length; j++) {
            // iterate throgh all the rows for each column index
            if (map[board[j][i]]) return false; // Invalid column
            map[board[j][i]] = true;
        }
    }
    return true;
}
