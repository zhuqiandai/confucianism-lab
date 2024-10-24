function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import { pipe, Effect, Match, Data } from 'effect';
var FooError = Data.tagged("FooError");
var BarError = Data.tagged("BarError");
function flaky() {
    return Math.random() > 0.5;
}
export var example = pipe(Effect.if(flaky(), {
    onTrue: function() {
        return Effect.succeed("success1");
    },
    onFalse: function() {
        return Effect.fail(FooError({
            error: "error1"
        }));
    }
}), Effect.flatMap(function(a) {
    return Effect.if(flaky(), {
        onTrue: function() {
            return Effect.succeed([
                a,
                "success2"
            ]);
        },
        onFalse: function() {
            return Effect.fail(BarError({
                error: "error2"
            }));
        }
    });
}));
var catchSome = Effect.catchSome(example, function(e) {
    return pipe(Match.value(e), Match.tag("FooError", function(_) {
        return Effect.succeed("foo");
    }), Match.option);
});
var fallback = Effect.orElse(example, function() {
    return Effect.succeed("foo");
});
var match = Effect.match(example, {
    onFailure: function(error) {
        return error._tag;
    },
    onSuccess: function(success) {
        return success[0];
    }
});
var successExample = Effect.succeed([
    "1",
    "2"
]);
var matcher = Effect.match(successExample, {
    onFailure: function(error) {
        return "DD";
    },
    onSuccess: function(success) {
        return success[0];
    }
});
var emptyCause = Effect.cause(Effect.succeed(1));
var failCause = Effect.cause(Effect.fail(1));
var dieExample = pipe(example, Effect.flatMap(function() {
    return Effect.die("💥");
}));
var catchDie = pipe(dieExample, Effect.catchAllDefect(function(_) {
    return Effect.fail(_);
}), Effect.ignore);
var successful = pipe(Effect.zip(catchDie, Effect.succeed("recovered")), Effect.zipLeft(Effect.log("exited successfully")));
var getUserInfo = Effect.sync(function() {
    return {
        id: 1,
        name: 'Alice',
        email: 'alice@example.com'
    };
});
var getUserOrders = Effect.sync(function() {
    return {
        orders: [
            {
                id: 101,
                amount: 100
            },
            {
                id: 102,
                amount: 200
            }
        ]
    };
});
var getUserWithOrders = pipe(Effect.zipRight(getUserInfo, getUserOrders), Effect.map(function(orders) {
    return orders;
}));
var getUserAndOrders = pipe(Effect.zip(getUserInfo, getUserOrders), Effect.map(function(param) {
    var _param = _sliced_to_array(param, 2), user = _param[0], orders = _param[1];
    return {
        user: user,
        orders: orders
    };
}));
console.log(Effect.runSync(getUserWithOrders));
console.log(Effect.runSync(getUserAndOrders));

