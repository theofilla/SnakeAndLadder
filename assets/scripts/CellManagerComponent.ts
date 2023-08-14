import { _decorator, CCInteger, Component, Node, SpriteComponent, SpriteFrame } from 'cc';
import { CellComponent } from './CellComponent';
const { ccclass, property } = _decorator;

@ccclass('CellManagerComponent')
export class CellManagerComponent extends Component {


   @property({type:CellComponent, visible:true})
   cells:CellComponent[]= new Array(100);

    getCellPosition(cellId)
    {
       return this.cells[cellId-1].node.position;
    }

    getNextCell(cellId)
    {
        return this.cells[cellId-1].getNextCell();
    }
    
   update(deltaTime: number) {
        
    }
}


