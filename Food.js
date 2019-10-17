function Food(){

  this.chooseLocation = function(x, y){
    this.x = Math.floor(Math.random() * 20) * 20;
    this.y = Math.floor(Math.random() * 20) * 20;
    if(this.x === x && this.y === y){
      this.chooseLocation(x, y);
    }
  }

  this.checkPos = function(){
    console.log(this.x, this.y);
  }

  this.update = function(){
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, 20, 20);
    ctx.strokeRect(this.x, this.y, 20, 20);
  }

  this.checkCollision = function(x, y){
    if(this.x === x && this.y === y){
      this.chooseLocation(x, y);
      return true;
    }
    else{
      return false;
    }
  }

}
