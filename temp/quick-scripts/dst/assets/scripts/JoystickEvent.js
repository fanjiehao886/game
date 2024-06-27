
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0pveXN0aWNrRXZlbnQuanMiXSwibmFtZXMiOlsiSm95c3RpY2tFdmVudCIsImNjIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiX2V2ZW50IiwiY3RvciIsIkV2ZW50VGFyZ2V0Iiwib24iLCJldmVudFR5cGUiLCJjYWxsRnVuYyIsInRhcmdldCIsIm9mZiIsImVtaXQiLCJhcmciLCJfaW5zdGFuY2UiLCJnZXRJbnN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFFekJDLFVBQVUsRUFBRTtJQUNSQyxNQUFNLEVBQUU7RUFEQSxDQUZhO0VBTXpCQyxJQU55QixrQkFNbEI7SUFDSCxLQUFLRCxNQUFMLEdBQWMsSUFBSUgsRUFBRSxDQUFDSyxXQUFQLEVBQWQ7RUFDSCxDQVJ3QjtFQVV6QkMsRUFWeUIsY0FVdEJDLFNBVnNCLEVBVVhDLFFBVlcsRUFVREMsTUFWQyxFQVVPO0lBQzVCLEtBQUtOLE1BQUwsQ0FBWUcsRUFBWixDQUFlQyxTQUFmLEVBQTBCQyxRQUExQixFQUFvQ0MsTUFBcEM7RUFDSCxDQVp3QjtFQWN6QkMsR0FkeUIsZUFjckJILFNBZHFCLEVBY1ZDLFFBZFUsRUFjQUMsTUFkQSxFQWNRO0lBQzdCLEtBQUtOLE1BQUwsQ0FBWU8sR0FBWixDQUFnQkgsU0FBaEIsRUFBMkJDLFFBQTNCLEVBQXFDQyxNQUFyQztFQUNILENBaEJ3Qjs7RUFrQnpCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSUUsSUF2QnlCLGdCQXVCcEJKLFNBdkJvQixFQXVCRDtJQUFBOztJQUFBLGtDQUFMSyxHQUFLO01BQUxBLEdBQUs7SUFBQTs7SUFDcEIscUJBQUtULE1BQUwsRUFBWVEsSUFBWixzQkFBaUJKLFNBQWpCLFNBQStCSyxHQUEvQjtFQUNIO0FBekJ3QixDQUFULENBQXBCO0FBNkJBLElBQUlDLFNBQVMsR0FBRyxJQUFoQjs7QUFDQWQsYUFBYSxDQUFDZSxXQUFkLEdBQTRCLFlBQVk7RUFDcEMsQ0FBQ0QsU0FBRCxLQUFlQSxTQUFTLEdBQUcsSUFBSWQsYUFBSixFQUEzQjtFQUVBLE9BQU9jLFNBQVA7QUFDSCxDQUpEOztlQU1lZCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IEpveXN0aWNrRXZlbnQgPSBjYy5DbGFzcyh7XG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIF9ldmVudDogbnVsbFxuICAgIH0sXG5cbiAgICBjdG9yKCkge1xuICAgICAgICB0aGlzLl9ldmVudCA9IG5ldyBjYy5FdmVudFRhcmdldCgpO1xuICAgIH0sXG5cbiAgICBvbihldmVudFR5cGUsIGNhbGxGdW5jLCB0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5fZXZlbnQub24oZXZlbnRUeXBlLCBjYWxsRnVuYywgdGFyZ2V0KTtcbiAgICB9LFxuXG4gICAgb2ZmKGV2ZW50VHlwZSwgY2FsbEZ1bmMsIHRhcmdldCkge1xuICAgICAgICB0aGlzLl9ldmVudC5vZmYoZXZlbnRUeXBlLCBjYWxsRnVuYywgdGFyZ2V0KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnRUeXBlIEpveXN0aWNrRW51bS5Kb3lzdGlja0V2ZW50VHlwZVxuICAgICAqIEBwYXJhbSBhcmdcbiAgICAgKi9cbiAgICBlbWl0KGV2ZW50VHlwZSwgLi4uYXJnKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50LmVtaXQoZXZlbnRUeXBlLCAuLi5hcmcpXG4gICAgfVxuXG59KTtcblxubGV0IF9pbnN0YW5jZSA9IG51bGw7XG5Kb3lzdGlja0V2ZW50LmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICFfaW5zdGFuY2UgJiYgKF9pbnN0YW5jZSA9IG5ldyBKb3lzdGlja0V2ZW50KCkpO1xuXG4gICAgcmV0dXJuIF9pbnN0YW5jZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEpveXN0aWNrRXZlbnQ7Il19