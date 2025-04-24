"use strict";
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