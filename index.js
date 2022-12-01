/*
-> QUÉ ES UNA FUNCIÓN 

Las funciones nos permiten encapsular (guardar) bloques de código para
reutilizarlos y ejecutarlos en el futuro.

function nombreCompleto (name, lastName) {
    return name + ' ' + lastName;
}

console.log(nombreCompleto('Iris', 'Alcachofa'))

-> CUANDO ME SIRVE USAR UNA FUNCIÓN EN MI CÓDIGO

Nos sirve cuando tenemos variables o bloques de código muy parecidos  (con
    cambios que podrían ser parametros y argumentos) que podemos encapsular
    para reutilizar más de una vez en el futuro.

Tambien nos sirve para ordenar y mejorar la legibilidad de nuestro código.

->CUÁL ES LA DIFERENCIA ENTRE PARÁMETROS Y ARGUMENTOS DE UNA FUNCIÓN?

Los parametros son lo que recibe una función cuando la estamos creando

Los argumentos son lo que enviamos cuando las ejecutamos 

*/

/*
-> QUÉ ES UN CONDICIONAL?

Son la forma en que ejecutamos un bloque de codifo u otro dependiendo de 
alguna condiciones o validación

-> QUÉ TIPOS DE CONDICIONALES EXISTEN EN JAVASCRIPT Y CUALES SON SUS
DIFERENCIAS?

If(else y else if), switch

El condicional IF nos permite validaciones completamente distintas si así
quedremos en cada validación o condicional.

En cambio, el switch todos los cases se comparan con la misma variable o
condicion que definimos en el switch.

-> PUEDO COMBINAR FUNCIONES Y CONDICIONALES?

Si. Las funciones pueden encapsular cualquier bloque de código, incluyendo
condicionales.


const tipoDeSuscripcion= "ExpertDuo";
if(tipoDeSuscripcion === 'Free'){
    console.log("solo puedes tomar los cursos gratis")
}else if(tipoDeSuscripcion === 'Basic'){
    console.log("Puedes tomar casi todos los cursos durante un mes")
}else if(tipoDeSuscripcion === 'Expert'){
    console.log("Puedes tomar casi todos los cursos durante un año")
}else if(tipoDeSuscripcion === 'ExpertDuo'){
    console.log("Tu y alguien mas pueden tomar todos los cursos durante un año")
}

*/

/*
-> QUE ES UN CICLO?

La forma de ejecutar un vloque de código hasta que se cumpla cierta condición

-> QUÉ TIPOS DE CICLOS EXISTEN EN JAVASCRIPT?

While, for, Do..While

->  QUÉ ES UN CICLO INFINITO Y POR QUÉ ES UN PROBLEMA?

Es cuando la validacion de nuestros condicionales nunca se cumple
y termina dañando la aplicación 

-> PUEDO MEZCLAR CICLOS Y CONDICIONALES?

Si. aunque los ciclos son una especie de condicionales, nada nos impide
agregar más condicionales dentro del ciclo


*/


/*

-> QUÉ ES UN ARRAY?

Es una lista de tipo objeto que contiene elementos

const array= [1, 'jaja', true, false, {name: 'Juan', apellido: 'Juanes'}]

->QUÉ ES UN OBJETO?

Es una lista de elementos pero cada elemento tiene un nombre clave(key,value)

const obj ={ 
    nombre:'Juan',
    edad: 3
}

->CUÁNDO ES MEJOR USAR OBJETOS O ARRAYS?

Arrays cuando lo que haremos en un elemento es lo mismo que en todos los
demás (la regla se puede incumplir).Mientras que un objeto cuando los nombres
de cada elemento son importantes para nuestro algoritmo.


->PUEDO MEZCLAR ARRAYS CON OBJETOS O INCLUSO OBJETOS CON ARRAYS?

Si. Los arrays pueden guardar objetos. Y los objetos pueden guardar arrays
entre sus propiedades.

->CREA UNA FUNCIÓN QUE PUEDA RECIBIR CUALQUIER ARRAY COMO PARÁMETRO E IMPRIMA
SU PRIMER ELEMENTO.

function imprimirElemento (arr) {
    primerElemnto = arr[0];
    return primerElemento;
}
imprimirElemento(['Sofi','Juan','Panchis']);


->CRREA UNA FUNCIÓN QUE PUEDA RECIBIR CUALQUIER ARRAY COMO PARÁMETRO E
IMPRIMA TODOS SUS ELEMENTOS UNO POR UNO (NO SE VALE IMPRIMIR EL ARRAY
COMPLETO).

function imprimirElementoPorElemento (arr) {
    for (let i=0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

imprimirElementoPorElemento(['uno', 'dos', 'tres,'cuatro'])

->CREA UNA FUNCIÓN QUE PUEDA RECIBIR CUALQUIER OBJETO COMO PARÁMETRO E
IMPRIMA TODOS SUS ELEMENTOS UNO POR UNO(NO SE VALE IMPRIMIR EL OBJETO
COMPLETO)

const obj= {
    name: 'pepe',
    lastname: 'pecas',
    job:'pica papas',
    herramienta: 'con un pico'
}

const arr = Object.values(obj);
function imprimirElementoPorElementoObjeto (arr) {
    for (let i=0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
imprimirElementoPorElementoObjeto(arr)

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertDuo":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

if(tipoDe)

})
*/