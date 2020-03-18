$(document).ready(function() {
  var thermostat = new Thermostat();

  updateTemperature();

  // This reads and updates the new temperature every time its modified
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  };

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.switchPSMOn();
    $('#power-saving-status').text('on');
  });

  $('#powersaving-off').click(function() {
    thermostat.switchPSMOff();
    $('#power-saving-status').text('off');
  });

})
