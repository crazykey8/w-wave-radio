
document.querySelector('#burger').addEventListener('click', () => {
  document.querySelector('.burger').classList.toggle('open');
});

document.querySelector('.top__search').addEventListener('click', (e) => {
  document.querySelector('.top__input').classList.toggle('top__form-visible');
  e.preventDefault();
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
  });
});

const simplebar = new SimpleBar(document.getElementById('playlist'));
simplebar.contentWrapperEl.setAttribute('tabindex', '-1');
