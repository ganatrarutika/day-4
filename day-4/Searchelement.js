let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

function searchElement(matrix,target){
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix.length; j++){
            if(matrix[i][j]===target){
                return [i,j];
            }
        }
    }
    return null;
}

let result = searchElement(matrix,8);

console.log(result)
