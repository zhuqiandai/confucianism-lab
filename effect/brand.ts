import { pipe, Option, Effect, Match, Data } from "effect";

const BrandTypeId: unique symbol = Symbol.for("effect/Brand");

type ProductId = number & {
  readonly [BrandTypeId]: {
    readonly ProductId: "ProductId"; // unique identifier for ProductId
  };
};

type UserId = number & {
  readonly [BrandTypeId]: {
    readonly UserId: "UserId"; // unique identifier for UserId
  };
};

const getProductById = (id: ProductId) => {
  // Logic to retrieve product
};

declare const id: UserId;

declare const sid = 'userid'

