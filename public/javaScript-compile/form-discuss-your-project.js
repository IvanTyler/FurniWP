const $discuss_your_project_form = document.querySelector('.discuss-your-project-form')
const $input_name_your_project = document.querySelector('#input-name-your-project')
const $input_phone_your_project = document.querySelector('#input-phone-your-project')

const $request_sent_choosing_us = document.querySelector('.request-sent.thanks-for-choosing-us')
const $happy_shopping = document.querySelector('.request-sent.happy-shopping')


const $request_sent_close = document.querySelector('.request-sent__close')

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

        console.log(formData);
        const application = {
            id: Date.now(),
            ...formData,
        }

        console.log(application);
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

$request_sent_close?.addEventListener('click', () => {
    $discuss_your_project_modal.style.display = 'flex'
    $request_sent_choosing_us.style.display = 'none'
})