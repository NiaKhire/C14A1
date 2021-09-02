
var ball ; 







function setup() {
  createCanvas(400, 400);
  ball = {
    x : 200,
    y : 200,
    r : 10,
    vx : 3,
    vy : 2
  }
}

function draw() {
  background(220);

  circle(ball.x,ball.y,ball.r);
  ball.x = ball.x + ball.vx ;
  ball.y = ball.y + ball.vy ;
}