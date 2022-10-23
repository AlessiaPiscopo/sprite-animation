const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523; ,
let frameX = 0;
let frameY = 0;

const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  ctx.drawImage(
    playerImage,
    frameX * spriteWidth,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );

  requestAnimationFrame(animate);
};

animate();

// ---- NOTES

// ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
// - image: image to animate
// - sx, sy, sw, sh: area to cut out from source image
// - dx, dy, dw, dh: destination to place cutout on canvas
