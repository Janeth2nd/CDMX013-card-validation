import validator from './validator.js';


//Mensaje de Bienvenida al usuario fn1

function fn1() {
    let str= document.getElementById("text1").value;
    alert ("Bienvenid@ a Play Station Plus:\t\t" + str)
  }  
  
 document.getElementById("submitBtn").addEventListener("click", function(e){
   e.preventDefault();


     /*document.getElementById("resultDiv").innerHTML =  creditLuhn();*/
     let userNumEntry = document.getElementById("userNumContainer").value;
     validator.isValid(userNumEntry)
   }, false); 

   
let containerMask=document.getElementById("userNumContainer") //acceso al dom
let btnMask=document.getElementById("submitBtn") // acceso al dom
btnMask.addEventListener("click", function() {    //función anónima -----  function() //Se agregó un evento al botón  (la función anónima, hace referencia a un objeto)
let maskCreditc= validator.maskify (userNumContainer.value) 
  userNumContainer.value= maskCreditc                                           //invocación            // . punto nos permite entrar a las propiedades de los ejemplos.
} )                                                                 //no se usa () porq no es una función, es una invocación,
                                                                 // es acceder a la variable dentro del objeto, en efecto no se agregan ()


                                                                       /* inner.HTML: Cambia el texto establecido en resultDiv, por lo escrito en creditLuhn.
                                                                        La propiedad Element.innerHTMl devuelve o establece la sintaxis HTML
                                                                        describiendo los descendientes del elemento.
                                                                        Al establecerse se reemplaza la sintaxis HTML del elemento por la nueva.*/





