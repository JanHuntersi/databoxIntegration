const express = require('express')
const app = express();
const scheduleTrigger = require('node-schedule'); //for scheduling tasks   //https://www.npmjs.com/package/node-schedule

var db = require("./serverScripts/fetchFunctions.js");
//const fun = tools.test();

app.listen(3000,function(){
    console.log('Server Started On Port 3000')
    //db.fetchCoinMarketCap();
}) 

//On /start periodic trigger will start
app.get('/start', function (req, res) {
    res.json({
        status:'succes',
        message: 'Trigger has just been started!'
    })
    //starting the periodic sending trigger
    scheduleTrigger.scheduleJob('triggerFetchCMC','*/2 * * * * *', () =>{
        console.log('trigger is running...');
        //call fetch functions
    })
})

//On /stop periodic triggger will stop  
app.get('/stop', function (req,res) {
    res.json({
        status:'succes',
        message:'Trigger has just been stopped!'
    })
    //stoping the periodic sending trigger
    scheduleTrigger.cancelJob('triggerFetchCMC');
    console.log('Trigger has been canceled!')

  })


app.use(express.static('public'));