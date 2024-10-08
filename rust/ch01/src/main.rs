use std::io;

fn main() {
    let a = fib(32);

    foo();

    println!("Hello, world! {}", if 10 < 20 { a } else { 30 });

    borrowinig_prevents();
    simple_owner();
}

fn tuple_struct() {
    struct Point(i32, i32);

    struct Unit;
}

fn simple_owner() {
    let mut a = 32;

    let ref mut c = a;

    *c = 32 * 2;

    println!("{}", a);
}

fn borrowinig_prevents() {
    let vs = vec![1, 2, 3, 4];

    // move
    for v in &vs {
        print!("{}", v);
    }

    println!("{}", vs[0]);
}

fn fib(n: u32) -> i32 {
    if n <= 2 {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

fn foo() {
    let mut v1 = vec![1, 2, 3];

    v1.pop();
    v1.push(3);
    v1.push(4);
    // move semantic
    let mut v2 = v1.clone();
    let mut v3 = v2.clone();

    let ref mut v4 = v2;
    let ref mut v5 = v3;

    v4.push(4);
    v5.push(5);

    println!("v2 is {}", v4[0]);
    println!("v3 is {}", v5[0]);

    // borrowing
    let v_ref = &mut v1;

    println!("{} is", length(v_ref));
}

fn vector_length(v: Vec<i32>) -> Vec<i32> {
    let v2 = v;
    return v2;
}

fn length(v: &mut Vec<i32>) -> usize {
    v.push(10);
    return v.len();
}
