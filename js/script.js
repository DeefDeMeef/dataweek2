console.log(data);

const place = document.querySelector(".place");
const text = document.querySelector(".text");
const image = document.querySelector(".image");
const source = document.querySelector(".bron");

const container = document.querySelector(".container");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let articleNum = 0;

const setData = () => {
  setTimeout(() => {
    animateCSS(".container", "fadeIn");
    place.innerHTML = data[articleNum].place;
    text.innerHTML = data[articleNum].text;
    image.src = data[articleNum].image_src;
  }, 1000);
};

const animateCSS = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });

next.addEventListener("click", () => {
  animateCSS(".container", "backOutRight");
  articleNum++;
  setData();
});

prev.addEventListener("click", () => {
  animateCSS(".container", "backOutLeft");

  articleNum--;
  setData();
});

setData();
