import { pipe, Option, Context, Effect, Match, Data, Console, Layer, Tracer } from "effect";

class Random extends Context.Tag("MyRandomService")<
  Random,
  { readonly next: Effect.Effect<number> }
>() { }

class OneHundred extends Context.Tag("MyOneHundred")<
  OneHundred,
  { readonly next: Effect.Effect<number> }
>() { }

const program = pipe(
  Effect.all([Random, OneHundred]),
  Effect.andThen(([random, onehundred]) => Effect.all([random.next, onehundred.next])),
  Effect.andThen(([r, o]) => r + o)
)

const contextPack = pipe(
	Context.empty(),
  Context.add(Random, { next: Effect.sync(() => Math.random()) }),
  Context.add(OneHundred, { next: Effect.sync(() => 100) })
);
const runable = Effect.provide(program, contextPack)

Effect.runPromise(runable).then(v => {
  console.log(v)
})
