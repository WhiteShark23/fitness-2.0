export const initSwiperFirst = () => {
  const swiperFirst = new window.Swiper('.swiper-first', {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      }},
    loop: true,
    navigation: {
      nextEl: '.trainers__btn--next',
      prevEl: '.trainers__btn--prev',
    },
  });

  return swiperFirst;
};

export const initSwiperLast = () => {
  const swiperLast = new window.Swiper('.swiper-last', {
    navigation: {
      nextEl: '.reviews__btn--next',
      prevEl: '.reviews__btn--prew',
    },
  });

  return swiperLast;
};
