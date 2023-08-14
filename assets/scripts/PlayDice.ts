import { _decorator, Animation, Button, CCInteger, Component, EditBox, Game, Node } from 'cc';
import { LabelValueSet } from './LabelValueSet';
import { PlayerComponent } from './PlayerComponent';
import { GameStartButton } from './GameStartButton';
const { ccclass, property } = _decorator;


@ccclass('PlayDice')
export class PlayDice extends Button {
   
    @property({type:CCInteger, visible:true})
    playerId : number=0;

    @property({ type:Node, visible: true }) 
    diceAnim:Node= null;

    @property({ type:Node, visible: true }) 
    winDice:Node []= Array(6);

    @property({type:PlayerComponent, visible:true})
    players: PlayerComponent [] = new Array(4);

    @property({type:GameStartButton, visible:true})
    startSetup: GameStartButton = null;
   
    onClicked()
    {
        console.log('RollDice');
        this.node.emit('DiceRoll')   
        
    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
      }

    protected start(): void {
        this.node.on('DiceRoll', function ( event ) {
            //animate dice rolling 
            if(this.diceAnim)
                {
                  this.winDice.forEach(element => {
                        element.active=false;
                    });
                    const animation = this.diceAnim.getComponent(Animation);
                    if (animation && animation.defaultClip) {
                        animation.play();
                    let win = this.getRandomIntInclusive(1,6);
                
                   this.scheduleOnce(()=>{
                    this.winDice[win-1].active = true;
                    animation.stop();
                    this.players[this.playerId].node.emit('DiceWin', {'PlayerId':this.playerId, 'Win':win });
                    if(this.playerId < (this.startSetup.getNoOfPlayers()-1))
                    {
                        this.playerId = this.playerId+1;
            
                    }
                    else
                    {
                        this.playerId = 0;
                    }
                
                },1.2)
                 
                }
            
            
                }
          }.bind(this));
    }
}
    



