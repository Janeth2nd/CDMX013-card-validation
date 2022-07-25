// Encargado de controlar toda la lógica

const validator = { 
   isValid: function(creditCardNumber) {
         let ccNumberSplit = creditCardNumber.split("")
         let sum = 0;
         let singleNums = []   //vacío, porque aquí es donde pondrá el resultado
         let doubleNums = []
         let resultArray = undefined;
         let validCard = false;

         console.log(ccNumberSplit)
       
         
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
            }   
            console.log(singleNums)                                             //toString: convierte el objeto a string,Devuelve una cadena que representa al objeto.
                                                             //en js podemos convertir tipos de datos, ejemplo: un number a un string
         //
                                                             //undiendolos se convierte de array a string y con split se vuelven a separar.
                                                             //ahora cada numero está separado y vuelven a ser un array.
        
        doubleNums = doubleNums.join("").split("");                                                 //El método join une todos los elementos de una matriz  en una cadena y devuelve esta cadena.
         resultArray = doubleNums.concat(singleNums);   /*El método concat no altera el array original, ni ninguno de los que fueron
                                                          ingresados como parámetros, sino que devuelve una copia superficial que contiene copias de los mismos
                                                          elementos de los arrays originales combinados. une uan variable con otra. (no suma) */
       
         console.log(resultArray)
         for(let j = 0; j<resultArray.length; j++){  //el array parará hasta que j llegue a la longitud solicitada
            sum += parseInt(resultArray[j]);
            console.log (sum)
         }
       
         
         if(sum % 10 === 0){
          validCard = true ;
          console.log(validCard)
          return validCard 
                                           // (validator.isValid(creditCardNumber) === true)
       } else {
         validCard=false
         console.log(validCard)
         return validCard 
       }

       //console.log(sum);                      //Visualiza la suma total en la consola.

       },
       
       
      
    
                                                                              /* inner.HTML: Cambia el texto establecido en resultDiv, por lo escrito en creditLuhn.
                                                                               La propiedad Element.innerHTMl devuelve o establece la sintaxis HTML
                                                                               describiendo los descendientes del elemento.
                                                                               Al establecerse se reemplaza la sintaxis HTML del elemento por la nueva.*/
       
       
      
   


   maskify: function(creditCardNumber){ console.log(creditCardNumber)   
                      //creo mi función y agrego un parámetro. parámetros son valores que podemos usar dentro  una función.
       
       let maskNumber=""
     
       if(creditCardNumber.length >4) {
         maskNumber="#".repeat(creditCardNumber.length -4) + creditCardNumber.slice(-4)
         console.log(typeof maskNumber)
         return  maskNumber
       

       }
      // let transformNumber = creditCardNumber.replace(numertoReplace, "#".repeat(numertoReplace.length));
      // console.log(transformNumber);
      // return transformNumber; 
        }, 

}; 

export default validator;
  


