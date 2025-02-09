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

//оверлей;
// import { initialOverlayData } from "./data.js";

// document.addEventListener("DOMContentLoaded", function () {
//   const openOverlayBtns = document.querySelectorAll(
//     ".header__logo,.header__contacts-name,.main__image-l,.main__image-c,.main__image-r,.footer__top,.footer__copyright-item li,.footer__copyright-bottom"
//   );
//   const overlay = document.getElementById("overlay");
//   const overlayClose = document.querySelector(".overlay-close");
//   const overlayImage = document.querySelector(".overlay-inner__image img");
//   const overlayText = document.querySelector(".overlay-inner-text");
//   const scrollLock = document.body;

//   if (openOverlayBtns) {
//     openOverlayBtns.forEach((item, index) => {
//       item.addEventListener("click", function () {
//         overlay.classList.add("active");
//         scrollLock.classList.add("lock");

//         const dataIndex = index % initialOverlayData.length;
//         const currentData = initialOverlayData[dataIndex];

//         if (currentData) {
//           overlayImage.src = currentData.image;
//           overlayText.textContent = currentData.text;
//         } else {
//           console.error(
//             "Ошибка: Данные для индекса",
//             dataIndex,
//             "отсутствуют."
//           );
//         }
//       });
//     });
//   }

//   overlay.addEventListener("click", function (event) {
//     if (event.target === overlay || event.target === overlayClose) {
//       overlay.classList.remove("active");
//       scrollLock.classList.remove("lock");
//     }
//   });

//   overlayClose.addEventListener("click", function () {
//     overlay.classList.remove("active");
//     scrollLock.classList.remove("lock");
//   });
// });
/****************************************************************************************************************************************/
// import { initialOverlayData } from "./data.js";

// document.addEventListener("DOMContentLoaded", function () {
//   const openOverlayBtns = document.querySelectorAll(
//     "#header-logo, #header__contacts, #left, #center, #right, #requisites, #custom, #politics, #copyright"
//   ); // выбираем элементы по id
//   const overlay = document.getElementById("overlay");
//   const overlayClose = document.querySelector(".overlay-close");
//   const overlayImage = document.querySelector(".overlay-inner__image img"); // выбираем img внутри overlay-inner__image
//   const overlayText = document.querySelector(".overlay-inner-text");

//   if (openOverlayBtns) {
//     openOverlayBtns.forEach((item) => {
//       item.addEventListener("click", function () {
//         const itemId = item.id; // получаем id элемента, на который кликнули

//         // ищем в массиве объект, у которого id совпадает с id элемента
//         const currentData = initialOverlayData.find(
//           (data) => data.id === itemId
//         );

//         if (currentData) {
//           // если нашли данные, то заполняем оверлей
//           overlayImage.src = currentData.image;
//           overlayText.textContent = currentData.text;
//           overlay.style.display = "flex"; // показываем оверлей
//         } else {
//           console.warn(`Данные для элемента с id "${itemId}" не найдены.`);
//           // Можно добавить сюда логику обработки отсутствующих данных
//         }
//       });
//     });
//   }

//   overlay.addEventListener("click", function (event) {
//     if (event.target === overlay || event.target === overlayClose) {
//       overlay.style.display = "none"; // скрываем оверлей
//     }
//   });

//   overlayClose.addEventListener("click", function () {
//     overlay.style.display = "none"; // скрываем оверлей
//   });
// });
/*********************************************** */
// const overlay = document.getElementById("overlay");
// const overlayClose = document.querySelector(".overlay-close");
// const scrollLock = document.body;

// document.addEventListener("DOMContentLoaded", function () {
//   const openOverlayBtns = document.querySelector(".header__logo");
//   if (openOverlayBtns) {
//     openOverlayBtns.addEventListener("click", () => {
//       overlay.classList.add("active");
//     });
//   }

//   if (overlayClose) {
//     overlayClose.addEventListener("click", () => {
//       overlay.classList.remove("active");
//     });
//   }
//   overlay.addEventListener("click", function (event) {
//     if (event.target === overlay || event.target === overlayClose) {
//       overlay.classList.remove("active");
//     }
//   });
// });
/***************************************************************************************** */
// const overlay = document.getElementById("overlay");
// const overlayClose = document.querySelector(".overlay-close");
// const overlayInner = document.querySelector(".overlay-inner"); // Контейнер для темплейта

// document.addEventListener("DOMContentLoaded", function () {
//   const openOverlayBtn = document.querySelector(".header__logo"); // Кнопка или элемент, открывающий оверлей
//   const templateLogo = document.getElementById("templateLogo"); // Получаем темплейт

//   if (
//     openOverlayBtn &&
//     overlay &&
//     overlayClose &&
//     overlayInner &&
//     templateLogo
//   ) {
//     openOverlayBtn.addEventListener("click", () => {
//       // Клонируем содержимое temlate
//       const templateContent = templateLogo.content.cloneNode(true);

//       // Очищаем содержимое overlay-inner
//       overlayInner.innerHTML = "";

//       // Добавляем содержимое темплейта в overlay-inner
//       overlayInner.appendChild(templateContent);

//       // Отображаем оверлей
//       overlay.classList.add("active");
//     });

//     overlayClose.addEventListener("click", () => {
//       overlay.classList.remove("active");
//     });

//     overlay.addEventListener("click", function (event) {
//       if (event.target === overlay) {
//         overlay.classList.remove("active");
//       }
//     });
//   } else {
//     console.error(
//       "Один или несколько элементов не найдены. Проверьте ID и классы."
//     );
//   }
// });
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
