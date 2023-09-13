const $deliveryAnswerList = document.querySelector('.delivery-faq-list')

$deliveryAnswerList?.addEventListener('click', (e) => {
    e.target.className === 'delivery-faq-list__toggle-text' ?
        e.target.classList.add('active') :
        e.target.classList.remove('active')
})

