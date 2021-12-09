console.log(data);

const place = document.querySelector(".place");
const text = document.querySelector(".text");
const image = document.querySelector(".image");
const safety = document.querySelector(".text-safety");
const safety_container = document.querySelector(".safety");
const source = document.querySelector(".bron");

const container = document.querySelector(".container");
const stations = document.querySelectorAll(".link");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const modal = document.getElementById("myModal");
const span = document.querySelector(".close");
const start = document.querySelector(".start");

let articleNum = 0;

const setData = () => {
  if (articleNum === 0) {
    prev.disabled = true;
  } else if (articleNum === 9) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }

  setTimeout(() => {
    animateCSS(".container-main", "fadeIn");
    stations[articleNum].style.color = "#d95353";
    place.innerHTML = data[articleNum].place;
    text.innerHTML = data[articleNum].text;
    safety.innerHTML = "Veiligheid: " + data[articleNum].safety_index;
    const x = data[articleNum].safety_index;

    switch (true) {
      case x < 60:
        safety_container.style.backgroundColor = "#209855";
        break;
      case x >= 60 && x <= 90:
        safety_container.style.backgroundColor = "#92CF6A";
        break;
      case x >= 90 && x <= 100:
        safety_container.style.backgroundColor = "#D9EF93";
        break;
      case x >= 100 && x <= 110:
        safety_container.style.backgroundColor = "#FFFFC3";
        safety.style.color = "#000";
        break;
      case x >= 110 && x <= 120:
        safety_container.style.backgroundColor = "#FEE092";
        break;
      case x >= 120 && x <= 130:
        safety_container.style.backgroundColor = "#FB8E5F";
        break;
      case x >= 130 && x <= 200:
        safety_container.style.backgroundColor = "#D6332D";
        break;
      default:
        safety_container.style.backgroundColor = "#fff";
        break;
    }

    source.setAttribute("href", data[articleNum].bron);
    image.src = data[articleNum].image_src;
  }, 1000);
};

const animateCSS = (element, animation, prefix = "animate__") =>
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    const handleAnimationEnd = (event) => {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    };

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });

next.addEventListener("click", () => {
  animateCSS(".container-main", "backOutRight");
  articleNum++;
  setData();
});

prev.addEventListener("click", () => {
  animateCSS(".container-main", "backOutLeft");
  stations[articleNum].style.color = "white";

  articleNum--;
  setData();
});

span.addEventListener("click", () => {
  modal.style.display = "none";
});

start.addEventListener("click", () => {
  modal.style.display = "none";
});

setData();
