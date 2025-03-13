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
        direction: cc.v2(0, 1),
        speed: 0,
        damage: {
            default: 20,
            type: cc.Integer,
            tooltip: '子弹伤害值'
        },
        boundaryX: 480,
        boundaryY: 960
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.srcHeight = cc.view.getCanvasSize().height;
        this.srcWidth = cc.view.getCanvasSize().width;
        // 添加碰撞体
        let collider = this.getComponent(cc.BoxCollider);
        if (!collider) {
            collider = this.addComponent(cc.BoxCollider);
            collider.size.width = this.node.width;
            collider.size.height = this.node.height;
        }
        
        // 设置碰撞组
        this.node.group = 'bullet';
        
        // 启用碰撞检测系统
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
    },

    start () {

    },

    setDirection(dir) {
        this.direction = dir;
    },

    setSpeed(speed) {
        this.speed = speed;
    },

    setDamage(damage) {
        this.damage = damage;
    },

    onCollisionEnter(other, self) {
        if (other.node.group === 'monster') {
            let monster = other.node.getComponent('Monster');
            if (monster) {
                monster.takeDamage(this.damage);
                cc.log('子弹击中怪物！造成伤害:', this.damage);
            }
            // 销毁子弹
            this.node.destroy();
        }
    },

    update (dt) {
        // 移动子弹
        let newPos = this.node.position.add(this.direction.mul(this.speed * dt));
        this.node.setPosition(newPos);
        
        // 如果子弹超出屏幕范围，销毁子弹
        let screenSize = cc.view.getVisibleSize();
        if (Math.abs(this.node.x) > screenSize.width/2 || Math.abs(this.node.y) > screenSize.height/2) {
            this.node.destroy();
        }
    }
});
