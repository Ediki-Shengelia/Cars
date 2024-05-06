document.getElementById("burger").addEventListener("click", function () {
  this.classList.toggle("open");
  document.querySelector(".nav-menu").classList.toggle("open");
});

// scroll to top

let topIcon = document.getElementById("top");
topIcon.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 700) {
    topIcon.classList.add("newIcon");
  } else {
    topIcon.classList.remove("newIcon");
  }
});
