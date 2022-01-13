let counterValue = 0;

  const buttonDecrement = document.querySelector('[data-action="decrement"]');
  const buttonIncrement = document.querySelector('[data-action="increment"]');



  let span = document.querySelector('#value');
  console.log(span);


  buttonDecrement.addEventListener('click' , handleDecrement);

  buttonIncrement.addEventListener('click', handleIncrement);

  span.addEventListener('click', clearCount);

  function handleDecrement() {
     span.innerHTML=counterValue -= 1;
  }

  function handleIncrement() {
    span.innerHTML = counterValue += 1;
  }

  function clearCount() {
    if (counterValue !== 0) {
      span.innerHTML = counterValue = 0;
    }
  }