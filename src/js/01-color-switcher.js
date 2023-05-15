  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');
  const body = document.querySelector('body');
let intervalId = null;
  
function makeStyle() {
    body.style.width = "100%";
    body.style.display = "inline-block";
    body.style.textAlign = "center";
    body.style.paddingTop = "300px";
}

makeStyle();

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  function startChangingBackgroundColor() {
    startButton.disabled = true;
    stopButton.disabled = false;
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }

  function stopChangingBackgroundColor() {
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(intervalId);
  }

  startButton.addEventListener('click', startChangingBackgroundColor);
stopButton.addEventListener('click', stopChangingBackgroundColor);
  


// const CHANGE_COLOR_DELAY = 1000;
// let idInt = null;

// const refs = {
//     btnStart: document.querySelector('button[data-start]'),
//     btnStop: document.querySelector('button[data-stop]'),
//     body: document.querySelector('body'),
// }

// // refs.btnStop.setAttribute('disabled', true);
// refs.btnStop.disabled = true;
// refs.btnStart.addEventListener('click', onBtnStartChangeColor);
// refs.btnStop.addEventListener('click', onBtnStopChangeColor);


// function onBtnStartChangeColor() {
//     refs.btnStart.disabled = true;
//     refs.btnStop.disabled = false;
//     // refs.btnStart.setAttribute('disabled', true);
//     // refs.btnStop.removeAttribute('disabled');

//     idInt = setInterval(() => {
//         refs.body.style.backgroundColor = getRandomHexColor()
//     }, CHANGE_COLOR_DELAY);
// }

// function onBtnStopChangeColor() {
//     refs.btnStart.disabled = false;
//     refs.btnStop.disabled = true;
//     // refs.btnStart.removeAttribute('disabled');
//     // refs.btnStop.setAttribute('disabled', true);

//     clearInterval(idInt);
// }

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }