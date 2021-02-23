class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB:bodyB,
            length:    10,
            stiffness: 0.01
        
            }
            this.bodyB = this.bodyB
            this.chain =Matter.Constraint.create(options) 
            World.add(world, this.chain);
    }
    fly(){
        this.chain.bodyA = null
    }
    display(){
        if(this.chain.bodyA){
        var poiA = this.chain.bodyA.position
        var poiB = this.pointB
    strokeWeight(5)
    line(poiA.x,poiA.y,poiB.x,poiB.y)
        }
    }
}
