let rec sum = function
  | [] -> 0
  | h :: t -> h + sum t


let rec concat = function
  | [] -> ""
  | h :: t -> h ^ concat t


let list = [1;2;3]

let fr = List.fold_right (-) list (let x = 10 in if x < 0 then -x else x);;

print_int(fr)

let rec digit_numx x = if x < 10 then x else digit_numx (x / 10) + (x mod 10)

let max3 x y z = max (max x y) z

let ma = max3 10 20 30;;

module type Set = sig
  type 'a t
  val empty : 'a t
  val mem : 'a -> 'a t -> bool
  val add : 'a -> 'a t -> 'a t
  val elements : 'a t -> 'a list
end

module type SetExtended = sig
  include Set
  val of_list : 'a list -> 'a t
end

module ListSet : Set = struct
  type 'a t = 'a list
  let empty = []
  let mem = List.mem
  let add = List.cons
  let elements s = List.sort_uniq Stdlib.compare s
end

module ListSetExtended: SetExtended = struct
  include ListSet
  let of_list lst = List.fold_right add lst empty
end

let rec first f k =
  if f k then k
  else first f (k + 1)

let is_odd x = x mod 2 = 1
let fodd = first is_odd 10;;

(* lamda fun *)
let div x y = first (fun k -> (k + 1) * y > x) 0;;
print_int (div 11 3);;

let square x = x * x


let pow8 x = square (square (square x));;
print_int (pow8 20);;




