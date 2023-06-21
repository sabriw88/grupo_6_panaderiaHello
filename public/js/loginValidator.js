window.addEventListener('load', function () {
    let loginForm = document.querySelector('form');
    let loginEmail = document.querySelector('.email input');
    let loginPassword = document.querySelector('.password input');
    let divErrores = document.querySelector('.errores');
    let ulErrores = document.querySelector('.errores p');
    let regEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    loginEmail.addEventListener('blur', () => {
        if (loginEmail.value == "") {
            loginEmail.style.backgroundColor = 'pink';
            loginEmail.style.borderColor = 'darkred';
        } else if (!regEmail.test(loginEmail.value)) {
            loginEmail.style.backgroundColor = 'pink';
            loginEmail.style.borderColor = 'darkred';
        } 
    })

    loginPassword.addEventListener('blur', () => {
        if (loginPassword.value == "") {
            loginPassword.style.backgroundColor = 'pink';
            loginPassword.style.borderColor = 'darkred';
        }
    })

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let errores = [];
        ulErrores.innerHTML = "";
        if (loginEmail.value == "") {
            errores.push('Debe ingresar su email');
        } else if (!regEmail.test(loginEmail.value)) {
            errores.push('Debe ingresar un email válido')
        }
        if (loginPassword.value == "") {
            errores.push('Debe ingresar su contraseña');
        }
        if (errores.length > 0) {
            errores.forEach(error => {
                ulErrores.innerHTML += error+'<br>'+'<br>';
                ulErrores.style.color = 'darkred';
            })
            divErrores.style.display = 'flex';
        } else {
            loginForm.submit();
        };
    });

    loginPassword.addEventListener('focus', function () {
        loginPassword.style.backgroundColor = '#68abb418';
        loginPassword.style.borderColor = '#68ABB4';
    })

    loginEmail.addEventListener('focus', function () {
        loginEmail.style.backgroundColor = '#68abb418';
        loginEmail.style.borderColor = '#68ABB4';
    })
})