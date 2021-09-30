




document.addEventListener('DOMContentLoaded', function() {

  'use strict';

  let device;
  device          = {
    'phone':        false,
    'tablet':       false,
    'desktop':      false
  };










  










  // ---------- DETECTION device
  (function() {

    const Device = () => {
      if (window.innerWidth < 768) {
        device.phone      = true;
        device.tablet     = false;
        device.desktop    = false;
        console.log(`----- device.phone`);
      } else if ((window.innerWidth >= 768) && (window.innerWidth < 1024)) {
        device.phone      = false;
        device.tablet     = true;
        device.desktop    = false;
        console.log(`----- device.tablet`);
      } else if (window.innerWidth >= 1024) {
        device.phone      = false;
        device.tablet     = false;
        device.desktop    = true;
        console.log(`----- device.desktop`);
      } else {
        console.error(`Device non détecté`);
      }
    }// const Device = () => {

    Device();
    window.onresize = Device;

  }());
  // ---------- /DETECTION device















  // ---------- MENU mobile
  (function () {

    // Cette fonctionnalité ne concerne que le smartphone et la tablette verticale
    if (!device.desktop) {
    
      const btn_open    = document.getElementById('menu-ouvrir');
      const btn_close   = document.getElementById('menu-fermer');
  
      btn_open.addEventListener('click', function () {
        FadeIn('navigation');
      }, false);
  
      btn_close.addEventListener('click', function () {
        FadeOut('navigation');
      }, false);

    };// if (!device.desktop) {

  })();
  // ---------- /MENU mobile







});// document.addEventListener('DOMContentLoaded', function() {










  











const FadeIn = (p_elt, p_display = 'block') => {

// ----- Init
let cible, fadeIncr;
cible                 = document.getElementById(p_elt);
cible.style.opacity   = 0;
cible.style.display   = p_display;
fadeIncr              = 0.1;

// ----- Traitement
(function Fade() {
  let opacite;
  opacite = parseFloat(cible.style.opacity);
  if (!((opacite += fadeIncr) > 1)) {
    cible.style.opacity = opacite;
    requestAnimationFrame(Fade);
  }// if (!((opacite += fadeIncr) > 1)) {
})();

}// const FadeIn = (p_elt, p_display = 'block') => {



const FadeOut = (p_elt) => {

// ----- Init
let cible, fadeIncr;
cible                 = document.getElementById(p_elt);
fadeIncr              = 0.1;
cible.style.opacity   = 1;

// ----- Traitement
(function Fade() {
  if ((cible.style.opacity -= fadeIncr) < 0) {
    cible.style.display = 'none';
  } else {
    requestAnimationFrame(Fade);
  }// if ((cible.style.opacity -= fadeIncr) < 0) {
})();

}// const FadeOut = (p_elt) => {
