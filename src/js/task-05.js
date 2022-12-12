const work = (event) => {
  refs.inputName.value.length === 0
    ? (refs.outputName.textContent = "Anon")
    : (refs.outputName.textContent = event.currentTarget.value);
};

console.log(refs.outputName);

refs.inputName.addEventListener("input", work);
