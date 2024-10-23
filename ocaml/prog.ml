let rec digit_sum x = 
  if x < 10 then x
  else digit_sum (x / 10) + (x mod 10);;


(* print_int (digit_sum 36) *)


let rec rem x y = if x < y then x else rem (x - y) y;;

print_int (rem 10 3);;

let matrix = [|[|1; 2; 3|]; [|4; 5; 6|]|];;


let l1 = [2 ;3; 4];;

let l2 = [3; 4; 5];;

let l3 = l1 @ l2;;
let l4 = 20 :: l1;;


let apple_pack = ("apple", "pack")

let a = let b = 3 in b < 10 || b > 12


type nat = Zero | Succ of nat

let iszero = function
  | Zero -> true
  | Succ _ -> false

let pred = function
  | Zero -> failwith "pred Zero is undefined"
  | Succ m -> m

let fst (x, y) = true

let f (g : 'a * 'b -> 'c) (x : 'a) (y : 'b) : 'c = g (x, y)

let fresult = f fst 20 30;;


let rec factorial n =
  match n with
  | 0 -> 1
  | n when n > 0 -> n * factorial (n - 1)
  | _ -> failwith "negative argument"

let is_adult (age, name) =
  match age with
  | age when age >= 18 -> Printf.printf "%s is an adult.\n" name
  | _ -> Printf.printf "%s is not an adult.\n" name
