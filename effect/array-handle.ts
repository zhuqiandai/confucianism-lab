import { Data, Effect, pipe } from 'effect'

class NotFoundError extends Data.TaggedError<"NotFoundError">("NotFoundError") <{readonly message: string}>{}
class NotOddNumber extends Data.TaggedError<"NotOddNumber">("NotOddNumber") {}

const EffectFindFirstElement = <T>(x: T[], predicate: (item: T) => boolean) => {
	return pipe(
		Effect.succeed(x),
		Effect.map(x => x.find(predicate)),
		Effect.flatMap(x => x ? Effect.succeed(x): Effect.fail(NotFoundError))
	)
}
const validateFeature = (x: number) => pipe(Effect.succeed(x), Effect.flatMap(x => x % 2 === 0 ? Effect.succeed(x): Effect.fail(new NotOddNumber())))

const numbers = [1, 3, 4, 5, 6]
const pipeline =  pipe(EffectFindFirstElement(numbers, x => x === 3), Effect.flatMap(x => validateFeature(x)))

const program = Effect.match(pipeline, {
	onSuccess: (v) => {
		console.log(v)
	},
	onFailure: (error) => {
		Effect.catchTags({
			NotOddNumber: () => {
				console.log("/")
			},
			NotFoundError: () => {
				console.log("?")
			}
		})
	}
})

Effect.runPromise(program).then((r) => {

})
