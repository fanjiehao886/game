
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
    }
  },
  onLoad: function onLoad() {
    _JoystickEvent["default"].getInstance().on(_JoystickEnum["default"].JoystickEventType.TOUCH_START, this.onTouchStart, this);

    _JoystickEvent["default"].getInstance().on(_JoystickEnum["default"].JoystickEventType.TOUCH_MOVE, this.onTouchMove, this);

    _JoystickEvent["default"].getInstance().on(_JoystickEnum["default"].JoystickEventType.TOUCH_END, this.onTouchEnd, this);
  },
  start: function start() {
    this.currentAudio = cc.audioEngine.play(this.audio_bg, true, 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsYXllci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm1vdmVEaXIiLCJ2MiIsImRpc3BsYXlOYW1lIiwidG9vbHRpcCIsIl9zcGVlZFR5cGUiLCJKb3lzdGlja0VudW0iLCJTcGVlZFR5cGUiLCJTVE9QIiwidHlwZSIsIl9tb3ZlU3BlZWQiLCJzdG9wU3BlZWQiLCJJbnRlZ2VyIiwibm9ybWFsU3BlZWQiLCJmYXN0U3BlZWQiLCJhdWRpb19jb2xsaWRlIiwiQXVkaW9DbGlwIiwiYXVkaW9fYmciLCJvbkxvYWQiLCJKb3lzdGlja0V2ZW50IiwiZ2V0SW5zdGFuY2UiLCJvbiIsIkpveXN0aWNrRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoU3RhcnQiLCJUT1VDSF9NT1ZFIiwib25Ub3VjaE1vdmUiLCJUT1VDSF9FTkQiLCJvblRvdWNoRW5kIiwic3RhcnQiLCJjdXJyZW50QXVkaW8iLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJvbkVuZENvbnRhY3QiLCJjb250YWN0Iiwic2VsZkNvbGxpZGVyIiwib3RoZXJDb2xsaWRlciIsInBsYXlFZmZlY3QiLCJldmVudCIsImRhdGEiLCJzcGVlZFR5cGUiLCJtb3ZlRGlzdGFuY2UiLCJtb3ZlIiwibHYiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5IiwibGluZWFyVmVsb2NpdHkiLCJ4IiwieSIsInVwZGF0ZSIsImR0IiwiTk9STUFMIiwiRkFTVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUVMQyxVQUFVLEVBQUU7SUFFUjtJQUNBQyxPQUFPLEVBQUU7TUFDTCxXQUFTSixFQUFFLENBQUNLLEVBQUgsQ0FBTSxDQUFOLEVBQVMsQ0FBVCxDQURKO01BRUxDLFdBQVcsRUFBRSxVQUZS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SCxHQUFRLEtBQUsvQyxPQUFMLENBQWErQyxDQUFiLEdBQWlCLEtBQUt0QyxVQUF0QixHQUFtQyxDQUEzQztJQUNBaUMsRUFBRSxDQUFDTSxDQUFILEdBQVEsS0FBS2hELE9BQUwsQ0FBYWdELENBQWIsR0FBaUIsS0FBS3ZDLFVBQXRCLEdBQW1DLENBQTNDO0lBQ0EsS0FBS2tDLElBQUwsQ0FBVUMsWUFBVixDQUF1QmhELEVBQUUsQ0FBQ2lELFNBQTFCLEVBQXFDQyxjQUFyQyxHQUFzREosRUFBdEQ7RUFDSCxDQTdGSTtFQStGTE8sTUEvRkssa0JBK0ZFQyxFQS9GRixFQStGTTtJQUNQLFFBQVEsS0FBSzlDLFVBQWI7TUFDSSxLQUFLQyx3QkFBQSxDQUFhQyxTQUFiLENBQXVCQyxJQUE1QjtRQUNJLEtBQUtFLFVBQUwsR0FBa0IsS0FBS0MsU0FBdkI7UUFDQTs7TUFDSixLQUFLTCx3QkFBQSxDQUFhQyxTQUFiLENBQXVCNkMsTUFBNUI7UUFDSSxLQUFLMUMsVUFBTCxHQUFrQixLQUFLRyxXQUF2QjtRQUNBOztNQUNKLEtBQUtQLHdCQUFBLENBQWFDLFNBQWIsQ0FBdUI4QyxJQUE1QjtRQUNJLEtBQUszQyxVQUFMLEdBQWtCLEtBQUtJLFNBQXZCO1FBQ0E7O01BQ0o7UUFDSTtJQVhSOztJQWFBLEtBQUs0QixJQUFMO0VBQ0g7QUE5R0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpveXN0aWNrRW51bSBmcm9tIFwiSm95c3RpY2tFbnVtXCI7XG5pbXBvcnQgSm95c3RpY2tFdmVudCBmcm9tIFwiSm95c3RpY2tFdmVudFwiO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIHByb3BlcnRpZXM6IHtcblxuICAgICAgICAvLyBmcm9tIGpveXN0aWNrXG4gICAgICAgIG1vdmVEaXI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IGNjLnYyKDAsIDEpLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdNb3ZlIERpcicsXG4gICAgICAgICAgICB0b29sdGlwOiAn56e75Yqo5pa55ZCRJyxcbiAgICAgICAgfSxcbiAgICAgICAgX3NwZWVkVHlwZToge1xuICAgICAgICAgICAgZGVmYXVsdDogSm95c3RpY2tFbnVtLlNwZWVkVHlwZS5TVE9QLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdTcGVlZCBUeXBlJyxcbiAgICAgICAgICAgIHR5cGU6IEpveXN0aWNrRW51bS5TcGVlZFR5cGUsXG4gICAgICAgICAgICB0b29sdGlwOiAn6YCf5bqm57qn5YirJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGZyb20gc2VsZlxuICAgICAgICBfbW92ZVNwZWVkOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdNb3ZlIFNwZWVkJyxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfnp7vliqjpgJ/luqYnXG4gICAgICAgIH0sXG5cbiAgICAgICAgc3RvcFNwZWVkOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxuICAgICAgICAgICAgdHlwZTogY2MuSW50ZWdlcixcbiAgICAgICAgICAgIHRvb2x0aXA6ICflgZzmraLml7bpgJ/luqYnXG4gICAgICAgIH0sXG4gICAgICAgIG5vcm1hbFNwZWVkOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAxMDAsXG4gICAgICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+ato+W4uOmAn+W6pidcbiAgICAgICAgfSxcbiAgICAgICAgZmFzdFNwZWVkOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAyMDAsXG4gICAgICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+acgOW/q+mAn+W6pidcbiAgICAgICAgfSxcbiAgICAgICAgYXVkaW9fY29sbGlkZToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfnorDmkp7pn7PmlYgnXG4gICAgICAgIH0sXG4gICAgICAgIGF1ZGlvX2JnOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+iDjOaZr+mfs+S5kCdcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgSm95c3RpY2tFdmVudC5nZXRJbnN0YW5jZSgpLm9uKEpveXN0aWNrRW51bS5Kb3lzdGlja0V2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICBKb3lzdGlja0V2ZW50LmdldEluc3RhbmNlKCkub24oSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICBKb3lzdGlja0V2ZW50LmdldEluc3RhbmNlKCkub24oSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEF1ZGlvID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmF1ZGlvX2JnLCB0cnVlLCAxKTtcbiAgICB9LFxuXG5cbiAgICBvbkVuZENvbnRhY3Q6IGZ1bmN0aW9uIChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgLy9wbGF5IHNvdW5kIGVmZmVjdFxuICAgICAgICB0aGlzLmN1cnJlbnRBdWRpbyA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdWRpb19jb2xsaWRlLCBmYWxzZSk7XG4gICAgfSxcblxuICAgIG9uVG91Y2hTdGFydCgpIHtcblxuICAgIH0sXG5cbiAgICBvblRvdWNoTW92ZShldmVudCwgZGF0YSkge1xuICAgICAgICB0aGlzLl9zcGVlZFR5cGUgPSBkYXRhLnNwZWVkVHlwZTtcbiAgICAgICAgdGhpcy5tb3ZlRGlyID0gZGF0YS5tb3ZlRGlzdGFuY2U7XG4gICAgfSxcblxuICAgIG9uVG91Y2hFbmQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5fc3BlZWRUeXBlID0gZGF0YS5zcGVlZFR5cGU7XG4gICAgfSxcblxuICAgIC8vIG1ldGhvZHNcbiAgICBtb3ZlKCkge1xuICAgICAgICAvLyB0aGlzLm5vZGUuYW5nbGUgPSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoXG4gICAgICAgIC8vICAgICBNYXRoLmF0YW4yKHRoaXMubW92ZURpci55LCB0aGlzLm1vdmVEaXIueClcbiAgICAgICAgLy8gKSAtIDkwO1xuICAgICAgICAvL2xldCBuZXdQb3MgPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkKHRoaXMubW92ZURpci5tdWwodGhpcy5fbW92ZVNwZWVkIC8gMTIwKSk7XG4gICAgICAgIC8vdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5ld1Bvcyk7XG4gICAgICAgIGxldCBsdiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9tb3ZlU3BlZWQpO1xuICAgICAgICBsdi54ICA9IHRoaXMubW92ZURpci54ICogdGhpcy5fbW92ZVNwZWVkIC8gMjtcbiAgICAgICAgbHYueSAgPSB0aGlzLm1vdmVEaXIueSAqIHRoaXMuX21vdmVTcGVlZCAvIDI7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGx2O1xuICAgIH0sXG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLl9zcGVlZFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgSm95c3RpY2tFbnVtLlNwZWVkVHlwZS5TVE9QOlxuICAgICAgICAgICAgICAgIHRoaXMuX21vdmVTcGVlZCA9IHRoaXMuc3RvcFNwZWVkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBKb3lzdGlja0VudW0uU3BlZWRUeXBlLk5PUk1BTDpcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlU3BlZWQgPSB0aGlzLm5vcm1hbFNwZWVkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBKb3lzdGlja0VudW0uU3BlZWRUeXBlLkZBU1Q6XG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZVNwZWVkID0gdGhpcy5mYXN0U3BlZWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgIH0sXG59KTtcbiJdfQ==