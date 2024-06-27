
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0aWxlZE1hcCIsIlRpbGVkTWFwIiwib25Mb2FkIiwicCIsImRpcmVjdG9yIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJlbmFibGVkIiwiZGVidWdEcmF3RmxhZ3MiLCJncmF2aXR5IiwidjIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNvdXJjZXMiLCJsb2FkIiwiQXVkaW9DbGlwIiwiZXJyIiwiYXVkaW9DbGlwIiwiYXVkaW9Tb3VyY2UiLCJhZGRDb21wb25lbnQiLCJBdWRpb1NvdXJjZSIsImNsaXAiLCJwbGF5Iiwic3RhcnQiLCJ0aWxlZFNpemUiLCJnZXRUaWxlU2l6ZSIsImxheWVyIiwiZ2V0TGF5ZXIiLCJsYXllclNpemUiLCJnZXRMYXllclNpemUiLCJpIiwid2lkdGgiLCJqIiwiaGVpZ2h0IiwidGlsZWQiLCJnZXRUaWxlZFRpbGVBdCIsImdpZCIsIm5vZGUiLCJncm91cCIsImJvZHkiLCJSaWdpZEJvZHkiLCJ0eXBlIiwiUmlnaWRCb2R5VHlwZSIsIlN0YXRpYyIsImNvbGxpZGVyIiwiUGh5c2ljc0JveENvbGxpZGVyIiwib2Zmc2V0Iiwic2l6ZSIsImFwcGx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFFSixFQUFFLENBQUNLO0VBREwsQ0FIUDtFQU9MO0VBRUFDLE1BVEssb0JBU0s7SUFDTixJQUFJQyxDQUFDLEdBQUdQLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZQyxpQkFBWixFQUFSO0lBQ0FGLENBQUMsQ0FBQ0csT0FBRixHQUFZLElBQVo7SUFDQUgsQ0FBQyxDQUFDSSxjQUFGLEdBQW1CLEtBQW5CO0lBQ0FKLENBQUMsQ0FBQ0ssT0FBRixHQUFZWixFQUFFLENBQUNhLEVBQUgsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUFaO0lBRUFDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIscUJBQTFCLEVBQWlELFlBQVk7TUFBQTs7TUFDekRmLEVBQUUsQ0FBQ2dCLFNBQUgsQ0FBYUMsSUFBYixDQUFrQixhQUFsQixFQUFpQ2pCLEVBQUUsQ0FBQ2tCLFNBQXBDLEVBQStDLFVBQUNDLEdBQUQsRUFBTUMsU0FBTixFQUFvQjtRQUMvRCxJQUFJQyxXQUFXLEdBQUcsS0FBSSxDQUFDQyxZQUFMLENBQWtCdEIsRUFBRSxDQUFDdUIsV0FBckIsQ0FBbEI7O1FBQ0FGLFdBQVcsQ0FBQ0csSUFBWixHQUFtQkosU0FBbkI7UUFDQUMsV0FBVyxDQUFDSSxJQUFaO01BQ0gsQ0FKRDtJQUtILENBTkQ7RUFPSCxDQXRCSTtFQXdCTEMsS0F4QkssbUJBd0JJO0lBQ0wsSUFBSUMsU0FBUyxHQUFHLEtBQUt2QixRQUFMLENBQWN3QixXQUFkLEVBQWhCO0lBQ0EsSUFBSUMsS0FBSyxHQUFHLEtBQUt6QixRQUFMLENBQWMwQixRQUFkLENBQXVCLFFBQXZCLENBQVo7SUFDQSxJQUFJQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csWUFBTixFQUFoQjs7SUFFQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLFNBQVMsQ0FBQ0csS0FBOUIsRUFBcUNELENBQUMsRUFBdEMsRUFBMEM7TUFDdEMsS0FBSSxJQUFJRSxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUNKLFNBQVMsQ0FBQ0ssTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBcUM7UUFDakMsSUFBSUUsS0FBSyxHQUFHUixLQUFLLENBQUNTLGNBQU4sQ0FBcUJMLENBQXJCLEVBQXdCRSxDQUF4QixFQUEyQixJQUEzQixDQUFaOztRQUNBLElBQUdFLEtBQUssQ0FBQ0UsR0FBTixJQUFhLENBQWhCLEVBQWtCO1VBQ2RGLEtBQUssQ0FBQ0csSUFBTixDQUFXQyxLQUFYLEdBQW1CLE1BQW5CO1VBQ0EsSUFBSUMsSUFBSSxHQUFHTCxLQUFLLENBQUNHLElBQU4sQ0FBV2xCLFlBQVgsQ0FBd0J0QixFQUFFLENBQUMyQyxTQUEzQixDQUFYO1VBQ0FELElBQUksQ0FBQ0UsSUFBTCxHQUFZNUMsRUFBRSxDQUFDNkMsYUFBSCxDQUFpQkMsTUFBN0I7VUFDQSxJQUFJQyxRQUFRLEdBQUdWLEtBQUssQ0FBQ0csSUFBTixDQUFXbEIsWUFBWCxDQUF3QnRCLEVBQUUsQ0FBQ2dELGtCQUEzQixDQUFmO1VBQ0FELFFBQVEsQ0FBQ0UsTUFBVCxHQUFrQmpELEVBQUUsQ0FBQ2EsRUFBSCxDQUFNYyxTQUFTLENBQUNPLEtBQVYsR0FBZ0IsQ0FBdEIsRUFBeUJQLFNBQVMsQ0FBQ1MsTUFBVixHQUFpQixDQUExQyxDQUFsQjtVQUNBVyxRQUFRLENBQUNHLElBQVQsR0FBZ0J2QixTQUFoQjtVQUNBb0IsUUFBUSxDQUFDSSxLQUFUO1FBQ0g7TUFDSjtJQUNKO0VBRUosQ0E1Q0ksQ0E4Q0w7O0FBOUNLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGlsZWRNYXA6IGNjLlRpbGVkTWFwXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgbGV0IHAgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xuICAgICAgICBwLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBwLmRlYnVnRHJhd0ZsYWdzID0gZmFsc2U7XG4gICAgICAgIHAuZ3Jhdml0eSA9IGNjLnYyKDAsMCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignV2VpeGluSlNCcmlkZ2VSZWFkeScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKCdhdWRpb3Mvcm9jaycsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGF1ZGlvU291cmNlID0gdGhpcy5hZGRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpO1xuICAgICAgICAgICAgICAgIGF1ZGlvU291cmNlLmNsaXAgPSBhdWRpb0NsaXA7XG4gICAgICAgICAgICAgICAgYXVkaW9Tb3VyY2UucGxheSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGxldCB0aWxlZFNpemUgPSB0aGlzLnRpbGVkTWFwLmdldFRpbGVTaXplKCk7XG4gICAgICAgIGxldCBsYXllciA9IHRoaXMudGlsZWRNYXAuZ2V0TGF5ZXIoJ2ZlbmNlcycpO1xuICAgICAgICBsZXQgbGF5ZXJTaXplID0gbGF5ZXIuZ2V0TGF5ZXJTaXplKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXllclNpemUud2lkdGg7IGkrKykge1xuICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8bGF5ZXJTaXplLmhlaWdodDsgaisrKXtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZWQgPSBsYXllci5nZXRUaWxlZFRpbGVBdChpLCBqLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpZih0aWxlZC5naWQgIT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIHRpbGVkLm5vZGUuZ3JvdXAgPSAnd2FsbCc7XG4gICAgICAgICAgICAgICAgICAgIGxldCBib2R5ID0gdGlsZWQubm9kZS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgICAgICAgICAgICAgYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2xsaWRlciA9IHRpbGVkLm5vZGUuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyLm9mZnNldCA9IGNjLnYyKHRpbGVkU2l6ZS53aWR0aC8yLCB0aWxlZFNpemUuaGVpZ2h0LzIpO1xuICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5zaXplID0gdGlsZWRTaXplO1xuICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5hcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=