'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;
  this.PSMOn = true;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.LOW_USAGE_LIMIT = 18;
}

// Saving and loading from DB
Thermostat.prototype.load = function(callback) {
  $.get('http://localhost:9292/load', function(response) {
    // converts data from a web server (string) into a JS object
    // interface will display the JS object in the browser
    var data = JSON.parse(response)
    callback(data);
  });
}

Thermostat.prototype.save = function(temperature, power_saving) {
  // sends data in a JS object to the web server
  $.post('http://localhost:9292/save', {temperature: this.temperature, power_saving: this.PSMOn} );
}

// App functionality
Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.up = function() {
  if (this.isMaxTemp()) {
    return;
  };

  this.temperature += 1;
};

Thermostat.prototype.down = function () {
  if (this.isMinimumTemperature()) {
   return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPSMOn = function() {
  return this.PSMOn;
};

Thermostat.prototype.switchPSMOff = function() {
  this.PSMOn = false;
};

Thermostat.prototype.switchPSMOn = function() {
  this.PSMOn = true;
};

Thermostat.prototype.isMaxTemp = function () {
  if(this.isPSMOn()) {
    return this.temperature === this.MAX_TEMP_PSM_ON;
  };
  return this.temperature === this.MAX_TEMP_PSM_OFF;
};

Thermostat.prototype.reset = function () {
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.energyUsage = function(){
  if(this.temperature < this.LOW_USAGE_LIMIT){
    return 'low-usage'
  }
  else if(this.temperature >= this.LOW_USAGE_LIMIT && this.temperature <= this.MAX_TEMP_PSM_ON){
    return 'medium-usage'
  };
  return 'high-usage'
};
