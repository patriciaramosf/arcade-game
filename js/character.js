class Character {
    constructor(){
      this.x = 220;
      this.y = 520;
      this.width = 50;
      this.height = 80;
      this.img = './img/pikachu.gif';
    }
    
    drawCharacter(){
      const characterImg = new Image();
      characterImg.src = this.img;
      canvas.drawImage(characterImg, this.x, this.y, this.width, this.height);
    }

    moveCharacter(keyCode){
      console.log('x', this.x);
      console.log('y', this.y);
      canvas.clearRect(this.x, this.y, this.width, this.height);
      switch(keyCode){
        case 37:
        //Making sure car doesn't go off the road
        if(this.x > 20){
          this.x -= 10;
        }
          break;
        case 39:
        //Making sure car doesn't go off the road
        if (this.x < 430 ){
          this.x += 10;
        }
          break;
      }
    }
  }