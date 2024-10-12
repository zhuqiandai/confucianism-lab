pub fn read_reference() {
    let mut v: Vec<i32> = vec![1, 2, 3]; // v: R W O

    let num = &v[2]; // num: R - O  v: R - -

    println!("Third element is {}", *num);
    println!("Third element is again {}", *num);

    // num is over, the owenrship is back to v

    v.push(4);

    // after this line, v is over, it loses all of its permissions
}

pub fn borrow_reference() {
    let mut v: Vec<i32> = vec![1, 2, 3]; // v: R W O
    println!("Vector is now {:?}", v);

    let num = &mut v[2]; // num: R - O  v: R - -
    
    // *num += 1;

    let num2 = &*num;

    println!("Third element is {}", *num);

    println!("{} {}", *num, *num2);
}
