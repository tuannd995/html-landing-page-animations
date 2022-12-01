window.addEventListener("scroll", reveal);
function reveal() {
  const items = document.querySelectorAll(".item");
  for (let i = 0; i < items.length; i++) {
    const win_height = window.innerHeight;
    const reveal_top = items[i].getBoundingClientRect().top;
    if (reveal_top < win_height - 150) {
      items[i].classList.add("active");
    } else {
      items[i].classList.remove("active");
    }
  }
}
reveal();
