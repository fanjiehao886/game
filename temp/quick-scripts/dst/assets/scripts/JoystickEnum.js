
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSm95c3RpY2tFbnVtLmpzIl0sIm5hbWVzIjpbIkpveXN0aWNrVHlwZSIsImNjIiwiRW51bSIsIkZJWEVEIiwiRk9MTE9XIiwiRGlyZWN0aW9uVHlwZSIsIkZPVVIiLCJFSUdIVCIsIkFMTCIsIlNwZWVkVHlwZSIsIlNUT1AiLCJOT1JNQUwiLCJGQVNUIiwiSm95c3RpY2tFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIlRPVUNIX01PVkUiLCJUT1VDSF9FTkQiLCJDSEFOR0VfSk9ZU1RJQ0tfVFlQRSIsImV4cG9ydHMiLCJfZGVmYXVsdCIsIm1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUFlO0VBQ1hBLFlBQVksRUFBRUMsRUFBRSxDQUFDQyxJQUFJLENBQUM7SUFDbEJDLEtBQUssRUFBRSxDQUFDO0lBQ1JDLE1BQU0sRUFBRTtFQUNaLENBQUMsQ0FBQztFQUVGQyxhQUFhLEVBQUVKLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDO0lBQ25CSSxJQUFJLEVBQUUsQ0FBQztJQUNQQyxLQUFLLEVBQUUsQ0FBQztJQUNSQyxHQUFHLEVBQUU7RUFDVCxDQUFDLENBQUM7RUFFRkMsU0FBUyxFQUFFUixFQUFFLENBQUNDLElBQUksQ0FBQztJQUNmUSxJQUFJLEVBQUUsQ0FBQztJQUNQQyxNQUFNLEVBQUUsQ0FBQztJQUNUQyxJQUFJLEVBQUU7RUFDVixDQUFDLENBQUM7RUFFRkMsaUJBQWlCLEVBQUVaLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDO0lBQ3ZCWSxXQUFXLEVBQUUsWUFBWTtJQUN6QkMsVUFBVSxFQUFFLFdBQVc7SUFDdkJDLFNBQVMsRUFBRSxVQUFVO0lBRXJCQyxvQkFBb0IsRUFBRTtFQUMxQixDQUFDO0FBQ0wsQ0FBQztBQUFBQyxPQUFBLGNBQUFDLFFBQUE7QUFBQUMsTUFBQSxDQUFBRixPQUFBLEdBQUFBLE9BQUEiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIEpveXN0aWNrVHlwZTogY2MuRW51bSh7XHJcbiAgICAgICAgRklYRUQ6IDAsXHJcbiAgICAgICAgRk9MTE9XOiAxLFxyXG4gICAgfSksXHJcblxyXG4gICAgRGlyZWN0aW9uVHlwZTogY2MuRW51bSh7XHJcbiAgICAgICAgRk9VUjogNCxcclxuICAgICAgICBFSUdIVDogOCxcclxuICAgICAgICBBTEw6IDAsXHJcbiAgICB9KSxcclxuXHJcbiAgICBTcGVlZFR5cGU6IGNjLkVudW0oe1xyXG4gICAgICAgIFNUT1A6IDAsXHJcbiAgICAgICAgTk9STUFMOiAxLFxyXG4gICAgICAgIEZBU1Q6IDJcclxuICAgIH0pLFxyXG5cclxuICAgIEpveXN0aWNrRXZlbnRUeXBlOiBjYy5FbnVtKHtcclxuICAgICAgICBUT1VDSF9TVEFSVDogXCJ0b3VjaFN0YXJ0XCIsXHJcbiAgICAgICAgVE9VQ0hfTU9WRTogXCJ0b3VjaE1vdmVcIixcclxuICAgICAgICBUT1VDSF9FTkQ6IFwidG91Y2hFbmRcIixcclxuXHJcbiAgICAgICAgQ0hBTkdFX0pPWVNUSUNLX1RZUEU6IFwiY2hhbmdlSm95c3RpY2tUeXBlXCJcclxuICAgIH0pLFxyXG59O1xyXG4iXX0=