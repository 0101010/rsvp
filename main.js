(function(){
  'use strict';

  const container = document.querySelector('#cards-container');

  function updateCountdown(deadline, element) {
    if (!element) return;
    const now = new Date().getTime();
    const distance = deadline - now;

    if (distance < 0) {
      element.innerHTML = "Zeit abgelaufen";
      return;
    }

    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((distance % (1000*60)) / 1000);

    element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  function renderCards() {
    container.innerHTML = '';

    // Card 1: Wedding Announcement
    const card1 = document.createElement('div');
    card1.className = 'card';
    card1.innerHTML = `<h2>Wir heiraten!</h2>
                       <p>Und möchten diesen besonderen Tag mit den Menschen teilen, die wir besonders lieb haben!</p>
                       <p>Dazu gehörst du!</p>`;

    // Card 2: CountDown
    const card2 = document.createElement('div');
    card2.className = 'card';
    card2.innerHTML = `<h2>Wir freuen uns!</h2>
                       <div class="countdown" id="countdown-time">--d --h --m --s</div>`;

    // Card 3: Location
    const locationCard = document.createElement('div');
    locationCard.className = 'card location-card';
    locationCard.innerHTML = `<div class='location-overlay'>
                                <h2>Wann und Wo</h2>
                                <p>Datum: 29. August 2026<br>Ort: Obergurgl, Österreich<br><br><b>Früher Start am Vormittag 10:00</b></p>
                              </div>`;

    // Card Accomodation
    const cardac = document.createElement('div');
    cardac.className = 'card double-row';
    cardac.innerHTML = `<h2>Übernachtung</h2>
                       <p>Als bodenständige preiswerte Option, empfehlen wir die Appartments und Zimmer im Haus Aktiv und Wendlhof. Beide Unterkünfte sind recht nah an der Kirche. Bitte wendet euch für diese Unterkünfte an Hermine und erwähnt den Anlass:</p>
                       <p>
                       <b>Hermine Schöpf</b>
                       <a href="tel:+4352566322" target='_blank' class='button'>+43 5256 6322</a>
                       <a href="mailto:info@haus-aktiv.com" target='_blank' class='button'>info@haus-aktiv.com</a></p>
                       <p>Sollte Hermine schon voll sein oder ihr etwas luxuriöseres suchen gibt es ein Buchungsportal für Hotels:</p>
                       <p><a href="https://www.oetztal.com/de/suchen-buchen/unterkuenfte/unterkunftsliste?from=2026-08-28&to=2026-08-30&adults[0]=2&location[0]=38429dda-1022-4f98-a189-412e6b244984&sort=price&search=1" target='_blank' class='button'>Tourismusverband</a></p>`;

    // Card Breakfast
    const cardbr = document.createElement('div');
    cardbr.className = 'card';
    cardbr.innerHTML = `<div>
                                <h2>Sonntagsfrühstück</h2>
                                <p>
                                <br>Für den Morgen nach der Hochzeit planen wir ein gemeinsames Frühstück. 
                                <br><br>(voraussichtlich 9:00-11:00)</p>
                              </div>`;

    // Card Marathon
    const cardmar = document.createElement('div');
    cardmar.className = 'card double-row';
    cardmar.innerHTML = `<div>
                                <h2>Buchung und Abreise im Kontext des Ötztal Radmarathons</h2>
                                <p>
                                <br>Am 30. August findet der Ötztal Radmarathon statt.
                                <br><br>Wir empfehlen die <b>zeitnahe Buchung einer Unterkunft</b>, da die Radmarathon Startplätze ab Mitte Februar vergeben werden.
                                <br><br>Am Abreisetag Sonntag wird der Weg durchs Tal zweitweise gesperrt sein. Unter der Annahme, dass der Ablauf dem des Vorjahres entspricht, muss der Nachbarort Sölden bis ~12:30 passiert sein. Die genauen Durchfahrtszeiten werden noch bekannt gegeben.
                                </p>
                              </div>`;

    // Card Travel Together
    const cardtr = document.createElement('div');
    cardtr.className = 'card';
    cardtr.innerHTML = `<div>
                                <h2>Zusammen Reisen und Unterkommen</h2>
                                <p>Wenn ihr offen seid jemanden mitzunehmen oder eine Unterkunft zu teilen, könnt ihr euch in dieser unmoderierten Gruppe zusammenfinden:</p>
                                <p><a href="https://chat.whatsapp.com/Hba1y3pTnPbFohEDtqa1mD" target='_blank' class='button'>WhatsApp Gruppe</a></p>
                               </div>`;

    // Card Games
    const cardga = document.createElement('div');
    cardga.className = 'card';
    cardga.innerHTML = `<div>
                                <h2>Spiele / Aktivitäten </h2>
                                <p>Falls Ihr im Rahmen der Feier eine Aktivität oder ein Spiel beitragen wollt, so stimmt das bitte vorzeitig und rechtzeitig mit dem Trauzeugen Team ab.</p>
                                <p><b>Ansprechpartnerin Aktivitäten</b><a href="https://wa.me/436766268474" target='_blank' class='button'>WhatsApp Marie</a></p>
                               </div>`;

    container.appendChild(cardmar);
    container.appendChild(cardtr);
    container.appendChild(cardac);
    container.appendChild(cardbr);
    container.appendChild(locationCard);
    container.appendChild(cardga);
    container.appendChild(card2);

    const initialDeadline = new Date('2026-08-29T10:00:00').getTime();
    const countdownEl = document.getElementById('countdown-time');
    setInterval(() => updateCountdown(initialDeadline, countdownEl), 1000);
  }

  function startSlideshow(images = ['./background1.jpg','./background2.jpg','./background3.JPG','./background4.jpeg','./background5.jpeg','background6.jpeg'], interval = 6000) {
    const slides = document.querySelectorAll('.bg-slide');
    if (slides.length < 2) return;

    let current = 1;
    let activeIndex = 0;

    slides[0].style.backgroundImage = `url('${images[0]}')`;
    slides[1].style.backgroundImage = `url('${images[1 % images.length]}')`;
    slides[0].dataset.active = 'true';
    slides[1].dataset.active = 'false';

    setInterval(() => {
      const nextImage = images[(current + 1) % images.length];
      const showSlide = activeIndex ^ 1;
      slides[showSlide].style.backgroundImage = `url('${nextImage}')`;
      slides[showSlide].dataset.active = 'true';
      slides[activeIndex].dataset.active = 'false';
      activeIndex = showSlide;
      current = (current + 1) % images.length;
    }, interval);
  }

  function init() {
    renderCards();
    startSlideshow();
    enableHeaderFadeOnMobile();
  }

  document.addEventListener('DOMContentLoaded', init);

  function enableHeaderFadeOnMobile() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let sentinel = document.getElementById('header-sentinel');
    if (!sentinel) {
      sentinel = document.createElement('div');
      sentinel.id = 'header-sentinel';
      sentinel.style.position = 'relative';
      sentinel.style.width = '1px';
      sentinel.style.height = '1px';
      header.parentNode.insertBefore(sentinel, header.nextSibling);
    }

    function shouldObserve() { return true; }

    let io;
    function setupObserver() {
      if (io) io.disconnect();
      if (!shouldObserve()) {
        header.classList.remove('header-hidden');
        return;
      }
      io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio === 0) header.classList.add('header-hidden');
          else header.classList.remove('header-hidden');
        });
      }, { root: null, threshold: [0,1], rootMargin: `-${parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-reserve')||60)}px 0px 0px 0px` });
      io.observe(sentinel);
    }

    window.addEventListener('resize', setupObserver, {passive:true});
    setupObserver();
  }

})();
