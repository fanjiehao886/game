
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2J1bGxldHMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInNyY0hlaWdodCIsIk51bWJlciIsInNyY1dpZHRoIiwicHJvcGVydGllcyIsInNwZWVkIiwidHlwZSIsIkludGVnZXIiLCJvbkxvYWQiLCJ2aWV3IiwiZ2V0Q2FudmFzU2l6ZSIsImhlaWdodCIsIndpZHRoIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsIm5vZGUiLCJ4IiwicmVtb3ZlRnJvbVBhcmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsU0FBUyxFQUFFQyxNQUhOO0VBSUxDLFFBQVEsRUFBRUQsTUFKTDtFQU1MRSxVQUFVLEVBQUU7SUFDUkMsS0FBSyxFQUFHO01BQ0osV0FBUyxHQURMO01BRUpDLElBQUksRUFBRVIsRUFBRSxDQUFDUztJQUZMO0VBREEsQ0FOUDtFQWFMO0VBRUFDLE1BZkssb0JBZUs7SUFDTixLQUFLUCxTQUFMLEdBQWlCSCxFQUFFLENBQUNXLElBQUgsQ0FBUUMsYUFBUixHQUF3QkMsTUFBekM7SUFDQSxLQUFLUixRQUFMLEdBQWdCTCxFQUFFLENBQUNXLElBQUgsQ0FBUUMsYUFBUixHQUF3QkUsS0FBeEM7RUFDSCxDQWxCSTtFQW9CTEMsS0FwQkssbUJBb0JJLENBRVIsQ0F0Qkk7RUF3QkxDLE1BeEJLLGtCQXdCR0MsRUF4QkgsRUF3Qk87SUFDUixLQUFLQyxJQUFMLENBQVVDLENBQVYsSUFBZSxLQUFLWixLQUFMLEdBQWFVLEVBQTVCOztJQUNBLElBQUcsS0FBS0MsSUFBTCxDQUFVQyxDQUFWLEdBQWMsS0FBS2QsUUFBdEIsRUFBK0I7TUFDM0IsS0FBS2EsSUFBTCxDQUFVRSxnQkFBVixDQUEyQixJQUEzQjtJQUNIO0VBQ0o7QUE3QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHNyY0hlaWdodDogTnVtYmVyLFxuICAgIHNyY1dpZHRoOiBOdW1iZXIsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNwZWVkIDoge1xuICAgICAgICAgICAgZGVmYXVsdDogMzAwLFxuICAgICAgICAgICAgdHlwZTogY2MuSW50ZWdlcixcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLnNyY0hlaWdodCA9IGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLmhlaWdodDtcbiAgICAgICAgdGhpcy5zcmNXaWR0aCA9IGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLndpZHRoO1xuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgIGlmKHRoaXMubm9kZS54ID4gdGhpcy5zcmNXaWR0aCl7XG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19