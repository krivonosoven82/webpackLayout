// to get access for the .div
const div = document.getElementsByClassName('content__body-item')[1];
let currentSlide = 0;
let images = [
    './src/img/slider/cat.jpg',
    './src/img/slider/edinorog.jpg',
    './src/img/slider/hacker.jpg',
    './src/img/slider/js.jpg',
    './src/img/slider/spongebob.jpg'];

//to create the element wrapper for the slider
const sliderWrapper = document.createElement('div');
sliderWrapper.className = 'slider';
div.appendChild(sliderWrapper);

for(let i = 0; i < images.length; i++){
    let wrapImg = document.createElement('div');
    wrapImg.className = 'slider-wrapImg';
    sliderWrapper.appendChild(wrapImg);
    let img = document.createElement('img');
    img.className = 'slider-img';
    img.setAttribute('src', images[i]);
    img.setAttribute('alt', `image${i}`);
    wrapImg.appendChild(img);

}
let arrSlider = document.querySelectorAll('.slider-wrapImg');

function nextSlide() {
    arrSlider[currentSlide].className = 'slider-wrapImg';
    currentSlide = (currentSlide + 1) % arrSlider.length;
    arrSlider[currentSlide].className = 'slider-wrapImg active';
    setTimeout(nextSlide, 2000);
}
export default nextSlide;
