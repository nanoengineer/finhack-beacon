var bleno = require('bleno');
var os = require('os');
var util = require('util');

var BlenoCharacteristic = bleno.Characteristic;
var CoffeeType = 0;

var CoffeeTypeCharacteristic = function() {
 CoffeeTypeCharacteristic.super_.call(this, {
    uuid: 'ff51b30e-d7e2-4d93-8842-a7c4a57dfb10',
    properties: ['read', 'write'],
  });

 this._value = new Buffer(0);
};

CoffeeTypeCharacteristic.prototype.onReadRequest = function(offset, callback) {

  if(!offset) {

    this._value = new Buffer([CoffeeType]);
  }

  console.log('CoffeeType:' +
    CoffeeType.toString()
  );

  callback(this.RESULT_SUCCESS, this._value.slice(offset, this._value.length));
};

CoffeeTypeCharacteristic.prototype.onWriteRequest = function(data, offset, withoutResponse, callback) {

  if(!offset) {

    CoffeeType = data.readUInt8(0);

    this._value = new Buffer([CoffeeType]);
  }

  console.log('CoffeeType:' +
    CoffeeType.toString()
  );

  callback(this.RESULT_SUCCESS)
};


// Accept a new value for the characterstic's value
                        // onWriteRequest : function(data, offset, withoutResponse, callback) {
                        //     this.value = data;
                        //     console.log('Write request: value = ' + this.value.toString("utf-8"));
                        //     callback(this.RESULT_SUCCESS);
                        // }


util.inherits(CoffeeTypeCharacteristic, BlenoCharacteristic);
module.exports = CoffeeTypeCharacteristic;
