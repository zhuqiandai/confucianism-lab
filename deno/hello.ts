import * as base64 from "jsr:@std/encoding/base64";
import * as hex from "jsr:@std/encoding/hex";

const text = `{
  "hello": "world",
  "numbers": [1, 2, 3]
}`;


const data = JSON.parse(text)

console.log(data.hello)
console.log(data.numbers.length)

const jsonResponse = await fetch("https://api.github.com/users/denoland");
const jsonData = await jsonResponse.json();

console.log(jsonData)
