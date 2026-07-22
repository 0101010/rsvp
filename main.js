(function(){
  'use strict';

  // The only JS on the page: the live countdown. Everything else is static
  // HTML/CSS, so the page is fully readable and animated without this file.
  // Without JS the countdown element shows its static fallback (the date).

  function updateCountdown(deadline, element) {
    const distance = deadline - Date.now();

    if (distance < 0) {
      element.textContent = "Es ist so weit!";
      return;
    }

    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((distance % (1000*60)) / 1000);

    element.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  function init() {
    const element = document.getElementById('countdown-time');
    if (!element) return;
    const deadline = new Date('2026-08-29T10:00:00').getTime();
    updateCountdown(deadline, element);
    setInterval(() => updateCountdown(deadline, element), 1000);
  }

  document.addEventListener('DOMContentLoaded', init);

})();
