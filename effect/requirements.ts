import { pipe, Option, Context, Effect, Match, Data, Console, Layer } from "effect";

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
  Effect.flatMap(([random, onehundred]) => random.next),
)

// type RandomShape = Context.Tag.Service<Random>;
//
// const runable = Effect.provideService(program, Random, {
//   next: Effect.sync(() => Math.random()),
// });
//
// const contextPack = Context.empty().pipe(
//   Context.add(Random, { next: Effect.sync(() => Math.random()) }),
// );


