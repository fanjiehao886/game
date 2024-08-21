
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