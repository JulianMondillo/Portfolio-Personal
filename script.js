

  function initContacto() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const estado = document.getElementById('contacto-estado');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const asunto = document.getElementById('asunto').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      if (!nombre || !email || !mensaje) {
        if (estado) estado.textContent = 'Por favor, completá nombre, correo y mensaje.';
        return;
      }

      const destinatario = 'julian.mondillo@alumnos.frgp.utn.edu.ar';
      const subject = `Contacto desde portfolio: ${asunto || 'Sin asunto'} - ${nombre}`;
      const body = `Nombre: ${nombre}\nCorreo: ${email}\n\nMensaje:\n${mensaje}`;

      window.location.href = `mailto:${destinatario}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      if (estado) estado.textContent = 'Abriendo tu cliente de correo…';
    });
  }

(function () {
  function init() {
    initHeader();
    initContacto();
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();
})();