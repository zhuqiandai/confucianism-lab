function _assert_this_initialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }
  return self;
}
function _call_super(_this, derived, args) {
  derived = _get_prototype_of(derived);
  return _possible_constructor_return(
    _this,
    _is_native_reflect_construct()
      ? Reflect.construct(
          derived,
          args || [],
          _get_prototype_of(_this).constructor,
        )
      : derived.apply(_this, args),
  );
}
function _class_call_check(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _get_prototype_of(o) {
  _get_prototype_of = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
  if (call && (_type_of(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
  _set_prototype_of =
    Object.setPrototypeOf ||
    function setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _set_prototype_of(o, p);
}
function _type_of(obj) {
  "@swc/helpers - typeof";
  return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol
    ? "symbol"
    : typeof obj;
}
function _is_native_reflect_construct() {
  try {
    var result = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch (_) {}
  return (_is_native_reflect_construct = function () {
    return !!result;
  })();
}
import { Data, Effect } from "effect";
import { pipe, constVoid } from "effect/Function";
var success = Effect.succeed(42);
var failure = Effect.fail(new Error("Uh oh!"));
var task = Effect.fail("Uh oh!").pipe(Effect.as(5));
var program = Effect.match(task, {
  onFailure: constVoid,
  onSuccess: constVoid,
});
var program1 = Effect.matchEffect(task, {
  onFailure: function (error) {
    return Effect.succeed("ffa");
  },
  onSuccess: function (value) {
    return Effect.succeed("fafa");
  },
});
var WrongNumberError = /*#__PURE__*/ (function (_Data_TaggedError) {
  "use strict";
  _inherits(WrongNumberError, _Data_TaggedError);
  function WrongNumberError() {
    _class_call_check(this, WrongNumberError);
    return _call_super(this, WrongNumberError, arguments);
  }
  return WrongNumberError;
})(Data.TaggedError("WrongNumberError"));
export function generateRandomNumber() {
  return pipe(
    Effect.sync(function () {
      return Math.random();
    }),
    Effect.flatMap(function (randomNumber) {
      if (randomNumber > 0.6) {
        return Effect.fail(new WrongNumberError());
      }
      return Effect.succeed(randomNumber);
    }),
  );
}
var program2 = Effect.matchEffect(generateRandomNumber(), {
  onFailure: function (error) {
    return Effect.succeed("ffa");
  },
  onSuccess: Effect.succeed,
});
Effect.runPromise(program2).then(function (num) {
  console.log(num);
});
