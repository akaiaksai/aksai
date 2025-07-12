document.addEventListener("DOMContentLoaded", function () {
  const formInputs = document.querySelectorAll(".reg input");
  const signInButton = document.querySelector("button");

  formInputs.forEach((input) => {
    const error = document.createElement("div");
    error.className = "error-message";
    input.insertAdjacentElement("afterend", error);
  });

  signInButton.addEventListener("click", function (event) {
    event.preventDefault();

    const email = formInputs[0].value.trim();
    const password = formInputs[1].value.trim();
    const number = formInputs[2].value.trim();

    const errors = [];

    document.querySelectorAll(".error-message").forEach((el) => (el.textContent = ""));

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.push({ index: 0, message: "Введите email" });
    } else if (!emailRegex.test(email)) {
      errors.push({ index: 0, message: "Неверный формат email" });
    }

    if (!password) {
      errors.push({ index: 1, message: "Введите пароль" });
    } else if (password.length < 6) {
      errors.push({ index: 1, message: "Пароль слишком короткий" });
    }

    if (!number) {
      errors.push({ index: 2, message: "Введите номер" });
    } else if (!/^\d+$/.test(number)) {
      errors.push({ index: 2, message: "Номер должен быть числом" });
    } else if (number.length < 6) {
      errors.push({ index: 2, message: "Номер слишком короткий" });
    }

    if (errors.length > 0) {
      errors.forEach(({ index, message }) => {
        const errorDiv = formInputs[index].nextElementSibling;
        if (errorDiv) {
          errorDiv.textContent = message;
        }
      });
    } else {
      alert("Форма успешно отправлена!");
    }
  });
});
