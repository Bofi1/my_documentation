// -------------------------- variables -------------------------- //

let uno;        // "let" tu puedes cambiar el valor y no hace falta INICIALIZAR
const dos = 1;  // "const" NO puedes cambiar el valor y AHUEVO la tienes que INICIALIZAR





// -------------------------- booleanos -------------------------- //

let onSale = true;  // verdadero
let onSalee = false; // falso

// cualquier cosa lo puedes convertir a booleano usando lo siguiente 
console.log(Boolean()) 

// ej.
console.log(Boolean(100)) // = true


// truthy & falsy

    // estos son todos lo valores falsy (false)

        // false
        // null
        // undefined
        // 0
        // -0
        // NaN
        // An empty string ('')


    // estos son todos lo valores truthy (true)

        // todo lo que no estaaba en la lista falsy es truthy



// -------------------------- operadores -------------------------- //

// devuelve un valor booleano

==      // igualdad (no importa el tipo de variable)
===     // igualdad triple (si importa el tipo de variable)

!=      // no igualdad (no importa el tipo de variable)
!==     // no igualdad doble (si importa el tipo de variable)

>       // mayor q
=>      // mayor o igual q

<       // menor q
=<      // menor o igual q

&&      // and (los dos tienen q ser true para que devuelva TRUE)

||      // or (minimo UNO tiene que ser true para que devuelva TRUE)


+       // suma
-       // resta
*       // multiplicacion
/       // division
**      // potencia
%       // residuo






// -------------------------- strings -------------------------- //

" "  ' '  ``    // forma de hacer un string

typeof          // este devuelve que tipo de variable es (number, string, object, undefined, etc)

str1 + str2     // concatenar strings    

${variable}     // esto es igual que "texto + variable + texto texto" (es para ahorrarse poner tantos '' y +)








// -------------------------- condicionales -------------------------- //


if(){       // if (si se cumple esto pasa esto)

}      


if(){       // if else (si se cumple esto pasa esto, sino, pasa esto)

} else{

}


if(){       // else if (si se cumple esto pasa esto, sino, pasa esto, sino, pasa esto)

} else if{

} else {

}


condición ? expr1 : expr2   // ternario (version simple de if)
//   if     {   }   else







// -------------------------- funciones -------------------------- //

// asi es como funciona una funcion

function logMessage() {
    console.log('Hello world!');
  }

  // o

  const logMessageTwo = function() {
    console.log('Great, thanks!');
  }



// tambien puedes devolver valores con RETURN()

function func() {
    return 5;
  }
   
  const result = func(); // importante no olvidar el ()
   
  console.log(result);


// todo lo que este despues de RETURN se va a ignorar

function func() {
    return 5;
    console.log("I will not be logged.");
  }
   
  const result = func();
   
  console.log(result); // 5






// PARAMETROS en funciones

function square(x) {
    return x * x;
  }
        // aqui pones dentro () el valor q va tomar x
  console.log(square(2)); // 4
  console.log(square(5)); // 25
  console.log(square(11)); // 121

        // ESTOS SON EJEMPLO, MUY IMPORANTES PARA Q ENTIENDAS
            
        
        
        function logX(x = 'hello') {
              console.log(x);
            }

            logX('hi'); // hi
            logX(); // hello

            // -----------




            function connect(a, b = 'people') {
                return a + ' ' + b;
              }
               
              const result = connect('hello');
               
              console.log(result); // hello people
            
            // -----------




            const b = 'caro'; // no cambia porq es CONST
            function connect(a, b = 'people') {
              return a + ' ' + b;
            }
             
            const result = connect('hello', b);
             
            console.log(result); // hello caro

            // -----------




            const b = 'caro'; 
            function connect(a, b = 'people') {
              return a + ' ' + b;
            }
             
            const result = connect('hello' + b);
             
            console.log(result); // hellocaro people

            // -----------




            const func = function (a, b) {
                return b + a;
             };
              
             const result = func(' world', 'hello');
              
             console.log(result); // hello world

             // ------------




             const func = function (num) {
                if (num < 5) {
                    return;
                }
                return num * num
             };
              
             const result = func(5);
              
             console.log(result); // 25

             // -------------




             function multiply(x, y = 5) {
                return x * y;
              }
               
              const result = multiply(6, 4);
               
              console.log(result); // 24

// --------------------------------------------------- //



// -------------------------- arrays -------------------------- //

const strings = ["a", "b", "c"];      // ejemplo de array [0,1,2,3,4,5] la primer posicion es 0
const numbers = [1, 2, 3];
const mixed = ["a", 2, false];
const empty = [];

const arrays = [[1, 2, 3]];           // tambien puedes poner uno sobre otro

arrays.length                         // muestra cuanto es el tamaño del array

  // ejemplo de como usar length 
  // (obtener el ultimo valor de un array)
      const arrOne = [1, 2, 3, 4];  
      const arrTwo = ['a', 'b', 3, 1, 'c'];

      const getLast = function (arr) {
         return arr[arr.length - 1];  // <----
      }

      console.log(getLast(arrOne), getLast(arrTwo));


    // -----------
    const arr = [1, 2, 3, 4];
    const index = arr.indexOf(2); // 1
    
    console.log(arr[index] === 2); // arr[1] === 2 es igual a true







    // -------------------------- objetos -------------------------- //


    const person = {        // como crear un objeto
      age: 30,
      name: 'John',
      gender: 'male'
  };




  const person = {          // como llamarlo
    age: 30,
    name: 'John',
    gender: 'male'
};


