const sliders = () => {
  $(document).ready(function () {
    $(".section-stage__box").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $(".section-stage__btn--left"),
      nextArrow: $(".section-stage__btn--right"),
      dots: false,
    });
  });

  $(document).ready(function () {
    $(".section-example__content").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $(".section-example__btn--left"),
      nextArrow: $(
        ".section-example__btn--right",
      ),
      dots: false,
    });
  });
};

export { sliders };
