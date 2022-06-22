import * as PIXI from "pixi.js"
import { Assets } from "./asset"
import { BossWorm } from "./bossWorm"




export class Game {
    private _pixi: PIXI.Application
    private bossWorm: BossWorm
    private loader: PIXI.Loader


    // Properties
    
    public get pixi(): PIXI.Application { return this._pixi }

    constructor() {
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
        

        this._pixi = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight })
        document.body.appendChild(this._pixi.view)

        this.loader = new Assets(this)

    }


    public doneloading(){

        let background : PIXI.Texture = PIXI.Texture.from("city2")
        let backgroundSprite =  new PIXI.Sprite(background)
        backgroundSprite.scale.set(0.75)
        this._pixi.stage.addChild(backgroundSprite)

        let bossWormFrames: PIXI.Texture [] [] = this.createBossWormFrames()
        this.bossWorm = new BossWorm(this, bossWormFrames, 400, 600)

    }

    private createBossWormFrames (): PIXI.Texture[][]{

        let idleBossWorm: PIXI.Texture[] = []
        let attackBossWorm: PIXI.Texture[] = []
        let deadBossWorm: PIXI.Texture[] = []

        for(let i = 1; i<=4; i++){
            idleBossWorm.push(PIXI.Texture.from(`ready_${i}.png`))
        }

        for(let i = 1; i<=7; i++){
            attackBossWorm.push(PIXI.Texture.from(`attack_${i}.png`))
        }

        for(let i = 1; i<=6; i++){
            deadBossWorm.push(PIXI.Texture.from(`dead_${i}.png`))
        }

        return [idleBossWorm, attackBossWorm, deadBossWorm]
    }

}