let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let a = ''; 
        for (let j = 0; j < matrix[i].length; j++) {
            a += matrix[i][j] + ' ';  
        }
        console.log(a);  
    }
}
printMatrix(matrix);
