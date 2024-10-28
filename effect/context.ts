import { pipe, Option, Effect, Match, Data, Context } from "effect";


namespace EffectNumberGeneratorLibrary {
  export function generateRandomNumber(): Effect.Effect<number, Error, never> {
    return pipe(
      Effect.sync(() => Math.random()),
      Effect.flatMap((randomNumber) => {
        if (randomNumber > 0.9) {
          return Effect.fail(new Error());
        }

        return Effect.succeed(randomNumber);
      })
    );
  }
}


// context = tags (as keys) + service (as values)
// here MyRandomService is tags
// next is service
class Random extends Context.Tag("MyRandomService")<
  Random,
  { readonly next: Effect.Effect<number> }
>() {}
