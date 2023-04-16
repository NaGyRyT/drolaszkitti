//-------------------header---------------------------
document.querySelector(".js-header").innerHTML = `
  <div class="header-logo">Dr. Olasz Kitti</div>
  <nav class="nav">
      <input type="checkbox" id="nav-checkbox" class="nav-checkbox js-nav-checkbox">
      <label for="nav-checkbox" class="nav-checkbox-button">
              <span class="nav-checkbox-line"></span>
              <span class="nav-checkbox-line"></span>
              <span class="nav-checkbox-line"></span>
              <span class="nav-hidden-label">Fries menu</span>
      </label>
      <ul class="nav-list js-nav-list">
          <li class="nav-list-item"><a href="./index.html#introduction">Bemutatkozás</a></li>
          <li class="nav-list-item"><a href="./index.html#dermatology-cosmetology">Bőrgyógyászat kozmetológia</a></li>
          <li class="nav-list-item"><a href="./medical-aesthetics.html">Orvosesztétika</a></li>
          <li class="nav-list-item"><a href="./index.html#pricelist">Árlista</a></li>
          <li class="nav-list-item"><a href="#contact">Elérhetőség</a></li>
      </ul>
  </nav>
`;
//-------------------footer---------------------------
document.querySelector(".js-footer").innerHTML = `
  <div class="contact">
  <div>
      <h2>Elérhetőség:</h2>
      <ul>
          <li>Bőrgyógyászati és Esztétikai Rendelő</li>
          <li class="right-ul">6000 Kecskemét, Bocskai u. 9.</li>
          <li>Telefonos bejelentkezés: 
          <li class="right-ul">+36-20-454-4352 (8-17h)</li>
          <li>Lézeres kezelés bejelentkezés:
          <li class="right-ul">+36-30-194-9448</li>
          <li>Weboldal:</li>
          <li class="right-ul"><a href="http://drolaszkitti.hu">drolaszkitti.hu</a></li>
          <li>E-mail:</li>
          <li class="right-ul"><a href="mailto:dr.olaszkitti@gmail.com">dr.olaszkitti@gmail.com</a></li>
          <li>Facebook:</li>
          <li class="right-ul"><a href="https://www.facebook.com/people/Dr-Olasz-Kitti-B%C5%91rgy%C3%B3gy%C3%A1szati-%C3%A9s-kozmetol%C3%B3giai-mag%C3%A1nrendel%C5%91/100075973518941/" target="_blank">link</a></li>
      </ul>
  </div>
  <div>
      <iframe title="google map" class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5451.201886812899!2d19.696378!3d46.910566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4743da19c2ac043d%3A0x75363cd4824d484e!2zRHIuT2xhc3ogS2l0dGkgQsWRcmd5w7NnecOhc3phdGkgw6lzIGtvem1ldG9sb2dpYWkgbWFnw6FucmVuZGVsxZE!5e0!3m2!1shu!2shu!4v1681371682270!5m2!1shu!2shu" width="500" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <ul> 
    <li><a href="./dataprivacy.html">Adatvédelmi tájékoztató</a></li>
    <li><a href="./cookie.html">Süti tájékoztató</a></li>
    <li><a href="./impression.html">Impresszum</a></li>
  </ul>
  </div>
  <div class="copyright">&copy; 2023 Bőrgyógyászati és Esztétikai Rendelő - Dr. Olasz Kitti - Minden jog fenntartva.</div>
`;

let menuItem = document.querySelector(".js-nav-list");
let menuCheckBox = document.querySelector(".js-nav-checkbox");
let backToTopButton = document.querySelector(".back-to-top");

menuItem.addEventListener("click", closeMobilMenu);
function closeMobilMenu(){
    menuCheckBox.checked = false;
}

//-------------------back to top header logo------------
let headerLogo = document.querySelector(".header-logo");
headerLogo.addEventListener("click", backToTop); //call backToTop function

//--------------------back to top button----------------
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTopButton.classList.remove('back-to-top-hide');
  } else {
    backToTopButton.classList.add('back-to-top-hide');
  }
}
backToTopButton.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}