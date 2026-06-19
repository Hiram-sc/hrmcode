// Hero Card
const results = document.querySelectorAll('.result-item');
const indicator = document.querySelectorAll('.indicator');

let currentIndex = 0;

function nextResult() {
    results[currentIndex].classList.remove("active");
    indicator[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + 1) % results.length;
    
    results[currentIndex].classList.add("active");
    indicator[currentIndex].classList.add("active");
}

//Autoplay
setInterval(nextResult, 5000);
