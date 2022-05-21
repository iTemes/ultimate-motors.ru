import $ from 'jquery';
window.jQuery = $;
window.$ = $;

// import Swiper JS
import Swiper, { Autoplay, Lazy } from 'swiper';
Swiper.use([Autoplay, Lazy]);

document.addEventListener('DOMContentLoaded', () => {
  const infoToogle = document.querySelector('.info-toogle');
  const headerContacts = document.querySelector('.header-contacts');
  const navToogle = document.querySelector('.nav-toogle');
  const mainNav = document.querySelector('.main-nav');
  const relativeLinks = document.querySelectorAll('.main-nav__link');

  infoToogle.addEventListener('click', handleInfoToogle);
  navToogle.addEventListener('click', handleNavToogle);

  $("a[href^='#']").on('click', function () {
    const _href = $(this).attr('href');
    $('html, body').animate(
      { scrollTop: $(_href).offset().top - 50 + 'px' },
      {
        duration: 700,
        easing: 'swing',
      }
    );
    handleNavToogle();
    return false;
  });

  relativeLinks.forEach(function (it) {
    it.addEventListener('click', () => {
      it.classList.toggle('active');
    });
  });

  function handleInfoToogle() {
    headerContacts.classList.toggle('open');
    infoToogle.classList.toggle('open');

    navToogle.classList.remove('open');
    mainNav.classList.remove('open');
  }

  function handleNavToogle() {
    navToogle.classList.toggle('open');
    mainNav.classList.toggle('open');

    headerContacts.classList.remove('open');
    infoToogle.classList.remove('open');
  }

  function navBarScroll() {
    const navBarOffset = mainNav.offsetTop;
    let windowPosScroll = window.scrollY;
    if (window.screen.width > 960) {
      window.addEventListener('scroll', function (evt) {
        windowPosScroll = window.scrollY;
        windowPosScroll >= navBarOffset ? mainNav.classList.add('scrolled') : mainNav.classList.remove('scrolled');
      });
    }
  }
  navBarScroll();

  new Swiper('.swiper-container', {
    // Optional parameters
    autoplay: {
      delay: 15000,
    },
    direction: 'horizontal',
    preloadImages: true,
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    speed: 600,
  });
});
