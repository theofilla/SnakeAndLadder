import { EditBox, EditBoxComponent } from 'cc';
import { _decorator, Component, LabelComponent, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LabelValueSet')
export class LabelValueSet extends EditBox {

    @property
    max_val:number = 0;

    @property 
    min_val:number = 0;

    placeHolderDefaultString: string = ""

    
    public setPlaceHolder():void
    {
      this.placeholder = (this.placeHolderDefaultString + this.max_val);
      
    }

    public setDefaultString():void
    {
      this.string = (this.placeHolderDefaultString + this.max_val);
    }
  

}


