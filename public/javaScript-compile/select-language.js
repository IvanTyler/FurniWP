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

