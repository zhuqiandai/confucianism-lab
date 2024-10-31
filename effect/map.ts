import { pipe, Option, Effect, Match, Data, Context } from "effect";
import { constVoid } from "effect/Function";

const posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

class NotFindError extends Data.TaggedError("NotFindError")<{
  message: string;
}> {}

function findInArray<A>(
  array: A[],
  predicate: (a: A) => boolean,
): Effect.Effect<A, NotFindError, never> {
  const target = array.find(predicate);

  return target
    ? Effect.succeed(target)
    : new NotFindError({ message: "没有元素" });
}

const numbers = [1, 2, 3, 4, 5];
const findEven = findInArray(numbers, (num) => num % 2 === 0);
const findPostIdEvenv = findInArray(posts, p => p.id % 2 === 0)


Effect.match(findEven, {
	onSuccess: constVoid,
	onFailure: (error) => {
		console.error("中间步骤处理 error", error)
	}
})

Effect.runPromise(findEven).then(even => {
	console.log("程序结果", even)
}).catch(error => {
		console.log("最后错误", error)
	})

Effect.runPromise(findPostIdEvenv).then(even => {
	console.log("程序结果", even)
}).catch(error => {
		console.log("最后错误", error)
	})
