(function () {
  var C = window.MENDOZA_CONFIG || {};

  // Enlaces desde config.js
  document.querySelectorAll('[data-link]').forEach(function (a) {
    var key = a.getAttribute('data-link');
    if (key === 'whatsapp') {
      if (C.whatsapp) a.href = 'https://wa.me/' + C.whatsapp + (C.whatsappMensaje ? '?text=' + encodeURIComponent(C.whatsappMensaje) : '');
    } else if (C[key]) {
      a.href = C[key];
    }
  });

  // Letras que rebotan: separa el llamado en letras, conservando lectura para lectores de pantalla
  document.querySelectorAll('[data-bounce]').forEach(function (el) {
    var text = el.textContent.trim(), i = 0;
    el.setAttribute('aria-label', text);
    el.textContent = '';
    text.split(' ').forEach(function (w, wi) {
      if (wi) el.appendChild(document.createTextNode(' '));
      var word = document.createElement('span');
      word.className = 'word';
      word.setAttribute('aria-hidden', 'true');
      Array.from(w).forEach(function (ch) {
        var l = document.createElement('span');
        l.className = 'l';
        l.style.setProperty('--l', i++);
        l.textContent = ch;
        word.appendChild(l);
      });
      el.appendChild(word);
    });
  });

  // Ecualizador
  var eq = document.querySelector('.eq');
  if (eq) {
    var shape = [0.35, 0.7, 0.45, 1, 0.55, 0.85, 0.4, 0.95, 0.5, 0.75, 0.38];
    shape.forEach(function (f, i) {
      var b = document.createElement('span');
      b.style.height = Math.round(f * 100) + '%';
      b.style.animationDelay = (i * 0.09).toFixed(2) + 's';
      eq.appendChild(b);
    });
  }

  // Estrellas del fondo
  var stars = document.querySelector('.stars');
  if (stars) {
    for (var s = 0; s < 14; s++) {
      var st = document.createElement('span');
      st.className = 'star';
      st.style.left = ((s * 37 + 11) % 100) + '%';
      st.style.top = ((s * 61 + 7) % 100) + '%';
      st.style.animationDelay = ((s * 0.37) % 4).toFixed(2) + 's';
      stars.appendChild(st);
    }
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
