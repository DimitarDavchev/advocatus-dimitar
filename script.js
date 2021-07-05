const posts = document.querySelectorAll(".show");
const dots = document.querySelectorAll('.buttons');
const accordionDivs = document.querySelectorAll(".accordion-divs");
const plusMinus = document.querySelectorAll("#plus-icon");
let currentSlide = 0;


const init = (n) => {
  posts.forEach((post) => {
    post.style.display = "none"
    dots.forEach((dot) => {
      dot.classList.remove("active1")
    })
  })
  posts[n].style.display = "flex";
  dots[n].classList.add("active1");
  
}
document.addEventListener("DOMContentLoaded", init(currentSlide))

const next = () => {
    currentSlide >= posts.length - 1 ? currentSlide = 0 : currentSlide++
    init(currentSlide)
  };


setInterval(() => {
    next()
  }, 5000);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      init(index)
      currentSlide = index
    })
  });

function accord() {

    accordionDivs.forEach((divs) => {
        divs.classList.remove("active-accordion");
    })
    plusMinus.forEach((plus) => {
        plus.classList.remove("fa-plus");
    });
    this.target.classList.add("active-accordion");





}

plusMinus.addEventListener("click", accord());