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

            if(
                document.querySelector("#btn-play-video-2").classList.contains("btn-invisible") && 
                document.querySelector("#btn-stop-video-2").classList.contains("btn-visible")

            ) {
                document.querySelector("#video-2").pause();
                document.querySelector("#video-2").currentTime = 0;
                document.querySelector(`#btn-play-video-2`).classList.replace("btn-invisible","btn-visible");
                document.querySelector(`#btn-stop-video-2`).classList.replace("btn-visible","btn-invisible");
              }
            if(
                document.querySelector("#btn-play-video-3").classList.contains("btn-invisible") && 
                document.querySelector("#btn-stop-video-3").classList.contains("btn-visible")

            ) {
                document.querySelector("#video-3").pause();
                document.querySelector("#video-3").currentTime = 0;
                document.querySelector(`#btn-play-video-3`).classList.replace("btn-invisible","btn-visible");
                document.querySelector(`#btn-stop-video-3`).classList.replace("btn-visible","btn-invisible");
              }
            if(
              document.querySelector("#btn-play-video-4").classList.contains("btn-invisible") && 
              document.querySelector("#btn-stop-video-4").classList.contains("btn-visible")

            ) {
                document.querySelector("#video-4").pause();
                document.querySelector("#video-4").currentTime = 0;
                document.querySelector(`#btn-play-video-4`).classList.replace("btn-invisible","btn-visible");
                document.querySelector(`#btn-stop-video-4`).classList.replace("btn-visible","btn-invisible");
              }
            if(
              document.querySelector("#btn-play-video-5").classList.contains("btn-invisible") && 
              document.querySelector("#btn-stop-video-5").classList.contains("btn-visible")
    
            ) {
                document.querySelector("#video-5").pause();
                document.querySelector("#video-5").currentTime = 0;
                document.querySelector(`#btn-play-video-5`).classList.replace("btn-invisible","btn-visible");
                document.querySelector(`#btn-stop-video-5`).classList.replace("btn-visible","btn-invisible");
              }
            if(
              document.querySelector("#btn-play-video-6").classList.contains("btn-invisible") && 
              document.querySelector("#btn-stop-video-6").classList.contains("btn-visible")
    
            ) {
                document.querySelector("#video-6").pause();
                document.querySelector("#video-6").currentTime = 0;
                document.querySelector(`#btn-play-video-6`).classList.replace("btn-invisible","btn-visible");
                document.querySelector(`#btn-stop-video-6`).classList.replace("btn-visible","btn-invisible");
              }

            
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

          if(
            document.querySelector("#btn-play-video-1").classList.contains("btn-invisible") && 
            document.querySelector("#btn-stop-video-1").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-1").pause();
            document.querySelector("#video-1").currentTime = 0;
            document.querySelector(`#btn-play-video-1`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-1`).classList.replace("btn-visible","btn-invisible");
          }
        if(
            document.querySelector("#btn-play-video-3").classList.contains("btn-invisible") && 
            document.querySelector("#btn-stop-video-3").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-3").pause();
            document.querySelector("#video-3").currentTime = 0;
            document.querySelector(`#btn-play-video-3`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-3`).classList.replace("btn-visible","btn-invisible");
          }
        if(
          document.querySelector("#btn-play-video-4").classList.contains("btn-invisible") && 
          document.querySelector("#btn-stop-video-4").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-4").pause();
            document.querySelector("#video-4").currentTime = 0;
            document.querySelector(`#btn-play-video-4`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-4`).classList.replace("btn-visible","btn-invisible");
          }
        if(
          document.querySelector("#btn-play-video-5").classList.contains("btn-invisible") && 
          document.querySelector("#btn-stop-video-5").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-5").pause();
            document.querySelector("#video-5").currentTime = 0;
            document.querySelector(`#btn-play-video-5`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-5`).classList.replace("btn-visible","btn-invisible");
          }
        if(
          document.querySelector("#btn-play-video-6").classList.contains("btn-invisible") && 
          document.querySelector("#btn-stop-video-6").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-6").pause();
            document.querySelector("#video-6").currentTime = 0;
            document.querySelector(`#btn-play-video-6`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-6`).classList.replace("btn-visible","btn-invisible");
          }

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

          if(
            document.querySelector("#btn-play-video-1").classList.contains("btn-invisible") && 
            document.querySelector("#btn-stop-video-1").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-1").pause();
            document.querySelector("#video-1").currentTime = 0;
            document.querySelector(`#btn-play-video-1`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-1`).classList.replace("btn-visible","btn-invisible");
          }
        if(
            document.querySelector("#btn-play-video-2").classList.contains("btn-invisible") && 
            document.querySelector("#btn-stop-video-2").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-2").pause();
            document.querySelector("#video-2").currentTime = 0;
            document.querySelector(`#btn-play-video-2`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-2`).classList.replace("btn-visible","btn-invisible");
          }
        if(
          document.querySelector("#btn-play-video-4").classList.contains("btn-invisible") && 
          document.querySelector("#btn-stop-video-4").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-4").pause();
            document.querySelector("#video-4").currentTime = 0;
            document.querySelector(`#btn-play-video-4`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-4`).classList.replace("btn-visible","btn-invisible");
          }
        if(
          document.querySelector("#btn-play-video-5").classList.contains("btn-invisible") && 
          document.querySelector("#btn-stop-video-5").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-5").pause();
            document.querySelector("#video-5").currentTime = 0;
            document.querySelector(`#btn-play-video-5`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-5`).classList.replace("btn-visible","btn-invisible");
          }
        if(
          document.querySelector("#btn-play-video-6").classList.contains("btn-invisible") && 
          document.querySelector("#btn-stop-video-6").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-6").pause();
            document.querySelector("#video-6").currentTime = 0;
            document.querySelector(`#btn-play-video-6`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-6`).classList.replace("btn-visible","btn-invisible");
          }

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

          if(
            document.querySelector("#btn-play-video-1").classList.contains("btn-invisible") && 
            document.querySelector("#btn-stop-video-1").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-1").pause();
            document.querySelector("#video-1").currentTime = 0;
            document.querySelector(`#btn-play-video-1`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-1`).classList.replace("btn-visible","btn-invisible");
          }
        if(
            document.querySelector("#btn-play-video-2").classList.contains("btn-invisible") && 
            document.querySelector("#btn-stop-video-2").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-2").pause();
            document.querySelector("#video-2").currentTime = 0;
            document.querySelector(`#btn-play-video-2`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-2`).classList.replace("btn-visible","btn-invisible");
          }
        if(
          document.querySelector("#btn-play-video-3").classList.contains("btn-invisible") && 
          document.querySelector("#btn-stop-video-3").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-3").pause();
            document.querySelector("#video-3").currentTime = 0;
            document.querySelector(`#btn-play-video-3`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-3`).classList.replace("btn-visible","btn-invisible");
          }
        if(
          document.querySelector("#btn-play-video-5").classList.contains("btn-invisible") && 
          document.querySelector("#btn-stop-video-5").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-5").pause();
            document.querySelector("#video-5").currentTime = 0;
            document.querySelector(`#btn-play-video-5`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-5`).classList.replace("btn-visible","btn-invisible");
          }
        if(
          document.querySelector("#btn-play-video-6").classList.contains("btn-invisible") && 
          document.querySelector("#btn-stop-video-6").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-6").pause();
            document.querySelector("#video-6").currentTime = 0;
            document.querySelector(`#btn-play-video-6`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-6`).classList.replace("btn-visible","btn-invisible");
          }

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
        else if(element.id === "btn-play-video-5") {
          document.querySelector("#video-5").play();

          if(
            document.querySelector("#btn-play-video-1").classList.contains("btn-invisible") && 
            document.querySelector("#btn-stop-video-1").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-1").pause();
            document.querySelector("#video-1").currentTime = 0;
            document.querySelector(`#btn-play-video-1`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-1`).classList.replace("btn-visible","btn-invisible");
          }
        if(
            document.querySelector("#btn-play-video-2").classList.contains("btn-invisible") && 
            document.querySelector("#btn-stop-video-2").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-2").pause();
            document.querySelector("#video-2").currentTime = 0;
            document.querySelector(`#btn-play-video-2`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-2`).classList.replace("btn-visible","btn-invisible");
          }
        if(
          document.querySelector("#btn-play-video-3").classList.contains("btn-invisible") && 
          document.querySelector("#btn-stop-video-3").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-3").pause();
            document.querySelector("#video-3").currentTime = 0;
            document.querySelector(`#btn-play-video-3`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-3`).classList.replace("btn-visible","btn-invisible");
          }
        if(
            document.querySelector("#btn-play-video-4").classList.contains("btn-invisible") && 
            document.querySelector("#btn-stop-video-4").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-4").pause();
            document.querySelector("#video-4").currentTime = 0;
            document.querySelector(`#btn-play-video-4`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-4`).classList.replace("btn-visible","btn-invisible");
          }
        if(
            document.querySelector("#btn-play-video-6").classList.contains("btn-invisible") && 
            document.querySelector("#btn-stop-video-6").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-6").pause();
            document.querySelector("#video-6").currentTime = 0;
            document.querySelector(`#btn-play-video-6`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-6`).classList.replace("btn-visible","btn-invisible");
          }


          document.querySelector(`#btn-play-video-5`).classList.replace("btn-visible","btn-invisible");
          document.querySelector("#btn-stop-video-5").classList.replace("btn-invisible","btn-visible");

          document.querySelector("#btn-stop-video-5").addEventListener("click",()=>{
            document.querySelector("#video-5").pause();
            document.querySelector("#video-5").currentTime = 0;
            document.querySelector(`#btn-play-video-5`).classList.replace("btn-invisible","btn-visible");
            document.querySelector("#btn-stop-video-5").classList.replace("btn-visible","btn-invisible");
          });

          document.querySelector("#video-5").addEventListener("ended", ()=> {
            document.querySelector(`#btn-play-video-5`).classList.replace("btn-invisible","btn-visible");
            document.querySelector("#btn-stop-video-5").classList.replace("btn-visible","btn-invisible");
          });
        }
        else if(element.id === "btn-play-video-6") {
          document.querySelector("#video-6").play();

          if(
            document.querySelector("#btn-play-video-1").classList.contains("btn-invisible") && 
            document.querySelector("#btn-stop-video-1").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-1").pause();
            document.querySelector("#video-1").currentTime = 0;
            document.querySelector(`#btn-play-video-1`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-1`).classList.replace("btn-visible","btn-invisible");
          }
        if(
            document.querySelector("#btn-play-video-2").classList.contains("btn-invisible") && 
            document.querySelector("#btn-stop-video-2").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-2").pause();
            document.querySelector("#video-2").currentTime = 0;
            document.querySelector(`#btn-play-video-2`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-2`).classList.replace("btn-visible","btn-invisible");
          }
        if(
          document.querySelector("#btn-play-video-3").classList.contains("btn-invisible") && 
          document.querySelector("#btn-stop-video-3").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-3").pause();
            document.querySelector("#video-3").currentTime = 0;
            document.querySelector(`#btn-play-video-3`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-3`).classList.replace("btn-visible","btn-invisible");
          }
        if(
            document.querySelector("#btn-play-video-4").classList.contains("btn-invisible") && 
            document.querySelector("#btn-stop-video-4").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-4").pause();
            document.querySelector("#video-4").currentTime = 0;
            document.querySelector(`#btn-play-video-4`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-4`).classList.replace("btn-visible","btn-invisible");
          }
          if(
            document.querySelector("#btn-play-video-5").classList.contains("btn-invisible") && 
            document.querySelector("#btn-stop-video-5").classList.contains("btn-visible")

        ) {
            document.querySelector("#video-5").pause();
            document.querySelector("#video-5").currentTime = 0;
            document.querySelector(`#btn-play-video-5`).classList.replace("btn-invisible","btn-visible");
            document.querySelector(`#btn-stop-video-5`).classList.replace("btn-visible","btn-invisible");
          }


          document.querySelector(`#btn-play-video-6`).classList.replace("btn-visible","btn-invisible");
          document.querySelector("#btn-stop-video-6").classList.replace("btn-invisible","btn-visible");

          document.querySelector("#btn-stop-video-6").addEventListener("click",()=>{
            document.querySelector("#video-6").pause();
            document.querySelector("#video-6").currentTime = 0;
            document.querySelector(`#btn-play-video-6`).classList.replace("btn-invisible","btn-visible");
            document.querySelector("#btn-stop-video-6").classList.replace("btn-visible","btn-invisible");
          });

          document.querySelector("#video-6").addEventListener("ended", ()=> {
            document.querySelector(`#btn-play-video-6`).classList.replace("btn-invisible","btn-visible");
            document.querySelector("#btn-stop-video-6").classList.replace("btn-visible","btn-invisible");
          });
        }
      });
    });
    
  }

  //Send Form Contactus
  const sendForm = ()=> {
    document.querySelector("#submit-form-contactus").addEventListener("submit", async (e) => {
      e.preventDefault();
      document.querySelector(".message").textContent= ``


      const object = {
        method: "POST",
        headers: {
          "Content-Type": "aplicaction/json",
          "Accept": "aplication/json"
        },
        body: JSON.stringify({
          name: document.querySelector("#form-name").value,
          email: document.querySelector("#form-email").value,
          subject: document.querySelector("#form-subject").value,
          comments: document.querySelector("#form-comments").value,
        })
      };
      try{
        const JSONData = await fetch("https://formsubmit.co/ajax/mariano.floresta@hotmail.com",object);
        const data = await JSONData.json();
        
        if(data.success) {
          document.querySelector(".message").style.color=`green`;
          document.querySelector(".message").textContent=`Message sent`;

        }
        else {
          document.querySelector(".message").style.color=`red`;
          document.querySelector(".message").textContent=`Message not sent`;
        }
      } catch(e) {
        document.querySelector(".message").style.color=`red`;
        document.querySelector(".message").textContent=`Connection error`;
      }
    });
  }

  playVideos();
  sendForm();
  