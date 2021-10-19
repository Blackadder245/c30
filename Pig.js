class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.vis=255
  }
display(){
 console.log(this.body.speed)
  if(this.body.speed>2.5){
  World.remove(world,this.body)
  push()
  tint(255,this.vis)
  this.vis=this.vis-1
  image(this.image,this.body.position.x,this.body.position.y,50,50)
pop()
  }
  else{
    super.display()
  }
}
};