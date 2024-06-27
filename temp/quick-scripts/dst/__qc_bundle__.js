
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Joystick');
require('./assets/scripts/JoystickEnum');
require('./assets/scripts/JoystickEvent');
require('./assets/scripts/Player');
require('./assets/scripts/button');
require('./assets/scripts/camera');
require('./assets/scripts/game');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/camera.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db0a7f3WttBp4yhBZlMjp+O', 'camera');
// scripts/camera.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    playerNode: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  update: function update(dt) {
    if (!this.playerNode) return;
    var w_pos = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0));
    var n_pos = this.node.parent.convertToNodeSpaceAR(w_pos);
    this.node.position = n_pos;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NhbWVyYS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBsYXllck5vZGUiLCJOb2RlIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsIndfcG9zIiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwidjIiLCJuX3BvcyIsIm5vZGUiLCJwYXJlbnQiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsVUFBVSxFQUFFSixFQUFFLENBQUNLO0VBRFAsQ0FIUDtFQU9MO0VBRUE7RUFFQUMsS0FYSyxtQkFXSSxDQUVSLENBYkk7RUFlTEMsTUFmSyxrQkFlR0MsRUFmSCxFQWVPO0lBQ1IsSUFBRyxDQUFDLEtBQUtKLFVBQVQsRUFBcUI7SUFDckIsSUFBSUssS0FBSyxHQUFHLEtBQUtMLFVBQUwsQ0FBZ0JNLHFCQUFoQixDQUFzQ1YsRUFBRSxDQUFDVyxFQUFILENBQU0sQ0FBTixFQUFTLENBQVQsQ0FBdEMsQ0FBWjtJQUNBLElBQUlDLEtBQUssR0FBRyxLQUFLQyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLG9CQUFqQixDQUFzQ04sS0FBdEMsQ0FBWjtJQUNBLEtBQUtJLElBQUwsQ0FBVUcsUUFBVixHQUFxQkosS0FBckI7RUFDSDtBQXBCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBwbGF5ZXJOb2RlOiBjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIGlmKCF0aGlzLnBsYXllck5vZGUpIHJldHVybjtcbiAgICAgICAgbGV0IHdfcG9zID0gdGhpcy5wbGF5ZXJOb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgIGxldCBuX3BvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod19wb3MpO1xuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBuX3BvcztcbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/JoystickEnum.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b5a5Re7qpJIKGtGrt4O6rv', 'JoystickEnum');
