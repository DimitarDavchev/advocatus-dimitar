const posts = document.querySelectorAll(".show");
const dots = document.querySelectorAll('.buttons');
const accordionDivs = document.querySelectorAll(".accordion-divs");
const plusMinus = document.querySelectorAll("#plus-icon");
const accordionP = document.querySelectorAll(".accordion-p");
const firstAccordion = document.querySelector(".first-accordion");
const secondAccordion = document.querySelector(".second-accordion");
const thirdAccordion = document.querySelector(".third-accordion");
const fourthAccordion = document.querySelector(".fourth-accordion");
const fifthAccordion = document.querySelector(".fifth-accordion");
const sixthAccordion = document.querySelector(".sixth-accordion");
const allAccordions = document.querySelectorAll(".accordions");
const fixedNavbar = document.querySelector(".fixed-navbar");
const scrolls = document.querySelectorAll(".scrolls");
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

    allAccordions.forEach((accor) => {
      accor.style.display = "none"
    })

accordionP.forEach((para) => {
        para.classList.remove("active-accordion");
    })
    plusMinus.forEach((plus) => {
        plus.classList.remove("fa-minus");
        plus.classList.add("fa-plus")
    });
    e.target.previousElementSibling.classList.add("active-accordion");
    e.target.classList.remove("fa-plus");
    e.target.classList.add("fa-minus");

    if(plus.previousElementSibling.innerHTML.includes("What1")) {
      firstAccordion.style.display = "flex";
    } else if(plus.previousElementSibling.innerHTML.includes("What2")) {
      secondAccordion.style.display = "flex";
    } else if(plus.previousElementSibling.innerHTML.includes("What3")) {
      thirdAccordion.style.display = "flex";
    } else if(plus.previousElementSibling.innerHTML.includes("What4")) {
      fourthAccordion.style.display = "flex";
    } else if(plus.previousElementSibling.innerHTML.includes("What5")) {
      fifthAccordion.style.display = "flex";
    } else if(plus.previousElementSibling.innerHTML.includes("What6")) {
      sixthAccordion.style.display = "flex";
    }

  })
})
}

accord();

function scrollNavbar () {
  if(scrollY >= 265) {
    fixedNavbar.style.display = "flex";

  } else {
    fixedNavbar.style.display = "none";
  }

}

window.addEventListener("scroll", scrollNavbar);

function hoverOnScroll () {

  const about = document.querySelector("#about");
  const practice = document.querySelector("#practice");
  const lawyers = document.querySelector("#lawyers");
  const publications = document.querySelector("#publications");
  const faq = document.querySelector("#faq");
  const contact = document.querySelector("#contact");

  scrolls.forEach((scroll) => {

    if(scrollY < 794) {
        scroll.classList.remove("scrolled")
    }else if(scrollY >= 794 && scrollY <= 1430){
        scroll.classList.remove("scrolled") 
      about.classList.add("scrolled");
  
    } else if(scrollY >= 1430 && scrollY <= 2226){
      scroll.classList.remove("scrolled");
      practice.classList.add("scrolled");
    } else if(scrollY >= 2226 && scrollY <= 3581){
      scroll.classList.remove("scrolled");
      lawyers.classList.add("scrolled");
    } else if(scrollY >= 3581 && scrollY <= 4481){
      scroll.classList.remove("scrolled");
      publications.classList.add("scrolled");
    } else if(scrollY >= 4481 && scrollY <= 5171){
      scroll.classList.remove("scrolled");
      faq.classList.add("scrolled");
    } else if(scrollY >= 5171 && scrollY <= 5286){
      scroll.classList.remove("scrolled");
      contact.classList.add("scrolled");
    }

  })
}

window.addEventListener("scroll", hoverOnScroll)



