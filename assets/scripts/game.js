// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html


cc.Class({
    extends: cc.Component,

    properties: {
        tiledMap: cc.TiledMap
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let p = cc.director.getPhysicsManager();
        p.enabled = true;
        p.debugDrawFlags = false;
        p.gravity = cc.v2(0,0);

        document.addEventListener('WeixinJSBridgeReady', function () {
            cc.resources.load('audios/rock', cc.AudioClip, (err, audioClip) => {
                var audioSource = this.addComponent(cc.AudioSource);
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
