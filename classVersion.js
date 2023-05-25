class Consumable {
    constructor(name, product_type) {
        this.name = name;
        this.product_type = product_type;
        this.carry = 0;

    }
}

const keynote = new Consumable('Keynote', 'Roasted Coffee');

console.log(keynote.product_type)





/*class Coffee {
  constructor(coffee_name, carry, debt) {
    this.coffee_name = coffee_name;
    this.carry = carry;
    this.debt = debt;
    this.predicted_overage = this.calculateConsumption();
    this.recorded_overage = 0;
  }

  calculateTotal() {
    let total = 0;
    total += this.debt.R * 0.75;
    total += this.debt.H * 2;
    total += this.debt.B * 5;
    total += this.debt.X;
    total += this.debt.S * 0.5;
    return total;
  }

  calculateConsumption() {
    return this.carry - this.calculateTotal();
  }

  record(num) {
    this.recorded_overage = num;
  }
}

const offerings = [];

function addNewCoffee(coffee_name, carry, debt) {
  const newCoffee = new Coffee(coffee_name, carry, debt);
  offerings.push(newCoffee);
}

addNewCoffee("Keynote", 250.8, { R: 4, H: 1, B: 4, X: 0, S: 0 });

offerings[0].record(1);
console.log(offerings[0].recorded_overage); */