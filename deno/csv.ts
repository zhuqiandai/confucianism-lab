import { parse } from '@std/csv/parse'

const string = "a,b,c\nd,e,f";

console.log(parse(string, { skipFirstRow: true }), [{ a: "d", b: "e", c: "f" }])
