$(document).ready(function() {
  var thermostat = new Thermostat();

  displayWeather('London');

  updateTemperature();

  // This reads and updates the new temperature every time its modified
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
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
    $('#power-saving-status').text('on');
  });

  $('#powersaving-off').click(function() {
    thermostat.switchPSMOff();
    $('#power-saving-status').text('off');
  });


  // $('#current-city').change(function(){
  //   var city = $('#current-city').val();

  //    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function (data) {
  
  //     $('#current-temperature').text(data.main.temp);
  //   });

  $('#current-city').change(function(){
    var city = $('#current-city').val();
    displayWeather(city);
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function (data) {
      $('#current-temperature').text(data.main.temp);
    });
  };
})
