$(document).ready(function() {

  var thermostat = new Thermostat
  var temperature = thermostat.temperature;
  var power_saving = thermostat.PSMOn;

  // Start with Weather on London and thermostat default temperature/PSM
  displayWeather('London');
  updateTemperature(temperature);

  // Start with SPM on and reseted off
  $('#powersaving-on').attr('class', thermostat.isPSMOn())
  $('#powersaving-off').attr('class', 'reset-button')

  // This reads and updates the new temperature every time its modified
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature + 'C');
    $('#temperature').attr('class', thermostat.energyUsage())
  };

  // Loads the DB Data
  function load() {
    thermostat.load(function (data) {
      // gets the temperature string and returns an integer
      thermostat.temperature = parseInt(data.temperature);
      $('#temperature').text(thermostat.temperature + 'C');
      // gets the power mode
      thermostat.power_saving = data.power_saving;
    });
  };

  load();

  // Functionality
  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature(temperature);
    thermostat.save(temperature, power_saving);
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature(temperature);
    thermostat.save(temperature, power_saving);
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemperature(temperature);
    thermostat.save(temperature, power_saving);
  });

  $('#powersaving-on').click(function() {
    thermostat.switchPSMOn();
    $('#powersaving-on').attr('class', thermostat.isPSMOn())
    $('#powersaving-off').attr('class', 'reset-button')
    thermostat.save(temperature, power_saving);
  });

  $('#powersaving-off').click(function() {
    thermostat.switchPSMOff();
    $('#powersaving-off').attr('class', thermostat.isPSMOn());
    $('#powersaving-on').attr('class', 'reset-button');
    thermostat.save(temperature, power_saving);
  });


  // $('#current-city').change(function(){
  //   var city = $('#current-city').val();
  //
  //    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function (data) {
  //
  //     $('#current-temperature').text(data.main.temp);
  //   });

  // Refactored:

  $('#current-city').change(function(){
    var city = $('#current-city').val();
    displayWeather(city);
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function (data) {
      $('#current-temperature').text(data.main.temp + 'C');
    });
  };
})
