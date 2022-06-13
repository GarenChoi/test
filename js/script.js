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
//menu slide
function menuSlide(){
  let menuIndex = 1;
  let clickBtn = true;
  document.querySelector(".menu_left").addEventListener("click",()=>{
    if(clickBtn){
      clickBtn = false;
      menuIndex--;
      document.querySelector(".menu_slide_inner").style.transform = `translateX(${-450*menuIndex}px)`;
      setTimeout(()=>{
        if(menuIndex == 0){
          document.querySelector(".menu_slide_inner").style.transition = "none";
          menuIndex =6;
          document.querySelector(".menu_slide_inner").style.transform = `translateX(${-450*menuIndex}px)`;
          
        }
      },500)
      setTimeout(()=>{
        document.querySelector(".menu_slide_inner").style.transition = "transform 0.5s";
        clickBtn=true;
      },600)
    }
  })
  document.querySelector(".menu_right").addEventListener("click",()=>{
    if(clickBtn){
      clickBtn = false;
      menuIndex++;
      document.querySelector(".menu_slide_inner").style.transform = `translateX(${-450*menuIndex}px)`;
      setTimeout(()=>{
        if(menuIndex == 7){
          document.querySelector(".menu_slide_inner").style.transition = "none";
          menuIndex =1;
          document.querySelector(".menu_slide_inner").style.transform = `translateX(${-450*menuIndex}px)`;
          
        }
      },500)
      setTimeout(()=>{
        document.querySelector(".menu_slide_inner").style.transition = "transform 0.5s";
        clickBtn=true;
      },600)
    }
  })
}
//list slide
function listSlide(){
  let listIndex = 1;
  let clickBtn = true;
  document.querySelector(".list_left").addEventListener("click",()=>{
    if(clickBtn){
      clickBtn = false;
      listIndex--;
      document.querySelector(".list_slide_inner").style.transform = `translateX(${-260*listIndex}px)`;
      setTimeout(()=>{
        if(listIndex == 0){
          document.querySelector(".list_slide_inner").style.transition = "none";
          listIndex =6;
          document.querySelector(".list_slide_inner").style.transform = `translateX(${-260*listIndex}px)`;
          
        }
      },500)
      setTimeout(()=>{
        document.querySelector(".list_slide_inner").style.transition = "transform 0.5s";
        clickBtn=true;
      },600)
    }
  })
  document.querySelector(".list_right").addEventListener("click",()=>{
    if(clickBtn){
      clickBtn = false;
      listIndex++;
      document.querySelector(".list_slide_inner").style.transform = `translateX(${-260*listIndex}px)`;
      setTimeout(()=>{
        if(listIndex == 7){
          document.querySelector(".list_slide_inner").style.transition = "none";
          listIndex =1;
          document.querySelector(".list_slide_inner").style.transform = `translateX(${-260*listIndex}px)`;
          
        }
      },500)
      setTimeout(()=>{
        document.querySelector(".list_slide_inner").style.transition = "transform 0.5s";
        clickBtn=true;
      },600)
    }
  })
}
//main slide
function mainSlide() {
  let slideIndex = 2;
  let clickBtn = true;
  document.querySelector(".main_slide_left").addEventListener("click", () => {
    if (clickBtn) {
      clickBtn = false;
      slideIndex--;
      document.querySelector(".main_slide_inner").style.transform = `translateX(${-406*slideIndex}px)`;
      setTimeout(()=>{
      if(slideIndex == 0){
          document.querySelector(".main_slide_inner").style.transition = "none";
          slideIndex = 6;
          document.querySelector(".main_slide_inner").style.transform = `translateX(${-406*slideIndex}px)`;
        }
      },500)
      setTimeout(() => {
        document.querySelector(".main_slide_inner").style.transition = "transform 0.5s";
        clickBtn = true;
      }, 600)
    }
  });

  document.querySelector(".main_slide_right").addEventListener("click", () => {
    if (clickBtn) {
      clickBtn = false;
      slideIndex++;
      document.querySelector(".main_slide_inner").style.transform = `translateX(${-406*slideIndex}px)`;
      setTimeout(()=>{
      if(slideIndex == 7){
          document.querySelector(".main_slide_inner").style.transition = "none";
          slideIndex = 1;
          document.querySelector(".main_slide_inner").style.transform = `translateX(${-406*slideIndex}px)`;
        }
      },500)
      setTimeout(() => {
        document.querySelector(".main_slide_inner").style.transition = "transform 0.5s";
        clickBtn = true;
      }, 600)
    }
  });
}

//contents text
function contentsBox(){
  top20.forEach((el,index)=>{
    let index1 = index+1;
    let dDay = (new Date(el.esRegdt)-new Date("2021-06-02"))/(1000*60*60*24);
    document.querySelector(`.cont_box${index1} .dDay`).innerText = `D-${dDay}`;
    document.querySelector(`.cont_box${index1} .cont_title`).innerText = el.title;
    document.querySelector(`.cont_box${index1} .agency span`).innerText = el.licenseOrgan;
    document.querySelector(`.cont_box${index1} .date span`).innerText = el.esRegdt.replace("T00:00:00.000+00:00", "");
  })
}