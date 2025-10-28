
resultJson = {};
timerMasterJson = {};
//function mainPage1(){
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     //$("#canvas-div1").html('');
      $("#centerText1").html('DIAGRAM');
      $("#centerText2").html('CONFIGURATION');
 			//var htm = '<center><img src="images/chipImg.png" class="img-fluid" style="width: 80%;" ></center>'
	   // $("#canvas-div1").html(htm);
	
 
var selection = '<div class="row selectConf" >'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '<div class="col-sm-5" id="IpinSelection" >'
	+ '<label class="labelstyle">Select Input Pin For Incremental encoder :</label>'
	+ '</div>'
	+ '<div class="col-sm-5">'
	+ '<select  class="form-control selectConf" id="inputPinName"  style="height:auto;" >'
	+ '<option value="0">--- Select Input Pin ---</option>'
//	+ '<option value="1" name="PD1">PD1</option>'
	+ '<option value="2" name="PD2">PD2</option>'
	+ '<option value="3" name="PD3">PD3</option>'
//	+ '<option value="4" name="PD4">PD4</option>'
//	+ '<option value="5" name="PD5">PD5</option>'
//	+ '<option value="6" name="PD6">PD6</option>'
//	+ '<option value="7" name="PD7">PD7</option>'
	

	+ '</select>'
	+ '</div>'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '</div>'
	
//	+'<div class="row selectConf" >'
//	+ '<div class="col-sm-1">'
//	+ '</div>'
//	+ '<div class="col-sm-5" id="OpinSelection" >'
//	+ '<label class="labelstyle">Select Output Pin For LED :</label>'
//	+ '</div>'
//	+ '<div class="col-sm-5">'
//	+ '<select  class="form-control selectConf" id="outputPinName"  style="height:auto;" disabled>'
//	+ '<option value="0">--- Select Output Pin ---</option>'
////	+ '<option value="1" name="PD1">PD1</option>'
//	+ '<option value="2" name="PD2">PD2</option>'
//	+ '<option value="3" name="PD3">PD3</option>'
//	+ '<option value="4" name="PD4">PD4</option>'
//	+ '<option value="5" name="PD5">PD5</option>'
//	+ '<option value="6" name="PD6">PD6</option>'
//	+ '<option value="7" name="PD7">PD7</option>'
//	+ '</select>'
//	+ '</div>'
//	+ '<div class="col-sm-1">'
//	+ '</div>'
//	+ '</div>'
//	
//	+'<div class="row selectConf" >'
//	+ '<div class="col-sm-1">'
//	+ '</div>'
//	+ '<div class="col-sm-5" id="sVal" >'
//	+ '<label class="labelstyle">Select Switch Configuration : </label>'
//	+ '</div>'
//	+ '<div class="col-sm-5">'
//	+ '<select  class="form-control selectConf" id="switchConfig"  style="height:auto;" disabled >'
//	+ '<option value="0">--- Select Switch Configuration ---</option>'
//	+ '<option value="1" >Press-to-High</option>'
//	+ '<option value="2" >Press-to-Low</option>'
//	+ '</select>'
//	+ '</div>'
//	+ '<div class="col-sm-1">'
//	+ '</div>'
//	+ '</div>'
//	
//	+ '<div class="row selectConf" >'
//	+ '<div class="col-sm-1">'
//	+ '</div>'
//	+ '<div class="col-sm-5" id="ledSelect" >'
//	+ '<label class="labelstyle">Select LED Configuration :</label>'
//	+ '</div>'
//	+ '<div class="col-sm-5">'
//	+ '<select  class="form-control selectConf" id="ledtype"  style="height:auto;" disabled>'
//	+ '<option value="0">--- Select LED Configuration ---</option>'
//	+ '<option value="1" >Current Sourcing</option>'
//	+ '<option value="2" >Current Sinking</option>'
//	+ '</select>'
//	+ '</div>'
//	+ '<div class="col-sm-1">'
//	+ '</div>'
//	+ '</div>'


	+ '<div class="row" selectConf>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-danger btnStyle button5" id="generateCode" data-toggle="modal" data-target="#myModal" disabled><b>GENERATE<br>CODE</b></button>'
	+ '</div>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-success btnStyle button4" id="compileCode" data-toggle="modal" data-target="#myModal" disabled><b>COMPILE<br>CODE</b></button>'
	+ '</div>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-success btnStyle button4" id="executeCode" data-toggle="modal" data-target="#myModal" disabled ><b>EXECUTE<br>CODE</b></button>'
	+ '</div>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-primary btnStyle button2" id="downloadCode" data-toggle="modal"  disabled><i class="fa fa-download"></i> <b>DOWNLOAD<br>PROGRAM</b></button>'
	+ '</div>'
	+ '</div>'
	
	

    + '<div class="row  selectConf" id="codeview"   hidden>'
    + '<div class="col-sm-12" >'
    + '<p id="demo" style="margin-top:10px ;border-style: double;"></p>'
    + '</div>'
    + '</div>'
    
    + '<div class="row  selectConf" id="errorview"   hidden>'
    + '<div class="col-sm-12" >'
    + '<p id="errordemo" style="margin-top:10px ; border-style: double;"></p>'
    + '</div>'
    + '</div>'


	+ ' <!-- Modal -->'
	+ '<div class="modal fade" id="myModal" role="dialog">'
	+ ' <div class="modal-dialog modal-md">'
	+ '    <div class="modal-content">'
	+ '     <div class="modal-header">'

	+ '       <h4 class="modal-title">Message box</h4>'
	+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
	+ '     </div>'
	+ '     <div class="modal-body">'
	+ '       <p id="modelMsg"></p>'
	+ '     </div>'
	+ '     <div class="modal-footer">'
	+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
	+ '     </div>'
	+ '   </div>'
	+ ' </div>'
	+ '</div>'
	+ '</div>'
	+ '</div>'
	+ ' </div>'
