
    let position = 0;

//----------arrayImg
    let arrayImg = [
        './src/img/slider/cat.jpg',
        './src/img/slider/edinorog.jpg',
        './src/img/slider/hacker.jpg',
        './src/img/slider/js.jpg',
        './src/img/slider/spongebob.jpg',
    ];

//----------main container
    let contentItem = document.getElementsByClassName('content__body-item')[1];
    contentItem.className = 'content__body-item item-slider';
    console.log(contentItem.offsetWidth);

//----------div slider
    let slider = document.createElement('div');
    slider.className = 'slider';
    contentItem.appendChild(slider);
    console.log(slider.offsetHeight);


//----------div slider__wrap
    let sliderWrap = document.createElement('div');
    sliderWrap.className = 'slider__wrap';
    slider.appendChild(sliderWrap);

//----------img .slider__img
    for(let i = 0; i < arrayImg.length; i++){
        let img = document.createElement('img');
        img.setAttribute('src', arrayImg[i]);
        img.setAttribute('alt', 'img');
        img.className = 'slider__img';
        sliderWrap.appendChild(img);
    }

    let indexImgSlider = document.querySelectorAll('.slider__img');


    let stepPosition = (sliderWrap.offsetWidth / indexImgSlider.length);
    let sliderWrapWidth = position - (sliderWrap.offsetWidth - stepPosition);









    function nextSlide(){
        if(position < -2400){
            position = 0;
        }
        sliderWrap.style.left = position + 'px';
        position = position - 600;
        setTimeout(nextSlide, 3000);
    }






    nextSlide();

