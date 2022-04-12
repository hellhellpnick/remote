import {
  onClickItemMenu,
  controlBurgerMenu,
  fixedPositionMenu,
  controlResizeWindow,
} from "./controlNav";
import {
  burgerBtn,
  itemsMainNav,
} from "./constants";
import { cardServiceListener } from "./cardService";
import { sliders } from "./sliders";
import {
  listenerInputs,
  submitForm,
} from "./form";

let succName = false,
  succPhone = false,
  succEmail = false;

document.addEventListener(
  "DOMContentLoaded",
  () => {
    window.addEventListener(
      "resize",
      controlResizeWindow,
    );

    window.addEventListener(
      "scroll",
      fixedPositionMenu,
    );

    burgerBtn.addEventListener(
      "click",
      controlBurgerMenu,
    );

    onClickItemMenu(
      itemsMainNav,
      "main-nav__item--active",
    );

    cardServiceListener();
    sliders();
    listenerInputs(
      succName,
      succPhone,
      succEmail,
    );
    submitForm(succName, succPhone, succEmail);
  },
);
