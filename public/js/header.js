window.addEventListener('load', function() {
    let burgerButton = document.querySelector('.icon-bars');
    let profileButton = document.querySelector('.user-icon');

    burgerButton.addEventListener('click', () => {
        let navBar = document.querySelector('#burgerNavbar');
        navBar.classList.toggle('expanded')
    })

    profileButton.addEventListener('click', () => {
        let profileBar = document.querySelector('#profileNavbar');
        profileBar.classList.toggle('expanded')
    })
        
});