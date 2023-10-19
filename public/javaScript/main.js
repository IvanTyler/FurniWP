const slide_images = document.querySelectorAll('.slider__img')

function slideGalleryImg(images, i) {
    setInterval(() => {
        images.forEach(el => el.classList?.remove('active'))
        images[i]?.classList?.add('active')
        i++
        i = i % images.length
    }, 5000)
}

slideGalleryImg(slide_images, 0)
const $deliveryAnswerList = document.querySelector('.furni-information-list.delivery-faq')
const $deliveryPrivacyPolicy = document.querySelector('.furni-information-list.privacy-policy')


function openInformationListItem(collection) {
    collection?.addEventListener('click', (e) => {
        e.target.className === 'furni-information-list__toggle-text' ?
            e.target.classList.add('active') :
            e.target.classList.remove('active')
    })
}

openInformationListItem($deliveryAnswerList)
openInformationListItem($deliveryPrivacyPolicy)


const $discuss_your_project_form = document.querySelector('.discuss-your-project-form')
const $input_name_your_project = document.querySelector('#input-name-your-project')
const $input_phone_your_project = document.querySelector('#input-phone-your-project')
const $request_sent_choosing_us = document.querySelector('.request-sent.thanks-for-choosing-us')

const $form_get_shopping = document.querySelector('.form-get-shopping-list-free')
const $input_shopping_name = document.querySelector('.form-get-shopping-list-free__input.name')
const $input_shopping_phone = document.querySelector('.form-get-shopping-list-free__input.phone')
const $request_sent_happy_shopping = document.querySelector('.request-sent.happy-shopping')

const $close_choosing_us = document.querySelector('#close-modal-choosing-us')
const $close_happy_shopping = document.querySelector('#close-modal-happy-shopping')

const $happy_shopping = document.querySelector('.request-sent.happy-shopping')


const $make_request_form_black = document.querySelector('#make-a-request-form-black')
const $make_request_form_white = document.querySelector('#make-a-request-form-white')

const $make_request_form_black_name = document.querySelector('#make-request-form_black_name')
const $make_request_form_black_phone = document.querySelector('#make-request-form_black_phone')
const $make_request_form_black_email = document.querySelector('#make-request-form_black_email')
const $make_request_form_black_call = document.querySelector('#make-request-form_black_call')

const $make_request_form_white_name = document.querySelector('#make-request-form_white_name')
const $make_request_form_white_phone = document.querySelector('#make-request-form_white_phone')
const $make_request_form_white_email = document.querySelector('#make-request-form_white_email')
const $make_request_form_white_call = document.querySelector('#make-request-form_white_call')


$discuss_your_project_form?.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = Object.fromEntries(new FormData(event.target))

    if (!$input_name_your_project.value) {
        $input_name_your_project.classList.add('error')
    }
    if (!$input_phone_your_project.value) {
        $input_phone_your_project.classList.add('error')
    }

    if (($input_name_your_project.value) && ($input_phone_your_project.value)) {
        $input_name_your_project.classList.remove('error')
        $input_phone_your_project.classList.remove('error')

        $discuss_your_project_form.reset();
        $discuss_your_project_modal.style.display = 'none';
        $request_sent_choosing_us.style.display = 'flex';

        const application = {
            id: Date.now(),
            ...formData,
        }

    }
})

$form_get_shopping?.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = Object.fromEntries(new FormData(event.target))

    if (!$input_shopping_name.value) {
        $input_shopping_name.classList.add('error')
    }
    if (!$input_shopping_phone.value) {
        $input_shopping_phone.classList.add('error')
    }

    if (($input_shopping_name.value) && ($input_shopping_phone.value)) {
        $input_shopping_name.classList.remove('error')
        $input_shopping_phone.classList.remove('error')

        $form_get_shopping.reset();
        $modal_main.style.display = 'block'
        $request_sent_happy_shopping.style.display = 'flex';

        const application = {
            id: Date.now(),
            ...formData,
        }

    }
})

