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
                                <p>Datum: 29. August 2026</b></p>
                                <p>Kirche: Johannes Nepomuk Kirche, Ramolweg 2</p>
                                <p>Feier: Hohe Mut Alm</p>
                                <p>Ort: 6456 Obergurgl, Österreich</p>
                              </div>`;

    // Card Accomodation
    const cardac = document.createElement('div');
    cardac.className = 'card double-row';
    cardac.innerHTML = `<h2>Übernachtung</h2>
                       <p>Solltet ihr bereits vor Monaten gebucht haben aber keine konkrete Buchungsbestätigung erhalten haben, empfehlen wir erneut mit eurer Unterkunft Kontakt aufzunehmen und um Bestätigung zu bitten.</p>
                       <p>Als alternative Unterbringung empfehlen wir das <i>Unizentrum Obergurgl</i>, wo mit dem Buchungspasswort <b>„Hochzeit Wildt“</b> noch Kapazitäten verfügbar sind. Achtet auf die Preisunterschiede je nach mitgebuchter Verpflegung.</p>
                       <p><a href="mailto:obergurgl@uibk.ac.at" class='button'>Unizentrum Obergurgl</a></p>
                       <p>Auch in anderen Quartieren gibt es noch Kapazitäten: Pension Michael, Haus Alpenblick, Haus Schönblick, Haus Christophorus und Ferienwohnungen Broser.</p>`;

    // Card Breakfast
    const cardbr = document.createElement('div');
    cardbr.className = 'card';
    cardbr.innerHTML = `<div>
                                <h2>Sonntagsfrühstück</h2>
                                <p>Für den Sonntag nach der Hochzeit laden wir euch herzlich zum gemeinsamen Abschlussfrühstück ein.</p>
                                <p>Universitätszentrum Obergurgl, Gaisbergweg 5, 6456 Obergurgl</p>
                                <p><b>7:00 bis 9:30</b></p>
                              </div>`;

    // Card Marathon
    const cardmar = document.createElement('div');
    cardmar.className = 'card';
    cardmar.innerHTML = `<div>
                                <h2>Abreise</h2>
                                <p>Am Sonntag wird der Weg durchs Tal zeitweise gesperrt sein. Es ist zu erwarten, dass der Nachbarort Sölden bis ~12:30 passiert sein muss.</p>
                                <p>Sobald die genauen Durchfahrtszeiten bekannt sind, aktualisieren wir die Angaben hier.</p>
                              </div>`;

    // Card Travel Together
    const cardtr = document.createElement('div');
    cardtr.className = 'card';
    cardtr.innerHTML = `<div>
                                <h2>Zusammen Reisen und Unterkommen</h2>
                                <p>Wenn ihr offen seid jemanden mitzunehmen oder eure Unterkunft zu teilen, könnt ihr euch in dieser unmoderierten Gruppe zusammenfinden:</p>
                                <p><a href="https://chat.whatsapp.com/Hba1y3pTnPbFohEDtqa1mD" target='_blank' class='button'>WhatsApp Mitreisende</a></p>
                               </div>`;

    // Card Games
    const cardga = document.createElement('div');
    cardga.className = 'card';
    cardga.innerHTML = `<div>
                                <h2>Spiele / Aktivitäten </h2>
                                <p>Falls Ihr im Rahmen der Feier eine Aktivität oder ein Spiel beitragen wollt, so stimmt das bitte vorzeitig und rechtzeitig mit dem Trauzeugen Team ab.</p>
                                <p><b>Ansprechpartnerin Aktivitäten</b><a href="https://wa.me/436766268474" target='_blank' class='button'>WhatsApp Marie</a></p>
                               </div>`;

    // Card Ablauf Kirche
    const cardkirche = document.createElement('div');
    cardkirche.className = 'card';
    cardkirche.innerHTML = `<div>
                                <h2>Zeiten Kirche</h2>
                                <p>Ab <b>9:30</b> seid ihr willkommen, euch vor der Kirche zu versammeln.</p>
                                <p>Gegen <b>9:50</b> ist Einlass, gegen <b>10:00</b> zieht die Braut ein.</p>
                                <p>Im Anschluss an die Trauung, gegen <b>11:15</b>, findet die Agape vor der Kirche statt.</p>
                              </div>`;

    // Card Ablauf Feier
    const cardfeier = document.createElement('div');
    cardfeier.className = 'card';
    cardfeier.innerHTML = `<div>
                                <h2>Zeiten Feier</h2>
                                <p><b>12:30</b> Gemeinsame Shuttle- & Liftfahrt auf die Hohe Mut.</p>
                                <p><b>16:00</b> Ende des regulären Liftbetriebs. Vor Ende der Feier ist eine Abfahrt nur in Notfällen möglich.</p>
                                <p><b>22:15</b> Ende der Feier und gemeinsame Liftabfahrt</p>
                              </div>`;

    // Card Kleiderordnung
    const cardkleider = document.createElement('div');
    cardkleider.className = 'card';
    cardkleider.innerHTML = `<div>
                                <h2>Kleiderordnung</h2>
                                <p>Von smart casual bis formell, kleidet euch festlich aber ganz so, wie ihr euch wohlfühlt.</p>
                                <p>Traditionsgemäß bitten wir, auf rein-weiße oder rein-rote Outfits zu verzichten.</p>
                              </div>`;

    // Card Schuhwahl
    const cardschuhe = document.createElement('div');
    cardschuhe.className = 'card';
    cardschuhe.innerHTML = `<div>
                                <h2>Schuhwahl</h2>
                                <p>Die Fußwege ab der Kirche sind dank Shuttle und Lift kurz. Auf der Alm besteht der Boden aus Planken und Fliesen. Das Gruppenfoto wird auf einer Wiese stattfinden. Entscheidet euch bei den Schuhen also lieber für "praktisch und bequem".</p>
                              </div>`;

    // Card Temperaturen
    const cardtemp = document.createElement('div');
    cardtemp.className = 'card';
    cardtemp.innerHTML = `<div>
                                <h2>Temperaturen</h2>
                                <p>Tagsüber ist im Dorfzentrum mit <b>11°C bis 16°C</b> und auf der Alm mit <b>6°C bis 11°C</b> zu rechnen. Stellenweise kann es zu Regenfall kommen.</p>
                                <p>Mit Ausnahme der Agape (traditioneller Sektempfang vor der Kirche) findet die Feier primär in Innenräumen statt.</p>
                              </div>`;

    // Card Geschenke
    const cardgeschenke = document.createElement('div');
    cardgeschenke.className = 'card double-row';
    cardgeschenke.innerHTML = `<div>
                                <h2>Geschenke und Übergabe</h2>
                                <p>Das größte Geschenk, das ihr uns machen könnt, ist, gemeinsam mit uns unsere Liebe und unser Versprechen zu feiern und ganz viel Lebensfreude mitzubringen.</p>
                                <p>Wenn ihr uns zusätzlich ein weltliches Geschenk machen möchtet, freuen wir uns über eine Spende für die Flitterwochenkasse oder den Beziehungspflegefond. 😇</p> 
                                <p>Die beste Gelgenheit um pysische Geschenke zu übergeben, ist bei der Agape vor der Kirche im Anschluss an die Trauung. So kann der logistische Aufwand für Transport zur und Verwahrung auf der Alm vermieden werden.</p>
                              </div>`;

    // Card Freitag
    const cardfreitag = document.createElement('div');
    cardfreitag.className = 'card';
    cardfreitag.innerHTML = `<div>
                                <h2>Vor der Hochzeit</h2>
                                <p>Viele Gäste reisen schon am Freitag an, allerdings ist das Brautpaar an diesem Tag mit Vorbereitungen beschäftigt. Falls ihr euch unabhängig verabreden möchtet:</p>
                                <p><a href="https://chat.whatsapp.com/BBLWJ2WESvY0G6S96EDw3U?s=cl&p=i&mlu=4" target='_blank' class='button'>WhatsApp Freitag</a></p>
                              </div>`;

    container.appendChild(locationCard);
    container.appendChild(cardkirche);
    container.appendChild(cardfeier);
    container.appendChild(cardkleider);
    container.appendChild(cardac);
    container.appendChild(cardtemp);
    container.appendChild(cardschuhe);
    container.appendChild(cardbr);
    container.appendChild(cardga);
    container.appendChild(cardgeschenke);
    container.appendChild(cardfreitag);
    container.appendChild(cardtr);
    container.appendChild(cardmar);
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
