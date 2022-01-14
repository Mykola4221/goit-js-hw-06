/*function hendleRange() {
  const inputRange = document.querySelector('#font-size-control');

  const textSpan = document.querySelector('#text');

  textSpan.style.fontSize = inputRange.value + 'px';
}*/
const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
input.addEventListener("input", handleInputRange);

function handleInputRange(event) {
  span.style.fontSize = event.currentTarget.value + "px";
}