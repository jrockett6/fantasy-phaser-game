export class Sprite extends Phaser.GameObjects.Sprite {
    /**
     * 
     */
    constructor(scene, x, y, texture, frame) {
        frame = frame || 0;
        super(scene, x, y, texture, frame)
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        this.setScale(2);
        this.setOrigin(0, 0);
    }
}