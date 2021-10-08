/**
 * [
 [1, 0, 0, 0, 0],
 [1, 1, 0, 1, 0],
 [0, 1, 1, 1, 0],
 [0, 0, 0, 1, 0],
 [1, 1, 1, 1, 1]
 ]
 */

function isTargetReachable(matrix) {
    function wrapper(matrix, row, col, m, n) {
        if ((row < 0 || row >= m) || (col < 0 || col >= n) || matrix[row][col] === 0) {
            return false;
        }
        if (row === m - 1 && col === n - 1) {
            return true;
        }
        const temp = matrix[row][col];
        matrix[row][col] = 0;
        const result = (
            wrapper(matrix, row + 1, col, m, n) ||
            wrapper(matrix, row - 1, col, m, n) ||
            wrapper(matrix, row, col + 1, m, n) ||
            wrapper(matrix, row, col - 1, m, n)
        );
        matrix[row][col] = temp;
        return result;
    }
    // 0, 0
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