let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


function sumOfRows(matrix) {
    let rowSums = [];  
    for (let i = 0; i < matrix.length; i++) {
        let rowSum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            rowSum += matrix[i][j];
        }
        rowSums.push(rowSum);  
    }

    return rowSums; 
}


let rowSums = sumOfRows(matrix);
console.log(rowSums); 