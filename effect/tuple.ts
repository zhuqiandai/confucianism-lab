import { pipe, Option, Effect, Match, Data } from "effect";

// types
type RemoteData<Success> = Data.TaggedEnum<{
  Loading: {};
  Success: { readonly data: Success };
  Failure: { readonly reason: string };
}>;
