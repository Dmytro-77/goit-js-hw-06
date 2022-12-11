const work = (event) => {
  refs.inputName === ""
    ? (refs.outputName.textContent = "Anon")
    : (refs.outputName.textContent = event.currentTarget.value);
};

console.log(refs.outputName);

refs.inputName.addEventListener("input", work);
