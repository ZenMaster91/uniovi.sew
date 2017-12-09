'use strict';

class Game {

  constructor() {
    this.canvas = document.getElementById('myCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.ballRadius = 10;
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height - 30;
    this.dx = 2;
    this.dy = -2;
    this.paddleHeight = 10;
    this.paddleWidth = 75;
    this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
    this.rightPressed = false;
    this.leftPressed = false;
    this.brickRowCount = 6;
    this.brickColumnCount = 5;
    this.brickWidth = 80;
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

    document.addEventListener('keydown', function (event) {
      console.log(event);
      if (event.keyCode == 39) {
        console.log('derecha');
        game.rightPressed = true;
      } else if (event.keyCode == 37) {
        game.leftPressed = true;
        console.log('izquierda');
      }
    }, false);

    document.addEventListener('keyup', function (event) {
      if (event.keyCode == 39) {
        game.rightPressed = false;
      } else if (event.keyCode == 37) {
        game.leftPressed = false;
      }
    }, false);

    document.addEventListener('mousemove', function (event) {
      var relativeX = event.clientX - document.getElementById('myCanvas').offsetLeft;
      if (relativeX > 0 && relativeX < document.getElementById('myCanvas').width) {
        game.paddleX = relativeX - game.paddleWidth / 2;
      }
    }, false);
  }

  collisionDetection() {
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
              alert('ENHORABUENA, HA GANADO!');
              document.location.reload();
            }
          }
        }
      }
    }
  }

  drawBall() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
    this.ctx.fillStyle = '#ffcc00';
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawPaddle() {
    this.ctx.beginPath();
    this.ctx.rect(this.paddleX, this.canvas.height -
      this.paddleHeight, this.paddleWidth, this.paddleHeight);
    this.ctx.fillStyle = '#ffcc00';
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawBricks() {
    for (var c = 0; c < this.brickColumnCount; c++) {
      for (var r = 0; r < this.brickRowCount; r++) {
        if (this.bricks[c][r].status == 1) {
          var brickX = (r * (this.brickWidth + this.brickPadding)) + this.brickOffsetLeft;
          var brickY = (c * (this.brickHeight + this.brickPadding)) + this.brickOffsetTop;
          this.bricks[c][r].x = brickX;
          this.bricks[c][r].y = brickY;
          this.ctx.beginPath();
          this.ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
          this.ctx.fillStyle = '#ffcc00';
          this.ctx.fill();
          this.ctx.closePath();
        }
      }
    }
  }

  drawScore() {
    this.ctx.font = '16px SF Display';
    this.ctx.fillStyle = '#333';
    this.ctx.fillText('Puntos: ' + this.score, 8, 20);
  }

  drawLives() {
    this.ctx.font = '16px SF Display';
    this.ctx.fillStyle = '#333';
    this.ctx.fillText('Vidas: ' + this.lives, this.canvas.width - 65, 20);
  }

  draw() {
    //console.log(this.ctx);
    //console.log(this.canvas);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBricks();
    this.drawBall();
    this.drawPaddle();
    this.drawScore();
    this.drawLives();
    this.collisionDetection();

    if (this.x + this.dx > this.canvas.width - this.ballRadius ||
      this.x + this.dx < this.ballRadius) {
      this.dx = -this.dx;
    }

    if (this.y + this.dy < this.ballRadius) {
      this.dy = -this.dy;
    } else if (this.y + this.dy > this.canvas.height - this.ballRadius) {
      if (this.x > this.paddleX && this.x < this.paddleX + this.paddleWidth) {
        this.dy = -this.dy;
      } else {
        this.lives--;
        if (!this.lives) {
          alert('GAME OVER');
          document.location.reload();
        } else {
          this.x = this.canvas.width / 2;
          this.y = this.canvas.height - 30;
          this.dx = 3;
          this.dy = -3;
          this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
        }
      }
    }

    //console.log('repainting right: ' + this.rightPressed);
    if (this.rightPressed && (this.paddleX < this.canvas.width - this.paddleWidth)) {
      this.paddleX += 7;
    } else if (this.leftPressed && (this.paddleX > 0)) {
      this.paddleX -= 7;
    }

    this.x += this.dx;
    this.y += this.dy;
    requestAnimationFrame(this.draw.bind(this));
  }
}

var game = new Game();
game.draw();
