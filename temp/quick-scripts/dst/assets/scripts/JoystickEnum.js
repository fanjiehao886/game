
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/JoystickEnum.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b5a5Re7qpJIKGtGrt4O6rv', 'JoystickEnum');
// scripts/JoystickEnum.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _default = {
  JoystickType: cc.Enum({
    FIXED: 0,
    FOLLOW: 1
  }),
  DirectionType: cc.Enum({
    FOUR: 4,
    EIGHT: 8,
    ALL: 0
  }),
  SpeedType: cc.Enum({
    STOP: 0,
    NORMAL: 1,
    FAST: 2
  }),
  JoystickEventType: cc.Enum({
    TOUCH_START: "touchStart",
    TOUCH_MOVE: "touchMove",
    TOUCH_END: "touchEnd",
    CHANGE_JOYSTICK_TYPE: "changeJoystickType"
  })
};
exports["default"] = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0pveXN0aWNrRW51bS5qcyJdLCJuYW1lcyI6WyJKb3lzdGlja1R5cGUiLCJjYyIsIkVudW0iLCJGSVhFRCIsIkZPTExPVyIsIkRpcmVjdGlvblR5cGUiLCJGT1VSIiwiRUlHSFQiLCJBTEwiLCJTcGVlZFR5cGUiLCJTVE9QIiwiTk9STUFMIiwiRkFTVCIsIkpveXN0aWNrRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJUT1VDSF9NT1ZFIiwiVE9VQ0hfRU5EIiwiQ0hBTkdFX0pPWVNUSUNLX1RZUEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFBZTtFQUNYQSxZQUFZLEVBQUVDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRO0lBQ2xCQyxLQUFLLEVBQUUsQ0FEVztJQUVsQkMsTUFBTSxFQUFFO0VBRlUsQ0FBUixDQURIO0VBTVhDLGFBQWEsRUFBRUosRUFBRSxDQUFDQyxJQUFILENBQVE7SUFDbkJJLElBQUksRUFBRSxDQURhO0lBRW5CQyxLQUFLLEVBQUUsQ0FGWTtJQUduQkMsR0FBRyxFQUFFO0VBSGMsQ0FBUixDQU5KO0VBWVhDLFNBQVMsRUFBRVIsRUFBRSxDQUFDQyxJQUFILENBQVE7SUFDZlEsSUFBSSxFQUFFLENBRFM7SUFFZkMsTUFBTSxFQUFFLENBRk87SUFHZkMsSUFBSSxFQUFFO0VBSFMsQ0FBUixDQVpBO0VBa0JYQyxpQkFBaUIsRUFBRVosRUFBRSxDQUFDQyxJQUFILENBQVE7SUFDdkJZLFdBQVcsRUFBRSxZQURVO0lBRXZCQyxVQUFVLEVBQUUsV0FGVztJQUd2QkMsU0FBUyxFQUFFLFVBSFk7SUFLdkJDLG9CQUFvQixFQUFFO0VBTEMsQ0FBUjtBQWxCUiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIEpveXN0aWNrVHlwZTogY2MuRW51bSh7XG4gICAgICAgIEZJWEVEOiAwLFxuICAgICAgICBGT0xMT1c6IDEsXG4gICAgfSksXG5cbiAgICBEaXJlY3Rpb25UeXBlOiBjYy5FbnVtKHtcbiAgICAgICAgRk9VUjogNCxcbiAgICAgICAgRUlHSFQ6IDgsXG4gICAgICAgIEFMTDogMCxcbiAgICB9KSxcblxuICAgIFNwZWVkVHlwZTogY2MuRW51bSh7XG4gICAgICAgIFNUT1A6IDAsXG4gICAgICAgIE5PUk1BTDogMSxcbiAgICAgICAgRkFTVDogMlxuICAgIH0pLFxuXG4gICAgSm95c3RpY2tFdmVudFR5cGU6IGNjLkVudW0oe1xuICAgICAgICBUT1VDSF9TVEFSVDogXCJ0b3VjaFN0YXJ0XCIsXG4gICAgICAgIFRPVUNIX01PVkU6IFwidG91Y2hNb3ZlXCIsXG4gICAgICAgIFRPVUNIX0VORDogXCJ0b3VjaEVuZFwiLFxuXG4gICAgICAgIENIQU5HRV9KT1lTVElDS19UWVBFOiBcImNoYW5nZUpveXN0aWNrVHlwZVwiXG4gICAgfSksXG59O1xuIl19