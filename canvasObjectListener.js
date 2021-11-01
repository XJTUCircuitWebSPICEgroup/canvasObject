import { CanvasObject } from "./canvasObject.js";

function CanvasObjectListener(){
    throw new Error("Don't call this.");
}

CanvasObjectListener.listeners = {};

CanvasObjectListener.append = function(id,func){
    this.listeners[id]=func;
}

CanvasObjectListener.exec = function(id,obj){
    this.listeners[id].apply(obj);
}

CanvasObjectListener.click = function(x,y,o,bContinue=false){
    console.log("Clicked at",x,y);
    let bHit = false;
    for(let id in this.listeners){
        let obj = CanvasObject.objects[id];
        if(x<obj.x+obj.width&&x>obj.x&&y<obj.y+obj.height&&y>obj.y){
            this.exec(id,o);
            if(!bContinue){
                return true;
            }
            bHit = true;
        }
    }
    return bHit;
}


export { CanvasObjectListener };