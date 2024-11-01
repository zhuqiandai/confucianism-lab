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
import { Effect, Data } from "effect";
import { constVoid } from "effect/Function";
var posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];
var NotFindError = /*#__PURE__*/ (function (_Data_TaggedError) {
  "use strict";
  _inherits(NotFindError, _Data_TaggedError);
  function NotFindError() {
    _class_call_check(this, NotFindError);
    return _call_super(this, NotFindError, arguments);
  }
  return NotFindError;
})(Data.TaggedError("NotFindError"));
function findInArray(array, predicate) {
  var target = array.find(predicate);
  return target
    ? Effect.succeed(target)
    : new NotFindError({
        message: "没有元素",
      });
}
var numbers = [1, 2, 3, 4, 5];
var findEven = findInArray(numbers, function (num) {
  return num % 2 === 0;
});
var findPostIdEvenv = findInArray(posts, function (p) {
  return p.id % 2 === 0;
});
Effect.match(findEven, {
  onSuccess: constVoid,
  onFailure: function (error) {
    console.error("中间步骤处理 error", error);
  },
});
Effect.runPromise(findEven)
  .then(function (even) {
    console.log("程序结果", even);
  })
  .catch(function (error) {
    console.log("最后错误", error);
  });
Effect.runPromise(findPostIdEvenv)
  .then(function (even) {
    console.log("程序结果", even);
  })
  .catch(function (error) {
    console.log("最后错误", error);
  });
