const img = new Image ();
img.src = './img/background_game2.jpeg';

class Background {
    constructor (canvas, canvasContext) {
        this.x = -1;
        this.canvas = canvas;
        this.canvasContext = canvasContext;
        this.img = img;
        this.resizeImage();
    }

    draw() {
        if(this.x > 800 ) {
            this.x = -1;
        }
        this.canvasContext.drawImage(this.img, -this.x ,0, this.img.width, this.img.height);
        this.canvasContext.drawImage(this.img, this.img.width -this.x,0, this.img.width, this.img.height);
        this.x = this.x + 1;
    }
    resizeImage() {
        this.img.width = this.canvas.width;
        this.img.height = this.canvas.height;
        console.log(this.canvas.width);
    }
};

