let toTop = document.querySelector(".to-top");
// BOM
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
