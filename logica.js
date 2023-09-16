var numero1 = parseInt(prompt("Ingrese el numero deseado : "));
var resultado;
switch (true) {
case (numero1 < 0 || numero1 >= 1000):
    alert("Número no aseptado");
      break;
    case (numero1 > 0 && numero1 < 10):
        resultado = numero1 * numero1;
        alert("TU RESPUESTA ES " + resultado);
         break;
    case (numero1 >= 10 && numero1 < 100):
       resultado = numero1 * 2;
        alert("TU RESPUESTA ES " + resultado);
           break;
    case (numero1 >= 100 && numero1 < 1000):
          resultado = numero1 - 100;
        alert("TU RESPUESTA ES " + resultado);
        break;
    default:

        alert("Número no aseptado");

        break;
.log ("hola mundo")
console .log ("hola como estas")
