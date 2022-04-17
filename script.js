function htmlClick() {
  clear();
  document.getElementById("guide").innerHTML = " ";
  const p = document.getElementById("html");
  p.classList.add("visible");
}
function structClick() {
  document.getElementById("guide").innerHTML = " ";
  clear();
  const p = document.getElementById("structure");
  p.classList.add("visible");
}
function tagClick() {
  document.getElementById("guide").innerHTML = " ";
  clear();
  const p = document.getElementById("tags");
  p.classList.add("visible");
}
function writtenClick() {
  document.getElementById("guide").innerHTML = " ";
  clear();
  const p = document.getElementById("written");
  p.classList.add("visible");
}
function importantClick() {
  document.getElementById("guide").innerHTML = " ";
  clear();
  const p = document.getElementById("important");
  p.classList.add("visible");
}

function usageClick() {
  document.getElementById("guide").innerHTML = " ";
  clear();
  const p = document.getElementById("usage");
  p.classList.add("visible");
}
function clear() {
  const divs = document.querySelectorAll(".content-def-group");
  for (const div of divs) {
    div.classList.remove("visible");
  }
}
