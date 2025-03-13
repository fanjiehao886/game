
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
    boundaryX: 480,
    boundaryY: 960
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
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
    manager.enabled = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2J1bGxldHMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInNyY0hlaWdodCIsIk51bWJlciIsInNyY1dpZHRoIiwicHJvcGVydGllcyIsImRpcmVjdGlvbiIsInYyIiwic3BlZWQiLCJkYW1hZ2UiLCJ0eXBlIiwiSW50ZWdlciIsInRvb2x0aXAiLCJib3VuZGFyeVgiLCJib3VuZGFyeVkiLCJvbkxvYWQiLCJ2aWV3IiwiZ2V0Q2FudmFzU2l6ZSIsImhlaWdodCIsIndpZHRoIiwiY29sbGlkZXIiLCJnZXRDb21wb25lbnQiLCJCb3hDb2xsaWRlciIsImFkZENvbXBvbmVudCIsInNpemUiLCJub2RlIiwiZ3JvdXAiLCJtYW5hZ2VyIiwiZGlyZWN0b3IiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsInN0YXJ0Iiwic2V0RGlyZWN0aW9uIiwiZGlyIiwic2V0U3BlZWQiLCJzZXREYW1hZ2UiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwibW9uc3RlciIsInRha2VEYW1hZ2UiLCJsb2ciLCJkZXN0cm95IiwidXBkYXRlIiwiZHQiLCJuZXdQb3MiLCJwb3NpdGlvbiIsImFkZCIsIm11bCIsInNldFBvc2l0aW9uIiwic2NyZWVuU2l6ZSIsImdldFZpc2libGVTaXplIiwiTWF0aCIsImFicyIsIngiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxTQUFTLEVBQUVDLE1BSE47RUFJTEMsUUFBUSxFQUFFRCxNQUpMO0VBTUxFLFVBQVUsRUFBRTtJQUNSQyxTQUFTLEVBQUVQLEVBQUUsQ0FBQ1EsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFULENBREg7SUFFUkMsS0FBSyxFQUFFLENBRkM7SUFHUkMsTUFBTSxFQUFF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RjtNQUMzRixLQUFLTyxJQUFMLENBQVVpQixPQUFWO0lBQ0g7RUFDSjtBQTdFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgc3JjSGVpZ2h0OiBOdW1iZXIsXG4gICAgc3JjV2lkdGg6IE51bWJlcixcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZGlyZWN0aW9uOiBjYy52MigwLCAxKSxcbiAgICAgICAgc3BlZWQ6IDAsXG4gICAgICAgIGRhbWFnZToge1xuICAgICAgICAgICAgZGVmYXVsdDogMjAsXG4gICAgICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+WtkOW8ueS8pOWus+WAvCdcbiAgICAgICAgfSxcbiAgICAgICAgYm91bmRhcnlYOiA0ODAsXG4gICAgICAgIGJvdW5kYXJ5WTogOTYwXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5zcmNIZWlnaHQgPSBjYy52aWV3LmdldENhbnZhc1NpemUoKS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuc3JjV2lkdGggPSBjYy52aWV3LmdldENhbnZhc1NpemUoKS53aWR0aDtcbiAgICAgICAgLy8g5re75Yqg56Kw5pKe5L2TXG4gICAgICAgIGxldCBjb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKTtcbiAgICAgICAgaWYgKCFjb2xsaWRlcikge1xuICAgICAgICAgICAgY29sbGlkZXIgPSB0aGlzLmFkZENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XG4gICAgICAgICAgICBjb2xsaWRlci5zaXplLndpZHRoID0gdGhpcy5ub2RlLndpZHRoO1xuICAgICAgICAgICAgY29sbGlkZXIuc2l6ZS5oZWlnaHQgPSB0aGlzLm5vZGUuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDorr7nva7norDmkp7nu4RcbiAgICAgICAgdGhpcy5ub2RlLmdyb3VwID0gJ2J1bGxldCc7XG4gICAgICAgIFxuICAgICAgICAvLyDlkK/nlKjnorDmkp7mo4DmtYvns7vnu59cbiAgICAgICAgbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICBzZXREaXJlY3Rpb24oZGlyKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyO1xuICAgIH0sXG5cbiAgICBzZXRTcGVlZChzcGVlZCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgfSxcblxuICAgIHNldERhbWFnZShkYW1hZ2UpIHtcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBkYW1hZ2U7XG4gICAgfSxcblxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgaWYgKG90aGVyLm5vZGUuZ3JvdXAgPT09ICdtb25zdGVyJykge1xuICAgICAgICAgICAgbGV0IG1vbnN0ZXIgPSBvdGhlci5ub2RlLmdldENvbXBvbmVudCgnTW9uc3RlcicpO1xuICAgICAgICAgICAgaWYgKG1vbnN0ZXIpIHtcbiAgICAgICAgICAgICAgICBtb25zdGVyLnRha2VEYW1hZ2UodGhpcy5kYW1hZ2UpO1xuICAgICAgICAgICAgICAgIGNjLmxvZygn5a2Q5by55Ye75Lit5oCq54mp77yB6YCg5oiQ5Lyk5a6zOicsIHRoaXMuZGFtYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOmUgOavgeWtkOW8uVxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIC8vIOenu+WKqOWtkOW8uVxuICAgICAgICBsZXQgbmV3UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZCh0aGlzLmRpcmVjdGlvbi5tdWwodGhpcy5zcGVlZCAqIGR0KSk7XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXdQb3MpO1xuICAgICAgICBcbiAgICAgICAgLy8g5aaC5p6c5a2Q5by56LaF5Ye65bGP5bmV6IyD5Zu077yM6ZSA5q+B5a2Q5by5XG4gICAgICAgIGxldCBzY3JlZW5TaXplID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5ub2RlLngpID4gc2NyZWVuU2l6ZS53aWR0aC8yIHx8IE1hdGguYWJzKHRoaXMubm9kZS55KSA+IHNjcmVlblNpemUuaGVpZ2h0LzIpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==