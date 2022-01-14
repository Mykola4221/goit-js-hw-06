function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const randomColor = getRandomHexColor();
const span = document.querySelector('.color');

  const btn = document.querySelector('.change-color');

  const div = document.querySelector('.widget');

  btn.addEventListener('click',  (event) =>  {
           document.body.style.backgroundColor = randomColor;

           span.innerHTML =  randomColor;

   });