// scripts/JoystickEnum.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _default = {
  JoystickType: cc.Enum({
    FIXED: 0,
    FOLLOW: 1
  }),
  DirectionType: cc.Enum({
    FOUR: 4,
    EIGHT: 8,
    ALL: 0
  }),
  SpeedType: cc.Enum({
    STOP: 0,
    NORMAL: 1,
    FAST: 2
  }),
  JoystickEventType: cc.Enum({
    TOUCH_START: "touchStart",
    TOUCH_MOVE: "touchMove",
    TOUCH_END: "touchEnd",
    CHANGE_JOYSTICK_TYPE: "changeJoystickType"
  })
};
exports["default"] = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0pveXN0aWNrRW51bS5qcyJdLCJuYW1lcyI6WyJKb3lzdGlja1R5cGUiLCJjYyIsIkVudW0iLCJGSVhFRCIsIkZPTExPVyIsIkRpcmVjdGlvblR5cGUiLCJGT1VSIiwiRUlHSFQiLCJBTEwiLCJTcGVlZFR5cGUiLCJTVE9QIiwiTk9STUFMIiwiRkFTVCIsIkpveXN0aWNrRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJUT1VDSF9NT1ZFIiwiVE9VQ0hfRU5EIiwiQ0hBTkdFX0pPWVNUSUNLX1RZUEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFBZTtFQUNYQSxZQUFZLEVBQUVDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRO0lBQ2xCQyxLQUFLLEVBQUUsQ0FEVztJQUVsQkMsTUFBTSxFQUFFO0VBRlUsQ0FBUixDQURIO0VBTVhDLGFBQWEsRUFBRUosRUFBRSxDQUFDQyxJQUFILENBQVE7SUFDbkJJLElBQUksRUFBRSxDQURhO0lBRW5CQyxLQUFLLEVBQUUsQ0FGWTtJQUduQkMsR0FBRyxFQUFFO0VBSGMsQ0FBUixDQU5KO0VBWVhDLFNBQVMsRUFBRVIsRUFBRSxDQUFDQyxJQUFILENBQVE7SUFDZlEsSUFBSSxFQUFFLENBRFM7SUFFZkMsTUFBTSxFQUFFLENBRk87SUFHZkMsSUFBSSxFQUFFO0VBSFMsQ0FBUixDQVpBO0VBa0JYQyxpQkFBaUIsRUFBRVosRUFBRSxDQUFDQyxJQUFILENBQVE7SUFDdkJZLFdBQVcsRUFBRSxZQURVO0lBRXZCQyxVQUFVLEVBQUUsV0FGVztJQUd2QkMsU0FBUyxFQUFFLFVBSFk7SUFLdkJDLG9CQUFvQixFQUFFO0VBTEMsQ0FBUjtBQWxCUiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIEpveXN0aWNrVHlwZTogY2MuRW51bSh7XG4gICAgICAgIEZJWEVEOiAwLFxuICAgICAgICBGT0xMT1c6IDEsXG4gICAgfSksXG5cbiAgICBEaXJlY3Rpb25UeXBlOiBjYy5FbnVtKHtcbiAgICAgICAgRk9VUjogNCxcbiAgICAgICAgRUlHSFQ6IDgsXG4gICAgICAgIEFMTDogMCxcbiAgICB9KSxcblxuICAgIFNwZWVkVHlwZTogY2MuRW51bSh7XG4gICAgICAgIFNUT1A6IDAsXG4gICAgICAgIE5PUk1BTDogMSxcbiAgICAgICAgRkFTVDogMlxuICAgIH0pLFxuXG4gICAgSm95c3RpY2tFdmVudFR5cGU6IGNjLkVudW0oe1xuICAgICAgICBUT1VDSF9TVEFSVDogXCJ0b3VjaFN0YXJ0XCIsXG4gICAgICAgIFRPVUNIX01PVkU6IFwidG91Y2hNb3ZlXCIsXG4gICAgICAgIFRPVUNIX0VORDogXCJ0b3VjaEVuZFwiLFxuXG4gICAgICAgIENIQU5HRV9KT1lTVElDS19UWVBFOiBcImNoYW5nZUpveXN0aWNrVHlwZVwiXG4gICAgfSksXG59O1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/JoystickEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba937pp7tZKTLKCnDZAsStd', 'JoystickEvent');
// scripts/JoystickEvent.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var JoystickEvent = cc.Class({
  properties: {
    _event: null
  },
  ctor: function ctor() {
    this._event = new cc.EventTarget();
  },
  on: function on(eventType, callFunc, target) {
    this._event.on(eventType, callFunc, target);
  },
  off: function off(eventType, callFunc, target) {
    this._event.off(eventType, callFunc, target);
  },

  /**
   *
   * @param eventType JoystickEnum.JoystickEventType
   * @param arg
   */
  emit: function emit(eventType) {
    var _this$_event;

    for (var _len = arguments.length, arg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      arg[_key - 1] = arguments[_key];
    }

    (_this$_event = this._event).emit.apply(_this$_event, [eventType].concat(arg));
  }
});
var _instance = null;

JoystickEvent.getInstance = function () {
  !_instance && (_instance = new JoystickEvent());
  return _instance;
};

