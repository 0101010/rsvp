// Extracted JS from index.html and restructured
(function(){
  'use strict';

  const containerSelector = '#cards-container';
  let container;

  function updateCountdown(deadline, element) {
    if (!element) return;
    const now = new Date().getTime();
    const distance = deadline - now;

    if (distance < 0) {
      element.innerHTML = "Zeit abgelaufen";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  function renderCards() {
    const now = new Date().getTime();
    container.innerHTML = '';

    const initialDeadline = new Date('2025-10-30T23:59:59').getTime();
    const secondaryDeadline = new Date('2026-08-29T10:00:00').getTime();

    const locationCard = document.createElement('div');
    locationCard.className = 'card location-card';
    locationCard.innerHTML = `<div class='location-overlay'><h2>Wann und Wo</h2><p>Datum: 29. August 2026<br>Ort: Obergurgl, Österreich<br><br><b>Vorraussichtlich früher Start ab 10 Uhr</b></p></div>`;


    if (now > initialDeadline) {
      const newCard = document.createElement('div');
      newCard.className = 'card';
      newCard.innerHTML = `<h2>Wir freuen uns!</h2><div class="countdown" id="new-countdown">--d --h --m --s</div>`;
      container.appendChild(newCard);
      container.appendChild(locationCard);
      const newCountdownEl = document.getElementById('new-countdown');
      setInterval(() => updateCountdown(secondaryDeadline, newCountdownEl), 1000);
    } else {
      const card1 = document.createElement('div');
      card1.className = 'card';
      card1.innerHTML = `<h2>Wir heiraten!</h2><p>Und möchten diesen besonderen Tag mit den Menschen teilen, die wir besonders lieb haben!</p><p>Dazu gehörst du!</p>`;

      const card2 = document.createElement('div');
      card2.className = 'card';
      card2.innerHTML = `<h2>Kommst du?</h2><p>Bitte gib uns Bescheid innerhalb der nächsten</p><div class="countdown" id="countdown-time">--d --h --m --s</div><a href='https://forms.gle/hSwmm3SbkZhPkeuw7' target='_blank' class='button'>Ja / Nein</a>`;

      container.appendChild(card1);
      container.appendChild(card2);
      container.appendChild(locationCard);

      const countdownTimeEl = document.getElementById('countdown-time');
      setInterval(() => updateCountdown(initialDeadline, countdownTimeEl), 1000);
    }
  }

  // Sync background and image sizing
  // Background slideshow (crossfade)
  function startSlideshow(options = {}) {
    const slides = document.querySelectorAll('.bg-slide');
    if (!slides || slides.length < 2) return;

    const images = options.images || ['./background1.jpg','./background2.jpg','./background3.JPG'];
    const interval = options.interval || 6000;
    const fadeTime = options.fadeTime || 1200;

    // preload images
    const cache = images.map(src => {
      const i = new Image();
      i.src = src;
      return i;
    });

    let current = 0;
    let activeIndex = 0; // which slide element is active (0 or 1)

    // initialize first two slides
    slides[0].style.backgroundImage = `url('${images[0]}')`;
    slides[1].style.backgroundImage = `url('${images[1 % images.length]}')`;
    slides[0].dataset.active = 'true';
    slides[1].dataset.active = 'false';
    current = 1;

    const tick = () => {
      const nextImage = images[(current + 1) % images.length];
      const showSlide = (activeIndex ^ 1); // toggle 0/1

      // set next image on the hidden slide then fade
      slides[showSlide].style.backgroundImage = `url('${nextImage}')`;
      slides[showSlide].dataset.active = 'true';
      slides[activeIndex].dataset.active = 'false';

      activeIndex = showSlide;
      current = (current + 1) % images.length;
    };

    const handle = setInterval(tick, interval);

    // expose stop function on document to allow cleanup if needed
    document.__bgSlideshowHandle = handle;
  }

  function init() {
    container = document.querySelector(containerSelector);
    if (!container) return;

    renderCards();
    startSlideshow();
    enableHeaderFadeOnMobile();
  }

  document.addEventListener('DOMContentLoaded', init);

  /* Header fade on scroll for mobile: lightweight, rAF-throttled */
  function enableHeaderFadeOnMobile() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    // Create a small sentinel right after the header to observe when it leaves the viewport
    let sentinel = document.getElementById('header-sentinel');
    if (!sentinel) {
      sentinel = document.createElement('div');
      sentinel.id = 'header-sentinel';
      sentinel.style.position = 'relative';
      sentinel.style.width = '1px';
      sentinel.style.height = '1px';
      sentinel.style.margin = '0';
      // insert after header
      header.parentNode.insertBefore(sentinel, header.nextSibling);
    }

    // Only apply on narrow viewports
    function shouldObserve() {
      return window.innerWidth <= 899;
    }

    let io;
    function setupObserver() {
      if (io) io.disconnect();
      if (!shouldObserve()) {
        header.classList.remove('header-hidden');
        return;
      }

      io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          // when sentinel is not visible (entry.intersectionRatio === 0) the header has scrolled off
          if (entry.intersectionRatio === 0) {
            header.classList.add('header-hidden');
          } else {
            header.classList.remove('header-hidden');
          }
        });
      }, {
        root: null,
        threshold: [0, 1],
        rootMargin: `-${Math.round(parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-reserve') || 60))}px 0px 0px 0px`
      });

      io.observe(sentinel);
    }

    // Re-setup observer on resize (responsive)
    window.addEventListener('resize', () => {
      setupObserver();
    }, { passive: true });

    setupObserver();
  }

})();
