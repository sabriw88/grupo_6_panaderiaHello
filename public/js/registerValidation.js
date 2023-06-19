console.log('Archivo registerValidation vinculado');

window.addEventListener('load', function(){

    let formulario = document.querySelector('form.register-input');

    formulario.addEventListener('submit', function(event){
        
        let errores = [];

    //validacion del nombre

            let campoNombre = document.querySelector('#nombre');

            if(campoNombre.value == ''){
                errores.push('El campo "Nombre" no puede estar vacío');
            }else if(campoNombre.value.length < 2){
                errores.push('El campo "Nombre" debe tener al menos 2 caracteres');
            }

            let campoApellido = document.querySelector('#apellido');

            if(campoApellido.value == ''){
                errores.push('El campo "Apellido" no puede estar vacío');
            }else if(campoApellido.value.length < 2){
                errores.push('El campo "Apellido" debe tener al menos 2 caracteres');
            }


    //validacion contrasena

        let campoContraseña = document.querySelector("input.contraseña")

        if (campoContraseña.value == "") {
            errores.push("el campo de contraseña no tiene que estar vacio")
        } else if (campoContraseña.value.length < 8) {
            errores.push("la contraseña debe tener al menos 8 caracteres, una letra mayuscula y una minuscula")
        }


    //validacion imagen front 
    let imagenProducto = document.querySelector('#foto-usuario');
    let allowedFormats = ['jpg', 'jpeg', 'png', 'gif'];
    let fileExtension = imagenProducto.value.split('.').pop().toLowerCase();
    
    if (imagenProducto.value !== '' && !allowedFormats.includes(fileExtension)) {
        errores.push('El campo "Imagen" debe ser en formato JPG, JPEG, PNG o GIF');
    }   
    

    //validacion email front



    //imprimiendo errores en el div 

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