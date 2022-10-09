
const popupBtn = document.querySelectorAll('.popup-btn');
const popupOverlay = document.querySelector('.popup__body');
const popup = document.querySelector('.popup');
popupBtn.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    popup.classList.add('open')
    document.querySelector(`[data-target="${path}"]`).classList.add('open');
    document.body.classList.toggle('stop-scroll');
  })
});
popup.addEventListener('click', (e) => {
  if (e.target == popupOverlay) {
    popup.classList.remove('open')
    document.body.classList.toggle('stop-scroll');
  };
  if (e.target == document.querySelector('.popup__close svg')) {
    popup.classList.remove('open')
    document.body.classList.toggle('stop-scroll');
  };
});

const anchors = document.querySelectorAll('nav a')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};

document.querySelector('.burger').addEventListener('click',
  function () {
    document.querySelector('.burger').classList.toggle('open');
    document.querySelector('.header').classList.toggle('header-active');
    document.querySelector('.top__nav').classList.toggle('header__top-active');
    document.querySelector('.bottom__nav').classList.toggle('header__top-active');
    document.body.classList.toggle('stop-scroll');
    document.querySelectorAll('nav a').forEach(function (el) {
      el.addEventListener('click', function () {
        document.querySelector('.burger').classList.remove('open');
        document.querySelector('.header').classList.remove('header-active');
        document.querySelector('.top__nav').classList.remove('header__top-active');
        document.querySelector('.bottom__nav').classList.remove('header__top-active');
        document.body.classList.remove('stop-scroll');
      });
    });
  });

document.querySelector('.top__search').addEventListener('click', (e) => {
  document.querySelector('.top__input').classList.toggle('top__form-visible');
  e.preventDefault();
});

document.querySelector('.btn__mobile').addEventListener('click', function () {
  document.querySelector('.btn__mobile').classList.toggle('btn__mobile-active')
  document.querySelector('.header__bottom').classList.toggle('header__bottom-active')
  document.querySelectorAll('.btn__playaudio').forEach((e) => {
    e.classList.toggle('btn__playaudio-active');
  });
});

const btnPlayaudio = document.querySelectorAll('.btn__playaudio')
for (let button of btnPlayaudio) {
  button.addEventListener("click", e => {
    let activeBtn = document.querySelector('button.pause')
    if (activeBtn && activeBtn !== e.currentTarget) {
      activeBtn.classList.remove('pause')
    }
    button.classList.toggle('pause')
  })
}

const btnMore = document.querySelector('.podcast__btn');
const podcastItems = document.querySelectorAll('.podcast__item');
btnMore.addEventListener('click', () => {
  podcastItems.forEach(el => {
    el.classList.add('podcast__item-visible')
  });
  btnMore.closest('.podcast__next').classList.add('podcast__next-hidden');
})

const btnEvent = document.querySelectorAll('.podcast__event')
for (let button of btnEvent) {
  button.addEventListener("click", e => {
    let activeBtnEvent = document.querySelector('button.pause')
    if (activeBtnEvent && activeBtnEvent !== e.currentTarget) {
      activeBtnEvent.classList.remove('pause')
    }
    button.classList.toggle('pause')
  })
}

const element = document.querySelector('.broadcast__author-select');
const choices = new Choices(element, {
  position: 'down',
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
});

$(".accordion-list").accordion({
  heightStyle: "content",
  collapsible: true,
  icons: false,
  create: function () {
    $('.guest__header').attr('tabIndex', '0');
  },
});

document.querySelectorAll('.blogger__name').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.blogger__name').forEach(function (btn) {
      btn.classList.remove('blogger__name-active')
    });
    e.currentTarget.classList.add('blogger__name-active');
    document.querySelectorAll('.tab__item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tab__item-active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tab__item-active');
    if (/iPhone|Android/i.test(navigator.userAgent)) {
      document.querySelector(`[data-target="${path}"]`).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    };
  });
});

const simplebar = new SimpleBar(document.getElementById('playlist'));
simplebar.contentWrapperEl.setAttribute('tabindex', '-1');

const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1200: {
      spaceBetween: 30,
      slidesPerView: 4,
    },
    576: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    320: {
      spaceBetween: 10,
      slidesPerView: 2,
    }
  }
});

const validation = new JustValidate('#form');
validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Имя должно состоять от 3 до 30 букв'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя должно состоять от 3 до 30 букв'
    },
  ])
  .addField('#mail', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail'
    },
    {
      rule: 'email',
      errorMessage: 'Некорекктный e-mail'
    },
  ])
  .addField('#checkbox', [
    {
      rule: 'required',
      errorMessage: 'Вы забыли поставить галочку'
    },
  ])
  .addField('#comment', [
    {
      rule: 'required',
      errorMessage: 'Вы забыли оставить отзыв'
    }
  ]);

const popupvalidation = new JustValidate('#popup-form');
popupvalidation
  .addField('#login', [
    {
      rule: 'required',
      errorMessage: 'Вы забыли ввести логин'
    },
  ])
  .addField('#password', [
    {
      rule: 'required',
      errorMessage: 'Вы забыли ввести пароль'
    }
  ]);
