(* 分解 *)
let rec digit_sum x = 
  if x < 10 then x
else digit_sum (x / 10) + (x mod 10);;


print_int (digit_sum 36)

let rec sort (x, y, z) = 10
