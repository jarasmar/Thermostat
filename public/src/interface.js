$(document).ready(function() {
  var thermostat = new Thermostat();

  displayWeather('London');

  updateTemperature();

  // Start with SPM on and reseted off (create function)
  $('#powersaving-on').attr('class', thermostat.isPSMOn())
  $('#powersaving-off').attr('class', 'reset-button')

  // This reads and updates the new temperature every time its modified
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature + 'C');
    $('#temperature').attr('class', thermostat.energyUsage())
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
    $('#powersaving-on').attr('class', thermostat.isPSMOn())
    $('#powersaving-off').attr('class', 'reset-button')

  });

  $('#powersaving-off').click(function() {
    thermostat.switchPSMOff();
    $('#powersaving-off').attr('class', thermostat.isPSMOn())
    $('#powersaving-on').attr('class', 'reset-button')
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
