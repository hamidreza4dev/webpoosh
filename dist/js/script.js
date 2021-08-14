// components
/* accordion */
const accordion = document.querySelectorAll('.accordion-btn');
if (accordion.length) {
  console.log('check exist');
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
function showModal(event) {
  const targetModal = event.target.getAttribute('data-modal');
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
  console.log('check exist');
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
