function Gallery(gallery) {
    if(!gallery) {
        throw new Error("No gallery was found");
    }
    
    const images = Array.from(gallery.querySelectorAll('img'));
    const modal = document.querySelector('.modal');
    const prevButton = modal.querySelector('.prev');
    const nextButton = modal.querySelector('.next');
    const closeButton = modal.querySelector('#close');
    console.log(modal);
    console.log(closeButton);
    let currentImage;

    function openModal() {
        if(modal.matches('.open')) {
            return;
        }

        modal.classList.add('open');

        window.addEventListener('keyup', handleKeyUp);
        nextButton.addEventListener('click', showNextImage);
        prevButton.addEventListener('click', showPrevImage);
    }

    function closeModal() {
        modal.classList.remove('open');

        window.removeEventListener('keyup', handleKeyUp);
        nextButton.removeEventListener('click', showNextImage);
        prevButton.removeEventListener('click', showPrevImage);
    }

    function handleClickOutside(e) {
        if(e.target === e.currentTarget) {
            closeModal();
        }
    }

    function handleKeyUp(e) {
        if(e.key === 'Escape') return closeModal();
        if(e.key === 'ArrowLeft') return showPrevImage();
        if(e.key === 'ArrowRight') return showNextImage();
    }

    function showPrevImage() {
        showImage(currentImage.previousElementSibling || gallery.lastElementChild);
    }

    function showNextImage() {
        showImage(currentImage.nextElementSibling || gallery.firstElementChild);
    }

    function showImage(el) {
        if(!el){
            console.info('no image was provided');
            return;
        }

        modal.querySelector('img').src = el.src;
        currentImage = el;
        openModal();
    }

    images.forEach(image => image.addEventListener('click', e => showImage(e.currentTarget)));
    images.forEach(image => image.addEventListener('keyup', e => {
        if(e.key === 'Enter') {
            showImage(e.currentTarget);
        }
    }))
    modal.addEventListener('click', handleClickOutside);
    closeButton.addEventListener('click', closeModal);
}

const gallery1 = Gallery(document.querySelector('#gallery-container'));

