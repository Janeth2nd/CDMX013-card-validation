import validator from './validator.js';                                                                //lleva ./ para q lo busque en los módulos locales)
                                                                                                       //importar esa funcionalidad desde validator.js (.js es la extensión)
let botonIniciar=document.getElementById ("INICIAR-SESION");
botonIniciar.addEventListener ("click",function (){
let str= document.getElementById("text1").value;
alert ("Bienvenid@ a Play Station Plus:\t\t" + str)
}) 

  

 
  document.getElementById("submitBtn").addEventListener("click", function() {

  let userNumEntry = document.getElementById("userNumContainer").value;                      //devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto.
  let result=validator.isValid(userNumEntry) 
  const regex = new RegExp('^\\d+$');
  let mensaje;

       if(!regex.test(userNumEntry)) {                                                           //Las llaves{} agrupan las sentencias, haciéndolos valer por una sola.
       mensaje= "¡Ingresa el número de tu tarjeta de cŕedito!"                                   //Una secuencia de sentencias encerradas en {} es llamada un bloque (de código)
    
      
   }  else if (result===true) {
      mensaje= "Tu tarjeta es válida, ¡Disfruta de PSp!";
    
   }  else { 
      mensaje= "Tu tarjeta es inválida, inténtalo de nuevo.";
  
   }  alert (mensaje);

   }); 

  
 
   
let containerMask=document.getElementById("userNumContainer")                                                    //acceso al dom
let btnMask=document.getElementById("submitBtn")                                                                  // acceso al dom
btnMask.addEventListener("click", function() {                                                                   //función anónima -----  function() //Se agregó un evento al botón  (la función anónima, hace referencia a un objeto)
let maskCreditc= validator.maskify (containerMask.value) 
containerMask.value= maskCreditc                                                                   //invocación            // . punto nos permite entrar a las propiedades de los ejemplos.
} )                                                                                 //no se usa () porq no es una función, es una invocación,
                                                                                                               // es acceder a la variable dentro del objeto, en efecto no se agregan ()                                                 