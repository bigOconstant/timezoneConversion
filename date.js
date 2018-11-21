var moment = require('moment-timezone');

console.log("Starting App");

var patient = moment(new Date());


console.log(patient.format('YYYY-MM-DD HH:mm'));
console.log(patient.clone().tz("America/Los_Angeles").format('YYYY-MM-DD HH:mm'));

var formatted = new Date(patient.clone().tz("America/Los_Angeles").format('YYYY-MM-DD HH:mm'));

console.log(formatted.getHours());
console.log(patient.toDate().getHours());
