// Ejemplo: To Do List
// ===================

// Listado de tareas

var tareas = [
    { tarea: "Terminar la página Personal", terminado: false },
    { tarea: "Terminar el tema de Bootstrap", terminado: false },
];


// manipulación del listado de tareas

function agregarTarea( tarea ) {
    var nueva_tarea = { tarea: tarea, terminado: false };
    tareas.push( nueva_tarea );
}

function eliminarTarea( numero_tarea ) {
    if ( numero_tarea > -1 && numero_tarea < tareas.length ) {
        tareas.splice( numero_tarea, 1 );
    }
}

function mostrarTareasEnConsola() {
    for (var i = 0; i < tareas.length; i ++ ) {
        console.log( tareas[i].tarea + " : terminado = " + tareas[i].terminado );
    }
}


//  visualización de las tareas

// NOTA : Si se desean agregar otras acciones a los botones de cada tarea,
// es necesario modificar esta función. Al inicio del taller, el botón con
// el checkmark llama a la función  "cambiarMarcaTarea( i )"

// si se desea ejecutar esta función (y mostrar la tabla) al momento de
// cargar la página, se puede incluir un evento en el <body> de la página
//   <body onload="mostrarTareasEnTabla()" >

function mostrarTareasEnTabla() {

    var htmlLista = "";

    // arma el HTML de la tabla
    for (var i = 0; i < tareas.length; i ++ ) {

        htmlLista += '<li>';
        htmlLista += '<div class="task-checkbox">';

        htmlLista += '<input type="checkbox" class="list-child" value="" '
        htmlLista += tareas[i].terminado ? 'checked ' : '';
        htmlLista += '>';

        htmlLista += '</div>';
        htmlLista += '<div class="task-title">';
        htmlLista += '<span class="task-title-sp">';

        htmlLista += tareas[i].tarea;

        htmlLista += '</span>';
        htmlLista += '<div class="pull-right">';

        htmlLista += '<button class="btn btn-success btn-xs" onclick="cambiarMarcaTarea(' + i + ')">';
        htmlLista += '<i class=" fa fa-check"></i></button>';
        htmlLista += '<button class="btn btn-danger btn-xs" onclick="eliminarTareaTabla(' + i + ')">';
        htmlLista += '<i class="fa fa-trash-o "></i></button>';
        htmlLista += '</div>';
        htmlLista += '</div>';
        htmlLista += '</li>';

    }

    // coloca el HTML en la lista de tareas
    var task_list = document.getElementById( "task-list" );
    task_list.innerHTML = htmlLista;

}

// otros métodos (sin terminar)

function cambiarMarcaTarea( i ) {
    console.log( "se invocó la función cambiarMarcaTarea con el valor de " + i );
}