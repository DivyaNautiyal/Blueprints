class Box {

    constructor(  x, y, w, h, c){

        this.x= x;
        this.y= y;
        this.width= w;
        this.height=h;
        this.color= c;
        this.body = Bodies.rectangle(x, y, w, h)
        World.add( world, this.body)

    }




    show () {

        var p =this.body.position
        var a= this.body.angle
        push ()
        translate (p.x, p.y)
        rotate (a)
        rectMode( CENTER)
        fill (this.color)
        rect ( 0,0,this.width, this.height)
        pop ()

    }




}