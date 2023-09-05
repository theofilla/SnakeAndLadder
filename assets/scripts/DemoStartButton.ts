import { _decorator, Button, Component, director, EditBox, Node } from 'cc';
import { LabelValueSet } from './LabelValueSet';
const { ccclass, property } = _decorator;

@ccclass('DemoStartButton')
export class DemoStartButton extends Button {
 
    
    @property({ type:Node, visible: true })
    DemoCheck : Node = null;
    onClicked()
    {
        this.DemoCheck.active = true;
        
    }

  
    }
    



