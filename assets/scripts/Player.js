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
            default: 0.5,
            type: cc.Float,
        },

    },

    onLoad() {
        JoystickEvent.getInstance().on(JoystickEnum.JoystickEventType.TOUCH_START, this.onTouchStart, this);
        JoystickEvent.getInstance().on(JoystickEnum.JoystickEventType.TOUCH_MOVE, this.onTouchMove, this);
        JoystickEvent.getInstance().on(JoystickEnum.JoystickEventType.TOUCH_END, this.onTouchEnd, this);
    },

    start() {
        this.currentAudio = cc.audioEngine.play(this.audio_bg, true, 1);
        this.schedule(()=>{this.shoot()}, this.shootInterval);
    },

    shoot() {
        let bullet = cc.instantiate(this.bulletPre);
        bullet.x = 240 + this.node.x + this.node.width/2;
        bullet.y = 480 + this.node.y;
        bullet.setParent(cc.director.getScene());
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
    },
});
