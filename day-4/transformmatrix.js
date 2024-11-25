let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function transposeMatrix(matrix) {

    let transposedMatrix = [];

    for (let col = 0; col < matrix[0].length; col++) {
        let a = [];

        for (let row = 0; row < matrix.length; row++) {
            a.push(matrix[row][col]);
        }
        transposedMatrix.push(a);
    }
     return transposedMatrix;
}
let transposed = transposeMatrix(matrix);

console.log(transposed);


