
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
require('./assets/scripts/Bomb');
require('./assets/scripts/ExplosionEffect');
require('./assets/scripts/GameManager');
require('./assets/scripts/Joystick');
require('./assets/scripts/JoystickEnum');
require('./assets/scripts/JoystickEvent');
require('./assets/scripts/Monster');
require('./assets/scripts/Player');
require('./assets/scripts/bullets');
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
                    var __filename = 'preview-scripts/assets/scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '710de85chpE1raL8037SFoX', 'GameManager');
// scripts/GameManager.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    starCountLabel: {
      "default": null,
      type: cc.Label,
      tooltip: '显示星星数量的Label组件'
    },
    goldLabel: {
      "default": null,
      type: cc.Label,
      tooltip: '金币数量显示文本'
    },
    tiledMap: {
      "default": null,
      type: cc.TiledMap,
      tooltip: '地图'
    },
    starCount: {
      "default": 0,
      type: cc.Integer,
      tooltip: '星星数量'
    },
    _goldCount: 0
  },
  statics: {
    instance: null
  },
  onLoad: function onLoad() {
    // 确保在场景中只有一个 GameManager 实例
    if (GameManager.instance) {
      this.node.destroy();
      return;
    }

    GameManager.instance = this; // 初始化计数

    this.starCount = 0;
    this._goldCount = 0; // 更新显示

    this.updateStarDisplay(); // 检查并输出调试信息

    if (!this.starCountLabel) {
      cc.error('GameManager: starCountLabel 未设置!');
    }
  },
  addStar: function addStar() {
    this.starCount++;
    this.updateStarDisplay();
  },
  updateStarDisplay: function updateStarDisplay() {
    if (this.starCountLabel) {
      this.starCountLabel.string = "" + this.starCount;
      cc.log('GameManager: 更新星星数量为:', this.starCount);
    } else {
      cc.error('GameManager: starCountLabel 未设置，无法显示星星数量!');
    }
  },
  updateGold: function updateGold(amount) {
    this._goldCount = amount;
    cc.log('GameManager: 更新金币数量为:', this._goldCount);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWVNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhckNvdW50TGFiZWwiLCJ0eXBlIiwiTGFiZWwiLCJ0b29sdGlwIiwiZ29sZExhYmVsIiwidGlsZWRNYXAiLCJUaWxlZE1hcCIsInN0YXJDb3VudCIsIkludGVnZXIiLCJfZ29sZENvdW50Iiwic3RhdGljcyIsImluc3RhbmNlIiwib25Mb2FkIiwiR2FtZU1hbmFnZXIiLCJub2RlIiwiZGVzdHJveSIsInVwZGF0ZVN0YXJEaXNwbGF5IiwiZXJyb3IiLCJhZGRTdGFyIiwic3RyaW5nIiwibG9nIiwidXBkYXRlR29sZCIsImFtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLGNBQWMsRUFBRTtNQUNaLFdBQVMsSUFERztNQUVaQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sS0FGRztNQUdaQyxPQUFPLEVBQUU7SUFIRyxDQURSO0lBTVJDLFNBQVMsRUFBRTtNQUNQLFdBQVMsSUFERjtNQUVQSCxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sS0FGRjtNQUdQQyxPQUFPLEVBQUU7SUFIRixDQU5IO0lBV1JFLFFBQVEsRUFBRTtNQUNOLFdBQVMsSUFESDtNQUVOSixJQUFJLEVBQUVMLEVBQUUsQ0FBQ1UsUUFGSDtNQUdOSCxPQUFPLEVBQUU7SUFISCxDQVhGO0lBZ0JSSSxTQUFTLEVBQUU7TUFDUCxXQUFTLENBREY7TUFFUE4sSUFBSSxFQUFFTCxFQUFFLENBQUNZLE9BRkY7TUFHUEwsT0FBTyxFQUFFO0lBSEYsQ0FoQkg7SUFxQlJNLFVBQVUsRUFBRTtFQXJCSixDQUhQO0VBMkJMQyxPQUFPLEVBQUU7SUFDTEMsUUFBUSxFQUFFO0VBREwsQ0EzQko7RUErQkxDLE1BL0JLLG9CQStCSTtJQUNMO0lBQ0EsSUFBSUMsV0FBVyxDQUFDRixRQUFoQixFQUEwQjtNQUN0QixLQUFLRyxJQUFMLENBQVVDLE9BQVY7TUFDQTtJQUNIOztJQUNERixXQUFXLENBQUNGLFFBQVosR0FBdUIsSUFBdkIsQ0FOSyxDQVFMOztJQUNBLEtBQUtKLFNBQUwsR0FBaUIsQ0FBakI7SUFDQSxLQUFLRSxVQUFMLEdBQWtCLENBQWxCLENBVkssQ0FZTDs7SUFDQSxLQUFLTyxpQkFBTCxHQWJLLENBZUw7O0lBQ0EsSUFBSSxDQUFDLEtBQUtoQixjQUFWLEVBQTBCO01BQ3RCSixFQUFFLENBQUNxQixLQUFILENBQVMsa0NBQVQ7SUFDSDtFQUNKLENBbERJO0VBb0RMQyxPQXBESyxxQkFvREs7SUFDTixLQUFLWCxTQUFMO0lBQ0EsS0FBS1MsaUJBQUw7RUFDSCxDQXZESTtFQXlETEEsaUJBekRLLCtCQXlEZTtJQUNoQixJQUFJLEtBQUtoQixjQUFULEVBQXlCO01BQ3JCLEtBQUtBLGNBQUwsQ0FBb0JtQixNQUFwQixRQUFnQyxLQUFLWixTQUFyQztNQUNBWCxFQUFFLENBQUN3QixHQUFILENBQU8sdUJBQVAsRUFBZ0MsS0FBS2IsU0FBckM7SUFDSCxDQUhELE1BR087TUFDSFgsRUFBRSxDQUFDcUIsS0FBSCxDQUFTLDJDQUFUO0lBQ0g7RUFDSixDQWhFSTtFQWtFTEksVUFsRUssc0JBa0VNQyxNQWxFTixFQWtFYztJQUNmLEtBQUtiLFVBQUwsR0FBa0JhLE1BQWxCO0lBQ0ExQixFQUFFLENBQUN3QixHQUFILENBQU8sdUJBQVAsRUFBZ0MsS0FBS1gsVUFBckM7RUFDSDtBQXJFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzdGFyQ291bnRMYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+aYvuekuuaYn+aYn+aVsOmHj+eahExhYmVs57uE5Lu2J1xuICAgICAgICB9LFxuICAgICAgICBnb2xkTGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfph5HluIHmlbDph4/mmL7npLrmlofmnKwnXG4gICAgICAgIH0sXG4gICAgICAgIHRpbGVkTWFwOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuVGlsZWRNYXAsXG4gICAgICAgICAgICB0b29sdGlwOiAn5Zyw5Zu+J1xuICAgICAgICB9LFxuICAgICAgICBzdGFyQ291bnQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAsXG4gICAgICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+aYn+aYn+aVsOmHjydcbiAgICAgICAgfSxcbiAgICAgICAgX2dvbGRDb3VudDogMFxuICAgIH0sXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIGluc3RhbmNlOiBudWxsXG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8g56Gu5L+d5Zyo5Zy65pmv5Lit5Y+q5pyJ5LiA5LiqIEdhbWVNYW5hZ2VyIOWunuS+i1xuICAgICAgICBpZiAoR2FtZU1hbmFnZXIuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgR2FtZU1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBcbiAgICAgICAgLy8g5Yid5aeL5YyW6K6h5pWwXG4gICAgICAgIHRoaXMuc3RhckNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5fZ29sZENvdW50ID0gMDtcbiAgICAgICAgXG4gICAgICAgIC8vIOabtOaWsOaYvuekulxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXJEaXNwbGF5KCk7XG4gICAgICAgIFxuICAgICAgICAvLyDmo4Dmn6XlubbovpPlh7rosIPor5Xkv6Hmga9cbiAgICAgICAgaWYgKCF0aGlzLnN0YXJDb3VudExhYmVsKSB7XG4gICAgICAgICAgICBjYy5lcnJvcignR2FtZU1hbmFnZXI6IHN0YXJDb3VudExhYmVsIOacquiuvue9riEnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZGRTdGFyKCkge1xuICAgICAgICB0aGlzLnN0YXJDb3VudCsrO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXJEaXNwbGF5KCk7XG4gICAgfSxcblxuICAgIHVwZGF0ZVN0YXJEaXNwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5zdGFyQ291bnRMYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5zdGFyQ291bnRMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLnN0YXJDb3VudH1gO1xuICAgICAgICAgICAgY2MubG9nKCdHYW1lTWFuYWdlcjog5pu05paw5pif5pif5pWw6YeP5Li6OicsIHRoaXMuc3RhckNvdW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmVycm9yKCdHYW1lTWFuYWdlcjogc3RhckNvdW50TGFiZWwg5pyq6K6+572u77yM5peg5rOV5pi+56S65pif5pif5pWw6YePIScpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZUdvbGQoYW1vdW50KSB7XG4gICAgICAgIHRoaXMuX2dvbGRDb3VudCA9IGFtb3VudDtcbiAgICAgICAgY2MubG9nKCdHYW1lTWFuYWdlcjog5pu05paw6YeR5biB5pWw6YeP5Li6OicsIHRoaXMuX2dvbGRDb3VudCk7XG4gICAgfVxufSk7XG4iXX0=
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
    var posY = this._stickPos.y + touchPos.y; // 用摇杆的位置减去中心点的位置，得到的向量就是摇杆的方向

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0pveXN0aWNrLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZG90IiwidHlwZSIsIk5vZGUiLCJkaXNwbGF5TmFtZSIsInRvb2x0aXAiLCJyaW5nIiwiam95c3RpY2tUeXBlIiwiSm95c3RpY2tFbnVtIiwiSm95c3RpY2tUeXBlIiwiRklYRUQiLCJkaXJlY3Rpb25UeXBlIiwiRGlyZWN0aW9uVHlwZSIsIkFMTCIsIl9zdGlja1BvcyIsIl90b3VjaExvY2F0aW9uIiwib25Mb2FkIiwiX3JhZGl1cyIsIndpZHRoIiwiX2luaXRUb3VjaEV2ZW50IiwiRk9MTE9XIiwibm9kZSIsIm9wYWNpdHkiLCJvbkVuYWJsZSIsIkpveXN0aWNrRXZlbnQiLCJnZXRJbnN0YW5jZSIsIm9uIiwiSm95c3RpY2tFdmVudFR5cGUiLCJDSEFOR0VfSk9ZU1RJQ0tfVFlQRSIsIl9vbkNoYW5nZUpveXN0aWNrVHlwZSIsIm9uRGlzYWJsZSIsIm9mZiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiX3RvdWNoU3RhcnRFdmVudCIsIlRPVUNIX01PVkUiLCJfdG91Y2hNb3ZlRXZlbnQiLCJUT1VDSF9FTkQiLCJfdG91Y2hFbmRFdmVudCIsIlRPVUNIX0NBTkNFTCIsImV2ZW50IiwiZW1pdCIsInRvdWNoUG9zIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJnZXRMb2NhdGlvbiIsImdldFBvc2l0aW9uIiwiZGlzdGFuY2UiLCJzdWIiLCJtYWciLCJzZXRQb3NpdGlvbiIsInBvc1giLCJ4IiwicG9zWSIsInkiLCJwIiwidjIiLCJub3JtYWxpemUiLCJzcGVlZFR5cGUiLCJTcGVlZFR5cGUiLCJOT1JNQUwiLCJGQVNUIiwibW92ZURpc3RhbmNlIiwiU1RPUCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUs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QztNQUNBLElBQU1vQyxDQUFDLEdBQUcsS0FBS3ZDLFNBQUwsQ0FBZXVDLENBQWYsR0FBbUJDLENBQUMsQ0FBQ0QsQ0FBRixHQUFNLEtBQUtwQyxPQUF4QztNQUNBLEtBQUtoQixHQUFMLENBQVNnRCxXQUFULENBQXFCcEQsRUFBRSxDQUFDMEQsRUFBSCxDQUFNSixDQUFOLEVBQVNFLENBQVQsQ0FBckI7TUFFQUksU0FBUyxHQUFHakQsd0JBQUEsQ0FBYWtELFNBQWIsQ0FBdUJFLElBQW5DO0lBQ0g7O0lBRURwQyx5QkFBQSxDQUFjQyxXQUFkLEdBQTRCZ0IsSUFBNUIsQ0FBaUNqQyx3QkFBQSxDQUFhbUIsaUJBQWIsQ0FBK0JRLFVBQWhFLEVBQTRFSyxLQUE1RSxFQUFtRjtNQUFDaUIsU0FBUyxFQUFFQSxTQUFaO01BQXVCSSxZQUFZLEVBQUVQO0lBQXJDLENBQW5GO0VBQ0gsQ0FwSUk7RUFzSUxoQixjQXRJSywwQkFzSVVFLEtBdElWLEVBc0lpQjtJQUNsQixLQUFLdkMsR0FBTCxDQUFTZ0QsV0FBVCxDQUFxQixLQUFLM0MsSUFBTCxDQUFVdUMsV0FBVixFQUFyQjs7SUFDQSxJQUFJLEtBQUt0QyxZQUFMLEtBQXNCQyx3QkFBQSxDQUFhQyxZQUFiLENBQTBCVyxNQUFwRCxFQUE0RDtNQUN4RCxLQUFLQyxJQUFMLENBQVVDLE9BQVYsR0FBb0IsQ0FBcEI7SUFDSDs7SUFFREUseUJBQUEsQ0FBY0MsV0FBZCxHQUE0QmdCLElBQTVCLENBQWlDakMsd0JBQUEsQ0FBYW1CLGlCQUFiLENBQStCVSxTQUFoRSxFQUEyRUcsS0FBM0UsRUFBa0Y7TUFBQ2lCLFNBQVMsRUFBRWpELHdCQUFBLENBQWFrRCxTQUFiLENBQXVCSTtJQUFuQyxDQUFsRjtFQUNIO0FBN0lJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb3lzdGlja0VudW0gZnJvbSAnSm95c3RpY2tFbnVtJztcbmltcG9ydCBKb3lzdGlja0V2ZW50IGZyb20gJ0pveXN0aWNrRXZlbnQnO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBkb3Q6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdEb3QnLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+aRh+adhuaTjee6teeCuScsXG4gICAgICAgIH0sXG4gICAgICAgIHJpbmc6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdSaW5nJyxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfmkYfmnYbog4zmma/oioLngrknLFxuICAgICAgICB9LFxuXG4gICAgICAgIGpveXN0aWNrVHlwZToge1xuICAgICAgICAgICAgZGVmYXVsdDogSm95c3RpY2tFbnVtLkpveXN0aWNrVHlwZS5GSVhFRCxcbiAgICAgICAgICAgIHR5cGU6IEpveXN0aWNrRW51bS5Kb3lzdGlja1R5cGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ1RvdWNoIFR5cGUnLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+inpuaRuOexu+WeiycsXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGlyZWN0aW9uVHlwZToge1xuICAgICAgICAgICAgZGVmYXVsdDogSm95c3RpY2tFbnVtLkRpcmVjdGlvblR5cGUuQUxMLFxuICAgICAgICAgICAgdHlwZTogSm95c3RpY2tFbnVtLkRpcmVjdGlvblR5cGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0RpcmVjdGlvbiBUeXBlJyxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfmlrnlkJHnsbvlnosnLFxuICAgICAgICB9LFxuXG4gICAgICAgIF9zdGlja1Bvczoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICB0b29sdGlwOiAn5pGH5p2G5omA5Zyo5L2N572uJyxcbiAgICAgICAgfSxcbiAgICAgICAgX3RvdWNoTG9jYXRpb246IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+inpuaRuOS9jee9ricsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5fcmFkaXVzID0gdGhpcy5yaW5nLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy5faW5pdFRvdWNoRXZlbnQoKTtcbiAgICAgICAgLy8gaGlkZSBqb3lzdGljayB3aGVuIGZvbGxvd1xuICAgICAgICBpZiAodGhpcy5qb3lzdGlja1R5cGUgPT09IEpveXN0aWNrRW51bS5Kb3lzdGlja1R5cGUuRk9MTE9XKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIEpveXN0aWNrRXZlbnQuZ2V0SW5zdGFuY2UoKS5vbihKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGUuQ0hBTkdFX0pPWVNUSUNLX1RZUEUsIHRoaXMuX29uQ2hhbmdlSm95c3RpY2tUeXBlLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICBKb3lzdGlja0V2ZW50LmdldEluc3RhbmNlKCkub2ZmKEpveXN0aWNrRW51bS5Kb3lzdGlja0V2ZW50VHlwZS5DSEFOR0VfSk9ZU1RJQ0tfVFlQRSwgdGhpcy5fb25DaGFuZ2VKb3lzdGlja1R5cGUsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBfb25DaGFuZ2VKb3lzdGlja1R5cGUodHlwZSkge1xuICAgICAgICB0aGlzLmpveXN0aWNrVHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gdHlwZSA9PT0gSm95c3RpY2tFbnVtLkpveXN0aWNrVHlwZS5GSVhFRCA/IDI1NSA6IDA7XG4gICAgfSxcblxuICAgIF9pbml0VG91Y2hFdmVudCgpIHtcbiAgICAgICAgLy8gc2V0IHRoZSBzaXplIG9mIGpveXN0aWNrIG5vZGUgdG8gY29udHJvbCBzY2FsZVxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuX3RvdWNoU3RhcnRFdmVudCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLl90b3VjaE1vdmVFdmVudCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX3RvdWNoRW5kRXZlbnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLl90b3VjaEVuZEV2ZW50LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgX3RvdWNoU3RhcnRFdmVudChldmVudCkge1xuICAgICAgICBKb3lzdGlja0V2ZW50LmdldEluc3RhbmNlKCkuZW1pdChKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGUuVE9VQ0hfU1RBUlQsIFwiam95c3RpY2sgdG91Y2ggc3RhcnRcIiwgMTApO1xuICAgICAgICBjb25zdCB0b3VjaFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcblxuICAgICAgICBpZiAodGhpcy5qb3lzdGlja1R5cGUgPT09IEpveXN0aWNrRW51bS5Kb3lzdGlja1R5cGUuRklYRUQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0aWNrUG9zID0gdGhpcy5yaW5nLmdldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgIC8vIOinpuaRuOeCueS4juWchuWciOS4reW/g+eahOi3neemu1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0b3VjaFBvcy5zdWIodGhpcy5yaW5nLmdldFBvc2l0aW9uKCkpLm1hZygpO1xuXG4gICAgICAgICAgICAvLyDmiYvmjIflnKjlnIblnIjlhoXop6bmkbgs5o6n5p2G6Lef6ZqP6Kem5pG454K5XG4gICAgICAgICAgICB0aGlzLl9yYWRpdXMgPiBkaXN0YW5jZSAmJiB0aGlzLmRvdC5zZXRQb3NpdGlvbih0b3VjaFBvcyk7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmpveXN0aWNrVHlwZSA9PT0gSm95c3RpY2tFbnVtLkpveXN0aWNrVHlwZS5GT0xMT1cpIHtcblxuICAgICAgICAgICAgLy8g6K6w5b2V5pGH5p2G5L2N572u77yM57uZIHRvdWNoIG1vdmUg5L2/55SoXG4gICAgICAgICAgICB0aGlzLl9zdGlja1BvcyA9IHRvdWNoUG9zO1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICB0aGlzLl90b3VjaExvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcblxuICAgICAgICAgICAgLy8g5pu05pS55pGH5p2G55qE5L2N572uXG4gICAgICAgICAgICB0aGlzLnJpbmcuc2V0UG9zaXRpb24odG91Y2hQb3MpO1xuICAgICAgICAgICAgdGhpcy5kb3Quc2V0UG9zaXRpb24odG91Y2hQb3MpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF90b3VjaE1vdmVFdmVudChldmVudCkge1xuICAgICAgICAvLyDlpoLmnpwgdG91Y2ggc3RhcnQg5L2N572u5ZKMIHRvdWNoIG1vdmUg55u45ZCM77yM56aB5q2i56e75YqoXG4gICAgICAgIGlmICh0aGlzLmpveXN0aWNrVHlwZSA9PT0gSm95c3RpY2tFbnVtLkpveXN0aWNrVHlwZS5GT0xMT1cgJiYgdGhpcy5fdG91Y2hMb2NhdGlvbiA9PT0gZXZlbnQuZ2V0TG9jYXRpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5Lul5ZyG5ZyI5Li66ZSa54K56I635Y+W6Kem5pG45Z2Q5qCHXG4gICAgICAgIGNvbnN0IHRvdWNoUG9zID0gdGhpcy5yaW5nLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRvdWNoUG9zLm1hZygpO1xuXG4gICAgICAgIC8vIOeUseS6juaRh+adhueahCBwb3N0aW9uIOaYr+S7peeItuiKgueCueS4uumUmueCue+8jOaJgOS7peWumuS9jeimgeWKoOS4iiB0b3VjaCBzdGFydCDml7bnmoTkvY3nva5cbiAgICAgICAgY29uc3QgcG9zWCA9IHRoaXMuX3N0aWNrUG9zLnggKyB0b3VjaFBvcy54O1xuICAgICAgICBjb25zdCBwb3NZID0gdGhpcy5fc3RpY2tQb3MueSArIHRvdWNoUG9zLnk7XG5cbiAgICAgICAgLy8g55So5pGH5p2G55qE5L2N572u5YeP5Y675Lit5b+D54K555qE5L2N572u77yM5b6X5Yiw55qE5ZCR6YeP5bCx5piv5pGH5p2G55qE5pa55ZCRXG4gICAgICAgIGNvbnN0IHAgPSBjYy52Mihwb3NYLCBwb3NZKS5zdWIodGhpcy5yaW5nLmdldFBvc2l0aW9uKCkpLm5vcm1hbGl6ZSgpO1xuXG4gICAgICAgIGxldCBzcGVlZFR5cGU7XG5cbiAgICAgICAgaWYgKHRoaXMuX3JhZGl1cyA+IGRpc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmRvdC5zZXRQb3NpdGlvbihjYy52Mihwb3NYLCBwb3NZKSk7XG5cbiAgICAgICAgICAgIHNwZWVkVHlwZSA9IEpveXN0aWNrRW51bS5TcGVlZFR5cGUuTk9STUFMO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5o6n5p2G5rC46L+c5L+d5oyB5Zyo5ZyI5YaF77yM5bm25Zyo5ZyI5YaF6Lef6ZqP6Kem5pG45pu05paw6KeS5bqmXG4gICAgICAgICAgICBjb25zdCB4ID0gdGhpcy5fc3RpY2tQb3MueCArIHAueCAqIHRoaXMuX3JhZGl1cztcbiAgICAgICAgICAgIGNvbnN0IHkgPSB0aGlzLl9zdGlja1Bvcy55ICsgcC55ICogdGhpcy5fcmFkaXVzO1xuICAgICAgICAgICAgdGhpcy5kb3Quc2V0UG9zaXRpb24oY2MudjIoeCwgeSkpO1xuXG4gICAgICAgICAgICBzcGVlZFR5cGUgPSBKb3lzdGlja0VudW0uU3BlZWRUeXBlLkZBU1Q7XG4gICAgICAgIH1cblxuICAgICAgICBKb3lzdGlja0V2ZW50LmdldEluc3RhbmNlKCkuZW1pdChKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGUuVE9VQ0hfTU9WRSwgZXZlbnQsIHtzcGVlZFR5cGU6IHNwZWVkVHlwZSwgbW92ZURpc3RhbmNlOiBwfSk7XG4gICAgfSxcblxuICAgIF90b3VjaEVuZEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKHRoaXMucmluZy5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgaWYgKHRoaXMuam95c3RpY2tUeXBlID09PSBKb3lzdGlja0VudW0uSm95c3RpY2tUeXBlLkZPTExPVykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgSm95c3RpY2tFdmVudC5nZXRJbnN0YW5jZSgpLmVtaXQoSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLlRPVUNIX0VORCwgZXZlbnQsIHtzcGVlZFR5cGU6IEpveXN0aWNrRW51bS5TcGVlZFR5cGUuU1RPUH0pO1xuICAgIH0sXG5cbn0pO1xuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSm95c3RpY2tFbnVtLmpzIl0sIm5hbWVzIjpbIkpveXN0aWNrVHlwZSIsImNjIiwiRW51bSIsIkZJWEVEIiwiRk9MTE9XIiwiRGlyZWN0aW9uVHlwZSIsIkZPVVIiLCJFSUdIVCIsIkFMTCIsIlNwZWVkVHlwZSIsIlNUT1AiLCJOT1JNQUwiLCJGQVNUIiwiSm95c3RpY2tFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIlRPVUNIX01PVkUiLCJUT1VDSF9FTkQiLCJDSEFOR0VfSk9ZU1RJQ0tfVFlQRSIsImV4cG9ydHMiLCJfZGVmYXVsdCIsIm1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUFlO0VBQ1hBLFlBQVksRUFBRUMsRUFBRSxDQUFDQyxJQUFJLENBQUM7SUFDbEJDLEtBQUssRUFBRSxDQUFDO0lBQ1JDLE1BQU0sRUFBRTtFQUNaLENBQUMsQ0FBQztFQUVGQyxhQUFhLEVBQUVKLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDO0lBQ25CSSxJQUFJLEVBQUUsQ0FBQztJQUNQQyxLQUFLLEVBQUUsQ0FBQztJQUNSQyxHQUFHLEVBQUU7RUFDVCxDQUFDLENBQUM7RUFFRkMsU0FBUyxFQUFFUixFQUFFLENBQUNDLElBQUksQ0FBQztJQUNmUSxJQUFJLEVBQUUsQ0FBQztJQUNQQyxNQUFNLEVBQUUsQ0FBQztJQUNUQyxJQUFJLEVBQUU7RUFDVixDQUFDLENBQUM7RUFFRkMsaUJBQWlCLEVBQUVaLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDO0lBQ3ZCWSxXQUFXLEVBQUUsWUFBWTtJQUN6QkMsVUFBVSxFQUFFLFdBQVc7SUFDdkJDLFNBQVMsRUFBRSxVQUFVO0lBRXJCQyxvQkFBb0IsRUFBRTtFQUMxQixDQUFDO0FBQ0wsQ0FBQztBQUFBQyxPQUFBLGNBQUFDLFFBQUE7QUFBQUMsTUFBQSxDQUFBRixPQUFBLEdBQUFBLE9BQUEiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIEpveXN0aWNrVHlwZTogY2MuRW51bSh7XHJcbiAgICAgICAgRklYRUQ6IDAsXHJcbiAgICAgICAgRk9MTE9XOiAxLFxyXG4gICAgfSksXHJcblxyXG4gICAgRGlyZWN0aW9uVHlwZTogY2MuRW51bSh7XHJcbiAgICAgICAgRk9VUjogNCxcclxuICAgICAgICBFSUdIVDogOCxcclxuICAgICAgICBBTEw6IDAsXHJcbiAgICB9KSxcclxuXHJcbiAgICBTcGVlZFR5cGU6IGNjLkVudW0oe1xyXG4gICAgICAgIFNUT1A6IDAsXHJcbiAgICAgICAgTk9STUFMOiAxLFxyXG4gICAgICAgIEZBU1Q6IDJcclxuICAgIH0pLFxyXG5cclxuICAgIEpveXN0aWNrRXZlbnRUeXBlOiBjYy5FbnVtKHtcclxuICAgICAgICBUT1VDSF9TVEFSVDogXCJ0b3VjaFN0YXJ0XCIsXHJcbiAgICAgICAgVE9VQ0hfTU9WRTogXCJ0b3VjaE1vdmVcIixcclxuICAgICAgICBUT1VDSF9FTkQ6IFwidG91Y2hFbmRcIixcclxuXHJcbiAgICAgICAgQ0hBTkdFX0pPWVNUSUNLX1RZUEU6IFwiY2hhbmdlSm95c3RpY2tUeXBlXCJcclxuICAgIH0pLFxyXG59O1xyXG4iXX0=
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
cc._RF.push(module, 'a3948EwRx1FUom5v49yZL+v', 'game');
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
    tiledMap: cc.TiledMap,
    goldLabel: {
      "default": null,
      type: cc.Label,
      tooltip: '金币数量显示文本'
    }
  },
  statics: {
    instance: null,
    addGold: function addGold(amount) {
      if (this.instance) {
        this.instance._goldCount += amount;

        if (this.instance.goldLabel) {
          this.instance.goldLabel.string = this.instance._goldCount;
        } // 同步更新GameManager的金币数


        var gameManager = cc.find('Canvas').getComponent('GameManager');

        if (gameManager) {
          gameManager.updateGold(this.instance._goldCount);
        }
      }
    }
  },
  _goldCount: 0,
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var _this = this;

    // 初始化静态实例
    this.constructor.instance = this; // 初始化物理系统

    var p = cc.director.getPhysicsManager();
    p.enabled = true;
    p.debugDrawFlags = false;
    p.gravity = cc.v2(0, 0); // 初始化金币显示

    this._goldCount = 0;

    if (this.goldLabel) {
      this.goldLabel.string = this._goldCount;
    } // 初始化微信音频


    document.addEventListener('WeixinJSBridgeReady', function () {
      cc.resources.load('audios/rock', cc.AudioClip, function (err, audioClip) {
        if (err) {
          cc.error('加载音频失败:', err);
          return;
        }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0aWxlZE1hcCIsIlRpbGVkTWFwIiwiZ29sZExhYmVsIiwidHlwZSIsIkxhYmVsIiwidG9vbHRpcCIsInN0YXRpY3MiLCJpbnN0YW5jZSIsImFkZEdvbGQiLCJhbW91bnQiLCJfZ29sZENvdW50Iiwic3RyaW5nIiwiZ2FtZU1hbmFnZXIiLCJmaW5kIiwiZ2V0Q29tcG9uZW50IiwidXBkYXRlR29sZCIsIm9uTG9hZCIsImNvbnN0cnVjdG9yIiwicCIsImRpcmVjdG9yIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJlbmFibGVkIiwiZGVidWdEcmF3RmxhZ3MiLCJncmF2aXR5IiwidjIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNvdXJjZXMiLCJsb2FkIiwiQXVkaW9DbGlwIiwiZXJyIiwiYXVkaW9DbGlwIiwiZXJyb3IiLCJhdWRpb1NvdXJjZSIsImFkZENvbXBvbmVudCIsIkF1ZGlvU291cmNlIiwiY2xpcCIsInBsYXkiLCJzdGFydCIsInRpbGVkU2l6ZSIsImdldFRpbGVTaXplIiwibGF5ZXIiLCJnZXRMYXllciIsImxheWVyU2l6ZSIsImdldExheWVyU2l6ZSIsImkiLCJ3aWR0aCIsImoiLCJoZWlnaHQiLCJ0aWxlZCIsImdldFRpbGVkVGlsZUF0IiwiZ2lkIiwibm9kZSIsImdyb3VwIiwiYm9keSIsIlJpZ2lkQm9keSIsIlJpZ2lkQm9keVR5cGUiLCJTdGF0aWMiLCJjb2xsaWRlciIsIlBoeXNpY3NCb3hDb2xsaWRlciIsIm9mZnNldCIsInNpemUiLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFFB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QXdCRSxDQUF4QixFQUEyQixJQUEzQixDQUFaOztRQUNBLElBQUdFLEtBQUssQ0FBQ0UsR0FBTixJQUFhLENBQWhCLEVBQWtCO1VBQ2RGLEtBQUssQ0FBQ0csSUFBTixDQUFXQyxLQUFYLEdBQW1CLE1BQW5CO1VBQ0EsSUFBSUMsSUFBSSxHQUFHTCxLQUFLLENBQUNHLElBQU4sQ0FBV2xCLFlBQVgsQ0FBd0J0QyxFQUFFLENBQUMyRCxTQUEzQixDQUFYO1VBQ0FELElBQUksQ0FBQ25ELElBQUwsR0FBWVAsRUFBRSxDQUFDNEQsYUFBSCxDQUFpQkMsTUFBN0I7VUFDQSxJQUFJQyxRQUFRLEdBQUdULEtBQUssQ0FBQ0csSUFBTixDQUFXbEIsWUFBWCxDQUF3QnRDLEVBQUUsQ0FBQytELGtCQUEzQixDQUFmO1VBQ0FELFFBQVEsQ0FBQ0UsTUFBVCxHQUFrQmhFLEVBQUUsQ0FBQzRCLEVBQUgsQ0FBTWUsU0FBUyxDQUFDTyxLQUFWLEdBQWdCLENBQXRCLEVBQXlCUCxTQUFTLENBQUNTLE1BQVYsR0FBaUIsQ0FBMUMsQ0FBbEI7VUFDQVUsUUFBUSxDQUFDRyxJQUFULEdBQWdCdEIsU0FBaEI7VUFDQW1CLFFBQVEsQ0FBQ0ksS0FBVDtRQUNIO01BQ0o7SUFDSjtFQUVKLENBbkZJLENBcUZMOztBQXJGSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRpbGVkTWFwOiBjYy5UaWxlZE1hcCxcbiAgICAgICAgZ29sZExhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgICB0b29sdGlwOiAn6YeR5biB5pWw6YeP5pi+56S65paH5pysJ1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXRpY3M6IHtcbiAgICAgICAgaW5zdGFuY2U6IG51bGwsXG4gICAgICAgIGFkZEdvbGQoYW1vdW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuX2dvbGRDb3VudCArPSBhbW91bnQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZ29sZExhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZ29sZExhYmVsLnN0cmluZyA9IHRoaXMuaW5zdGFuY2UuX2dvbGRDb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g5ZCM5q2l5pu05pawR2FtZU1hbmFnZXLnmoTph5HluIHmlbBcbiAgICAgICAgICAgICAgICBsZXQgZ2FtZU1hbmFnZXIgPSBjYy5maW5kKCdDYW52YXMnKS5nZXRDb21wb25lbnQoJ0dhbWVNYW5hZ2VyJyk7XG4gICAgICAgICAgICAgICAgaWYgKGdhbWVNYW5hZ2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVNYW5hZ2VyLnVwZGF0ZUdvbGQodGhpcy5pbnN0YW5jZS5fZ29sZENvdW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2dvbGRDb3VudDogMCxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgLy8g5Yid5aeL5YyW6Z2Z5oCB5a6e5L6LXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBcbiAgICAgICAgLy8g5Yid5aeL5YyW54mp55CG57O757ufXG4gICAgICAgIGxldCBwID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcbiAgICAgICAgcC5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgcC5kZWJ1Z0RyYXdGbGFncyA9IGZhbHNlO1xuICAgICAgICBwLmdyYXZpdHkgPSBjYy52MigwLDApO1xuICAgICAgICBcbiAgICAgICAgLy8g5Yid5aeL5YyW6YeR5biB5pi+56S6XG4gICAgICAgIHRoaXMuX2dvbGRDb3VudCA9IDA7XG4gICAgICAgIGlmICh0aGlzLmdvbGRMYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5nb2xkTGFiZWwuc3RyaW5nID0gdGhpcy5fZ29sZENvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5Yid5aeL5YyW5b6u5L+h6Z+z6aKRXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ1dlaXhpbkpTQnJpZGdlUmVhZHknLCAoKSA9PiB7XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCgnYXVkaW9zL3JvY2snLCBjYy5BdWRpb0NsaXAsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoJ+WKoOi9vemfs+mikeWksei0pTonLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBhdWRpb1NvdXJjZSA9IHRoaXMuYWRkQ29tcG9uZW50KGNjLkF1ZGlvU291cmNlKTtcbiAgICAgICAgICAgICAgICBhdWRpb1NvdXJjZS5jbGlwID0gYXVkaW9DbGlwO1xuICAgICAgICAgICAgICAgIGF1ZGlvU291cmNlLnBsYXkoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBsZXQgdGlsZWRTaXplID0gdGhpcy50aWxlZE1hcC5nZXRUaWxlU2l6ZSgpO1xuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLnRpbGVkTWFwLmdldExheWVyKCdmZW5jZXMnKTtcbiAgICAgICAgbGV0IGxheWVyU2l6ZSA9IGxheWVyLmdldExheWVyU2l6ZSgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGF5ZXJTaXplLndpZHRoOyBpKyspIHtcbiAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPGxheWVyU2l6ZS5oZWlnaHQ7IGorKyl7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGVkID0gbGF5ZXIuZ2V0VGlsZWRUaWxlQXQoaSwgaiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYodGlsZWQuZ2lkICE9IDApe1xuICAgICAgICAgICAgICAgICAgICB0aWxlZC5ub2RlLmdyb3VwID0gJ3dhbGwnO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYm9keSA9IHRpbGVkLm5vZGUuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29sbGlkZXIgPSB0aWxlZC5ub2RlLmFkZENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xuICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5vZmZzZXQgPSBjYy52Mih0aWxlZFNpemUud2lkdGgvMiwgdGlsZWRTaXplLmhlaWdodC8yKTtcbiAgICAgICAgICAgICAgICAgICAgY29sbGlkZXIuc2l6ZSA9IHRpbGVkU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgY29sbGlkZXIuYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Bomb.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a2dc09k4NVBqqJTTuId5AKA', 'Bomb');
// scripts/Bomb.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    bombSprite: {
      "default": null,
      type: cc.SpriteFrame,
      tooltip: '炸弹图片'
    },
    explosionPrefab: {
      "default": null,
      type: cc.Prefab,
      tooltip: '爆炸效果预制体'
    },
    explosionAudio: {
      "default": null,
      type: cc.AudioClip,
      tooltip: '爆炸音效'
    },
    lifeTime: {
      "default": 3,
      type: cc.Float,
      tooltip: '炸弹存活时间'
    },
    _direction: cc.v2(0, 0),
    _speed: 0,
    _damage: 0
  },
  onLoad: function onLoad() {
    var _this = this;

    // 添加精灵组件
    var sprite = this.getComponent(cc.Sprite);

    if (!sprite) {
      sprite = this.addComponent(cc.Sprite);
    } // 如果没有设置炸弹图片，创建一个默认的圆形图形


    if (!this.bombSprite) {
      // 创建一个圆形图形
      var graphics = this.addComponent(cc.Graphics);
      graphics.circle(0, 0, 10);
      graphics.fillColor = cc.Color.RED;
      graphics.fill(); // 设置节点大小

      this.node.width = 20;
      this.node.height = 20;
    } else {
      sprite.spriteFrame = this.bombSprite;
    } // 添加刚体组件


    var rigidBody = this.getComponent(cc.RigidBody);

    if (!rigidBody) {
      rigidBody = this.addComponent(cc.RigidBody);
      rigidBody.type = cc.RigidBodyType.Dynamic;
      rigidBody.fixedRotation = true;
      rigidBody.enabledContactListener = true;
      rigidBody.gravityScale = 0;
      rigidBody.linearDamping = 0;
      rigidBody.bullet = true; // 设置碰撞检测类别和掩码

      rigidBody.awakeOnLoad = true;
    } // 添加碰撞组件


    var collider = this.getComponent(cc.BoxCollider);

    if (!collider) {
      collider = this.addComponent(cc.BoxCollider);
      collider.size = cc.size(20, 20);
      collider.offset = cc.v2(0, 0);
      cc.log('添加碰撞器，尺寸:', collider.size);
    } // 设置碰撞分组


    this.node.group = 'bomb';
    cc.log('炸弹初始化完成 - 位置:', this.node.position, '碰撞器尺寸:', collider.size); // 确保定时销毁

    this.scheduleOnce(function () {
      cc.log('炸弹到达生命周期上限，执行爆炸');

      _this.explode();
    }, this.lifeTime);
    cc.log('炸弹初始化完成 - 方向:', this._direction, '速度:', this._speed);
  },
  setDirection: function setDirection(dir) {
    this._direction = dir.normalize(); // 确保方向向量是单位向量

    cc.log('设置炸弹方向:', this._direction);
  },
  setSpeed: function setSpeed(speed) {
    this._speed = speed;
    cc.log('设置炸弹速度:', this._speed);
  },
  setDamage: function setDamage(damage) {
    this._damage = damage;
  },
  update: function update(dt) {
    if (!this._direction || !this._speed) {
      cc.log('炸弹缺少方向或速度:', this._direction, this._speed);
      return;
    }

    var rigidBody = this.getComponent(cc.RigidBody);

    if (rigidBody) {
      // 使用刚体设置速度
      var velocity = cc.v2(this._direction.x * this._speed, this._direction.y * this._speed);
      rigidBody.linearVelocity = velocity;
      cc.log('炸弹速度更新:', velocity);
    } else {
      // 如果没有刚体组件，直接更新位置
      var newPos = this.node.position;
      newPos.x += this._direction.x * this._speed * dt;
      newPos.y += this._direction.y * this._speed * dt;
      this.node.setPosition(newPos);
      cc.log('炸弹位置更新:', newPos);
    }
  },
  // 使用 onCollisionEnter 和 onBeginContact 双重保险
  onCollisionEnter: function onCollisionEnter(other, self) {
    cc.log('Bomb 碰撞开始 - 碰撞对象:', other.node.group);
    this.handleCollision(other.node);
  },
  onCollisionStay: function onCollisionStay(other, self) {
    cc.log('Bomb 碰撞持续 - 碰撞对象:', other.node.group);
  },
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    cc.log('Bomb 接触开始 - 接触对象:', otherCollider.node.group);
    this.handleCollision(otherCollider.node);
  },
  handleCollision: function handleCollision(otherNode) {
    if (this._isExploding) return;
    cc.log('处理炸弹碰撞 - 碰撞对象:', otherNode.group);

    if (otherNode.group === 'player') {
      cc.log('炸弹击中玩家');
      var player = otherNode.getComponent('Player');

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
  explode: function explode() {
    // 防止重复调用
    if (this._isExploding) {
      cc.log('炸弹已经在爆炸中，跳过重复调用');
      return;
    }

    this._isExploding = true;
    cc.log('执行炸弹爆炸效果'); // 立即停止移动

    var rigidBody = this.getComponent(cc.RigidBody);

    if (rigidBody) {
      rigidBody.linearVelocity = cc.v2(0, 0);
    } // 播放爆炸音效


    if (this.explosionAudio) {
      cc.audioEngine.playEffect(this.explosionAudio, false, 0.3);
    } // 创建爆炸效果


    if (this.explosionPrefab) {
      var explosion = cc.instantiate(this.explosionPrefab);
      explosion.setPosition(this.node.position);
      this.node.parent.addChild(explosion); // 设置爆炸效果的伤害值

      var explosionComp = explosion.getComponent('ExplosionEffect');

      if (explosionComp) {
        explosionComp.damage = this._damage;
      }
    } // 立即销毁炸弹


    if (this.node && this.node.isValid) {
      this.node.destroy();
    }
  },
  // 添加碰撞回调
  onDestroy: function onDestroy() {
    // 清理定时器和其他资源
    this.unscheduleAllCallbacks(); // 移除所有事件监听

    if (this.node) {
      this.node.off('*');
    }

    cc.log('炸弹被销毁');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0JvbWIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJib21iU3ByaXRlIiwidHlwZSIsIlNwcml0ZUZyYW1lIiwidG9vbHRpcCIsImV4cGxvc2lvblByZWZhYiIsIlByZWZhYiIsImV4cGxvc2lvbkF1ZGlvIiwiQXVkaW9DbGlwIiwibGlmZVRpbWUiLCJGbG9hdCIsIl9kaXJlY3Rpb24iLCJ2MiIsIl9zcGVlZCIsIl9kYW1hZ2UiLCJvbkxvYWQiLCJzcHJpdGUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJhZGRDb21wb25lbnQiLCJncmFwaGljcyIsIkdyYXBoaWNzIiwiY2lyY2xlIiwiZmlsbENvbG9yIiwiQ29sb3IiLCJSRUQiLCJmaWxsIiwibm9kZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3ByaXRlRnJhbWUiLCJyaWdpZEJvZHkiLCJSaWdpZEJvZHkiLCJSaWdpZEJvZHlUeXBlIiwiRHluYW1pYyIsImZpeGVkUm90YXRpb24iLCJlbmFibGVkQ29udGFjdExpc3RlbmVyIiwiZ3Jhdml0eVNjYWxlIiwibGluZWFyRGFtcGluZyIsImJ1bGxldCIsImF3YWtlT25Mb2FkIiwiY29sbGlkZXIiLCJCb3hDb2xsaWRlciIsInNpemUiLCJvZmZzZXQiLCJsb2ciLCJncm91cCIsInBvc2l0aW9uIiwic2NoZWR1bGVPbmNlIiwiZXhwbG9kZSIsInNldERpcmVjdGlvbiIsImRpciIsIm5vcm1hbGl6ZSIsInNldFNwZWVkIiwic3BlZWQiLCJzZXREYW1hZ2UiLCJkYW1hZ2UiLCJ1cGRhdGUiLCJkdCIsInZlbG9jaXR5IiwieCIsInkiLCJsaW5lYXJWZWxvY2l0eSIsIm5ld1BvcyIsInNldFBvc2l0aW9uIiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsImhhbmRsZUNvbGxpc2lvbiIsIm9uQ29sbGlzaW9uU3RheSIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGZDb2xsaWRlciIsIm90aGVyQ29sbGlkZXIiLCJvdGhlck5vZGUiLCJfaXNFeHBsb2RpbmciLCJwbGF5ZXIiLCJ0YWtlRGFtYWdlIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0IiwiZXhwbG9zaW9uIiwiaW5zdGFudGlhdGUiLCJwYXJlbnQiLCJhZGRDaGlsZCIsImV4cGxvc2lvbkNvbXAiLCJpc1ZhbGlkIiwiZGVzdHJveSIsIm9uRGVzdHJveSIsInVuc2NoZWR1bGVBbGxDYWxsYmFja3MiLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxVQUFVLEVBQUU7TUFDUixXQUFTLElBREQ7TUFFUkMsSUFBSSxFQUFFTCxFQUFFLENBQUNNLFdBRkQ7TUFHUkMsT0FBTyxFQUFFO0lBSEQsQ0FESjtJQU1SQyxlQUFlLEVBQUU7TUFDYixXQUFTLElBREk7TUFFYkgsSUFBSSxFQUFFTCxFQUFFLENBQUNTLE1BRkk7TUFHYkYsT0FBTyxFQUFFO0lBSEksQ0FOVDtJQVdSRyxjQUFjLEVBQUU7TUFDWixXQUFTLElBREc7TUFFWkwsSUFBSSxFQUFFTCxFQUFFLENBQUNXLFNBRkc7TUFHWkosT0FBTyxFQUFFO0lBSEcsQ0FYUjtJQWdCUkssUUFBUSxFQUFFO01BQ04sV0FBUyxDQURIO01BRU5QLElBQUksRUFBRUwsRUFBRSxDQUFDYSxLQUZIO01BR05OLE9BQU8sRUFBRTtJQUhILENBaEJGO0lBcUJSTyxVQUFVLEVBQUVkLEVBQUUsQ0FBQ2UsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFULENBckJKO0lBc0JSQyxNQUFNLEVBQUUsQ0F0QkE7SUF1QlJDLE9BQU8sRUFBRTtFQXZCRCxDQUhQO0VBNkJMQyxNQTdCSyxvQkE2Qkk7SUFBQTs7SUFDTDtJQUNBLElBQUlDLE1BQU0sR0FBRyxLQUFLQyxZQUFMLENBQWtCcEIsRUFBRSxDQUFDcUIsTUFBckIsQ0FBYjs7SUFDQSxJQUFJ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QjtNQUNBMkUsU0FBUyxDQUFDaEIsV0FBVixDQUFzQixLQUFLckMsSUFBTCxDQUFVb0IsUUFBaEM7TUFDQSxLQUFLcEIsSUFBTCxDQUFVdUQsTUFBVixDQUFpQkMsUUFBakIsQ0FBMEJILFNBQTFCLEVBSHNCLENBS3RCOztNQUNBLElBQUlJLGFBQWEsR0FBR0osU0FBUyxDQUFDL0QsWUFBVixDQUF1QixpQkFBdkIsQ0FBcEI7O01BQ0EsSUFBSW1FLGFBQUosRUFBbUI7UUFDZkEsYUFBYSxDQUFDNUIsTUFBZCxHQUF1QixLQUFLMUMsT0FBNUI7TUFDSDtJQUNKLENBaENLLENBa0NOOzs7SUFDQSxJQUFJLEtBQUthLElBQUwsSUFBYSxLQUFLQSxJQUFMLENBQVUwRCxPQUEzQixFQUFvQztNQUNoQyxLQUFLMUQsSUFBTCxDQUFVMkQsT0FBVjtJQUNIO0VBQ0osQ0F4TUk7RUEwTUw7RUFDQUMsU0EzTUssdUJBMk1PO0lBQ1I7SUFDQSxLQUFLQyxzQkFBTCxHQUZRLENBSVI7O0lBQ0EsSUFBSSxLQUFLN0QsSUFBVCxFQUFlO01BQ1gsS0FBS0EsSUFBTCxDQUFVOEQsR0FBVixDQUFjLEdBQWQ7SUFDSDs7SUFFRDVGLEVBQUUsQ0FBQ2dELEdBQUgsQ0FBTyxPQUFQO0VBQ0g7QUFyTkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYm9tYlNwcml0ZToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+eCuOW8ueWbvueJhydcbiAgICAgICAgfSxcbiAgICAgICAgZXhwbG9zaW9uUHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+eIhueCuOaViOaenOmihOWItuS9kydcbiAgICAgICAgfSxcbiAgICAgICAgZXhwbG9zaW9uQXVkaW86IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgICAgICB0b29sdGlwOiAn54iG54K46Z+z5pWIJ1xuICAgICAgICB9LFxuICAgICAgICBsaWZlVGltZToge1xuICAgICAgICAgICAgZGVmYXVsdDogMyxcbiAgICAgICAgICAgIHR5cGU6IGNjLkZsb2F0LFxuICAgICAgICAgICAgdG9vbHRpcDogJ+eCuOW8ueWtmOa0u+aXtumXtCdcbiAgICAgICAgfSxcbiAgICAgICAgX2RpcmVjdGlvbjogY2MudjIoMCwgMCksXG4gICAgICAgIF9zcGVlZDogMCxcbiAgICAgICAgX2RhbWFnZTogMFxuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIOa3u+WKoOeyvueBtee7hOS7tlxuICAgICAgICBsZXQgc3ByaXRlID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgaWYgKCFzcHJpdGUpIHtcbiAgICAgICAgICAgIHNwcml0ZSA9IHRoaXMuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlpoLmnpzmsqHmnInorr7nva7ngrjlvLnlm77niYfvvIzliJvlu7rkuIDkuKrpu5jorqTnmoTlnIblvaLlm77lvaJcbiAgICAgICAgaWYgKCF0aGlzLmJvbWJTcHJpdGUpIHtcbiAgICAgICAgICAgIC8vIOWIm+W7uuS4gOS4quWchuW9ouWbvuW9olxuICAgICAgICAgICAgbGV0IGdyYXBoaWNzID0gdGhpcy5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2lyY2xlKDAsIDAsIDEwKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmZpbGxDb2xvciA9IGNjLkNvbG9yLlJFRDtcbiAgICAgICAgICAgIGdyYXBoaWNzLmZpbGwoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g6K6+572u6IqC54K55aSn5bCPXG4gICAgICAgICAgICB0aGlzLm5vZGUud2lkdGggPSAyMDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSAyMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuYm9tYlNwcml0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOa3u+WKoOWImuS9k+e7hOS7tlxuICAgICAgICBsZXQgcmlnaWRCb2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgaWYgKCFyaWdpZEJvZHkpIHtcbiAgICAgICAgICAgIHJpZ2lkQm9keSA9IHRoaXMuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgICAgICByaWdpZEJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcbiAgICAgICAgICAgIHJpZ2lkQm9keS5maXhlZFJvdGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHJpZ2lkQm9keS5lbmFibGVkQ29udGFjdExpc3RlbmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHJpZ2lkQm9keS5ncmF2aXR5U2NhbGUgPSAwO1xuICAgICAgICAgICAgcmlnaWRCb2R5LmxpbmVhckRhbXBpbmcgPSAwO1xuICAgICAgICAgICAgcmlnaWRCb2R5LmJ1bGxldCA9IHRydWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIOiuvue9rueisOaSnuajgOa1i+exu+WIq+WSjOaOqeeggVxuICAgICAgICAgICAgcmlnaWRCb2R5LmF3YWtlT25Mb2FkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOa3u+WKoOeisOaSnue7hOS7tlxuICAgICAgICBsZXQgY29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XG4gICAgICAgIGlmICghY29sbGlkZXIpIHtcbiAgICAgICAgICAgIGNvbGxpZGVyID0gdGhpcy5hZGRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpO1xuICAgICAgICAgICAgY29sbGlkZXIuc2l6ZSA9IGNjLnNpemUoMjAsIDIwKTtcbiAgICAgICAgICAgIGNvbGxpZGVyLm9mZnNldCA9IGNjLnYyKDAsIDApO1xuICAgICAgICAgICAgY2MubG9nKCfmt7vliqDnorDmkp7lmajvvIzlsLrlr7g6JywgY29sbGlkZXIuc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDorr7nva7norDmkp7liIbnu4RcbiAgICAgICAgdGhpcy5ub2RlLmdyb3VwID0gJ2JvbWInO1xuICAgICAgICBcbiAgICAgICAgY2MubG9nKCfngrjlvLnliJ3lp4vljJblrozmiJAgLSDkvY3nva46JywgdGhpcy5ub2RlLnBvc2l0aW9uLCAn56Kw5pKe5Zmo5bC65a+4OicsIGNvbGxpZGVyLnNpemUpO1xuICAgICAgICBcbiAgICAgICAgLy8g56Gu5L+d5a6a5pe26ZSA5q+BXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGNjLmxvZygn54K45by55Yiw6L6+55Sf5ZG95ZGo5pyf5LiK6ZmQ77yM5omn6KGM54iG54K4Jyk7XG4gICAgICAgICAgICB0aGlzLmV4cGxvZGUoKTtcbiAgICAgICAgfSwgdGhpcy5saWZlVGltZSk7XG4gICAgICAgIFxuICAgICAgICBjYy5sb2coJ+eCuOW8ueWIneWni+WMluWujOaIkCAtIOaWueWQkTonLCB0aGlzLl9kaXJlY3Rpb24sICfpgJ/luqY6JywgdGhpcy5fc3BlZWQpO1xuICAgIH0sXG5cbiAgICBzZXREaXJlY3Rpb24oZGlyKSB7XG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IGRpci5ub3JtYWxpemUoKTsgLy8g56Gu5L+d5pa55ZCR5ZCR6YeP5piv5Y2V5L2N5ZCR6YePXG4gICAgICAgIGNjLmxvZygn6K6+572u54K45by55pa55ZCROicsIHRoaXMuX2RpcmVjdGlvbik7XG4gICAgfSxcblxuICAgIHNldFNwZWVkKHNwZWVkKSB7XG4gICAgICAgIHRoaXMuX3NwZWVkID0gc3BlZWQ7XG4gICAgICAgIGNjLmxvZygn6K6+572u54K45by56YCf5bqmOicsIHRoaXMuX3NwZWVkKTtcbiAgICB9LFxuXG4gICAgc2V0RGFtYWdlKGRhbWFnZSkge1xuICAgICAgICB0aGlzLl9kYW1hZ2UgPSBkYW1hZ2U7XG4gICAgfSxcblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAoIXRoaXMuX2RpcmVjdGlvbiB8fCAhdGhpcy5fc3BlZWQpIHtcbiAgICAgICAgICAgIGNjLmxvZygn54K45by557y65bCR5pa55ZCR5oiW6YCf5bqmOicsIHRoaXMuX2RpcmVjdGlvbiwgdGhpcy5fc3BlZWQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJpZ2lkQm9keSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgIGlmIChyaWdpZEJvZHkpIHtcbiAgICAgICAgICAgIC8vIOS9v+eUqOWImuS9k+iuvue9rumAn+W6plxuICAgICAgICAgICAgbGV0IHZlbG9jaXR5ID0gY2MudjIoXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlyZWN0aW9uLnggKiB0aGlzLl9zcGVlZCxcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXJlY3Rpb24ueSAqIHRoaXMuX3NwZWVkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgICAgICAgICBjYy5sb2coJ+eCuOW8uemAn+W6puabtOaWsDonLCB2ZWxvY2l0eSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmsqHmnInliJrkvZPnu4Tku7bvvIznm7TmjqXmm7TmlrDkvY3nva5cbiAgICAgICAgICAgIGxldCBuZXdQb3MgPSB0aGlzLm5vZGUucG9zaXRpb247XG4gICAgICAgICAgICBuZXdQb3MueCArPSB0aGlzLl9kaXJlY3Rpb24ueCAqIHRoaXMuX3NwZWVkICogZHQ7XG4gICAgICAgICAgICBuZXdQb3MueSArPSB0aGlzLl9kaXJlY3Rpb24ueSAqIHRoaXMuX3NwZWVkICogZHQ7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3UG9zKTtcbiAgICAgICAgICAgIGNjLmxvZygn54K45by55L2N572u5pu05pawOicsIG5ld1Bvcyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8g5L2/55SoIG9uQ29sbGlzaW9uRW50ZXIg5ZKMIG9uQmVnaW5Db250YWN0IOWPjOmHjeS/nemZqVxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgY2MubG9nKCdCb21iIOeisOaSnuW8gOWniyAtIOeisOaSnuWvueixoTonLCBvdGhlci5ub2RlLmdyb3VwKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDb2xsaXNpb24ob3RoZXIubm9kZSk7XG4gICAgfSxcblxuICAgIG9uQ29sbGlzaW9uU3RheShvdGhlciwgc2VsZikge1xuICAgICAgICBjYy5sb2coJ0JvbWIg56Kw5pKe5oyB57utIC0g56Kw5pKe5a+56LGhOicsIG90aGVyLm5vZGUuZ3JvdXApO1xuICAgIH0sXG5cbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgY2MubG9nKCdCb21iIOaOpeinpuW8gOWniyAtIOaOpeinpuWvueixoTonLCBvdGhlckNvbGxpZGVyLm5vZGUuZ3JvdXApO1xuICAgICAgICB0aGlzLmhhbmRsZUNvbGxpc2lvbihvdGhlckNvbGxpZGVyLm5vZGUpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVDb2xsaXNpb24ob3RoZXJOb2RlKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0V4cGxvZGluZykgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgY2MubG9nKCflpITnkIbngrjlvLnnorDmkp4gLSDnorDmkp7lr7nosaE6Jywgb3RoZXJOb2RlLmdyb3VwKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChvdGhlck5vZGUuZ3JvdXAgPT09ICdwbGF5ZXInKSB7XG4gICAgICAgICAgICBjYy5sb2coJ+eCuOW8ueWHu+S4reeOqeWuticpO1xuICAgICAgICAgICAgbGV0IHBsYXllciA9IG90aGVyTm9kZS5nZXRDb21wb25lbnQoJ1BsYXllcicpO1xuICAgICAgICAgICAgaWYgKHBsYXllciAmJiBwbGF5ZXIudGFrZURhbWFnZSkge1xuICAgICAgICAgICAgICAgIHBsYXllci50YWtlRGFtYWdlKHRoaXMuX2RhbWFnZSk7XG4gICAgICAgICAgICAgICAgY2MubG9nKCflr7nnjqnlrrbpgKDmiJDkvKTlrrM6JywgdGhpcy5fZGFtYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZXhwbG9kZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyTm9kZS5ncm91cCA9PT0gJ3dhbGwnKSB7XG4gICAgICAgICAgICBjYy5sb2coJ+eCuOW8ueeisOWIsOWimeWjgScpO1xuICAgICAgICAgICAgdGhpcy5leHBsb2RlKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZXhwbG9kZSgpIHtcbiAgICAgICAgLy8g6Ziy5q2i6YeN5aSN6LCD55SoXG4gICAgICAgIGlmICh0aGlzLl9pc0V4cGxvZGluZykge1xuICAgICAgICAgICAgY2MubG9nKCfngrjlvLnlt7Lnu4/lnKjniIbngrjkuK3vvIzot7Pov4fph43lpI3osIPnlKgnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pc0V4cGxvZGluZyA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICBjYy5sb2coJ+aJp+ihjOeCuOW8ueeIhueCuOaViOaenCcpO1xuICAgICAgICBcbiAgICAgICAgLy8g56uL5Y2z5YGc5q2i56e75YqoXG4gICAgICAgIGxldCByaWdpZEJvZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgICAgICBpZiAocmlnaWRCb2R5KSB7XG4gICAgICAgICAgICByaWdpZEJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g5pKt5pS+54iG54K46Z+z5pWIXG4gICAgICAgIGlmICh0aGlzLmV4cGxvc2lvbkF1ZGlvKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZXhwbG9zaW9uQXVkaW8sIGZhbHNlLCAwLjMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5Yib5bu654iG54K45pWI5p6cXG4gICAgICAgIGlmICh0aGlzLmV4cGxvc2lvblByZWZhYikge1xuICAgICAgICAgICAgbGV0IGV4cGxvc2lvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZXhwbG9zaW9uUHJlZmFiKTtcbiAgICAgICAgICAgIGV4cGxvc2lvbi5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24pO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChleHBsb3Npb24pO1xuXG4gICAgICAgICAgICAvLyDorr7nva7niIbngrjmlYjmnpznmoTkvKTlrrPlgLxcbiAgICAgICAgICAgIGxldCBleHBsb3Npb25Db21wID0gZXhwbG9zaW9uLmdldENvbXBvbmVudCgnRXhwbG9zaW9uRWZmZWN0Jyk7XG4gICAgICAgICAgICBpZiAoZXhwbG9zaW9uQ29tcCkge1xuICAgICAgICAgICAgICAgIGV4cGxvc2lvbkNvbXAuZGFtYWdlID0gdGhpcy5fZGFtYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g56uL5Y2z6ZSA5q+B54K45by5XG4gICAgICAgIGlmICh0aGlzLm5vZGUgJiYgdGhpcy5ub2RlLmlzVmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8g5re75Yqg56Kw5pKe5Zue6LCDXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICAvLyDmuIXnkIblrprml7blmajlkozlhbbku5botYTmupBcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgIFxuICAgICAgICAvLyDnp7vpmaTmiYDmnInkuovku7bnm5HlkKxcbiAgICAgICAgaWYgKHRoaXMubm9kZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9mZignKicpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjYy5sb2coJ+eCuOW8ueiiq+mUgOavgScpO1xuICAgIH1cbn0pOyAiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ExplosionEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2c6575+mahEuJeDjYDgSLBO', 'ExplosionEffect');
// scripts/ExplosionEffect.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    damage: {
      "default": 20,
      type: cc.Integer,
      tooltip: '爆炸伤害'
    },
    duration: {
      "default": 0.5,
      type: cc.Float,
      tooltip: '爆炸持续时间'
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    // 添加碰撞组件
    var collider = this.getComponent(cc.BoxCollider);

    if (!collider) {
      collider = this.addComponent(cc.BoxCollider);
      collider.size = cc.size(40, 40); // 设置爆炸范围
    } // 设置碰撞分组


    this.node.group = 'explosion'; // 在duration时间后自动销毁爆炸效果

    this.scheduleOnce(function () {
      if (_this.node && _this.node.isValid) {
        cc.log('爆炸效果到达持续时间，自动销毁');

        _this.node.destroy();
      }
    }, this.duration);
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    cc.log('爆炸效果碰撞 - 碰撞对象:', other.node.group);

    if (other.node.group === 'player') {
      // 对玩家造成伤害
      var player = other.node.getComponent('Player');

      if (player && player.takeDamage) {
        player.takeDamage(this.damage);
        cc.log('爆炸效果对玩家造成伤害:', this.damage);
      }
    }
  },
  onDestroy: function onDestroy() {
    this.unscheduleAllCallbacks();
    cc.log('爆炸效果被销毁');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0V4cGxvc2lvbkVmZmVjdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImRhbWFnZSIsInR5cGUiLCJJbnRlZ2VyIiwidG9vbHRpcCIsImR1cmF0aW9uIiwiRmxvYXQiLCJvbkxvYWQiLCJjb2xsaWRlciIsImdldENvbXBvbmVudCIsIkJveENvbGxpZGVyIiwiYWRkQ29tcG9uZW50Iiwic2l6ZSIsIm5vZGUiLCJncm91cCIsInNjaGVkdWxlT25jZSIsImlzVmFsaWQiLCJsb2ciLCJkZXN0cm95Iiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsInBsYXllciIsInRha2VEYW1hZ2UiLCJvbkRlc3Ryb3kiLCJ1bnNjaGVkdWxlQWxsQ2FsbGJhY2tzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsTUFBTSxFQUFFO01BQ0osV0FBUyxFQURMO01BRUpDLElBQUksRUFBRUwsRUFBRSxDQUFDTSxPQUZMO01BR0pDLE9BQU8sRUFBRTtJQUhMLENBREE7SUFNUkMsUUFBUSxFQUFFO01BQ04sV0FBUyxHQURIO01BRU5ILElBQUksRUFBRUwsRUFBRSxDQUFDUyxLQUZIO01BR05GLE9BQU8sRUFBRTtJQUhIO0VBTkYsQ0FIUDtFQWdCTEcsTUFoQkssb0JBZ0JJO0lBQUE7O0lBQ0w7SUFDQSxJQUFJQyxRQUFRLEdBQUcsS0FBS0MsWUFBTCxDQUFrQlosRUFBRSxDQUFDYSxXQUFyQixDQUFmOztJQUNBLElBQUksQ0FBQ0YsUUFBTCxFQUFlO01BQ1hBLFFBQVEsR0FBRyxLQUFLRyxZQUFMLENBQWtCZCxFQUFFLENBQUNhLFdBQXJCLENBQVg7TUFDQUYsUUFBUSxDQUFDSSxJQUFULEdBQWdCZixFQUFFLENBQUNlLElBQUgsQ0FBUSxFQUFSLEVBQVksRUFBWixDQUFoQixDQUZXLENBRXNCO0lBQ3BDLENBTkksQ0FRTDs7O0lBQ0EsS0FBS0MsSUFBTCxDQUFVQyxLQUFWLEdBQWtCLFdBQWxCLENBVEssQ0FXTDs7SUFDQSxLQUFLQyxZQUFMLENBQWtCLFlBQU07TUFDcEIsSUFBSSxLQUFJLENBQUNGLElBQUwsSUFBYSxLQUFJLENBQUNBLElBQUwsQ0FBVUcsT0FBM0IsRUFBb0M7UUFDaENuQixFQUFFLENBQUNvQixHQUFILENBQU8saUJBQVA7O1FBQ0EsS0FBSSxDQUFDSixJQUFMLENBQVVLLE9BQVY7TUFDSDtJQUNKLENBTEQsRUFLRyxLQUFLYixRQUxSO0VBTUgsQ0FsQ0k7RUFvQ0xjLGdCQXBDSyw0QkFvQ1lDLEtBcENaLEVBb0NtQkMsSUFwQ25CLEVBb0N5QjtJQUMxQnhCLEVBQUUsQ0FBQ29CLEdBQUgsQ0FBTyxnQkFBUCxFQUF5QkcsS0FBSyxDQUFDUCxJQUFOLENBQVdDLEtBQXBDOztJQUVBLElBQUlNLEtBQUssQ0FBQ1AsSUFBTixDQUFXQyxLQUFYLEtBQXFCLFFBQXpCLEVBQW1DO01BQy9CO01BQ0EsSUFBSVEsTUFBTSxHQUFHRixLQUFLLENBQUNQLElBQU4sQ0FBV0osWUFBWCxDQUF3QixRQUF4QixDQUFiOztNQUNBLElBQUlhLE1BQU0sSUFBSUEsTUFBTSxDQUFDQyxVQUFyQixFQUFpQztRQUM3QkQsTUFBTSxDQUFDQyxVQUFQLENBQWtCLEtBQUt0QixNQUF2QjtRQUNBSixFQUFFLENBQUNvQixHQUFILENBQU8sY0FBUCxFQUF1QixLQUFLaEIsTUFBNUI7TUFDSDtJQUNKO0VBQ0osQ0EvQ0k7RUFpREx1QixTQWpESyx1QkFpRE87SUFDUixLQUFLQyxzQkFBTDtJQUNBNUIsRUFBRSxDQUFDb0IsR0FBSCxDQUFPLFNBQVA7RUFDSDtBQXBESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBkYW1hZ2U6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDIwLFxuICAgICAgICAgICAgdHlwZTogY2MuSW50ZWdlcixcbiAgICAgICAgICAgIHRvb2x0aXA6ICfniIbngrjkvKTlrrMnXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAwLjUsXG4gICAgICAgICAgICB0eXBlOiBjYy5GbG9hdCxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfniIbngrjmjIHnu63ml7bpl7QnXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyDmt7vliqDnorDmkp7nu4Tku7ZcbiAgICAgICAgbGV0IGNvbGxpZGVyID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpO1xuICAgICAgICBpZiAoIWNvbGxpZGVyKSB7XG4gICAgICAgICAgICBjb2xsaWRlciA9IHRoaXMuYWRkQ29tcG9uZW50KGNjLkJveENvbGxpZGVyKTtcbiAgICAgICAgICAgIGNvbGxpZGVyLnNpemUgPSBjYy5zaXplKDQwLCA0MCk7IC8vIOiuvue9rueIhueCuOiMg+WbtFxuICAgICAgICB9XG5cbiAgICAgICAgLy8g6K6+572u56Kw5pKe5YiG57uEXG4gICAgICAgIHRoaXMubm9kZS5ncm91cCA9ICdleHBsb3Npb24nO1xuXG4gICAgICAgIC8vIOWcqGR1cmF0aW9u5pe26Ze05ZCO6Ieq5Yqo6ZSA5q+B54iG54K45pWI5p6cXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUgJiYgdGhpcy5ub2RlLmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coJ+eIhueCuOaViOaenOWIsOi+vuaMgee7reaXtumXtO+8jOiHquWKqOmUgOavgScpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMuZHVyYXRpb24pO1xuICAgIH0sXG5cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGNjLmxvZygn54iG54K45pWI5p6c56Kw5pKeIC0g56Kw5pKe5a+56LGhOicsIG90aGVyLm5vZGUuZ3JvdXApO1xuICAgICAgICBcbiAgICAgICAgaWYgKG90aGVyLm5vZGUuZ3JvdXAgPT09ICdwbGF5ZXInKSB7XG4gICAgICAgICAgICAvLyDlr7nnjqnlrrbpgKDmiJDkvKTlrrNcbiAgICAgICAgICAgIGxldCBwbGF5ZXIgPSBvdGhlci5ub2RlLmdldENvbXBvbmVudCgnUGxheWVyJyk7XG4gICAgICAgICAgICBpZiAocGxheWVyICYmIHBsYXllci50YWtlRGFtYWdlKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnRha2VEYW1hZ2UodGhpcy5kYW1hZ2UpO1xuICAgICAgICAgICAgICAgIGNjLmxvZygn54iG54K45pWI5p6c5a+5546p5a626YCg5oiQ5Lyk5a6zOicsIHRoaXMuZGFtYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgICAgICBjYy5sb2coJ+eIhueCuOaViOaenOiiq+mUgOavgScpO1xuICAgIH1cbn0pOyAiXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2FtZXJhLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGxheWVyTm9kZSIsIk5vZGUiLCJzdGFydCIsInVwZGF0ZSIsImR0Iiwid19wb3MiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJ2MiIsIm5fcG9zIiwibm9kZSIsInBhcmVudCIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLFVBQVUsRUFBRUosRUFBRSxDQUFDSztFQUNuQixDQUFDO0VBRUQ7RUFFQTtFQUVBQyxLQUFLLFdBQUFBLE1BQUEsRUFBSSxDQUVULENBQUM7RUFFREMsTUFBTSxXQUFBQSxPQUFFQyxFQUFFLEVBQUU7SUFDUixJQUFHLENBQUMsSUFBSSxDQUFDSixVQUFVLEVBQUU7SUFDckIsSUFBSUssS0FBSyxHQUFHLElBQUksQ0FBQ0wsVUFBVSxDQUFDTSxxQkFBcUIsQ0FBQ1YsRUFBRSxDQUFDVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlELElBQUlDLEtBQUssR0FBRyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxvQkFBb0IsQ0FBQ04sS0FBSyxDQUFDO0lBQ3hELElBQUksQ0FBQ0ksSUFBSSxDQUFDRyxRQUFRLEdBQUdKLEtBQUs7RUFDOUI7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwbGF5ZXJOb2RlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnBsYXllck5vZGUpIHJldHVybjtcclxuICAgICAgICBsZXQgd19wb3MgPSB0aGlzLnBsYXllck5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICBsZXQgbl9wb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdfcG9zKTtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBuX3BvcztcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
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
                    var __filename = 'preview-scripts/assets/scripts/Monster.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d5a02WiMxF572qa+T4fVyu', 'Monster');
// scripts/Monster.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    maxHealth: {
      "default": 100,
      type: cc.Integer,
      tooltip: '怪物最大生命值'
    },
    collectAudio: {
      "default": null,
      type: cc.AudioClip,
      tooltip: '收集星星的音效'
    },
    currentHealth: {
      "default": 100,
      type: cc.Integer,
      tooltip: '怪物当前生命值'
    },
    healthBar: {
      "default": null,
      type: cc.Node,
      tooltip: '血条节点'
    },
    hitAudio: {
      "default": null,
      type: cc.AudioClip,
      tooltip: '受击音效'
    },
    deathAudio: {
      "default": null,
      type: cc.AudioClip,
      tooltip: '死亡音效'
    },
    bombPrefab: {
      "default": null,
      type: cc.Prefab,
      tooltip: '炸弹预制体'
    },
    starPrefab: {
      "default": null,
      type: cc.Prefab,
      tooltip: '星星预制体'
    },
    detectionRadius: {
      "default": 300,
      type: cc.Float,
      tooltip: '检测玩家的范围'
    },
    moveSpeed: {
      "default": 50,
      type: cc.Float,
      tooltip: '移动速度'
    },
    shootInterval: {
      "default": 2.0,
      type: cc.Float,
      tooltip: '发射间隔'
    }
  },
  onLoad: function onLoad() {
    this.currentHealth = this.maxHealth;
    this.lastShootTime = 0; // 确保初始化射击时间
    // 检查是否有炸弹预制体

    if (!this.bombPrefab) {
      cc.error('未设置炸弹预制体！');
    } // 确保有碰撞组件


    var collider = this.getComponent(cc.BoxCollider);

    if (!collider) {
      collider = this.addComponent(cc.BoxCollider);
      collider.size.width = this.node.width;
      collider.size.height = this.node.height;
    } // 设置碰撞组


    this.node.group = 'monster'; // 获取血条中的 Bar 节点

    if (this.healthBar) {
      this.barNode = this.healthBar.getChildByName('Bar');

      if (!this.barNode) {
        cc.error('找不到 Bar 节点！');
        return;
      } // 保存初始宽度


      this.originalBarWidth = this.barNode.width;
      cc.log('血条初始宽度：', this.originalBarWidth);
    } else {
      cc.error('未设置血条节点！');
    } // 添加死亡标记


    this.isDying = false; // 添加刚体组件

    var rigidBody = this.getComponent(cc.RigidBody);

    if (!rigidBody) {
      rigidBody = this.addComponent(cc.RigidBody);
      rigidBody.type = cc.RigidBodyType.Dynamic;
      rigidBody.fixedRotation = true;
    }
  },
  createHealthBar: function createHealthBar() {
    // 创建血条节点
    var healthBarNode = new cc.Node('HealthBar');
    this.node.addChild(healthBarNode);
    healthBarNode.zIndex = 1; // 创建背景条

    var barBgNode = new cc.Node('BarBg');
    healthBarNode.addChild(barBgNode);
    var barBgSprite = barBgNode.addComponent(cc.Sprite);
    barBgSprite.color = cc.Color.RED; // 创建血量条

    var barNode = new cc.Node('Bar');
    healthBarNode.addChild(barNode);
    var barSprite = barNode.addComponent(cc.Sprite);
    barSprite.color = cc.Color.GREEN; // 设置血条尺寸和位置

    healthBarNode.width = 100;
    healthBarNode.height = 10;
    barBgNode.width = 100;
    barBgNode.height = 10;
    barNode.width = 100;
    barNode.height = 10; // 将血条放在怪物上方

    healthBarNode.setPosition(0, this.node.height / 2 + 10); // 保存引用

    this.healthBar = healthBarNode;
    this.healthBarBg = barBgNode;
  },
  start: function start() {
    this.updateHealthBar();
  },
  takeDamage: function takeDamage(damage) {
    // 如果已经在死亡过程中，不再处理伤害
    if (this.isDying) return;
    if (typeof damage !== 'number' || damage <= 0) return; // 使用 playEffect 播放音效

    if (this.hitAudio) {
      cc.audioEngine.playEffect(this.hitAudio, false, 0.3);
    } // 减少生命值


    this.currentHealth = Math.max(0, this.currentHealth - damage); // 更新血条显示

    if (this.barNode && this.originalBarWidth) {
      var healthPercentage = this.currentHealth / this.maxHealth;
      this.barNode.width = this.originalBarWidth * healthPercentage;
    }

    cc.log('怪物受到伤害:', damage, '当前生命值:', this.currentHealth); // 检查是否死亡

    if (this.currentHealth <= 0 && !this.isDying) {
      this.die();
    }
  },
  updateHealthBar: function updateHealthBar() {
    if (this.healthBar) {
      var healthPercentage = this.currentHealth / this.maxHealth;
      this.healthBar.width = 100 * healthPercentage;
    }
  },
  die: function die() {
    var _this = this;

    // 设置死亡标记
    if (this.isDying) return;
    this.isDying = true; // 使用 playEffect 播放音效

    if (this.deathAudio) {
      var audioId = cc.audioEngine.playEffect(this.deathAudio, false, 0.3);
      cc.audioEngine.setFinishCallback(audioId, function () {
        _this.node.destroy();
      });
    } else {
      this.node.destroy();
    } // 生成星星


    this.spawnStars(3);
  },
  spawnStars: function spawnStars(count) {
    var _this2 = this;

    if (!this.starPrefab) {
      cc.error('星星预制体未设置!');
      return;
    }

    var canvasNode = cc.find('Canvas');
    var worldPos = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
    var gameManager = canvasNode.getComponent('GameManager');

    var _loop = function _loop(i) {
      var star = cc.instantiate(_this2.starPrefab);
      star.parent = canvasNode;
      star.zIndex = 999;
      var localPos = canvasNode.convertToNodeSpaceAR(worldPos); // 随机位置偏移

      var offsetX = (Math.random() - 0.5) * 100;
      var offsetY = (Math.random() - 0.5) * 100;
      star.setPosition(localPos.x + offsetX, localPos.y + offsetY); // 获取目标星星收集点

      var starNode = cc.find('Canvas/game/starCollect/star');

      if (!starNode) {
        cc.error('找不到star node！');
        star.destroy();
        return "continue";
      }

      var worldTargetPos = starNode.getPosition(); // 加载并播放收集音效

      cc.resources.load('audios/collect', cc.AudioClip, function (err, audioClip) {
        if (err) {
          cc.error('加载收集音效失败:', err);
          return;
        }

        cc.audioEngine.playEffect(audioClip, false, 3.0);
      }); // 创建飞向目标的动作

      var moveAction = cc.sequence(cc.moveTo(0.5, worldTargetPos).easing(cc.easeBackIn()), cc.callFunc(function () {
        // 通知GameManager增加星星数量
        if (gameManager) {
          gameManager.addStar();
        }

        star.destroy();
      }));
      star.runAction(moveAction);
    };

    for (var i = 0; i < count; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }
  },
  update: function update(dt) {
    if (this.isDying) return; // 获取玩家节点

    var player = cc.find('Canvas/game/player');

    if (!player) {
      cc.warn('找不到玩家节点！请确保场景中玩家节点的路径是 Canvas/game/player');
      return;
    } // 获取世界坐标下的位置


    var monsterPos = this.node.parent.convertToWorldSpaceAR(this.node.position);
    var playerPos = player.parent.convertToWorldSpaceAR(player.position); // 计算与玩家的距离

    var distance = cc.Vec2.distance(cc.v2(monsterPos.x, monsterPos.y), cc.v2(playerPos.x, playerPos.y)); // 添加调试日志

    cc.log('怪物位置:', monsterPos, '玩家位置:', playerPos, '距离:', distance, '检测范围:', this.detectionRadius); // 在检测范围内

    if (distance < this.detectionRadius) {
      // 追踪玩家
      var direction = cc.v2(playerPos.x - monsterPos.x, playerPos.y - monsterPos.y).normalize();
      var velocity = this.node.getComponent(cc.RigidBody).linearVelocity;
      velocity.x = direction.x * this.moveSpeed;
      velocity.y = direction.y * this.moveSpeed;
      this.node.getComponent(cc.RigidBody).linearVelocity = velocity;
      cc.log('怪物正在移动，速度:', velocity); // 发射炸弹

      this.shootBomb(player.position);
    } else {
      // 停止移动
      var _velocity = this.node.getComponent(cc.RigidBody).linearVelocity;
      _velocity.x = 0;
      _velocity.y = 0;
      this.node.getComponent(cc.RigidBody).linearVelocity = _velocity;
      cc.log('怪物停止移动，超出检测范围');
    }
  },
  shootBomb: function shootBomb(targetPos) {
    var currentTime = cc.director.getTotalTime() / 1000;
    cc.log('尝试发射炸弹 - 当前时间:', currentTime, '上次发射时间:', this.lastShootTime, '发射间隔:', this.shootInterval, '是否可以发射:', currentTime - this.lastShootTime >= this.shootInterval);

    if (currentTime - this.lastShootTime < this.shootInterval) {
      return;
    }

    if (!this.bombPrefab) {
      cc.error('炸弹预制体未设置！请在编辑器中设置 Monster 组件的 Bomb Prefab 属性');
      return;
    }

    this.lastShootTime = currentTime; // 创建炸弹

    var bomb = cc.instantiate(this.bombPrefab);

    if (!bomb) {
      cc.error('炸弹预制体实例化失败！');
      return;
    } // 设置炸弹位置为怪物当前位置


    bomb.setPosition(this.node.position);
    this.node.parent.addChild(bomb); // 计算方向（使用本地坐标）

    var direction = targetPos.sub(this.node.position); // 设置炸弹属性

    var bombComp = bomb.getComponent('Bomb');

    if (bombComp) {
      bombComp.setDirection(direction);
      bombComp.setSpeed(300); // 增加速度使炸弹移动更明显

      bombComp.setDamage(20);
      cc.log('炸弹已发射！方向:', direction, '目标位置:', targetPos, '当前位置:', this.node.position);
    } else {
      cc.error('炸弹没有Bomb组件！请确保炸弹预制体已添加 Bomb 组件');
      bomb.destroy();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01vbnN0ZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtYXhIZWFsdGgiLCJ0eXBlIiwiSW50ZWdlciIsInRvb2x0aXAiLCJjb2xsZWN0QXVkaW8iLCJBdWRpb0NsaXAiLCJjdXJyZW50SGVhbHRoIiwiaGVhbHRoQmFyIiwiTm9kZSIsImhpdEF1ZGlvIiwiZGVhdGhBdWRpbyIsImJvbWJQcmVmYWIiLCJQcmVmYWIiLCJzdGFyUHJlZmFiIiwiZGV0ZWN0aW9uUmFkaXVzIiwiRmxvYXQiLCJtb3ZlU3BlZWQiLCJzaG9vdEludGVydmFsIiwib25Mb2FkIiwibGFzdFNob290VGltZSIsImVycm9yIiwiY29sbGlkZXIiLCJnZXRDb21wb25lbnQiLCJCb3hDb2xsaWRlciIsImFkZENvbXBvbmVudCIsInNpemUiLCJ3aWR0aCIsIm5vZGUiLCJoZWlnaHQiLCJncm91cCIsImJhck5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsIm9yaWdpbmFsQmFyV2lkdGgiLCJsb2ciLCJpc0R5aW5nIiwicmlnaWRCb2R5IiwiUmlnaWRCb2R5IiwiUmlnaWRCb2R5VHlwZSIsIkR5bmFtaWMiLCJmaXhlZFJvdGF0aW9uIiwiY3JlYXRlSGVhbHRoQmFyIiwiaGVhbHRoQmFyTm9kZSIsImFkZENoaWxkIiwiekluZGV4IiwiYmFyQmdOb2RlIiwiYmFyQmdTcHJpdGUiLCJTcHJpdGUiLCJjb2xvciIsIkNvbG9yIiwiUkVEIiwiYmFyU3ByaXRlIiwiR1JFRU4iLCJzZXRQb3NpdGlvbiIsImhlYWx0aEJhckJnIiwic3RhcnQiLCJ1cGRhdGVIZWFsdGhCYXIiLCJ0YWtlRGFtYWdlIiwiZGFtYWdlIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0IiwiTWF0aCIsIm1heCIsImhlYWx0aFBlcmNlbnRhZ2UiLCJkaWUiLCJhdWRpb0lkIiwic2V0RmluaXNoQ2FsbGJhY2siLCJkZXN0cm95Iiwic3Bhd25TdGFycyIsImNvdW50IiwiY2FudmFzTm9kZSIsImZpbmQiLCJ3b3JsZFBvcyIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsIlZlYzIiLCJaRVJPIiwiZ2FtZU1hbmFnZXIiLCJpIiwic3RhciIsImluc3RhbnRpYXRlIiwicGFyZW50IiwibG9jYWxQb3MiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsIm9mZnNldFgiLCJyYW5kb20iLCJvZmZzZXRZIiwieCIsInkiLCJzdGFyTm9kZSIsIndvcmxkVGFyZ2V0UG9zIiwiZ2V0UG9zaXRpb24iLCJyZXNvdXJjZXMiLCJsb2FkIiwiZXJyIiwiYXVkaW9DbGlwIiwibW92ZUFjdGlvbiIsInNlcXVlbmNlIiwibW92ZVRvIiwiZWFzaW5nIiwiZWFzZUJhY2tJbiIsImNhbGxGdW5jIiwiYWRkU3RhciIsInJ1bkFjdGlvbiIsInVwZGF0ZSIsImR0IiwicGxheWVyIiwid2FybiIsIm1vbnN0ZXJQb3MiLCJwb3NpdGlvbiIsInBsYXllclBvcyIsImRpc3RhbmNlIiwidjIiLCJkaXJlY3Rpb24iLCJub3JtYWxpemUiLCJ2ZWxvY2l0eSIsImxpbmVhclZlbG9jaXR5Iiwic2hvb3RCb21iIiwidGFyZ2V0UG9zIiwiY3VycmVudFRpbWUiLCJkaXJlY3RvciIsImdldFRvdGFsVGltZSIsImJvbWIiLCJzdWIiLCJib21iQ29tcCIsInNldERpcmVjdGlvbiIsInNldFNwZWVkIiwic2V0RGFtYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsU0FBUyxFQUFFO01BQ1AsV0FBUyxHQURGO01BRVBDLElBQUksRUFBRUwsRUFBRSxDQUFDTSxPQUZGO01BR1BDLE9BQU8sRUFBRTtJQUhGLENBREg7SUFNUkMsWUFBWSxFQUFFO01BQ1YsV0FBUyxJQURDO01BRVZILElBQUksRUFBRUwsRUFBRSxDQUFDUyxTQUZDO01BR1ZGLE9BQU8sRUFBRTtJQUhDLENBTk47SUFX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Q0FvRyxJQUFJLENBQUN0RCxPQUFMO0lBQ0g7RUFDSjtBQTFWSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuIFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbWF4SGVhbHRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAxMDAsXG4gICAgICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+aAqueJqeacgOWkp+eUn+WRveWAvCdcbiAgICAgICAgfSxcbiAgICAgICAgY29sbGVjdEF1ZGlvOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+aUtumbhuaYn+aYn+eahOmfs+aViCdcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVudEhlYWx0aDoge1xuICAgICAgICAgICAgZGVmYXVsdDogMTAwLFxuICAgICAgICAgICAgdHlwZTogY2MuSW50ZWdlcixcbiAgICAgICAgICAgIHRvb2x0aXA6ICfmgKrnianlvZPliY3nlJ/lkb3lgLwnXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWx0aEJhcjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICB0b29sdGlwOiAn6KGA5p2h6IqC54K5J1xuICAgICAgICB9LFxuICAgICAgICBoaXRBdWRpbzoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgICAgIHRvb2x0aXA6ICflj5flh7vpn7PmlYgnXG4gICAgICAgIH0sXG4gICAgICAgIGRlYXRoQXVkaW86IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgICAgICB0b29sdGlwOiAn5q275Lqh6Z+z5pWIJ1xuICAgICAgICB9LFxuICAgICAgICBib21iUHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+eCuOW8uemihOWItuS9kydcbiAgICAgICAgfSxcbiAgICAgICAgc3RhclByZWZhYjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICAgICAgICAgIHRvb2x0aXA6ICfmmJ/mmJ/pooTliLbkvZMnXG4gICAgICAgIH0sXG4gICAgICAgIGRldGVjdGlvblJhZGl1czoge1xuICAgICAgICAgICAgZGVmYXVsdDogMzAwLFxuICAgICAgICAgICAgdHlwZTogY2MuRmxvYXQsXG4gICAgICAgICAgICB0b29sdGlwOiAn5qOA5rWL546p5a6255qE6IyD5Zu0J1xuICAgICAgICB9LFxuICAgICAgICBtb3ZlU3BlZWQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDUwLFxuICAgICAgICAgICAgdHlwZTogY2MuRmxvYXQsXG4gICAgICAgICAgICB0b29sdGlwOiAn56e75Yqo6YCf5bqmJ1xuICAgICAgICB9LFxuICAgICAgICBzaG9vdEludGVydmFsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAyLjAsXG4gICAgICAgICAgICB0eXBlOiBjYy5GbG9hdCxcbiAgICAgICAgICAgIHRvb2x0aXA6ICflj5HlsITpl7TpmpQnXG4gICAgICAgIH1cbiAgICB9LFxuIFxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SGVhbHRoID0gdGhpcy5tYXhIZWFsdGg7XG4gICAgICAgIHRoaXMubGFzdFNob290VGltZSA9IDA7IC8vIOehruS/neWIneWni+WMluWwhOWHu+aXtumXtFxuICAgICAgICBcbiAgICAgICAgLy8g5qOA5p+l5piv5ZCm5pyJ54K45by56aKE5Yi25L2TXG4gICAgICAgIGlmICghdGhpcy5ib21iUHJlZmFiKSB7XG4gICAgICAgICAgICBjYy5lcnJvcign5pyq6K6+572u54K45by56aKE5Yi25L2T77yBJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIOehruS/neacieeisOaSnue7hOS7tlxuICAgICAgICBsZXQgY29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XG4gICAgICAgIGlmICghY29sbGlkZXIpIHtcbiAgICAgICAgICAgIGNvbGxpZGVyID0gdGhpcy5hZGRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpO1xuICAgICAgICAgICAgY29sbGlkZXIuc2l6ZS53aWR0aCA9IHRoaXMubm9kZS53aWR0aDtcbiAgICAgICAgICAgIGNvbGxpZGVyLnNpemUuaGVpZ2h0ID0gdGhpcy5ub2RlLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICAvLyDorr7nva7norDmkp7nu4RcbiAgICAgICAgdGhpcy5ub2RlLmdyb3VwID0gJ21vbnN0ZXInO1xuIFxuICAgICAgICAvLyDojrflj5booYDmnaHkuK3nmoQgQmFyIOiKgueCuVxuICAgICAgICBpZiAodGhpcy5oZWFsdGhCYXIpIHtcbiAgICAgICAgICAgIHRoaXMuYmFyTm9kZSA9IHRoaXMuaGVhbHRoQmFyLmdldENoaWxkQnlOYW1lKCdCYXInKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5iYXJOb2RlKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoJ+aJvuS4jeWIsCBCYXIg6IqC54K577yBJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5L+d5a2Y5Yid5aeL5a695bqmXG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsQmFyV2lkdGggPSB0aGlzLmJhck5vZGUud2lkdGg7XG4gICAgICAgICAgICBjYy5sb2coJ+ihgOadoeWIneWni+WuveW6pu+8micsIHRoaXMub3JpZ2luYWxCYXJXaWR0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5lcnJvcign5pyq6K6+572u6KGA5p2h6IqC54K577yBJyk7XG4gICAgICAgIH1cbiBcbiAgICAgICAgLy8g5re75Yqg5q275Lqh5qCH6K6wXG4gICAgICAgIHRoaXMuaXNEeWluZyA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgLy8g5re75Yqg5Yia5L2T57uE5Lu2XG4gICAgICAgIGxldCByaWdpZEJvZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgICAgICBpZiAoIXJpZ2lkQm9keSkge1xuICAgICAgICAgICAgcmlnaWRCb2R5ID0gdGhpcy5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgICAgIHJpZ2lkQm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xuICAgICAgICAgICAgcmlnaWRCb2R5LmZpeGVkUm90YXRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbiBcbiAgICBjcmVhdGVIZWFsdGhCYXIoKSB7XG4gICAgICAgIC8vIOWIm+W7uuihgOadoeiKgueCuVxuICAgICAgICBsZXQgaGVhbHRoQmFyTm9kZSA9IG5ldyBjYy5Ob2RlKCdIZWFsdGhCYXInKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGhlYWx0aEJhck5vZGUpO1xuICAgICAgICBoZWFsdGhCYXJOb2RlLnpJbmRleCA9IDE7XG4gICAgICAgIFxuICAgICAgICAvLyDliJvlu7rog4zmma/mnaFcbiAgICAgICAgbGV0IGJhckJnTm9kZSA9IG5ldyBjYy5Ob2RlKCdCYXJCZycpO1xuICAgICAgICBoZWFsdGhCYXJOb2RlLmFkZENoaWxkKGJhckJnTm9kZSk7XG4gICAgICAgIGxldCBiYXJCZ1Nwcml0ZSA9IGJhckJnTm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgYmFyQmdTcHJpdGUuY29sb3IgPSBjYy5Db2xvci5SRUQ7XG4gICAgICAgIFxuICAgICAgICAvLyDliJvlu7rooYDph4/mnaFcbiAgICAgICAgbGV0IGJhck5vZGUgPSBuZXcgY2MuTm9kZSgnQmFyJyk7XG4gICAgICAgIGhlYWx0aEJhck5vZGUuYWRkQ2hpbGQoYmFyTm9kZSk7XG4gICAgICAgIGxldCBiYXJTcHJpdGUgPSBiYXJOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBiYXJTcHJpdGUuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcbiAgICAgICAgXG4gICAgICAgIC8vIOiuvue9ruihgOadoeWwuuWvuOWSjOS9jee9rlxuICAgICAgICBoZWFsdGhCYXJOb2RlLndpZHRoID0gMTAwO1xuICAgICAgICBoZWFsdGhCYXJOb2RlLmhlaWdodCA9IDEwO1xuICAgICAgICBiYXJCZ05vZGUud2lkdGggPSAxMDA7XG4gICAgICAgIGJhckJnTm9kZS5oZWlnaHQgPSAxMDtcbiAgICAgICAgYmFyTm9kZS53aWR0aCA9IDEwMDtcbiAgICAgICAgYmFyTm9kZS5oZWlnaHQgPSAxMDtcbiAgICAgICAgXG4gICAgICAgIC8vIOWwhuihgOadoeaUvuWcqOaAqueJqeS4iuaWuVxuICAgICAgICBoZWFsdGhCYXJOb2RlLnNldFBvc2l0aW9uKDAsIHRoaXMubm9kZS5oZWlnaHQgLyAyICsgMTApO1xuICAgICAgICBcbiAgICAgICAgLy8g5L+d5a2Y5byV55SoXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyID0gaGVhbHRoQmFyTm9kZTtcbiAgICAgICAgdGhpcy5oZWFsdGhCYXJCZyA9IGJhckJnTm9kZTtcbiAgICB9LFxuIFxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUhlYWx0aEJhcigpO1xuICAgIH0sXG4gXG4gICAgdGFrZURhbWFnZShkYW1hZ2UpIHtcbiAgICAgICAgLy8g5aaC5p6c5bey57uP5Zyo5q275Lqh6L+H56iL5Lit77yM5LiN5YaN5aSE55CG5Lyk5a6zXG4gICAgICAgIGlmICh0aGlzLmlzRHlpbmcpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGlmICh0eXBlb2YgZGFtYWdlICE9PSAnbnVtYmVyJyB8fCBkYW1hZ2UgPD0gMCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgLy8g5L2/55SoIHBsYXlFZmZlY3Qg5pKt5pS+6Z+z5pWIXG4gICAgICAgIGlmICh0aGlzLmhpdEF1ZGlvKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuaGl0QXVkaW8sIGZhbHNlLCAwLjMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDlh4/lsJHnlJ/lkb3lgLxcbiAgICAgICAgdGhpcy5jdXJyZW50SGVhbHRoID0gTWF0aC5tYXgoMCwgdGhpcy5jdXJyZW50SGVhbHRoIC0gZGFtYWdlKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOabtOaWsOihgOadoeaYvuekulxuICAgICAgICBpZiAodGhpcy5iYXJOb2RlICYmIHRoaXMub3JpZ2luYWxCYXJXaWR0aCkge1xuICAgICAgICAgICAgbGV0IGhlYWx0aFBlcmNlbnRhZ2UgPSB0aGlzLmN1cnJlbnRIZWFsdGggLyB0aGlzLm1heEhlYWx0aDtcbiAgICAgICAgICAgIHRoaXMuYmFyTm9kZS53aWR0aCA9IHRoaXMub3JpZ2luYWxCYXJXaWR0aCAqIGhlYWx0aFBlcmNlbnRhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNjLmxvZygn5oCq54mp5Y+X5Yiw5Lyk5a6zOicsIGRhbWFnZSwgJ+W9k+WJjeeUn+WRveWAvDonLCB0aGlzLmN1cnJlbnRIZWFsdGgpO1xuICAgICAgICBcbiAgICAgICAgLy8g5qOA5p+l5piv5ZCm5q275LqhXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRIZWFsdGggPD0gMCAmJiAhdGhpcy5pc0R5aW5nKSB7XG4gICAgICAgICAgICB0aGlzLmRpZSgpO1xuICAgICAgICB9XG4gICAgfSxcbiBcbiAgICB1cGRhdGVIZWFsdGhCYXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWx0aEJhcikge1xuICAgICAgICAgICAgbGV0IGhlYWx0aFBlcmNlbnRhZ2UgPSB0aGlzLmN1cnJlbnRIZWFsdGggLyB0aGlzLm1heEhlYWx0aDtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLndpZHRoID0gMTAwICogaGVhbHRoUGVyY2VudGFnZTtcbiAgICAgICAgfVxuICAgIH0sXG4gXG4gICAgZGllKCkge1xuICAgICAgICAvLyDorr7nva7mrbvkuqHmoIforrBcbiAgICAgICAgaWYgKHRoaXMuaXNEeWluZykgcmV0dXJuO1xuICAgICAgICB0aGlzLmlzRHlpbmcgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgLy8g5L2/55SoIHBsYXlFZmZlY3Qg5pKt5pS+6Z+z5pWIXG4gICAgICAgIGlmICh0aGlzLmRlYXRoQXVkaW8pIHtcbiAgICAgICAgICAgIGxldCBhdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmRlYXRoQXVkaW8sIGZhbHNlLCAwLjMpO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JZCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g55Sf5oiQ5pif5pifXG4gICAgICAgIHRoaXMuc3Bhd25TdGFycygzKTtcbiAgICB9LFxuXG4gICAgc3Bhd25TdGFycyhjb3VudCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhclByZWZhYikge1xuICAgICAgICAgICAgY2MuZXJyb3IoJ+aYn+aYn+mihOWItuS9k+acquiuvue9riEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcbiAgICAgICAgY29uc3Qgd29ybGRQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyk7XG4gICAgICAgIGNvbnN0IGdhbWVNYW5hZ2VyID0gY2FudmFzTm9kZS5nZXRDb21wb25lbnQoJ0dhbWVNYW5hZ2VyJyk7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdGFyID0gY2MuaW5zdGFudGlhdGUodGhpcy5zdGFyUHJlZmFiKTtcbiAgICAgICAgICAgIHN0YXIucGFyZW50ID0gY2FudmFzTm9kZTtcbiAgICAgICAgICAgIHN0YXIuekluZGV4ID0gOTk5O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxQb3MgPSBjYW52YXNOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g6ZqP5py65L2N572u5YGP56e7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRYID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMTAwO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDEwMDtcbiAgICAgICAgICAgIHN0YXIuc2V0UG9zaXRpb24obG9jYWxQb3MueCArIG9mZnNldFgsIGxvY2FsUG9zLnkgKyBvZmZzZXRZKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g6I635Y+W55uu5qCH5pif5pif5pS26ZuG54K5XG4gICAgICAgICAgICBjb25zdCBzdGFyTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcy9nYW1lL3N0YXJDb2xsZWN0L3N0YXInKTtcbiAgICAgICAgICAgIGlmICghc3Rhck5vZGUpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcign5om+5LiN5Yiwc3RhciBub2Rl77yBJyk7XG4gICAgICAgICAgICAgICAgc3Rhci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB3b3JsZFRhcmdldFBvcyA9IHN0YXJOb2RlLmdldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgIC8vIOWKoOi9veW5tuaSreaUvuaUtumbhumfs+aViFxuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoJ2F1ZGlvcy9jb2xsZWN0JywgY2MuQXVkaW9DbGlwLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKCfliqDovb3mlLbpm4bpn7PmlYjlpLHotKU6JywgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGF1ZGlvQ2xpcCwgZmFsc2UsIDMuMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIOWIm+W7uumjnuWQkeebruagh+eahOWKqOS9nFxuICAgICAgICAgICAgY29uc3QgbW92ZUFjdGlvbiA9IGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjUsIHdvcmxkVGFyZ2V0UG9zKS5lYXNpbmcoY2MuZWFzZUJhY2tJbigpKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOmAmuefpUdhbWVNYW5hZ2Vy5aKe5Yqg5pif5pif5pWw6YePXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lTWFuYWdlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1hbmFnZXIuYWRkU3RhcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0YXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgc3Rhci5ydW5BY3Rpb24obW92ZUFjdGlvbik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRHlpbmcpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIC8vIOiOt+WPlueOqeWutuiKgueCuVxuICAgICAgICBsZXQgcGxheWVyID0gY2MuZmluZCgnQ2FudmFzL2dhbWUvcGxheWVyJyk7XG4gICAgICAgIGlmICghcGxheWVyKSB7XG4gICAgICAgICAgICBjYy53YXJuKCfmib7kuI3liLDnjqnlrrboioLngrnvvIHor7fnoa7kv53lnLrmma/kuK3njqnlrrboioLngrnnmoTot6/lvoTmmK8gQ2FudmFzL2dhbWUvcGxheWVyJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIOiOt+WPluS4lueVjOWdkOagh+S4i+eahOS9jee9rlxuICAgICAgICBsZXQgbW9uc3RlclBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5wb3NpdGlvbik7XG4gICAgICAgIGxldCBwbGF5ZXJQb3MgPSBwbGF5ZXIucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwbGF5ZXIucG9zaXRpb24pO1xuICAgICAgICBcbiAgICAgICAgLy8g6K6h566X5LiO546p5a6255qE6Led56a7XG4gICAgICAgIGxldCBkaXN0YW5jZSA9IGNjLlZlYzIuZGlzdGFuY2UoXG4gICAgICAgICAgICBjYy52Mihtb25zdGVyUG9zLngsIG1vbnN0ZXJQb3MueSksXG4gICAgICAgICAgICBjYy52MihwbGF5ZXJQb3MueCwgcGxheWVyUG9zLnkpXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICAvLyDmt7vliqDosIPor5Xml6Xlv5dcbiAgICAgICAgY2MubG9nKCfmgKrniankvY3nva46JywgbW9uc3RlclBvcywgJ+eOqeWutuS9jee9rjonLCBwbGF5ZXJQb3MsICfot53nprs6JywgZGlzdGFuY2UsICfmo4DmtYvojIPlm7Q6JywgdGhpcy5kZXRlY3Rpb25SYWRpdXMpO1xuICAgICAgICBcbiAgICAgICAgLy8g5Zyo5qOA5rWL6IyD5Zu05YaFXG4gICAgICAgIGlmIChkaXN0YW5jZSA8IHRoaXMuZGV0ZWN0aW9uUmFkaXVzKSB7XG4gICAgICAgICAgICAvLyDov73ouKrnjqnlrrZcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb24gPSBjYy52MihcbiAgICAgICAgICAgICAgICBwbGF5ZXJQb3MueCAtIG1vbnN0ZXJQb3MueCxcbiAgICAgICAgICAgICAgICBwbGF5ZXJQb3MueSAtIG1vbnN0ZXJQb3MueVxuICAgICAgICAgICAgKS5ub3JtYWxpemUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHZlbG9jaXR5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5O1xuICAgICAgICAgICAgdmVsb2NpdHkueCA9IGRpcmVjdGlvbi54ICogdGhpcy5tb3ZlU3BlZWQ7XG4gICAgICAgICAgICB2ZWxvY2l0eS55ID0gZGlyZWN0aW9uLnkgKiB0aGlzLm1vdmVTcGVlZDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYy5sb2coJ+aAqueJqeato+WcqOenu+WKqO+8jOmAn+W6pjonLCB2ZWxvY2l0eSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIOWPkeWwhOeCuOW8uVxuICAgICAgICAgICAgdGhpcy5zaG9vdEJvbWIocGxheWVyLnBvc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWBnOatouenu+WKqFxuICAgICAgICAgICAgbGV0IHZlbG9jaXR5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5O1xuICAgICAgICAgICAgdmVsb2NpdHkueCA9IDA7XG4gICAgICAgICAgICB2ZWxvY2l0eS55ID0gMDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgICAgICAgICAgY2MubG9nKCfmgKrnianlgZzmraLnp7vliqjvvIzotoXlh7rmo4DmtYvojIPlm7QnKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgc2hvb3RCb21iKHRhcmdldFBvcykge1xuICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IGNjLmRpcmVjdG9yLmdldFRvdGFsVGltZSgpIC8gMTAwMDtcbiAgICAgICAgXG4gICAgICAgIGNjLmxvZygn5bCd6K+V5Y+R5bCE54K45by5IC0g5b2T5YmN5pe26Ze0OicsIGN1cnJlbnRUaW1lLCBcbiAgICAgICAgICAgICAgICfkuIrmrKHlj5HlsITml7bpl7Q6JywgdGhpcy5sYXN0U2hvb3RUaW1lLCBcbiAgICAgICAgICAgICAgICflj5HlsITpl7TpmpQ6JywgdGhpcy5zaG9vdEludGVydmFsLFxuICAgICAgICAgICAgICAgJ+aYr+WQpuWPr+S7peWPkeWwhDonLCAoY3VycmVudFRpbWUgLSB0aGlzLmxhc3RTaG9vdFRpbWUgPj0gdGhpcy5zaG9vdEludGVydmFsKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoY3VycmVudFRpbWUgLSB0aGlzLmxhc3RTaG9vdFRpbWUgPCB0aGlzLnNob290SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCF0aGlzLmJvbWJQcmVmYWIpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKCfngrjlvLnpooTliLbkvZPmnKrorr7nva7vvIHor7flnKjnvJbovpHlmajkuK3orr7nva4gTW9uc3RlciDnu4Tku7bnmoQgQm9tYiBQcmVmYWIg5bGe5oCnJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubGFzdFNob290VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgICBcbiAgICAgICAgLy8g5Yib5bu654K45by5XG4gICAgICAgIGxldCBib21iID0gY2MuaW5zdGFudGlhdGUodGhpcy5ib21iUHJlZmFiKTtcbiAgICAgICAgaWYgKCFib21iKSB7XG4gICAgICAgICAgICBjYy5lcnJvcign54K45by56aKE5Yi25L2T5a6e5L6L5YyW5aSx6LSl77yBJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIOiuvue9rueCuOW8ueS9jee9ruS4uuaAqueJqeW9k+WJjeS9jee9rlxuICAgICAgICBib21iLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbik7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoYm9tYik7XG4gICAgICAgIFxuICAgICAgICAvLyDorqHnrpfmlrnlkJHvvIjkvb/nlKjmnKzlnLDlnZDmoIfvvIlcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHRhcmdldFBvcy5zdWIodGhpcy5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOiuvue9rueCuOW8ueWxnuaAp1xuICAgICAgICBsZXQgYm9tYkNvbXAgPSBib21iLmdldENvbXBvbmVudCgnQm9tYicpO1xuICAgICAgICBpZiAoYm9tYkNvbXApIHtcbiAgICAgICAgICAgIGJvbWJDb21wLnNldERpcmVjdGlvbihkaXJlY3Rpb24pO1xuICAgICAgICAgICAgYm9tYkNvbXAuc2V0U3BlZWQoMzAwKTsgLy8g5aKe5Yqg6YCf5bqm5L2/54K45by556e75Yqo5pu05piO5pi+XG4gICAgICAgICAgICBib21iQ29tcC5zZXREYW1hZ2UoMjApO1xuICAgICAgICAgICAgY2MubG9nKCfngrjlvLnlt7Llj5HlsITvvIHmlrnlkJE6JywgZGlyZWN0aW9uLCAn55uu5qCH5L2N572uOicsIHRhcmdldFBvcywgJ+W9k+WJjeS9jee9rjonLCB0aGlzLm5vZGUucG9zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuZXJyb3IoJ+eCuOW8ueayoeaciUJvbWLnu4Tku7bvvIHor7fnoa7kv53ngrjlvLnpooTliLbkvZPlt7Lmt7vliqAgQm9tYiDnu4Tku7YnKTtcbiAgICAgICAgICAgIGJvbWIuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=
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
    },
    bulletPre: {
      "default": null,
      type: cc.Prefab
    },
    shootInterval: {
      "default": 0.05,
      type: cc.Float
    },
    lastFiretime: {
      "default": 0,
      type: cc.Float
    }
  },
  onLoad: function onLoad() {
    // 添加刚体组件
    var rigidBody = this.getComponent(cc.RigidBody);

    if (!rigidBody) {
      rigidBody = this.addComponent(cc.RigidBody);
      rigidBody.type = cc.RigidBodyType.Dynamic;
      rigidBody.fixedRotation = true;
      rigidBody.enabledContactListener = true;
    } // 添加碰撞组件


    var collider = this.getComponent(cc.BoxCollider);

    if (!collider) {
      collider = this.addComponent(cc.BoxCollider);
      collider.size = cc.size(this.node.width, this.node.height);

      if (this.node.width === 0 || this.node.height === 0) {
        collider.size = cc.size(40, 40); // 设置默认尺寸
      }
    } // 设置碰撞分组


    this.node.group = 'player';

    _JoystickEvent["default"].getInstance().on(_JoystickEnum["default"].JoystickEventType.TOUCH_START, this.onTouchStart, this);

    _JoystickEvent["default"].getInstance().on(_JoystickEnum["default"].JoystickEventType.TOUCH_MOVE, this.onTouchMove, this);

    _JoystickEvent["default"].getInstance().on(_JoystickEnum["default"].JoystickEventType.TOUCH_END, this.onTouchEnd, this);
  },
  start: function start() {
    cc.audioEngine.playMusic(this.audio_bg, true);
  },
  shoot: function shoot(monster) {
    var currentTime = cc.director.getTotalTime() / 1000;

    if (currentTime - this.lastFiretime > this.shootInterval) {
      this.lastFiretime = currentTime;
      var bullet = cc.instantiate(this.bulletPre);
      bullet.setPosition(this.node.position);
      this.node.parent.addChild(bullet);
      var monsterPos = monster.position;
      var dir = monsterPos.sub(bullet.position).normalize();
      var bulletComp = bullet.getComponent('bullets');
      bulletComp.setDirection(dir);
      bulletComp.setSpeed(200);
      bulletComp.setDamage(10);
    }
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
  onTouchEnemy: function onTouchEnemy(monster, dt) {
    this.shoot(monster);
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
  detectEnemy: function detectEnemy(dt) {
    var enemy = this.node.parent.getChildByName('enemy');
    var monster = enemy.getChildByName('monster');

    if (monster) {
      var monsterPos = monster.position;
      var playerPos = this.node.position;
      var distance = monsterPos.sub(playerPos).mag();

      if (distance < 200) {
        console.log("touch monster");
        this.onTouchEnemy(monster, dt);
      }
    } else {
      console.log("no monster");
    }
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
    this.detectEnemy(dt);
  },
  takeDamage: function takeDamage(damage) {
    cc.log('玩家受到伤害:', damage); // 处理玩家受伤逻辑
  },
  // 添加碰撞回调
  onCollisionEnter: function onCollisionEnter(other, self) {
    cc.log('Player 碰撞开始 - 碰撞对象:', other.node.group);

    if (other.node.group === 'bomb') {
      cc.log('Player 被炸弹击中');
    }
  },
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    cc.log('Player 接触开始 - 接触对象:', otherCollider.node.group);

    if (otherCollider.node.group === 'bomb') {
      cc.log('Player 被炸弹击中');
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsYXllci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm1vdmVEaXIiLCJ2MiIsImRpc3BsYXlOYW1lIiwidG9vbHRpcCIsIl9zcGVlZFR5cGUiLCJKb3lzdGlja0VudW0iLCJTcGVlZFR5cGUiLCJTVE9QIiwidHlwZSIsIl9tb3ZlU3BlZWQiLCJzdG9wU3BlZWQiLCJJbnRlZ2VyIiwibm9ybWFsU3BlZWQiLCJmYXN0U3BlZWQiLCJhdWRpb19jb2xsaWRlIiwiQXVkaW9DbGlwIiwiYXVkaW9fYmciLCJidWxsZXRQcmUiLCJQcmVmYWIiLCJzaG9vdEludGVydmFsIiwiRmxvYXQiLCJsYXN0RmlyZXRpbWUiLCJvbkxvYWQiLCJyaWdpZEJvZHkiLCJnZXRDb21wb25lbnQiLCJSaWdpZEJvZHkiLCJhZGRDb21wb25lbnQiLCJSaWdpZEJvZHlUeXBlIiwiRHluYW1pYyIsImZpeGVkUm90YXRpb24iLCJlbmFibGVkQ29udGFjdExpc3RlbmVyIiwiY29sbGlkZXIiLCJCb3hDb2xsaWRlciIsInNpemUiLCJub2RlIiwid2lkdGgiLCJoZWlnaHQiLCJncm91cCIsIkpveXN0aWNrRXZlbnQiLCJnZXRJbnN0YW5jZSIsIm9uIiwiSm95c3RpY2tFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIm9uVG91Y2hTdGFydCIsIlRPVUNIX01PVkUiLCJvblRvdWNoTW92ZSIsIlRPVUNIX0VORCIsIm9uVG91Y2hFbmQiLCJzdGFydCIsImF1ZGlvRW5naW5lIiwicGxheU11c2ljIiwic2hvb3QiLCJtb25zdGVyIiwiY3VycmVudFRpbWUiLCJkaXJlY3RvciIsImdldFRvdGFsVGltZSIsImJ1bGxldCIsImluc3RhbnRpYXRlIiwic2V0UG9zaXRpb24iLCJwb3NpdGlvbiIsInBhcmVudCIsImFkZENoaWxkIiwibW9uc3RlclBvcyIsImRpciIsInN1YiIsIm5vcm1hbGl6ZSIsImJ1bGxldENvbXAiLCJzZXREaXJlY3Rpb24iLCJzZXRTcGVlZCIsInNldERhbWFnZSIsIm9uRW5kQ29udGFjdCIsImNvbnRhY3QiLCJzZWxmQ29sbGlkZXIiLCJvdGhlckNvbGxpZGVyIiwiY3VycmVudEF1ZGlvIiwicGxheUVmZmVjdCIsImV2ZW50IiwiZGF0YSIsInNwZWVkVHlwZSIsIm1vdmVEaXN0YW5jZSIsIm9uVG91Y2hFbmVteSIsImR0IiwibW92ZSIsImx2IiwibGluZWFyVmVsb2NpdHkiLCJ4IiwieSIsImRldGVjdEVuZW15IiwiZW5lbXkiLCJnZXRDaGlsZEJ5TmFtZSIsInBsYXllclBvcyIsImRpc3RhbmNlIiwibWFnIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZSIsIk5PUk1BTCIsIkZBU1QiLCJ0YWtlRGFtYWdlIiwiZGFtYWdlIiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsIm9uQmVnaW5Db250YWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBRUxDLFVBQVUsRUFBRTtJQUVSO0lBQ0FDLE9BQU8sRUFBRTtNQUNMLFdBQVNKLEVBQUUsQ0FBQ0ssRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFULENBREo7TUFFTEMsV0FBVyxFQUFFLFVBRlI7TUFHTEMsT0FBTyxFQUFFO0lBSEosQ0FIRDtJQVFSQyxVQUFVLEVBQUU7TUFDUixXQUFTQyx3QkFBQSxDQUFhQyxTQUFiLENBQXVCQyxJQUR4QjtNQUVSTCxXQUFXLEVBQUUsWUFGTDtNQUdSTSxJQUFJLEVBQUVILHdCQUFBLENBQWFDLFNBSFg7TUFJUkgsT0FBTyxFQUFFO0lBSkQsQ0FSSjtJQWVSO0lBQ0FNLFVBQVUsRUFBRTtNQUNSLFdBQVMsQ0FERDtNQUVSUCxXQUFXLEVBQUUsWUFGTDtNQUdSQyxPQUFPLEVBQUU7SUFIRCxDQWhCSjtJQXNCUk8sU0FBUyxFQUFFO01BQ1AsV0FBUyxDQURGO01BRVBGLElBQUksRUFBRVos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WUMsS0E3TFosRUE2TG1CQyxJQTdMbkIsRUE2THlCO0lBQzFCMUcsRUFBRSxDQUFDa0csR0FBSCxDQUFPLHFCQUFQLEVBQThCTyxLQUFLLENBQUNuRSxJQUFOLENBQVdHLEtBQXpDOztJQUNBLElBQUlnRSxLQUFLLENBQUNuRSxJQUFOLENBQVdHLEtBQVgsS0FBcUIsTUFBekIsRUFBaUM7TUFDN0J6QyxFQUFFLENBQUNrRyxHQUFILENBQU8sY0FBUDtJQUNIO0VBQ0osQ0FsTUk7RUFvTUxTLGNBcE1LLDBCQW9NVWhDLE9BcE1WLEVBb01tQkMsWUFwTW5CLEVBb01pQ0MsYUFwTWpDLEVBb01nRDtJQUNqRDdFLEVBQUUsQ0FBQ2tHLEdBQUgsQ0FBTyxxQkFBUCxFQUE4QnJCLGFBQWEsQ0FBQ3ZDLElBQWQsQ0FBbUJHLEtBQWpEOztJQUNBLElBQUlvQyxhQUFhLENBQUN2QyxJQUFkLENBQW1CRyxLQUFuQixLQUE2QixNQUFqQyxFQUF5QztNQUNyQ3pDLEVBQUUsQ0FBQ2tHLEdBQUgsQ0FBTyxjQUFQO0lBQ0g7RUFDSjtBQXpNSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm95c3RpY2tFbnVtIGZyb20gXCJKb3lzdGlja0VudW1cIjtcbmltcG9ydCBKb3lzdGlja0V2ZW50IGZyb20gXCJKb3lzdGlja0V2ZW50XCI7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgICAgIC8vIGZyb20gam95c3RpY2tcbiAgICAgICAgbW92ZURpcjoge1xuICAgICAgICAgICAgZGVmYXVsdDogY2MudjIoMCwgMSksXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ01vdmUgRGlyJyxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfnp7vliqjmlrnlkJEnLFxuICAgICAgICB9LFxuICAgICAgICBfc3BlZWRUeXBlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBKb3lzdGlja0VudW0uU3BlZWRUeXBlLlNUT1AsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ1NwZWVkIFR5cGUnLFxuICAgICAgICAgICAgdHlwZTogSm95c3RpY2tFbnVtLlNwZWVkVHlwZSxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfpgJ/luqbnuqfliKsnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gZnJvbSBzZWxmXG4gICAgICAgIF9tb3ZlU3BlZWQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ01vdmUgU3BlZWQnLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+enu+WKqOmAn+W6pidcbiAgICAgICAgfSxcblxuICAgICAgICBzdG9wU3BlZWQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAsXG4gICAgICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+WBnOatouaXtumAn+W6pidcbiAgICAgICAgfSxcbiAgICAgICAgbm9ybWFsU3BlZWQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEwMCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkludGVnZXIsXG4gICAgICAgICAgICB0b29sdGlwOiAn5q2j5bi46YCf5bqmJ1xuICAgICAgICB9LFxuICAgICAgICBmYXN0U3BlZWQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDIwMCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkludGVnZXIsXG4gICAgICAgICAgICB0b29sdGlwOiAn5pyA5b+r6YCf5bqmJ1xuICAgICAgICB9LFxuICAgICAgICBhdWRpb19jb2xsaWRlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+eisOaSnumfs+aViCdcbiAgICAgICAgfSxcbiAgICAgICAgYXVkaW9fYmc6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgICAgICB0b29sdGlwOiAn6IOM5pmv6Z+z5LmQJ1xuICAgICAgICB9LFxuICAgICAgICBidWxsZXRQcmU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXG4gICAgICAgIH0sXG4gICAgICAgIHNob290SW50ZXJ2YWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAuMDUsXG4gICAgICAgICAgICB0eXBlOiBjYy5GbG9hdCxcbiAgICAgICAgfSxcbiAgICAgICAgbGFzdEZpcmV0aW1lOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxuICAgICAgICAgICAgdHlwZTogY2MuRmxvYXQsXG4gICAgICAgIH0sXG5cbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyDmt7vliqDliJrkvZPnu4Tku7ZcbiAgICAgICAgbGV0IHJpZ2lkQm9keSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgIGlmICghcmlnaWRCb2R5KSB7XG4gICAgICAgICAgICByaWdpZEJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgICAgICAgICAgcmlnaWRCb2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XG4gICAgICAgICAgICByaWdpZEJvZHkuZml4ZWRSb3RhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICByaWdpZEJvZHkuZW5hYmxlZENvbnRhY3RMaXN0ZW5lciA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmt7vliqDnorDmkp7nu4Tku7ZcbiAgICAgICAgbGV0IGNvbGxpZGVyID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpO1xuICAgICAgICBpZiAoIWNvbGxpZGVyKSB7XG4gICAgICAgICAgICBjb2xsaWRlciA9IHRoaXMuYWRkQ29tcG9uZW50KGNjLkJveENvbGxpZGVyKTtcbiAgICAgICAgICAgIGNvbGxpZGVyLnNpemUgPSBjYy5zaXplKHRoaXMubm9kZS53aWR0aCwgdGhpcy5ub2RlLmhlaWdodCk7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLndpZHRoID09PSAwIHx8IHRoaXMubm9kZS5oZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb2xsaWRlci5zaXplID0gY2Muc2l6ZSg0MCwgNDApOyAvLyDorr7nva7pu5jorqTlsLrlr7hcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiuvue9rueisOaSnuWIhue7hFxuICAgICAgICB0aGlzLm5vZGUuZ3JvdXAgPSAncGxheWVyJztcblxuICAgICAgICBKb3lzdGlja0V2ZW50LmdldEluc3RhbmNlKCkub24oSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIEpveXN0aWNrRXZlbnQuZ2V0SW5zdGFuY2UoKS5vbihKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgICAgIEpveXN0aWNrRXZlbnQuZ2V0SW5zdGFuY2UoKS5vbihKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYXVkaW9fYmcsIHRydWUpO1xuICAgIH0sXG5cbiAgICBzaG9vdChtb25zdGVyKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gY2MuZGlyZWN0b3IuZ2V0VG90YWxUaW1lKCkgLyAxMDAwO1xuICAgICAgICBpZiAoY3VycmVudFRpbWUgLSB0aGlzLmxhc3RGaXJldGltZSA+IHRoaXMuc2hvb3RJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0RmlyZXRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZSk7XG4gICAgICAgICAgICBidWxsZXQuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoYnVsbGV0KTtcblxuICAgICAgICAgICAgbGV0IG1vbnN0ZXJQb3MgPSBtb25zdGVyLnBvc2l0aW9uO1xuICAgICAgICAgICAgbGV0IGRpciA9IG1vbnN0ZXJQb3Muc3ViKGJ1bGxldC5wb3NpdGlvbikubm9ybWFsaXplKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBidWxsZXRDb21wID0gYnVsbGV0LmdldENvbXBvbmVudCgnYnVsbGV0cycpO1xuICAgICAgICAgICAgYnVsbGV0Q29tcC5zZXREaXJlY3Rpb24oZGlyKTtcbiAgICAgICAgICAgIGJ1bGxldENvbXAuc2V0U3BlZWQoMjAwKTtcbiAgICAgICAgICAgIGJ1bGxldENvbXAuc2V0RGFtYWdlKDEwKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkVuZENvbnRhY3Q6IGZ1bmN0aW9uIChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgLy9wbGF5IHNvdW5kIGVmZmVjdFxuICAgICAgICB0aGlzLmN1cnJlbnRBdWRpbyA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdWRpb19jb2xsaWRlLCBmYWxzZSk7XG4gICAgfSxcblxuICAgIG9uVG91Y2hTdGFydCgpIHtcblxuICAgIH0sXG5cbiAgICBvblRvdWNoTW92ZShldmVudCwgZGF0YSkge1xuICAgICAgICB0aGlzLl9zcGVlZFR5cGUgPSBkYXRhLnNwZWVkVHlwZTtcbiAgICAgICAgdGhpcy5tb3ZlRGlyID0gZGF0YS5tb3ZlRGlzdGFuY2U7XG4gICAgfSxcblxuICAgIG9uVG91Y2hFbmQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5fc3BlZWRUeXBlID0gZGF0YS5zcGVlZFR5cGU7XG4gICAgfSxcbiAgICBvblRvdWNoRW5lbXkobW9uc3RlciwgZHQpIHtcbiAgICAgICAgdGhpcy5zaG9vdChtb25zdGVyKTtcbiAgICB9LFxuXG4gICAgLy8gbWV0aG9kc1xuICAgIG1vdmUoKSB7XG4gICAgICAgIC8vIHRoaXMubm9kZS5hbmdsZSA9IGNjLm1pc2MucmFkaWFuc1RvRGVncmVlcyhcbiAgICAgICAgLy8gICAgIE1hdGguYXRhbjIodGhpcy5tb3ZlRGlyLnksIHRoaXMubW92ZURpci54KVxuICAgICAgICAvLyApIC0gOTA7XG4gICAgICAgIC8vbGV0IG5ld1BvcyA9IHRoaXMubm9kZS5wb3NpdGlvbi5hZGQodGhpcy5tb3ZlRGlyLm11bCh0aGlzLl9tb3ZlU3BlZWQgLyAxMjApKTtcbiAgICAgICAgLy90aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3UG9zKTtcbiAgICAgICAgbGV0IGx2ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5O1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX21vdmVTcGVlZCk7XG4gICAgICAgIGx2LnggID0gdGhpcy5tb3ZlRGlyLnggKiB0aGlzLl9tb3ZlU3BlZWQgLyAyO1xuICAgICAgICBsdi55ICA9IHRoaXMubW92ZURpci55ICogdGhpcy5fbW92ZVNwZWVkIC8gMjtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gbHY7XG4gICAgfSxcbiAgICBkZXRlY3RFbmVteShkdCkge1xuICAgICAgICBsZXQgZW5lbXkgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKCdlbmVteScpO1xuICAgICAgICBsZXQgbW9uc3RlciA9IGVuZW15LmdldENoaWxkQnlOYW1lKCdtb25zdGVyJyk7XG4gICAgICAgIGlmIChtb25zdGVyKSB7XG4gICAgICAgICAgICBsZXQgbW9uc3RlclBvcyA9IG1vbnN0ZXIucG9zaXRpb247XG4gICAgICAgICAgICBsZXQgcGxheWVyUG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gbW9uc3RlclBvcy5zdWIocGxheWVyUG9zKS5tYWcoKTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDIwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG91Y2ggbW9uc3RlclwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uVG91Y2hFbmVteShtb25zdGVyLCBkdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIG1vbnN0ZXJcIik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5fc3BlZWRUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIEpveXN0aWNrRW51bS5TcGVlZFR5cGUuU1RPUDpcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlU3BlZWQgPSB0aGlzLnN0b3BTcGVlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSm95c3RpY2tFbnVtLlNwZWVkVHlwZS5OT1JNQUw6XG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZVNwZWVkID0gdGhpcy5ub3JtYWxTcGVlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSm95c3RpY2tFbnVtLlNwZWVkVHlwZS5GQVNUOlxuICAgICAgICAgICAgICAgIHRoaXMuX21vdmVTcGVlZCA9IHRoaXMuZmFzdFNwZWVkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmUoKTtcbiAgICAgICAgdGhpcy5kZXRlY3RFbmVteShkdCk7XG4gICAgfSxcblxuICAgIHRha2VEYW1hZ2UoZGFtYWdlKSB7XG4gICAgICAgIGNjLmxvZygn546p5a625Y+X5Yiw5Lyk5a6zOicsIGRhbWFnZSk7XG4gICAgICAgIC8vIOWkhOeQhueOqeWutuWPl+S8pOmAu+i+kVxuICAgIH0sXG5cbiAgICAvLyDmt7vliqDnorDmkp7lm57osINcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGNjLmxvZygnUGxheWVyIOeisOaSnuW8gOWniyAtIOeisOaSnuWvueixoTonLCBvdGhlci5ub2RlLmdyb3VwKTtcbiAgICAgICAgaWYgKG90aGVyLm5vZGUuZ3JvdXAgPT09ICdib21iJykge1xuICAgICAgICAgICAgY2MubG9nKCdQbGF5ZXIg6KKr54K45by55Ye75LitJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XG4gICAgICAgIGNjLmxvZygnUGxheWVyIOaOpeinpuW8gOWniyAtIOaOpeinpuWvueixoTonLCBvdGhlckNvbGxpZGVyLm5vZGUuZ3JvdXApO1xuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci5ub2RlLmdyb3VwID09PSAnYm9tYicpIHtcbiAgICAgICAgICAgIGNjLmxvZygnUGxheWVyIOiiq+eCuOW8ueWHu+S4rScpO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19
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
// Learn Attribute
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2J1dHRvbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIm5vZGUiLCJvbiIsIkJ1dHRvbkNsaWNrIiwib3BhY2l0eSIsImRlc3Ryb3kiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLEVBSFA7RUFPTDtFQUVBQyxNQVRLLG9CQVNLO0lBQ04sS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsT0FBYixFQUFzQixLQUFLQyxXQUEzQixFQUF3QyxJQUF4QztFQUNILENBWEk7RUFhTEEsV0FBVyxFQUFFLHVCQUFZO0lBQ3JCLEtBQUtGLElBQUwsQ0FBVUcsT0FBVixHQUFvQixDQUFwQixDQURxQixDQUVyQjs7SUFDQSxLQUFLSCxJQUFMLENBQVVJLE9BQVY7RUFDSCxDQWpCSTtFQW1CTEMsS0FuQkssbUJBbUJJLENBRVIsQ0FyQkksQ0F1Qkw7O0FBdkJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZVxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdjbGljaycsIHRoaXMuQnV0dG9uQ2xpY2ssIHRoaXMpO1xuICAgIH0sXG5cbiAgICBCdXR0b25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgIC8vZGVzdHJveVxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIFxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/bullets.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1f45dz17ztD7IxXEQS7GrQ3', 'bullets');
// scripts/bullets.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  srcHeight: Number,
  srcWidth: Number,
  properties: {
    direction: cc.v2(0, 1),
    speed: 0,
    damage: {
      "default": 20,
      type: cc.Integer,
      tooltip: '子弹伤害值'
    },
    lifeTime: {
      "default": 3,
      type: cc.Float,
      tooltip: '子弹生存时间（秒）'
    },
    boundaryX: 480,
    boundaryY: 960
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var _this = this;

    this.srcHeight = cc.view.getCanvasSize().height;
    this.srcWidth = cc.view.getCanvasSize().width; // 添加碰撞体

    var collider = this.getComponent(cc.BoxCollider);

    if (!collider) {
      collider = this.addComponent(cc.BoxCollider);
      collider.size.width = this.node.width;
      collider.size.height = this.node.height;
    } // 设置碰撞组


    this.node.group = 'bullet'; // 启用碰撞检测系统

    var manager = cc.director.getCollisionManager();
    manager.enabled = true; // 设置定时销毁

    this.scheduleOnce(function () {
      if (_this.node && _this.node.isValid) {
        cc.log('子弹到达生存时间上限，自动销毁');

        _this.node.destroy();
      }
    }, this.lifeTime);
  },
  start: function start() {},
  setDirection: function setDirection(dir) {
    this.direction = dir;
  },
  setSpeed: function setSpeed(speed) {
    this.speed = speed;
  },
  setDamage: function setDamage(damage) {
    this.damage = damage;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.group === 'monster') {
      var monster = other.node.getComponent('Monster');

      if (monster) {
        monster.takeDamage(this.damage);
        cc.log('子弹击中怪物！造成伤害:', this.damage);
      } // 销毁子弹


      this.node.destroy();
    }
  },
  update: function update(dt) {
    // 移动子弹
    var newPos = this.node.position.add(this.direction.mul(this.speed * dt));
    this.node.setPosition(newPos); // 如果子弹超出屏幕范围，销毁子弹

    var screenSize = cc.view.getVisibleSize();

    if (Math.abs(this.node.x) > screenSize.width / 2 || Math.abs(this.node.y) > screenSize.height / 2) {
      this.node.destroy();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2J1bGxldHMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInNyY0hlaWdodCIsIk51bWJlciIsInNyY1dpZHRoIiwicHJvcGVydGllcyIsImRpcmVjdGlvbiIsInYyIiwic3BlZWQiLCJkYW1hZ2UiLCJ0eXBlIiwiSW50ZWdlciIsInRvb2x0aXAiLCJsaWZlVGltZSIsIkZsb2F0IiwiYm91bmRhcnlYIiwiYm91bmRhcnlZIiwib25Mb2FkIiwidmlldyIsImdldENhbnZhc1NpemUiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbGxpZGVyIiwiZ2V0Q29tcG9uZW50IiwiQm94Q29sbGlkZXIiLCJhZGRDb21wb25lbnQiLCJzaXplIiwibm9kZSIsImdyb3VwIiwibWFuYWdlciIsImRpcmVjdG9yIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJzY2hlZHVsZU9uY2UiLCJpc1ZhbGlkIiwibG9nIiwiZGVzdHJveSIsInN0YXJ0Iiwic2V0RGlyZWN0aW9uIiwiZGlyIiwic2V0U3BlZWQiLCJzZXREYW1hZ2UiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwibW9uc3RlciIsInRha2VEYW1hZ2UiLCJ1cGRhdGUiLCJkdCIsIm5ld1BvcyIsInBvc2l0aW9uIiwiYWRkIiwibXVsIiwic2V0UG9zaXRpb24iLCJzY3JlZW5TaXplIiwiZ2V0VmlzaWJsZVNpemUiLCJNYXRoIiwiYWJzIiwieCIsInkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFNBQVMsRUFBRUMsTUFITjtFQUlMQyxRQUFRLEVBQUVELE1BSkw7RUFNTEUsVUFBVSxFQUFFO0lBQ1JDLFNBQVMsRUFBRVAsRUFBRSxDQUFDUSxFQUFILENBQU0sQ0FBTixFQUFTLENB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QWU4QyxHQUFmLENBQW1CLEtBQUs1QyxLQUFMLEdBQWF3QyxFQUFoQyxDQUF2QixDQUFiO0lBQ0EsS0FBS3JCLElBQUwsQ0FBVTBCLFdBQVYsQ0FBc0JKLE1BQXRCLEVBSFEsQ0FLUjs7SUFDQSxJQUFJSyxVQUFVLEdBQUd2RCxFQUFFLENBQUNtQixJQUFILENBQVFxQyxjQUFSLEVBQWpCOztJQUNBLElBQUlDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUs5QixJQUFMLENBQVUrQixDQUFuQixJQUF3QkosVUFBVSxDQUFDakMsS0FBWCxHQUFpQixDQUF6QyxJQUE4Q21DLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUs5QixJQUFMLENBQVVnQyxDQUFuQixJQUF3QkwsVUFBVSxDQUFDbEMsTUFBWCxHQUFrQixDQUE1RixFQUErRjtNQUMzRixLQUFLTyxJQUFMLENBQVVTLE9BQVY7SUFDSDtFQUNKO0FBMUZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBzcmNIZWlnaHQ6IE51bWJlcixcbiAgICBzcmNXaWR0aDogTnVtYmVyLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBkaXJlY3Rpb246IGNjLnYyKDAsIDEpLFxuICAgICAgICBzcGVlZDogMCxcbiAgICAgICAgZGFtYWdlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAyMCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkludGVnZXIsXG4gICAgICAgICAgICB0b29sdGlwOiAn5a2Q5by55Lyk5a6z5YC8J1xuICAgICAgICB9LFxuICAgICAgICBsaWZlVGltZToge1xuICAgICAgICAgICAgZGVmYXVsdDogMyxcbiAgICAgICAgICAgIHR5cGU6IGNjLkZsb2F0LFxuICAgICAgICAgICAgdG9vbHRpcDogJ+WtkOW8ueeUn+WtmOaXtumXtO+8iOenku+8iSdcbiAgICAgICAgfSxcbiAgICAgICAgYm91bmRhcnlYOiA0ODAsXG4gICAgICAgIGJvdW5kYXJ5WTogOTYwXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5zcmNIZWlnaHQgPSBjYy52aWV3LmdldENhbnZhc1NpemUoKS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuc3JjV2lkdGggPSBjYy52aWV3LmdldENhbnZhc1NpemUoKS53aWR0aDtcbiAgICAgICAgLy8g5re75Yqg56Kw5pKe5L2TXG4gICAgICAgIGxldCBjb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKTtcbiAgICAgICAgaWYgKCFjb2xsaWRlcikge1xuICAgICAgICAgICAgY29sbGlkZXIgPSB0aGlzLmFkZENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XG4gICAgICAgICAgICBjb2xsaWRlci5zaXplLndpZHRoID0gdGhpcy5ub2RlLndpZHRoO1xuICAgICAgICAgICAgY29sbGlkZXIuc2l6ZS5oZWlnaHQgPSB0aGlzLm5vZGUuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDorr7nva7norDmkp7nu4RcbiAgICAgICAgdGhpcy5ub2RlLmdyb3VwID0gJ2J1bGxldCc7XG4gICAgICAgIFxuICAgICAgICAvLyDlkK/nlKjnorDmkp7mo4DmtYvns7vnu59cbiAgICAgICAgbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgLy8g6K6+572u5a6a5pe26ZSA5q+BXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUgJiYgdGhpcy5ub2RlLmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coJ+WtkOW8ueWIsOi+vueUn+WtmOaXtumXtOS4iumZkO+8jOiHquWKqOmUgOavgScpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMubGlmZVRpbWUpO1xuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgc2V0RGlyZWN0aW9uKGRpcikge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcjtcbiAgICB9LFxuXG4gICAgc2V0U3BlZWQoc3BlZWQpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIH0sXG5cbiAgICBzZXREYW1hZ2UoZGFtYWdlKSB7XG4gICAgICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xuICAgIH0sXG5cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGlmIChvdGhlci5ub2RlLmdyb3VwID09PSAnbW9uc3RlcicpIHtcbiAgICAgICAgICAgIGxldCBtb25zdGVyID0gb3RoZXIubm9kZS5nZXRDb21wb25lbnQoJ01vbnN0ZXInKTtcbiAgICAgICAgICAgIGlmIChtb25zdGVyKSB7XG4gICAgICAgICAgICAgICAgbW9uc3Rlci50YWtlRGFtYWdlKHRoaXMuZGFtYWdlKTtcbiAgICAgICAgICAgICAgICBjYy5sb2coJ+WtkOW8ueWHu+S4reaAqueJqe+8gemAoOaIkOS8pOWuszonLCB0aGlzLmRhbWFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDplIDmr4HlrZDlvLlcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICAvLyDnp7vliqjlrZDlvLlcbiAgICAgICAgbGV0IG5ld1BvcyA9IHRoaXMubm9kZS5wb3NpdGlvbi5hZGQodGhpcy5kaXJlY3Rpb24ubXVsKHRoaXMuc3BlZWQgKiBkdCkpO1xuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3UG9zKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOWmguaenOWtkOW8uei2heWHuuWxj+W5leiMg+WbtO+8jOmUgOavgeWtkOW8uVxuICAgICAgICBsZXQgc2NyZWVuU2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMubm9kZS54KSA+IHNjcmVlblNpemUud2lkdGgvMiB8fCBNYXRoLmFicyh0aGlzLm5vZGUueSkgPiBzY3JlZW5TaXplLmhlaWdodC8yKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------
