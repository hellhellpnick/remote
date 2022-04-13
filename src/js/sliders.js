const sliders = () => {
  $(".section-stage__box").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $(".section-stage__btn--left"),
    nextArrow: $(".section-stage__btn--right"),
    centerMargin: "100px",
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".section-example__content").slick({
    slidesToShow: 2,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: $(
            ".section-example__btn--left",
          ),
          nextArrow: $(
            ".section-example__btn--right",
          ),
        },
      },
    ],
  });
};

export { sliders };
