const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const fileinput = document.getElementById("file--input");

const srcImage = new Image();

let imgData = null;
let originalPixels = null;
let currentPixels = null;
let loaded = false;

let cameraZoom = 1;
const MAX_ZOOM = 10;
const MIN_ZOOM = 0.2;
const zoomSensitivity = 0.002;

let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;

let centerXOBJ;
let centerYOBJ;

fileinput.onchange = function (e) {
  loaded = false;
  if (e.target.files && e.target.files.item(0)) {
    srcImage.src = URL.createObjectURL(e.target.files[0]);
  }
};

srcImage.onload = function () {
  centerXOBJ = 0 - srcImage.width / 2;
  centerYOBJ = 0 - srcImage.height / 2;
  loaded = true;
};

draw();

function draw() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.translate(centerX, centerY);
  ctx.scale(cameraZoom, cameraZoom);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  if (loaded) {
    ctx.drawImage(
      srcImage,
      centerXOBJ,
      centerYOBJ,
      srcImage.width,
      srcImage.height
    );
    imgData = ctx.getImageData(0, 0, srcImage.width, srcImage.height);
    originalPixels = imgData.data.slice();
  }

  requestAnimationFrame(draw);
}

canvas.addEventListener("wheel", (e) => {
  cameraZoom -= e.deltaY * zoomSensitivity;
  cameraZoom = Math.min(cameraZoom, MAX_ZOOM);
  cameraZoom = Math.max(cameraZoom, MIN_ZOOM);
});
