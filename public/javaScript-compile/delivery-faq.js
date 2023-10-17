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

