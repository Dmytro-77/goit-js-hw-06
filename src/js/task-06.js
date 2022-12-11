const refs = {
  inputEl: document.queryselector("#validation-input"),
};
const symbols = Number(refs.inputel.dataset.length);
console.log(symbols);

refs.inputEl.addEventlistener("blur", onInputBlur);

function onInputBlur(event) {
  console.log(event.currentTarget.value.length);
  event.currentTarget.value.length === symbols
    ? refs.inputEl.classList.add("valid")
    : refs.inputEl.classList.add("invalid");
}
