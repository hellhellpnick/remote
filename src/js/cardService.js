import { cardService } from "./constants";

const cardServiceListener = () => {
  cardService.forEach((item) => {
    item.addEventListener("click", () => {
      if (
        item.classList.contains(
          "card-service--active",
        )
      ) {
        item.classList.remove(
          "card-service--active",
        );
      } else {
        item.classList.add(
          "card-service--active",
        );
      }
    });
  });
};

export { cardServiceListener };
