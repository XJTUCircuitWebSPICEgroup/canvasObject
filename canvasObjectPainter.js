import { CanvasObject } from "./canvasObject.js";
import { CanvasObjectListener } from "./canvasObjectListener.js";


function CanvasObjectPainter(){

}

CanvasObjectPainter.init = function(w){
    this.w = w;
}

CanvasObjectPainter.paint = function(ctx){
    for(let i in CanvasObject.objects){
        let o = CanvasObject.objects[i];
        ctx.fillRect(this.w*o.x,this.w*o.y,this.w*o.width,this.w*o.height);
    }
}


export { CanvasObjectPainter };