const Databox = require('databox'); //DataBox Api

//Databox auth
var client = new Databox({
    push_token: 'umnseaqkzhxikfp31wbt'
});

//Metric fot ETH is going to show values through out the day
module.exports.insertWithTime = (data, name, date,key) => {
    console.log("Klican je bil insertWithTime!");
    console.log("Data:" + data + ", name je :" + name + " time: ");
    client.push({
        key: key,
        value: data,
        date: date,
        attributes: {
            'crypto': name
        }
    }, function (response) {
        console.log(response)
    });
}

//Function pushes data, name to DataBox

module.exports.insert = (data, name, key) => {
    console.log("Klican je bil insert");
    console.log("Data:" + data + ", name je :" + name);
    client.push({
        key: key,   //metrics key
        value: data,
        attributes: {
            'crypto': name
        }
    }, function (response) {
        console.log(response)
    });
}
