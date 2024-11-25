import { Option, Schema } from 'effect'


const Todo = Schema.Struct({
	id: Schema.Number,
	completed: Schema.Boolean
})



