const refs = {

    inputEl: document.queryselector("#validation-input"),
};
    const symbols = Number (refs.inputel.dataset.length);
    
    console.log (symbols);
    
    refs.inputEl.addEventlistener("blur", onInputBlur); 
    
    function onInputBlur (event) {
    
    console.log(event.currentTarget.value.length); 
    event.currentTarget.value.length === symbols 
    ? refs.inputel.classList.add("valid") 
    :refs.inputel.classList.add("invalid");
    }