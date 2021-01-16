class Hammer{
    constructor(x,y,width,height){
        var options = {     
            'restitution': .5,
            'friction': 1,
            'density': 2    
        } 

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);  
        fill("purple");
        stroke("white");
        strokeWeight(3);
        rect(0,0,this.width,this.height);
        pop();
    }

}