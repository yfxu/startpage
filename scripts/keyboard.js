// Data structures
const table = document.getElementById("link-table");
const links = [];
const linksMap = {};

// Populate arrays and lookup tables for table cell coordinates

for (let tr of table.children[0].children) {
  links.push(Array.from(tr.lastElementChild.children));
}

for (let i = 0; i < links.length; i++) {
  for (let j = 0; j < links[i].length; j++) {
    linksMap[links[i][j].innerHTML] = [i, j];
  }
}

// Event handlers

function handleArrowUp(activeElement) {
  if (activeElement.tabIndex == 0) {
    const linkIndex = linksMap[activeElement.innerHTML];
    const prevRow = (linkIndex[0] - 1 + links.length) % links.length;
    links[prevRow][Math.min(linkIndex[1], links[prevRow].length - 1)].focus();
  }
}

function handleArrowRight(activeElement) {
  if (activeElement.tabIndex == 0) {
    if (activeElement.nextElementSibling) {
      activeElement.nextElementSibling.focus();
    } else {
      const linkIndex = linksMap[document.activeElement.innerHTML];
      links[(linkIndex[0] + 1) % links.length][0].focus();
    }
  }
}

function handleArrowDown(activeElement) {
  if (activeElement.tabIndex == 0) {
    const linkIndex = linksMap[activeElement.innerHTML];
    const nextRow = (linkIndex[0] + 1) % links.length;
    links[nextRow][Math.min(linkIndex[1], links[nextRow].length - 1)].focus();
  }
}

function handleArrowLeft(activeElement) {
  if (activeElement.tabIndex == 0) {
    if (activeElement.previousElementSibling) {
      activeElement.previousElementSibling.focus();
    } else {
      const linkIndex = linksMap[document.activeElement.innerHTML];
      links[(linkIndex[0] - 1 + links.length) % links.length].at(-1).focus();
    }
  }
}

function resetXY() {
  document.activeElement.blur();
}

// Register event handlers

document.addEventListener("keydown", function (event) {
  const handlers = {
    ArrowUp: handleArrowUp,
    ArrowRight: handleArrowRight,
    ArrowDown: handleArrowDown,
    ArrowLeft: handleArrowLeft,
    Escape: resetXY,
  };
  handlers?.[event.code](document.activeElement);
});
