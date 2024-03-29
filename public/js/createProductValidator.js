window.addEventListener('load', function(){
    let formulario = document.querySelector('form');
    formulario.addEventListener('submit', function(event){
        let errores = [];

        //validacion del nombre
        let nombreProducto = document.querySelector('#name');

        if(nombreProducto.value == ''){
        errores.push('El campo "Nombre" no puede estar vacío');
        }
        else if(nombreProducto.value.length < 3){
        errores.push('El campo "Nombre" debe tener al menos 3 caracteres');
        }

        //validacion del precio
        let precioProducto = document.querySelector('#price');

        if(nombreProducto.value == ''){
        errores.push('El campo "Precio" no puede estar vacío');
        }

        //validacion descripcion
        let descripcionProducto = document.querySelector('#description');
        
        if(descripcionProducto.value.length < 10){
        errores.push('El campo "Descripcion" debe tener al menos 10 caracteres');}


        // Validación del campo imagen
        let imagenProducto = document.querySelector('#image');
        let allowedFormats = ['jpg', 'jpeg', 'png', 'gif'];
        let fileExtension = imagenProducto.value.split('.').pop().toLowerCase();

        if (imagenProducto.value == "") {
            errores.push('Debe cargar una imagen del producto')
        } else if (imagenProducto.value !== '' && !allowedFormats.includes(fileExtension)) {
            errores.push('El campo "Imagen" debe ser en formato JPG, JPEG, PNG o GIF');
        }   

        // checkeo de listado de errores
        if(errores.length > 0){
            event.preventDefault();
            let ulErrores = document.querySelector('div.errores ul');
            ulErrores.innerHTML = ''; // Limpiar los errores anteriores
            
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<li>' + errores[i] + '</li>'  
            }
        } 

    })
})

