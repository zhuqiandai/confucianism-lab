type day = Monday | Sunday | Tuesday

(* variant with data by constructor*)
(* aka non-constant variant *)

type phone = String of string

(* C p is a pattern *)

type point = float * float
type shape = 
    | Circle of point * float (* center and radius *)
    | Rect of point * point (* lower-left and upper-right corners *)

let avg a b = (a +. b) /. 2.

let center s = match  s with
| Circle (p, f) -> p 
| Rect (lt, rb) -> 
      let (xx1, yy1) = lt in 
      let (xx2, yy2) = rb in 
      (avg xx1 xx2, avg yy1 yy2)

(* recursive variant *)
type node = {value : int ; next: mylist} and mylist = Nil | Node of node

