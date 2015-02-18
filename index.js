
$(document).ready(function() {

$("#getBikeNum").click(function(evt){

  var stationName = $("#stationName").val();

  console.log(stationName);

  $.ajax({

      // URL to retrieve
      url: "/stations",

      // HTTP verb to use
      method: "GET",

      // Function to execute when complete (the callback parameter)
      success: function(data) {

        var station = _.find(data, function(station) {

          var stationTrimStr = station.name.trim();

          if (stationName === stationTrimStr) {
            return true;
          }
      
        });

          $("#output").html(station.bikes + " bikes");

      }

    });

});

});



