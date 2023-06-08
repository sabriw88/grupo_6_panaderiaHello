window.addEventListener('load', function () {
    let loginForm = document.querySelector('form');
    /* loginForm.addEventListener('mouseenter', () => {
        loginForm.style.backgroundColor = 'yellow'
    }) */
    
    let errores = [];
    let loginPassword = document.querySelector('.password input');
    let divErrores = document.querySelector('.errores');

    loginPassword.addEventListener('blur', () => {
        if (loginPassword.value == "") {
            loginPassword.style.backgroundColor = 'pink';
            loginPassword.style.borderColor = 'darkred';
            errores.push('Debe ingresar su contraseña');
            let ulErrores = document.querySelector('.errores p');
            errores.forEach(error => {
                ulErrores.innerHTML += error+'<br>'+'<br>';
                ulErrores.style.color = 'darkred';
            })
            divErrores.style.display = 'flex';
        }
    })

    /* if (loginPassword.value == "") {
        errores.push('Debe ingresar su contraseña');
    } */

    if (errores.length > 0) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault()
/*             divErrores.style.display = 'block' */;
        });
        
        /* divErrores.addEventListener('submit', () => {
            let ulErrores = document.querySelector('.errores ul');
            errores.forEach(error => {
                ulErrores.innerHTML += '<li>{error}</li>';
                ulErrores.style.color = 'darkred';
            })
        }) */
    }

    loginPassword.addEventListener('focus', function () {
        loginPassword.style.backgroundColor = '#68abb418';
        loginPassword.style.borderColor = '#68ABB4';
    })
})