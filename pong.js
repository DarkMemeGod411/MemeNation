const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballXDir = 2;
let ballYDir = 2;
const paddleWidth = 10;
const paddleHeight = 60;
let paddle1Y = (canvas.height - paddleHeight) / 2;
let paddle2Y = (canvas.height - paddleHeight) / 2;

function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.fillRect(10, paddle1Y, paddleWidth, paddleHeight);
    ctx.fillRect(canvas.width - 20, paddle2Y, paddleWidth, paddleHeight);
    ctx.beginPath();
    ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
    ctx.fill();

    ballX += ballXDir;
    ballY += ballYDir;

    if (ballY < 0 || ballY > canvas.height) {
        ballYDir = -ballYDir;
    }

    if (ballX < 20 && ballY > paddle1Y && ballY < paddle1Y + paddleHeight) {
        ballXDir = -ballXDir;
    } else if (ballX > canvas.width - 30 && ballY > paddle2Y && ballY < paddle2Y + paddleHeight) {
        ballXDir = -ballXDir;
    } else if (ballX < 0 || ballX > canvas.width) {
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
    }

    requestAnimationFrame(draw);
}

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "w":
            paddle1Y = Math.max(paddle1Y - 10, 0);
            break;
        case "s":
            paddle1Y = Math.min(paddle1Y + 10, canvas.height - paddleHeight);
            break;
        case "ArrowUp":
            paddle2Y = Math.max(paddle2Y - 10, 0);
            break;
        case "ArrowDown":
            paddle2Y = Math.min(paddle2Y + 10, canvas.height - paddleHeight);
            break;
    }
});

draw();
