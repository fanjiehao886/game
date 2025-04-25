cc.Class({
    extends: cc.Component,

    properties: {
        damage: {
            default: 20,
            type: cc.Integer,
            tooltip: '爆炸伤害'
        },
        duration: {
            default: 0.5,
            type: cc.Float,
            tooltip: '爆炸持续时间'
        }
    },

    onLoad() {
        // 添加碰撞组件
        let collider = this.getComponent(cc.BoxCollider);
        if (!collider) {
            collider = this.addComponent(cc.BoxCollider);
            collider.size = cc.size(40, 40); // 设置爆炸范围
        }

        // 设置碰撞分组
        this.node.group = 'explosion';

        // 在duration时间后自动销毁爆炸效果
        this.scheduleOnce(() => {
            if (this.node && this.node.isValid) {
                cc.log('爆炸效果到达持续时间，自动销毁');
                this.node.destroy();
            }
        }, this.duration);
    },

    onCollisionEnter(other, self) {
        cc.log('爆炸效果碰撞 - 碰撞对象:', other.node.group);
        
        if (other.node.group === 'player') {
            // 对玩家造成伤害
            let player = other.node.getComponent('Player');
            if (player && player.takeDamage) {
                player.takeDamage(this.damage);
                cc.log('爆炸效果对玩家造成伤害:', this.damage);
            }
        }
    },

    onDestroy() {
        this.unscheduleAllCallbacks();
        cc.log('爆炸效果被销毁');
    }
}); 