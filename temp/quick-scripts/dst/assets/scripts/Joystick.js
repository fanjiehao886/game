
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Joystick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a5f4A6L4lFJKWrb0ereNkY', 'Joystick');
// scripts/Joystick.js

"use strict";

var _JoystickEnum = _interopRequireDefault(require("JoystickEnum"));

var _JoystickEvent = _interopRequireDefault(require("JoystickEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    dot: {
      "default": null,
      type: cc.Node,
      displayName: 'Dot',
      tooltip: '摇杆操纵点'
    },
    ring: {
      "default": null,
      type: cc.Node,
      displayName: 'Ring',
      tooltip: '摇杆背景节点'
    },
    joystickType: {
      "default": _JoystickEnum["default"].JoystickType.FIXED,
      type: _JoystickEnum["default"].JoystickType,
      displayName: 'Touch Type',
      tooltip: '触摸类型'
    },
    directionType: {
      "default": _JoystickEnum["default"].DirectionType.ALL,
      type: _JoystickEnum["default"].DirectionType,
      displayName: 'Direction Type',
      tooltip: '方向类型'
    },
    _stickPos: {
      "default": null,
      type: cc.Node,
      tooltip: '摇杆所在位置'
    },
    _touchLocation: {
      "default": null,
      type: cc.Node,
      tooltip: '触摸位置'
    }
  },
  onLoad: function onLoad() {
    this._radius = this.ring.width / 2;

    this._initTouchEvent(); // hide joystick when follow


    if (this.joystickType === _JoystickEnum["default"].JoystickType.FOLLOW) {
      this.node.opacity = 0;
    }
  },
  onEnable: function onEnable() {
    _JoystickEvent["default"].getInstance().on(_JoystickEnum["default"].JoystickEventType.CHANGE_JOYSTICK_TYPE, this._onChangeJoystickType, this);
  },
  onDisable: function onDisable() {
    _JoystickEvent["default"].getInstance().off(_JoystickEnum["default"].JoystickEventType.CHANGE_JOYSTICK_TYPE, this._onChangeJoystickType, this);
  },
  _onChangeJoystickType: function _onChangeJoystickType(type) {
    this.joystickType = type;
    this.node.opacity = type === _JoystickEnum["default"].JoystickType.FIXED ? 255 : 0;
  },
  _initTouchEvent: function _initTouchEvent() {
    // set the size of joystick node to control scale
    this.node.on(cc.Node.EventType.TOUCH_START, this._touchStartEvent, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this._touchMoveEvent, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this._touchEndEvent, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchEndEvent, this);
  },
  _touchStartEvent: function _touchStartEvent(event) {
    _JoystickEvent["default"].getInstance().emit(_JoystickEnum["default"].JoystickEventType.TOUCH_START, "joystick touch start", 10);

    var touchPos = this.node.convertToNodeSpaceAR(event.getLocation());

    if (this.joystickType === _JoystickEnum["default"].JoystickType.FIXED) {
      this._stickPos = this.ring.getPosition(); // 触摸点与圆圈中心的距离

      var distance = touchPos.sub(this.ring.getPosition()).mag(); // 手指在圆圈内触摸,控杆跟随触摸点

      this._radius > distance && this.dot.setPosition(touchPos);
    } else if (this.joystickType === _JoystickEnum["default"].JoystickType.FOLLOW) {
      // 记录摇杆位置，给 touch move 使用
      this._stickPos = touchPos;
      this.node.opacity = 255;
      this._touchLocation = event.getLocation(); // 更改摇杆的位置

      this.ring.setPosition(touchPos);
      this.dot.setPosition(touchPos);
    }
  },
  _touchMoveEvent: function _touchMoveEvent(event) {
    // 如果 touch start 位置和 touch move 相同，禁止移动
    if (this.joystickType === _JoystickEnum["default"].JoystickType.FOLLOW && this._touchLocation === event.getLocation()) {
      return false;
    } // 以圆圈为锚点获取触摸坐标


    var touchPos = this.ring.convertToNodeSpaceAR(event.getLocation());
    var distance = touchPos.mag(); // 由于摇杆的 postion 是以父节点为锚点，所以定位要加上 touch start 时的位置

    var posX = this._stickPos.x + touchPos.x;
    var posY = this._stickPos.y + touchPos.y; // 归一化

    var p = cc.v2(posX, posY).sub(this.ring.getPosition()).normalize();
    var speedType;

    if (this._radius > distance) {
      this.dot.setPosition(cc.v2(posX, posY));
      speedType = _JoystickEnum["default"].SpeedType.NORMAL;
    } else {
      // 控杆永远保持在圈内，并在圈内跟随触摸更新角度
      var x = this._stickPos.x + p.x * this._radius;
      var y = this._stickPos.y + p.y * this._radius;
      this.dot.setPosition(cc.v2(x, y));
      speedType = _JoystickEnum["default"].SpeedType.FAST;
    }

    _JoystickEvent["default"].getInstance().emit(_JoystickEnum["default"].JoystickEventType.TOUCH_MOVE, event, {
      speedType: speedType,
      moveDistance: p
    });
  },
  _touchEndEvent: function _touchEndEvent(event) {
    this.dot.setPosition(this.ring.getPosition());

    if (this.joystickType === _JoystickEnum["default"].JoystickType.FOLLOW) {
      this.node.opacity = 0;
    }

    _JoystickEvent["default"].getInstance().emit(_JoystickEnum["default"].JoystickEventType.TOUCH_END, event, {
      speedType: _JoystickEnum["default"].SpeedType.STOP
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0pveXN0aWNrLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZG90IiwidHlwZSIsIk5vZGUiLCJkaXNwbGF5TmFtZSIsInRvb2x0aXAiLCJyaW5nIiwiam95c3RpY2tUeXBlIiwiSm95c3RpY2tFbnVtIiwiSm95c3RpY2tUeXBlIiwiRklYRUQiLCJkaXJlY3Rpb25UeXBlIiwiRGlyZWN0aW9uVHlwZSIsIkFMTCIsIl9zdGlja1BvcyIsIl90b3VjaExvY2F0aW9uIiwib25Mb2FkIiwiX3JhZGl1cyIsIndpZHRoIiwiX2luaXRUb3VjaEV2ZW50IiwiRk9MTE9XIiwibm9kZSIsIm9wYWNpdHkiLCJvbkVuYWJsZSIsIkpveXN0aWNrRXZlbnQiLCJnZXRJbnN0YW5jZSIsIm9uIiwiSm95c3RpY2tFdmVudFR5cGUiLCJDSEFOR0VfSk9ZU1RJQ0tfVFlQRSIsIl9vbkNoYW5nZUpveXN0aWNrVHlwZSIsIm9uRGlzYWJsZSIsIm9mZiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiX3RvdWNoU3RhcnRFdmVudCIsIlRPVUNIX01PVkUiLCJfdG91Y2hNb3ZlRXZlbnQiLCJUT1VDSF9FTkQiLCJfdG91Y2hFbmRFdmVudCIsIlRPVUNIX0NBTkNFTCIsImV2ZW50IiwiZW1pdCIsInRvdWNoUG9zIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJnZXRMb2NhdGlvbiIsImdldFBvc2l0aW9uIiwiZGlzdGFuY2UiLCJzdWIiLCJtYWciLCJzZXRQb3NpdGlvbiIsInBvc1giLCJ4IiwicG9zWSIsInkiLCJwIiwidjIiLCJub3JtYWxpemUiLCJzcGVlZFR5cGUiLCJTcGVlZFR5cGUiLCJOT1JNQUwiLCJGQVNUIiwibW92ZURpc3RhbmNlIiwiU1RPUCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUs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QztNQUNBLElBQU1vQyxDQUFDLEdBQUcsS0FBS3ZDLFNBQUwsQ0FBZXVDLENBQWYsR0FBbUJDLENBQUMsQ0FBQ0QsQ0FBRixHQUFNLEtBQUtwQyxPQUF4QztNQUNBLEtBQUtoQixHQUFMLENBQVNnRCxXQUFULENBQXFCcEQsRUFBRSxDQUFDMEQsRUFBSCxDQUFNSixDQUFOLEVBQVNFLENBQVQsQ0FBckI7TUFFQUksU0FBUyxHQUFHakQsd0JBQUEsQ0FBYWtELFNBQWIsQ0FBdUJFLElBQW5DO0lBQ0g7O0lBRURwQyx5QkFBQSxDQUFjQyxXQUFkLEdBQTRCZ0IsSUFBNUIsQ0FBaUNqQyx3QkFBQSxDQUFhbUIsaUJBQWIsQ0FBK0JRLFVBQWhFLEVBQTRFSyxLQUE1RSxFQUFtRjtNQUFDaUIsU0FBUyxFQUFFQSxTQUFaO01BQXVCSSxZQUFZLEVBQUVQO0lBQXJDLENBQW5GO0VBQ0gsQ0FwSUk7RUFzSUxoQixjQXRJSywwQkFzSVVFLEtBdElWLEVBc0lpQjtJQUNsQixLQUFLdkMsR0FBTCxDQUFTZ0QsV0FBVCxDQUFxQixLQUFLM0MsSUFBTCxDQUFVdUMsV0FBVixFQUFyQjs7SUFDQSxJQUFJLEtBQUt0QyxZQUFMLEtBQXNCQyx3QkFBQSxDQUFhQyxZQUFiLENBQTBCVyxNQUFwRCxFQUE0RDtNQUN4RCxLQUFLQyxJQUFMLENBQVVDLE9BQVYsR0FBb0IsQ0FBcEI7SUFDSDs7SUFFREUseUJBQUEsQ0FBY0MsV0FBZCxHQUE0QmdCLElBQTVCLENBQWlDakMsd0JBQUEsQ0FBYW1CLGlCQUFiLENBQStCVSxTQUFoRSxFQUEyRUcsS0FBM0UsRUFBa0Y7TUFBQ2lCLFNBQVMsRUFBRWpELHdCQUFBLENBQWFrRCxTQUFiLENBQXVCSTtJQUFuQyxDQUFsRjtFQUNIO0FBN0lJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb3lzdGlja0VudW0gZnJvbSAnSm95c3RpY2tFbnVtJztcbmltcG9ydCBKb3lzdGlja0V2ZW50IGZyb20gJ0pveXN0aWNrRXZlbnQnO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBkb3Q6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdEb3QnLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+aRh+adhuaTjee6teeCuScsXG4gICAgICAgIH0sXG4gICAgICAgIHJpbmc6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdSaW5nJyxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfmkYfmnYbog4zmma/oioLngrknLFxuICAgICAgICB9LFxuXG4gICAgICAgIGpveXN0aWNrVHlwZToge1xuICAgICAgICAgICAgZGVmYXVsdDogSm95c3RpY2tFbnVtLkpveXN0aWNrVHlwZS5GSVhFRCxcbiAgICAgICAgICAgIHR5cGU6IEpveXN0aWNrRW51bS5Kb3lzdGlja1R5cGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ1RvdWNoIFR5cGUnLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+inpuaRuOexu+WeiycsXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGlyZWN0aW9uVHlwZToge1xuICAgICAgICAgICAgZGVmYXVsdDogSm95c3RpY2tFbnVtLkRpcmVjdGlvblR5cGUuQUxMLFxuICAgICAgICAgICAgdHlwZTogSm95c3RpY2tFbnVtLkRpcmVjdGlvblR5cGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0RpcmVjdGlvbiBUeXBlJyxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfmlrnlkJHnsbvlnosnLFxuICAgICAgICB9LFxuXG4gICAgICAgIF9zdGlja1Bvczoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICB0b29sdGlwOiAn5pGH5p2G5omA5Zyo5L2N572uJyxcbiAgICAgICAgfSxcbiAgICAgICAgX3RvdWNoTG9jYXRpb246IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+inpuaRuOS9jee9ricsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5fcmFkaXVzID0gdGhpcy5yaW5nLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy5faW5pdFRvdWNoRXZlbnQoKTtcbiAgICAgICAgLy8gaGlkZSBqb3lzdGljayB3aGVuIGZvbGxvd1xuICAgICAgICBpZiAodGhpcy5qb3lzdGlja1R5cGUgPT09IEpveXN0aWNrRW51bS5Kb3lzdGlja1R5cGUuRk9MTE9XKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIEpveXN0aWNrRXZlbnQuZ2V0SW5zdGFuY2UoKS5vbihKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGUuQ0hBTkdFX0pPWVNUSUNLX1RZUEUsIHRoaXMuX29uQ2hhbmdlSm95c3RpY2tUeXBlLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICBKb3lzdGlja0V2ZW50LmdldEluc3RhbmNlKCkub2ZmKEpveXN0aWNrRW51bS5Kb3lzdGlja0V2ZW50VHlwZS5DSEFOR0VfSk9ZU1RJQ0tfVFlQRSwgdGhpcy5fb25DaGFuZ2VKb3lzdGlja1R5cGUsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBfb25DaGFuZ2VKb3lzdGlja1R5cGUodHlwZSkge1xuICAgICAgICB0aGlzLmpveXN0aWNrVHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gdHlwZSA9PT0gSm95c3RpY2tFbnVtLkpveXN0aWNrVHlwZS5GSVhFRCA/IDI1NSA6IDA7XG4gICAgfSxcblxuICAgIF9pbml0VG91Y2hFdmVudCgpIHtcbiAgICAgICAgLy8gc2V0IHRoZSBzaXplIG9mIGpveXN0aWNrIG5vZGUgdG8gY29udHJvbCBzY2FsZVxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuX3RvdWNoU3RhcnRFdmVudCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLl90b3VjaE1vdmVFdmVudCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX3RvdWNoRW5kRXZlbnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLl90b3VjaEVuZEV2ZW50LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgX3RvdWNoU3RhcnRFdmVudChldmVudCkge1xuICAgICAgICBKb3lzdGlja0V2ZW50LmdldEluc3RhbmNlKCkuZW1pdChKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGUuVE9VQ0hfU1RBUlQsIFwiam95c3RpY2sgdG91Y2ggc3RhcnRcIiwgMTApO1xuICAgICAgICBjb25zdCB0b3VjaFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcblxuICAgICAgICBpZiAodGhpcy5qb3lzdGlja1R5cGUgPT09IEpveXN0aWNrRW51bS5Kb3lzdGlja1R5cGUuRklYRUQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0aWNrUG9zID0gdGhpcy5yaW5nLmdldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgIC8vIOinpuaRuOeCueS4juWchuWciOS4reW/g+eahOi3neemu1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0b3VjaFBvcy5zdWIodGhpcy5yaW5nLmdldFBvc2l0aW9uKCkpLm1hZygpO1xuXG4gICAgICAgICAgICAvLyDmiYvmjIflnKjlnIblnIjlhoXop6bmkbgs5o6n5p2G6Lef6ZqP6Kem5pG454K5XG4gICAgICAgICAgICB0aGlzLl9yYWRpdXMgPiBkaXN0YW5jZSAmJiB0aGlzLmRvdC5zZXRQb3NpdGlvbih0b3VjaFBvcyk7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmpveXN0aWNrVHlwZSA9PT0gSm95c3RpY2tFbnVtLkpveXN0aWNrVHlwZS5GT0xMT1cpIHtcblxuICAgICAgICAgICAgLy8g6K6w5b2V5pGH5p2G5L2N572u77yM57uZIHRvdWNoIG1vdmUg5L2/55SoXG4gICAgICAgICAgICB0aGlzLl9zdGlja1BvcyA9IHRvdWNoUG9zO1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICB0aGlzLl90b3VjaExvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcblxuICAgICAgICAgICAgLy8g5pu05pS55pGH5p2G55qE5L2N572uXG4gICAgICAgICAgICB0aGlzLnJpbmcuc2V0UG9zaXRpb24odG91Y2hQb3MpO1xuICAgICAgICAgICAgdGhpcy5kb3Quc2V0UG9zaXRpb24odG91Y2hQb3MpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF90b3VjaE1vdmVFdmVudChldmVudCkge1xuICAgICAgICAvLyDlpoLmnpwgdG91Y2ggc3RhcnQg5L2N572u5ZKMIHRvdWNoIG1vdmUg55u45ZCM77yM56aB5q2i56e75YqoXG4gICAgICAgIGlmICh0aGlzLmpveXN0aWNrVHlwZSA9PT0gSm95c3RpY2tFbnVtLkpveXN0aWNrVHlwZS5GT0xMT1cgJiYgdGhpcy5fdG91Y2hMb2NhdGlvbiA9PT0gZXZlbnQuZ2V0TG9jYXRpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5Lul5ZyG5ZyI5Li66ZSa54K56I635Y+W6Kem5pG45Z2Q5qCHXG4gICAgICAgIGNvbnN0IHRvdWNoUG9zID0gdGhpcy5yaW5nLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRvdWNoUG9zLm1hZygpO1xuXG4gICAgICAgIC8vIOeUseS6juaRh+adhueahCBwb3N0aW9uIOaYr+S7peeItuiKgueCueS4uumUmueCue+8jOaJgOS7peWumuS9jeimgeWKoOS4iiB0b3VjaCBzdGFydCDml7bnmoTkvY3nva5cbiAgICAgICAgY29uc3QgcG9zWCA9IHRoaXMuX3N0aWNrUG9zLnggKyB0b3VjaFBvcy54O1xuICAgICAgICBjb25zdCBwb3NZID0gdGhpcy5fc3RpY2tQb3MueSArIHRvdWNoUG9zLnk7XG5cbiAgICAgICAgLy8g5b2S5LiA5YyWXG4gICAgICAgIGNvbnN0IHAgPSBjYy52Mihwb3NYLCBwb3NZKS5zdWIodGhpcy5yaW5nLmdldFBvc2l0aW9uKCkpLm5vcm1hbGl6ZSgpO1xuXG4gICAgICAgIGxldCBzcGVlZFR5cGU7XG5cbiAgICAgICAgaWYgKHRoaXMuX3JhZGl1cyA+IGRpc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmRvdC5zZXRQb3NpdGlvbihjYy52Mihwb3NYLCBwb3NZKSk7XG5cbiAgICAgICAgICAgIHNwZWVkVHlwZSA9IEpveXN0aWNrRW51bS5TcGVlZFR5cGUuTk9STUFMO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5o6n5p2G5rC46L+c5L+d5oyB5Zyo5ZyI5YaF77yM5bm25Zyo5ZyI5YaF6Lef6ZqP6Kem5pG45pu05paw6KeS5bqmXG4gICAgICAgICAgICBjb25zdCB4ID0gdGhpcy5fc3RpY2tQb3MueCArIHAueCAqIHRoaXMuX3JhZGl1cztcbiAgICAgICAgICAgIGNvbnN0IHkgPSB0aGlzLl9zdGlja1Bvcy55ICsgcC55ICogdGhpcy5fcmFkaXVzO1xuICAgICAgICAgICAgdGhpcy5kb3Quc2V0UG9zaXRpb24oY2MudjIoeCwgeSkpO1xuXG4gICAgICAgICAgICBzcGVlZFR5cGUgPSBKb3lzdGlja0VudW0uU3BlZWRUeXBlLkZBU1Q7XG4gICAgICAgIH1cblxuICAgICAgICBKb3lzdGlja0V2ZW50LmdldEluc3RhbmNlKCkuZW1pdChKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGUuVE9VQ0hfTU9WRSwgZXZlbnQsIHtzcGVlZFR5cGU6IHNwZWVkVHlwZSwgbW92ZURpc3RhbmNlOiBwfSk7XG4gICAgfSxcblxuICAgIF90b3VjaEVuZEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKHRoaXMucmluZy5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgaWYgKHRoaXMuam95c3RpY2tUeXBlID09PSBKb3lzdGlja0VudW0uSm95c3RpY2tUeXBlLkZPTExPVykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgSm95c3RpY2tFdmVudC5nZXRJbnN0YW5jZSgpLmVtaXQoSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLlRPVUNIX0VORCwgZXZlbnQsIHtzcGVlZFR5cGU6IEpveXN0aWNrRW51bS5TcGVlZFR5cGUuU1RPUH0pO1xuICAgIH0sXG5cbn0pO1xuIl19