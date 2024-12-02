const link1 = document.getElementById("link");
const introDiv = document.querySelector(".intro");
const warningDiv = document.querySelector(".warning");
const rslvBtn = document.getElementById("resolve");
const backIntro = document.getElementById("back");
const hello = document.querySelector(".hello");
const contCat = document.getElementById("contKitty");
const mainPort = document.querySelector(".main-container");

link1.onclick = function () {
  introDiv.style.display = "none";
  warningDiv.style.display = "flex";
};

backIntro.onclick = function () {
  introDiv.style.display = "flex";
  warningDiv.style.display = "none";
};

rslvBtn.onclick = function () {
  introDiv.style.display = "none";
  warningDiv.style.display = "none";
  hello.style.display = "flex";
};

contCat.onclick = function () {
  introDiv.style.display = "none";
  warningDiv.style.display = "none";
  hello.style.display = "none";
  mainPort.style.display = "flex";
};

document.querySelectorAll(".nav-button").forEach((button) => {
  button.onclick = function (event) {
    event.preventDefault(); 
    const targetId = button.getAttribute("href").substring(1); 
    const targetElement = document.getElementById(targetId); 

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", 
        block: "start", 
      });
    }
  };
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const backgrounds = [
  "assets/img/procreatetxt.png",
  "assets/img/htmltxt.png",
  "assets/img/csstxt.png",
  "assets/img/jscripttxt.png"
];

let currentIndex = 0; 

function changeBackgroundImage() {

  const container = document.getElementById("skills-container");
  

  currentIndex = (currentIndex + 1) % backgrounds.length; 
  container.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
}

document.getElementById("skills-container").addEventListener('click', changeBackgroundImage);

