
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYnVsbGV0cy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwic3JjSGVpZ2h0IiwiTnVtYmVyIiwic3JjV2lkdGgiLCJwcm9wZXJ0aWVzIiwic3BlZWQiLCJ0eXBlIiwiSW50ZWdlciIsIm9uTG9hZCIsInZpZXciLCJnZXRDYW52YXNTaXplIiwiaGVpZ2h0Iiwid2lkdGgiLCJzdGFydCIsInVwZGF0ZSIsImR0Iiwibm9kZSIsIngiLCJyZW1vdmVGcm9tUGFyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFNBQVMsRUFBRUMsTUFBTTtFQUNqQkMsUUFBUSxFQUFFRCxNQUFNO0VBRWhCRSxVQUFVLEVBQUU7SUFDUkMsS0FBSyxFQUFHO01BQ0osV0FBUyxHQUFHO01BQ1pDLElBQUksRUFBRVIsRUFBRSxDQUFDUztJQUNiO0VBQ0osQ0FBQztFQUVEO0VBRUFDLE1BQU0sV0FBQUEsT0FBQSxFQUFJO0lBQ04sSUFBSSxDQUFDUCxTQUFTLEdBQUdILEVBQUUsQ0FBQ1csSUFBSSxDQUFDQyxhQUFhLEVBQUUsQ0FBQ0MsTUFBTTtJQUMvQyxJQUFJLENBQUNSLFFBQVEsR0FBR0wsRUFBRSxDQUFDVyxJQUFJLENBQUNDLGFBQWEsRUFBRSxDQUFDRSxLQUFLO0VBQ2pELENBQUM7RUFFREMsS0FBSyxXQUFBQSxNQUFBLEVBQUksQ0FFVCxDQUFDO0VBRURDLE1BQU0sV0FBQUEsT0FBRUMsRUFBRSxFQUFFO0lBQ1IsSUFBSSxDQUFDQyxJQUFJLENBQUNDLENBQUMsSUFBSSxJQUFJLENBQUNaLEtBQUssR0FBR1UsRUFBRTtJQUM5QixJQUFHLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxDQUFDLEdBQUcsSUFBSSxDQUFDZCxRQUFRLEVBQUM7TUFDM0IsSUFBSSxDQUFDYSxJQUFJLENBQUNFLGdCQUFnQixDQUFDLElBQUksQ0FBQztJQUNwQztFQUNKO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBzcmNIZWlnaHQ6IE51bWJlcixcclxuICAgIHNyY1dpZHRoOiBOdW1iZXIsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHNwZWVkIDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAzMDAsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkludGVnZXIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnNyY0hlaWdodCA9IGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLmhlaWdodDtcclxuICAgICAgICB0aGlzLnNyY1dpZHRoID0gY2Mudmlldy5nZXRDYW52YXNTaXplKCkud2lkdGg7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICAgICAgaWYodGhpcy5ub2RlLnggPiB0aGlzLnNyY1dpZHRoKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19