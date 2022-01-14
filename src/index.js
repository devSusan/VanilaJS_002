const className = ["bg_purple", "bg_yellow", "bg_blue"];
const doc = document.body;
const minWidth = window.innerWidth;
const maxWidth = minWidth + 300;

const eventHandler = {
  handleResize: function () {
    const currentWidth = window.innerWidth;
    let bg_color;
    removeClassAllColor();

    if (currentWidth > minWidth && currentWidth < maxWidth) {
        bg_color = className[0];
    } else if (window.innerWidth > maxWidth) {
        bg_color = className[1];
    } else if (window.innerWidth <= minWidth) {
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
