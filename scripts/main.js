const canvas = document.getElementById("cav");

const ctx = canvas.getContext("2d");

let ctxPosX = window.innerWidth / 2;
let ctxPosY = window.innerHeight / 2;
let scale = 1;

draw();

function draw() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  ctx.translate(window.innerWidth / 2, window.innerHeight / 2);
  ctx.scale(scale, scale);
  ctx.translate(
    -window.innerWidth / 2 + ctxPosX,
    -window.innerHeight / 2 + ctxPosY
  );

  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 100, 100);
  requestAnimationFrame(draw);
}

let canDrag = false;
let startX = 0;
let startY = 0;

canvas.addEventListener("pointerdown", (e) => {
  canDrag = true;
  startX = e.clientX - ctxPosX;
  startY = e.clientY - ctxPosY;
});

canvas.addEventListener("pointermove", (e) => {
  if (canDrag) {
    ctxPosX = e.clientX - startX;
    ctxPosY = e.clientY - startY;
  }
});

canvas.addEventListener("pointerup", () => {
  canDrag = false;
});

canvas.addEventListener("wheel", (e) => {
  scale -= e.deltaY * 0.0005;
  scale = Math.min(scale, 15);
  scale = Math.max(scale, 0.1);
});
