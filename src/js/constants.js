const wrapperLogo = document.querySelector(
  ".section-header__nav-box",
);
const burgerBtn =
  document.querySelector(".burger");
const mainNav =
  document.querySelector(".main-nav");
const body =
  document.getElementsByTagName("body")[0];
const nav = document.querySelector(
  ".section-header__nav",
);

const itemsMainNav = document.querySelectorAll(
  ".main-nav__item",
);
const cardService = document.querySelectorAll(
  ".card-service",
);

export {
  wrapperLogo,
  burgerBtn,
  mainNav,
  body,
  nav,
  itemsMainNav,
  cardService,
};
