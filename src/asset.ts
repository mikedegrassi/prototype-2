import * as PIXI from 'pixi.js'
import { Game } from './game'
import city2 from './images/city2.png'

type AssetFile = { name: string, url: string }

export class Assets extends PIXI.Loader {

    // private game: Game
    private assets: AssetFile[] = []

    constructor(game: Game) {
        super()
        
        this.assets = [

            {name: 'city2', url: city2},
            {name: "bossWorm", url: "bossWorm.json"},
            
        ]

        this.assets.forEach(asset => {
            this.add(asset.name, asset.url)
        })

        this.onError.add((arg) => { console.error(arg) })
        this.onProgress.add((loader) => this.showProgress(loader))
        this.load(() => game.doneloading())
    }

    private showProgress(loader) {
        console.log(`Loading ${loader.progress}%`)
    }
}