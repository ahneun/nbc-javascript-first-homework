const upButton = document.querySelector(".up-button");

window.addEventListener("scroll", () => {
  console.log({ scrollY });
  if (scrollY > 100) {
    upButton.classList.add("show");
  } else {
    upButton.classList.remove("show");
  }

  upButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
});

window.scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scrollY').fadeln(100);
    } else {
        $('.scrollY').fadeOut(100)
    }
})  
