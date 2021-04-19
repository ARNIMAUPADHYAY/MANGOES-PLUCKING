class Tree{


    constructor(x,y,width,height){

        var options={

            isStatic:true,
            friction:0.1,
            density:1
        }
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x,y,width,height);
        this.image = loadImage("Plucking mangoes/tree.png");
    }
    display(){

        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        imageMode(CENTER);
        image(this.image, 200, 300, this.x, this.y);    }

}