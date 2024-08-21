
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
    var lv = this.node.getComponent(cc.RigidBody).linearVelocity;
    //console.log(this._moveSpeed);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbIl9Kb3lzdGlja0VudW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9Kb3lzdGlja0V2ZW50Iiwib2JqIiwiX19lc01vZHVsZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibW92ZURpciIsInYyIiwiZGlzcGxheU5hbWUiLCJ0b29sdGlwIiwiX3NwZWVkVHlwZSIsIkpveXN0aWNrRW51bSIsIlNwZWVkVHlwZSIsIlNUT1AiLCJ0eXBlIiwiX21vdmVTcGVlZCIsInN0b3BTcGVlZCIsIkludGVnZXIiLCJub3JtYWxTcGVlZCIsImZhc3RTcGVlZCIsImF1ZGlvX2NvbGxpZGUiLCJBdWRpb0NsaXAiLCJhdWRpb19iZyIsImJ1bGxldFByZSIsIlByZWZhYiIsInNob290SW50ZXJ2YWwiLCJGbG9hdCIsIm9uTG9hZCIsIkpveXN0aWNrRXZlbnQiLCJnZXRJbnN0YW5jZSIsIm9uIiwiSm95c3RpY2tFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIm9uVG91Y2hTdGFydCIsIlRPVUNIX01PVkUiLCJvblRvdWNoTW92ZSIsIlRPVUNIX0VORCIsIm9uVG91Y2hFbmQiLCJzdGFydCIsIl90aGlzIiwiY3VycmVudEF1ZGlvIiwiYXVkaW9FbmdpbmUiLCJwbGF5Iiwic2NoZWR1bGUiLCJzaG9vdCIsImJ1bGxldCIsImluc3RhbnRpYXRlIiwieCIsIm5vZGUiLCJ3aWR0aCIsInkiLCJzZXRQYXJlbnQiLCJkaXJlY3RvciIsImdldFNjZW5lIiwib25FbmRDb250YWN0IiwiY29udGFjdCIsInNlbGZDb2xsaWRlciIsIm90aGVyQ29sbGlkZXIiLCJwbGF5RWZmZWN0IiwiZXZlbnQiLCJkYXRhIiwic3BlZWRUeXBlIiwibW92ZURpc3RhbmNlIiwibW92ZSIsImx2IiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5IiwibGluZWFyVmVsb2NpdHkiLCJ1cGRhdGUiLCJk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Q0g7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLElBQUlDLEVBQUUsR0FBRyxJQUFJLENBQUNoQixJQUFJLENBQUNpQixZQUFZLENBQUMvRCxFQUFFLENBQUNnRSxTQUFTLENBQUMsQ0FBQ0MsY0FBYztJQUM1RDtJQUNBSCxFQUFFLENBQUNqQixDQUFDLEdBQUksSUFBSSxDQUFDekMsT0FBTyxDQUFDeUMsQ0FBQyxHQUFHLElBQUksQ0FBQ2hDLFVBQVUsR0FBRyxDQUFDO0lBQzVDaUQsRUFBRSxDQUFDZCxDQUFDLEdBQUksSUFBSSxDQUFDNUMsT0FBTyxDQUFDNEMsQ0FBQyxHQUFHLElBQUksQ0FBQ25DLFVBQVUsR0FBRyxDQUFDO0lBQzVDLElBQUksQ0FBQ2lDLElBQUksQ0FBQ2lCLFlBQVksQ0FBQy9ELEVBQUUsQ0FBQ2dFLFNBQVMsQ0FBQyxDQUFDQyxjQUFjLEdBQUdILEVBQUU7RUFDNUQsQ0FBQztFQUVESSxNQUFNLFdBQUFBLE9BQUNDLEVBQUUsRUFBRTtJQUNQLFFBQVEsSUFBSSxDQUFDM0QsVUFBVTtNQUNuQixLQUFLQyx3QkFBWSxDQUFDQyxTQUFTLENBQUNDLElBQUk7UUFDNUIsSUFBSSxDQUFDRSxVQUFVLEdBQUcsSUFBSSxDQUFDQyxTQUFTO1FBQ2hDO01BQ0osS0FBS0wsd0JBQVksQ0FBQ0MsU0FBUyxDQUFDMEQsTUFBTTtRQUM5QixJQUFJLENBQUN2RCxVQUFVLEdBQUcsSUFBSSxDQUFDRyxXQUFXO1FBQ2xDO01BQ0osS0FBS1Asd0JBQVksQ0FBQ0MsU0FBUyxDQUFDMkQsSUFBSTtRQUM1QixJQUFJLENBQUN4RCxVQUFVLEdBQUcsSUFBSSxDQUFDSSxTQUFTO1FBQ2hDO01BQ0o7UUFDSTtJQUFNO0lBRWQsSUFBSSxDQUFDNEMsSUFBSSxFQUFFO0VBQ2Y7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb3lzdGlja0VudW0gZnJvbSBcIkpveXN0aWNrRW51bVwiO1xyXG5pbXBvcnQgSm95c3RpY2tFdmVudCBmcm9tIFwiSm95c3RpY2tFdmVudFwiO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgICAgICAvLyBmcm9tIGpveXN0aWNrXHJcbiAgICAgICAgbW92ZURpcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBjYy52MigwLCAxKSxcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdNb3ZlIERpcicsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6ICfnp7vliqjmlrnlkJEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX3NwZWVkVHlwZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBKb3lzdGlja0VudW0uU3BlZWRUeXBlLlNUT1AsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnU3BlZWQgVHlwZScsXHJcbiAgICAgICAgICAgIHR5cGU6IEpveXN0aWNrRW51bS5TcGVlZFR5cGUsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6ICfpgJ/luqbnuqfliKsnXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gZnJvbSBzZWxmXHJcbiAgICAgICAgX21vdmVTcGVlZDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ01vdmUgU3BlZWQnLFxyXG4gICAgICAgICAgICB0b29sdGlwOiAn56e75Yqo6YCf5bqmJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHN0b3BTcGVlZDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyLFxyXG4gICAgICAgICAgICB0b29sdGlwOiAn5YGc5q2i5pe26YCf5bqmJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbm9ybWFsU3BlZWQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogMTAwLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyLFxyXG4gICAgICAgICAgICB0b29sdGlwOiAn5q2j5bi46YCf5bqmJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFzdFNwZWVkOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDIwMCxcclxuICAgICAgICAgICAgdHlwZTogY2MuSW50ZWdlcixcclxuICAgICAgICAgICAgdG9vbHRpcDogJ+acgOW/q+mAn+W6pidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF1ZGlvX2NvbGxpZGU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgICAgICB0b29sdGlwOiAn56Kw5pKe6Z+z5pWIJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXVkaW9fYmc6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgICAgICB0b29sdGlwOiAn6IOM5pmv6Z+z5LmQJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnVsbGV0UHJlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob290SW50ZXJ2YWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogMC41LFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5GbG9hdCxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIEpveXN0aWNrRXZlbnQuZ2V0SW5zdGFuY2UoKS5vbihKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICBKb3lzdGlja0V2ZW50LmdldEluc3RhbmNlKCkub24oSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIEpveXN0aWNrRXZlbnQuZ2V0SW5zdGFuY2UoKS5vbihKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBdWRpbyA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5hdWRpb19iZywgdHJ1ZSwgMSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKT0+e3RoaXMuc2hvb3QoKX0sIHRoaXMuc2hvb3RJbnRlcnZhbCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob290KCkge1xyXG4gICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZSk7XHJcbiAgICAgICAgYnVsbGV0LnggPSAyNDAgKyB0aGlzLm5vZGUueCArIHRoaXMubm9kZS53aWR0aC8yO1xyXG4gICAgICAgIGJ1bGxldC55ID0gNDgwICsgdGhpcy5ub2RlLnk7XHJcbiAgICAgICAgYnVsbGV0LnNldFBhcmVudChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpKTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIG9uRW5kQ29udGFjdDogZnVuY3Rpb24gKGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG4gICAgICAgIC8vcGxheSBzb3VuZCBlZmZlY3RcclxuICAgICAgICB0aGlzLmN1cnJlbnRBdWRpbyA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdWRpb19jb2xsaWRlLCBmYWxzZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uVG91Y2hTdGFydCgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fc3BlZWRUeXBlID0gZGF0YS5zcGVlZFR5cGU7XHJcbiAgICAgICAgdGhpcy5tb3ZlRGlyID0gZGF0YS5tb3ZlRGlzdGFuY2U7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uVG91Y2hFbmQoZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9zcGVlZFR5cGUgPSBkYXRhLnNwZWVkVHlwZTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gbWV0aG9kc1xyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuYW5nbGUgPSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoXHJcbiAgICAgICAgLy8gICAgIE1hdGguYXRhbjIodGhpcy5tb3ZlRGlyLnksIHRoaXMubW92ZURpci54KVxyXG4gICAgICAgIC8vICkgLSA5MDtcclxuICAgICAgICAvL2xldCBuZXdQb3MgPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkKHRoaXMubW92ZURpci5tdWwodGhpcy5fbW92ZVNwZWVkIC8gMTIwKSk7XHJcbiAgICAgICAgLy90aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3UG9zKTtcclxuICAgICAgICBsZXQgbHYgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9tb3ZlU3BlZWQpO1xyXG4gICAgICAgIGx2LnggID0gdGhpcy5tb3ZlRGlyLnggKiB0aGlzLl9tb3ZlU3BlZWQgLyAyO1xyXG4gICAgICAgIGx2LnkgID0gdGhpcy5tb3ZlRGlyLnkgKiB0aGlzLl9tb3ZlU3BlZWQgLyAyO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGx2O1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX3NwZWVkVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEpveXN0aWNrRW51bS5TcGVlZFR5cGUuU1RPUDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vdmVTcGVlZCA9IHRoaXMuc3RvcFNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgSm95c3RpY2tFbnVtLlNwZWVkVHlwZS5OT1JNQUw6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlU3BlZWQgPSB0aGlzLm5vcm1hbFNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgSm95c3RpY2tFbnVtLlNwZWVkVHlwZS5GQVNUOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZVNwZWVkID0gdGhpcy5mYXN0U3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vdmUoKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=