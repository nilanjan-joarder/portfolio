
 


function handleVideoHover(videoElement, hoverTextElement) {
  videoElement.addEventListener("mouseenter", () => {
    videoElement.play();
    hoverTextElement.classList.remove("active");
  });

  videoElement.addEventListener("mouseleave", () => {
    videoElement.pause();
    hoverTextElement.classList.add("active");
  });
}

function handleVideoHover(videoElement, hoverTextElement) {
  if (!videoElement || !hoverTextElement) {
    console.error("Video or hover text element not found");
    return;
  }

  videoElement.addEventListener("mouseenter", () => {
    videoElement.play().catch(error => {
      console.error("Play failed:", error);
    });
    if (hoverTextElement.classList) {
      hoverTextElement.classList.remove("active");
    }
  });

  videoElement.addEventListener("mouseleave", () => {
    videoElement.pause();
    if (hoverTextElement.classList) {
      hoverTextElement.classList.add("active");
    }
  });
}

// Usage
const video1 = document.querySelector(".video-container video");
const hoverText1 = document.querySelector(".video-container .hover-text");
handleVideoHover(video1, hoverText1);

const video2 = document.querySelector(".video-container2 video");
const hoverText2 = document.querySelector(".video-container2 .hover-text");
handleVideoHover(video2, hoverText2);

const video3 = document.querySelector(".video-container3 video");
const hoverText3 = document.querySelector(".video-container3 .hover-text");
handleVideoHover(video3, hoverText3);

const video4 = document.querySelector(".video-container4 video");
const hoverText4 = document.querySelector(".video-container4 .hover-text");
handleVideoHover(video4, hoverText4);



function menu() {
  var a = document.getElementById("hambargarmenu");
  a.style.display = "flex";
  a.style.transform = "translateX(-100%)";
  setTimeout(function () {
    a.style.transition = "transform 0.5s ease";
    a.style.transform = "translateX(0)";
  }, 10);
}

function closemenu() {
  var b = document.getElementById("hambargarmenu");
  b.animate(
    { transform: 'translateX(-100%)' },
    {
      duration: 500,
      fill: 'backwards'
    });
  setTimeout(function () {
    b.style.display = "none";
  }, 500);
}
