
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