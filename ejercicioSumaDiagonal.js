function setMatrixEspiral(n){

	let count = 1;
	let aux;

	let matrix = new Array(n);
	for(let x = 0; x < matrix.length; x++){
		matrix[x] = new Array(n);
	}

	   if(n % 2 != 0) {
			aux = Math.trunc(n/2); 
			for(let i = 0; i < n/2+1; i++) {
				 for(let j = aux-(1+i); j < aux+(1+i); j++) {
					 if(count==n*n+1){break;}
					 matrix[aux-i][j+1] = count;
					count++;
				}
			   if(count == n*n+1){ break; }
				for(let j = aux-(1+i); j < aux+i; j++) {
					matrix[j+2][aux+(1+i)] = count;
					count++;
				}
				 for(let j = aux+i ; j > aux-(2+i); j--){
					matrix[aux+(i+1)][j] = count;
					count++;
				}
				   for(let j = aux+i; j > aux-(1+i); j--){
					matrix[j][aux-(1+i)] = count;
					count++;
				}
			}
		}
		
		return matrix;
}

function sumarDiagonales(matriz){
	

	let sumaDiagonal = 0;

	for(let i = 0; i < matriz.length; i++){
		for(let j = 0; j < matriz.length; j++){
			
			if(i==j){
				sumaDiagonal +=matriz[i][j];
			}
			
			if((i+j) == (matriz.length-1)){
				 sumaDiagonal +=matriz[i][j];
			}
			
		}
	}
	return sumaDiagonal;
}

const matrix = setMatrixEspiral(1003); //colocar el tamaño de la matriz 
const suma = sumarDiagonales(matrix);


console.log("la suma de la Diagonal es :"+ suma);