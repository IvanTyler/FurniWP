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
let elems_modal = parent?.children;

if (elems_modal) {
    for (let i = 0; i < elems_modal.length; i++) {
        elems_modal[i].addEventListener('click', (e) => e.stopPropagation())
    }
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