const person = {            // puedes meter objetos dentro de otros
  name: 'Alice',
  age: 27,
  address: {
    street: 'Elm',
    city: 'NY',
    state: 'NY',
    zip: '10001'
  }
};

console.log(person.address.state); // 'NY'
 
console.log(person.age); // 27



const person = {              // puedes agregar propiedades a un objeto despues
  age: 30,
  name: 'John',
  gender: 'male'
};
person.job = 'developer';
console.log(person.job);


delete person.age;          // tambien puedes eliminar propiedades






    // -------------------------- scope -------------------------- //


          // global scope --> function scope --> block scope

  // scope & GLOBAL scope

// lo que esta dentro de la funcion de se conoce como scope (todo lo que este adentro nomas existira de forma local ahi adentro)

function logTest() {
  const test = 'Hello World';
  console.log(test);
}
logTest();          //compila bien
console.log(test);  // da error porq trato de llamar a una funcion que estba en scope (osea de forma local en una variable)


// ---- BLOCK scope

      // es toda aquella que hace que lo que este adentro sea global
      // ejemplo

          // lo mejor seria que todo lo que este { } todo dentro de esto ya es un scope (osea algo guardado de fomra local)


                                const x = 10
                                {
                                 // block scope
                                 const x = 5;
                                 console.log(`Value of local x = ${x}`);
                                }
                                console.log(`Value of global x = ${x}`);


                // Conditional statements

                if (true) {
                 // block scope
                }

                // for loop
                for (let i = 0; i < 5; i++) {
                 // block scope
                }

                // while loop
                while (true) {
                 // block scope
                }


                // ejemplos resumidos


                function func() {       // scope usando funciones
                  // function scope
                  const localVar = "I'm only visible within the scope of func."
               }



               {                      //  block scope
                  // block scope
                  const localVar = "I'm only visible within the scope of the block."
               }


// ---------- functions II ---------- //


...args		// -----> (rest parameters) cuando hay mas parametros tomara todo los que tu tengas, puede ser cualquier variable 
          // pero tiene que tener los 3 puntitos al principi ( ...x ) y todo lo que de resultado de  ( ...x ) se en pondra dentro de "[ ]"
	//ej. 
	function func (x, ...rest) {
	console.log (x, rest);
	}
	
	func(1, 2);	// 1, [2]
	func(10, 5, 1);	// 10, [5,1]
	func(5);	// 5, []    ----> si no hay parametros aparece vacio


arrow functions	// ----> simplificas las sintax de las funciones

// ej. arrow functions

// function expression
let logMessage = function() {
  return 'How are you?';
}
console.log(logMessage()); // How are you?


// arrow function
logMessage = () => {
  return 'How are you?';
}
console.log(logMessage()); // How are you?

// arrow function mas simplicado, esto significa q simplificas el RETURN
logMessage 0 = () => 'How are you?';
console.log(logMessage()); // How are you?



//otra forma de simplicar un funcion

(num) => {
  const multiplier = 5;
  return num * multiplier;
}

// o

(num) => {;
  return num * 5;
}

// o

(num) => num * 5;

num => num * 5;




    // -------------------------- asynchronous (setTimeOut)  -------------------------- //

    // JavaScript es de un solo hilo, esto se refiere a que corre el programa de una sola 
    // forma (osea es de un solo carril y solo puede pasar un carro pero pueden pasar mucho pero solo uno por uno)
    // por ende se va a esperar a generar todo de uno por uno, y si una funcion tarda mucho va a esperar hasta q esa funcion ejecute para seguir el codigo

    // para eso esta el SetTimeOut
    
    // esta recibe una funcion y el tiempo de esprar para que esta funcion se realice
      // le puedes poner 0 de tiempo pero SI ESTA DENTRO DE SetTimeOut JavaScript la va a considerar HASTA EL FINAL aunque si tiempo de espera sea de CERO (0)


     // EJEMPLO 1

     function pause() {
      const start = new Date().getTime();
      while (new Date().getTime() - start < 3000);
      console.log('Hello!');
    }
     
    pause();
    console.log('Another log message.');    // este ejemplo de lo que pasa si no se usa SetTimeOut (tenemos que esperar a que la funcion se ejecute que va a tardar 3segundos o 3000 milisegundos


    //EJEMPLO 2

    function func() {
      console.log('Hello!');
     }
     setTimeout(func, 3000);
     console.log('Another log message.');   // aqui se muestra como usar el SetTimeOut correctamente (primero se ejecuta el console.log y despues el setTimeout)

     // ------- callback -------------- // 
    // (no se entendio muy  bien pero se dejara un link donde se explique mejor)


         // ------- promesas -------------- // 
    // (no se entendio muy  bien pero se dejara un link donde se explique mejor)
    
























