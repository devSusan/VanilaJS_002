const className = ["bg_blue", "bg_purple", "bg_yellow"];
const doc = document.body;
const minWidth = window.innerWidth;
const maxWidth = minWidth + 300;

const eventHandler = {
  handleResize: function () {
    const currentWidth = window.innerWidth;
    let bg_color;
    removeClassAllColor();

    if (currentWidth <= minWidth) {
      bg_color = className[0];
    } else if (currentWidth < maxWidth) {
      bg_color = className[1];
    } else {
      bg_color = className[2];
    }
    addClass(bg_color);
  }
};

function removeClassAllColor() {
  doc.classList.remove(...className);
}

function addClass(bg_color) {
  doc.classList.add(bg_color);
}

window.addEventListener("resize", eventHandler.handleResize);
