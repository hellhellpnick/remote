const inputs = document.querySelectorAll(
  ".section-form__wrapper",
);
const form = document.querySelector(
  ".section-form__form",
);
const btnForm =
  document.getElementById("btnSubmit");
const checkCondition = (item, condition) => {
  if (condition) {
    item.classList.add(
      "section-form__wrapper--success",
    );
    item.classList.remove(
      "section-form__wrapper--error",
    );
  } else {
    item.classList.remove(
      "section-form__wrapper--success",
    );
    item.classList.add(
      "section-form__wrapper--error",
    );
  }
};

const listenerInputs = () => {
  inputs.forEach((item) => {
    const input = item.querySelector(
      ".section-form__wrapper-input",
    );
    input.addEventListener("focus", () =>
      item.classList.add(
        "section-form__wrapper--focus",
      ),
    );
    input.addEventListener("blur", () =>
      item.classList.remove(
        "section-form__wrapper--focus",
      ),
    );
  });
  inputs.forEach((item, index) => {
    const regEmail = new RegExp(
      "[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+",
    );
    const input = item.querySelector(
      ".section-form__wrapper-input",
    );

    input.addEventListener("input", (e) => {
      const value = e.target.value;
      const arr = [];

      inputs.forEach((item) => {
        if (
          item.classList.contains(
            "section-form__wrapper--success",
          )
        ) {
          arr.push(true);
        } else {
          arr.push(false);
        }
      });

      if (arr.every((elem) => elem === true)) {
        btnForm.classList.remove(
          "button--disabled",
        );
      } else {
        btnForm.classList.add("button--disabled");
      }

      if (index === 0) {
        checkCondition(item, value.length >= 3);
      } else if (index === 1) {
        checkCondition(item, value.length >= 13);
      } else {
        checkCondition(
          item,
          regEmail.test(value),
        );
      }
    });
  });
};

const submitForm = () => {
  const modalWindow = document.querySelector(
    ".modal-window",
  );
  const modalWindowBtn = document.querySelector(
    ".modal-window__button",
  );

  modalWindowBtn.addEventListener("click", () => {
    modalWindow.classList.remove(
      "modal-window--active",
    );
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const arr = [];
    inputs.forEach((item) => {
      if (
        item.classList.contains(
          "section-form__wrapper--success",
        )
      ) {
        arr.push(true);
      } else {
        arr.push(false);
      }
    });

    if (arr.every((elem) => elem === true)) {
      modalWindow.classList.add(
        "modal-window--active",
      );
    }
  });
};
export { listenerInputs, submitForm };
