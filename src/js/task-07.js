const refs = {
  textEl: document.querySelector("#text"),
  inputEl: document.querySelector("#font-size-control"),
};

refs.inputEl.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  refs.textEl.style.fontSize = inputEl.value + "px";
}
console.log();
