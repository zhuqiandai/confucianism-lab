#[derive(Default)]
struct Backends {
    hostnames: Vec<String>,
    weights: Vec<f64>
}

impl Backends {
    fn set_hostnames(&mut self, hostnames: &Vec<String>) {
        self.hostnames = hostnames.clone();
        self.weights = hostnames.iter().map(|_| 1.0).collect();
    }
}

fn main () {
    
}
