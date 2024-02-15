// Open Menu
const toggleMenu = () => document.body.classList.toggle("open");

// Carousel Home
var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    speed: 600,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
  });

  // Videos About us

  const playVideos = () => {
    allButtons = document.querySelectorAll(".btn-video");
    allButtons.forEach(element => {
      element.addEventListener("click",()=>{
        if(element.id === "btn-video-1") {
            document.querySelector("#video-1").play();
            document.querySelector("#btn-video-1").classList.replace("play","stop");
            document.querySelector("#video-1").addEventListener("ended", ()=> {
            document.querySelector("#btn-video-1").classList.replace("stop","play");
          });

          if(document.querySelector("#btn-video-1").classList.contains("stop")) {

          }


        }
        else if(element.id === "btn-video-2") {
          
        }
        else if(element.id === "btn-video-3") {
          
        }
        else if(element.id === "btn-video-4") {
          
        }
      });
    });

    /*
                        ele.addEventListener("click", ()=>{
                        verPassUsuario(ele.id.slice(16,26));
                    })
                })
    */
    
  }

  playVideos();
  