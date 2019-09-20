runPage = function() {
  var t;

  $( document ).ready(function() {

    $.get("http://localhost:4567/", function(data){
      t = new Thermostat(data.temp, data.maxTemp, data.ps)
      console.log(1);
      update()
    })

    update = function() {
      console.log(2);
      $("#temperature").text(t.temperature);
      $("#powerMode").text(t.powerSavingMode);
      $("#usage").text(t.checkUsage());
      $("#maxTemp").text(t.maxTemperature);
      $("#minTemp").text(t.minTemperature);
    };

    $.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=9758d85b3e75dcb7d89d5899c106498a",function(data){
      $("#weatherapi").text(data.main.temp);
    })

  });
  $("#up").click(function(event) {
    t.increase()
    update()
  });
  $("#down").on('click', function() {
    t.decrease()
    update()
  });
  $("#reset").on('click', function() {
    t.reset()
    update()
  });
  $("#PSM").on('click', function() {
    t.changePowerSaving()
    update()
  });
  $('#current-city').change(function() {
    var id = $('#current-city').val();
    $.get("http://api.openweathermap.org/data/2.5/weather?id=" + id + "&units=metric&APPID=9758d85b3e75dcb7d89d5899c106498a",function(data){
      $("#weatherapi").text(data.main.temp);
    });
  })
};
