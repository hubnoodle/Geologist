class Sand{
    constructor(x,y,radius,options){
        var options = {     
            'restitution': 1.3,
            'friction': 5,
            'density': 1       
        } 

        this.body = Matter.Bodies.circle(x, y, radius, options)
        World.add(world,this.body);
        this.radius = radius;
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);  
        fill("green");
        stroke("white");
        strokeWeight(3);
        circle(0,0,this.radius);
        pop();
    }

}