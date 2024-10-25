
import { Effect } from "effect"
import { pipe, constVoid } from "effect/Function"

 
const success: Effect.Effect<number, Error> = Effect.succeed(42)
const failure: Effect.Effect<number, Error> = Effect.fail(new Error("Uh oh!"))

const task = Effect.fail("Uh oh!").pipe(Effect.as(5))

const program = Effect.match(task, {
  onFailure: constVoid,
  onSuccess: constVoid
})

const program1 = Effect.matchEffect(task, {
  onFailure: (error) => Effect.succeed("ffa"),
  onSuccess: (value) => Effect.succeed("fafa")
})
