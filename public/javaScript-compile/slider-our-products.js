const $slider = document.querySelector('.our-projects-slider')
const $slide_item = document.querySelector('.our-projects-slider__item')
const $slide_items = document.querySelectorAll('.our-projects-slider__item')

const $prev_slide = document.querySelector('.our-projects__arrow.prev-slide')
const $next_slide = document.querySelector('.our-projects__arrow.next-slide')

const $slider_switch = document.querySelectorAll('.our-projects-slider-switch__item')

const $our_projects_videos = document.querySelectorAll('.our-projects-video')
const $our_projects_open_modal = document.querySelectorAll('.our-projects-slider__button')

const $modal_main = document.querySelector('.modal-main')
const $close_modal_main = document.querySelector('.modal-main__close')


let count = 0;
let width = 0;

function nextSlide() {
    let currentElement;

    $slide_items.forEach((el, i) => {
        if (el.classList.contains('active')) {
            el.classList.remove('active')
            currentElement = el.nextElementSibling
        }
    })

    currentElement.classList.add('active');
}

function prevSlide() {
    let currentElement;

    $slide_items.forEach((el, i) => {
        if (el.classList.contains('active')) {
            el.classList.remove('active')
            currentElement = el.previousElementSibling
        }
    })
    currentElement.classList.add('active');
}

$next_slide?.addEventListener('click', () => {
    count++
    width = width + $slide_item.offsetWidth

    if (count === $slide_items.length - 1) $next_slide.classList.add('hide')
    if (count > 0) $prev_slide.classList.remove('hide')

    $slider_switch.forEach((el) => {
        el.classList.remove('active')
    })
    $slider_switch[count].classList.add('active')

    nextSlide()
    rollSlider()
})

$prev_slide?.addEventListener('click', () => {
    count--
    width = width - $slide_item.offsetWidth

    if (count === 0) $prev_slide.classList.add('hide')
    if (count < $slide_items.length - 1) $next_slide.classList.remove('hide')

    $slider_switch.forEach((el) => {
        el.classList.remove('active')
    })
    $slider_switch[count].classList.add('active')

    prevSlide()
    rollSlider()
})

$slide_items?.forEach((el, i) => {
    el.addEventListener('click', () => {
        $slide_items.forEach((el) => {
            el.classList.remove('active')
        })
        $slider_switch.forEach((el) => {
            el.classList.remove('active')
        })
        $slider_switch[i].classList.add('active')
        el.classList.add('active')
        setCurrentWidtSlider(i)
    })
})

$slider_switch?.forEach((el, i) => {
    el.addEventListener('click', () => {
        $slider_switch.forEach((el) => {
            el.classList.remove('active')
        })
        $slide_items.forEach((el) => {
            el.classList.remove('active')
        })
        $slide_items[i].classList.add('active')
        el.classList.add('active')
        setCurrentWidtSlider(i)
    })
})

function setCurrentWidtSlider(index) {
    width = 0
    count = index

    if (count === $slide_items.length - 1) $next_slide.classList.add('hide')
    if (count > 0) $prev_slide.classList.remove('hide')

    if (count === 0) $prev_slide.classList.add('hide')
    if (count < $slide_items.length - 1) $next_slide.classList.remove('hide')

    for (let i = 0; i < count; i++) {
        width = width + $slide_item.offsetWidth
    }

    rollSlider()
}

function rollSlider() {
    $slider.style.transform = 'translate(-' + width + 'px)'
}
window.addEventListener('resize', rollSlider)

$our_projects_open_modal?.forEach((el, i) => {
    el.addEventListener('click', () => {
        $our_projects_videos[i].style.display = 'block'
        $modal_main.style.display = 'block'
    })
})

$close_modal_main?.addEventListener('click', () => {
    $our_projects_open_modal?.forEach((el, i) => {
        $our_projects_videos[i].style.display = 'none'
        $modal_main.style.display = 'none'
    })
})

