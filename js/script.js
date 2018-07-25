$("#victorHugo > i, #victorHugo").on('click', function () {
	$("#infos").show();
	$("#station").text("Victor Hugo");
	$("#adresseStation").text("36 cours Victor Hugo 69000 Lyon");
});

$("#gambetta > i, #gambetta").on('click', function () {
});

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 45.750, lng: 4.850},
          zoom: 13
        });

        var marqueur1 = new google.maps.Marker({
          position: {lat: 45.753069, lng: 4.829038},
          map: map
        });
        var marqueur2 = new google.maps.Marker({
          position: {lat: 45.754035, lng: 4.847074},
          map: map
        });

        google.maps.event.addListener(marqueur1, 'click', function() {
        $("#infos").show();
        $(".station").text("Victor Hugo");
        $("#adresseStation").text("36 cours Victor Hugo 69000 Lyon");
        });
        google.maps.event.addListener(marqueur2, 'click', function() {
        $("#infos").show();
        $(".station").text("Gambetta");
        $("#adresseStation").text("45 avenue Gambetta 69000 Lyon");
        });
      };


var diapoPosition = 0;
var z = 10;
makeSlider();

function makeSlider() {
    var i;
    var x = $(".diapo");
    // for (i = 0; i < x.length; i++) {
    //   x[i].style.display = "none";
    // }
    if (diapoPosition >= x.length) {
    	diapoPosition = 0;
      // z = 10;
    }
    
    x[diapoPosition].style.zIndex = z;
    // $(".diapo").fadeIn(3000);
    // $(".diapo").fadeOut(3000); //Creer une fonction qui baisse progressivement l'opacité
    diapoPosition++;
    z++;
    setTimeout(makeSlider, 6000);
};

$("#boutonReservation").on('click', function () {
  $("#reservation").show();
});

$("#validSign").on('click', function () {
  $("#etatReservation").show();
});


// $(window).on('resize', function () {
//   $("#slider").css("height") === $(".diapo").css("height");
// });