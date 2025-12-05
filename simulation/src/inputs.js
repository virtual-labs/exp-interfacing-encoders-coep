htm='<div class="row">'
//	+'<div class="col-sm-5">'
//	+' <label for="sel1" class="form-label">Select RPM:</label>'
//	
//	+'</div>'
//	+'<div class="col-sm-5">'
////	+' <select class="form-control" id="rpmValue">'
////	+'<option>100</option>'
////	+'<option>150</option>'
////	+'<option>200</option>'
////	+'<option>250</option>'
////	+'<option>300</option>'
////	+'<option>350</option>'
////	+'<option>400</option>'
////	+'<option>450</option>'
////	+'<option>500</option>'
////	+'</select>'
//	+'</div>'
//	+'</div>'
    +'<br>'
    $("#canvas-div").html(htm);

let value = 0;
const maxValue = 500;
let rpmval=100;
//$("#plus").click(function() {
//	
//  if (value < maxValue) {
//    value+=50;
////    rpmval+=50;
//    $("#display1").text(value+"mA");
//    rpmval=parseInt((value/501)*5613);
//    $("#pDisplay").text("PULSES :"+parseInt(rpmval/3));
//    $("#rpmDisplay").text("RPM :"+(rpmval));
//
//  }
//});
//
//$("#minus").click(function() {
//  value-=50; // you can also add a min value check if needed
////  rpmval+=50;
//  $("#display1").text(value+"mA");
//
//  rpmval=parseInt((value/501)*5613);
//  $("#pDisplay").text("PULSES :"+parseInt(rpmval/3));
//  $("#rpmDisplay").text("RPM :"+(rpmval));
//
//
//});
let speed = 0; // higher value = faster

const maxSpeed = 10;
const minSpeed = 0;
const $disc = $("#disc1");

function updateSpeed() {
  if (speed > 0) {
    const duration = (2 - speed * 0.09); // lower duration = faster spin
    $disc.css("animation-duration", duration + "s");

  } else {
    $disc.css("animation-duration", "0s"); // stop rotation
  }
}

$("#plus").click(function() {
  if (speed < maxSpeed) {
    speed++;
    value++;
    $("#display1").text(value);
    value+=50; // you can also add a min value check if needed
  //rpmval+=50;
  $("#display1").text(value+"mA");

  rpmval=parseInt((value/501)*5613);
  $("#pDisplay").text("PULSES :"+parseInt(rpmval/3));
  $("#rpmDisplay").text("RPM :"+(rpmval));
    updateSpeed();
  }
});

$("#minus").click(function() {
  if (speed > minSpeed) {
	  value-=50; // you can also add a min value check if needed
//  rpmval+=50;
  $("#display1").text(value+"mA");

  rpmval=parseInt((value/501)*5613);
  $("#pDisplay").text("PULSES :"+parseInt(rpmval/3));
  $("#rpmDisplay").text("RPM :"+(rpmval));
    speed--;
    value--;
    $("#display1").text(value);
    updateSpeed();
  }
});

// Set initial speed
updateSpeed();


