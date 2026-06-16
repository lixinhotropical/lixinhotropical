/* shows-render.js — Lixinho Tropical
   Lê window.LT.shows e renderiza automaticamente
   na Home (#shows-home) e na Agenda (#tab-proximos / #tab-passados).
   Separa shows futuros e passados com base na data de hoje.
*/
(function () {
  const shows = window.LT && window.LT.shows;
  if (!shows) return;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Separar futuros e passados
  const upcoming = shows
    .filter(s => new Date(s.date + 'T00:00:00') >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const past = shows
    .filter(s => new Date(s.date + 'T00:00:00') < today)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // Detectar se estamos na home ou na agenda
  // pela presença dos containers
  const homeContainer = document.getElementById('shows-home');
  const agendaProximos = document.getElementById('tab-proximos');
  const agendaPassados = document.getElementById('tab-passados');

  // ── HELPER: prefixo relativo ──
  // Na home os links de shows são pages/shows/...
  // Na agenda são shows/...
  const isHome = !!homeContainer;
  const prefix = isHome ? 'pages/' : '';

  // ── HELPER: criar linha de show ──
  function makeRow(show, isPast) {
    const isClickable = show.url && !show.private;
    const tag = `<span class="tag tag-${show.tagColor}">${show.tag}</span>`;
    const arrow = isClickable ? `<span class="show-arrow">→</span>` : '';
    const time = show.time ? `<div class="show-time">${show.time}</div>` : '';

    const inner = `
      <div class="date-block">
        <div class="day">${show.day}</div>
        <div class="month-year">${show.month} ${show.year}</div>
      </div>
      <div class="show-details">
        <div class="show-venue">${show.venue}</div>
        <div class="show-city">${show.city}</div>
        ${time}
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:0.4rem">
        ${tag}${arrow}
      </div>`;

    if (isClickable) {
      const el = document.createElement('a');
      el.href = prefix + show.url;
      el.className = 'show-row clickable' + (isPast ? ' past-row' : '');
      el.setAttribute('data-reveal', '');
      el.innerHTML = inner;
      return el;
    } else {
      const el = document.createElement('div');
      el.className = 'show-row' + (isPast ? ' past-row' : '');
      el.setAttribute('data-reveal', '');
      el.innerHTML = inner;
      return el;
    }
  }

  // ── RENDERIZAR NA HOME ──
  if (homeContainer) {
    const limit = 4; // máximo de shows na home
    const toShow = upcoming.slice(0, limit);

    if (toShow.length === 0) {
      homeContainer.innerHTML = `<p style="color:rgba(245,240,232,0.4);font-size:0.9rem">Novas datas em breve!</p>`;
    } else {
      const grid = document.createElement('div');
      grid.className = 'shows-teaser';
      toShow.forEach(s => grid.appendChild(makeRow(s, false)));
      homeContainer.appendChild(grid);
    }
  }

  // ── RENDERIZAR NA AGENDA ──
  if (agendaProximos) {
    if (upcoming.length === 0) {
      agendaProximos.innerHTML = `<p style="color:rgba(245,240,232,0.4);padding:2rem 0">Novas datas em breve. <a href="contato.html" style="color:var(--cyan)">Entre em contato</a> para contratar a banda.</p>`;
    } else {
      upcoming.forEach(s => agendaProximos.appendChild(makeRow(s, false)));
      const note = document.createElement('div');
      note.className = 'mt-4';
      note.setAttribute('data-reveal', '');
      note.innerHTML = `<p style="font-size:0.85rem;color:rgba(245,240,232,0.4)">Para contratar a banda: <a href="contato.html" style="color:var(--cyan)">fale com a gente →</a></p>`;
      agendaProximos.appendChild(note);
    }
  }

  if (agendaPassados) {
    if (past.length === 0) {
      agendaPassados.innerHTML = `<p style="color:rgba(245,240,232,0.4);padding:2rem 0">Nenhum show passado registrado ainda.</p>`;
    } else {
      past.forEach(s => agendaPassados.appendChild(makeRow(s, true)));
    }
  }

  // Reativar IntersectionObserver para os novos elementos
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    if (el.style.opacity === '') {
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      io.observe(el);
    }
  });
})();
