'use strict';

// https://developer.mozilla.org/es/docs/Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Terminando.
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

class Game {

  constructor(canvas) {
    var canvas = canvas;
    var ctx = canvas.getContext('2d');
    this.ballRadius = 10;
    this.x = canvas.width / 2;
    this.y = canvas.height - 30;
    this.dx = 2;
    this.dy = -2;
    this.paddleHeight = 10;
    this.paddleWidth = 75;
    this.paddleX = (canvas.width - this.paddleWidth) / 2;
    this.rightPressed = false;
    this.leftPressed = false;
    this.brickRowCount = 5;
    this.brickColumnCount = 3;
    this.brickWidth = 75;
    this.brickHeight = 20;
    this.brickPadding = 10;
    this.brickOffsetTop = 30;
    this.brickOffsetLeft = 30;
    this.score = 0;
    this.lives = 3;

    this.bricks = [];

    for (var c = 0; c < this.brickColumnCount; c++) {
      this.bricks[c] = [];
      for (var r = 0; r < this.brickRowCount; r++) {
        this.bricks[c][r] = {
          x: 0,
          y: 0,
          status: 1,
        };
      }
    }

    document.addEventListener('keydown', this.keyDownHandler, false);
    document.addEventListener('keyup', this.keyUpHandler, false);
    document.addEventListener('mousemove', this.mouseMoveHandler, false);
  }

  keyDownHandler(e) {
    if (e.keyCode == 39) {
      this.rightPressed = true;
    } else if (e.keyCode == 37) {
      this.leftPressed = true;
    }
  }

  keyUpHandler(e) {
    if (e.keyCode == 39) {
      this.rightPressed = false;
    } else if (e.keyCode == 37) {
      this.leftPressed = false;
    }
  }

  mouseMoveHandler(e) {
    var relativeX = e.clientX - document.getElementById('myCanvas').offsetLeft;
    if (relativeX > 0 && relativeX < document.getElementById('myCanvas').width) {
      this.paddleX = relativeX - this.paddleWidth / 2;
    }
  }

  collisionDetection(canvas, ctx) {
    for (var c = 0; c < this.brickColumnCount; c++) {
      for (var r = 0; r < this.brickRowCount; r++) {
        var b = this.bricks[c][r];
        if (b.status == 1) {
          if (this.x > b.x && this.x < b.x + this.brickWidth && this.y > b.y &&
            this.y < b.y + this.brickHeight) {
            this.dy = -this.dy;
            b.status = 0;
            this.score++;
            if (this.score == this.brickRowCount * this.brickColumnCount) {
              alert('YOU WIN, CONGRATS!');
              document.location.reload();
            }
          }
        }
      }
    }
  }

  drawBall(canvas, ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
  }

  drawPaddle(canvas, ctx) {
    ctx.beginPath();
    ctx.rect(this.paddleX, canvas.height -
      this.paddleHeight, this.paddleWidth, this.paddleHeight);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
  }

  drawBricks(canvas, ctx) {
    for (var c = 0; c < this.brickColumnCount; c++) {
      for (var r = 0; r < this.brickRowCount; r++) {
        if (this.bricks[c][r].status == 1) {
          var brickX = (r * (this.brickWidth + this.brickPadding)) + this.brickOffsetLeft;
          var brickY = (c * (this.brickHeight + this.brickPadding)) + this.brickOffsetTop;
          this.bricks[c][r].x = brickX;
          this.bricks[c][r].y = brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
          ctx.fillStyle = '#0095DD';
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }

  drawScore(canvas, ctx) {
    ctx.font = '16px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('Score: ' + this.score, 8, 20);
  }

  drawLives(canvas, ctx) {
    ctx.font = '16px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('Lives: ' + this.lives, canvas.width - 65, 20);
  }

  draw(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawBricks(canvas, ctx);
    this.drawBall(canvas, ctx);
    this.drawPaddle(canvas, ctx);
    this.drawScore(canvas, ctx);
    this.drawLives(canvas, ctx);
    this.collisionDetection();

    if (this.x + this.dx > canvas.width - this.ballRadius ||
      this.x + this.dx < this.ballRadius) {
      this.dx = -this.dx;
    }

    if (this.y + this.dy < this.ballRadius) {
      this.dy = -this.dy;
    } else if (this.y + this.dy > canvas.height - this.ballRadius) {
      if (this.x > this.paddleX && this.x < this.paddleX + this.paddleWidth) {
        this.dy = -this.dy;
      } else {
        this.lives--;
        if (!this.lives) {
          alert('GAME OVER');
          document.location.reload();
        } else {
          this.x = canvas.width / 2;
          this.y = canvas.height - 30;
          this.dx = 3;
          this.dy = -3;
          this.paddleX = (canvas.width - this.paddleWidth) / 2;
        }
      }
    }

    if (this.rightPressed && this.paddleX < canvas.width - this.paddleWidth) {
      this.paddleX += 7;
    } else if (this.leftPressed && this.paddleX > 0) {
      this.paddleX -= 7;
    }

    this.x += this.dx;
    this.y += this.dy;
    requestAnimationFrame(this.draw);

  }
}

var game = new Game(document.getElementById('myCanvas'));
