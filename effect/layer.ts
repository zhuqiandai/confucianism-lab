
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


// layer: server depends on other services

class Prometheus extends Context.Tag("Prometheus") <Prometheus, {
	readonly register: (name: string, value: number) => Effect.Effect<string>
}> () {
};

const PrometheusLive = Layer.succeed(
  Prometheus,
  Prometheus.of({
    // actual implementation is irrelevant here, so I'll just `succeed` it:
    register: (name: string, value: number) => Effect.succeed(""),
  })
); 

class Logger extends Context.Tag("Logger")<
  Logger,
  { readonly log: (message: string) => Effect.Effect<void> }
>() {}
const LoggerLive = Layer.effect(
	Logger, 
	Effect.gen(function* () {
   	const prometheus  = yield* Prometheus; 

		return {
			log: (message) => Effect.gen(function*( ){ 
				const result = prometheus.register("hello", 20)
				console.log(message)
			})
		}

	})
)
