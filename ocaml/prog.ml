let rec digit_sum x = 
  if x < 10 then x
  else digit_sum (x / 10) + (x mod 10);;


(* print_int (digit_sum 36) *)


let rec rem x y = if x < y then x else rem (x - y) y;;

print_int (rem 10 3)

let matrix = [|[|1; 2; 3|]; [|4; 5; 6|]|]
