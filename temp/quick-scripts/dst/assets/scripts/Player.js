
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