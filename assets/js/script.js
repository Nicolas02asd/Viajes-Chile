// Tooltip boton Enviar
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Alerta de enviado
const enviarBtn = document.querySelectorAll('[data-bs-title="Contacta con nosotros"]');

enviarBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    alertaMensajeEnviado();
  });
});

function alertaMensajeEnviado() {
const mensaje = "Gracias por contactar con nosotros";
alert(mensaje);
}

    // navbar scroll
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    if (window.scrollY > document.querySelector('#carouselAutoplaying').offsetHeight) {
        navbar.classList.add('navbar-black-bg');
    } else {
        navbar.classList.remove('navbar-black-bg');
    }
});



