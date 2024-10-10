fn read(y: bool) {
    if y {
        println!("y is true")
    }
}

#[derive(Clone)]
struct Backends {
    homenames: Vec<String>,
    weights: Vec<f64>,
}

impl Backends {
    fn clone(&self) {
        // move
        let names = self.homenames.clone();
    }
}

fn add_suffix(mut name: String) -> String {
    name.push_str("JR.");
    name
}

fn main() {
    let x = true;
    read(x);

    // 替代 gc，s2 离开 scope 时 free，s1 离开时不需要处理，已经没有 ownership
    // move semantic
    let s1 = String::from("Hello sdfsdfsadf lorem djsfsdkfjsladf sdfadfsdfasdfsadfsdfdfsdffd");
    let mut s2 = s1;

    let s3 = String::from("World");
    let mut s4 = s3.clone();

    let be = Backends {
        homenames: Vec::new(),
        weights: Vec::new(),
    };
    let ne = be.clone();

    // 这里是 Copy trait
    let m1 = 3;
    let m2 = m1;

    // immut borrowing
    // mut borrowing
    let r1 = &mut s2;

    let r3 = &s3;
    let r4 = &mut s4;
    r4.push_str("with push str");

    let x = 4;
    let z= &x;
    let boxed_x = Box::new(x);
    let unbox_x = *boxed_x;

    let first = String::from("Ferris");
    let full = add_suffix(first);

    // deref
    let mut x: Box<i32> = Box::new(1);
    let a: i32 = *x;

    let r1 = &x;
    let b = **r1;
    let r2 = &*x;

   let absr1=  r1.abs();

    println!("{full}");

    // println!("boxed: {boxed_x}");
    // println!("unbox: {unbox_x}");
    // println!("m2: {m2}");
    // println!("s2: {s2}");
}
