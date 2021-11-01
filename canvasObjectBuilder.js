import { CanvasObject } from "./canvasObject.js";

function CanvasObjectBuilder(){
    this.initialize.apply(this,arguments);
}

CanvasObjectBuilder.prototype.initialize = function(){
    this.models = {};
}

CanvasObjectBuilder.prototype.addModel = function(modelName,jsonData){
    this.models[modelName]=jsonData;
}

CanvasObjectBuilder.prototype.build = function(modelName){
    if(!modelName in this.models){
        return null;
    }
    return Object.assign(new CanvasObject(),this.models[modelName]);
}

export { CanvasObjectBuilder };