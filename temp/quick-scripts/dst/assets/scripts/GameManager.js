
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '710de85chpE1raL8037SFoX', 'GameManager');
// scripts/GameManager.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    starCountLabel: {
      "default": null,
      type: cc.Label,
      tooltip: '显示星星数量的Label组件'
    },
    goldLabel: {
      "default": null,
      type: cc.Label,
      tooltip: '金币数量显示文本'
    },
    tiledMap: {
      "default": null,
      type: cc.TiledMap,
      tooltip: '地图'
    },
    starCount: {
      "default": 0,
      type: cc.Integer,
      tooltip: '星星数量'
    },
    _goldCount: 0
  },
  statics: {
    instance: null
  },
  onLoad: function onLoad() {
    // 确保在场景中只有一个 GameManager 实例
    if (GameManager.instance) {
      this.node.destroy();
      return;
    }

    GameManager.instance = this; // 初始化计数

    this.starCount = 0;
    this._goldCount = 0; // 更新显示

    this.updateStarDisplay(); // 检查并输出调试信息

    if (!this.starCountLabel) {
      cc.error('GameManager: starCountLabel 未设置!');
    }
  },
  addStar: function addStar() {
    this.starCount++;
    this.updateStarDisplay();
  },
  updateStarDisplay: function updateStarDisplay() {
    if (this.starCountLabel) {
      this.starCountLabel.string = "" + this.starCount;
      cc.log('GameManager: 更新星星数量为:', this.starCount);
    } else {
      cc.error('GameManager: starCountLabel 未设置，无法显示星星数量!');
    }
  },
  updateGold: function updateGold(amount) {
    this._goldCount = amount;
    cc.log('GameManager: 更新金币数量为:', this._goldCount);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWVNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhckNvdW50TGFiZWwiLCJ0eXBlIiwiTGFiZWwiLCJ0b29sdGlwIiwiZ29sZExhYmVsIiwidGlsZWRNYXAiLCJUaWxlZE1hcCIsInN0YXJDb3VudCIsIkludGVnZXIiLCJfZ29sZENvdW50Iiwic3RhdGljcyIsImluc3RhbmNlIiwib25Mb2FkIiwiR2FtZU1hbmFnZXIiLCJub2RlIiwiZGVzdHJveSIsInVwZGF0ZVN0YXJEaXNwbGF5IiwiZXJyb3IiLCJhZGRTdGFyIiwic3RyaW5nIiwibG9nIiwidXBkYXRlR29sZCIsImFtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLGNBQWMsRUFBRTtNQUNaLFdBQVMsSUFERztNQUVaQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sS0FGRztNQUdaQyxPQUFPLEVBQUU7SUFIRyxDQURSO0lBTVJDLFNBQVMsRUFBRTtNQUNQLFdBQVMsSUFERjtNQUVQSCxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sS0FGRjtNQUdQQyxPQUFPLEVBQUU7SUFIRixDQU5IO0lBV1JFLFFBQVEsRUFBRTtNQUNOLFdBQVMsSUFESDtNQUVOSixJQUFJLEVBQUVMLEVBQUUsQ0FBQ1UsUUFGSDtNQUdOSCxPQUFPLEVBQUU7SUFISCxDQVhGO0lBZ0JSSSxTQUFTLEVBQUU7TUFDUCxXQUFTLENBREY7TUFFUE4sSUFBSSxFQUFFTCxFQUFFLENBQUNZLE9BRkY7TUFHUEwsT0FBTyxFQUFFO0lBSEYsQ0FoQkg7SUFxQlJNLFVBQVUsRUFBRTtFQXJCSixDQUhQO0VBMkJMQyxPQUFPLEVBQUU7SUFDTEMsUUFBUSxFQUFFO0VBREwsQ0EzQko7RUErQkxDLE1BL0JLLG9CQStCSTtJQUNMO0lBQ0EsSUFBSUMsV0FBVyxDQUFDRixRQUFoQixFQUEwQjtNQUN0QixLQUFLRyxJQUFMLENBQVVDLE9BQVY7TUFDQTtJQUNIOztJQUNERixXQUFXLENBQUNGLFFBQVosR0FBdUIsSUFBdkIsQ0FOSyxDQVFMOztJQUNBLEtBQUtKLFNBQUwsR0FBaUIsQ0FBakI7SUFDQSxLQUFLRSxVQUFMLEdBQWtCLENBQWxCLENBVkssQ0FZTDs7SUFDQSxLQUFLTyxpQkFBTCxHQWJLLENBZUw7O0lBQ0EsSUFBSSxDQUFDLEtBQUtoQixjQUFWLEVBQTBCO01BQ3RCSixFQUFFLENBQUNxQixLQUFILENBQVMsa0NBQVQ7SUFDSDtFQUNKLENBbERJO0VBb0RMQyxPQXBESyxxQkFvREs7SUFDTixLQUFLWCxTQUFMO0lBQ0EsS0FBS1MsaUJBQUw7RUFDSCxDQXZESTtFQXlETEEsaUJBekRLLCtCQXlEZTtJQUNoQixJQUFJLEtBQUtoQixjQUFULEVBQXlCO01BQ3JCLEtBQUtBLGNBQUwsQ0FBb0JtQixNQUFwQixRQUFnQyxLQUFLWixTQUFyQztNQUNBWCxFQUFFLENBQUN3QixHQUFILENBQU8sdUJBQVAsRUFBZ0MsS0FBS2IsU0FBckM7SUFDSCxDQUhELE1BR087TUFDSFgsRUFBRSxDQUFDcUIsS0FBSCxDQUFTLDJDQUFUO0lBQ0g7RUFDSixDQWhFSTtFQWtFTEksVUFsRUssc0JBa0VNQyxNQWxFTixFQWtFYztJQUNmLEtBQUtiLFVBQUwsR0FBa0JhLE1BQWxCO0lBQ0ExQixFQUFFLENBQUN3QixHQUFILENBQU8sdUJBQVAsRUFBZ0MsS0FBS1gsVUFBckM7RUFDSDtBQXJFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzdGFyQ291bnRMYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+aYvuekuuaYn+aYn+aVsOmHj+eahExhYmVs57uE5Lu2J1xuICAgICAgICB9LFxuICAgICAgICBnb2xkTGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfph5HluIHmlbDph4/mmL7npLrmlofmnKwnXG4gICAgICAgIH0sXG4gICAgICAgIHRpbGVkTWFwOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuVGlsZWRNYXAsXG4gICAgICAgICAgICB0b29sdGlwOiAn5Zyw5Zu+J1xuICAgICAgICB9LFxuICAgICAgICBzdGFyQ291bnQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAsXG4gICAgICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+aYn+aYn+aVsOmHjydcbiAgICAgICAgfSxcbiAgICAgICAgX2dvbGRDb3VudDogMFxuICAgIH0sXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIGluc3RhbmNlOiBudWxsXG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8g56Gu5L+d5Zyo5Zy65pmv5Lit5Y+q5pyJ5LiA5LiqIEdhbWVNYW5hZ2VyIOWunuS+i1xuICAgICAgICBpZiAoR2FtZU1hbmFnZXIuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgR2FtZU1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBcbiAgICAgICAgLy8g5Yid5aeL5YyW6K6h5pWwXG4gICAgICAgIHRoaXMuc3RhckNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5fZ29sZENvdW50ID0gMDtcbiAgICAgICAgXG4gICAgICAgIC8vIOabtOaWsOaYvuekulxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXJEaXNwbGF5KCk7XG4gICAgICAgIFxuICAgICAgICAvLyDmo4Dmn6XlubbovpPlh7rosIPor5Xkv6Hmga9cbiAgICAgICAgaWYgKCF0aGlzLnN0YXJDb3VudExhYmVsKSB7XG4gICAgICAgICAgICBjYy5lcnJvcignR2FtZU1hbmFnZXI6IHN0YXJDb3VudExhYmVsIOacquiuvue9riEnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZGRTdGFyKCkge1xuICAgICAgICB0aGlzLnN0YXJDb3VudCsrO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXJEaXNwbGF5KCk7XG4gICAgfSxcblxuICAgIHVwZGF0ZVN0YXJEaXNwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5zdGFyQ291bnRMYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5zdGFyQ291bnRMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLnN0YXJDb3VudH1gO1xuICAgICAgICAgICAgY2MubG9nKCdHYW1lTWFuYWdlcjog5pu05paw5pif5pif5pWw6YeP5Li6OicsIHRoaXMuc3RhckNvdW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmVycm9yKCdHYW1lTWFuYWdlcjogc3RhckNvdW50TGFiZWwg5pyq6K6+572u77yM5peg5rOV5pi+56S65pif5pif5pWw6YePIScpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZUdvbGQoYW1vdW50KSB7XG4gICAgICAgIHRoaXMuX2dvbGRDb3VudCA9IGFtb3VudDtcbiAgICAgICAgY2MubG9nKCdHYW1lTWFuYWdlcjog5pu05paw6YeR5biB5pWw6YeP5Li6OicsIHRoaXMuX2dvbGRDb3VudCk7XG4gICAgfVxufSk7XG4iXX0=