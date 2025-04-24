
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