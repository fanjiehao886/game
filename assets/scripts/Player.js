import JoystickEnum from "JoystickEnum";
import JoystickEvent from "JoystickEvent";

cc.Class({
    extends: cc.Component,
    properties: {

        // from joystick
        moveDir: {
            default: cc.v2(0, 1),
            displayName: 'Move Dir',
            tooltip: '移动方向',
        },
        _speedType: {
            default: JoystickEnum.SpeedType.STOP,
            displayName: 'Speed Type',
            type: JoystickEnum.SpeedType,
            tooltip: '速度级别'
        },

        // from self
        _moveSpeed: {
            default: 0,
            displayName: 'Move Speed',
            tooltip: '移动速度'
        },

        stopSpeed: {
            default: 0,
            type: cc.Integer,
            tooltip: '停止时速度'
        },
        normalSpeed: {
            default: 100,
            type: cc.Integer,
            tooltip: '正常速度'
        },
        fastSpeed: {
            default: 200,
            type: cc.Integer,
            tooltip: '最快速度'
        },
        audio_collide: {
            default: null,
            type: cc.AudioClip,
            tooltip: '碰撞音效'
        },
        audio_bg: {
            default: null,
            type: cc.AudioClip,
            tooltip: '背景音乐'
        },
        bulletPre: {
            default: null,
            type: cc.Prefab,
        },
        shootInterval: {
            default: 0.05,
            type: cc.Float,
        },
        lastFiretime: {
            default: 0,
            type: cc.Float,
        },

    },

    onLoad() {
        // 添加刚体组件
        let rigidBody = this.getComponent(cc.RigidBody);
        if (!rigidBody) {
            rigidBody = this.addComponent(cc.RigidBody);
            rigidBody.type = cc.RigidBodyType.Dynamic;
            rigidBody.fixedRotation = true;
            rigidBody.enabledContactListener = true;
        }

        // 添加碰撞组件
        let collider = this.getComponent(cc.BoxCollider);
        if (!collider) {
            collider = this.addComponent(cc.BoxCollider);
            collider.size = cc.size(this.node.width, this.node.height);
            if (this.node.width === 0 || this.node.height === 0) {
                collider.size = cc.size(40, 40); // 设置默认尺寸
            }
        }

        // 设置碰撞分组
        this.node.group = 'player';

        JoystickEvent.getInstance().on(JoystickEnum.JoystickEventType.TOUCH_START, this.onTouchStart, this);
        JoystickEvent.getInstance().on(JoystickEnum.JoystickEventType.TOUCH_MOVE, this.onTouchMove, this);
        JoystickEvent.getInstance().on(JoystickEnum.JoystickEventType.TOUCH_END, this.onTouchEnd, this);
    },

    start() {
        cc.audioEngine.playMusic(this.audio_bg, true);
    },

    shoot(monster) {
        const currentTime = cc.director.getTotalTime() / 1000;
        if (currentTime - this.lastFiretime > this.shootInterval) {
            this.lastFiretime = currentTime;
            let bullet = cc.instantiate(this.bulletPre);
            bullet.setPosition(this.node.position);
            this.node.parent.addChild(bullet);

            let monsterPos = monster.position;
            let dir = monsterPos.sub(bullet.position).normalize();
            
            let bulletComp = bullet.getComponent('bullets');
            bulletComp.setDirection(dir);
            bulletComp.setSpeed(200);
            bulletComp.setDamage(10);
        }
    },

    onEndContact: function (contact, selfCollider, otherCollider) {
        //play sound effect
        this.currentAudio = cc.audioEngine.playEffect(this.audio_collide, false);
    },

    onTouchStart() {

    },

    onTouchMove(event, data) {
        this._speedType = data.speedType;
        this.moveDir = data.moveDistance;
    },

    onTouchEnd(event, data) {
        this._speedType = data.speedType;
    },
    onTouchEnemy(monster, dt) {
        this.shoot(monster);
    },

    // methods
    move() {
        // this.node.angle = cc.misc.radiansToDegrees(
        //     Math.atan2(this.moveDir.y, this.moveDir.x)
        // ) - 90;
        //let newPos = this.node.position.add(this.moveDir.mul(this._moveSpeed / 120));
        //this.node.setPosition(newPos);
        let lv = this.node.getComponent(cc.RigidBody).linearVelocity;
        //console.log(this._moveSpeed);
        lv.x  = this.moveDir.x * this._moveSpeed / 2;
        lv.y  = this.moveDir.y * this._moveSpeed / 2;
        this.node.getComponent(cc.RigidBody).linearVelocity = lv;
    },
    detectEnemy(dt) {
        let enemy = this.node.parent.getChildByName('enemy');
        let monster = enemy.getChildByName('monster');
        if (monster) {
            let monsterPos = monster.position;
            let playerPos = this.node.position;
            let distance = monsterPos.sub(playerPos).mag();
            if (distance < 200) {
                console.log("touch monster");
                this.onTouchEnemy(monster, dt);
            }
        }
        else {
            console.log("no monster");
        }
    },

    update(dt) {
        switch (this._speedType) {
            case JoystickEnum.SpeedType.STOP:
                this._moveSpeed = this.stopSpeed;
                break;
            case JoystickEnum.SpeedType.NORMAL:
                this._moveSpeed = this.normalSpeed;
                break;
            case JoystickEnum.SpeedType.FAST:
                this._moveSpeed = this.fastSpeed;
                break;
            default:
                break;
        }
        this.move();
        this.detectEnemy(dt);
    },

    takeDamage(damage) {
        cc.log('玩家受到伤害:', damage);
        // 处理玩家受伤逻辑
    },

    // 添加碰撞回调
    onCollisionEnter(other, self) {
        cc.log('Player 碰撞开始 - 碰撞对象:', other.node.group);
        if (other.node.group === 'bomb') {
            cc.log('Player 被炸弹击中');
        }
    },

    onBeginContact(contact, selfCollider, otherCollider) {
        cc.log('Player 接触开始 - 接触对象:', otherCollider.node.group);
        if (otherCollider.node.group === 'bomb') {
            cc.log('Player 被炸弹击中');
        }
    },
});
