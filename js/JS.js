   /*
   DISPLAY: es la propiedad más importante para controlar estructuras. 
   Cada elemento tiene un valor de display por defecto dependiendo de qué tipo de elemento sea.
   Es comúnmente usado en JavaScript para ocultar o mostrar elementos sin eliminarlos ni recrearlos.
   Esto es diferente de visibility. Usar display: none no dejará espacio donde el elemento 
   se encontraba, pero visibility: hidden; dejará un espacio vacío.

   .className: establece o devuelve el nombre de clase de un elemento 
   (el valor del atributo de clase de un elemento). En caso de este código ella establece.

   */ 
   
   //método asigna un controlador de evento click al elemento especificado.
    document.getElementById("botonSiguienteEstado").addEventListener("click", mostrarEstado2); 
    document.getElementById("botonEstadoAnterior").addEventListener("click", mostrarEstado1); 

    function mostrarEstado2() {
        document.getElementById("estado1").className = "animated bounceOutLeft"; // efecto deslizante de salida para la izquierda
        setTimeout(function(){ 
            document.getElementById("estado1").style.display = "none"; // Ocultar el elemento estado1
            document.getElementById("estado2").style.display = "block"; // Mostrar el elemento estado2
            document.getElementById("estado2").className = "animated bounceInRight"; // efecto deslizante de entrada para la izquierda
            
            document.getElementById("elDiv1").className = "paso datos col-xs-12 col-sm-2 col-md-2 col-lg-2 col-md-offset-1"; //cambio a imagen de datos inactiva
            document.getElementById("elDiv2").className = "paso obra active col-xs-12 col-sm-4 col-md-4 col-lg-4";//cambioa imagen de obra activa
        }, 1000); //setTimeout---> Primer parámetro es la función a ejecutar y el segundo indica el número
                // en milisegundos antes de la ejecución 

    }
    
    function mostrarEstado1() {
        document.getElementById("estado2").className = "animated bounceOutLeft"; // efecto deslizante de salida para la izquierda
        
        setTimeout(function(){ 
            document.getElementById("estado2").style.display = "none"; // Ocultar el elemento estado1
            document.getElementById("estado1").style.display = "block"; // Mostrar el elemento estado2
            document.getElementById("estado1").className = "animated bounceInRight"; // efecto deslizante de entrada para la izquierda
            
            document.getElementById("elDiv1").className = "paso datos active col-xs-12 col-sm-2 col-md-2 col-lg-2 col-md-offset-1"; //cambio a imagen de datos activa
            document.getElementById("elDiv2").className = "paso obra col-xs-12 col-sm-4 col-md-4 col-lg-4"; //cambioa imagen de obra inactiva
        }, 1000);//setTimeout---> Primer parámetro es la función a ejecutar y el segundo indica el número
    }            // en milisegundos antes de la ejecución
    
    function animacion(id, clase) {
        $(id).removeClass("animated "+clase).addClass(clase + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $(this).removeClass("animated "+clase);
        });
    };
  