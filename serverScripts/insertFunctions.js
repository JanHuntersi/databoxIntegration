const Databox = require('databox'); //DataBox Api
var files = require('./crud')

//Databox auth
var client = new Databox({
    push_token: 'umnseaqkzhxikfp31wbt'
});

//Metric fot ETH is going to show values through out the day
module.exports.insertWithTime = (data, name, date, key) => {
    console.log("Insert with time, name: " + name );
    client.push({
        key: key,
        value: data,
        date: date,
        attributes: {
            'crypto': name
        }
    }, function (response) {
        var sendingSucces;
        if (response.status == 'OK') {
            sendingSucces = 'Yes'
        } else {
            sendingSucces = 'No'
        }
        console.log("odgovor")
        console.log(response)
        var objSentData = {
            Succes: sendingSucces,
            TimeOfSending: date,
            MetricsSend: 1,
            Service:'crypto'+name,
            pushID:response.id
        }
        console.log(objSentData);
        files.updateFile(objSentData);
    });
}

//Function pushes data, name to DataBox

module.exports.insert = (data, name, key) => {
    console.log("Klican je bil insert");
    console.log("Data:" + data + ", name je :" + name);
    client.push({
        key: key, //metrics key
        value: data,
        attributes: {
            'crypto': name
        }
    }, function (response) {
        var sendingSucces;
        if (response.status == 'OK') {
            sendingSucces = 'Yes'
        } else {
            sendingSucces = 'No'
        }
        console.log(response)
        var objSentData = {
            Succes: sendingSucces,
            TimeOfSending: 'unknown',
            MetricsSend: 1,
            Service:'crypto '+name,
            pushID:response.id
        }
        console.log(objSentData)
        files.updateFile(objSentData);
    });
}
