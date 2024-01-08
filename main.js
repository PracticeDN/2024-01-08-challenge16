const menuIcon = document.getElementById("menu");
const authLinks = document.getElementById("auths");

function handleClickMenu() {
  if (authLinks.style.display === "flex") {
    authLinks.style.display = "none";
  } else {
    authLinks.style.display = "flex";
  }
}

function authStyle() {
  if (window.innerWidth >= 768) {
    authLinks.style.display = "flex";
  } else {
    authLinks.style.display = "none";
  }
}

menuIcon.addEventListener("click", handleClickMenu);
addEventListener("resize", authStyle);
