'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('temperatureControls', function() {

    it('increases temperature with up function', function() {
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('decreases temperature with down function', function() {
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it('sets minimum temperature at 10 degrees', function() {
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
  });

  describe('powerSavingMode', function() {

    it('Power Saving mode is on by default', function() {
      expect(thermostat.isPSMOn()).toBe(true);
    });

    it('I can switch PSM off', function() {
      thermostat.switchPSMOff();
      expect(thermostat.isPSMOn()).toBe(false);
    });

    it('I can switch PSM on', function() {
      thermostat.switchPSMOff();
      thermostat.switchPSMOn();
      expect(thermostat.isPSMOn()).toBe(true);
    });

    it('Temperature cant go over 25 when PSM is on', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      };
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

    it('Temperature cant go over 32 when PSM is off', function() {
      thermostat.switchPSMOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      };
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });
});
