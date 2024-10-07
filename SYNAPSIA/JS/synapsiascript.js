// Smooth scroll para la navegación
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validación del formulario de contacto
document.querySelector('.contact form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío por defecto para realizar la validación

    const name = document.querySelector('input[placeholder="Nombre"]').value.trim();
    const email = document.querySelector('input[placeholder="Correo Electrónico"]').value.trim();
    const message = document.querySelector('textarea[placeholder="Mensaje"]').value.trim();

    // Validación básica
    if (name === "" || email === "" || message === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    // Si todo es válido, muestra un mensaje de éxito y limpia el formulario
    alert("Mensaje enviado correctamente. ¡Gracias por contactarnos!");
    document.querySelector('.contact form').reset();
});

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Animación de botón en la sección de Recursos
document.querySelector('.resources .cta-button').addEventListener('mouseover', function() {
    this.style.backgroundColor = "#1E7C73"; // Cambio de color al pasar el mouse
});

document.querySelector('.resources .cta-button').addEventListener('mouseleave', function() {
    this.style.backgroundColor = ""; // Restablece el color original
});
