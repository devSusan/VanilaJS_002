const doc = document.body;
const minWidth = window.innerWidth;
const maxWidth = minWidth + 300;

const eventHandler = {
  handleResize: function () {
    const currentWidth = window.innerWidth;
    if (currentWidth > minWidth && currentWidth < maxWidth) {
      removeClassAllColor();
      addClassColor("bg_purple");
    } else if (window.innerWidth > maxWidth) {
      removeClassAllColor();
      addClassColor("bg_yellow");
    } else if (window.innerWidth <= minWidth) {
      removeClassAllColor();
      addClassColor("bg_blue");
    }
  }
};

function removeClassAllColor() {
  doc.classList.remove("bg_purple", "bg_yellow", "bg_blue");
}

function addClassColor(color) {
  doc.classList.add(color);
}

window.addEventListener("resize", eventHandler.handleResize);
