var moment = require('moment-timezone');


var PatientTimeZone = "America/Los_Angeles";
var format = "dddd, MMMM D YYYY, h:mm:ss a";

var format1 = moment(new Date(),format).tz(PatientTimeZone);

var us = moment().utcOffset();
var them = format1.utcOffset();


console.log("us:"+us);
console.log("them:"+them);


if(them < us){
    console.log(moment(new Date).utcOffset(2 * us - them).format('YYYY-MM-DD HH:mm')); 
}
else if(them > us){
    console.log(moment(new Date).utcOffset(them).format('YYYY-MM-DD HH:mm'));
}
else {// No changes nessesary
    console.log(moment(new Date).format('YYYY-MM-DD HH:mm'));

}



