const gif = document.querySelector(".cursor-gif");

document.addEventListener("mousemove", (e) => {

  gif.style.left = e.clientX + "px";

  gif.style.top = e.clientY + "px";

});