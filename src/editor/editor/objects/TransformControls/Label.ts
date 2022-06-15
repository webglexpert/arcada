import { Container, InteractionEvent, Point, Sprite, Text, TextStyle, Texture } from "pixi.js";
import { METER } from "../../constants";

export class Label extends Container {
    text:Sprite;
    textStyle:TextStyle = new TextStyle({fontFamily : 'Arial', fontSize: 16, fill : 0x000000, align : 'center'});
    textBkg :Sprite = new Sprite(Texture.WHITE); 
    constructor(sizeInPixels?: number) {
        super();
        if (!sizeInPixels) {
            sizeInPixels = 0;
        }
        this.update(sizeInPixels);
        this.pivot.set(this.width / 2, this.height / 2);
        this.zIndex = 1001;

        this.on("toggleLabel", this.toggleLabel);
        this.toggleLabel({});
    }

    private toggleLabel(ev:any) {
        console.log("wow~!", ev)
    }
    public update(sizeInPixels:number) {
        this.removeChildren();

        this.text = new Text(this.toMeter(sizeInPixels), this.textStyle);
        this.textBkg.width = this.text.width;
        this.textBkg.height = this.text.height;
        this.addChild(this.textBkg);
        this.addChild(this.text);

    }

    public updatePos(pos:Point, sizeInPixels:number) {
        this.position.set(pos.x, pos.y)
        this.update(sizeInPixels)
    }

    private toMeter(size:number) {
        size = Math.abs(size) / METER;

        // truncating to the 2nd decimal
        const sizeLabel = (Math.round(size * 100) / 100).toFixed(2);

        return sizeLabel + "m"
    }    
}
