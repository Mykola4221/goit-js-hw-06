const inputRange = document.querySelector('#font-size-control');

  const spanText = document.querySelector('#text');

  inputRange.addEventListener('input', hendleRange);

  function hendleRange() {
    spanText.style.fontSize = inputRange.value + 'px';
  }