/* global.js — Lixinho Tropical */
(function () {
  'use strict';

  /* ─── NAV scroll ─── */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ─── Hamburger / Mobile nav ─── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ─── Cookie banner ─── */
  const COOKIE_KEY = 'lt_cookie_consent';
  const banner = document.getElementById('cookie-banner');
  if (banner) {
    if (!localStorage.getItem(COOKIE_KEY)) {
      banner.style.display = '';
    } else {
      banner.remove();
    }
    document.getElementById('cookie-accept')?.addEventListener('click', () => {
      localStorage.setItem(COOKIE_KEY, 'accepted');
      banner.style.opacity = '0';
      banner.style.transform = 'translateX(-50%) translateY(20px)';
      banner.style.transition = 'all 0.4s ease';
      setTimeout(() => banner.remove(), 400);
    });
    document.getElementById('cookie-decline')?.addEventListener('click', () => {
      localStorage.setItem(COOKIE_KEY, 'declined');
      banner.style.opacity = '0';
      banner.style.transform = 'translateX(-50%) translateY(20px)';
      banner.style.transition = 'all 0.4s ease';
      setTimeout(() => banner.remove(), 400);
    });
  }

  /* ─── Intersection Observer – fade-up ─── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-reveal]').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.07}s, transform 0.6s ease ${i * 0.07}s`;
    io.observe(el);
  });

  /* ─── Lightbox simples para fotos ─── */
  const imgs = document.querySelectorAll('[data-lightbox]');
  if (imgs.length) {
    const lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.style.cssText = `position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:9998;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s;pointer-events:none;`;
    lb.innerHTML = `<img id="lb-img" style="max-width:90vw;max-height:88vh;object-fit:contain;border:1px solid rgba(232,0,28,.3);">
    <button id="lb-prev" style="position:absolute;left:1.5rem;top:50%;transform:translateY(-50%);font-size:2.5rem;color:#fff;background:none;border:none;cursor:pointer;opacity:.7;">&#8249;</button>
    <button id="lb-next" style="position:absolute;right:1.5rem;top:50%;transform:translateY(-50%);font-size:2.5rem;color:#fff;background:none;border:none;cursor:pointer;opacity:.7;">&#8250;</button>
    <button id="lb-close" style="position:absolute;top:1rem;right:1.5rem;font-size:2rem;color:#fff;background:none;border:none;cursor:pointer;opacity:.7;">&#215;</button>`;
    document.body.appendChild(lb);

    let currentIdx = 0;
    const imgArr = Array.from(imgs);

    const open = (i) => {
      currentIdx = i;
      document.getElementById('lb-img').src = imgArr[i].src;
      lb.style.opacity = '1';
      lb.style.pointerEvents = 'all';
      document.body.style.overflow = 'hidden';
    };
    const close = () => {
      lb.style.opacity = '0';
      lb.style.pointerEvents = 'none';
      document.body.style.overflow = '';
    };

    imgArr.forEach((img, i) => img.addEventListener('click', () => open(i)));
    document.getElementById('lb-close').addEventListener('click', close);
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    document.getElementById('lb-prev').addEventListener('click', () => open((currentIdx - 1 + imgArr.length) % imgArr.length));
    document.getElementById('lb-next').addEventListener('click', () => open((currentIdx + 1) % imgArr.length));
    document.addEventListener('keydown', e => {
      if (lb.style.pointerEvents !== 'all') return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') open((currentIdx - 1 + imgArr.length) % imgArr.length);
      if (e.key === 'ArrowRight') open((currentIdx + 1) % imgArr.length);
    });
  }

  /* ─── Ticker clone para loop infinito ─── */
  const track = document.querySelector('.ticker-track');
  if (track) {
    const clone = track.innerHTML;
    track.innerHTML += clone;
  }
})();
