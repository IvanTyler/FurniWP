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