const validator = { 
   isValid: function(creditCardNumber) {
         let ccNumberSplit = creditCardNumber.split("")
         let sum = 0;
         let singleNums = []                                          //vacío, porque aquí es donde pondrá el resultado
         let doubleNums = []
         let resultArray;
         let validCard;

         console.log(ccNumberSplit)
       
         
         for(let i = ccNumberSplit.length-1; i>=0; i--){                                     //Número negativo para comenzar de derecha a izquierda (últimos números)
        // console.log(ccNumberSplit)                                                       // Para comenzar de derecha a izq: Se resta 1 a la longitud, sino se resta, nos dará un índice inexistente
                                                                                           // i>=0;continuación de ciclos con esto se llega al extremo izquierdo
         if(i % 2 !== 0){                                                                 // i-- se decrementa la variable y se hace el recorrido, ejemplo 54321
                                                                              
           singleNums.push(ccNumberSplit[i]);                                         //posiciones impares.   //El método push añade uno o más elementos al final de un array y devuelve
        //console.log(singleNums)                                                      //la nueva longitud del array.
         }else{
        doubleNums.push((ccNumberSplit[i] * 2).toString());                         //Posiciones pares *2           
                                                                                  //toString: convierte el objeto a string,Devuelve una cadena que representa al objeto.
                                                                                              //en js podemos convertir tipos de datos, ejemplo: un number a un string
           }
         }   
        
         console.log(doubleNums)
                                                                 
                                                                                   //undiendolos se convierte de array a string y con split se vuelven a separar.
          
         doubleNums = doubleNums.join("").split("");                               // El método join une todos los elementos de una matriz  en una cadena y devuelve esta cadena. 
        console.log(doubleNums)                                                   // Une a todos los números de posición par, y los separa, ejemplo:result de sum es [12], ahora será [1], [2].
         resultArray = doubleNums.concat(singleNums);
         console.log(resultArray)                                                  /*El método concat no altera el array original, ni ninguno de los que fueron
                                                                                     ingresados como parámetros, sino que devuelve una copia superficial que contiene copias de los mismos
                                                                                     elementos de los arrays originales combinados. une uan variable con otra. (no suma) */
                                                                                                           
       
        
         for(let j = 0; j<resultArray.length; j++){                                   //el array parará hasta que j llegue a la longitud solicitada
            sum += parseInt(resultArray[j]);
           console.log (sum)                                                       
         } 
       
         
         if(sum % 10 === 0){
          validCard = true ;
          //console.log(validCard)
          return validCard 
                                           
         } else {
         validCard=false;
        // console.log(validCard)
         return validCard 
           }      

         },

                                                                 
         maskify: function(creditCardNumber){ console.log(creditCardNumber)
                                                                                              //creo mi función y agrego un parámetro. 
                                                                                             //parámetros son valores que podemos usar dentro  una función.
       
         let maskNumber=""
         if(!!creditCardNumber && creditCardNumber.length >4) {                             // the !! will force anything that shows up on the right side to be either 1 or !1
         maskNumber="#".repeat(creditCardNumber.length -4) + creditCardNumber.slice(-4)
         console.log(typeof maskNumber)
         return  maskNumber
       
        }
        return ""
       
     
        }, 

        }; 

   export default validator;
  
// Encargado de controlar toda la lógica

