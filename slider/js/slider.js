const showPrevBtn = document.getElementById("showPrev");
const showNextBtn = document.getElementById("showNext");
const bandSlide = document.getElementsByClassName("slides")[0];
const bandSlideImages = bandSlide.querySelectorAll("img");
const dots = document.getElementsByClassName("dot");
const replacer = document.getElementsByClassName("element");

let currentImageIndex = 1;
let slideStepCounter = 20;
let timer;
let isSliderMoving = false;

bandSlide.style.marginLeft = -32 * (slideStepCounter * currentImageIndex) + "px";

showPrevBtn.addEventListener("click", onShowPrevBtnClick);
showNextBtn.addEventListener("click", onShowNextBtnClick);

for (let i=0; i < bandSlideImages.length - 2; i++){
  dots[0].parentNode.append(dots[i].cloneNode())
}

// точки  
dots[currentImageIndex - 1].classList.add("active");
Array.from(dots).forEach((el, i = 0) => el.setAttribute("data-key", i + 1)); 
dots[0].parentElement.addEventListener("click", (e) => {
  if (!e.target.classList.contains("dot") || e.target.classList.contains("active") || isSliderMoving) return false;
  
  let imageKey = +e.target.dataset[`key`];
  if (imageKey > currentImageIndex) {
    sliderMove("right");
  } else {
    sliderMove("left");
  }
  currentImageIndex = imageKey;
});

bandSlide.append(bandSlideImages[1].cloneNode());
bandSlideImages[0].remove()
bandSlide.prepend(bandSlideImages[bandSlideImages.length - 1].cloneNode(true));

// стрелки
function onShowPrevBtnClick() {
  if (isSliderMoving) return false;
  currentImageIndex--;
  sliderMove("left");
}

function onShowNextBtnClick() {
  if (isSliderMoving) return false;
  currentImageIndex++;
  sliderMove("right");
}

// интервал
function sliderMove(pos) {
  isSliderMoving = true;
  pos = pos === "left" ? -1 : 1;
  timer = setInterval(function () {
    slideStepCounter = slideStepCounter + pos;
    bandSlide.style.marginLeft = -32 * slideStepCounter + "px";
    
    if (slideStepCounter !== (20 * currentImageIndex)) return false;
    clearInterval(timer);
    isLastOrFirst();
    isSliderMoving = false;
    
    Array.from(dots).find(d => d.classList.contains("active")).classList.remove('active');
    dots[currentImageIndex - 1].classList.add("active");
  }, 35);
}

// 1 и последняя     
function isLastOrFirst() {
  if (currentImageIndex < 1) {
    bandSlide.style.marginLeft = -32 * slideStepCounter + "px";
    slideStepCounter = 20 * (bandSlideImages.length - 1);
    currentImageIndex = bandSlideImages.length - 1;
  }
  if (currentImageIndex >= bandSlideImages.length) {
    slideStepCounter = 20;
    currentImageIndex = 1;
    bandSlide.style.marginLeft = -32 * slideStepCounter + "px";
  }
}