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


(* parameterized variant *)
(* Cons is a  *)
type 'a mylist = Nil | Cons of 'a * 'a mylist
let lst3 = Cons (3, Nil)
let lst_hi = Cons ("hi", Nil)


(* begin end *)
let rec list_max = function
  | [] -> None
  | h :: t -> begin
      match list_max t with
        | None -> Some h
        | Some m -> Some (max h m)
      end

let m = list_max [10];;

(* polymorphic variant *)

