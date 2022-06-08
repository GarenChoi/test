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