$("#main-div-conf").html(selection);

var iPinSelect;
var oPinSelect;
var switchConfigSelect;
var LedConSelect;

var id=0;
var inputPinVal;
var outputPinVal;
var ledTypeVAl;
var selectedValue;
var selectedOutput;
var wrongConfig = 0 ;
$("#inputPinName").change(function(){
		var selectEl = document.getElementById("inputPinName");
		var selectedOption = selectEl.options[selectEl.selectedIndex];

// get value and name
		 selectedValue = selectedOption.value; // e.g. "D2"
		var selectedName = selectedOption.getAttribute("name");
		$("body").css("padding","0px 0px 0px 0px");	
		inputPinVal = selectedName;
		if(inputPinVal<=0){
			toastr.warning("Select Input Pin.");
		}else{		  
		  $("#generateCode").prop("disabled",false);			  
 		  $("#inputPinName").prop("disabled",true);	 
		}
		
		
	});

//$("#outputPinName").change(function(){
//		var selectEl = document.getElementById("outputPinName");
//		var selectedOption = selectEl.options[selectEl.selectedIndex];
//
//// get value and name
//		 selectedOutput = selectedOption.value; // e.g. "D2"
//		 console.log(selectedOutput);
//		var selectedName1 = selectedOption.getAttribute("name");
//		$("body").css("padding","0px 0px 0px 0px");	
//		outputPinVal = selectedName1;
//		if(selectedOutput == 0){
//			toastr.warning("Select Output Pin.");
//		}else{
//			 if (selectedOutput == 2 && selectedValue == 2){
////				toastr.warning("Input and output pin can not be same ");
//				wrongConfig++;
//				showSwal('Input and output pin can not be same','warning');
//			 }else if (selectedOutput == 3 && selectedValue == 3){
////				toastr.warning("Input and output pin can not be same ");
//				wrongConfig++;
//				showSwal('Input and output pin can not be same','warning');
//			 }else if (selectedOutput == 4 && selectedValue == 4){
////				toastr.warning("Input and output pin can not be same ");
//				wrongConfig++;
//				showSwal('Input and output pin can not be same','warning');
//			 }else if (selectedOutput == 5 && selectedValue == 5){
//				 wrongConfig++;
////				toastr.warning("Input and output pin can not be same ");
//				showSwal('Input and output pin can not be same','warning');
//			 }else if (selectedOutput == 6 && selectedValue == 6){
//				 wrongConfig++;
////				toastr.warning("Input and output pin can not be same ");
//				showSwal('Input and output pin can not be same','warning');
//			 }else if (selectedOutput == 7 && selectedValue == 7){
//				 wrongConfig++;
////				toastr.warning("Input and output pin can not be same ");
//				showSwal('Input and output pin can not be same','warning');
//			 }
//			 else{
//				$("#switchConfig").prop("disabled",false);			  
// 		 		 $("#outputPinName").prop("disabled",true);
//			}		  
//		  
//		}
//		
//		
//	});
	var comment , comment1 = '';
	
