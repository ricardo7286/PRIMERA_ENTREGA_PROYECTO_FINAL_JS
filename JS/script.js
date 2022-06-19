class paciente {
    constructor(nombre, apellidoPaterno, apellidoMaterno, fechaNac, sexo, diagnostico, ta, fc, fr, spo2, notaEvolucion) {
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
  
  alert("Hola Soy Ricardo Hernandez y esta es mi primera entrega del proyecto final");
  
  alert("Bienvenido al Sistema de Gestion Integral Electrónico de Pacientes");
  
  sistema();
  
  function sistema(){
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
        break;
        default:
        alert("Opción no válida");
        sistema();
        break;
    }
  }
  
  function registrarPaciente() {
    let nombre = prompt("Nombre del paciente");
      while(nombre == null || nombre == "" || nombre.length > 20 || nombre.length < 3){
        alert("El nombre es inválido");
        nombre = prompt("Nombre del paciente");
      }
    let apellidoPaterno = prompt("Apellido paterno del paciente");
      while(apellidoPaterno == null || apellidoPaterno == "" || apellidoPaterno.length > 20 || apellidoPaterno.length < 3){
        alert("El apellido paterno es inválido");
        apellidoPaterno = prompt("Apellido paterno del paciente");
      }
    let apellidoMaterno = prompt("Apellido materno del paciente");
      while(apellidoMaterno == null || apellidoMaterno == "" || apellidoMaterno.length > 20 || apellidoMaterno.length < 3){
        alert("El apellido materno es inválido");
        apellidoMaterno = prompt("Apellido materno del paciente");
      }
    let fechaNac = prompt("Fecha de nacimiento del paciente (dd/mm/aaaa)");
      while(fechaNac == null || fechaNac == "" || fechaNac.length > 10 || fechaNac.length < 10 || !fechaNac.match(/^\d{2}\/\d{2}\/\d{4}$/)){
        alert("La fecha de nacimiento es inválida");
        fechaNac = prompt("Fecha de nacimiento del paciente (dd/mm/aaaa)");
      }
    let sexo = prompt("Sexo del paciente. Ejemplo Masculino(M) Femenino (F)");
      while(sexo == null || sexo == "" || (sexo != "M" && sexo != "F" && sexo != "m" && sexo != "f")){
        alert("El sexo es inválido");
        sexo = prompt("Sexo del paciente. Ejemplo Masculino(M) Femenino (F)");
      }
    let diagnostico = prompt("Diagnostico del paciente");
      while(diagnostico == null || diagnostico == "" || diagnostico.length > 20 || diagnostico.length < 3){
        alert("El diagnostico es inválido");
        diagnostico = prompt("Diagnostico del paciente");
      }
    let ta = prompt("Tension arterial del paciente. Ejemplo 120/80");
      while(ta == null || ta == "" || ta.length > 10 || ta.length < 3 || !ta.match(/^\d+\/\d+$/)){
        alert("La tension arterial es inválida");
        ta = prompt("Tension arterial del paciente. Ejemplo 120/80");
      }
    let fc = prompt("Frecuencia Cardiaca del paciente. Ejemplo 80");
      while(fc == null || fc == "" || fc.length > 3 || fc.length < 1 || !fc.match(/^\d+$/)){
        alert("La frecuencia cardiaca es inválida");
        fc = prompt("Frecuencia Cardiaca del paciente. Ejemplo 80");
      }
    let fr = prompt("Frecuencia Respiratoria del paciente. Ejemplo 20");
      while(fr == null || fr == "" || fr.length > 3 || fr.length < 1 || !fr.match(/^\d+$/)){
        alert("La frecuencia respiratoria es inválida");
        fr = prompt("Frecuencia Respiratoria del paciente. Ejemplo 20");
      }
    let spo2 = prompt("SpO2 del paciente (%). Ejemplo 80");
      while(spo2 == null || spo2 == "" || spo2.length > 3 || spo2.length < 1 || !spo2.match(/^\d+$/)){
        alert("El SpO2 es inválido");
        spo2 = prompt("SpO2 del paciente (%). Ejemplo 80");
      }
    let notaEvolucion = prompt("Nota de evolución del paciente");
        while(notaEvolucion == null || notaEvolucion == "" || notaEvolucion.length > 200 || notaEvolucion.length < 3){
            alert("La nota de evolución es inválida");
            notaEvolucion = prompt("Nota de evolución del paciente");
        }
    pacientes.push(new paciente(nombre, apellidoPaterno, apellidoMaterno, fechaNac, sexo, diagnostico, ta, fc, fr, spo2, notaEvolucion));
    alert("Paciente registrado");
  }
  
  function mostrarPacientes() {
    alert("Pacientes registrados:\n");
    for (let i = 0; i < pacientes.length; i++) {
      alert("Nombre del Paciente: " + pacientes[i].nombre.toUpperCase() + "\nApellido Paterno: " + pacientes[i].apellidoPaterno.toUpperCase() + "\nApellido Materno: " + pacientes[i].apellidoMaterno.toUpperCase() + "\nFecha de Nacimiento: " + pacientes[i].fechaNac + "\nSexo: " + pacientes[i].sexo.toUpperCase() + "\nDiagnostico: " + pacientes[i].diagnostico.toUpperCase() + "\nTension Arterial: " + pacientes[i].ta + "\nFrecuencia Cardiaca: " + pacientes[i].fc + "\nFrecuencia Respiratoria: " + pacientes[i].fr + "\nSpO2: " + pacientes[i].spo2 + "\nNota de Evolución: " + pacientes[i].notaEvolucion.toUpperCase() + "\n");
    } if (pacientes.length == 0) {
      alert("No hay pacientes registrados");
    }
    }

    function buscarPaciente() {
        let nombre = prompt("Ingrese el nombre del paciente a buscar");
        let apellidoPaterno = prompt("Ingrese el apellido paterno del paciente a buscar");
        let encontrado = false;
        for (let i = 0; i < pacientes.length; i++) {
            if (pacientes[i].nombre == nombre && pacientes[i].apellidoPaterno == apellidoPaterno) {
                alert("Paciente encontrado:\nNombre del Paciente: " + pacientes[i].nombre.toUpperCase() + "\nApellido Paterno: " + pacientes[i].apellidoPaterno.toUpperCase() + "\nApellido Materno: " + pacientes[i].apellidoMaterno.toUpperCase() + "\nFecha de Nacimiento: " + pacientes[i].fechaNac + "\nSexo: " + pacientes[i].sexo.toUpperCase() + "\nDiagnostico: " + pacientes[i].diagnostico.toUpperCase() + "\nTension Arterial: " + pacientes[i].ta + "\nFrecuencia Cardiaca: " + pacientes[i].fc + "\nFrecuencia Respiratoria: " + pacientes[i].fr + "\nSpO2: " + pacientes[i].spo2 + "\nNota de Evolución: " + pacientes[i].notaEvolucion.toUpperCase() + "\n");
                encontrado = true;}
        }
        if (!encontrado) {
            alert("Paciente no encontrado");
        }
    }

    function eliminarPaciente() {
        let nombre = prompt("Ingrese el nombre del paciente a eliminar");
        let apellidoPaterno = prompt("Ingrese el apellido paterno del paciente a eliminar");
        let encontrado = false;
        for (let i = 0; i < pacientes.length; i++) {
            if (pacientes[i].nombre == nombre && pacientes[i].apellidoPaterno == apellidoPaterno) {
                pacientes.splice(i, 1);
                alert("Paciente: " + nombre.toUpperCase() + " " + apellidoPaterno.toUpperCase() + " eliminado");
                encontrado = true;}
        }
        if (!encontrado) {
            alert("Paciente no encontrado");
        }
    }

    function modificarPaciente() {
        let nombre = prompt("Ingrese el Nombre del paciente a modificar");
        let apellidoPaterno = prompt("Ingrese el Apellido Paterno del paciente a modificar");
        let encontrado = false;
        for (let i = 0; i < pacientes.length; i++) {
            if (pacientes[i].nombre == nombre && pacientes[i].apellidoPaterno == apellidoPaterno) {
                alert("Paciente encontrado:\nNombre del Paciente: " + pacientes[i].nombre.toUpperCase() + "\nApellido Paterno: " + pacientes[i].apellidoPaterno.toUpperCase() + "\nApellido Materno: " + pacientes[i].apellidoMaterno.toUpperCase() + "\nFecha de Nacimiento: " + pacientes[i].fechaNac + "\n");
                alert("Cual dato desea modificar?");
                let opcion = prompt("1. Nombre\n2. Apellido Paterno\n3. Apellido Materno\n4. Fecha de Nacimiento\n5. Sexo\n6. Diagnostico\n7. Tension Arterial\n8. Frecuencia Cardiaca\n9. Frecuencia Respiratoria\n10. SpO2\n11. Nota de Evolución");
                switch (opcion) {
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