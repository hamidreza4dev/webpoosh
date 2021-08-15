// components
/* accordion */
const accordion = document.querySelectorAll('.accordion-btn');
if (accordion.length) {
  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', () => {
      accordion[i].classList.toggle('active');
      const panel = accordion[i].nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  }
}

/* modal */
const overlay = document.querySelector('.overlay');
function showModal(event, data) {
  data = data || event.target.getAttribute('data-modal');

  // close mobile menu on modal showen
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
  }

  // select targets
  const targetModal = data;
  const targetModalEl = document.getElementById(targetModal);

  // toggle modal
  overlay.classList.add('active');
  targetModalEl.classList.add('active');

  // close btn
  const closeModalBtn = targetModalEl.querySelector('.close-modal-btn');
  closeModalBtn.addEventListener('click', closeModal, { once: true });
  overlay.addEventListener('click', closeModal, { once: true });

  // Escape Kay
  document.addEventListener(
    'keydown',
    e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    { once: true }
  );

  // toggle modal options
  function closeModal() {
    overlay.classList.remove('active');
    targetModalEl.classList.remove('active');
  }
}

/* tab navigation */
const tabNavigation = document.querySelectorAll('.tab-navigation');
if (tabNavigation.length) {
  for (let i = 0; i < tabNavigation.length; i++) {
    const tabBtn = tabNavigation[i].querySelectorAll('.tab-btn');
    const tabItem = tabNavigation[i].querySelectorAll('.tab-item');

    for (let j = 0; j < tabBtn.length; j++) {
      tabBtn[j].addEventListener('click', () => {
        for (let k = 0; k < tabItem.length; k++) {
          tabItem[k].classList.remove('active');
        }
        for (let k = 0; k < tabBtn.length; k++) {
          tabBtn[k].classList.remove('active');
        }
        tabBtn[j].classList.add('active');
        tabItem[j].classList.add('active');
      });
    }
  }
}

/*=============================================
=                   website                   =
=============================================*/
const navActions = document.querySelectorAll('.nav-action');
const hoverOverlay = document.querySelector('.hover-overlay');

const navigation = document.getElementById('navigation');
const nav = document.querySelector('nav');

// submenu config
const navigationItem = document.querySelectorAll('.navigation-item');

navActions.forEach(item => {
  item.addEventListener('mouseenter', showOverLay);
  item.addEventListener('mouseleave', hideOverLay);
});

function showOverLay() {
  if (window.innerWidth > 767) {
    const navOffset = nav.offsetTop;
    if (window.pageYOffset >= navOffset) {
      hoverOverlay.style.top = nav.clientHeight + 'px';
    } else {
      hoverOverlay.style.top = navigation.clientHeight + 'px';
    }

    hoverOverlay.classList.add('active');
  }
}

function hideOverLay() {
  if (window.innerWidth > 767) {
    const navOffset = nav.offsetTop;
    if (window.pageYOffset >= navOffset) {
      hoverOverlay.style.top = nav.clientHeight + 'px';
    } else {
      hoverOverlay.style.top = navigation.clientHeight + 'px';
    }

    hoverOverlay.classList.remove('active');
  }
}

// submenu overlay
navigationItem.forEach(item => {
  const subMenu = item.querySelector('.sub-menu');
  if (subMenu) {
    item.addEventListener('mouseenter', showSubOverLay);
    item.addEventListener('mouseleave', hideSubOverLay);
  }

  function showSubOverLay() {
    if (window.innerWidth > 767) {
      const navOffset = nav.offsetTop;
      if (window.pageYOffset >= navOffset) {
        hoverOverlay.style.top = nav.clientHeight + subMenu.scrollHeight + 'px';
      } else {
        hoverOverlay.style.top =
          navigation.clientHeight + subMenu.scrollHeight + 'px';
      }

      hoverOverlay.classList.add('active');
    }
  }

  function hideSubOverLay() {
    if (window.innerWidth > 767) {
      const navOffset = nav.offsetTop;
      if (window.pageYOffset >= navOffset) {
        hoverOverlay.style.top = nav.clientHeight + subMenu.scrollHeight + 'px';
      } else {
        hoverOverlay.style.top =
          navigation.clientHeight + subMenu.scrollHeight + 'px';
      }

      hoverOverlay.classList.remove('active');
    }
  }
});

// sticky navigation
const navOffset = nav.offsetTop;
window.addEventListener('scroll', function () {
  if (window.pageYOffset >= navOffset) {
    nav.classList.add('sticky');
    hoverOverlay.style.top = nav.clientHeight + 'px';
  } else {
    nav.classList.remove('sticky');
    hoverOverlay.style.top = navigation.clientHeight + 'px';
  }
});

// product btn
const productBtn = document.querySelectorAll('.product-btn');
if (productBtn.length) {
  productBtn.forEach(item => {
    item.addEventListener('click', e => {
      showModal(e, 'productModal');
    });
  });
}

// product modal swiper
const productModalContentInner = document.querySelector(
  '.modal.product-modal .product-content-inner'
);
if (productModalContentInner) {
  if (window.innerWidth > 1024) {
    productModalContentInner.style.height =
      productModalContentInner.offsetHeight + 'px';

    document.querySelector('.modal.product-modal .gallery-top').style.width =
      (screen.height / 2) * 1.2 + 'px';
  }

  productModalContentInner.style.padding = '30px';
  productModalContentInner.style.flexGrow = '1';
}

// swiepr config
const galleryThumbs = new Swiper('.modal.product-modal .gallery-thumbs', {
  spaceBetween: 15,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  direction: 'vertical',
});
const galleryTop = new Swiper('.modal.product-modal .gallery-top', {
  spaceBetween: 10,
  grabCursor: true,
  thumbs: {
    swiper: galleryThumbs,
  },
});

// load overlay mobile menu
if (window.innerWidth < 768) {
  overlay.style.zIndex = 20;
}
