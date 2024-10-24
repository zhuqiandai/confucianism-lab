
import { pipe, Effect, Match, Data } from 'effect'

export interface FooError {
  readonly _tag: "FooError";
  readonly error: string;
}
const FooError = Data.tagged<FooError>("FooError")

export interface BarError {
  readonly _tag: "BarError";
  readonly error: string;
}
const BarError = Data.tagged<BarError>("BarError")

function flaky() {
  return Math.random() > 0.5;
}

export const example = pipe(
  Effect.if(flaky(), {
    onTrue: () => Effect.succeed("success1" as const),
    onFalse: () => Effect.fail(FooError({ error: "error1" })),
  }),
  Effect.flatMap(a =>
    Effect.if(flaky(), {
      onTrue: () => Effect.succeed([a, "success2"] as const),
      onFalse: () => Effect.fail(BarError({error: "error2"})),
    }),
  ),
);


const catchSome = Effect.catchSome(example, e =>
  pipe(
    Match.value(e),
    Match.tag("FooError", _ => Effect.succeed("foo" as const)),
    Match.option,
  ),
);
const fallback = Effect.orElse(example, () => Effect.succeed("foo" as const));


const match = Effect.match(example, {
  onFailure: error => error._tag,
  onSuccess: success => success[0],
});


const successExample = Effect.succeed(["1", "2"])
const matcher = Effect.match(successExample, {
  onFailure: error => "DD",
  onSuccess: success => success[0],
})


const emptyCause = Effect.cause(Effect.succeed(1));
const failCause = Effect.cause(Effect.fail(1));


const dieExample = pipe(
  example,
  Effect.flatMap(() => Effect.die("💥")),
);


const catchDie = pipe(
  dieExample,
  Effect.catchAllDefect(_ => Effect.fail(_)),
  Effect.ignore,
);

const successful = pipe(
  Effect.zip(catchDie, Effect.succeed("recovered" as const)),
  Effect.zipLeft(Effect.log("exited successfully")),
);

const getUserInfo = Effect.sync(() => ({
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
}));

const getUserOrders = Effect.sync(() => ({
  orders: [
    { id: 101, amount: 100 },
    { id: 102, amount: 200 }
  ]
}));

const getUserWithOrders = pipe(
  Effect.zipRight(getUserInfo, getUserOrders),
	Effect.map(orders => orders)
);

const getUserAndOrders = pipe(
	Effect.zip(getUserInfo, getUserOrders),
	Effect.map(([user, orders]) => ({user, orders}))
)

console.log(Effect.runSync(getUserWithOrders))
console.log(Effect.runSync(getUserAndOrders))

// sandbox


