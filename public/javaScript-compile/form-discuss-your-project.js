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

const $make_request_form_error_message = document.querySelector('.make-a-request-form__message-error')

const $make_request_form_black = document.querySelector('#make-a-request-form-black')
const $make_request_form_black_name = document.querySelector('#make-request-form_black_name')
const $make_request_form_black_phone = document.querySelector('.make-a-request-form__input.phone')
const $make_request_form_black_email = document.querySelector('#make-request-form_black_email')
const $make_request_form_black_call = document.querySelector('#make-request-form_black_call')

const $make_request_form_white = document.querySelector('#make-a-request-form-white')
const $make_request_form_white_name = document.querySelector('#make-request-form_white_name')
const $make_request_form_white_phone = document.querySelector('#make-request-form_white_phone')
const $make_request_form_white_email = document.querySelector('#make-request-form_white_email')
const $make_request_form_white_call = document.querySelector('#make-request-form_white_call')

window.intlTelInput($make_request_form_black_phone, {
    autoInsertDialCode: true,
    autoPlaceholder: "aggressive",
    separateDialCode: true,
    geoIpLookup: function (callback) {
        fetch("https://ipapi.co/json")
            .then(function (res) { return res.json(); })
            .then(function (data) { callback(data.country_code); })
            .catch(function () { callback("us"); });
    },
    initialCountry: "AE",
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
});

window.intlTelInput($input_phone_your_project, {
    autoInsertDialCode: true,
    autoPlaceholder: "aggressive",
    separateDialCode: true,
    geoIpLookup: function (callback) {
        fetch("https://ipapi.co/json")
            .then(function (res) { return res.json(); })
            .then(function (data) { callback(data.country_code); })
            .catch(function () { callback("us"); });
    },
    initialCountry: "AE",
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
});


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

function errorMessageInput(input, showErrorMessage, errorMessage) {
    input.classList.add('error')
    $make_request_form_error_message.style.display = showErrorMessage
    $make_request_form_error_message.innerText = errorMessage;
}

$make_request_form_black?.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target))

    if (!$make_request_form_black_name.value) {
        errorMessageInput($make_request_form_black_name, 'inline-block', 'Enter name')
    } else {
        $make_request_form_black_name.classList.remove('error')
    }

    if (!$make_request_form_black_phone.value) {
        errorMessageInput($make_request_form_black_phone, 'inline-block', 'Enter phone')
    } else {
        $make_request_form_black_phone.classList.remove('error')
    }

    if (!$make_request_form_black_email.value) {
        errorMessageInput($make_request_form_black_email, 'inline-block', 'Enter email')
    } else {
        $make_request_form_black_email.classList.remove('error')
    }

    if (!$make_request_form_black_call.value) {
        errorMessageInput($make_request_form_black_call, 'inline-block', 'Enter your message')
    } else {
        $make_request_form_black_call.classList.remove('error')
    }


    if (!$make_request_form_black_name.value && !$make_request_form_black_phone.value) {
        $make_request_form_error_message.innerText = 'Enter required fields';
        $make_request_form_error_message.style.display = 'inline-block'
    }

    if (!$make_request_form_black_email.value && !$make_request_form_black_call.value) {
        $make_request_form_error_message.innerText = 'Enter required fields';
        $make_request_form_error_message.style.display = 'inline-block'
    }

    if (($make_request_form_black_call.value) && ($make_request_form_black_email.value) &&
        ($make_request_form_black_phone.value) && ($make_request_form_black_name.value)) {

        $make_request_form_black_call.classList.remove('error')
        $make_request_form_black_email.classList.remove('error')
        $make_request_form_black_phone.classList.remove('error')
        $make_request_form_black_name.classList.remove('error')
        $make_request_form_error_message.style.display = 'none'

        $make_request_form_black.reset();
        $modal_main.style.display = 'block'
        $request_sent_happy_shopping.style.display = 'flex';

        const application = {
            ...formData,
        }

    }

})

$make_request_form_white?.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target))

    if (!$make_request_form_white_name.value) {
        errorMessageInput($make_request_form_white_name, 'inline-block', 'Enter name')
    } else {
        $make_request_form_white_name.classList.remove('error')
    }

    if (!$make_request_form_white_phone.value) {
        errorMessageInput($make_request_form_white_phone, 'inline-block', 'Enter phone')
    } else {
        $make_request_form_white_phone.classList.remove('error')
    }

    if (!$make_request_form_white_email.value) {
        errorMessageInput($make_request_form_white_email, 'inline-block', 'Enter email')
    } else {
        $make_request_form_white_email.classList.remove('error')
    }

    if (!$make_request_form_white_call.value) {
        errorMessageInput($make_request_form_white_call, 'inline-block', 'Enter your message')
    } else {
        $make_request_form_white_call.classList.remove('error')
    }


    if (!$make_request_form_white_name.value && !$make_request_form_white_phone.value) {
        $make_request_form_error_message.innerText = 'Enter required fields';
        $make_request_form_error_message.style.display = 'inline-block'
    }

    if (!$make_request_form_white_email.value && !$make_request_form_white_call.value) {
        $make_request_form_error_message.innerText = 'Enter required fields';
        $make_request_form_error_message.style.display = 'inline-block'
    }

    if (($make_request_form_white_call.value) && ($make_request_form_white_email.value) &&
        ($make_request_form_white_phone.value) && ($make_request_form_white_name.value)) {

        $make_request_form_white_call.classList.remove('error')
        $make_request_form_white_email.classList.remove('error')
        $make_request_form_white_phone.classList.remove('error')
        $make_request_form_white_name.classList.remove('error')
        $make_request_form_error_message.style.display = 'none'

        $make_request_form_white.reset();
        $modal_main.style.display = 'block'
        $request_sent_happy_shopping.style.display = 'flex';

        const application = {
            ...formData,
        }

    }
})

$close_choosing_us?.addEventListener('click', () => closeMainModal())
$close_happy_shopping?.addEventListener('click', () => closeMainModal())

$make_request_form_black_name?.addEventListener('input', (event) => {
    if (event.target.value.length > 50) {
        $make_request_form_black_name.classList.add('error')
        $make_request_form_error_message.style.display = 'inline-block'
        $make_request_form_error_message.innerText = 'Full name must be up to 50 characters'
    }
    validCountSymbolsInput(event, 50)
})
$make_request_form_black_phone?.addEventListener('input', (event) => validCountSymbolsInput(event, 12))
$make_request_form_black_email?.addEventListener('input', (event) => validCountSymbolsInput(event, 30))


function validCountSymbolsInput(event, countSymbols) {
    if (event.target.value.length > countSymbols) event.target.value = event.target.value.slice(0, countSymbols);
}