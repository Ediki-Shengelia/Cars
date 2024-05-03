"use strict";
let userFilter = document.getElementById("input-filter");
let list = document.getElementById("list");
let array = [];

async function fetchData() {
  try {
    const response = await axios.get(
      "https://ediki-shengelia.github.io/test333/server.json"
    );

    let UserData = response.data.data;
    console.log("UserData:", UserData); // Log UserData to inspect its structure

    let list = document.getElementById("list"); // Assuming you have a <ul> or <ol> element with id "list" in your HTML
    let array = [];

    UserData.forEach((element) => {
      let img = document.createElement("img");
      img.setAttribute("src", element.imgUrl);
      img.classList.add("img-url");
      let li = document.createElement("li");
      // li.innerText = `${element.title} - ${element.Location}`;
      li.appendChild(img);

      array.push(li);
      list.appendChild(li);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchData();

function filter(index) {
  array.forEach((item) => {
    if (item.innerText.toLowerCase().includes(index.toLowerCase())) {
      item.style.display = "block"; // Show the item
    } else {
      item.style.display = "none"; // Hide the item
    }
  });
}

userFilter.addEventListener("keyup", function () {
  filter(this.value);
});
