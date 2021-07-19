
const fsPromises = require('fs').promises;
const fs = require('fs');

//Function reads file and returns data
module.exports.getReadFile= async function (){
    var data = await fsPromises.readFile('sentData.json','utf8')
    .catch((err) => console.error('Failed to read file', err));
    return JSON.parse(data);
}

//Creates a new file with empty array //deletes all previous records
module.exports.createNew= () => {
    console.log("dsfdsf");
    var jsonObj={
        dataRecords:[]
    };
    var json =  JSON.stringify(jsonObj); //Converts to JSON object
    fsPromises.writeFile('sentData.json',json,'utf8',function(err){
        if(err) return console.log(err);
        console.log("created new json file (all previous records deleted)")
    });
}

//Append new JSON data to existing file

module.exports.updateFile = async function (newData)  {
         var data = await fsPromises.readFile('sentData.json','utf8')
         .catch((err) => console.error('Failed to read file', err));                  
try{
        fs.writeFileSync('sentData.json',get(data,newData),'utf8')
        console.log("zapisal!")
    }
        catch(err){
            console.log("napaka pri pisanji")
        }
}

function get(data,newData){
    data = JSON.parse(data);
    data.dataRecords.push(newData) ;
    return JSON.stringify(data);
}