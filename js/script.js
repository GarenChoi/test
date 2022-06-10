document.querySelector(".header_search input").addEventListener("click", () => {
  document.querySelector(".header_search fieldset").classList.add("active");
});
document.querySelector(".menu2 .ai").addEventListener("mouseover", () => {
  document.querySelector(".menu2 .ai").style.backgroundImage =
    "url(https://janet.co.kr/img/common/header/ai_ov.png)";
});
document.querySelector(".menu2 .ai").addEventListener("mouseout", () => {
  document.querySelector(".menu2 .ai").style.backgroundImage =
    "url(https://janet.co.kr/img/common/header/ai.png)";
});
document.querySelector(".menu1 button img").addEventListener("click", () => {
  document.querySelector(".list").classList.toggle("active");
});

//banner slide
function bannerSlide(){
  let slideIndex = 0;
        setInterval(() => {
          
          if (slideIndex == 4) {
            document.querySelector(".slide_inner").style.transition = "none";
            slideIndex = 0;
            document.querySelector(".slide_inner").style.transform = `translate(${
            -420 * slideIndex
            }px)`;
            setTimeout(()=>{
              document.querySelector(".slide_inner").style.transition = "transform 0.5s";
              slideIndex++;
              document.querySelector(".slide_inner").style.transform = `translate(${
              -420 * slideIndex
              }px)`;
              document.querySelector(".slide_index span").innerText = slideIndex+1;
            })
            
          } else {
            slideIndex++;
            document.querySelector(".slide_inner").style.transform = `translate(${
            -420 * slideIndex
            }px)`;
          }
          
          if(slideIndex==4){
            document.querySelector(".slide_index span").innerText = 1;
          } else {
            document.querySelector(".slide_index span").innerText = slideIndex +1;
          }
        }, 3000);

}
bannerSlide();