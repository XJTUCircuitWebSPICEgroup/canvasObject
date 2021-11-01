import { CanvasObject } from "./canvasObject.js";
import { CanvasObjectBuilder } from "./canvasObjectBuilder.js";
import { CanvasObjectListener } from "./canvasObjectListener.js";
import { VOTAGE_SOURCE } from "./models/votage_source.js";

let canvasObjectBuilder = new CanvasObjectBuilder();

canvasObjectBuilder.addModel("V",VOTAGE_SOURCE);



function testExample(){
    let vin = canvasObjectBuilder.build("V");
    Object.assign(vin,{x:10,y:10,width:10,height:10});
    CanvasObjectListener.append(vin.id,function(){
        console.log(this);
    });

    console.log(CanvasObjectListener.click(0,0,"Test1"));
    console.log(CanvasObjectListener.click(15,15,"Test2"));
}

export { testExample };