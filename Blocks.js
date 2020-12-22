class block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0,
            'density':1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       // this.image = loadImage("sprite/polygon.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        //imageMode(CENTER);
       // image(this.image, 0,0, this.width, this.height);
        pop();
      }
    
}