var dCycleVal, code , code1 ;
//$("#switchConfig").change(function(){
//		$("body").css("padding","0px 0px 0px 0px");	
//		dCycleVal = $("#switchConfig").val();
//		if(dCycleVal<=0){
//			toastr.warning("Select Output Pin.");
//		}else{
//		   $("#ledtype").prop("disabled",false);		  		  			  
// 		  $("#switchConfig").prop("disabled",true);
//// 		  if(dCycleVal == 1){
////			code = "HIGH";
////			code1 = "LOW";
////			comment = "LED ON when switch pressed",
////			comment1 = "LED OFF when switch released";
////			
////		}else{
////			code = "LOW";
////			code1 = "HIGH";
////			comment = "LED OFF when switch released";
////			comment1 = "LED ON when switch pressed";
////		}
//		}	
//	});
	
	
var loopcode = '';
//$("#ledtype").change(function(){
//	$("body").css("padding","0px 0px 0px 0px");	
//		ledTypeVAl = $("#ledtype").val(); 
//		if(ledTypeVAl<=0){
//			toastr.warning("Select LED Connection Type.");
//		}else{	
//		  $("#generateCode").prop("disabled",false);
//		  $("#compileCode").prop("disabled",false);
//		  $("#executeCode").prop("disabled",false);
//		  $("#downloadCode").prop("disabled",false);	  
//		  $("#ledtype").prop("disabled",true);	
//		  
//		 if(ledTypeVAl == 1 &&  dCycleVal == 1){
//		
//		loopcode =	`<p> if (state == HIGH) { &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;//   Switch is pressed
//		<p>digitalWrite(ledPin, HIGH );      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;   //  Drive LED pin HIGN -> sources current -> LED turns ON </p>
// 		<p> } else {						 &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; // Switch is released
//		<p> digitalWrite(ledPin, LOW );    &nbsp; &nbsp; &nbsp; &nbsp;   // Drive LED pin LOW -> no current flows -> LED turns OFF </p>
// 		<p> } </p>
//		}`
//		}else if (ledTypeVAl == 2 &&  dCycleVal == 1) {
//		loopcode =	`<p> if (state == HIGH) { &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; //   Switch is pressed
//		<p>digitalWrite(ledPin, LOW );      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;   //  Drive LED pin LOW -> sink current -> LED turns ON </p>
// 		<p> } else {						 &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;// Switch is released
//		<p> digitalWrite(ledPin, HIGN );    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  // Drive LED pin HIGH -> no current sink -> LED turns OFF </p>
// 		<p> } </p>
//		}`	
//			
//		}else if (ledTypeVAl == 1 &&  dCycleVal == 2) {
//		loopcode =	`<p> if (state == LOW) { &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;//   Switch is pressed
//		<p>digitalWrite(ledPin, HIGN  );      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;   //  Drive LED pin HIGN -> sources current -> LED turns ON </p>
// 		<p> } else {						 &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; // Switch is released
//		<p> digitalWrite(ledPin, LOW);    &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp; // Drive LED pin LOW -> no current source -> LED turns OFF </p>
// 		<p> } </p>
//		}`	
//			
//		}else if (ledTypeVAl == 2 &&  dCycleVal == 2) {
//		loopcode =	`<p> if (state == LOW) { &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;//   Switch is pressed
//		<p>digitalWrite(ledPin, LOW );      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;   //  Drive LED pin LOW -> sink current -> LED turns ON </p>
// 		<p> } else {						 &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;// Switch is released
//		<p> digitalWrite(ledPin, HIGN );    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  // Drive LED pin HIGH -> no current flows -> LED turns OFF </p>
// 		<p> } </p>
//		}`
//		}	  	 
//		}
//		
//});



	var flag = false;
	
	
	

	

