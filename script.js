const offerings = [];



function calculateTotal() {
    let total= 0;
    total += this.debt.R * .75;
    total += this.debt.H * 2;
    total += this.debt.B * 5;
    total += this.debt.X;
    total += this.debt.S * .5;
    return total;
}

function calculateConsumption() {
    return this.carry - this.calculateTotal();
}
    
const addNewCoffee = (coffee_name, carry, debt ) => {
    const newCoffee = {
        coffee_name,
        carry,
        debt,
        calculateTotal,
        calculateConsumption,
        predicted_overage : calculateConsumption,
        recorded_overage : 0,
        set record(num) {
            this.recorded_overage = num;
        }
        
    }
    offerings.push(newCoffee)
}
addNewCoffee("Keynote", 250.8, {R : 4, H : 1, B : 4, X :0, S : 0} );

offerings[0].record = 30;

console.log(offerings[0])

