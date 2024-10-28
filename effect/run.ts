// error and filter

import { Random, Console, Effect, Cause } from "effect";

const simulatedTask = Effect.fail("Oh no!").pipe(Effect.as(1));

const simulatedTask1 = new Cause.IllegalArgumentException("is negative");

// Runtime Exception
const simulatedTask2 = Effect.dieMessage("is negative");

// const sandboxed = Effect.sandbox(simulatedTask1)
const sandboxed = Effect.sandbox(simulatedTask2);

const program = Effect.catchTags(sandboxed, {
  Die: (cause) =>
    Console.log(`Caught a defect: ${cause.defect}`).pipe(
      Effect.as("fallback result on defect"),
    ),
  Interrupt: (cause) =>
    Console.log(`Caught a defect: ${cause.fiberId}`).pipe(
      Effect.as("fallback result on fiber interruption"),
    ),
  Fail: (cause) =>
    Console.log(`Caught a defect: ${cause.error}`).pipe(
      Effect.as("fallback result on failure"),
    ),
});

const main = Effect.unsandbox(program);

Effect.runPromise(main).then(console.log);

Random.nextRange(0, 1);
