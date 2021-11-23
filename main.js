const c = document.getElementById("Game_Surface");
const ctx = c.getContext("2d");
let w = c.width = window.innerWidth;
let h = c.height = window.innerHeight;

let m = new Matrix();
m.pushTetrimino();

const gs = Math.floor(h / 30);

let f = 0;
function drawLoop() {
    f++;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, 0, w, h);

    m.update();
    m.draw(w / 2 - (m.columns * gs) / 2, h / 2 - ((m.rows - 4) * gs) / 2, gs, f, ctx);

    setTimeout(drawLoop, 1000 / 60);
    //requestAnimationFrame(drawLoop);
}
drawLoop();
