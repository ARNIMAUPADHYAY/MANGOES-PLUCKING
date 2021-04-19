class Chain{

    constructor(bodyA, pointB){

        var options={
        bodyA:bodyA,
        pointB:pointB

        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
    }
    display(){
        
        pointA = this.body.position;
        pointB = this.pointB;
        strokeWeight(3);
        line(this.pointA.x, this.pointA.y, this.pointB.x, this.pointB.y);
    }
    
}