function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
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
            configurable: true
        }
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
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
import { Data, Effect, pipe } from 'effect';
var NotFoundError = /*#__PURE__*/ function(_Data_TaggedError) {
    "use strict";
    _inherits(NotFoundError, _Data_TaggedError);
    function NotFoundError() {
        _class_call_check(this, NotFoundError);
        return _call_super(this, NotFoundError, arguments);
    }
    return NotFoundError;
}(Data.TaggedError("NotFoundError"));
var NotOddNumber = /*#__PURE__*/ function(_Data_TaggedError) {
    "use strict";
    _inherits(NotOddNumber, _Data_TaggedError);
    function NotOddNumber() {
        _class_call_check(this, NotOddNumber);
        return _call_super(this, NotOddNumber, arguments);
    }
    return NotOddNumber;
}(Data.TaggedError("NotOddNumber"));
var EffectFindFirstElement = function(x, predicate) {
    return pipe(Effect.succeed(x), Effect.map(function(x) {
        return x.find(predicate);
    }), Effect.flatMap(function(x) {
        return x ? Effect.succeed(x) : Effect.fail(new NotFoundError());
    }));
};
var validateFeature = function(x) {
    return pipe(Effect.succeed(x), Effect.flatMap(function(x) {
        return x % 2 === 0 ? Effect.succeed(x) : Effect.fail(new NotOddNumber());
    }));
};
var numbers = [
    1,
    3,
    4,
    5,
    6
];
var pipeline = pipe(EffectFindFirstElement(numbers, function(x) {
    return x === 3;
}), Effect.flatMap(function(x) {
    return validateFeature(x);
}));
var program = Effect.match(pipeline, {
    onSuccess: function(v) {
        console.log(v);
    },
    onFailure: function(error) {
        Effect.catchTags({
            NotOddNumber: function() {
                console.log("/");
            },
            NotFoundError: function() {
                console.log("?");
            }
        });
    }
});
Effect.runPromise(program).then(function(r) {});

