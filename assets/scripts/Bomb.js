cc.Class({
    extends: cc.Component,

    properties: {
        bombSprite: {
            default: null,
            type: cc.SpriteFrame,
            tooltip: '炸弹图片'
        },
        explosionPrefab: {
            default: null,
            type: cc.Prefab,
            tooltip: '爆炸效果预制体'
        },
        explosionAudio: {
            default: null,
            type: cc.AudioClip,
            tooltip: '爆炸音效'
        },
        lifeTime: {
            default: 3,
            type: cc.Float,
            tooltip: '炸弹存活时间'
        },
        _direction: cc.v2(0, 0),
        _speed: 0,
        _damage: 0
    },

    onLoad() {
        // 添加精灵组件
        let sprite = this.getComponent(cc.Sprite);
        if (!sprite) {
            sprite = this.addComponent(cc.Sprite);
        }

        // 如果没有设置炸弹图片，创建一个默认的圆形图形
        if (!this.bombSprite) {
            // 创建一个圆形图形
            let graphics = this.addComponent(cc.Graphics);
            graphics.circle(0, 0, 10);
            graphics.fillColor = cc.Color.RED;
            graphics.fill();
            
            // 设置节点大小
            this.node.width = 20;
            this.node.height = 20;
        } else {
            sprite.spriteFrame = this.bombSprite;
        }

        // 添加刚体组件
        let rigidBody = this.getComponent(cc.RigidBody);
        if (!rigidBody) {
            rigidBody = this.addComponent(cc.RigidBody);
            rigidBody.type = cc.RigidBodyType.Dynamic;
            rigidBody.fixedRotation = true;
            rigidBody.enabledContactListener = true;
            rigidBody.gravityScale = 0;
            rigidBody.linearDamping = 0;
            rigidBody.bullet = true;
            
            // 设置碰撞检测类别和掩码
            rigidBody.awakeOnLoad = true;
        }

        // 添加碰撞组件
        let collider = this.getComponent(cc.BoxCollider);
        if (!collider) {
            collider = this.addComponent(cc.BoxCollider);
            collider.size = cc.size(20, 20);
            collider.offset = cc.v2(0, 0);
            cc.log('添加碰撞器，尺寸:', collider.size);
        }

        // 设置碰撞分组
        this.node.group = 'bomb';
        
        cc.log('炸弹初始化完成 - 位置:', this.node.position, '碰撞器尺寸:', collider.size);
        
        // 确保定时销毁
        this.scheduleOnce(() => {
            cc.log('炸弹到达生命周期上限，执行爆炸');
            this.explode();
        }, this.lifeTime);
        
        cc.log('炸弹初始化完成 - 方向:', this._direction, '速度:', this._speed);
    },

    setDirection(dir) {
        this._direction = dir.normalize(); // 确保方向向量是单位向量
        cc.log('设置炸弹方向:', this._direction);
    },

    setSpeed(speed) {
        this._speed = speed;
        cc.log('设置炸弹速度:', this._speed);
    },

    setDamage(damage) {
        this._damage = damage;
    },

    update(dt) {
        if (!this._direction || !this._speed) {
            cc.log('炸弹缺少方向或速度:', this._direction, this._speed);
            return;
        }

        let rigidBody = this.getComponent(cc.RigidBody);
        if (rigidBody) {
            // 使用刚体设置速度
            let velocity = cc.v2(
                this._direction.x * this._speed,
                this._direction.y * this._speed
            );
            rigidBody.linearVelocity = velocity;
            cc.log('炸弹速度更新:', velocity);
        } else {
            // 如果没有刚体组件，直接更新位置
            let newPos = this.node.position;
            newPos.x += this._direction.x * this._speed * dt;
            newPos.y += this._direction.y * this._speed * dt;
            this.node.setPosition(newPos);
            cc.log('炸弹位置更新:', newPos);
        }
    },

    // 使用 onCollisionEnter 和 onBeginContact 双重保险
    onCollisionEnter(other, self) {
        cc.log('Bomb 碰撞开始 - 碰撞对象:', other.node.group);
        this.handleCollision(other.node);
    },

    onCollisionStay(other, self) {
        cc.log('Bomb 碰撞持续 - 碰撞对象:', other.node.group);
    },

    onBeginContact(contact, selfCollider, otherCollider) {
        cc.log('Bomb 接触开始 - 接触对象:', otherCollider.node.group);
        this.handleCollision(otherCollider.node);
    },

    handleCollision(otherNode) {
        if (this._isExploding) return;
        
        cc.log('处理炸弹碰撞 - 碰撞对象:', otherNode.group);
        
        if (otherNode.group === 'player') {
            cc.log('炸弹击中玩家');
            let player = otherNode.getComponent('Player');
            if (player && player.takeDamage) {
                player.takeDamage(this._damage);
                cc.log('对玩家造成伤害:', this._damage);
            }
            this.explode();
        } else if (otherNode.group === 'wall') {
            cc.log('炸弹碰到墙壁');
            this.explode();
        }
    },

    explode() {
        // 防止重复调用
        if (this._isExploding) {
            cc.log('炸弹已经在爆炸中，跳过重复调用');
            return;
        }
        this._isExploding = true;
        
        cc.log('执行炸弹爆炸效果');
        
        // 立即停止移动
        let rigidBody = this.getComponent(cc.RigidBody);
        if (rigidBody) {
            rigidBody.linearVelocity = cc.v2(0, 0);
        }
        
        // 播放爆炸音效
        if (this.explosionAudio) {
            cc.audioEngine.playEffect(this.explosionAudio, false, 0.3);
        }

        // 创建爆炸效果
        if (this.explosionPrefab) {
            let explosion = cc.instantiate(this.explosionPrefab);
            explosion.setPosition(this.node.position);
            this.node.parent.addChild(explosion);

            // 设置爆炸效果的伤害值
            let explosionComp = explosion.getComponent('ExplosionEffect');
            if (explosionComp) {
                explosionComp.damage = this._damage;
            }
        }

        // 立即销毁炸弹
        if (this.node && this.node.isValid) {
            this.node.destroy();
        }
    },

    // 添加碰撞回调
    onDestroy() {
        // 清理定时器和其他资源
        this.unscheduleAllCallbacks();
        
        // 移除所有事件监听
        if (this.node) {
            this.node.off('*');
        }
        
        cc.log('炸弹被销毁');
    }
}); 