document.addEventListener("DOMContentLoaded", function () {
  initSwitchColor();
});

let stilColors = {
  primary: "",
  secondary: "",
  dark: "",
  "dark-accent": "",
  light: "",
  "light-accent": "",
};

const customStyleElement = document
  .createElement("style")
  .setAttribute("id", "custom");

const createInput = (name) => {
  const inputField = document.createElement("input");
  inputField.setAttribute("type", "color");
  inputField.setAttribute("id", name);
  inputField.setAttribute("value", stilColors[name].trim());
  inputField.style.cssText =
    "width: 2em; height: 2em; margin: 0.5em; border: 0; padding: 0; background: none;";

  inputField.addEventListener("change", () => {
    stilColors[name] = inputField.value;
    saveToLocalStorage();
    applyColors();
  });

  return inputField;
};

const createField = (name, container) => {
  const field = document.createElement("div");
  field.classList.add("input-field");
  field.style.cssText =
    "background-color: var(--stil-foreground); padding: 1em; border-radius: var(--stil-border-radius); margin-top: 0.5em; display: flex; flex-direction: row-reverse; justify-content: space-between; align-items: center;";

  const label = document.createElement("label");
  label.setAttribute("for", name);
  label.innerHTML = name;

  field.appendChild(label);
  field.appendChild(createInput(name));
  container.appendChild(field);
};

const createColorModal = () => {
  const parent = document.createElement("div");
  parent.classList.add("card");
  parent.style.cssText =
    "position:fixed;padding: var(--space,1em); z-index:100;color: var(--stil-background); background:var(--stil-foreground-accent); border-radius: var(--stil-border-radius); top: 50%; left: 50%; transform: translate(-50%,-50%)";

  const closeButton = document.createElement("button");
  closeButton.innerHTML = "close";
  closeButton.classList.add("button");
  closeButton.style.cssText = "position: absolute; left: 100%; bottom: 100%;";
  closeButton.addEventListener("click", () => {
    parent.remove();
  });
  parent.appendChild(closeButton);

  Object.keys(stilColors).forEach((color) => {
    createField(color, parent);
  });

  const resetButton = document.createElement("button");
  resetButton.innerHTML = "reset";
  resetButton.classList.add("button");
  resetButton.style.cssText = "margin: 0.5em auto auto auto;";
  resetButton.addEventListener("click", () => {
    localStorage.removeItem("stilColors");
    Object.keys(stilColors).forEach((key) => {
      stilColors[key] = "";
    });
    // getLocalStorageColors();
    applyColors();
  });
  parent.appendChild(resetButton);

  document.body.appendChild(parent);
};

const saveToLocalStorage = () => {
  console.log(stilColors);
  localStorage.setItem("stilColors", JSON.stringify(stilColors));
};

const applyColors = () => {
  Object.keys(stilColors).forEach((key) => {
    if (stilColors[key]) {
      document.body.style.setProperty(`--stil-${key}`, stilColors[key]);
    } else {
      document.body.style.removeProperty(`--stil-${key}`);
    }
  });
};

const getLocalStorageColors = () => {
  if (localStorage.getItem("stilColors") !== null) {
    const localColors = JSON.parse(localStorage.getItem("stilColors"));

    Object.keys(localColors).forEach((key) => {
      stilColors[key] = localColors[key];
    });

    applyColors();
  } else {
    Object.keys(stilColors).forEach((key) => {
      stilColors[key] = getComputedStyle(document.body).getPropertyValue(
        `--stil-${key}`
      );
    });
  }
};

const createButton = () => {
  const container = document.querySelector(".footer .navigation__list");

  const button = document.createElement("button");
  button.classList.add("button");
  button.innerHTML = "switch color";

  button.addEventListener("click", () => createColorModal());

  container.appendChild(button);
};

const initSwitchColor = () => {
  createButton();
  getLocalStorageColors();
};
