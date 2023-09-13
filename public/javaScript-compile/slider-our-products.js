const $slider = document.querySelector('.our-projects-slider')
const $slide_item = document.querySelector('.our-projects-slider__item')
const $slide_items = document.querySelectorAll('.our-projects-slider__item')

const $prev_slide = document.querySelector('.our-projects__arrow.prev-slide')
const $next_slide = document.querySelector('.our-projects__arrow.next-slide')

let count = 0;
let width = 0;

function currentSlide() {
    let currentElement;
    $slide_items.forEach((el, i) => {
        if (el.classList.contains('active')) {
            el.classList.remove('active')
            currentElement = el.nextElementSibling
        }
    })
    currentElement.classList.add('active');
}

$prev_slide.addEventListener('click', () => {
    width = width + $slide_item.offsetWidth
    console.log($slide_item.offsetWidth);
    currentSlide()
    rollSlider()
})



function rollSlider() {
    $slider.style.transform = 'translate(-' + width + 'px)'
}
window.addEventListener('resize', rollSlider)