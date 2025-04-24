// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html


cc.Class({
    extends: cc.Component,

    properties: {
        tiledMap: cc.TiledMap,
        goldLabel: {
            default: null,
            type: cc.Label,
            tooltip: '金币数量显示文本'
        }
    },

    statics: {
        instance: null,
        addGold(amount) {
            if (this.instance) {
                this.instance._goldCount += amount;
                if (this.instance.goldLabel) {
                    this.instance.goldLabel.string = this.instance._goldCount;
                }
                // 同步更新GameManager的金币数
                let gameManager = cc.find('Canvas').getComponent('GameManager');
                if (gameManager) {
                    gameManager.updateGold(this.instance._goldCount);
                }
            }
        }
    },

    _goldCount: 0,

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 初始化静态实例
        this.constructor.instance = this;
        
        // 初始化物理系统
        let p = cc.director.getPhysicsManager();
        p.enabled = true;
        p.debugDrawFlags = false;
        p.gravity = cc.v2(0,0);
        
        // 初始化金币显示
        this._goldCount = 0;
        if (this.goldLabel) {
            this.goldLabel.string = this._goldCount;
        }

        // 初始化微信音频
        document.addEventListener('WeixinJSBridgeReady', () => {
            cc.resources.load('audios/rock', cc.AudioClip, (err, audioClip) => {
                if (err) {
                    cc.error('加载音频失败:', err);
                    return;
                }
                let audioSource = this.addComponent(cc.AudioSource);
                audioSource.clip = audioClip;
                audioSource.play();
            });
        });
    },

    start () {
        let tiledSize = this.tiledMap.getTileSize();
        let layer = this.tiledMap.getLayer('fences');
        let layerSize = layer.getLayerSize();

        for (let i = 0; i < layerSize.width; i++) {
            for(let j=0; j<layerSize.height; j++){
                let tiled = layer.getTiledTileAt(i, j, true);
                if(tiled.gid != 0){
                    tiled.node.group = 'wall';
                    let body = tiled.node.addComponent(cc.RigidBody);
                    body.type = cc.RigidBodyType.Static;
                    let collider = tiled.node.addComponent(cc.PhysicsBoxCollider);
                    collider.offset = cc.v2(tiledSize.width/2, tiledSize.height/2);
                    collider.size = tiledSize;
                    collider.apply();
                }
            }
        }

    },

    // update (dt) {},
});
