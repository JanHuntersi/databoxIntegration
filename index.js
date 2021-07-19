const express = require('express')
const app = express();
app.use(express.static('public'));
const scheduleTrigger = require('node-schedule'); //for scheduling tasks   //https://www.npmjs.com/package/node-schedule


//Functions that will fetch data and with the help of insertFunctions
// push them in to databox api
var fetchFunct = require('./serverScripts/fetchFunctions')


//Functions  that create new files
//to be written read, deleted
var files = require('./serverScripts/crud')


app.listen(3000,function(){
    console.log('Server Started On Port 3000')
}) 

//sends info about sent data
app.get('/getsentdata',function(req,res){
    let obj=files.getReadFile();
    obj.then(function(response){
    res.json({
        response
      }) 
    })
})

//On /start periodic trigger will start
app.get('/start', function (req, res) {
    res.json({
        status:'succes',
        message: 'Trigger has just been started!'
    })
    //starting the periodic sending trigger
    scheduleTrigger.scheduleJob('triggerFetchCMC','*/30 * * * * *', () =>{ //every 30seconds sent
        //call fetch functions
        fetchFunct.fetchCoinMarketCap();
        fetchFunct.fetchCoinBase();
        console.log("Fetched  data!")
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


//deletes file content
app.get('/createNew',function(){
    files.createNew(); //
    console.log("test)")
})

