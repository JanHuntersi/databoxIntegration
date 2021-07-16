//Helpfull functions!
//

//Handling fetch errors
module.exports.handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return response;
}


//Function returns Date&Time in correct TimeFormat
module.exports.getDateTime = () => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime;
}


