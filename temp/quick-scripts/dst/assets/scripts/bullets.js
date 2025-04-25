
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