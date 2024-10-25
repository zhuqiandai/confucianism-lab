import { Effect, Console } from "effect";
var effect = Effect.die("Oh uh!").pipe(Effect.as("primary result"));
var sandboxed = Effect.sandbox(effect);
var program = Effect.catchTags(sandboxed, {
  Die: function (cause) {
    return Console.log("Caught a defect: ".concat(cause.defect)).pipe(
      Effect.as("fallback result on defect"),
    );
  },
  Interrupt: function (cause) {
    return Console.log("Caught a defect: ".concat(cause.fiberId)).pipe(
      Effect.as("fallback result on fiber interruption"),
    );
  },
  Fail: function (cause) {
    return Console.log("Caught a defect: ".concat(cause.error)).pipe(
      Effect.as("fallback result on failure"),
    );
  },
});
var main = Effect.unsandbox(program);
Effect.runPromise(main).then(console.log);
