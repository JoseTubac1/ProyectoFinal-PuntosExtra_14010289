//Variables utiles 
//Precio base de la cotización, en quetzales.
var precio_base = 2000
//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%
//Valores de recargos por edad del conyuge
var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%
//Valores de recargo por cantidad de hijos
var hijos_recargo = 0.2 // 20%
//Recargo
var recargo = 0
var recargo_total = 0
//Precio final 
var precio_final = 0
//Variable de retorno para el DoWhile
var continuacion = true

do{
  //Mensajes de alerta para ingresar datos 
  var nombre = prompt("Ingrese su nombre completo, por favor")
  var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")

  var casado = prompt("¿Está casado actualmente? SI/NO")
  //Comprobamos la edad del cónyuge, solamente si se está casado/a
  var edad_conyuge
    if("SI" == casado.toUpperCase()){
      dad_conyuge = prompt("¿Que edad tiene su esposo/a?")
    }
  //convirtiendo las edades ingresadas a números 
  var edad_numero = parseInt(edad)
  var edad_conyuge_numero = 0
  //convirtiendo la edad del cónyuge si se esta casado/a
    if("SI" == casado.toUpperCase()){
      edad_conyuge_numero = parseInt(edad_conyuge)
    }

  var hijos = prompt("¿Tiene hijos o hijas? SI/NO")
  //Comprobamos la cantidad de hijos solamente si los tienen
  var cantidad_hijos
    if("SI" == hijos.toUpperCase()){
      cantidad_hijos = prompt("Cuanto hijos tiene? Ingrese solamente números ")
    }
  //convirtiendo la cantidad de hijos a numero
  var cantidadhijos = parseInt(hijos)
  var cantidad_hijos_numero = 0
  //convirtiendo la cantidad de hijos ingresada
    if("SI" == hijos.toUpperCase()){
      cantidad_hijos_numero = parseInt (cantidad_hijos)
    }

  //Aquí debe calcular el recargo total basado en las respuestas ingresadas
  //Aquí es donde debe de calcular los recargos y el valor final


  //Recargo por edad del asegurado 
  //Calculamos el recargo en base a la edad ingresada, se realiza el calculo segun la condicion a ejecutar
    if(edad_numero>=18 && edad_numero<25){
    //Sumamos todos los recargos que hemos obtenido
      recargo = precio_base * edad_18
      recargo_total = recargo_total + recargo
    } else if (edad_numero >= 25 && edad_numero < 50) {
    //Sumamos todos los recargos que hemos obtenido
      recargo = precio_base * edad_25
      recargo_total = recargo_total + recargo
    } else if (edad_numero >= 50) {
    //Sumamos todos los recargos que hemos obtenido
      recargo = precio_base * edad_50
      recargo_total = recargo_total + recargo
    }

  //Recargo por la edad dl conyuge 
    if ("SI" == casado.toUpperCase()) {
      //Calculamos el recargo en base a la edad del conyuge, se realiza el calculo segun la condicion a ejecutar
      if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
        //Sumamos todos los recargos que hemos obtenido
          recargo = precio_base * casado_18;
          recargo_total = recargo_total + recargo;
      } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
        //Sumamos todos los recargos que hemos obtenido
          recargo = precio_base * casado_25;
          recargo_total = recargo_total + recargo;
      } else if (edad_conyuge_numero >= 50) {
        //Sumamos todos los recargos que hemos obtenido
          recargo = precio_base * casado_50;
          recargo_total = recargo_total + recargo;
      }
    }

  //Recarog por la cantidad de hijos ingresada
    if (cantidad_hijos_numero > 0) {
      //Sumamos todos los recargos que hemos obtenido
      recargo = precio_base * hijos_recargo * cantidad_hijos_numero;
      recargo_total = recargo_total + recargo;
    } 


    precio_final = precio_base + recargo_total
  //Resultado
  alert ("Para el asegurado "+nombre)
  alert ("El recargo total sera de: "+recargo_total)
  alert ("El precio sera de: "+precio_final)

    var continar_entrada = prompt("Ingrese ¨1¨ para continuar o ¨salir¨ para cerrar el cotizador")
    if (continar_entrada.toUpperCase == "SALIR"){
        continuacion = false
    } else if (continar_entrada !== "1") {
      alert("Usted Ingreso una opcion Invalida")
    }


} while (continuar)