$make_request_form_black?.addEventListener('submit', (event) => {
    event.preventDefault()
    requestDataUser(
        event.target,
        $make_request_form_black_name,
        $make_request_form_black_phone,
        $make_request_form_black_email,
        $make_request_form_black_call
    )
})

$make_request_form_white?.addEventListener('submit', (event) => {
    event.preventDefault()
    requestDataUser(
        event.target,
        $make_request_form_white_name,
        $make_request_form_white_phone,
        $make_request_form_white_email,
        $make_request_form_white_call
    )
})

function requestDataUser(target, ...args) {
    const elemntsForm = [...args]
    const formData = Object.fromEntries(new FormData(target))

    elemntsForm.forEach((el) => {
        if (!el.value) {
            el.classList.add('error')
        } else {
            el.classList.remove('error')
            el.value = ''
            $modal_main.style.display = 'block'
            $request_sent_choosing_us.style.display = 'flex';

            const application = {
                id: Date.now(),
                ...formData,
            }
        }
    })

}

$close_choosing_us?.addEventListener('click', () => closeMainModal())
$close_happy_shopping?.addEventListener('click', () => closeMainModal())
const $header = document.querySelector('.header')

const $modal_main = document.querySelector('.modal-main')
const $close_modal_main = document.querySelector('.modal-main__close')

const $request_now = document.querySelector('#request_now')
const $request_now_mobile = document.querySelector('#request_now_mobile')
const $close_form_your_project = document.querySelector('#close-form-discuss-your-project')

const $discuss_your_project_modal = document.querySelector('.discuss-your-project-modal')

window.addEventListener('scroll', () => {
    const { y } = document.body.getBoundingClientRect()
    y < 0 ?
        $header.classList.add('scroll') :
        $header.classList.remove('scroll')
})


let parent = document.querySelector('.container-modal');
let elems_modal = parent.children;
for (let i = 0; i < elems_modal.length; i++) {
    elems_modal[i].addEventListener('click', (e) => e.stopPropagation())
}

$close_modal_main?.addEventListener('click', () => {
    closeMainModal()

    $our_projects_open_modal?.forEach((el, i) => {
        $our_projects_videos[i].style.display = 'none'
    })
})

$request_now?.addEventListener('click', () => {
    $modal_main.style.display = 'block'
    $discuss_your_project_modal.style.display = 'flex'

})

$modal_main?.addEventListener('click', () => closeMainModal())

$close_form_your_project?.addEventListener('click', () => closeMainModal())

function closeMainModal() {
    for (let i = 0; i < elems_modal.length; i++) {
        elems_modal[i].style.display = 'none'
    }
    $modal_main.style.display = 'none'
}
const $show_select_language = document.querySelector('#show-select-language')
const $select_language = document.querySelector('.select-language')
const $select_language_items = document.querySelectorAll('.select-language__item')
const $select_language_text = document.querySelector('.header-nav-menu__text')

const $open_mobile_menu = document.querySelector('#sandwich')
const $mobile_menu = document.querySelector('.header-nav-menu.mobile')

const $select_language_mobile = document.querySelectorAll('.select-language-mobile__item')

const languages = ['Eng', 'Ru']

$show_select_language?.addEventListener('click', (e) => {
    e.stopPropagation()
    $select_language.classList.contains('active') ?
        $select_language.classList.remove('active') :
        $select_language.classList.add('active')

    $show_select_language.classList.contains('active') ?
        $show_select_language.classList.remove('active') :
        $show_select_language.classList.add('active')
})

$select_language?.addEventListener('click', (e) => e.stopPropagation())
$mobile_menu?.addEventListener('click', (e) => e.stopPropagation())

document.addEventListener('click', (e) => {
    if ($select_language.classList.contains('active')) {
        $select_language.classList.remove('active')
        $show_select_language.classList.remove('active')
    }

    if ($open_mobile_menu.classList.contains('open')) {
        $open_mobile_menu.classList.remove('open')
        $mobile_menu.classList.remove('open')
    }
})

