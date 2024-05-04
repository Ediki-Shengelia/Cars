"use strict";

document.addEventListener("DOMContentLoaded", function() {
  const accordionBlocks = document.querySelectorAll(".container-accordion");

  accordionBlocks.forEach(function(block) {
    block.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.querySelector(".acc-descr");
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
});