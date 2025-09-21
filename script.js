(function () {
  function init() {
    const header = document.getElementById('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

(function () {
  function initHeader() {
    const header = document.getElementById('header');
    if (!header) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    });
  }

  function initContacto() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const estado = document.getElementById('contacto-estado');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const hp = document.getElementById('empresa');
      if (hp && hp.value.trim() !== '') return;

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
      const body = [
        `Nombre: ${nombre}`,
        `Correo: ${email}`,
        '',
        'Mensaje:',
        mensaje
      ].join('\n');

      const mailto = `mailto:${destinatario}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;

      if (estado) estado.textContent = 'Abriendo tu cliente de correo…';
    });
  }

  function init() {
    initHeader();
    initContacto();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();