$("#generateCode").click(function () {
//	$("#inputPinName").prop("disabled",true);
// 	$("#outputPinName").prop("disabled",true);
// 	$("#ledtype").prop("disabled",true);	
	$("#modelMsg").html("<b class='boldTextGreen'>Code Generated Successfully.</b>");
	flag=true;
	$("#compileCode").prop("disabled",false);	
	$("#codeview").prop("hidden",false);
	hexValue = calculateHex();
	var currentdate = new Date(); 
    var datetime = "Date: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " Time "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();


	var a = `<p>`+datetime+`</p><br>	
    
		<p>#include &lt;Wire.h&gt;</p>
<p>#include &lt;LiquidCrystal_I2C.h&gt;</p>
<p></p>
<p>// Global variables to store the encoder count and speed.</p>
<p>volatile long count = 0; // 'volatile long' is used to store a large number of pulses, modified by an interrupt.</p>
<p>int interruptPin = `+selectedValue+`; // Defines the Arduino's digital pin `+selectedValue+` for the interrupt.</p>
<p>float speedRPM = 0; // Floating-point variable to store the calculated motor speed in RPM.</p>
<p></p>
<p>// Variables for timing the measurements.</p>
<p>unsigned long previousMillis = 0; // Stores the timestamp of the last completed measurement interval.</p>
<p>const long interval = 1000; // duration of the measurement interval in milliseconds (1 second).</p>
<p>const float pulsesPerRevolution = 20; // number of pulses the encoder generates for one full revolution (PPR).</p>
<p></p>
<p>// Creates the LCD object with its I2C address (0x27), number of columns (16), and rows (2).</p>
<p>LiquidCrystal_I2C lcd(0x27, 16, 2);</p>
<p></p>
<p>// Interrupt Service Routine (ISR)</p>
<p>// This function is automatically called by the Arduino hardware whenever a pulse is detected.</p>
<p>void encoderPulse() {</p>
<p>&nbsp;&nbsp;count++; // Increments the pulse count every time a pulse is received from the encoder.</p>
<p>}</p>
<p></p>
<p>// Setup Function</p>
<p>// code runs only once when the Arduino is powered on or reset.</p>
<p>void setup() {</p>
<p>&nbsp;&nbsp;// LCD display initialization.</p>
<p>&nbsp;&nbsp;lcd.init(); // Initializes the LCD module.</p>
<p>&nbsp;&nbsp;lcd.backlight(); // Turns on the LCD's backlight.</p>
<p>&nbsp;&nbsp;lcd.setCursor(0, 0); // Sets the cursor to the first column (0) of the first row (0).</p>
<p>&nbsp;&nbsp;lcd.print("RPM:"); // Prints the label "RPM:" on the LCD.</p>
<p>&nbsp;&nbsp;lcd.setCursor(0, 1); // Sets the cursor to the first column (0) of the second row (1).</p>
<p>&nbsp;&nbsp;lcd.print("Pulses:"); // Prints the label "Pulses:" on the LCD.</p>
<p></p>
<p>&nbsp;&nbsp;// Configures the interrupt pin for the encoder.</p>
<p>&nbsp;&nbsp;pinMode(interruptPin, INPUT_PULLUP); // Sets the pin as an input and enables the internal pull-up resistor.</p>
<p>&nbsp;&nbsp;attachInterrupt(digitalPinToInterrupt(interruptPin), encoderPulse, RISING); // Attaches the 'encoderPulse' function to the interrupt on Pin (D2).</p>
<p>&nbsp;&nbsp;// 'RISING' means the interrupt is triggered when the signal goes from LOW to HIGH.</p>
<p>}</p>
<p></p>
<p>// Main Loop</p>
<p>// code runs repeatedly after the setup function is finished.</p>
<p>void loop() {</p>
<p>&nbsp;&nbsp;// Gets the current time in milliseconds since the program started.</p>
<p>&nbsp;&nbsp;unsigned long currentMillis = millis();</p>
<p></p>
<p>&nbsp;&nbsp;// Checks if the defined measurement interval has passed.</p>
<p>&nbsp;&nbsp;if (currentMillis - previousMillis &gt;= interval) {</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;// If the interval has passed, updates the timestamp for the next measurement.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;previousMillis = currentMillis;</p>
<p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;// RPM Calculation</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;// formula calculates the RPM using the counted pulses, PPR, and the time interval.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;// With a 1000ms interval, the formula simplifies to: speedRPM = count / pulsesPerRevolution * 60.0</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;speedRPM = (float)count / pulsesPerRevolution * 60.0;</p>
<p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;// Display on LCD</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;// Prints the calculated RPM on the first line.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;lcd.setCursor(4, 0);</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;lcd.print("      "); // Prints spaces to clear any previous value on the display.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;lcd.setCursor(4, 0);</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;lcd.print(speedRPM, 2); // Prints the RPM value with 2 decimal places.</p>
<p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;// Prints the pulse count on the second line.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;lcd.setCursor(7, 1);</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;lcd.print("      "); // Prints spaces to clear any previous value on the display.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;lcd.setCursor(7, 1);</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;lcd.print(count);</p>
<p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;// Resets the pulse counter for the next measurement interval.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;count = 0;</p>
<p>&nbsp;&nbsp;}</p>
<p>}</p>


 	
	<p>}</p>`
//		+'<p></p>'

    $("#demo").html(a);

    $("#errorview").prop("hidden",false);
   	var b = '<b class="blink_text">_</b><br><br><br><br><br><br><br>'
	$("#errordemo").html(b);

});

