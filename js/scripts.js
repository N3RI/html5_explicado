document.getElementById("demo").innerHTML = "Texto CAMBIADO con JavaScript!";

// ¡Por supuesto! Aquí tienes algunos ejemplos con errores que tus alumnos pueden analizar:

// 1. Sentencia `while` con error:

let i = 0;
while (i < 5)
  console.log(i);
  i++;

// Error: Falta colocar las llaves `{}` alrededor del bloque de código dentro del `while`.

// 2. Sentencia `do` con error:

let x = 1;
do {
  console.log(x);
} while (x < 10)

// Error: Falta colocar el punto y coma `;` después de la condición del `do...while`.

// 3. Sentencia `for` con error:

for (let j = 0; j < 5; j++)
  console.log(j);
    j++;

// Error: Igual que en el ejemplo del `while`, falta colocar las llaves `{}` alrededor del bloque de código dentro del `for`, y hay un incremento adicional de `j` fuera del bucle.

// 4. Sentencia `switch` con error:

let day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's Monday!");
  case "Tuesday":
    console.log("It's Tuesday!");
    break;
}

// Error: Falta el `break` después del primer caso, lo que causará que ambos mensajes se impriman si `day` es "Monday".

// 5. Manejo de variables con error:

const pi = 3.14159;
pi = 3.14;

// Error: Intentar cambiar el valor de una constante (`pi`) después de haberla declarado causará un error.

// 6. Manejo de arrays con error:
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[10]);

// Error: Intentar acceder a un índice inexistente (índice 10 en este caso) causará un valor `undefined`.

