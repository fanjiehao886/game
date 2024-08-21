
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRpbGVkTWFwIiwiVGlsZWRNYXAiLCJvbkxvYWQiLCJwIiwiZGlyZWN0b3IiLCJnZXRQaHlzaWNzTWFuYWdlciIsImVuYWJsZWQiLCJkZWJ1Z0RyYXdGbGFncyIsImdyYXZpdHkiLCJ2MiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90aGlzIiwicmVzb3VyY2VzIiwibG9hZCIsIkF1ZGlvQ2xpcCIsImVyciIsImF1ZGlvQ2xpcCIsImF1ZGlvU291cmNlIiwiYWRkQ29tcG9uZW50IiwiQXVkaW9Tb3VyY2UiLCJjbGlwIiwicGxheSIsInN0YXJ0IiwidGlsZWRTaXplIiwiZ2V0VGlsZVNpemUiLCJsYXllciIsImdldExheWVyIiwibGF5ZXJTaXplIiwiZ2V0TGF5ZXJTaXplIiwiaSIsIndpZHRoIiwiaiIsImhlaWdodCIsInRpbGVkIiwiZ2V0VGlsZWRUaWxlQXQiLCJnaWQiLCJub2RlIiwiZ3JvdXAiLCJib2R5IiwiUmlnaWRCb2R5IiwidHlwZSIsIlJpZ2lkQm9keVR5cGUiLCJTdGF0aWMiLCJjb2xsaWRlciIsIlBoeXNpY3NCb3hDb2xsaWRlciIsIm9mZnNldCIsInNpemUiLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0FBLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFFSixFQUFFLENBQUNLO0VBQ2pCLENBQUM7RUFFRDtFQUVBQyxNQUFNLFdBQUFBLE9BQUEsRUFBSTtJQUNOLElBQUlDLENBQUMsR0FBR1AsRUFBRSxDQUFDUSxRQUFRLENBQUNDLGlCQUFpQixFQUFFO0lBQ3ZDRixDQUFDLENBQUNHLE9BQU8sR0FBRyxJQUFJO0lBQ2hCSCxDQUFDLENBQUNJLGNBQWMsR0FBRyxLQUFLO0lBQ3hCSixDQUFDLENBQUNLLE9BQU8sR0FBR1osRUFBRSxDQUFDYSxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUV0QkMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxZQUFZO01BQUEsSUFBQUMsS0FBQTtNQUN6RGhCLEVBQUUsQ0FBQ2lCLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDLGFBQWEsRUFBRWxCLEVBQUUsQ0FBQ21CLFNBQVMsRUFBRSxVQUFDQyxHQUFHLEVBQUVDLFNBQVMsRUFBSztRQUMvRCxJQUFJQyxXQUFXLEdBQUdOLEtBQUksQ0FBQ08sWUFBWSxDQUFDdkIsRUFBRSxDQUFDd0IsV0FBVyxDQUFDO1FBQ25ERixXQUFXLENBQUNHLElBQUksR0FBR0osU0FBUztRQUM1QkMsV0FBVyxDQUFDSSxJQUFJLEVBQUU7TUFDdEIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVEQyxLQUFLLFdBQUFBLE1BQUEsRUFBSTtJQUNMLElBQUlDLFNBQVMsR0FBRyxJQUFJLENBQUN4QixRQUFRLENBQUN5QixXQUFXLEVBQUU7SUFDM0MsSUFBSUMsS0FBSyxHQUFHLElBQUksQ0FBQzFCLFFBQVEsQ0FBQzJCLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDNUMsSUFBSUMsU0FBUyxHQUFHRixLQUFLLENBQUNHLFlBQVksRUFBRTtJQUVwQyxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsU0FBUyxDQUFDRyxLQUFLLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQ3RDLEtBQUksSUFBSUUsQ0FBQyxHQUFDLENBQUMsRUFBRUEsQ0FBQyxHQUFDSixTQUFTLENBQUNLLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUM7UUFDakMsSUFBSUUsS0FBSyxHQUFHUixLQUFLLENBQUNTLGNBQWMsQ0FBQ0wsQ0FBQyxFQUFFRSxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQzVDLElBQUdFLEtBQUssQ0FBQ0UsR0FBRyxJQUFJLENBQUMsRUFBQztVQUNkRixLQUFLLENBQUNHLElBQUksQ0FBQ0MsS0FBSyxHQUFHLE1BQU07VUFDekIsSUFBSUMsSUFBSSxHQUFHTCxLQUFLLENBQUNHLElBQUksQ0FBQ2xCLFlBQVksQ0FBQ3ZCLEVBQUUsQ0FBQzRDLFNBQVMsQ0FBQztVQUNoREQsSUFBSSxDQUFDRSxJQUFJLEdBQUc3QyxFQUFFLENBQUM4QyxhQUFhLENBQUNDLE1BQU07VUFDbkMsSUFBSUMsUUFBUSxHQUFHVixLQUFLLENBQUNHLElBQUksQ0FBQ2xCLFlBQVksQ0FBQ3ZCLEVBQUUsQ0FBQ2lELGtCQUFrQixDQUFDO1VBQzdERCxRQUFRLENBQUNFLE1BQU0sR0FBR2xELEVBQUUsQ0FBQ2EsRUFBRSxDQUFDZSxTQUFTLENBQUNPLEtBQUssR0FBQyxDQUFDLEVBQUVQLFNBQVMsQ0FBQ1MsTUFBTSxHQUFDLENBQUMsQ0FBQztVQUM5RFcsUUFBUSxDQUFDRyxJQUFJLEdBQUd2QixTQUFTO1VBQ3pCb0IsUUFBUSxDQUFDSSxLQUFLLEVBQUU7UUFDcEI7TUFDSjtJQUNKO0VBRUosQ0FBQyxDQUVEO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRpbGVkTWFwOiBjYy5UaWxlZE1hcFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGxldCBwID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcclxuICAgICAgICBwLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHAuZGVidWdEcmF3RmxhZ3MgPSBmYWxzZTtcclxuICAgICAgICBwLmdyYXZpdHkgPSBjYy52MigwLDApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdXZWl4aW5KU0JyaWRnZVJlYWR5JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCgnYXVkaW9zL3JvY2snLCBjYy5BdWRpb0NsaXAsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGF1ZGlvU291cmNlID0gdGhpcy5hZGRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgYXVkaW9Tb3VyY2UuY2xpcCA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgIGF1ZGlvU291cmNlLnBsYXkoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBsZXQgdGlsZWRTaXplID0gdGhpcy50aWxlZE1hcC5nZXRUaWxlU2l6ZSgpO1xyXG4gICAgICAgIGxldCBsYXllciA9IHRoaXMudGlsZWRNYXAuZ2V0TGF5ZXIoJ2ZlbmNlcycpO1xyXG4gICAgICAgIGxldCBsYXllclNpemUgPSBsYXllci5nZXRMYXllclNpemUoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXllclNpemUud2lkdGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IobGV0IGo9MDsgajxsYXllclNpemUuaGVpZ2h0OyBqKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpbGVkID0gbGF5ZXIuZ2V0VGlsZWRUaWxlQXQoaSwgaiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZih0aWxlZC5naWQgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZWQubm9kZS5ncm91cCA9ICd3YWxsJztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9keSA9IHRpbGVkLm5vZGUuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbGxpZGVyID0gdGlsZWQubm9kZS5hZGRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5vZmZzZXQgPSBjYy52Mih0aWxlZFNpemUud2lkdGgvMiwgdGlsZWRTaXplLmhlaWdodC8yKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5zaXplID0gdGlsZWRTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyLmFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
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
    this._initTouchEvent();
    // hide joystick when follow
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
      this._stickPos = this.ring.getPosition();

      // 触摸点与圆圈中心的距离
      var distance = touchPos.sub(this.ring.getPosition()).mag();

      // 手指在圆圈内触摸,控杆跟随触摸点
      this._radius > distance && this.dot.setPosition(touchPos);
    } else if (this.joystickType === _JoystickEnum["default"].JoystickType.FOLLOW) {
      // 记录摇杆位置，给 touch move 使用
      this._stickPos = touchPos;
      this.node.opacity = 255;
      this._touchLocation = event.getLocation();

      // 更改摇杆的位置
      this.ring.setPosition(touchPos);
      this.dot.setPosition(touchPos);
    }
  },
  _touchMoveEvent: function _touchMoveEvent(event) {
    // 如果 touch start 位置和 touch move 相同，禁止移动
    if (this.joystickType === _JoystickEnum["default"].JoystickType.FOLLOW && this._touchLocation === event.getLocation()) {
      return false;
    }

    // 以圆圈为锚点获取触摸坐标
    var touchPos = this.ring.convertToNodeSpaceAR(event.getLocation());
    var distance = touchPos.mag();

    // 由于摇杆的 postion 是以父节点为锚点，所以定位要加上 touch start 时的位置
    var posX = this._stickPos.x + touchPos.x;
    var posY = this._stickPos.y + touchPos.y;

    // 归一化
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSm95c3RpY2suanMiXSwibmFtZXMiOlsiX0pveXN0aWNrRW51bSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX0pveXN0aWNrRXZlbnQiLCJvYmoiLCJfX2VzTW9kdWxlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkb3QiLCJ0eXBlIiwiTm9kZSIsImRpc3BsYXlOYW1lIiwidG9vbHRpcCIsInJpbmciLCJqb3lzdGlja1R5cGUiLCJKb3lzdGlja0VudW0iLCJKb3lzdGlja1R5cGUiLCJGSVhFRCIsImRpcmVjdGlvblR5cGUiLCJEaXJlY3Rpb25UeXBlIiwiQUxMIiwiX3N0aWNrUG9zIiwiX3RvdWNoTG9jYXRpb24iLCJvbkxvYWQiLCJfcmFkaXVzIiwid2lkdGgiLCJfaW5pdFRvdWNoRXZlbnQiLCJGT0xMT1ciLCJub2RlIiwib3BhY2l0eSIsIm9uRW5hYmxlIiwiSm95c3RpY2tFdmVudCIsImdldEluc3RhbmNlIiwib24iLCJKb3lzdGlja0V2ZW50VHlwZSIsIkNIQU5HRV9KT1lTVElDS19UWVBFIiwiX29uQ2hhbmdlSm95c3RpY2tUeXBlIiwib25EaXNhYmxlIiwib2ZmIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJfdG91Y2hTdGFydEV2ZW50IiwiVE9VQ0hfTU9WRSIsIl90b3VjaE1vdmVFdmVudCIsIlRPVUNIX0VORCIsIl90b3VjaEVuZEV2ZW50IiwiVE9VQ0hfQ0FOQ0VMIiwiZXZlbnQiLCJlbWl0IiwidG91Y2hQb3MiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsImdldExvY2F0aW9uIiwiZ2V0UG9zaXRpb24iLCJkaXN0YW5jZSIsInN1YiIsIm1hZyIsInNldFBvc2l0aW9uIiwicG9zWCIsIngiLCJwb3NZIiwieSIsInAiLCJ2MiIsIm5vcm1hbGl6ZSIsInNwZWVkVHlwZSIsIlNwZWVkVHlwZSIsIk5PUk1BTCIsIkZBU1QiLCJtb3ZlRGlzdGFuY2UiLCJTVE9Q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dUMsV0FBVyxFQUFFLENBQUM7SUFDN0MsSUFBSSxJQUFJLENBQUN0QyxZQUFZLEtBQUtDLHdCQUFZLENBQUNDLFlBQVksQ0FBQ1csTUFBTSxFQUFFO01BQ3hELElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLEdBQUcsQ0FBQztJQUN6QjtJQUVBRSx5QkFBYSxDQUFDQyxXQUFXLEVBQUUsQ0FBQ2dCLElBQUksQ0FBQ2pDLHdCQUFZLENBQUNtQixpQkFBaUIsQ0FBQ1UsU0FBUyxFQUFFRyxLQUFLLEVBQUU7TUFBQ2lCLFNBQVMsRUFBRWpELHdCQUFZLENBQUNrRCxTQUFTLENBQUNJO0lBQUksQ0FBQyxDQUFDO0VBQy9IO0FBRUosQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm95c3RpY2tFbnVtIGZyb20gJ0pveXN0aWNrRW51bSc7XHJcbmltcG9ydCBKb3lzdGlja0V2ZW50IGZyb20gJ0pveXN0aWNrRXZlbnQnO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBkb3Q6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdEb3QnLFxyXG4gICAgICAgICAgICB0b29sdGlwOiAn5pGH5p2G5pON57q154K5JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJpbmc6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdSaW5nJyxcclxuICAgICAgICAgICAgdG9vbHRpcDogJ+aRh+adhuiDjOaZr+iKgueCuScsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgam95c3RpY2tUeXBlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IEpveXN0aWNrRW51bS5Kb3lzdGlja1R5cGUuRklYRUQsXHJcbiAgICAgICAgICAgIHR5cGU6IEpveXN0aWNrRW51bS5Kb3lzdGlja1R5cGUsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnVG91Y2ggVHlwZScsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6ICfop6bmkbjnsbvlnosnLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGRpcmVjdGlvblR5cGU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogSm95c3RpY2tFbnVtLkRpcmVjdGlvblR5cGUuQUxMLFxyXG4gICAgICAgICAgICB0eXBlOiBKb3lzdGlja0VudW0uRGlyZWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdEaXJlY3Rpb24gVHlwZScsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6ICfmlrnlkJHnsbvlnosnLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIF9zdGlja1Bvczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgICAgICB0b29sdGlwOiAn5pGH5p2G5omA5Zyo5L2N572uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIF90b3VjaExvY2F0aW9uOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6ICfop6bmkbjkvY3nva4nLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLl9yYWRpdXMgPSB0aGlzLnJpbmcud2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMuX2luaXRUb3VjaEV2ZW50KCk7XHJcbiAgICAgICAgLy8gaGlkZSBqb3lzdGljayB3aGVuIGZvbGxvd1xyXG4gICAgICAgIGlmICh0aGlzLmpveXN0aWNrVHlwZSA9PT0gSm95c3RpY2tFbnVtLkpveXN0aWNrVHlwZS5GT0xMT1cpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgSm95c3RpY2tFdmVudC5nZXRJbnN0YW5jZSgpLm9uKEpveXN0aWNrRW51bS5Kb3lzdGlja0V2ZW50VHlwZS5DSEFOR0VfSk9ZU1RJQ0tfVFlQRSwgdGhpcy5fb25DaGFuZ2VKb3lzdGlja1R5cGUsIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgSm95c3RpY2tFdmVudC5nZXRJbnN0YW5jZSgpLm9mZihKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGUuQ0hBTkdFX0pPWVNUSUNLX1RZUEUsIHRoaXMuX29uQ2hhbmdlSm95c3RpY2tUeXBlLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgX29uQ2hhbmdlSm95c3RpY2tUeXBlKHR5cGUpIHtcclxuICAgICAgICB0aGlzLmpveXN0aWNrVHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSB0eXBlID09PSBKb3lzdGlja0VudW0uSm95c3RpY2tUeXBlLkZJWEVEID8gMjU1IDogMDtcclxuICAgIH0sXHJcblxyXG4gICAgX2luaXRUb3VjaEV2ZW50KCkge1xyXG4gICAgICAgIC8vIHNldCB0aGUgc2l6ZSBvZiBqb3lzdGljayBub2RlIHRvIGNvbnRyb2wgc2NhbGVcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuX3RvdWNoU3RhcnRFdmVudCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMuX3RvdWNoTW92ZUV2ZW50LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl90b3VjaEVuZEV2ZW50LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLl90b3VjaEVuZEV2ZW50LCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgX3RvdWNoU3RhcnRFdmVudChldmVudCkge1xyXG4gICAgICAgIEpveXN0aWNrRXZlbnQuZ2V0SW5zdGFuY2UoKS5lbWl0KEpveXN0aWNrRW51bS5Kb3lzdGlja0V2ZW50VHlwZS5UT1VDSF9TVEFSVCwgXCJqb3lzdGljayB0b3VjaCBzdGFydFwiLCAxMCk7XHJcbiAgICAgICAgY29uc3QgdG91Y2hQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmpveXN0aWNrVHlwZSA9PT0gSm95c3RpY2tFbnVtLkpveXN0aWNrVHlwZS5GSVhFRCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGlja1BvcyA9IHRoaXMucmluZy5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgLy8g6Kem5pG454K55LiO5ZyG5ZyI5Lit5b+D55qE6Led56a7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdG91Y2hQb3Muc3ViKHRoaXMucmluZy5nZXRQb3NpdGlvbigpKS5tYWcoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOaJi+aMh+WcqOWchuWciOWGheinpuaRuCzmjqfmnYbot5/pmo/op6bmkbjngrlcclxuICAgICAgICAgICAgdGhpcy5fcmFkaXVzID4gZGlzdGFuY2UgJiYgdGhpcy5kb3Quc2V0UG9zaXRpb24odG91Y2hQb3MpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuam95c3RpY2tUeXBlID09PSBKb3lzdGlja0VudW0uSm95c3RpY2tUeXBlLkZPTExPVykge1xyXG5cclxuICAgICAgICAgICAgLy8g6K6w5b2V5pGH5p2G5L2N572u77yM57uZIHRvdWNoIG1vdmUg5L2/55SoXHJcbiAgICAgICAgICAgIHRoaXMuX3N0aWNrUG9zID0gdG91Y2hQb3M7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLl90b3VjaExvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOabtOaUueaRh+adhueahOS9jee9rlxyXG4gICAgICAgICAgICB0aGlzLnJpbmcuc2V0UG9zaXRpb24odG91Y2hQb3MpO1xyXG4gICAgICAgICAgICB0aGlzLmRvdC5zZXRQb3NpdGlvbih0b3VjaFBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBfdG91Y2hNb3ZlRXZlbnQoZXZlbnQpIHtcclxuICAgICAgICAvLyDlpoLmnpwgdG91Y2ggc3RhcnQg5L2N572u5ZKMIHRvdWNoIG1vdmUg55u45ZCM77yM56aB5q2i56e75YqoXHJcbiAgICAgICAgaWYgKHRoaXMuam95c3RpY2tUeXBlID09PSBKb3lzdGlja0VudW0uSm95c3RpY2tUeXBlLkZPTExPVyAmJiB0aGlzLl90b3VjaExvY2F0aW9uID09PSBldmVudC5nZXRMb2NhdGlvbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOS7peWchuWciOS4uumUmueCueiOt+WPluinpuaRuOWdkOagh1xyXG4gICAgICAgIGNvbnN0IHRvdWNoUG9zID0gdGhpcy5yaW5nLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdG91Y2hQb3MubWFnKCk7XHJcblxyXG4gICAgICAgIC8vIOeUseS6juaRh+adhueahCBwb3N0aW9uIOaYr+S7peeItuiKgueCueS4uumUmueCue+8jOaJgOS7peWumuS9jeimgeWKoOS4iiB0b3VjaCBzdGFydCDml7bnmoTkvY3nva5cclxuICAgICAgICBjb25zdCBwb3NYID0gdGhpcy5fc3RpY2tQb3MueCArIHRvdWNoUG9zLng7XHJcbiAgICAgICAgY29uc3QgcG9zWSA9IHRoaXMuX3N0aWNrUG9zLnkgKyB0b3VjaFBvcy55O1xyXG5cclxuICAgICAgICAvLyDlvZLkuIDljJZcclxuICAgICAgICBjb25zdCBwID0gY2MudjIocG9zWCwgcG9zWSkuc3ViKHRoaXMucmluZy5nZXRQb3NpdGlvbigpKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgbGV0IHNwZWVkVHlwZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3JhZGl1cyA+IGRpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKGNjLnYyKHBvc1gsIHBvc1kpKTtcclxuXHJcbiAgICAgICAgICAgIHNwZWVkVHlwZSA9IEpveXN0aWNrRW51bS5TcGVlZFR5cGUuTk9STUFMO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOaOp+adhuawuOi/nOS/neaMgeWcqOWciOWGhe+8jOW5tuWcqOWciOWGhei3n+maj+inpuaRuOabtOaWsOinkuW6plxyXG4gICAgICAgICAgICBjb25zdCB4ID0gdGhpcy5fc3RpY2tQb3MueCArIHAueCAqIHRoaXMuX3JhZGl1cztcclxuICAgICAgICAgICAgY29uc3QgeSA9IHRoaXMuX3N0aWNrUG9zLnkgKyBwLnkgKiB0aGlzLl9yYWRpdXM7XHJcbiAgICAgICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKGNjLnYyKHgsIHkpKTtcclxuXHJcbiAgICAgICAgICAgIHNwZWVkVHlwZSA9IEpveXN0aWNrRW51bS5TcGVlZFR5cGUuRkFTVDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEpveXN0aWNrRXZlbnQuZ2V0SW5zdGFuY2UoKS5lbWl0KEpveXN0aWNrRW51bS5Kb3lzdGlja0V2ZW50VHlwZS5UT1VDSF9NT1ZFLCBldmVudCwge3NwZWVkVHlwZTogc3BlZWRUeXBlLCBtb3ZlRGlzdGFuY2U6IHB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgX3RvdWNoRW5kRXZlbnQoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmRvdC5zZXRQb3NpdGlvbih0aGlzLnJpbmcuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuam95c3RpY2tUeXBlID09PSBKb3lzdGlja0VudW0uSm95c3RpY2tUeXBlLkZPTExPVykge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBKb3lzdGlja0V2ZW50LmdldEluc3RhbmNlKCkuZW1pdChKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGUuVE9VQ0hfRU5ELCBldmVudCwge3NwZWVkVHlwZTogSm95c3RpY2tFbnVtLlNwZWVkVHlwZS5TVE9QfSk7XHJcbiAgICB9LFxyXG5cclxufSk7XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSm95c3RpY2tFdmVudC5qcyJdLCJuYW1lcyI6WyJKb3lzdGlja0V2ZW50IiwiY2MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJfZXZlbnQiLCJjdG9yIiwiRXZlbnRUYXJnZXQiLCJvbiIsImV2ZW50VHlwZSIsImNhbGxGdW5jIiwidGFyZ2V0Iiwib2ZmIiwiZW1pdCIsIl90aGlzJF9ldmVudCIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmciLCJBcnJheSIsIl9rZXkiLCJhcHBseSIsImNvbmNhdCIsIl9pbnN0YW5jZSIsImdldEluc3RhbmNlIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUV6QkMsVUFBVSxFQUFFO0lBQ1JDLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFFREMsSUFBSSxXQUFBQSxLQUFBLEVBQUc7SUFDSCxJQUFJLENBQUNELE1BQU0sR0FBRyxJQUFJSCxFQUFFLENBQUNLLFdBQVcsRUFBRTtFQUN0QyxDQUFDO0VBRURDLEVBQUUsV0FBQUEsR0FBQ0MsU0FBUyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRTtJQUM1QixJQUFJLENBQUNOLE1BQU0sQ0FBQ0csRUFBRSxDQUFDQyxTQUFTLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxDQUFDO0VBQy9DLENBQUM7RUFFREMsR0FBRyxXQUFBQSxJQUFDSCxTQUFTLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFO0lBQzdCLElBQUksQ0FBQ04sTUFBTSxDQUFDTyxHQUFHLENBQUNILFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLENBQUM7RUFDaEQsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSUUsSUFBSSxXQUFBQSxLQUFDSixTQUFTLEVBQVU7SUFBQSxJQUFBSyxZQUFBO0lBQUEsU0FBQUMsSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBTEMsR0FBRyxPQUFBQyxLQUFBLENBQUFKLElBQUEsT0FBQUEsSUFBQSxXQUFBSyxJQUFBLE1BQUFBLElBQUEsR0FBQUwsSUFBQSxFQUFBSyxJQUFBO01BQUhGLEdBQUcsQ0FBQUUsSUFBQSxRQUFBSixTQUFBLENBQUFJLElBQUE7SUFBQTtJQUNsQixDQUFBTixZQUFBLE9BQUksQ0FBQ1QsTUFBTSxFQUFDUSxJQUFJLENBQUFRLEtBQUEsQ0FBQVAsWUFBQSxHQUFDTCxTQUFTLEVBQUFhLE1BQUEsQ0FBS0osR0FBRyxFQUFDO0VBQ3ZDO0FBRUosQ0FBQyxDQUFDO0FBRUYsSUFBSUssU0FBUyxHQUFHLElBQUk7QUFDcEJ0QixhQUFhLENBQUN1QixXQUFXLEdBQUcsWUFBWTtFQUNwQyxDQUFDRCxTQUFTLEtBQUtBLFNBQVMsR0FBRyxJQUFJdEIsYUFBYSxFQUFFLENBQUM7RUFFL0MsT0FBT3NCLFNBQVM7QUFDcEIsQ0FBQztBQUFDLElBQUFFLFFBQUEsR0FFYXhCLGFBQWE7QUFBQXlCLE9BQUEsY0FBQUQsUUFBQTtBQUFBRSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IEpveXN0aWNrRXZlbnQgPSBjYy5DbGFzcyh7XHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIF9ldmVudDogbnVsbFxyXG4gICAgfSxcclxuXHJcbiAgICBjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2V2ZW50ID0gbmV3IGNjLkV2ZW50VGFyZ2V0KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uKGV2ZW50VHlwZSwgY2FsbEZ1bmMsIHRhcmdldCkge1xyXG4gICAgICAgIHRoaXMuX2V2ZW50Lm9uKGV2ZW50VHlwZSwgY2FsbEZ1bmMsIHRhcmdldCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9mZihldmVudFR5cGUsIGNhbGxGdW5jLCB0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLl9ldmVudC5vZmYoZXZlbnRUeXBlLCBjYWxsRnVuYywgdGFyZ2V0KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGV2ZW50VHlwZSBKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGVcclxuICAgICAqIEBwYXJhbSBhcmdcclxuICAgICAqL1xyXG4gICAgZW1pdChldmVudFR5cGUsIC4uLmFyZykge1xyXG4gICAgICAgIHRoaXMuX2V2ZW50LmVtaXQoZXZlbnRUeXBlLCAuLi5hcmcpXHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbmxldCBfaW5zdGFuY2UgPSBudWxsO1xyXG5Kb3lzdGlja0V2ZW50LmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgIV9pbnN0YW5jZSAmJiAoX2luc3RhbmNlID0gbmV3IEpveXN0aWNrRXZlbnQoKSk7XHJcblxyXG4gICAgcmV0dXJuIF9pbnN0YW5jZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpveXN0aWNrRXZlbnQ7Il19
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
    this.node.opacity = 0;
    //destroy
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYnV0dG9uLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwibm9kZSIsIm9uIiwiQnV0dG9uQ2xpY2siLCJvcGFjaXR5IiwiZGVzdHJveSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRSxDQUVaLENBQUM7RUFFRDtFQUVBQyxNQUFNLFdBQUFBLE9BQUEsRUFBSTtJQUNOLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsV0FBVyxFQUFFLElBQUksQ0FBQztFQUNqRCxDQUFDO0VBRURBLFdBQVcsRUFBRSxTQUFBQSxZQUFBLEVBQVk7SUFDckIsSUFBSSxDQUFDRixJQUFJLENBQUNHLE9BQU8sR0FBRyxDQUFDO0lBQ3JCO0lBQ0EsSUFBSSxDQUFDSCxJQUFJLENBQUNJLE9BQU8sRUFBRTtFQUN2QixDQUFDO0VBRURDLEtBQUssV0FBQUEsTUFBQSxFQUFJLENBRVQsQ0FBQyxDQUVEO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdjbGljaycsIHRoaXMuQnV0dG9uQ2xpY2ssIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBCdXR0b25DbGljazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAvL2Rlc3Ryb3lcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
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
    speed: {
      "default": 300,
      type: cc.Integer
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.srcHeight = cc.view.getCanvasSize().height;
    this.srcWidth = cc.view.getCanvasSize().width;
  },
  start: function start() {},
  update: function update(dt) {
    this.node.x += this.speed * dt;
    if (this.node.x > this.srcWidth) {
      this.node.removeFromParent(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYnVsbGV0cy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwic3JjSGVpZ2h0IiwiTnVtYmVyIiwic3JjV2lkdGgiLCJwcm9wZXJ0aWVzIiwic3BlZWQiLCJ0eXBlIiwiSW50ZWdlciIsIm9uTG9hZCIsInZpZXciLCJnZXRDYW52YXNTaXplIiwiaGVpZ2h0Iiwid2lkdGgiLCJzdGFydCIsInVwZGF0ZSIsImR0Iiwibm9kZSIsIngiLCJyZW1vdmVGcm9tUGFyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFNBQVMsRUFBRUMsTUFBTTtFQUNqQkMsUUFBUSxFQUFFRCxNQUFNO0VBRWhCRSxVQUFVLEVBQUU7SUFDUkMsS0FBSyxFQUFHO01BQ0osV0FBUyxHQUFHO01BQ1pDLElBQUksRUFBRVIsRUFBRSxDQUFDUztJQUNiO0VBQ0osQ0FBQztFQUVEO0VBRUFDLE1BQU0sV0FBQUEsT0FBQSxFQUFJO0lBQ04sSUFBSSxDQUFDUCxTQUFTLEdBQUdILEVBQUUsQ0FBQ1csSUFBSSxDQUFDQyxhQUFhLEVBQUUsQ0FBQ0MsTUFBTTtJQUMvQyxJQUFJLENBQUNSLFFBQVEsR0FBR0wsRUFBRSxDQUFDVyxJQUFJLENBQUNDLGFBQWEsRUFBRSxDQUFDRSxLQUFLO0VBQ2pELENBQUM7RUFFREMsS0FBSyxXQUFBQSxNQUFBLEVBQUksQ0FFVCxDQUFDO0VBRURDLE1BQU0sV0FBQUEsT0FBRUMsRUFBRSxFQUFFO0lBQ1IsSUFBSSxDQUFDQyxJQUFJLENBQUNDLENBQUMsSUFBSSxJQUFJLENBQUNaLEtBQUssR0FBR1UsRUFBRTtJQUM5QixJQUFHLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxDQUFDLEdBQUcsSUFBSSxDQUFDZCxRQUFRLEVBQUM7TUFDM0IsSUFBSSxDQUFDYSxJQUFJLENBQUNFLGdCQUFnQixDQUFDLElBQUksQ0FBQztJQUNwQztFQUNKO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBzcmNIZWlnaHQ6IE51bWJlcixcclxuICAgIHNyY1dpZHRoOiBOdW1iZXIsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHNwZWVkIDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAzMDAsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkludGVnZXIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnNyY0hlaWdodCA9IGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLmhlaWdodDtcclxuICAgICAgICB0aGlzLnNyY1dpZHRoID0gY2Mudmlldy5nZXRDYW52YXNTaXplKCkud2lkdGg7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICAgICAgaWYodGhpcy5ub2RlLnggPiB0aGlzLnNyY1dpZHRoKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------
