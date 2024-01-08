//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

// variable text
let homeDom = document.getElementById('home');
let realisationDom = document.getElementById('realisation');
let qualificationDom = document.getElementById('qualification');
let contactDom = document.getElementById('contact');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
// SliderDom.appendChild(SliderItemsDom[0]);
let timeRunning = 3000;
// let timeAutoNext = 7000;

homeDom.onclick = function () {
    showSlider('home');
}

realisationDom.onclick = function () {
    showSlider('realisation');
}

qualificationDom.onclick = function () {
    showSlider('qualification');
}
contactDom.onclick = function () {
    showSlider('contact');
}
let runTimeOut;
// let runNextAuto = setTimeout(() => {
//     next.click();
// }, timeAutoNext)
function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    switch (type) {

        case 'home':
            // SliderDom.remove();
            SliderDom.appendChild(SliderItemsDom[0]);
            // SliderDom[0];
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('home');
            break;

        case 'realisation': 
            // SliderDom.remove();
            SliderDom.prepend(SliderItemsDom[1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[1]);
            carouselDom.classList.add('realisation');
            // SliderDom.prepend(SliderItemsDom[1]);
            // thumbnailBorderDom.prepend(thumbnailItemsDom[1]);
            // carouselDom.classList.add('realisation');
            break;
        case 'qualification':
            SliderDom.prepend(SliderItemsDom[2]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[2]);
            carouselDom.classList.add('qualification');
            break;
        case 'contact':
            SliderDom.prepend(SliderItemsDom[3]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[3]);
            carouselDom.classList.add('realisation');
            break;

    }





    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('home');
        carouselDom.classList.remove('realisation');
        carouselDom.classList.remove('qualification');
        carouselDom.classList.remove('contact');

    }, timeRunning);

    // clearTimeout(runNextAuto);
    // runNextAuto = setTimeout(() => {
    //     next.click();
    // }, timeAutoNext)
}