class Stone{
    constructor(x,y,height,width,angle){
        var options = {     
            'restitution': .5,
            'friction': 1.0,
            'density': 4.0,
            'mass': 4.0   
        } 

        this.body = Bodies.rectangle(x,y,20,height,width,options);
        this.height = height;
        this.width = width;
        Matter.Body.setAngle(this.body, angle);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);  
        fill("blue");
        stroke("white");
        strokeWeight(3);
        rect(0,0,this.width,this.height);
        pop();
    }

}