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
    document.getElementById("anima").addEventListener("click", mostrarTextoAnima);
    document.getElementById("clase").addEventListener("click", mostrarTextoClase);
    document.getElementById("clase2").addEventListener("click", mostrarTextoClase2);
    document.getElementById("js").addEventListener("click", mostrarTextoJS);
    document.getElementById("click").addEventListener("click", mostrarTextoClick);
    document.getElementById("none").addEventListener("click", mostrarTextoNone);
    document.getElementById("block").addEventListener("click", mostrarTextoBlock);
    document.getElementById("resp").addEventListener("click", mostrarTextoResp);

    function mostrarEstado2() {
        document.getElementById("estado1").className = "animated bounceOutLeft"; // efecto deslizante de salida para la izquierda
        
        document.getElementById("elDiv1").className = "paso datos col-xs-12 col-sm-2 col-md-offset-1 animated bounceOutRight"; //efecto deslizante de salida para la derecha
        document.getElementById("elDiv2").className = "paso obra active col-xs-12 col-sm-4 animated bounceOutRight";//efecto deslizante de salida para la derecha
        document.getElementById("titulo").className = "linea col-xs-12 col-sm-3 animated bounceOutRight"; //efecto deslizante de salida para la derecha
        
        setTimeout(function(){ 
            
            document.getElementById("estado1").style.display = "none"; // Ocultar el elemento estado1
          /*  document.getElementById("elDiv1").style.display = "none"; // Ocultar el div1
            document.getElementById("elDiv2").style.display = "none"; // Ocultar el div2
            document.getElementById("titulo").style.display = "none"; // Ocultar el titulo-tutorial*/
            document.getElementById("estado2").style.display = "block"; // Mostrar el elemento estado2
            document.getElementById("estado2").className = "animated bounceInRight"; // efecto deslizante de entrada para la derecha
            
           /* document.getElementById("elDiv1").style.display = "block"; // mostrar el elemento div1
            document.getElementById("elDiv2").style.display = "block"; // mostrar el elemento div2
            document.getElementById("titulo").style.display = "block"; // mostrar el titulo-tutorial*/
            document.getElementById("elDiv1").className = "paso datos col-xs-12 col-sm-2 col-md-offset-1 animated bounceInLeft"; // efecto deslizante de entrada para la izquierda
            document.getElementById("elDiv2").className = "paso obra active col-xs-12 col-sm-4 animated bounceInLeft";// efecto deslizante de entrada para la izquierda
            document.getElementById("titulo").className = "linea col-xs-12 col-sm-3 animated bounceInLeft"; // efecto deslizante de entrada para la izquierda
        }, 1000); //setTimeout---> Primer parámetro es la función a ejecutar y el segundo indica el número
                // en milisegundos antes de la ejecución 

    }
    
    function mostrarEstado1() {
        document.getElementById("estado2").className = "animated bounceOutLeft"; // efecto deslizante de salida para la izquierda
        document.getElementById("elDiv1").className = "paso datos active col-xs-12 col-sm-2 col-md-offset-1 animated bounceOutRight"; //efecto deslizante de salida para la derecha
        document.getElementById("elDiv2").className = "paso obra col-xs-12 col-sm-4 animated bounceOutRight"; //efecto deslizante de salida para la derecha
        document.getElementById("titulo").className = "linea col-xs-12 col-sm-3 animated bounceOutRight"; //efecto deslizante de salida para la derecha
            
        setTimeout(function(){ 
            
            document.getElementById("estado2").style.display = "none"; // Ocultar el elemento estado1
           /* document.getElementById("elDiv1").style.display = "none"; // Ocultar el div1
            document.getElementById("elDiv2").style.display = "none"; // Ocultar el div2
            document.getElementById("titulo").style.display = "none"; // Ocultar el titulo-tutorial*/
            document.getElementById("estado1").style.display = "block"; // Mostrar el elemento estado2
            document.getElementById("estado1").className = "animated bounceInRight"; // efecto deslizante de entrada para la derecha
            
           /* document.getElementById("elDiv1").style.display = "block"; // mostrar el elemento div1
            document.getElementById("elDiv2").style.display = "block"; // mostrar el elemento div2
            document.getElementById("titulo").style.display = "block"; // mostrar el titulo-tutorial*/

            document.getElementById("elDiv1").className = "paso datos active col-xs-12 col-sm-2 col-md-offset-1 animated bounceInLeft"; // efecto deslizante de entrada para la izquierda
            document.getElementById("elDiv2").className = "paso obra col-xs-12 col-sm-4 animated bounceInLeft"; // efecto deslizante de entrada para la izquierda
            document.getElementById("titulo").className = "linea col-xs-12 col-sm-3 animated bounceInLeft"; // efecto deslizante de entrada para la izquierda
        }, 1000);//setTimeout---> Primer parámetro es la función a ejecutar y el segundo indica el número
    }            // en milisegundos antes de la ejecución

    function mostrarTextoAnima() {  
        document.getElementById("animated").style.display = "block";
        document.getElementById("animated").setAttribute("id", "respuesta");
    }

    function mostrarTextoClase() {  
        document.getElementById("bounce").style.display = "block";
        document.getElementById("bounce").setAttribute("id", "respuesta");
    }

    function mostrarTextoClase2() {  
        document.getElementById("bounceR").style.display = "block";
        document.getElementById("bounceR").setAttribute("id", "respuesta");
    }

    function mostrarTextoJS() {  
        document.getElementById("javascript").style.display = "block";
        document.getElementById("javascript").setAttribute("id", "respuesta");
    }

    function mostrarTextoClick() {  
        document.getElementById("click-evt").style.display = "block";
        document.getElementById("click-evt").setAttribute("id", "respuesta");
    }

    function mostrarTextoNone() {  
        document.getElementById("disp-none").style.display = "block";
        document.getElementById("disp-none").setAttribute("id", "respuesta");
    }

    function mostrarTextoBlock() {  
        document.getElementById("disp-block").style.display = "block";
        document.getElementById("disp-block").setAttribute("id", "respuesta");
    }

    function mostrarTextoResp() {  
        document.getElementById("id-resp").style.display = "block";
        document.getElementById("id-resp").setAttribute("id", "respuesta");
    }

    function animacion(id, clase) {
        $(id).removeClass("animated "+clase).addClass(clase + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $(this).removeClass("animated "+clase);
        });
    };
  