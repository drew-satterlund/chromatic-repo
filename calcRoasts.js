const schedule = [];

const orders = [
    {
        coffee : 'keynote',
        pounds : 256,
        batch_size : 100
    },
    {
        coffee : 'virgen',
        pounds : 8.25,
        batch_size : 16
    }
];

const calculateRoasts = arr => {
    const roastList = [];
    arr.forEach(roast => {
        let batches = Math.ceil(roast.pounds / roast.batch_size);
        console.log(`${roast.coffee} batches: ${batches}`);
        for (let i = 0; i < batches; i++) {
            const batch = { Coffee : roast.coffee, Pounds : roast.batch_size};
            schedule.push(batch);
        }
    })
}

calculateRoasts(orders);
console.log(schedule)