$select_language_items?.forEach((el, i) => {
    el.addEventListener('click', () => {
        $select_language_items?.forEach((el) => {
            el.classList.remove('active')
        })
        $select_language_mobile?.forEach((el) => {
            el.classList.remove('active')
        })
        el.classList.add('active')
        $select_language_mobile[i].classList.add('active')
        selectedTextLanguage(i, languages)
    })
})
$select_language_mobile?.forEach((el, i) => {
    el.addEventListener('click', () => {
        $select_language_mobile?.forEach((el) => {
            el.classList.remove('active')
        })
        $select_language_items?.forEach((el) => {
            el.classList.remove('active')
        })
        el.classList.add('active')
        $select_language_items[i].classList.add('active')
        selectedTextLanguage(i, languages)
    })
})

function selectedTextLanguage(indexI, array) {
    array.forEach((el, j) => {
        if (indexI === j) $select_language_text.innerText = el
    })
}

$open_mobile_menu?.addEventListener('click', (e) => {
    e.stopPropagation()
    $open_mobile_menu.classList.contains('open') ?
        $open_mobile_menu.classList.remove('open') :
        $open_mobile_menu.classList.add('open')

    $mobile_menu.classList.contains('open') ?
        $mobile_menu.classList.remove('open') :
        $mobile_menu.classList.add('open')
})


const $slider = document.querySelector('.our-projects-slider')
const $slide_item = document.querySelector('.our-projects-slider__item')
const $slide_items = document.querySelectorAll('.our-projects-slider__item')

const $prev_slide = document.querySelector('.our-projects__arrow.prev-slide')
const $next_slide = document.querySelector('.our-projects__arrow.next-slide')

const $slider_switch = document.querySelectorAll('.our-projects-slider-switch__item')
const $slider_switch_progress_items = document.querySelectorAll('.our-projects-slider-switch__progress')

const $our_projects_videos = document.querySelectorAll('.our-projects-video')
const $our_projects_open_modal = document.querySelectorAll('.our-projects-slider__button')

let count = 0;
let width = 0;

const currentIndexs = []

function progressStoris(number) {
    let percentProgress = 100
    count = number
    width = 0

    $slider_switch_progress_items.forEach((el) => el.style.width = '0%')

    for (let i = 0; i < count; i++) {
        width = width + $slide_item.offsetWidth
        $slider_switch_progress_items[i].style.width = '100%'
    }

    for (let i = 0; i <= percentProgress; i++) {
        let index = setTimeout(() => {
            $slider_switch_progress_items[count].style.width = `${i}%`
            if (i === percentProgress && count < $slide_items.length - 1) {
                count++

                nextSlide()
                rollSlider()
                progressStoris(count)

            }
        }, 30 * i)
        currentIndexs.push(index)
    }

    rollSlider()

    if (count > 0) {
        $prev_slide.classList.remove('hide')
    }

    if (count === $slide_items.length - 1) {
        $next_slide.classList.add('hide')
        return
    }
}

if ($slider) progressStoris(0)


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

    currentIndexs.forEach((el) => clearTimeout(el))
    progressStoris(count)

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

    currentIndexs.forEach((el) => clearTimeout(el))

    progressStoris(count)

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
        currentIndexs.forEach((el) => clearTimeout(el))

        setCurrentWidtSlider(i)
        progressStoris(i)

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

        currentIndexs.forEach((el) => clearTimeout(el))
        setCurrentWidtSlider(i)
        progressStoris(i)

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

if ($slider) window.addEventListener('resize', rollSlider)

$our_projects_open_modal?.forEach((el, i) => {
    el.addEventListener('click', () => {
        $our_projects_videos[i].style.display = 'block'
        $modal_main.style.display = 'block'
    })
})





