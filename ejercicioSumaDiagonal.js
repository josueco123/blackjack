function setMatrixEspiral(n){

	let count = 1;
	let aux;

	let matrix = new Array(n); // se inicializa el arreglo
	for(let x = 0; x < matrix.length; x++){// se realiza la definicion para que sea matriz
		matrix[x] = new Array(n); 
	}

	   if(n % 2 != 0) {//verifica que el tamaño de la matriz sea impar (este recorrido solo funciona con matrices de tamaño impar)
			aux = Math.trunc(n/2);//se define un auxiliar como punto central de la matriz  
			for(let i = 0; i < n/2+1; i++) {
				 for(let j = aux-(1+i); j < aux+(1+i); j++) {//llena la matriz hacia la derecha
					 if(count==n*n+1){break;}
					 matrix[aux-i][j+1] = count;
					count++;
				}
			   if(count == n*n+1){ break; }// el valor maximo de la matriz es n*n, termina el ciclo cuando el contador ee mayor a este numero
				for(let j = aux-(1+i); j < aux+i; j++) {//llena la matriz hacia la abajo
					matrix[j+2][aux+(1+i)] = count;
					count++;
				}
				 for(let j = aux+i ; j > aux-(2+i); j--){//llena la matriz hacia la izquierda
					matrix[aux+(i+1)][j] = count;
					count++;
				}
				   for(let j = aux+i; j > aux-(1+i); j--){//llena la matriz hacia la arriba
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
			
			if(i==j && (i != ((matriz.length-1)/2) && (j != ((matriz.length-1)/2)))){
				sumaDiagonal +=matriz[i][j]; //suma los valores de la diagonal de izquierda a derecha exceptuando el 1 central
			}
			
			if((i+j) == (matriz.length-1)){
				 sumaDiagonal +=matriz[i][j]; //suma los valores de la diagonal de derecha a izquierda
			}
			
		}
	}
	return sumaDiagonal;
}

const matrix = setMatrixEspiral(1003); //colocar el tamaño de la matriz 
const suma = sumarDiagonales(matrix);


console.log("la suma de la Diagonal es :"+ suma);
