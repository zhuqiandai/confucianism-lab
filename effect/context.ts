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
