
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/JoystickEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba937pp7tZKTLKCnDZAsStd', 'JoystickEvent');
// scripts/JoystickEvent.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var JoystickEvent = cc.Class({
  properties: {
    _event: null
  },
  ctor: function ctor() {
    this._event = new cc.EventTarget();
  },
  on: function on(eventType, callFunc, target) {
    this._event.on(eventType, callFunc, target);
  },
  off: function off(eventType, callFunc, target) {
    this._event.off(eventType, callFunc, target);
  },
  /**
   *
   * @param eventType JoystickEnum.JoystickEventType
   * @param arg
   */
  emit: function emit(eventType) {
    var _this$_event;
    for (var _len = arguments.length, arg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      arg[_key - 1] = arguments[_key];
    }
    (_this$_event = this._event).emit.apply(_this$_event, [eventType].concat(arg));
  }
});
var _instance = null;
JoystickEvent.getInstance = function () {
  !_instance && (_instance = new JoystickEvent());
  return _instance;
};
var _default = JoystickEvent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSm95c3RpY2tFdmVudC5qcyJdLCJuYW1lcyI6WyJKb3lzdGlja0V2ZW50IiwiY2MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJfZXZlbnQiLCJjdG9yIiwiRXZlbnRUYXJnZXQiLCJvbiIsImV2ZW50VHlwZSIsImNhbGxGdW5jIiwidGFyZ2V0Iiwib2ZmIiwiZW1pdCIsIl90aGlzJF9ldmVudCIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmciLCJBcnJheSIsIl9rZXkiLCJhcHBseSIsImNvbmNhdCIsIl9pbnN0YW5jZSIsImdldEluc3RhbmNlIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUV6QkMsVUFBVSxFQUFFO0lBQ1JDLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFFREMsSUFBSSxXQUFBQSxLQUFBLEVBQUc7SUFDSCxJQUFJLENBQUNELE1BQU0sR0FBRyxJQUFJSCxFQUFFLENBQUNLLFdBQVcsRUFBRTtFQUN0QyxDQUFDO0VBRURDLEVBQUUsV0FBQUEsR0FBQ0MsU0FBUyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRTtJQUM1QixJQUFJLENBQUNOLE1BQU0sQ0FBQ0csRUFBRSxDQUFDQyxTQUFTLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxDQUFDO0VBQy9DLENBQUM7RUFFREMsR0FBRyxXQUFBQSxJQUFDSCxTQUFTLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFO0lBQzdCLElBQUksQ0FBQ04sTUFBTSxDQUFDTyxHQUFHLENBQUNILFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLENBQUM7RUFDaEQsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSUUsSUFBSSxXQUFBQSxLQUFDSixTQUFTLEVBQVU7SUFBQSxJQUFBSyxZQUFBO0lBQUEsU0FBQUMsSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBTEMsR0FBRyxPQUFBQyxLQUFBLENBQUFKLElBQUEsT0FBQUEsSUFBQSxXQUFBSyxJQUFBLE1BQUFBLElBQUEsR0FBQUwsSUFBQSxFQUFBSyxJQUFBO01BQUhGLEdBQUcsQ0FBQUUsSUFBQSxRQUFBSixTQUFBLENBQUFJLElBQUE7SUFBQTtJQUNsQixDQUFBTixZQUFBLE9BQUksQ0FBQ1QsTUFBTSxFQUFDUSxJQUFJLENBQUFRLEtBQUEsQ0FBQVAsWUFBQSxHQUFDTCxTQUFTLEVBQUFhLE1BQUEsQ0FBS0osR0FBRyxFQUFDO0VBQ3ZDO0FBRUosQ0FBQyxDQUFDO0FBRUYsSUFBSUssU0FBUyxHQUFHLElBQUk7QUFDcEJ0QixhQUFhLENBQUN1QixXQUFXLEdBQUcsWUFBWTtFQUNwQyxDQUFDRCxTQUFTLEtBQUtBLFNBQVMsR0FBRyxJQUFJdEIsYUFBYSxFQUFFLENBQUM7RUFFL0MsT0FBT3NCLFNBQVM7QUFDcEIsQ0FBQztBQUFDLElBQUFFLFFBQUEsR0FFYXhCLGFBQWE7QUFBQXlCLE9BQUEsY0FBQUQsUUFBQTtBQUFBRSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IEpveXN0aWNrRXZlbnQgPSBjYy5DbGFzcyh7XHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIF9ldmVudDogbnVsbFxyXG4gICAgfSxcclxuXHJcbiAgICBjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2V2ZW50ID0gbmV3IGNjLkV2ZW50VGFyZ2V0KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uKGV2ZW50VHlwZSwgY2FsbEZ1bmMsIHRhcmdldCkge1xyXG4gICAgICAgIHRoaXMuX2V2ZW50Lm9uKGV2ZW50VHlwZSwgY2FsbEZ1bmMsIHRhcmdldCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9mZihldmVudFR5cGUsIGNhbGxGdW5jLCB0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLl9ldmVudC5vZmYoZXZlbnRUeXBlLCBjYWxsRnVuYywgdGFyZ2V0KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGV2ZW50VHlwZSBKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGVcclxuICAgICAqIEBwYXJhbSBhcmdcclxuICAgICAqL1xyXG4gICAgZW1pdChldmVudFR5cGUsIC4uLmFyZykge1xyXG4gICAgICAgIHRoaXMuX2V2ZW50LmVtaXQoZXZlbnRUeXBlLCAuLi5hcmcpXHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbmxldCBfaW5zdGFuY2UgPSBudWxsO1xyXG5Kb3lzdGlja0V2ZW50LmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgIV9pbnN0YW5jZSAmJiAoX2luc3RhbmNlID0gbmV3IEpveXN0aWNrRXZlbnQoKSk7XHJcblxyXG4gICAgcmV0dXJuIF9pbnN0YW5jZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpveXN0aWNrRXZlbnQ7Il19