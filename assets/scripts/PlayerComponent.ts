import { _decorator, CCInteger, Component, Node } from 'cc';
import { CellManagerComponent } from './CellManagerComponent';
const { ccclass, property } = _decorator;

@ccclass('PlayerComponent')
export class PlayerComponent extends Component {

    @property({type:CCInteger, visible:true})
    playerId : number = 1;

    @property({type:CellManagerComponent, visible:true})
    cellManager: CellManagerComponent= null;

    @property({type:Node, visible:true})
    gameOver: Node= null;

    private currentCell: number = 1;
    private nextCell: number = 2;


    //set up event listener to get dice roll result, playerId 
    //properties, current cell, nextCell, current PlayerId, 
    //moveCoin - on event roll, if playerId matches, move coin from current cell to nextCell, if nextCell's nextCell is not equal to +1, then move down or up (play audio as well) and set the current cell accordingly. 
    //currenlty no player turns implemented. Later on, have to check if current player was prev player and not allow (in dice roll script)
    start() {

        
    this.node.on("DiceWin",
        (event: Event, detail?: any) => this.playMove(event)); 
      
    
    }
    
    playMove (eventData)
    {
     //  if(this.playerId == eventData.playerId )
       {
        
        this.nextCell = this.currentCell+ eventData.Win;
        if(this.nextCell >= 100 || this.nextCell==-1)
            this.nextCell = 100;
         //move to position on cell, get position from cell manager.
        this.node.setPosition(this.cellManager.getCellPosition(this.nextCell));
        this.currentCell = this.nextCell; 
        if(this.cellManager.getNextCell(this.currentCell)!=this.currentCell+1) //drop or climb
        {
            //play audio 
            this.nextCell = this.cellManager.getNextCell(this.currentCell)
            this.node.setPosition(this.cellManager.getCellPosition(this.nextCell));

        }
        if(this.nextCell == 100)
        {
            this.gameOver.active = true;
            //add code to display the proper player icon
        }
        }
    }


    update(deltaTime: number) {
        
    }
}


