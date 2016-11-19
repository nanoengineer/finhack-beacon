var bleno = require('bleno');
var util = require('util');

//Characteristics needed:
//Status: 0 = Free, 1 = In-use, 2 = Out of Service. R/Notify
//coffeeType: 0 = black, 1 = espress, 2 = americano. R/W
//confirmation: 1 = make my damn coffee. W only
//queueIndex: 1 - 16, R/Notify 



// var LoadAverageCharacteristic = require('./characteristics/loadaverage');
// var UptimeCharacteristic = require('./characteristics/uptime');
// var MemoryCharacteristic = require('./characteristics/memory');

// var StatusCharacteristic = require('./characteristics/status');
var CoffeeTypeCharacteristic = require('./characteristics/coffeetype');
// var ConfirmationCharacteristic = require('./characteristics/confirmation');
// var QueueIndexCharacteristic = require('./characteristics/queueindex');

function SystemInformationService() {

  bleno.PrimaryService.call(this, {
    uuid: 'ff51b30e-d7e2-4d93-8842-a7c4a57dfb07',
    characteristics: [
      // new StatusCharacteristic(),
      new CoffeeTypeCharacteristic(),
      // new ConfirmationCharacteristic()
      // new QueueIndexCharacteristic()
    ]
  });
};

util.inherits(SystemInformationService, bleno.PrimaryService);
module.exports = SystemInformationService;
