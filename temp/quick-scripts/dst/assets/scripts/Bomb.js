
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