import validator from './validator.js';

let botonIniciar=document.getElementById ("INICIAR-SESION");
botonIniciar.addEventListener ("click",function (){
  let str= document.getElementById("text1").value;
    alert ("Bienvenid@ a Play Station Plus:\t\t" + str)
}) 

  
 /*document.getElementById("submitBtn").addEventListener("click", function(e){
   e.preventDefault();         */                                                // preventDefault: Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, 
                                                                               //es decir, puede ser llamado de nuevo.

     
     /*let userNumEntry = document.getElementById("userNumContainer").value;
      let result=validator.isValid(userNumEntry) 
    let mensaje;
    if (result===true) {
      mensaje= "Tu tarjeta es válida, ¡Disfruta de PSp!";
    } else {
      mensaje= "Tu tarjeta es inválida, inténtalo de nuevo.";
  
    } alert (mensaje);

   }, false); */
   document.getElementById("submitBtn").addEventListener("click", function() {

   let userNumEntry = document.getElementById("userNumContainer").value;
    let result=validator.isValid(userNumEntry) 
    const regex = new RegExp('^\\d+$');
    let mensaje;

    if(!regex.test(userNumEntry)){
      mensaje= "¡Ingresa el número de tu tarjeta de cŕedito!"
    
      
    }  else if (result===true) {
      mensaje= "Tu tarjeta es válida, ¡Disfruta de PSp!";
    
    } else {
      mensaje= "Tu tarjeta es inválida, inténtalo de nuevo.";
  
    } alert (mensaje);

   },false); 

  
 
   
let containerMask=document.getElementById("userNumContainer")     //acceso al dom
let btnMask=document.getElementById("submitBtn")                 // acceso al dom
btnMask.addEventListener("click", function() {                 //función anónima -----  function() //Se agregó un evento al botón  (la función anónima, hace referencia a un objeto)
let maskCreditc= validator.maskify (containerMask.value) 
containerMask.value= maskCreditc                                     //invocación            // . punto nos permite entrar a las propiedades de los ejemplos.
} )                                                                 //no se usa () porq no es una función, es una invocación,
                                                                   // es acceder a la variable dentro del objeto, en efecto no se agregan ()                                                 