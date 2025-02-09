document.addEventListener("DOMContentLoaded", function () {
  const contactsName = document.querySelector(".header__contacts-name");
  const phoneLinks = document.querySelectorAll(".header__contacts-phones li a");
  const initialText = contactsName.textContent;

  phoneLinks.forEach(function (link) {
    link.addEventListener("mouseover", function (event) {
      const name = event.target.getAttribute("data-name");
      if (name) {
        contactsName.textContent = name;
      }
    });
    link.addEventListener("mouseout", function () {
      contactsName.textContent = initialText;
    });
  });
});

//меняем цвет на адресе,реквизитах,банках
document.addEventListener("DOMContentLoaded", function () {
  const lists = document.querySelectorAll(".requisites-hover");

  lists.forEach((list) => {
    list.addEventListener("mouseover", () => {
      lists.forEach((l) => l.classList.add("active"));
    });
    list.addEventListener("mouseout", () => {
      lists.forEach((l) => l.classList.remove("active"));
    });
  });
});

//открытие оверлея и отрисовка темплейта
const overlay = document.getElementById("overlay");
const overlayClose = document.querySelector(".overlay-close");
const overlayInner = document.querySelector(".overlay-inner");

document.addEventListener("DOMContentLoaded", function () {
  const openOverlayBtns = document.querySelectorAll("[id]"); // Выбираем все элементы с id

  if (openOverlayBtns && overlay && overlayClose && overlayInner) {
    openOverlayBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const templateClassName = btn.id; // Берем ID элемента, на который кликнули, и используем как КЛАСС для поиска темплейта.
        const template = document.querySelector(
          `template.${templateClassName}`
        ); // Ищем template с таким же КЛАССОМ

        if (template && template.tagName === "TEMPLATE") {
          // Проверяем, что template существует и это действительно элемент TEMPLATE
          // Клонируем содержимое template
          const templateContent = template.content.cloneNode(true);

          // Очищаем содержимое overlay-inner
          overlayInner.innerHTML = "";

          // Добавляем содержимое template в overlay-inner
          overlayInner.appendChild(templateContent);

          // Возвращаем прокрутку overlay-inner в начало (с задержкой)
          setTimeout(() => {
            overlayInner.scrollTo(0, 0);
          }, 0); // Небольшая задержка

          // Отображаем оверлей
          overlay.classList.add("active");
        } else {
          console.warn(
            `Template with class "${templateClassName}" not found or is not a <template> element.`
          );
        }
      });
    });

    overlayClose.addEventListener("click", () => {
      overlay.classList.remove("active");
    });

    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        overlay.classList.remove("active");
      }
    });
  } else {
    console.error(
      "Необходимые элементы не найдены (overlay, overlayClose, overlayInner)."
    );
  }
});
