
import { Effect, Layer, Context, Option, Schema } from 'effect'

class Foo extends Context.Tag("Foo")<Foo, { readonly foo: number }>() {}
class Bar extends Context.Tag("Bar")<Bar, { readonly bar: number }>() {}
class Baz extends Context.Tag("Baz")<Bar, { readonly baz: number }>() {}

const program = Effect.gen(function*() {
	const foo = yield* Foo
	yield* Effect.log(`${JSON.stringify(foo)}`)
})

const program2 = Effect.gen(function* () {
  const baz = yield* Baz;
  const bar = yield* Bar;
  yield* Effect.log("program2", bar, baz);
});

const FooLive = Layer.succeed(Foo, {foo: 4})
