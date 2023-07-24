const content = document.querySelector(".content");
const slider = document.querySelector("#slider-change");
slider.addEventListener('input', (e) => {
    content.style.setProperty('--position', `${e.target.value}%`);
})