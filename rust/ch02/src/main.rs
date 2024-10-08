mod logger;

fn main() {
    let fido = Dog {
        name: String::from("Fido"),
        age: 5,
    };
    fido.greet();

    let a = "hello";

    Meters(10).add(&Meters(20)).multiply(&Meters(20));

    logger::greetmod::greet()
}

#[derive(Debug)]
struct Meters(i32);
#[derive(Debug)]
struct MetersSquared(i32);

// shard method
trait Multiply {
    type Output;
    type AddOutput;
    fn multiply(&self, other: &Self) -> Self::Output;
    fn add(&self, other: &Self) -> Self::AddOutput;
}
impl Multiply for Meters {
    type Output = MetersSquared;

    fn multiply(&self, other: &Self) -> Self::Output {
        MetersSquared(self.0 * other.0)
    }

    type AddOutput = Meters;
    fn add(&self, other: &Self) -> Self::AddOutput {
        Meters(self.0 + other.0)
    }
}

// Trait
trait Animal {
    fn leg_count(&self) -> u32;
}

trait Pet: Animal {
    fn talk(&self) -> String;
    fn greet(&self) -> String;
}

struct Dog {
    name: String,
    age: i8,
}

impl Animal for Dog {
    fn leg_count(&self) -> u32 {
        4
    }
}

impl Pet for Dog {
    fn talk(&self) -> String {
        format!("Woof, my name is {}, my age is {}!", self.name, self.age)
    }

    fn greet(&self) -> String {
        let s = String::from("new");
        s
    }
}

fn clone_machine<T>(t: T) -> (T, T)
where
    T: Clone,
{
    (t.clone(), t.clone())
}
