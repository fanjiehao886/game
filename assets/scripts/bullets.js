// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    srcHeight: Number,
    srcWidth: Number,

    properties: {
        speed : {
            default: 300,
            type: cc.Integer,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.srcHeight = cc.view.getCanvasSize().height;
        this.srcWidth = cc.view.getCanvasSize().width;
    },

    start () {

    },

    update (dt) {
        this.node.x += this.speed * dt;
        if(this.node.x > this.srcWidth){
            this.node.removeFromParent(true);
        }
    }
});
