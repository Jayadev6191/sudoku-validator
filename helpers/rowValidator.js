export const validateRows = function validateRows(board) {
    for (var i = 0; i < board.length; i++) {
      var map = {};
      for (var j = 0; j < board[i].length; j++) {
        // iterate throgh all the columns for each row index
        if (map[board[i][j]]) return false; // Invalid Row
        map[board[i][j]] = true;
      }
    }
  
    return true;
}
