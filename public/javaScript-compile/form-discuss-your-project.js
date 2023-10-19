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