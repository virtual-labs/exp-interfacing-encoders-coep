
var connectionStatus=0;
$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w =660;
	var h = 550;

	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}

var x=100;
var y=160;	


function mimic(){

    $("#centerText2").html('CONFIGURATION');
    $('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	$("#generateCode,#compileCode,#executeCode").prop('disabled',true);
	timerMasterJson.configuration = $("#counter").text();
	seconds = 0;
	 updateCounter();
	var w =650;
	var h = 550;
	
	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}
	
$("#plot").html("");
//Create the image
//var checkStatus = paper.image("images/MainImg.png", x - 90, y - 150, 650, 400);
//
//var plus = paper.image("images/plus.png", x - 90, y - 150, 30, 30);
//var minus = paper.image("images/minus.png", x - 90, y - 150, 30, 30);



//Create main image (parent)
var mainX = x - 90;
var mainY = y - 150;
var mainWidth = 650;
var mainHeight = 400;

var checkStatus = paper.image("images/MainImg.png", mainX, mainY, mainWidth, mainHeight);

// Add overlay images (plus & minus)
//var plus = paper.image("images/plus.png", mainX + mainWidth - 60-510, mainY + 20+220, 10, 10);
////Make 'plus' image not clickable
//plus.unclick(); // removes all click events
//plus.attr({ cursor: "default", opacity: 0.5 }); // optional visual cue (grayed out)

var plus = paper.image("images/plus.png", mainX + mainWidth - 60 - 510, mainY + 20 + 220, 10, 10);

//Make 'plus' image completely non-clickable
plus.node.style.pointerEvents = "none"; // disables all mouse events
plus.attr({ cursor: "default", opacity: 0.5 }); // optional visual cue

var minus = paper.image("images/minus.png", mainX + mainWidth - 60-465, mainY + 60+180, 10, 10);
//Make 'plus' image completely non-clickable
minus.node.style.pointerEvents = "none"; // disables all mouse events
minus.attr({ cursor: "default", opacity: 0.5 }); // optional visual cue

var disc = paper.image("images/disc2.png", mainX + mainWidth - 60-410, mainY +45, 50, 50);
var hand = paper.image("images/hand.gif", mainX + mainWidth - 60-400, mainY + 60+260, 50, 50);

var NPN = paper.image("images/NPN.png", mainX + mainWidth - 60-445, mainY + 60+120, 40, 40);

var reset = paper.image("images/Capture.png", mainX + mainWidth - 60-100, mainY + 60+320, 100, 40);
reset.hide();
var startLabel=paper.text( mainX + mainWidth - 60-400, mainY + 60+310, "Connect this pin").attr({
	 "font-size": 13,
	 "font-family": "Arial",
	 fill: "red"
	});
// Bring them to front (in case they appear behind)
plus.toFront();
minus.toFront();

// Optional: make them clickable




// Position of the two dots (relative to the image size)
var dot1X = x - 90 + (650 * 0.33); // 33% from the left
var dot1Y = y - 150 + (400 * 0.77); // 77% from the top

//var dot2X = x - 90 + (500 * 0.77); // 77% from the left
//var dot2Y = y - 150 + (510 * 0.69); // 69% from the top

// Draw the two dots
var dot1 = paper.circle(dot1X, dot1Y, 5).attr({
    fill: "green",
    stroke: "none"
});

//var dot2 = paper.circle(dot2X, dot2Y, 5).attr({
//    fill: "red",
//    stroke: "none"
//});

// Create two rectangles on the image
var rect1 = paper.rect(x - 90 + (650 * 0.6), y - 150 + (435 * 0.7), 10, 5).attr({
    fill: "green",
    stroke: "none",
    cursor: "pointer"
}).data("name", "Rectangle 1");  // Attach a name to the rectangle

var rect2 = paper.rect(x - 90 + (650 * 0.6), y - 150 + (443 * 0.7), 10, 5).attr({
    fill: "green",
    stroke: "none",
    cursor: "pointer"
}).data("name", "Rectangle 2");  // Attach a name to the rectangle
//=== Add 3 more rectangles ===
var rect3 = paper.rect(x - 20 + (650 * 0.6), y - 205 + (451 * 0.7), 155, 50).attr({
    fill: "#3765b2",
    stroke: "none",
    cursor: "pointer"
}).data("name", "Rectangle 3");

var rect4 = paper.rect(x - 105 + (90 * 0.6), y - 150 + (170 * 0.7), 35, 15).attr({
    fill: "#c2c4c3",
    stroke: "none",
    cursor: "pointer"
}).data("name", "Rectangle 4");

var rect5 = paper.rect(x - 105 + (90 * 0.6), y - 150 + (200 * 0.7), 35, 15).attr({
    fill: "#c2c4c3",
    stroke: "none",
    cursor: "pointer"
}).data("name", "Rectangle 5");

// Draw a line from dot1 to dot2 after clicking on dot1
var line = null; // This will store the line object

dot1.click(function() {
    if (!line) {
        // Control points for the Bezier curve
        var controlX1 = dot1X + 100; // X offset for the first control point
        var controlY1 = dot1Y - 50;  // Y offset for the first control point
        var controlX2 = dot2X - 100; // X offset for the second control point
        var controlY2 = dot2Y + 50;  // Y offset for the second control point

        // Create the Bezier curve path
        line = paper.path("M" + dot1X + "," + dot1Y + " C" + controlX1 + "," + controlY1 + "," + controlX2 + "," + controlY2 + "," + dot2X + "," + dot2Y).attr({
            stroke: "green",  // Line color
            strokeWidth: 2
        });
    }
});

// When rect1 or rect2 is clicked, connect the line to dot1 and log the name
rect1.click(function() {
	connectionStatus=1;
	// Enable clicks again
	plus.node.style.pointerEvents = "auto";  
	plus.attr({ cursor: "pointer", opacity: 1 });  
	hand.remove();
	startLabel.remove();
	minus.node.style.pointerEvents = "auto";  
	minus.attr({ cursor: "pointer", opacity: 1 });  
    var rectName = rect1.data("name");  // Get the name of the clicked rectangle
    // Draw a line from dot1 to rect1
    var rectCenterX = rect1.attr("x") + rect1.attr("width") / 2;
    var rectCenterY = rect1.attr("y") + rect1.attr("height") / 2;

    // Create the connection line
    var connectLine = paper.path("M" + dot1X + "," + dot1Y + " L" + rectCenterX + "," + rectCenterY).attr({
        stroke: "green",
        strokeWidth: 2
    });

    // Log the name of the rectangle connected
    console.log("Connected to " + rectName);
});

rect2.click(function() {
	connectionStatus=1;
	// Enable clicks again
	plus.node.style.pointerEvents = "auto";  
	plus.attr({ cursor: "pointer", opacity: 1 });  
	hand.hide();
	startLabel.hide();
	minus.node.style.pointerEvents = "auto";  
	minus.attr({ cursor: "pointer", opacity: 1 });  

    var rectName = rect2.data("name");  // Get the name of the clicked rectangle
    // Draw a line from dot1 to rect2
    var rectCenterX = rect2.attr("x") + rect2.attr("width") / 2;
    var rectCenterY = rect2.attr("y") + rect2.attr("height") / 2;

    // Create the connection line
    var connectLine = paper.path("M" + dot1X + "," + dot1Y + " L" + rectCenterX + "," + rectCenterY).attr({
        stroke: "green",
        strokeWidth: 2
    });

    // Log the name of the rectangle connected
    console.log("Connected to " + rectName);
});
reset.click(function() {
	showQuestions();
});
//=== Add text labels inside the Raphael canvas ===

//Voltage, Current, RPM, and Power display values
var displayText1 = paper.text(x - 90 + 40, y - 150 + 130, "12.0V").attr({
 "font-size": 12,
 "font-family": "Arial",
 "font-weight": "bold",
 fill: "#000",
 "text-anchor": "start"   // Align left
});

var displayText2 = paper.text(x - 90 + 40, y - 150 + 150, "00mA").attr({
 "font-size": 12,
 "font-family": "Arial",
 "font-weight": "bold",
 fill: "#000",
 "text-anchor": "start"
});

var displayText3 = paper.text(x - 90 + 500, y - 150 + 270, "00.00").attr({
 "font-size": 12,
 "font-family": "Arial",
 "font-weight": "bold",
 fill: "#fff",
 "text-anchor": "start"
});

var displayText4 = paper.text(x - 90 + 500, y - 150 + 290, "00.00").attr({
 "font-size": 12,
 "font-family": "Arial",
 "font-weight": "bold",
 fill: "#fff",
 "text-anchor": "start"
});
paper.text(x - 10+120 , y - 120 + 10, "DC Motor").attr({
	 "font-size": 13,
	 "font-family": "Arial",
	 fill: "black"
	});
//=== Component Labels ===
paper.text(x - 90 + 100, y - 150 + 280, "Potentiometer").attr({
 "font-size": 13,
 "font-family": "Arial",
 fill: "black"
});

paper.text(x - 90 + 160, y - 150 + 160, "NPN").attr({
 "font-size": 13,
 "font-family": "Arial",
 fill: "black"
});

paper.text(x - 90 + 320, y - 150 + 150, "OP-AMP IC741").attr({
 "font-size": 13,
 "font-family": "Arial",
 fill: "black"
});

paper.text(x - 10 , y - 150 + 100, "12V Power supply").attr({
 "font-size": 13,
 "font-family": "Arial",
 fill: "black"
});

paper.text(x - 90 + 50, y - 150 + 180, "(+ve)").attr({
 "font-size": 13,
 "font-family": "Arial",
 fill: "black"
});

paper.text(x - 90 + 90, y - 150 + 180, "(-ve)").attr({
 "font-size": 13,
 "font-family": "Arial",
 fill: "black"
});

paper.text(x - 50 + 460, y - 170 + 250, "LCD Display (I2C)").attr({
 "font-size": 13,
 "font-family": "Arial",
 fill: "black"
});

//Function to make a shape blink
function blink(element) {
    function fadeOut() {
        element.animate({ opacity: 0 }, 500, "linear", fadeIn);
    }
    function fadeIn() {
        element.animate({ opacity: 1 }, 500, "linear", fadeOut);
    }
    fadeOut(); // Start the loop
}

// Apply blinking effect to both rectangles
blink(startLabel);
//=== ROTATING DISC SETUP ===
//=== Rotation and Display Control Variables ===
var rotationAngle = 0;
var rotationSpeed = 0;        // initial rotation speed (degrees per frame)
var rotationInterval = null;
var maxSpeed = 10;
var minSpeed = 0;
var value = 0;                // current (mA)
var rpmval = 0;               // calculated RPM

// === Calculate disc center once ===
var discCenterX = disc.attr("x") + disc.attr("width") / 2;
var discCenterY = disc.attr("y") + disc.attr("height") / 2;

// === Start rotation (only if not already started) ===
function startRotation() {
    if (rotationInterval) return; // already running

    rotationInterval = setInterval(function () {
        rotationAngle += rotationSpeed;
        disc.transform("r" + rotationAngle + "," + discCenterX + "," + discCenterY);
    }, 30); // ~33 FPS
}

// === Stop rotation (helper) ===
function stopRotation() {
    clearInterval(rotationInterval);
    rotationInterval = null;
}

// === Update display values dynamically ===
function updateDisplay() {
    // Update current display (mA)
    displayText2.attr({ text: value + " mA" });

    // Calculate RPM based on current value
    rpmval = parseInt((value / 501) * 5613);

    // Update RPM and Pulse displays
    displayText3.attr({ text: "RPM : " + rpmval.toFixed(0) });
    displayText4.attr({ text: "PULSES : " + parseInt(rpmval / 3) });
}

// === PLUS button increases speed and current ===
plus.attr({ cursor: "pointer" }).click(function () {
    if (rotationSpeed < maxSpeed) {
    	reset.show();
        rotationSpeed += 1; // increase rotation speed
        value += 50;        // increase current value
        updateDisplay();

        if (!rotationInterval) startRotation(); // start rotation if not running
        console.log("Speed increased to", rotationSpeed);
    }
});

// === MINUS button decreases speed and current ===
minus.attr({ cursor: "pointer" }).click(function () {
    if (rotationSpeed > minSpeed) {
    	reset.show();
        rotationSpeed -= 1; // decrease rotation speed
        value -= 50;        // decrease current
        if (value < 0) value = 0; // no negative current
        updateDisplay();

        if (rotationSpeed === 0) {
        	reset.hide();
            stopRotation();
            
            console.log("Rotation stopped");
        }
        console.log("Speed decreased to", rotationSpeed);
    }
});

// === Start rotation when "Click to Start" label is pressed ===
startLabel.attr({ cursor: "pointer" }).click(function () {
    if (!rotationInterval) startRotation();
    console.log("Rotation started manually");
});



}
