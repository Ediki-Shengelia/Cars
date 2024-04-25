"use strict";

const dataSlider = [
  {
    id: 1,
    imgUrl: "./carImg/audi-1.png",
    title: "Audi",
    price: "50 000$",
  },
  {
    id: 2,
    imgUrl: "./carImg/bmw-1.png",
    title: "BMW",
    price: "70 000$",
  },

  {
    id: 3,
    imgUrl: "./carImg/ferrari-1.png",
    title: "Ferrari",
    price: "2 500 000$",
  },

  {
    id: 4,
    imgUrl: "./carImg/lamborgini-2.png",
    title: "Lamborgini",
    price: "200 000$",
  },
  {
    id: 5,
    imgUrl: "./carImg/mersedes-1.png",
    title: "Mersedes",
    price: "120 000$",
  },
  {
    id: 6,
    imgUrl: "./carImg/porsch911.png",
    title: "Porsche",
    price: "130 000$",
  },
  {
    id: 7,
    imgUrl: "./carImg/porsche.png",
    title: "Porsche",
    price: "130 000$",
  },
];

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const sliderContent = document.getElementById("slider-content");

let slider = 0;

function createDivTag() {
  const divEl = document.createElement("div");
  return divEl;
}

function createImgTag(image) {
  const ImgEl = document.createElement("img");
  ImgEl.src = image.imgUrl;
  ImgEl.classList.add("image-el");
  return ImgEl;
}

function createTitleTag(item) {
  const h2El = document.createElement("h2");
  h2El.innerText = item.title;
  h2El.classList.add("title-h2");
  return h2El;
}

function createPriceTag(index) {
  const h3El = document.createElement("h3");
  h3El.textContent = index.price;
  h3El.classList.add("price-h3");
  return h3El;
}

function SetSlide() {
  const Div = createDivTag();
  const img = createImgTag(dataSlider[slider]);
  const price = createPriceTag(dataSlider[slider]);
  const title = createTitleTag(dataSlider[slider]);
  const dots = createDots();

  Div.appendChild(img);
  Div.appendChild(title);
  Div.appendChild(price);
  Div.appendChild(dots);
  sliderContent.innerHTML = "";
  sliderContent.appendChild(Div);
}

function clickArrowRight() {
  if (slider === dataSlider.length - 1) {
    slider = 0;
  } else {
    slider++;
  }
  SetSlide();
}

function clickArrowLeft() {
  if (slider === 0) {
    slider = dataSlider.length - 1;
  } else {
    slider--;
  }
  SetSlide();
}

arrowLeft.addEventListener("click", clickArrowLeft);
arrowRight.addEventListener("click", clickArrowRight);

setInterval(() => {
  clickArrowRight();
}, 3000);

SetSlide();

function createDots() {
  const dotParent = document.createElement("div"); // Corrected line
  dotParent.classList.add("dots-parent");
  dataSlider.forEach((Element) => {
    const dotChild = document.createElement("div");
    dotChild.classList.add("dot-child");
    dotChild.setAttribute("dot-id", Element.id - 1);
    dotParent.appendChild(dotChild);
    dotChild.addEventListener("click", function () {
      let idDots = this.getAttribute("dot-id");
      slider = idDots;
      SetSlide();
    });
  });
  return dotParent;
}