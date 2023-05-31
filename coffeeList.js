
const standard_retail = {
    R : .75,
    H : 2,
    B : 5,
    S : .5,
    X : 1
}

// create general entry class
class Offering {
    constructor(sku) {
        this.SKU = sku;
        this.id = 3
    };
}



const offerings = [
    {
        id : 1,
        SKU : "CO-LVG",
        type : "Single Origin Coffee",
        components : [{ "CO-LVG" : 1}],
        batch_size : {
            opus : 100,
            probat : 20
        },
        units : standard_retail
    },
    {
        id : 2,
        SKU : "BL-GMT",
        type : "Post-Roast Coffee Blend",
        components : [{"BR-LOW" : .4}, {"CO-MID" : .3}, {"PG-HII" : .3}],
        batch_size : {
            opus : null,
            probat : null
            },
        units : standard_retail
    }
];


const keynote = new Offering('BD-KEY');
offerings.push(keynote)
console.log(offerings[2].SKU)
