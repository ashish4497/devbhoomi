// script.js
jQuery(document).ready(function () {
  const $hamburgerMenu = $(".hamburger-menu");
  const $mobileMenu = $(".mobile-menu");
  const $closeBtn = $(".mobile-menu .close-btn");
  const $body = $("body");

  function toggleMenu() {
    $mobileMenu.toggleClass("active");
    $body.toggleClass("no-scroll");
  }

  // Click event to open the menu
  $hamburgerMenu.on("click", function () {
    toggleMenu();
  });

  // Click event to close the menu
  $closeBtn.on("click", function () {
    toggleMenu();
  });
});

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  // Hide all tab contents
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the active class from all tab links
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab content and add the active class to the corresponding tab link
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Set the default tab to be open
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tab-link.active").click();
});

document.querySelectorAll(".accordion-item-header").forEach((header) => {
  header.addEventListener("click", () => {
    const activeItem = document.querySelector(".accordion-item.active");
    if (activeItem && activeItem !== header.parentElement) {
      activeItem.classList.remove("active");
      activeItem.querySelector(".accordion-item-body").style.maxHeight = 0;
    }
    const item = header.parentElement;
    item.classList.toggle("active");
    const body = header.nextElementSibling;
    if (item.classList.contains("active")) {
      body.style.maxHeight = body.scrollHeight + "px";
    } else {
      body.style.maxHeight = 0;
    }
  });
});

document.getElementById("learnMoreBtn").addEventListener("click", function () {
  var moreInfo = document.getElementById("moreInfo");
  if (moreInfo.classList.contains("visible")) {
    moreInfo.classList.remove("visible");
    this.textContent = "Click Here To Learn More";
  } else {
    moreInfo.classList.add("visible");
    this.textContent = "Show Less";
  }
});
document.getElementById("learnMoreBtn2").addEventListener("click", function () {
  var moreInfo2 = document.getElementById("moreInfo2");
  if (moreInfo2.classList.contains("visible")) {
    moreInfo2.classList.remove("visible");
    this.textContent = "Click Here To Learn More";
  } else {
    moreInfo2.classList.add("visible");
    this.textContent = "Show Less";
  }
});
