import { Console, Effect, Scope } from 'effect'

const program  = Effect.gen(function* () {
	yield* Effect.addFinalizer(exit => Console.log(`${exit._tag}`))

	return "suu"
})

const runnable = Effect.scoped(program)


Effect.runPromiseExit(runnable).then(console.log)
