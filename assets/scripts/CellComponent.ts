import { _decorator, CCInteger, Component, Node, SpriteComponent, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CellComponent')
export class CellComponent extends Component {


    @property({ type:CCInteger,  visible: true })
    private cellId:number = 1;

    @property({type:CCInteger, visible:true})
    private nextCellId :number = 0;

    // @property({type:SpriteComponent, visible:true})
    // playerCoinSprite :SpriteComponent[] = new Array(4);


    // start() {
    // }

    // setPlayerCoin(playerId)
    // {
    //     if(playerId)
    //     this.playerCoinSprite[playerId-1].node.active = true;
       
    // }

    // clearPlayerCoin(playerId)
    // {
    //     if(playerId)
    //     this.playerCoinSprite[playerId-1].node.active = false;
       
    // }

    getNextCell()
    {
        return this.nextCellId;
    }


    update(deltaTime: number) {
        
    }
}


