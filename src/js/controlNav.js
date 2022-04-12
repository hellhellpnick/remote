import {
  wrapperLogo,
  burgerBtn,
  mainNav,
  body,
  nav,
  itemsMainNav,
} from "./constants";

const onClickItemMenu = (
  arrChild,
  classChild,
) => {
  arrChild.forEach((item, index) =>
    item.addEventListener("click", () => {
      if (!item.classList.contains(classChild)) {
        arrChild.forEach((element) =>
          element.classList.remove(classChild),
        );
        wrapperLogo.classList.remove(
          "section-header__nav-box--fixed",
        );
        burgerBtn.classList.remove(
          "burger--open",
        );
        mainNav.classList.remove(
          "main-nav--open",
        );
        body.style.overflow = "auto";
        item.classList.add(classChild);
      } else {
        wrapperLogo.classList.remove(
          "section-header__nav-box--fixed",
        );
        burgerBtn.classList.remove(
          "burger--open",
        );
        mainNav.classList.remove(
          "main-nav--open",
        );
        body.style.overflow = "auto";
        item.classList.add(classChild);
      }
    }),
  );
};

const controlBurgerMenu = () => {
  if (
    burgerBtn.classList.contains("burger--open")
  ) {
    burgerBtn.classList.remove("burger--open");
    mainNav.classList.remove("main-nav--open");
    wrapperLogo.classList.remove(
      "section-header__nav-box--fixed",
    );
    body.style.overflow = "auto";
  } else {
    burgerBtn.classList.add("burger--open");
    mainNav.classList.add("main-nav--open");
    body.style.overflow = "hidden";

    if (
      !wrapperLogo.classList.contains(
        "section-header__nav-box--fixed",
      )
    ) {
      wrapperLogo.classList.add(
        "section-header__nav-box--fixed",
      );
    }
  }
};

const changeItemsMenu = (arrBox, scroll) => {
  arrBox.forEach((item, index) => {
    if (
      item.getBoundingClientRect().top + scroll <
        scroll + 100 &&
      item.getBoundingClientRect().bottom >= 200
    ) {
      itemsMainNav.forEach((elem) => {
        elem.classList.remove(
          "main-nav__item--active",
        );
      });

      itemsMainNav[index].classList.add(
        "main-nav__item--active",
      );
    } else if (scroll < 400) {
      itemsMainNav.forEach((elem) => {
        elem.classList.remove(
          "main-nav__item--active",
        );
      });
    }
  });
};

const fixedPositionMenu = () => {
  const arrSections = [
    document.getElementById("service"),
    document.getElementById("stage"),
    document.getElementById("example"),
    document.getElementById("info"),
  ];

  if (window.scrollY > 100) {
    nav.classList.add(
      "section-header__nav--fixed",
    );
    nav.style.clientHeight =
      nav.childNodes[0].nextElementSibling.clientHeight;

    changeItemsMenu(arrSections, window.scrollY);
  } else {
    nav.classList.remove(
      "section-header__nav--fixed",
    );
  }
};

const controlResizeWindow = () => {
  if (window.innerWidth > 1024) {
    burgerBtn.classList.remove("burger--open");
    mainNav.classList.remove("main-nav--open");
    wrapperLogo.classList.remove(
      "section-header__nav-box--fixed",
    );
  }
};

export {
  onClickItemMenu,
  controlBurgerMenu,
  fixedPositionMenu,
  controlResizeWindow,
};
