$(function () {

  $('.shop-page__number').styler();

  $('.shop-page__slider-carts').slick({
    asNavFor: '.shop-page__slider-big',
    arrows: false,
    vertical: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    draggable: false,
  });
  $('.shop-page__slider-big').slick({
    asNavFor: '.shop-page__slider-carts',
    arrows: false,
    draggable: false,
    fade: true,
  });
  // tabs
  $('.tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.tabs__link').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');
    $('.tabs-item').removeClass('tabs-item--active');
    $($(this).attr('href')).addClass('tabs-item--active');
  });
  // tabs
  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });
  $('.button-list').on('click', function () {
    $('.products__item').addClass('products__item--list');
  });
  $('.button-grid').on('click', function () {
    $('.products__item').removeClass('products__item--list');
  });
  $('.select-style').styler();
  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: '$',
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });


  $('.shop-page__slider-carts').slick({
    asNavFor: '.shop-page__slider-big',
    arrows: false,
    vertical: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    draggable: false,
  });
  $('.shop-page__slider-big').slick({
    asNavFor: '.shop-page__slider-carts',
    arrows: false,
    draggable: false,
  });
  $('.top-slider__inner').slick({
    arrows: false,
    draggable: false,
    fade: true
  });
  $('.blog-standart__slider-list').slick({
    prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="images/icons/blog-slider-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next slick-btn"><img src="images/icons/blog-slider-right.svg" alt=""></button>',
  });
  // звездний рейтинг
  $(".stars").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
  });
  $(".shop-page__stars, .tabs__info-stars,.related-products__stars").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
  });
  // звездний рейтинг
  // таймер
  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  function initializeClock(id, endtime) {
    const clock = document.querySelector('.time__items');
    const daysSpan = clock.querySelector('.time__item-days');
    const hoursSpan = clock.querySelector('.time__item-hours');
    const minutesSpan = clock.querySelector('.time__item-minutes');
    const secondsSpan = clock.querySelector('.time__item-seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  const deadline = $('.time__items').attr('data-time');
  initializeClock('clockdiv', deadline);
  // таймер


});