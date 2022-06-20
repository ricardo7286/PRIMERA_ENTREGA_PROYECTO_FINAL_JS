// MENU PRINCIPAL

alert("Hola Soy Ricardo Hernandez y esta es mi Primera Entrega del Proyecto final");
  
alert("Bienvenido al Sistema de Gestion Integral Electrónico de Pacientes");

  menuPrincipal();

  function menuPrincipal(){//MENU PRINCIPAL
    let opcion = prompt("Ingrese una opcion: \n 1. Sistema de expediente electronico \n 2. Calculadoras medicas \n 3. TPV en Farmacia \n 4. Salir");
    switch(opcion){
      case "1":
        sistema();
        menuPrincipal();
        break;
      case "2":
        calculadoras();
        menuPrincipal();
        break;
      case "3":
        alert("TPV en Farmacia en construccion");
        //tpv();
        menuPrincipal();
        break;
      case "4":
        alert("Gracias por utilizar el sistema");
        break;
      default:
        alert("Opcion no valida");
        menuPrincipal();
        break;
    }
  }

//---------------------------------------------------------------------------------------------------------------------
//SECCION DE EXPEDIENTE ELECTRONICO
//---------------------------------------------------------------------------------------------------------------------

  class paciente {//CLASE PACIENTE
    constructor(nombre, apellidoPaterno, apellidoMaterno, fechaNac, sexo, diagnostico, ta, fc, fr, spo2, notaEvolucion) {//CONSTRUCTOR DE LA CLASE PACIENTE
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.fechaNac = fechaNac;
        this.sexo = sexo;
        this.diagnostico = diagnostico;
        this.ta = ta;
        this.fc = fc;
        this.fr = fr;
        this.spo2 = spo2;
        this.notaEvolucion = notaEvolucion;
    }
  }
  const pacientes = [];
  
  function sistema(){//MENU DE EXPEDIENTE ELECTRONICO
    let opcion = prompt("¿Qué desea hacer?\n\n1. Registrar nuevo paciente\n2. Consultar pacientes registrados\n3. Buscar paciente\n4. Eliminar paciente\n5. Modificar paciente\n6. Salir");
    switch(opcion){
      case "1":
        registrarPaciente();
        sistema();
        break;
      case "2":
        mostrarPacientes();
        sistema();
        break;
      case "3":
        buscarPaciente();
        sistema();
        break;
        case "4":
        eliminarPaciente();
        sistema();
        break;
        case "5":
        modificarPaciente();
        sistema();
        break;
        case "6":
        alert("Gracias por utilizar el sistema");
        menuPrincipal();
        break;
        default:
        alert("Opción no válida");
        sistema();
        break;
    }
  }
  
  function registrarPaciente() {//Registra un nuevo paciente
    let nombre = prompt("Nombre del paciente");//Nombre del paciente
      while(nombre == null || nombre == "" || nombre.length > 20 || nombre.length < 3){
        alert("El nombre es inválido");
        nombre = prompt("Nombre del paciente");
      }
    let apellidoPaterno = prompt("Apellido paterno del paciente");//Apellido paterno del paciente
      while(apellidoPaterno == null || apellidoPaterno == "" || apellidoPaterno.length > 20 || apellidoPaterno.length < 3){
        alert("El apellido paterno es inválido");
        apellidoPaterno = prompt("Apellido paterno del paciente");
      }
    let apellidoMaterno = prompt("Apellido materno del paciente");//Apellido materno del paciente
      while(apellidoMaterno == null || apellidoMaterno == "" || apellidoMaterno.length > 20 || apellidoMaterno.length < 3){
        alert("El apellido materno es inválido");
        apellidoMaterno = prompt("Apellido materno del paciente");
      }
    let fechaNac = prompt("Fecha de nacimiento del paciente (dd/mm/aaaa)");//Fecha de nacimiento del paciente
      while(fechaNac == null || fechaNac == "" || fechaNac.length > 10 || fechaNac.length < 10 || !fechaNac.match(/^\d{2}\/\d{2}\/\d{4}$/)){
        alert("La fecha de nacimiento es inválida");
        fechaNac = prompt("Fecha de nacimiento del paciente (dd/mm/aaaa)");
      }
    let sexo = prompt("Sexo del paciente. Ejemplo Masculino(M) Femenino (F)");//Sexo del paciente
      while(sexo == null || sexo == "" || (sexo != "M" && sexo != "F" && sexo != "m" && sexo != "f")){
        alert("El sexo es inválido");
        sexo = prompt("Sexo del paciente. Ejemplo Masculino(M) Femenino (F)");
      }
    let diagnostico = prompt("Diagnostico del paciente");//Diagnostico del paciente
      while(diagnostico == null || diagnostico == "" || diagnostico.length > 20 || diagnostico.length < 3){
        alert("El diagnostico es inválido");
        diagnostico = prompt("Diagnostico del paciente");
      }
    let ta = prompt("Tension arterial del paciente. Ejemplo 120/80");//Tension arterial del paciente
      while(ta == null || ta == "" || ta.length > 10 || ta.length < 3 || !ta.match(/^\d+\/\d+$/)){
        alert("La tension arterial es inválida");
        ta = prompt("Tension arterial del paciente. Ejemplo 120/80");
      }
    let fc = prompt("Frecuencia Cardiaca del paciente. Ejemplo 80");//Frecuencia cardiaca del paciente
      while(fc == null || fc == "" || fc.length > 3 || fc.length < 1 || !fc.match(/^\d+$/)){
        alert("La frecuencia cardiaca es inválida");
        fc = prompt("Frecuencia Cardiaca del paciente. Ejemplo 80");
      }
    let fr = prompt("Frecuencia Respiratoria del paciente. Ejemplo 20");//Frecuencia respiratoria del paciente
      while(fr == null || fr == "" || fr.length > 3 || fr.length < 1 || !fr.match(/^\d+$/)){
        alert("La frecuencia respiratoria es inválida");
        fr = prompt("Frecuencia Respiratoria del paciente. Ejemplo 20");
      }
    let spo2 = prompt("SpO2 del paciente (%). Ejemplo 80");//SpO2 del paciente
      while(spo2 == null || spo2 == "" || spo2.length > 3 || spo2.length < 1 || !spo2.match(/^\d+$/)){
        alert("El SpO2 es inválido");
        spo2 = prompt("SpO2 del paciente (%). Ejemplo 80");
      }
    let notaEvolucion = prompt("Nota de evolución del paciente");//Nota de evolución del paciente
        while(notaEvolucion == null || notaEvolucion == "" || notaEvolucion.length > 200 || notaEvolucion.length < 3){
            alert("La nota de evolución es inválida");
            notaEvolucion = prompt("Nota de evolución del paciente");
        }
    pacientes.push(new paciente(nombre, apellidoPaterno, apellidoMaterno, fechaNac, sexo, diagnostico, ta, fc, fr, spo2, notaEvolucion));//Agrega el paciente a la lista de pacientes
    alert("Paciente registrado");
  }
  
  function mostrarPacientes() {//Muestra todos los pacientes
    alert("Pacientes registrados:\n");
    for (let i = 0; i < pacientes.length; i++) {
      alert("Nombre del Paciente: " + pacientes[i].nombre.toUpperCase() + "\nApellido Paterno: " + pacientes[i].apellidoPaterno.toUpperCase() + "\nApellido Materno: " + pacientes[i].apellidoMaterno.toUpperCase() + "\nFecha de Nacimiento: " + pacientes[i].fechaNac + "\nSexo: " + pacientes[i].sexo.toUpperCase() + "\nDiagnostico: " + pacientes[i].diagnostico.toUpperCase() + "\nTension Arterial: " + pacientes[i].ta + "\nFrecuencia Cardiaca: " + pacientes[i].fc + "\nFrecuencia Respiratoria: " + pacientes[i].fr + "\nSpO2: " + pacientes[i].spo2 + "\nNota de Evolución: " + pacientes[i].notaEvolucion.toUpperCase() + "\n");//Muestra los datos del paciente
    } if (pacientes.length == 0) {
      alert("No hay pacientes registrados");
    }
    }

    function buscarPaciente() {//Busca un paciente por su nombre
        let nombre = prompt("Ingrese el nombre del paciente a buscar");
        let apellidoPaterno = prompt("Ingrese el apellido paterno del paciente a buscar");
        let encontrado = false;
        for (let i = 0; i < pacientes.length; i++) {
            if (pacientes[i].nombre == nombre && pacientes[i].apellidoPaterno == apellidoPaterno) {
                alert("Paciente encontrado:\nNombre del Paciente: " + pacientes[i].nombre.toUpperCase() + "\nApellido Paterno: " + pacientes[i].apellidoPaterno.toUpperCase() + "\nApellido Materno: " + pacientes[i].apellidoMaterno.toUpperCase() + "\nFecha de Nacimiento: " + pacientes[i].fechaNac + "\nSexo: " + pacientes[i].sexo.toUpperCase() + "\nDiagnostico: " + pacientes[i].diagnostico.toUpperCase() + "\nTension Arterial: " + pacientes[i].ta + "\nFrecuencia Cardiaca: " + pacientes[i].fc + "\nFrecuencia Respiratoria: " + pacientes[i].fr + "\nSpO2: " + pacientes[i].spo2 + "\nNota de Evolución: " + pacientes[i].notaEvolucion.toUpperCase() + "\n");//Muestra los datos del paciente encontrado
                encontrado = true;}
        }
        if (!encontrado) {
            alert("Paciente no encontrado");
        }
    }

    function eliminarPaciente() {//Elimina un paciente por su nombre
        let nombre = prompt("Ingrese el nombre del paciente a eliminar");
        let apellidoPaterno = prompt("Ingrese el apellido paterno del paciente a eliminar");
        let encontrado = false;
        for (let i = 0; i < pacientes.length; i++) {
            if (pacientes[i].nombre == nombre && pacientes[i].apellidoPaterno == apellidoPaterno) {
                pacientes.splice(i, 1);
                alert("Paciente: " + nombre.toUpperCase() + " " + apellidoPaterno.toUpperCase() + " eliminado");//Elimina el paciente encontrado con el nombre y apellido paterno ingresados
                encontrado = true;}
        }
        if (!encontrado) {
            alert("Paciente no encontrado");
        }
    }

    function modificarPaciente() {//Modifica los datos de un paciente
        let nombre = prompt("Ingrese el Nombre del paciente a modificar");
        let apellidoPaterno = prompt("Ingrese el Apellido Paterno del paciente a modificar");
        let encontrado = false;
        for (let i = 0; i < pacientes.length; i++) {
            if (pacientes[i].nombre == nombre && pacientes[i].apellidoPaterno == apellidoPaterno) {
                alert("Paciente encontrado:\nNombre del Paciente: " + pacientes[i].nombre.toUpperCase() + "\nApellido Paterno: " + pacientes[i].apellidoPaterno.toUpperCase() + "\nApellido Materno: " + pacientes[i].apellidoMaterno.toUpperCase() + "\nFecha de Nacimiento: " + pacientes[i].fechaNac + "\n");//Muestra los datos del paciente encontrado
                alert("Cual dato desea modificar?");
                let opcion = prompt("1. Nombre\n2. Apellido Paterno\n3. Apellido Materno\n4. Fecha de Nacimiento\n5. Sexo\n6. Diagnostico\n7. Tension Arterial\n8. Frecuencia Cardiaca\n9. Frecuencia Respiratoria\n10. SpO2\n11. Nota de Evolución");
                switch (opcion) {//Modifica el dato seleccionado
                    case "1":
                        let nuevoNombre = prompt("Nuevo nombre");
                        pacientes[i].nombre = nuevoNombre;
                        alert("Nombre modificado");
                        break;
                    case "2":
                        let nuevoApellidoPaterno = prompt("Nuevo apellido paterno");
                        pacientes[i].apellidoPaterno = nuevoApellidoPaterno;
                        alert("Apellido paterno modificado");
                        break;
                    case "3":
                        let nuevoApellidoMaterno = prompt("Nuevo apellido materno");
                        pacientes[i].apellidoMaterno = nuevoApellidoMaterno;
                        alert("Apellido materno modificado");
                        break;
                    case "4":
                        let nuevaFechaNac = prompt("Nueva fecha de nacimiento (dd/mm/aaaa)");
                        pacientes[i].fechaNac = nuevaFechaNac;
                        alert("Fecha de nacimiento modificada");
                        break;
                    case "5":
                        let nuevoSexo = prompt("Nuevo sexo (M/F)");
                        pacientes[i].sexo = nuevoSexo;
                        alert("Sexo modificado");
                        break;
                    case "6":
                        let nuevoDiagnostico = prompt("Nuevo diagnostico");
                        pacientes[i].diagnostico = nuevoDiagnostico;
                        alert("Diagnostico modificado");
                        break;
                    case "7":
                        let nuevaTA = prompt("Nueva tension arterial. Ejemplo: 120/80");
                        pacientes[i].ta = nuevaTA;
                        alert("Tension arterial modificada");
                        break;
                    case "8":
                        let nuevaFC = prompt("Nueva frecuencia cardiaca. Ejemplo: 80");
                        pacientes[i].fc = nuevaFC;
                        alert("Frecuencia cardiaca modificada");
                        break;
                    case "9":
                        let nuevaFR = prompt("Nueva frecuencia respiratoria. Ejemplo: 20");
                        pacientes[i].fr = nuevaFR;
                        alert("Frecuencia respiratoria modificada");
                        break;
                    case "10":
                        let nuevoSPO2 = prompt("Nuevo spo2. Ejemplo: 98");
                        pacientes[i].spo2 = nuevoSPO2;
                        alert("SpO2 modificado");
                        break;
                    case "11":
                        let nuevaNotaEvolucion = prompt("Nueva nota de evolucion");
                        pacientes[i].notaEvolucion = nuevaNotaEvolucion;
                        alert("Nota de evolucion modificada");
                        break;
                    default:
                        alert("Opcion no valida");
                        break;
                }
                encontrado = true;
            }
        }
        if (!encontrado) {
            alert("Paciente no encontrado");
        }
    }
