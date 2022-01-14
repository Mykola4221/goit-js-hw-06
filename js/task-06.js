const textInput = document.querySelector('#validation-input');


    textInput.addEventListener('focus', hendleInputFocus);
    textInput.addEventListener('blur', hendleInputBlur);

    function hendleInputFocus() {
      textInput.focus();
    }

    function hendleInputBlur() {
      textInput.blur();

      if ( (textInput.value.length < textInput.getAttribute('data-length') ) || ( textInput.value.length > textInput.getAttribute('data-length') ) && (textInput.value.length !== '')) {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');

        if (textInput.value === '') {
          textInput.classList.remove('invalid');
        }
        return;
      }      
      
       
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
      
       if (textInput.value === '') {
         textInput.classList.remove('valid');
       }
    }