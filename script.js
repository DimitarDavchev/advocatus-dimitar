const posts = document.querySelectorAll(".show");
const dots = document.querySelectorAll('.buttons');
const accordionDivs = document.querySelectorAll(".accordion-divs");
const plusMinus = document.querySelectorAll("#plus-icon");
const accordionP = document.querySelectorAll(".accordion-p");
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
plusMinus.forEach((plus) => {
  plus.addEventListener("click", (e) => {

accordionP.forEach((para) => {
        para.classList.remove("active-accordion");
    })
    plusMinus.forEach((plus) => {
        plus.classList.remove("fa-minus");
        plus.classList.add("fa-plus")
    });
    e.target.previousSibling.classList.add("active-accordion");
    e.target.classList.remove("fa-plus");
    e.target.classList.add("fa-minus");
    let parents = e.target.parentElement
    parents.nextElementSibling.style.display = "block"

  })
})
}

accord()