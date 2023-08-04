import { _decorator, Button, Component, EditBox, Node } from 'cc';
import { LabelValueSet } from './LabelValueSet';
const { ccclass, property } = _decorator;

@ccclass('GameStartButton')
export class GameStartButton extends Button {
    @property({ type:LabelValueSet, visible: true })
     noPlayers:LabelValueSet|null = null ;

     @property({ type:Node, visible: true })
    disableNode : Node = null;

    @property({ type:Node, visible: true })
    playerTiles: Node [] = Array(4);

    nPlayers:number = 2;


    
    onClicked()
    {
        if(this.checkLabelValue(this.noPlayers))
        {
            console.log('Game started');
            this.node.emit('startGame');
        }
        else
        {
            console.log('Wrong input values');
        }
        
    }

    protected start(): void {
        this.node.on('startGame', function ( event ) {
            console.log("Enabling game")
            this.disableNode.active = false;
            for(let i = 0; i<this.nPlayers; i++)
            {
                this.playerTiles[i].active = true;
                this.playerTiles[i].opacity = 50;
            }
            this.playerTiles[0].opacity = 255;
           
          }.bind(this));
    }
   
    private checkLabelValue(ebox:LabelValueSet):boolean
    {
        if(ebox.string.trim() == "")
        return false;
        if(parseInt(ebox.string)<= ebox.max_val && parseInt(ebox.string) >= ebox.min_val  )
        {
            this.nPlayers = parseInt(ebox.string);
            return true;
            
        }
        else
        
            ebox.setDefaultString();
            return false;
        }

    }
    



