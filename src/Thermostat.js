'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.PSMOn = true;
  this.MAX_TEMP_PSM_ON = 25
  this.MAX_TEMP_PSM_OFF = 32
}


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
