let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
function diagonalSum(matrix) {
    let n = matrix.length;  
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += matrix[i][i];             
        secondaryDiagonalSum += matrix[i][n - i - 1];   
    }

    if (n % 2 !== 0) {
        let middleElement = matrix[Math.floor(n / 2)][Math.floor(n / 2)];
        return primaryDiagonalSum + secondaryDiagonalSum - middleElement;
    }

    return primaryDiagonalSum + secondaryDiagonalSum;
}

console.log(diagonalSum(matrix)); 