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

// returns array of objects based on total poundages
const batchify = arr => {
    const roastList = [];
    arr.forEach(roast => {
        let batches = Math.ceil(roast.pounds / roast.batch_size);
        for (let i = 0; i < batches; i++) {
            const batch = {coffee : roast.coffee, pounds : roast.batch_size};
            roastList.push(batch);
        };
    });
    return roastList;
}

// accepts array of orders and pushes to schedule
function addToSchedule(batch) {
    batch.forEach(batch => {
        schedule.push(batch)
    })
}


addToSchedule(batchify(orders));
addToSchedule([{Coffee : 'opus', Pounds : 30}])
console.log(schedule)

