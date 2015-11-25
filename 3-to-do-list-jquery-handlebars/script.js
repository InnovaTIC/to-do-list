// Ejemplo: To Do List
// ===================

// Listado de tareas

var tareas = [
    { tarea: "Terminar la página Personal", terminado: false },
    { tarea: "Terminar el tema de Bootstrap", terminado: false },
];


// == manipulación del listado de tareas

function agregarTarea( tarea ) {
    var nueva_tarea = { tarea: tarea, terminado: false };
    tareas.push( nueva_tarea );
}

function eliminarTarea( numero_tarea ) {
    if ( numero_tarea > -1 && numero_tarea < tareas.length ) {
        tareas.splice( numero_tarea, 1 );
    }
}


function marcarTodosTerminados() {
  for (var i = 0; i < tareas.length; i ++ ) {
    tareas[i].terminado = true;
  }
}

function borrarTerminados() {
  var tareasAEliminar = [];
  for (var i = 0; i < tareas.length; i ++ ) {
    if ( tareas[i].terminado === true) {
      tareasAEliminar.push( i );
    }
  }
  tareasAEliminar.reverse();
  for ( i = 0; i < tareasAEliminar.length; i ++ ) {
    // tareas.splice( tareasAEliminar[i], 1 );
    eliminarTarea( tareasAEliminar[i] );
  }
}

function cambiarMarcaTarea( numero_tarea ) {
  if ( numero_tarea > -1 && numero_tarea < tareas.length ) {
    if ( tareas[ numero_tarea ].terminado ) {
      tareas[ numero_tarea ].terminado = false;
    } else {
      tareas[ numero_tarea ].terminado = true;      
    }
  }
  mostrarTareasEnTabla();
}

function eliminarTareaTabla( numero_tarea ) {
  eliminarTarea( numero_tarea );
  mostrarTareasEnTabla();
}



//  == visualización de las tareas

function mostrarTareasEnConsola() {
    for (var i = 0; i < tareas.length; i ++ ) {
        console.log( tareas[i].tarea + " : terminado = " + tareas[i].terminado );
    }
}


function mostrarTareasEnTabla() {

  // Obtiene la plantilla
  var fuentePlantilla = $("#tareas-template").html();

  // Compila la plantilla
  var plantilla = Handlebars.compile( fuentePlantilla );

  // Pasa los datos a la plantilla
  var html = plantilla( tareas );

  // Agrega el resultado a la página
  $('#task-list').html( html );
  
  // agrega los eventos a los botones
  // boton de cambiar
  $(".btn-cambiar").on( "click", function (){ 
      var botones = $(".btn-cambiar");
      var pos = $.inArray( this, botones);
      cambiarMarcaTarea(pos); 
    });

  // boton de eliminar
  $(".btn-eliminar").on( "click", function (){ 
      var botones = $(".btn-eliminar");
      var pos = $.inArray( this, botones);
      eliminarTareaTabla(pos); 
    });

  
}



// == asigna los eventos

// al cargar la página
$(document).ready(function(){

  // carga la tabla
    mostrarTareasEnTabla();

  // ajusta el boton de agregar
  $('#btn_agregar').click( 
    function () {
      var texto_tarea = $("#nuevo_item_text").val();
      agregarTarea( texto_tarea );
      mostrarTareasEnTabla();    
    }
  );
  
  // ajusta el boton de marcar todos
  $('#btn_marcar_todos').click( 
    function () {
      marcarTodosTerminados();
      mostrarTareasEnTabla();    
    }
  );

  // ajusta el boton de borrar terminados
  $('#btn_borrar_terminados').click( 
    function () {
      borrarTerminados();
      mostrarTareasEnTabla();    
    }
  );
  
});

