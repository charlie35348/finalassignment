document.addEventListener("DOMContentLoaded", function () { // it will make the script to wait until the whole page is loaded
  const hamburger = document.getElementById("hamburger"); // getting hamburger icon while loading on mobile
  const navbar = document.getElementById("main-navbar"); // getting navbar to be displayed on screen

  
  const items = document.querySelectorAll(".accordion-item"); // making all accordion items to be stored in variable 

  items.forEach(function (item) { // start loop in each accordion item to make it clickable and view content
    const title = item.querySelector(".accordion-title"); // making each title clickable
    const content = item.querySelector(".accordion-content"); // making inside content of each title to be shown when clicked
    const arrow = item.querySelector(".arrow"); // making arrow to change its direction based on content is shown or not

    title.addEventListener("click", function () {  // adding click event to all accordion title
      const isOpen = content.classList.contains("show"); // checking whther item is open or not

      items.forEach(function (otherItem) {  // making loop to make sure only one item remains open at a time and other closed
        otherItem.querySelector(".accordion-content").classList.remove("show"); // hiding content of other items
        otherItem.querySelector(".arrow").textContent = "▼"; // cahnging arrow direction to downside
      });

      if (!isOpen) { // if clicked item was not open, then show its content and change direction of arrow upwards
        content.classList.add("show"); // showing content from clicked title
        arrow.textContent = "▲"; // changing arrow in upward direction
      }
    });
  });
});
// manages the accordion on the service page. It selects all the service sections, and when you click one title, it first
//  closes all other sections, then opens only the clicked one. At the same time, it changes the arrow icon from down (▼) 
// to up (▲) to show whether the section is open or closed. This ensures that only one service is visible at a time, keeping 
// the interface clean and easy to use.