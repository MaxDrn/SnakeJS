w = 20;
h = 20;
xvel = 0;
yvel = 0;
speed = 20;
direction = "null";
let food;
let snake = [];
total = 1;

window.onload = function(){
  snake.push({x : 20, y : 20});
  console.log(snake[0].x, snake[0].y);
  canv = document.getElementById("canvas");
  canv.width = 400;
  canv.height = 400;
  food = new Food();
  ctx = canv.getContext("2d");

  document.addEventListener("keydown", controls = function(evt){
    switch(evt.keyCode){
      case 65:
        direction = "left";
        break;
      case 87:
        direction = "up";
        break;
      case 68:
        direction = "right";
        break;
      case 83:
        direction = "down";
        break;
    }
  });


  // place food first timeout

  food.chooseLocation();

  setInterval(game, 1000/10);
  setInterval(food.checkPos(), 500);
}


function game(){

  ctx.fillStyle = "grey";
  ctx.fillRect(0, 0, canv.width, canv.height);

  //food update

  food.update();

  ctx.fillStyle = "lime";


  //shift tail

  snakeX = snake[0].x;
  snakeY = snake[0].y;
  snake.pop();

  let newHead = {
    x : snakeX,
    y : snakeY
  }

  if(direction === "left"){
    newHead.x -= 20;
  }
  else if(direction === "right"){
    newHead.x += 20;
  }
  else if(direction === "up"){
    newHead.y -= 20;
  }
  else if(direction === "down"){
    newHead.y += 20;
  }

  snake.unshift(newHead);




  // draw snake

  for(i = 0; i < snake.length; i++){
    ctx.strokeRect(snake[i].x, snake[i].y, 20, 20);
    ctx.fillRect(snake[i].x, snake[i].y, 20, 20);
  }

  //check Snake Collision

  for(i = 0; i < snake.length; i++){
    if(snake[0].x === snake[i].x && snake[0].y === snake[i].y && snake[0] !== snake[i]){
      direction = null;
      snake = [];
      snake.push({x : 20, y : 20});
    }
  }

  if(food.checkCollision(snake[0].x, snake[0].y)){
    total++;
    snake.push({x : snake[0].x, y : snake[0].y});
  }

  console.log(total);

  if(snake[0].x < 0 || snake[0].x > 400 || snake[0].y < 0 || snake[0].y > 400){
    snake[0].x = 20;
    snake[0].y = 20;
    direction = null;
  }
}

function devChecks(){
  console.log(snake[0].x, snake[0].y);
}
