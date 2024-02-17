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
    allPlaysButtons = document.querySelectorAll(".btn-play-video");
    allPlaysButtons.forEach(element => {
      element.addEventListener("click",()=>{
        if(element.id === "btn-play-video-1") {
            document.querySelector("#video-1").play();
            document.querySelector(`#btn-play-video-1`).classList.replace("btn-visible","btn-invisible");
            document.querySelector("#btn-stop-video-1").classList.replace("btn-invisible","btn-visible");

            document.querySelector("#btn-stop-video-1").addEventListener("click",()=>{
              document.querySelector("#video-1").pause();
              document.querySelector("#video-1").currentTime = 0;
              document.querySelector(`#btn-play-video-1`).classList.replace("btn-invisible","btn-visible");
              document.querySelector("#btn-stop-video-1").classList.replace("btn-visible","btn-invisible");
            });

            document.querySelector("#video-1").addEventListener("ended", ()=> {
              document.querySelector(`#btn-play-video-1`).classList.replace("btn-invisible","btn-visible");
              document.querySelector("#btn-stop-video-1").classList.replace("btn-visible","btn-invisible");
            });

        }
        else if(element.id === "btn-play-video-2") {
          document.querySelector("#video-2").play();
          document.querySelector(`#btn-play-video-2`).classList.replace("btn-visible","btn-invisible");
          document.querySelector("#btn-stop-video-2").classList.replace("btn-invisible","btn-visible");

          document.querySelector("#btn-stop-video-2").addEventListener("click",()=>{
            document.querySelector("#video-2").pause();
            document.querySelector("#video-2").currentTime = 0;
            document.querySelector(`#btn-play-video-2`).classList.replace("btn-invisible","btn-visible");
            document.querySelector("#btn-stop-video-2").classList.replace("btn-visible","btn-invisible");
          });

          document.querySelector("#video-2").addEventListener("ended", ()=> {
            document.querySelector(`#btn-play-video-2`).classList.replace("btn-invisible","btn-visible");
            document.querySelector("#btn-stop-video-2").classList.replace("btn-visible","btn-invisible");
          });
        }
        else if(element.id === "btn-play-video-3") {
          document.querySelector("#video-3").play();
          document.querySelector(`#btn-play-video-3`).classList.replace("btn-visible","btn-invisible");
          document.querySelector("#btn-stop-video-3").classList.replace("btn-invisible","btn-visible");

          document.querySelector("#btn-stop-video-3").addEventListener("click",()=>{
            document.querySelector("#video-3").pause();
            document.querySelector("#video-3").currentTime = 0;
            document.querySelector(`#btn-play-video-3`).classList.replace("btn-invisible","btn-visible");
            document.querySelector("#btn-stop-video-3").classList.replace("btn-visible","btn-invisible");
          });

          document.querySelector("#video-3").addEventListener("ended", ()=> {
            document.querySelector(`#btn-play-video-3`).classList.replace("btn-invisible","btn-visible");
            document.querySelector("#btn-stop-video-3").classList.replace("btn-visible","btn-invisible");
          });
        }
        else if(element.id === "btn-play-video-4") {
          document.querySelector("#video-4").play();
          document.querySelector(`#btn-play-video-4`).classList.replace("btn-visible","btn-invisible");
          document.querySelector("#btn-stop-video-4").classList.replace("btn-invisible","btn-visible");

          document.querySelector("#btn-stop-video-4").addEventListener("click",()=>{
            document.querySelector("#video-4").pause();
            document.querySelector("#video-4").currentTime = 0;
            document.querySelector(`#btn-play-video-4`).classList.replace("btn-invisible","btn-visible");
            document.querySelector("#btn-stop-video-4").classList.replace("btn-visible","btn-invisible");
          });

          document.querySelector("#video-4").addEventListener("ended", ()=> {
            document.querySelector(`#btn-play-video-4`).classList.replace("btn-invisible","btn-visible");
            document.querySelector("#btn-stop-video-4").classList.replace("btn-visible","btn-invisible");
          });
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
  