var compileflag=false;
$("#compileCode").click(function(){
	
	compileflag=true;
	if(flag==true){
		$("#modelMsg").html("<b class='boldTextGreen'>Check Terminal Window Below Code for Errors.</b>");
		var b1 = '<p>Program Compiled Successfully.</p><br><br>'
		$("#errordemo").html(b1);
		$("#executeCode").prop("disabled",false);
	}else{
		$("#modelMsg").html("<b class='boldTextGreen'>Please Generate The Code First.</b>");
	}
});
 

$("#executeCode").click(function () {
	wrongConfig++;
	if(compileflag==true){
		$("#modelMsg").html("<b class='boldTextGreen'>Code Executed Successfully.</b>");
			iPinSelect = $("#inputPinName").val();
			oPinSelect = $("#outputPinName").val();
			LedConSelect = $("#ledtype").val();
			switchConfigSelect= $("#switchConfig").val();
			$("#canvas-div").html('');
			$("#canvas-div1").html('');
						resultJson.configuration = wrongConfig;
			console.log(resultJson);
			mimic(iPinSelect,oPinSelect,switchConfigSelect,LedConSelect);
			
    
	}else{
//		mimic(iPinSelect,oPinSelect,switchConfigSelect,LedConSelect);
		$("#modelMsg").html("<b class='boldTextGreen'>Please Compile The Code First</b>");
	}
	
	
 
});

  var doc = new jsPDF();
	var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};
   

$("#downloadCode").click(function () {
	 if(flag==true){
			doc.fromHTML($('#demo').html(), 15, 15, {
        	'width': 170,
            'elementHandlers': specialElementHandlers
    		});
    		doc.save('sourcecode.pdf');
//			$("#modelMsg").html("<b class='boldTextGreen'>Download Code File Successfully.</b>");	
	}else{
//		$("#modelMsg").html("<b class='boldTextGreen'>Please Generate The Code First and Then You Can Download Code File.</b>");
		toastr.warning("Please Generate The Code First and Then You Can Download Code File.")
	}

 
});


//$(document).ready(function () {
    // Function to calculate hex value and update the input field
    function calculateHex() {
        var frequency = $("#fqVal").val();
        var hexValue;

        // Perform conversion based on selected frequency 
        switch (parseInt(frequency)) {
            case 1:
                hexValue = "0x42"; // Example value for 1 MHz
                break;
            case 2:
                hexValue = "0x52"; // Example value for 2 MHz
                break;
            case 3:
                hexValue = "0x62"; // Example value for 4 MHz
                break;

            case 4:
                hexValue = "0x72"; // Example value for 8 MHz
                break;
            case 5:
                hexValue = "0x12"; // Example value for 125 MHz
                break;
            case 6:
                hexValue = "0x22"; // Example value for 250 MHz
                break;
            case 7:
                hexValue = "0x32"; // Example value for 500 MHz
                break;
            // Add more cases for other frequencies as needed
            default:
                hexValue = "Unknown"; // Default value if frequency is not recognized
        }
		return hexValue;
        // Update the input field with the calculated hex value
//        $("#hexValue").val(hexValue);
    }


//}
