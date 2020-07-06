var ball, ballImg, paddle, paddleImg;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballImg= loadImage ("ball.png");
  paddleImg= loadImage ("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   
  /* create the Ball Sprite and the Paddle Sprite */
  ball= createSprite (50, 200, 10, 10);
  paddle= createSprite (380, 200, 20, 80);
  
  /* assign the images to the sprites */
  ball.addImage(ballImg);  
  paddle.addImage(paddleImg); 
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX= 7;
  ball.velocityY= 4;
  
}

function draw() {
  background("lightblue");
  /* create Edge Sprites here */
  edges= createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  //bounce off left edge
  ball.bounceOff(edges[0]);
  //bounce off up edge
  ball.bounceOff(edges[2]);
  //bounce off bottom edge
  ball.bounceOff(edges[3]);
  

  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle);
  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  /*if(keyDown(UP_ARROW))
  {
    paddle.y= -2
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y= 2
  }*/
  
  paddle.y= mouseY
  
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  
  switch(rand){
      case 1: ball.velovityX= 7;
      break;
      case 2: ball.velovityX= 8;
      break;
      case 3: ball.velovityX= 9;
      break;
    default:break;
    }
  
}

