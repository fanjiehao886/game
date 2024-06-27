
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb54dsfF4hPHbstG7Fr9wXV', 'Player');
// scripts/Player.js

"use strict";

var _JoystickEnum = _interopRequireDefault(require("JoystickEnum"));

var _JoystickEvent = _interopRequireDefault(require("JoystickEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    // from joystick
    moveDir: {
      "default": cc.v2(0, 1),
      displayName: 'Move Dir',
      tooltip: '移动方向'
    },
    _speedType: {
      "default": _JoystickEnum["default"].SpeedType.STOP,
      displayName: 'Speed Type',
      type: _JoystickEnum["default"].SpeedType,
      tooltip: '速度级别'
    },
    // from self
    _moveSpeed: {
      "default": 0,
      displayName: 'Move Speed',
      tooltip: '移动速度'
    },
    stopSpeed: {
      "default": 0,
      type: cc.Integer,
      tooltip: '停止时速度'
    },
    normalSpeed: {
      "default": 100,
      type: cc.Integer,
      tooltip: '正常速度'
    },
    fastSpeed: {
      "default": 200,
      type: cc.Integer,
      tooltip: '最快速度'
    },
    audio_collide: {
      "default": null,
      type: cc.AudioClip,
      tooltip: '碰撞音效'
    },
    audio_bg: {
      "default": null,
      type: cc.AudioClip,
      tooltip: '背景音乐'
    },
    bulletPre: {
      "default": null,
      type: cc.Prefab
    },
    shootInterval: {
      "default": 0.5,
      type: cc.Float
    }
  },
  onLoad: function onLoad() {
    _JoystickEvent["default"].getInstance().on(_JoystickEnum["default"].JoystickEventType.TOUCH_START, this.onTouchStart, this);

    _JoystickEvent["default"].getInstance().on(_JoystickEnum["default"].JoystickEventType.TOUCH_MOVE, this.onTouchMove, this);

    _JoystickEvent["default"].getInstance().on(_JoystickEnum["default"].JoystickEventType.TOUCH_END, this.onTouchEnd, this);
  },
  start: function start() {
    var _this = this;

    this.currentAudio = cc.audioEngine.play(this.audio_bg, true, 1);
    this.schedule(function () {
      _this.shoot();
    }, this.shootInterval);
  },
  shoot: function shoot() {
    var bullet = cc.instantiate(this.bulletPre);
    bullet.x = 240 + this.node.x + this.node.width / 2;
    bullet.y = 480 + this.node.y;
    bullet.setParent(cc.director.getScene());
  },
  onEndContact: function onEndContact(contact, selfCollider, otherCollider) {
    //play sound effect
    this.currentAudio = cc.audioEngine.playEffect(this.audio_collide, false);
  },
  onTouchStart: function onTouchStart() {},
  onTouchMove: function onTouchMove(event, data) {
    this._speedType = data.speedType;
    this.moveDir = data.moveDistance;
  },
  onTouchEnd: function onTouchEnd(event, data) {
    this._speedType = data.speedType;
  },
  // methods
  move: function move() {
    // this.node.angle = cc.misc.radiansToDegrees(
    //     Math.atan2(this.moveDir.y, this.moveDir.x)
    // ) - 90;
    //let newPos = this.node.position.add(this.moveDir.mul(this._moveSpeed / 120));
    //this.node.setPosition(newPos);
    var lv = this.node.getComponent(cc.RigidBody).linearVelocity; //console.log(this._moveSpeed);

    lv.x = this.moveDir.x * this._moveSpeed / 2;
    lv.y = this.moveDir.y * this._moveSpeed / 2;
    this.node.getComponent(cc.RigidBody).linearVelocity = lv;
  },
  update: function update(dt) {
    switch (this._speedType) {
      case _JoystickEnum["default"].SpeedType.STOP:
        this._moveSpeed = this.stopSpeed;
        break;

      case _JoystickEnum["default"].SpeedType.NORMAL:
        this._moveSpeed = this.normalSpeed;
        break;

      case _JoystickEnum["default"].SpeedType.FAST:
        this._moveSpeed = this.fastSpeed;
        break;

      default:
        break;
    }

    this.move();
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsYXllci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm1vdmVEaXIiLCJ2MiIsImRpc3BsYXlOYW1lIiwidG9vbHRpcCIsIl9zcGVlZFR5cGUiLCJKb3lzdGlja0VudW0iLCJTcGVlZFR5cGUiLCJTVE9QIiwidHlwZSIsIl9tb3ZlU3BlZWQiLCJzdG9wU3BlZWQiLCJJbnRlZ2VyIiwibm9ybWFsU3BlZWQiLCJmYXN0U3BlZWQiLCJhdWRpb19jb2xsaWRlIiwiQXVkaW9DbGlwIiwiYXVkaW9fYmciLCJidWxsZXRQcmUiLCJQcmVmYWIiLCJzaG9vdEludGVydmFsIiwiRmxvYXQiLCJvbkxvYWQiLCJKb3lzdGlja0V2ZW50IiwiZ2V0SW5zdGFuY2UiLCJvbiIsIkpveXN0aWNrRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoU3RhcnQiLCJUT1VDSF9NT1ZFIiwib25Ub3VjaE1vdmUiLCJUT1VDSF9FTkQiLCJvblRvdWNoRW5kIiwic3RhcnQiLCJjdXJyZW50QXVkaW8iLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJzY2hlZHVsZSIsInNob290IiwiYnVsbGV0IiwiaW5zdGFudGlhdGUiLCJ4Iiwibm9kZSIsIndpZHRoIiwieSIsInNldFBhcmVudCIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJvbkVuZENvbnRhY3QiLCJjb250YWN0Iiwic2VsZkNvbGxpZGVyIiwib3RoZXJDb2xsaWRlciIsInBsYXlFZmZlY3QiLCJldmVudCIsImRhdGEiLCJzcGVlZFR5cGUiLCJtb3ZlRGlzdGFuY2UiLCJtb3ZlIiwibHYiLCJnZXRDb21wb25lbnQiLCJSaWdpZEJvZHkiLCJsaW5lYXJWZWxvY2l0eSIsInVwZGF0ZSIsImR0IiwiTk9STUFMIiwiRkFTVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdB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QXREO0VBQ0gsQ0E3R0k7RUErR0xJLE1BL0dLLGtCQStHRUMsRUEvR0YsRUErR007SUFDUCxRQUFRLEtBQUsxRCxVQUFiO01BQ0ksS0FBS0Msd0JBQUEsQ0FBYUMsU0FBYixDQUF1QkMsSUFBNUI7UUFDSSxLQUFLRSxVQUFMLEdBQWtCLEtBQUtDLFNBQXZCO1FBQ0E7O01BQ0osS0FBS0wsd0JBQUEsQ0FBYUMsU0FBYixDQUF1QnlELE1BQTVCO1FBQ0ksS0FBS3RELFVBQUwsR0FBa0IsS0FBS0csV0FBdkI7UUFDQTs7TUFDSixLQUFLUCx3QkFBQSxDQUFhQyxTQUFiLENBQXVCMEQsSUFBNUI7UUFDSSxLQUFLdkQsVUFBTCxHQUFrQixLQUFLSSxTQUF2QjtRQUNBOztNQUNKO1FBQ0k7SUFYUjs7SUFhQSxLQUFLMkMsSUFBTDtFQUNIO0FBOUhJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb3lzdGlja0VudW0gZnJvbSBcIkpveXN0aWNrRW51bVwiO1xuaW1wb3J0IEpveXN0aWNrRXZlbnQgZnJvbSBcIkpveXN0aWNrRXZlbnRcIjtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAgICAgLy8gZnJvbSBqb3lzdGlja1xuICAgICAgICBtb3ZlRGlyOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBjYy52MigwLCAxKSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnTW92ZSBEaXInLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+enu+WKqOaWueWQkScsXG4gICAgICAgIH0sXG4gICAgICAgIF9zcGVlZFR5cGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IEpveXN0aWNrRW51bS5TcGVlZFR5cGUuU1RPUCxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnU3BlZWQgVHlwZScsXG4gICAgICAgICAgICB0eXBlOiBKb3lzdGlja0VudW0uU3BlZWRUeXBlLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+mAn+W6pue6p+WIqydcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBmcm9tIHNlbGZcbiAgICAgICAgX21vdmVTcGVlZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogMCxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnTW92ZSBTcGVlZCcsXG4gICAgICAgICAgICB0b29sdGlwOiAn56e75Yqo6YCf5bqmJ1xuICAgICAgICB9LFxuXG4gICAgICAgIHN0b3BTcGVlZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogMCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkludGVnZXIsXG4gICAgICAgICAgICB0b29sdGlwOiAn5YGc5q2i5pe26YCf5bqmJ1xuICAgICAgICB9LFxuICAgICAgICBub3JtYWxTcGVlZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogMTAwLFxuICAgICAgICAgICAgdHlwZTogY2MuSW50ZWdlcixcbiAgICAgICAgICAgIHRvb2x0aXA6ICfmraPluLjpgJ/luqYnXG4gICAgICAgIH0sXG4gICAgICAgIGZhc3RTcGVlZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogMjAwLFxuICAgICAgICAgICAgdHlwZTogY2MuSW50ZWdlcixcbiAgICAgICAgICAgIHRvb2x0aXA6ICfmnIDlv6vpgJ/luqYnXG4gICAgICAgIH0sXG4gICAgICAgIGF1ZGlvX2NvbGxpZGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgICAgICB0b29sdGlwOiAn56Kw5pKe6Z+z5pWIJ1xuICAgICAgICB9LFxuICAgICAgICBhdWRpb19iZzoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfog4zmma/pn7PkuZAnXG4gICAgICAgIH0sXG4gICAgICAgIGJ1bGxldFByZToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICAgICAgfSxcbiAgICAgICAgc2hvb3RJbnRlcnZhbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogMC41LFxuICAgICAgICAgICAgdHlwZTogY2MuRmxvYXQsXG4gICAgICAgIH0sXG5cbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBKb3lzdGlja0V2ZW50LmdldEluc3RhbmNlKCkub24oSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIEpveXN0aWNrRXZlbnQuZ2V0SW5zdGFuY2UoKS5vbihKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgICAgIEpveXN0aWNrRXZlbnQuZ2V0SW5zdGFuY2UoKS5vbihKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50QXVkaW8gPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYXVkaW9fYmcsIHRydWUsIDEpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpPT57dGhpcy5zaG9vdCgpfSwgdGhpcy5zaG9vdEludGVydmFsKTtcbiAgICB9LFxuXG4gICAgc2hvb3QoKSB7XG4gICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZSk7XG4gICAgICAgIGJ1bGxldC54ID0gMjQwICsgdGhpcy5ub2RlLnggKyB0aGlzLm5vZGUud2lkdGgvMjtcbiAgICAgICAgYnVsbGV0LnkgPSA0ODAgKyB0aGlzLm5vZGUueTtcbiAgICAgICAgYnVsbGV0LnNldFBhcmVudChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpKTtcbiAgICB9LFxuXG5cbiAgICBvbkVuZENvbnRhY3Q6IGZ1bmN0aW9uIChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgLy9wbGF5IHNvdW5kIGVmZmVjdFxuICAgICAgICB0aGlzLmN1cnJlbnRBdWRpbyA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdWRpb19jb2xsaWRlLCBmYWxzZSk7XG4gICAgfSxcblxuICAgIG9uVG91Y2hTdGFydCgpIHtcblxuICAgIH0sXG5cbiAgICBvblRvdWNoTW92ZShldmVudCwgZGF0YSkge1xuICAgICAgICB0aGlzLl9zcGVlZFR5cGUgPSBkYXRhLnNwZWVkVHlwZTtcbiAgICAgICAgdGhpcy5tb3ZlRGlyID0gZGF0YS5tb3ZlRGlzdGFuY2U7XG4gICAgfSxcblxuICAgIG9uVG91Y2hFbmQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5fc3BlZWRUeXBlID0gZGF0YS5zcGVlZFR5cGU7XG4gICAgfSxcblxuICAgIC8vIG1ldGhvZHNcbiAgICBtb3ZlKCkge1xuICAgICAgICAvLyB0aGlzLm5vZGUuYW5nbGUgPSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoXG4gICAgICAgIC8vICAgICBNYXRoLmF0YW4yKHRoaXMubW92ZURpci55LCB0aGlzLm1vdmVEaXIueClcbiAgICAgICAgLy8gKSAtIDkwO1xuICAgICAgICAvL2xldCBuZXdQb3MgPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkKHRoaXMubW92ZURpci5tdWwodGhpcy5fbW92ZVNwZWVkIC8gMTIwKSk7XG4gICAgICAgIC8vdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5ld1Bvcyk7XG4gICAgICAgIGxldCBsdiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9tb3ZlU3BlZWQpO1xuICAgICAgICBsdi54ICA9IHRoaXMubW92ZURpci54ICogdGhpcy5fbW92ZVNwZWVkIC8gMjtcbiAgICAgICAgbHYueSAgPSB0aGlzLm1vdmVEaXIueSAqIHRoaXMuX21vdmVTcGVlZCAvIDI7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGx2O1xuICAgIH0sXG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLl9zcGVlZFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgSm95c3RpY2tFbnVtLlNwZWVkVHlwZS5TVE9QOlxuICAgICAgICAgICAgICAgIHRoaXMuX21vdmVTcGVlZCA9IHRoaXMuc3RvcFNwZWVkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBKb3lzdGlja0VudW0uU3BlZWRUeXBlLk5PUk1BTDpcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlU3BlZWQgPSB0aGlzLm5vcm1hbFNwZWVkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBKb3lzdGlja0VudW0uU3BlZWRUeXBlLkZBU1Q6XG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZVNwZWVkID0gdGhpcy5mYXN0U3BlZWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgIH0sXG59KTtcbiJdfQ==