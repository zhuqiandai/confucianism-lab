use std::rc::Rc;
use std::cell::RefCell;


#[derive(Debug, Default)]
struct Node {
    value: i64,
    children: Vec<Rc<RefCell<Node>>>,
}

impl Node {
    fn new (value: i64) -> Rc<RefCell<Node>> {
        Rc::new(RefCell::new (Node {value, ..Node::default()}))
    }
}

#[derive(Debug)]
struct Point(i32, i32);
struct Line(i32, i32, i32);

fn add(p1: &Point, p2: &Point) -> Point {
    Point(p1.0 + p2.0, p1.1 + p2.1)
}

fn main() {
    let n1 = Node::default();
    println!("{n1:?}");
}