// ---------------------------------------------------------------------------------------------------------------------
//SECCION DE CALCULADORAS
// ---------------------------------------------------------------------------------------------------------------------

function calculadoras() {//Muestra las calculadoras disponibles
  let opcion = prompt("Seleccione una opcion:\n\n1. Calculadora de Glasgow\n2. Salir");
  switch (opcion) {
    case "1":
      glasgow();
      calculadoras();
      break;
    case "2":
      alert("Gracias por usar las calculadoras");
      menuPrincipal();
      break;
    default:
      alert("Opcion no valida");
      break;
  }
}

function glasgow(){// Funcion paciente donde se elige si es un paciente adulto o un lactante
  alert("Bienvenido a la herramienta de evaluación de la Escala de Coma de Glasgow (en Inglés Glasgow Coma Scale (GCS))");// Una alerta como bienvenida

  alert("La Escala de Coma de Glasgow (en Inglés Glasgow Coma Scale (GCS)) es una escala de aplicación neurológica que permite medir el nivel de conciencia de una persona. Una exploración neurológica de un paciente con traumatismo craneoencefálico debe ser simple, objetiva y rápida. La evaluación del nivel de conciencia es el parámetro más importante que debe tenerse en cuenta.");
  
  let opcion;
    do{
    opcion = parseInt(prompt("Ingrese un tipo de paciente:\n1. Adulto y/o Pediatrico\n2. Lactante"));
    } while (opcion != 1 && opcion != 2);// Aqui se hace una validacion de que el usuario ingrese un numero entre 1 y 2
    if (opcion == 1) {
    adulto();// Aqui se llama a la funcion adulto
    }
   if (opcion == 2) {
    lactante();// Aqui se llama a la funcion lactante
    }
  }

