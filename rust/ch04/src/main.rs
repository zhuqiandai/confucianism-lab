fn read(y: bool) {
    if y {
        println!("y is true")
    }
}

#[derive(Clone)]
struct Backends {
    homenames: Vec<String>,
    weights: Vec<f64>
}

impl Backends {
    fn clone(&self) {
        // move
        let names = self.homenames.clone();
    }
}

fn main() {
    let x = true;
    read(x);

    // 替代 gc，s2 离开 scope 时 free，s1 离开时不需要处理，已经没有 ownership
    let s1 = String::from("Hello");
    let s2 = s1;

    let be = Backends { homenames: Vec::new(), weights: Vec::new() };
    let ne = be.clone();

    // 这里是 Copy trait
    let m1 = 3;
    let m2 = m1;

    println!("m2: {m2}");
    println!("s2: {s2}");
}
