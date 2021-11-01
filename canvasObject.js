function CanvasObject(){
    this.initialize.apply(this,arguments);
}

CanvasObject.prototype.initialize = function(container=CanvasObject.objects){
    this.id = "obj"+new Date().getTime()+"-"+Math.floor(Math.random()*1000);
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    container[this.id]=this;
}

CanvasObject.objects = {};

CanvasObject.getById = function(id){
    return this.objects[id];
}

export { CanvasObject };