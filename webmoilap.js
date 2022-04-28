function previousSlide ()  {
    let allSlides = document.querySelectorAll(".slideImg");
    for(let i = 0; i < allSlides.length; i++) {
        if(allSlides[i].className.includes("activeSlide")) {
            if(i == 0) {
                allSlides[allSlides.length - 1].className = "slideImg activeSlide";
                allSlides[i].className = "slideImg hiddenSlide";
                break;
            } else {
                allSlides[i-1].className = "slideImg activeSlide";
                allSlides[i].className = "slideImg hiddenSlide";
                break;
            }
        }
    }
}

function nextSlide  ()  {
    let allSlides = document.querySelectorAll(".slideImg");
    for(let i = 0; i < allSlides.length; i++) {
        if(allSlides[i].className.includes("activeSlide")) {
            if(i+1 == allSlides.length) {
                allSlides[0].className = "slideImg activeSlide";
                allSlides[i].className = "slideImg hiddenSlide";
                break;
            } else {
                allSlides[i+1].className = "slideImg activeSlide";
                allSlides[i].className = "slideImg hiddenSlide";
                break;
            }
        }
    }
}

setInterval(() => nextSlide(), 3000);

