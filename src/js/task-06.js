const refs = {
styleEl: document.querySelector('style'),
inputEl: document.querySelector('#validation-input'),
}
refs.inputEl.addEventListener('blur', onInputBlur)

function onInputBlur (event) {

if (refs.inputEl.value.length === Number(refs.inputLength)) {

refs.styleEl = refs.styleEl.classList.remo('#validation-input','#validation-input.valid')
}
refs.styleEl - refs.styleEl. classList.replace('#validation-input', '#validation-input.invalid')
}

console.log(refs. inputEl.value.length)