function adulto() {// aqui los prompts de adulto de acuerdo a los parametros para un tipo de paciente adulto o pediatrico
  let ojos = parseInt(prompt("Valore la Respuesta Ocular:\n 4. Espontanea\n 3. A estimulos verbales\n 2. Al dolor\n 1. Ausencia de respuesta"));
  let verbal = parseInt(prompt("Valore la Respuesta Verbal:\n 5. Orientado\n 4. Desorientado/Confuso\n 3. Incoherente\n 2. Sonidos incomprensibles\n 1. Ausencia de respuesta"));
  let motor = parseInt(prompt("Valore la Respuesta Motora:\n 6. Obedece ordenes\n 5. Localiza el dolor\n 4. Retira al dolor\n 3. Flexion anormal\n 2. Extension anormal\n 1. Ausencia de respuesta"));
  
  total = 0;// Aqui se inicializa la variable total
  total1 = 0;// Aqui se inicializa la variable total1
  total2 = 0;// Aqui se inicializa la variable total2
  total3 = 0;// Aqui se inicializa la variable total3

  if (motor == 6) {// Aqui se hace una validacion de que el usuario ingrese un numero entre 1 y 6
    total += 6; // Aqui se suma el numero 6 a la variable total
    total1 += 1;  // Aqui se suma el numero 1 a la variable total1
  }
  if (motor == 5) {
    total += 5;
    total1 += 1;
  }
  if (motor == 4) {
    total += 4;
    total1 += 1;
  }
  if (motor == 3) {
    total += 3;
    total1 += 1;
  }
  if (motor == 2) {
    total += 2;
    total1 += 1;
  }
  if (motor == 1) {
    total += 1;
    total1 += 1;
  }
  if (verbal == 5) { // Aqui se hace una validacion de que el usuario ingrese un numero entre 1 y 5
    total += 5;   // Aqui se suma el numero 5 a la variable total
    total2 += 1; // Aqui se suma el numero 1 a la variable total2
  }
  if (verbal == 4) {
    total += 4;
    total2 += 1;
  }
  if (verbal == 3) {
    total += 3;
    total2 += 1;
  }
  if (verbal == 2) {
    total += 2;
    total2 += 1;
  }
  if (verbal == 1) {
    total += 1;
    total2 += 1;
  }
  if (ojos == 4) {  // Aqui se hace una validacion de que el usuario ingrese un numero entre 1 y 4
    total += 4;   // Aqui se suma el numero 4 a la variable total
    total3 += 1;  // Aqui se suma el numero 1 a la variable total3
  }
  if (ojos == 3) {
    total += 3;
    total3 += 1;
  }
  if (ojos == 2) {
    total += 2;
    total3 += 1;
  }
  if (ojos == 1) {
    total += 1;
    total3 += 1;
  }
  if (total1 == 0 || total2 == 0 || total3 == 0) { // Aqui se hace una validacion de que el usuario ingrese un numero erroneo
    alert("Opss los parametros que ingresaste no son los correctos");
    }
  else {
    alert("El puntaje en la escala de Coma de Glasgow es: " + total); // Aqui se muestra el puntaje final
    if (total < 5) { // Aqui se hace una validacion de que el puntaje final sea menor a 5
      alert("Tu puntaje al ser " + total + "\n\nEl paciente adulto y/o pediatrico se encuentra en un estado de:\n\nComa profundo (85% de probabilidad de muerte o estado vegetativo)");
      salida();
    }
    else {
      if (total < 11) { // Aqui se hace una validacion en caso de un puntaje menor que 11
        alert("Tu puntaje al ser " + total + "\n\nEl paciente adulto y/o pediatrico se encuentra en un estado de:\n\nComa intermedio (más profundo cuanto menor el resultado)");
        salida();
      }
      else {
		if (total < 15) {   // Aqui se hace una validacion en caso de un puntaje menor que 15
			alert("Tu puntaje al ser " + total + "\n\nEl paciente adulto y/o pediatrico se encuentra en un estado de:\n\nComa superficial, estupor, obnubilación, desorientación ... normalidad");
      salida();
		}
		else {  // Aqui se hace una validacion en caso de un puntaje = que 15
			alert("Tu puntaje al ser " + total + "\n\nEl paciente adulto y/o pediatrico se encuentra en un estado de:\n\nNormalidad");
      salida();
		}
      }
    }
  }
  }

  function lactante() {// Aqui los prompts de lactante de acuerdo a los parametros para un tipo de paciente lactante ya que son diferentes a los de adulto
    let ojos = parseInt(prompt("Valore la Respuesta Ocular:\n 4. Espontanea\n 3. A estimulos verbales\n 2. Al dolor\n 1. Ausencia de respuesta"));
    let verbal = parseInt(prompt("Valore la Respuesta Verbal:\n 5. Balbuceo\n 4. Llanto irritable controlable\n 3. Llanto al dolor\n 2. Quejidos al dolor\n 1. Ausencia de respuesta"));
    let motor = parseInt(prompt("Valore la Respuesta Motora:\n 6. Movimientos espontaneos\n 5. retirada al tocar\n 4. Retira al dolor\n 3. Flexion anormal\n 2. Extension anormal\n 1. Ausencia de respuesta"));

  total = 0;// Aqui se hace una variable total para que se pueda sumar los puntos de cada parametro
  total1 = 0;// Aqui se hace una variable total1 para que se pueda sumar los puntos de cada parametro
  total2 = 0;// Aqui se hace una variable total2 para que se pueda sumar los puntos de cada parametro
  total3 = 0;// Aqui se hace una variable total3 para que se pueda sumar los puntos de cada parametro

  if (motor == 6) { // Aqui se hace una validacion de que el usuario ingrese un numero entre 1 y 6
    total += 6; // Aqui se suma el numero 6 a la variable total
    total1 += 1;  // Aqui se suma el numero 1 a la variable total1
  }
  if (motor == 5) {
    total += 5;
    total1 += 1;
  }
  if (motor == 4) {
    total += 4;
    total1 += 1;
  }
  if (motor == 3) {
    total += 3;
    total1 += 1;
  }
  if (motor == 2) {
    total += 2;
    total1 += 1;
  }
  if (motor == 1) {
    total += 1;
    total1 += 1;
  }
  if (verbal == 5) {  // Aqui se hace una validacion de que el usuario ingrese un numero entre 1 y 5
    total += 5;  // Aqui se suma el numero 5 a la variable total
    total2 += 1;  // Aqui se suma el numero 1 a la variable total2
  }
  if (verbal == 4) {
    total += 4;
    total2 += 1;
  }
  if (verbal == 3) {
    total += 3;
    total2 += 1;
  }
  if (verbal == 2) {
    total += 2;
    total2 += 1;
  }
  if (verbal == 1) {
    total += 1;
    total2 += 1;
  }
  if (ojos == 4) {  // Aqui se hace una validacion de que el usuario ingrese un numero entre 1 y 4
    total += 4;    // Aqui se suma el numero 4 a la variable total
    total3 += 1; // Aqui se suma el numero 1 a la variable total3
  }
  if (ojos == 3) {
    total += 3;
    total3 += 1;
  }
  if (ojos == 2) {
    total += 2;
    total3 += 1;
  }
  if (ojos == 1) {
    total += 1;
    total3 += 1;
  }
  if (total1 == 0 || total2 == 0 || total3 == 0) { // Aqui se hace una validacion de que el usuario ingrese un numero erroneo
    alert("Opss los parametros que ingresaste no son los correctos");
    }
  else { // Aqui se muestra el puntaje final  
    alert("El puntaje en la escala de Coma de Glasgow es: " + total);
    if (total < 5) { // Aqui se hace una validacion de que el puntaje final sea menor a 5
      alert("Tu puntaje al ser " + total + "\n\nEl lactante se encuentra en un estado de:\n\nComa profundo (85% de probabilidad de muerte o estado vegetativo)");
      salida();
    }
    else {
      if (total < 11) { // Aqui se hace una validacion en caso de un puntaje menor que 11
        alert("Tu puntaje al ser " + total + "\n\nEl lactante se encuentra en un estado de:\n\nComa intermedio (más profundo cuanto menor el resultado)");
        salida();
      }
      else {
		if (total < 15) {   // Aqui se hace una validacion en caso de un puntaje menor que 15
			alert("Tu puntaje al ser " + total + "\n\nEl lactante se encuentra en un estado de:\n\nComa superficial, estupor, obnubilación, desorientación ... normalidad");
      salida();
		}
		else { // Aqui se hace una validacion en caso de un puntaje = que 15
			alert("Tu puntaje al ser " + total + "\n\nEl lactante se encuentra en un estado de:\n\nNormalidad");
      salida();
		}
      }
    }
  }
  }
  

  function salida() {
    let opcion = prompt("¿Deseas valorar a un nuevo paciente?\n 1. Si\n 2. No");
    if (opcion == 1) {
      switch (opcion) {
        case "1":
          tipo = prompt("¿Que tipo de paciente deseas valorar?\n 1. Adulto\n 2. Lactante");
          if (tipo == 1) {
            adulto();
          }
          else {
            if (tipo == 2) {
              lactante();
            }
            else {
              alert("Opsss, no seleccionaste una opcion valida");
            }
          }
          break;
        case "2":
          alert("Gracias por utilizar el programa");
          break;
        default:
          alert("Opsss, no seleccionaste una opcion valida");
          break;
      }
    }
    else {
      if (opcion == 2) {
        alert("Gracias por utilizar la calculadora de Coma de Glasgow");
        calculadoras();
      }
      else {
        alert("Opsss, no seleccionaste una opcion valida");
      }
    }
  }