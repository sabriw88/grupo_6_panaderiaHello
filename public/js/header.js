console.log('se linkeo correctamente');

window.addEventListener('load', function() {
    let button = document.querySelector('.icon-bars');

    button.addEventListener('click', () => {
        let navBar = document.querySelector('#burgerNavbar');
        navBar.classList.toggle('expanded')
    })
        
});