import { _decorator, Button, Component, director, EditBox, Node } from 'cc';
import { LabelValueSet } from './LabelValueSet';
const { ccclass, property } = _decorator;

@ccclass('RestartButton')
export class RestartButton extends Button {
 
    onClicked()
    {
        director.loadScene('game.scene')
        
    }

  
    }
    



