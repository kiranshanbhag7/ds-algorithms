/**
 * We have been given a matrix of m rows and n columns which has land and water represented by 1 and 0 respectively.
 * A person starting from top-left cell (0, 0) can move in four directions (top, bottom, left, right) only if the adjacent cell is land.
 * We have to find whether the person can reach bottom-right cell (m-1, n-1)
 *
 * Input:
 [
 [1, 0, 0, 0, 0],
 [1, 1, 0, 1, 0],
 [0, 1, 1, 1, 0],
 [0, 0, 0, 1, 0],
 [1, 1, 1, 1, 1]
 ]

 Output:
 true

 */

function isTargetReachable(matrix) {
    function wrapper(matrix, row, col, m, n) {
        /* Return false if current row and column index are out of bounds or if current cell has water  */
        if ((row < 0 || row >= m) || (col < 0 || col >= n) || matrix[row][col] === 0) {
            return false;
        }
        /* Return true if the person has reached (m-1, n-1) cell  */
        if (row === m - 1 && col === n - 1) {
            return true;
        }
        const temp = matrix[row][col];
        /* Immerse the current cell in water to prevent person navigating back to this cell */
        matrix[row][col] = 0;
        /* Navigate in all the four directions */
        const result = (
            wrapper(matrix, row + 1, col, m, n) ||
            wrapper(matrix, row - 1, col, m, n) ||
            wrapper(matrix, row, col + 1, m, n) ||
            wrapper(matrix, row, col - 1, m, n)
        );
        /* Assign the cell back to it's previous value */
        matrix[row][col] = temp;
        return result;
    }
    /* Start the navigation from top-left cell (0, 0). Return true / false based on the navigation */
    return wrapper(matrix, 0, 0, matrix.length, matrix[0].length);
}

const matrix = [
    [1, 0, 0, 0, 0],
    [1, 1, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1]
];

console.log(isTargetReachable(matrix));