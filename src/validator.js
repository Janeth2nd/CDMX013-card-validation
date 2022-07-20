const validator = {
  isValid: function(cardNumber1) {
    let ccNumber = cardNumber1
  let ccNumberSplit = ccNumber.split("")
  let sum = 0;
  let singleNums = []   //vacío, porque aquí es donde pondrá el resultado
  let doubleNums = []
  let resultArray = undefined;
  let validCard = false;



  //if(ccNumber.length === 16){
     for(let i = ccNumberSplit.length-1; i>=0; i--){   //Número negativo para comenzar de derecha a izquierda (últimos números)
                                                      // Para comenzar de derecha a izq: Se resta 1 a la longitud, sino se resta, nos dará un índice inexistente
                                                     // i>=0;continuación de ciclos con esto se llega al extremo izquierdo
                                                    // i-- se decrementa la variable y se hace el recorrido, ejemplo 54321

        if(i % 2 !== 0){
           singleNums.push(ccNumberSplit[i]);  /*El método push añade uno o más elementos al final de un array y devuelve
                                                la nueva longitud del array.*/
        }else{
           doubleNums.push((ccNumberSplit[i] * 2).toString());
        }
     }                                                //toString: convierte el objeto a string,Devuelve una cadena que representa al objeto.
                                                      //en js podemos convertir tipos de datos, ejemplo: un number a un string
  //}
                                                      //joining makes an array to a string and I split them up again
                                                      //so that every number is a single digit and convert back to array

  doubleNums = doubleNums.join("").split("");    //El método join une todos los elementos de una matriz  en una cadena y devuelve esta cadena.
  resultArray = doubleNums.concat(singleNums);   /*El método concat no altera el array original, ni ninguno de los que fueron
                                                   ingresados como parámetros, sino que devuelve una copia superficial que contiene copias de los mismos
                                                   elementos de los arrays originales combinados. une uan variable con otra. (no suma) */


  for(let j = 0; j<resultArray.length; j++){  //el array parará hasta que j llegue a la longitud solicitada
     sum += parseInt(resultArray[j]);
  }

  if(sum % 10 === 0){   //Suma total entre 10.
     validCard = true;
  }


  console.log(sum);  //Visualiza la suma total en la consola.
  return validCard;
  }
};

export default validator;
