const readMoreBtn = document.querySelector(".readmore_btn");
const moreText = document.querySelector(".readmore_text");

readMoreBtn.addEventListener("click",()=>{
  readMoreBtn.classList.toggle("active");
  moreText.classList.toggle("show");
  readMoreBtn.innerHTML = readMoreBtn.classList.contains("active") ? "Read Less" : "Read More";
})