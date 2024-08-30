const table = document.getElementById("link-table");
const links = [];

for (let tr of table.children[0].children) {
  links.push(tr.lastElementChild.children);
}

let xy = null;

function isXYNull() {
  if (xy == null) {
    xy = [0, 0];
    links[xy[0]].item(xy[1]).id = "active-cell";
    table.children[0].children[xy[0]].id = "active-row";
    return true;
  }
}

function clearActiveLink() {
  links[xy[0]].item(xy[1]).id = "";
  table.children[0].children[xy[0]].id = "";
}

function setActiveLink() {
  links[xy[0]].item(xy[1]).id = "active-cell";
  table.children[0].children[xy[0]].id = "active-row";
}

function handleArrowUp() {
  if (!isXYNull()) {
    clearActiveLink();
    xy[0] = Math.max(xy[0] - 1, 0);
    xy[1] = Math.min(xy[1], links[xy[0]].length - 1);
    setActiveLink();
  }
}

function handleArrowRight() {
  if (!isXYNull()) {
    clearActiveLink();
    xy[1] = Math.min(xy[1] + 1, links[xy[0]].length - 1);
    setActiveLink();
  }
}

function handleArrowDown() {
  if (!isXYNull()) {
    clearActiveLink();
    xy[0] = Math.min(xy[0] + 1, links.length - 1);
    xy[1] = Math.min(xy[1], links[xy[0]].length - 1);
    setActiveLink();
  }
}

function handleArrowLeft() {
  if (!isXYNull()) {
    clearActiveLink();
    xy[1] = Math.max(xy[1] - 1, 0);
    setActiveLink();
  }
}

function visitActiveLink() {
  if (xy) {
    window.location.assign(links[xy[0]].item(xy[1]).href);
  }
}

function resetXY() {
  links[xy[0]].item(xy[1]).id = "";
  table.children[0].children[xy[0]].id = "";
  xy = null;
}

document.addEventListener("keydown", function (event) {
  const handlers = {
    ArrowUp: handleArrowUp,
    ArrowRight: handleArrowRight,
    ArrowDown: handleArrowDown,
    ArrowLeft: handleArrowLeft,
    Space: visitActiveLink,
    Enter: visitActiveLink,
    Escape: resetXY,
  };
  handlers?.[event.code]();
});

document.addEventListener("mousemove", function () {
  if (xy) {
    resetXY();
  }
});
