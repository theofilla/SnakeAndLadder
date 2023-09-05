import { _decorator, Button, Component, EditBox, Node } from 'cc';
import { LabelValueSet } from './LabelValueSet';
import { PlayerComponent } from './PlayerComponent';
const { ccclass, property } = _decorator;

@ccclass('DemoCheck')
export class DemoCheck extends Button {
    @property({ type:LabelValueSet, visible: true })
     currentCell:LabelValueSet|null = null ;

    @property({ type:LabelValueSet, visible: true })
    diceWin: LabelValueSet|null = null

    
    @property({ type:LabelValueSet, visible: true })
    playerId: LabelValueSet|null = null

    @property({type:PlayerComponent, visible:true})
    players: PlayerComponent [] = new Array(4);

    private winVal = 0;
    private demoCell = 0;
    private player = 0;

    
    onClicked()
    {
        if(this.checkLabelValue(this.currentCell,1) && this.checkLabelValue(this.diceWin,2) &&  this.checkLabelValue(this.playerId,3))
        {
            console.log('DemoPlay');
            this.node.emit('demo');
        }
        else
        {
            console.log('Wrong input values');
        }
        
    }

    protected start(): void {
        this.node.on('demo', function ( event ) {
          
            this.forcePlay();
           
          }.bind(this));
    }
   
    private checkLabelValue(ebox:LabelValueSet,labelVal: number):boolean
    {
        if(ebox.string.trim() == "")
        return false;
        if(parseInt(ebox.string)<= ebox.max_val && parseInt(ebox.string) >= ebox.min_val  )
        {
           if(labelVal == 1)// demo cell
           this.demoCell =parseInt(ebox.string);
           else if(labelVal ==2)
           this.winVal = parseInt(ebox.string);
           else if(labelVal ==3)
           this.player = parseInt(ebox.string);
            return true;
            
        }
        else
        
            ebox.setDefaultString();
            return false;
        }

        forcePlay()
        { 
    
            this.players[this.player].node.emit('ForceDiceWin', {'cellNum':this.demoCell, 'PlayerId':this.player, 'Win':this.winVal });
            this.node.parent.active = false;
        }
       


    }
    



