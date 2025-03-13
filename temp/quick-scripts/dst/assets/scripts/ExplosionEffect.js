
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
    // 添加碰撞组件
    var collider = this.getComponent(cc.BoxCollider);

    if (!collider) {
      collider = this.addComponent(cc.BoxCollider);
      collider.size = cc.size(40, 40); // 设置爆炸范围
    } // 设置碰撞分组


    this.node.group = 'explosion';
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    var _this = this;

    cc.log('爆炸效果碰撞 - 碰撞对象:', other.node.group);

    if (other.node.group === 'player') {
      // 对玩家造成伤害
      var player = other.node.getComponent('Player');

      if (player && player.takeDamage) {
        player.takeDamage(this.damage);
        cc.log('爆炸效果对玩家造成伤害:', this.damage);
      } // 0.5秒后销毁爆炸效果


      this.scheduleOnce(function () {
        if (_this.node && _this.node.isValid) {
          cc.log('爆炸效果即将销毁');

          _this.node.destroy();
        }
      }, 0.5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0V4cGxvc2lvbkVmZmVjdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImRhbWFnZSIsInR5cGUiLCJJbnRlZ2VyIiwidG9vbHRpcCIsImR1cmF0aW9uIiwiRmxvYXQiLCJvbkxvYWQiLCJjb2xsaWRlciIsImdldENvbXBvbmVudCIsIkJveENvbGxpZGVyIiwiYWRkQ29tcG9uZW50Iiwic2l6ZSIsIm5vZGUiLCJncm91cCIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJsb2ciLCJwbGF5ZXIiLCJ0YWtlRGFtYWdlIiwic2NoZWR1bGVPbmNlIiwiaXNWYWxpZCIsImRlc3Ryb3kiLCJvbkRlc3Ryb3kiLCJ1bnNjaGVkdWxlQWxsQ2FsbGJhY2tzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsTUFBTSxFQUFFO01BQ0osV0FBUyxFQURMO01BRUpDLElBQUksRUFBRUwsRUFBRSxDQUFDTSxPQUZMO01BR0pDLE9BQU8sRUFBRTtJQUhMLENBREE7SUFNUkMsUUFBUSxFQUFFO01BQ04sV0FBUyxHQURIO01BRU5ILElBQUksRUFBRUwsRUFBRSxDQUFDUyxLQUZIO01BR05GLE9BQU8sRUFBRTtJQUhIO0VBTkYsQ0FIUDtFQWdCTEcsTUFoQkssb0JBZ0JJO0lBQ0w7SUFDQSxJQUFJQyxRQUFRLEdBQUcsS0FBS0MsWUFBTCxDQUFrQlosRUFBRSxDQUFDYSxXQUFyQixDQUFmOztJQUNBLElBQUksQ0FBQ0YsUUFBTCxFQUFlO01BQ1hBLFFBQVEsR0FBRyxLQUFLRyxZQUFMLENBQWtCZCxFQUFFLENBQUNhLFdBQXJCLENBQVg7TUFDQUYsUUFBUSxDQUFDSSxJQUFULEdBQWdCZixFQUFFLENBQUNlLElBQUgsQ0FBUSxFQUFSLEVBQVksRUFBWixDQUFoQixDQUZXLENBRXNCO0lBQ3BDLENBTkksQ0FRTDs7O0lBQ0EsS0FBS0MsSUFBTCxDQUFVQyxLQUFWLEdBQWtCLFdBQWxCO0VBQ0gsQ0ExQkk7RUE0QkxDLGdCQTVCSyw0QkE0QllDLEtBNUJaLEVBNEJtQkMsSUE1Qm5CLEVBNEJ5QjtJQUFBOztJQUMxQnBCLEVBQUUsQ0FBQ3FCLEdBQUgsQ0FBTyxnQkFBUCxFQUF5QkYsS0FBSyxDQUFDSCxJQUFOLENBQVdDLEtBQXBDOztJQUVBLElBQUlFLEtBQUssQ0FBQ0gsSUFBTixDQUFXQyxLQUFYLEtBQXFCLFFBQXpCLEVBQW1DO01BQy9CO01BQ0EsSUFBSUssTUFBTSxHQUFHSCxLQUFLLENBQUNILElBQU4sQ0FBV0osWUFBWCxDQUF3QixRQUF4QixDQUFiOztNQUNBLElBQUlVLE1BQU0sSUFBSUEsTUFBTSxDQUFDQyxVQUFyQixFQUFpQztRQUM3QkQsTUFBTSxDQUFDQyxVQUFQLENBQWtCLEtBQUtuQixNQUF2QjtRQUNBSixFQUFFLENBQUNxQixHQUFILENBQU8sY0FBUCxFQUF1QixLQUFLakIsTUFBNUI7TUFDSCxDQU44QixDQVEvQjs7O01BQ0EsS0FBS29CLFlBQUwsQ0FBa0IsWUFBTTtRQUNwQixJQUFJLEtBQUksQ0FBQ1IsSUFBTCxJQUFhLEtBQUksQ0FBQ0EsSUFBTCxDQUFVUyxPQUEzQixFQUFvQztVQUNoQ3pCLEVBQUUsQ0FBQ3FCLEdBQUgsQ0FBTyxVQUFQOztVQUNBLEtBQUksQ0FBQ0wsSUFBTCxDQUFVVSxPQUFWO1FBQ0g7TUFDSixDQUxELEVBS0csR0FMSDtJQU1IO0VBQ0osQ0EvQ0k7RUFpRExDLFNBakRLLHVCQWlETztJQUNSLEtBQUtDLHNCQUFMO0lBQ0E1QixFQUFFLENBQUNxQixHQUFILENBQU8sU0FBUDtFQUNIO0FBcERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGRhbWFnZToge1xuICAgICAgICAgICAgZGVmYXVsdDogMjAsXG4gICAgICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+eIhueCuOS8pOWusydcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAuNSxcbiAgICAgICAgICAgIHR5cGU6IGNjLkZsb2F0LFxuICAgICAgICAgICAgdG9vbHRpcDogJ+eIhueCuOaMgee7reaXtumXtCdcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIOa3u+WKoOeisOaSnue7hOS7tlxuICAgICAgICBsZXQgY29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XG4gICAgICAgIGlmICghY29sbGlkZXIpIHtcbiAgICAgICAgICAgIGNvbGxpZGVyID0gdGhpcy5hZGRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpO1xuICAgICAgICAgICAgY29sbGlkZXIuc2l6ZSA9IGNjLnNpemUoNDAsIDQwKTsgLy8g6K6+572u54iG54K46IyD5Zu0XG4gICAgICAgIH1cblxuICAgICAgICAvLyDorr7nva7norDmkp7liIbnu4RcbiAgICAgICAgdGhpcy5ub2RlLmdyb3VwID0gJ2V4cGxvc2lvbic7XG4gICAgfSxcblxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgY2MubG9nKCfniIbngrjmlYjmnpznorDmkp4gLSDnorDmkp7lr7nosaE6Jywgb3RoZXIubm9kZS5ncm91cCk7XG4gICAgICAgIFxuICAgICAgICBpZiAob3RoZXIubm9kZS5ncm91cCA9PT0gJ3BsYXllcicpIHtcbiAgICAgICAgICAgIC8vIOWvueeOqeWutumAoOaIkOS8pOWus1xuICAgICAgICAgICAgbGV0IHBsYXllciA9IG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIgJiYgcGxheWVyLnRha2VEYW1hZ2UpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIudGFrZURhbWFnZSh0aGlzLmRhbWFnZSk7XG4gICAgICAgICAgICAgICAgY2MubG9nKCfniIbngrjmlYjmnpzlr7nnjqnlrrbpgKDmiJDkvKTlrrM6JywgdGhpcy5kYW1hZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAwLjXnp5LlkI7plIDmr4HniIbngrjmlYjmnpxcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlICYmIHRoaXMubm9kZS5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZygn54iG54K45pWI5p6c5Y2z5bCG6ZSA5q+BJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMC41KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgICAgICBjYy5sb2coJ+eIhueCuOaViOaenOiiq+mUgOavgScpO1xuICAgIH1cbn0pOyAiXX0=