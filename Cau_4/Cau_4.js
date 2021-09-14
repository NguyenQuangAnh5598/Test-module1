class Animal {
    constructor(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }

    setName(name) {
        this.name = name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    toString() {
        document.write("Name: " + this.getName() + ". Weight: " + this.getWeight() + "Kg");
    }
}

let objAnimal1 = new Animal();
objAnimal1.setName("Elephant");
objAnimal1.setWeight(45.6);
objAnimal1.toString();
let objAnimal2 = new Animal("lion", 100);
objAnimal2.setName("Mouse");