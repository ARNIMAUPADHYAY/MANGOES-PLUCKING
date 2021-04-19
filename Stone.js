class Stone{

    constructor(x, y, r){

        var options={

            restitution:1,
            friction:0.1,
            isStatic:false,
            density:1
        }
        this.r = r;
        this.stone = Bodies.circle(200,50,this.r,options);
        this.image = loadImage("Plucking mangoes/stone.png");
        World.add(world, this.stone);
       }
    display(){
        
        
        ellipseMode(RADIUS);
        ellipse(this.stone.position.x, this.stone.position.y, this.r);

        imageMode(CENTER);
        image(this.image, 200, 300, this.x, this.y);
    }

}