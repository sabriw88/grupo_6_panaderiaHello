window.addEventListener('load', function(){

    let formulario = document.querySelector('form.register-input');
    let campoNombre = document.querySelector('#nombre');
    let campoApellido = document.querySelector('#apellido');
    let campoMail = document.querySelector('input.email');
    let regEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let campoContraseña = document.querySelector("input.contraseña");
    let imagenProducto = document.querySelector('#foto-usuario');
    let allowedFormats = ['jpg', 'jpeg', 'png', 'gif'];


    formulario.addEventListener('submit', function(event){
        let errores = [];
        let fileExtension = imagenProducto.value.split('.').pop().toLowerCase();

    //validacion del nombre
            if(campoNombre.value == ''){
                errores.push('El campo "Nombre" no puede estar vacío');
            }else if(campoNombre.value.length < 2){
                errores.push('El campo "Nombre" debe tener al menos 2 caracteres');
            }

    // validación del apellido
            if(campoApellido.value == ''){
                errores.push('El campo "Apellido" no puede estar vacío');
            }else if(campoApellido.value.length < 2){
                errores.push('El campo "Apellido" debe tener al menos 2 caracteres');
            }

    //validacion email front
            if (campoMail.value == "") {
                errores.push('El campo "Email" no puede estar vacío')
            } else if (!regEmail.test(campoMail.value)) {
                errores.push('Debe ingresar un correo electrónico válido')
            }

    //validacion contrasena
            if (campoContraseña.value == "") {
                errores.push('El campo de "Contraseña" no tiene que estar vacio')
            } else if (campoContraseña.value.length < 8) {
                errores.push("La contraseña debe tener al menos 8 caracteres, una letra mayúscula y una minúscula")
            }

    //validacion imagen front 
            if (imagenProducto.value !== '' && !allowedFormats.includes(fileExtension.toLowerCase())) {
                errores.push('El campo "Imagen" debe ser en formato JPG, JPEG, PNG o GIF');
            }   


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