var _default = JoystickEvent;
exports["default"] = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0pveXN0aWNrRXZlbnQuanMiXSwibmFtZXMiOlsiSm95c3RpY2tFdmVudCIsImNjIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiX2V2ZW50IiwiY3RvciIsIkV2ZW50VGFyZ2V0Iiwib24iLCJldmVudFR5cGUiLCJjYWxsRnVuYyIsInRhcmdldCIsIm9mZiIsImVtaXQiLCJhcmciLCJfaW5zdGFuY2UiLCJnZXRJbnN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFFekJDLFVBQVUsRUFBRTtJQUNSQyxNQUFNLEVBQUU7RUFEQSxDQUZhO0VBTXpCQyxJQU55QixrQkFNbEI7SUFDSCxLQUFLRCxNQUFMLEdBQWMsSUFBSUgsRUFBRSxDQUFDSyxXQUFQLEVBQWQ7RUFDSCxDQVJ3QjtFQVV6QkMsRUFWeUIsY0FVdEJDLFNBVnNCLEVBVVhDLFFBVlcsRUFVREMsTUFWQyxFQVVPO0lBQzVCLEtBQUtOLE1BQUwsQ0FBWUcsRUFBWixDQUFlQyxTQUFmLEVBQTBCQyxRQUExQixFQUFvQ0MsTUFBcEM7RUFDSCxDQVp3QjtFQWN6QkMsR0FkeUIsZUFjckJILFNBZHFCLEVBY1ZDLFFBZFUsRUFjQUMsTUFkQSxFQWNRO0lBQzdCLEtBQUtOLE1BQUwsQ0FBWU8sR0FBWixDQUFnQkgsU0FBaEIsRUFBMkJDLFFBQTNCLEVBQXFDQyxNQUFyQztFQUNILENBaEJ3Qjs7RUFrQnpCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSUUsSUF2QnlCLGdCQXVCcEJKLFNBdkJvQixFQXVCRDtJQUFBOztJQUFBLGtDQUFMSyxHQUFLO01BQUxBLEdBQUs7SUFBQTs7SUFDcEIscUJBQUtULE1BQUwsRUFBWVEsSUFBWixzQkFBaUJKLFNBQWpCLFNBQStCSyxHQUEvQjtFQUNIO0FBekJ3QixDQUFULENBQXBCO0FBNkJBLElBQUlDLFNBQVMsR0FBRyxJQUFoQjs7QUFDQWQsYUFBYSxDQUFDZSxXQUFkLEdBQTRCLFlBQVk7RUFDcEMsQ0FBQ0QsU0FBRCxLQUFlQSxTQUFTLEdBQUcsSUFBSWQsYUFBSixFQUEzQjtFQUVBLE9BQU9jLFNBQVA7QUFDSCxDQUpEOztlQU1lZCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IEpveXN0aWNrRXZlbnQgPSBjYy5DbGFzcyh7XG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIF9ldmVudDogbnVsbFxuICAgIH0sXG5cbiAgICBjdG9yKCkge1xuICAgICAgICB0aGlzLl9ldmVudCA9IG5ldyBjYy5FdmVudFRhcmdldCgpO1xuICAgIH0sXG5cbiAgICBvbihldmVudFR5cGUsIGNhbGxGdW5jLCB0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5fZXZlbnQub24oZXZlbnRUeXBlLCBjYWxsRnVuYywgdGFyZ2V0KTtcbiAgICB9LFxuXG4gICAgb2ZmKGV2ZW50VHlwZSwgY2FsbEZ1bmMsIHRhcmdldCkge1xuICAgICAgICB0aGlzLl9ldmVudC5vZmYoZXZlbnRUeXBlLCBjYWxsRnVuYywgdGFyZ2V0KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnRUeXBlIEpveXN0aWNrRW51bS5Kb3lzdGlja0V2ZW50VHlwZVxuICAgICAqIEBwYXJhbSBhcmdcbiAgICAgKi9cbiAgICBlbWl0KGV2ZW50VHlwZSwgLi4uYXJnKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50LmVtaXQoZXZlbnRUeXBlLCAuLi5hcmcpXG4gICAgfVxuXG59KTtcblxubGV0IF9pbnN0YW5jZSA9IG51bGw7XG5Kb3lzdGlja0V2ZW50LmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICFfaW5zdGFuY2UgJiYgKF9pbnN0YW5jZSA9IG5ldyBKb3lzdGlja0V2ZW50KCkpO1xuXG4gICAgcmV0dXJuIF9pbnN0YW5jZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEpveXN0aWNrRXZlbnQ7Il19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2c108uDhc9MFo7Cuh+zopoe', 'game');
// scripts/game.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    tiledMap: cc.TiledMap
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var p = cc.director.getPhysicsManager();
    p.enabled = true;
    p.debugDrawFlags = false;
    p.gravity = cc.v2(0, 0);
    document.addEventListener('WeixinJSBridgeReady', function () {
      var _this = this;

      cc.resources.load('audios/rock', cc.AudioClip, function (err, audioClip) {
        var audioSource = _this.addComponent(cc.AudioSource);

        audioSource.clip = audioClip;
        audioSource.play();
      });
    });
  },
  start: function start() {
    var tiledSize = this.tiledMap.getTileSize();
    var layer = this.tiledMap.getLayer('fences');
    var layerSize = layer.getLayerSize();

    for (var i = 0; i < layerSize.width; i++) {
      for (var j = 0; j < layerSize.height; j++) {
        var tiled = layer.getTiledTileAt(i, j, true);

        if (tiled.gid != 0) {
          tiled.node.group = 'wall';
          var body = tiled.node.addComponent(cc.RigidBody);
          body.type = cc.RigidBodyType.Static;
          var collider = tiled.node.addComponent(cc.PhysicsBoxCollider);
          collider.offset = cc.v2(tiledSize.width / 2, tiledSize.height / 2);
          collider.size = tiledSize;
          collider.apply();
        }
      }
    }
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0aWxlZE1hcCIsIlRpbGVkTWFwIiwib25Mb2FkIiwicCIsImRpcmVjdG9yIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJlbmFibGVkIiwiZGVidWdEcmF3RmxhZ3MiLCJncmF2aXR5IiwidjIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNvdXJjZXMiLCJsb2FkIiwiQXVkaW9DbGlwIiwiZXJyIiwiYXVkaW9DbGlwIiwiYXVkaW9Tb3VyY2UiLCJhZGRDb21wb25lbnQiLCJBdWRpb1NvdXJjZSIsImNsaXAiLCJwbGF5Iiwic3RhcnQiLCJ0aWxlZFNpemUiLCJnZXRUaWxlU2l6ZSIsImxheWVyIiwiZ2V0TGF5ZXIiLCJsYXllclNpemUiLCJnZXRMYXllclNpemUiLCJpIiwid2lkdGgiLCJqIiwiaGVpZ2h0IiwidGlsZWQiLCJnZXRUaWxlZFRpbGVBdCIsImdpZCIsIm5vZGUiLCJncm91cCIsImJvZHkiLCJSaWdpZEJvZHkiLCJ0eXBlIiwiUmlnaWRCb2R5VHlwZSIsIlN0YXRpYyIsImNvbGxpZGVyIiwiUGh5c2ljc0JveENvbGxpZGVyIiwib2Zmc2V0Iiwic2l6ZSIsImFwcGx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFFSixFQUFFLENBQUNLO0VBREwsQ0FIUDtFQU9MO0VBRUFDLE1BVEssb0JBU0s7SUFDTixJQUFJQyxDQUFDLEdBQUdQLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZQyxpQkFBWixFQUFSO0lBQ0FGLENBQUMsQ0FBQ0csT0FBRixHQUFZLElBQVo7SUFDQUgsQ0FBQyxDQUFDSSxjQUFGLEdBQW1CLEtBQW5CO0lBQ0FKLENBQUMsQ0FBQ0ssT0FBRixHQUFZWixFQUFFLENBQUNhLEVBQUgsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUFaO0lBRUFDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIscUJBQTFCLEVBQWlELFlBQVk7TUFBQTs7TUFDekRmLEVBQUUsQ0FBQ2dCLFNBQUgsQ0FBYUMsSUFBYixDQUFrQixhQUFsQixFQUFpQ2pCLEVBQUUsQ0FBQ2tCLFNBQXBDLEVBQStDLFVBQUNDLEdBQUQsRUFBTUMsU0FBTixFQUFvQjtRQUMvRCxJQUFJQyxXQUFXLEdBQUcsS0FBSSxDQUFDQyxZQUFMLENBQWtCdEIsRUFBRSxDQUFDdUIsV0FBckIsQ0FBbEI7O1FBQ0FGLFdBQVcsQ0FBQ0csSUFBWixHQUFtQkosU0FBbkI7UUFDQUMsV0FBVyxDQUFDSSxJQUFaO01BQ0gsQ0FKRDtJQUtILENBTkQ7RUFPSCxDQXRCSTtFQXdCTEMsS0F4QkssbUJBd0JJO0lBQ0wsSUFBSUMsU0FBUyxHQUFHLEtBQUt2QixRQUFMLENBQWN3QixXQUFkLEVBQWhCO0lBQ0EsSUFBSUMsS0FBSyxHQUFHLEtBQUt6QixRQUFMLENBQWMwQixRQUFkLENBQXVCLFFBQXZCLENBQVo7SUFDQSxJQUFJQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csWUFBTixFQUFoQjs7SUFFQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLFNBQVMsQ0FBQ0csS0FBOUIsRUFBcUNELENBQUMsRUFBdEMsRUFBMEM7TUFDdEMsS0FBSSxJQUFJRSxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUNKLFNBQVMsQ0FBQ0ssTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBcUM7UUFDakMsSUFBSUUsS0FBSyxHQUFHUixLQUFLLENBQUNTLGNBQU4sQ0FBcUJMLENBQXJCLEVBQXdCRSxDQUF4QixFQUEyQixJQUEzQixDQUFaOztRQUNBLElBQUdFLEtBQUssQ0FBQ0UsR0FBTixJQUFhLENBQWhCLEVBQWtCO1VBQ2RGLEtBQUssQ0FBQ0csSUFBTixDQUFXQyxLQUFYLEdBQW1CLE1BQW5CO1VBQ0EsSUFBSUMsSUFBSSxHQUFHTCxLQUFLLENBQUNHLElBQU4sQ0FBV2xCLFlBQVgsQ0FBd0J0QixFQUFFLENBQUMyQyxTQUEzQixDQUFYO1VBQ0FELElBQUksQ0FBQ0UsSUFBTCxHQUFZNUMsRUFBRSxDQUFDNkMsYUFBSCxDQUFpQkMsTUFBN0I7VUFDQSxJQUFJQyxRQUFRLEdBQUdWLEtBQUssQ0FBQ0csSUFBTixDQUFXbEIsWUFBWCxDQUF3QnRCLEVBQUUsQ0FBQ2dELGtCQUEzQixDQUFmO1VBQ0FELFFBQVEsQ0FBQ0UsTUFBVCxHQUFrQmpELEVBQUUsQ0FBQ2EsRUFBSCxDQUFNYyxTQUFTLENBQUNPLEtBQVYsR0FBZ0IsQ0FBdEIsRUFBeUJQLFNBQVMsQ0FBQ1MsTUFBVixHQUFpQixDQUExQyxDQUFsQjtVQUNBVyxRQUFRLENBQUNHLElBQVQsR0FBZ0J2QixTQUFoQjtVQUNBb0IsUUFBUSxDQUFDSSxLQUFUO1FBQ0g7TUFDSjtJQUNKO0VBRUosQ0E1Q0ksQ0E4Q0w7O0FBOUNLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGlsZWRNYXA6IGNjLlRpbGVkTWFwXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgbGV0IHAgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xuICAgICAgICBwLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBwLmRlYnVnRHJhd0ZsYWdzID0gZmFsc2U7XG4gICAgICAgIHAuZ3Jhdml0eSA9IGNjLnYyKDAsMCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignV2VpeGluSlNCcmlkZ2VSZWFkeScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKCdhdWRpb3Mvcm9jaycsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGF1ZGlvU291cmNlID0gdGhpcy5hZGRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpO1xuICAgICAgICAgICAgICAgIGF1ZGlvU291cmNlLmNsaXAgPSBhdWRpb0NsaXA7XG4gICAgICAgICAgICAgICAgYXVkaW9Tb3VyY2UucGxheSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGxldCB0aWxlZFNpemUgPSB0aGlzLnRpbGVkTWFwLmdldFRpbGVTaXplKCk7XG4gICAgICAgIGxldCBsYXllciA9IHRoaXMudGlsZWRNYXAuZ2V0TGF5ZXIoJ2ZlbmNlcycpO1xuICAgICAgICBsZXQgbGF5ZXJTaXplID0gbGF5ZXIuZ2V0TGF5ZXJTaXplKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXllclNpemUud2lkdGg7IGkrKykge1xuICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8bGF5ZXJTaXplLmhlaWdodDsgaisrKXtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZWQgPSBsYXllci5nZXRUaWxlZFRpbGVBdChpLCBqLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpZih0aWxlZC5naWQgIT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIHRpbGVkLm5vZGUuZ3JvdXAgPSAnd2FsbCc7XG4gICAgICAgICAgICAgICAgICAgIGxldCBib2R5ID0gdGlsZWQubm9kZS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgICAgICAgICAgICAgYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2xsaWRlciA9IHRpbGVkLm5vZGUuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyLm9mZnNldCA9IGNjLnYyKHRpbGVkU2l6ZS53aWR0aC8yLCB0aWxlZFNpemUuaGVpZ2h0LzIpO1xuICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5zaXplID0gdGlsZWRTaXplO1xuICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5hcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/button.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '202feq11lZJq6c/aCH3HPlr', 'button');
// scripts/button.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.node.on('click', this.ButtonClick, this);
  },
  ButtonClick: function ButtonClick() {
    this.node.opacity = 0; //destroy

    this.node.destroy();
  },
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2J1dHRvbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIm5vZGUiLCJvbiIsIkJ1dHRvbkNsaWNrIiwib3BhY2l0eSIsImRlc3Ryb3kiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLEVBSFA7RUFPTDtFQUVBQyxNQVRLLG9CQVNLO0lBQ04sS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsT0FBYixFQUFzQixLQUFLQyxXQUEzQixFQUF3QyxJQUF4QztFQUNILENBWEk7RUFhTEEsV0FBVyxFQUFFLHVCQUFZO0lBQ3JCLEtBQUtGLElBQUwsQ0FBVUcsT0FBVixHQUFvQixDQUFwQixDQURxQixDQUVyQjs7SUFDQSxLQUFLSCxJQUFMLENBQVVJLE9BQVY7RUFDSCxDQWpCSTtFQW1CTEMsS0FuQkssbUJBbUJJLENBRVIsQ0FyQkksQ0F1Qkw7O0FBdkJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbignY2xpY2snLCB0aGlzLkJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgQnV0dG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICAvL2Rlc3Ryb3lcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBcbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------
