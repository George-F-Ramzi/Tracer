const canvas = document.getElementById("cav");

const ctx = canvas.getContext("2d");

let offsetX = window.innerWidth / 2;
let offsetY = window.innerHeight / 2;

draw();

function draw() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.translate(offsetX, offsetY);

  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 100, 100);
  requestAnimationFrame(draw);
}

let canDrag = false;
let startX = 0;
let startY = 0;

canvas.addEventListener("pointerdown", (e) => {
  canDrag = true;
  startX = e.clientX - offsetX;
  startY = e.clientY - offsetY;
});

canvas.addEventListener("pointermove", (e) => {
  if (canDrag) {
    offsetX = e.clientX - startX;
    offsetY = e.clientY - startY;
  }
});

canvas.addEventListener("pointerup", () => {
  canDrag = false;
});
