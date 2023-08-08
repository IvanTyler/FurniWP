const slide_images = document.querySelectorAll('.apartment-transformation-service__img')

function slideApartamentsImg(images, i) {
    setInterval(() => {
        images.forEach(el => el.classList.remove('active'))
        images[i].classList.add('active')
        i++
        i = i % images.length
    }, 5000)
}

slideApartamentsImg(slide_images, 0)