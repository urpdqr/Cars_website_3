function changeImage(element) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = element.src;
    openModal();
    currentSlide(Array.from(element.parentNode.children).indexOf(element) + 1);
}

function scrollLeft() {
    const imagesContainer = document.querySelector('.thumbnail-container');
    imagesContainer.scrollBy({
        left: -400,
        behavior: 'smooth'
    });
}

function scrollRight() {
    const imagesContainer = document.querySelector('.thumbnail-container');
    imagesContainer.scrollBy({
        left: 400,
        behavior: 'smooth'
    });
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        scrollLeft();
    } else if (event.key === 'ArrowRight') {
        scrollRight();
    }
});


function openModal() {
    document.getElementById("myModal").style.display = "block";
}


function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    captionText.innerHTML = slides[slideIndex-1].getElementsByTagName("img")[0].alt;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        plusSlides(-1);
    } else if (event.key === 'ArrowRight') {
        plusSlides(1);
    }
});






function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }
