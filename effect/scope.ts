import { Console, Effect, Exit, Scope } from 'effect'


const task1 = Effect.gen(function*() {
	yield* Effect.addFinalizer(() => Console.log("task1"))	
})

const task2 = Effect.gen(function*() {
	yield* Effect.addFinalizer(() => Console.log("task2"))	
})

const program = Effect.gen(function*() {
		
	const scope1 = yield* Scope.make()

	yield* task1.pipe(Scope.extend(scope1))

	yield* Scope.close(scope1, Exit.void)

	return 'hello'
})

Effect.runPromise(program)


