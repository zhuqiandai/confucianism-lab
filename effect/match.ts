import { Data, Effect } from "effect";
import { pipe, constVoid, identity } from "effect/Function";

const success: Effect.Effect<number, Error> = Effect.succeed(42);
const failure: Effect.Effect<number, Error> = Effect.fail(new Error("Uh oh!"));

const task = Effect.fail("Uh oh!").pipe(Effect.as(5));

const program = Effect.match(task, {
  onFailure: constVoid,
  onSuccess: constVoid,
});

const program1 = Effect.matchEffect(task, {
  onFailure: (error) => Effect.succeed("ffa"),
  onSuccess: (value) => Effect.succeed("fafa"),
});

class WrongNumberError extends Data.TaggedError("WrongNumberError") {}

function generateRandomNumber(): Effect.Effect<
  number,
  WrongNumberError,
  never
> {
  return pipe(
    Effect.sync(() => Math.random()),
    Effect.flatMap((randomNumber) => {
      if (randomNumber > 0.6) {
        return Effect.fail(new WrongNumberError());
      }

      return Effect.succeed(randomNumber);
    }),
  );
}

const program2 = Effect.matchEffect(generateRandomNumber(), {
  onFailure: (error) => Effect.succeed("ffa"),
  onSuccess: Effect.succeed,
});

Effect.runPromise(program2).then((num) => {
  console.log(num);
});
