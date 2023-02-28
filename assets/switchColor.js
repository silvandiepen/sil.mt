// document.addEventListener("DOMContentLoaded", function () {
//   initSwitchColor();
// });

// let stilColors = {
//   primary: "",
//   secondary: "",
//   background: "",
//   foreground: "",
// };
// const styles = {
//   field:
//     "background-color: var(--ol-background); padding: 1em; border-radius: var(--ol-border-radius); margin-top: 0.5em; display: flex; flex-direction: row-reverse; justify-content: space-between; align-items: center;",
//   modal:
//     "position:fixed;padding: var(--ol-space,1em); z-index:100;color: var(--ol-foreground); background:var(--ol-background90); border-radius: var(--ol-border-radius); top: 50%; left: 50%; transform: translate(-50%,-50%)",
//   closeButton: "position: absolute; left: 100%; bottom: 100%;",
//   inputField:
//     "width: 2em; height: 2em; margin: 0.5em; border: 0; padding: 0; background: none;",
//   resetButton: "margin: 0.5em auto auto auto;",
// };

// const customStyleElement = document
//   .createElement("style")
//   .setAttribute("id", "custom");

// const createInput = (name) => {
//   const inputField = document.createElement("input");
//   inputField.setAttribute("type", "color");
//   inputField.setAttribute("id", name);
//   inputField.setAttribute("value", stilColors[name].trim());
//   inputField.style.cssText = styles.inputField;
//   inputField.addEventListener("change", () => {
//     stilColors[name] = inputField.value;
//     saveToLocalStorage();
//     applyColors();
//   });

//   return inputField;
// };

// const createElement = (element) => {
//   const el = document.createElement(element.tag || "div");
//   el.classList = element.classes || "";
//   el.style.cssText = element.styles || "";
//   el.innerHTML = element.html || "";
//   element.attributes &&
//     Object.keys(element.attributes || {}).forEach((attr) => {
//       el.setAttribute(attr, element.attributes[attr]);
//     });
//   element.events &&
//     Object.keys(element.events || {}).forEach((event) => {
//       el.addEventListener(event, () => {
//         console.log(event, element.events);
//         element.events[event]();
//       });
//     });
//   element.children &&
//     element.children.forEach((child) => {
//       el.appendChild(child);
//     });
//   return el;
// };

// const createField = (name, container) => {
//   const label = createElement({
//     tag: "label",
//     attributes: { for: name },
//     html: name,
//   });
//   const field = createElement({
//     classes: "input-field",
//     styles: styles.field,
//     children: [label, createInput(name)],
//   });
//   container.appendChild(field);
// };
// const resetStyles = () => {
//   localStorage.removeItem("stilColors");
//   Object.keys(stilColors).forEach((key) => {
//     stilColors[key] = "";
//   });
//   applyColors();
// };
// const createColorModal = () => {
//   const parent = createElement({
//     classes: "card",
//     styles: styles.modal,
//   });

//   const closeButton = createElement({
//     tag: "button",
//     html: "close",
//     classes: "button",
//     styles: styles.closeButton,
//     events: {
//       click: () => parent.remove(),
//     },
//   });

//   parent.appendChild(closeButton);

//   Object.keys(stilColors).forEach((color) => {
//     createField(color, parent);
//   });

//   const resetButton = createElement({
//     tag: "button",
//     html: "reset",
//     classes: "button",
//     styles: styles.resetButton,
//     events: {
//       click: resetStyles(),
//     },
//   });

//   parent.appendChild(resetButton);
//   document.body.appendChild(parent);
// };

// const saveToLocalStorage = () => {
//   console.log(stilColors);
//   localStorage.setItem("stilColors", JSON.stringify(stilColors));
// };

// const applyColors = () => {
//   Object.keys(stilColors).forEach((key) => {
//     if (stilColors[key]) {
//       document.body.style.setProperty(`--ol-${key}`, stilColors[key]);
//     } else {
//       document.body.style.removeProperty(`--ol-${key}`);
//     }
//   });
// };

// const getLocalStorageColors = () => {
//   if (localStorage.getItem("stilColors") !== null) {
//     const localColors = JSON.parse(localStorage.getItem("stilColors"));

//     Object.keys(localColors).forEach((key) => {
//       stilColors[key] = localColors[key];
//     });

//     applyColors();
//   } else {
//     Object.keys(stilColors).forEach((key) => {
//       stilColors[key] = getComputedStyle(document.body).getPropertyValue(
//         `--ol-${key}`
//       );
//     });
//   }
// };

// const createButton = () => {
//   const container = document.querySelector(".footer .navigation__list");

//   const button = createElement({
//     tag: "button",
//     classes: "button",
//     html: "switch color",
//     events: { click: () => createColorModal() },
//   });

//   container.appendChild(button);
// };

// const initSwitchColor = () => {
//   createButton();
//   getLocalStorageColors();
// };
