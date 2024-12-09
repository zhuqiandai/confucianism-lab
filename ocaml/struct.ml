(* varinat *)

type string_or_int = String of string | Int of int

type blue_or_pink = Blue  | Pink 

type moon = { name : string; color: blue_or_pink }

let get_color m = m.color

let color_value c = function 
    | Blue -> 0.2
    | Pink -> 0.5

let c = {name = "Charmander"; color = Blue};;

let v = c |> get_color |> color_value

(* record and tuple *)
type ptype = TNormal | TFire | TWater
type mon = {name : string; hp : int; ptype : ptype}

let c = {name = "Charmander"; hp = 39; ptype = TFire};;


let a = match (1,2,3 ) with (x, y,z ) -> x + y + z
