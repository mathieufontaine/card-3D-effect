// Moveming elements
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// items
const title = document.querySelector(".title");
const shoe = document.querySelector(".shoe img");
const purshase = document.querySelector(".purshase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

// Moving Animation
container.addEventListener("mousemove", e => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
  card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", e => {
  card.style.transition = "none";
  // popout
  title.style.transform = "translateZ(100px)";
  shoe.style.transform = "translateZ(200px) rotateZ(40deg) scale(1.3)";
  description.style.transform = "translateZ(50px)";
  sizes.style.transform = "translateZ(50px)";
  purshase.style.transform = "translateZ(50px)";
});

// Animate Out
container.addEventListener("mouseleave", e => {
  card.style.transition = "all .5s ease";
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  // popout
  title.style.transform = "translateZ(0)";
  shoe.style.transform = "translateZ(0) rotateZ(0) scale(1)";
  description.style.transform = "translateZ(0)";
  sizes.style.transform = "translateZ(0)";
  purshase.style.transform = "translateZ(0)";
});
