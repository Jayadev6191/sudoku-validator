import { validateRows } from '../helpers/rowValidator';
import { validateColumns } from '../helpers/columnValidator';
import { validateSubBoards } from '../helpers/subBoardValidator';

var board = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

var btn = document.getElementById("validate");
btn.addEventListener('click',function(){
    console.log(`row validation: ${validateRows(board)}`);
    console.log(`column validation: ${validateColumns(board)}`);
    console.log(`subBoard validation: ${validateSubBoards(board)}`);

    const result =  validateRows(board)
        ? validateColumns(board)
        ? validateSubBoards(board)
        : false
        : false;

    console.log(`sudoku validation result is ${result}`);
    return result;
});
