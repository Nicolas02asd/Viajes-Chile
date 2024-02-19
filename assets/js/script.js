    
// navbar scroll "Al descender de la altura del carrusel el navbar tiene fondo negro"
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    if (window.scrollY > document.querySelector('#carouselAutoplaying').offsetHeight) {
        navbar.classList.add('navbar-black-bg');
    } else {
        navbar.classList.remove('navbar-black-bg');
    }
});

// Tooltip boton Enviar "al pasar el cursor sobre el botón enviar este despliega un tooltip"
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Alerta de enviado "al presionar el botón enviar del form, este arroja una alerta"
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




