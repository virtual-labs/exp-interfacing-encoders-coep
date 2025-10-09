

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

//var Ledcircle = paper.circle(0, 0, 0); ;
//var resetimg=paper.image("images/reset.png",x+120,y-150,100, 50);

function mimic(iPinSelect,oPinSelect,switchConfigSelect,LedConSelect){
//	$("#main-div-conf").html('');	
//    $("#canvas-div").html('');
//    $("#canvas-div").html('<button id="checkBtn" class="btn btn-primary" style="margin-left:50px; margin-top:50px; "><b>Check Connection</b></button>');
    			
//    $("#checkBtn").prop('hidden',false);	
    $("#centerText1").html('MIMIC');
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
	

//var x=100;
//var y=160;	
//
//
//var IpinVal=parseInt(iPinSelect);
//var pinVal=parseInt(oPinSelect);					
//var diodSelection2=parseInt(LedConSelect);
//var switchConfigSelection=parseInt(switchConfigSelect);
////console.log("switchConfigSelection="+switchConfigSelection+"      ,  pinVal="+pinVal);
////console.log("IpinVal="+IpinVal);
//
////var interval_plot1=timeVal/1000;
////var offTime1=ON_dlyVal/1000;
////var onTime1=OFF_dlyVal/1000;
////var onTime11=onTime1+offTime1;
//var interval_plot1=1000/1000;
//var offTime1=500/1000;
//var onTime1=500/1000;
//var onTime11=onTime1+offTime1;
$("#plot").html("");
var checkStatus=paper.image("images/EncoderImg.png",x-90,y-150,650, 500);
//var resetimg=paper.image("images/resetconnectioPreview.png",x+200,y-150,180, 50);
//var next = paper.image("images/next.png",x+400,y-150,100, 40);
//next.hide();
////var runimg=paper.image("images/runPreview.png",x+120,y-150,100, 50);
////var microcontroller=paper.image("images/chipImg.png",x-40,y+40,400, 300).rotate(1);
//
////var Ledcircle=paper.circle(x+230, y-21, 35);
//
//
//var diodSelection=1;
////Math.floor(Math.random() * 2);
////console.log("diodSelection = "+diodSelection);
//var diode;
//var anode;
//var cathode;
//if (ledTypeVAl == 2){
//	
//	diode=paper.image("images/diodeSymbolMirrorImg_preview.png",x+250,y+195,150, 110);
//	anode=paper.circle(x+283, y-19, 0).attr({'fill':'#FF0800'});
//	cathode=paper.circle(x+168, y-19, 0).attr({'fill':'#FF0800'});
//}else{	
//	diode=paper.image("images/diodeSymbol2.png",x+250,y+195,150, 110);
//	anode=paper.circle(x+283, y-19, 0).attr({'fill':'#FF0800'});
//	cathode=paper.circle(x+168, y-19, 0).attr({'fill':'#FF0800'});
//}
//
//
//
////var r=paper.image("images/resistorSymbol.png",x+400,y+245,120, 55); 
////var connection_RtoG=paper.path("M"+(x+436)+" "+(y-17.5)+"l 30 0 l 0 30   ").attr({'stroke-width':2});
//
//
//
//var Ledcircle2=paper.circle(x+328, y+270, 35);
//
//
//
////var ground_circle=paper.circle(x+325,y+263,5).attr({'fill':' #FF0000'});
////var vddCircle=paper.circle(x+28, y+184, 5).attr({'fill':'#000'});
////var vdd= paper.image("images/VDD5V.png",x-76.4,y+115,55, 51);
////var vddConnection=paper.path("M"+(x+24)+" "+(y+184)+"l -81 0 l 0 -22").attr({'stroke-width':3});
//
//var switchCircleNAme=paper.text(x+320, y+85,"Switch").attr({"font-weight":"bold",'font-size': 14});
//var switchCircleNAme=paper.text(x+320, y+102,"Terminal").attr({"font-weight":"bold",'font-size': 14});
//var switchCircleNAme=paper.text(x+250, y+100,"(+5V)").attr({"font-weight":"bold",'font-size': 10});
//var switchCircle=paper.circle(x+308, y+118, 5).attr({'fill':'#1a0dab'});
//var switchbaseImg = paper.image("images/switchPIC2.png",x+358,y+72,101, 50);
//var ardinoPin = paper.image("images/ArdiunoPin.png",x+30,y+72,200, 250);
//var switchTopImg ;
// 
//
//// condition for sourcing sinking switch connection
//if(switchConfigSelection == 1){
//	console.log("high");
//	switchTopImg = paper.image("images/PICswitchTopPreview.png",x+370,y+50,78, 41);
//	
//}else{
//	console.log("hwt");
//	switchTopImg = paper.image("images/PICswitchTopPreview.png",x+370,y+60,78, 41);
////	var resister2=paper.image("images/resistorSymbol.png",x+410,y+137,120, 55).rotate(90); 
//////	var resister2reading=paper.text(x+490,y+165,"1K").attr({'font-size':14,'stroke':'#800000'});
////	var sConnection=paper.path("M"+(x+310)+" "+(y+118)+"l 50 -0.7 ").attr({'stroke-width':3});
////	var groundConnection=paper.path("M"+(x+455)+" "+(y+118)+"l 16 0 ").attr({'stroke-width':3});
////	var ground1= paper.image("images/ground.png",x+445,y+208,50, 21);
////	var vdd2= paper.image("images/VDD5V.png",x+492.5,y+25,55, 51);
//}
//var t1 ;
//var ground1;
//
//
//var ground1= paper.image("images/ground.png",x+210,y+330,30, 21);
//var t1 = paper.path("M"+(x+229)+" "+(y+332)+"l 0 -40  l -10 0 ").attr({'stroke-width':3});
//// LED Connection Sourcning sinking
//if (ledTypeVAl == 1){
////	var t1 = paper.path("M"+(x+70)+" "+(y+300)+"l -60 0  l 0 30").attr({'stroke-width':3});
//	var t = paper.path("M"+(x+505)+" "+(y+272)+"l  0 60 ").attr({'stroke-width':3});
//	var ground= paper.image("images/ground.png",x+480,y+330,50, 21);
//
//	var groundConnection=paper.path("M"+(x+310)+" "+(y+118)+" l 50 -1"
//						+"M"+(x+456)+" "+(y+118)+" l 56 0 ").attr({'stroke-width':3});
//	var resister2=paper.image("images/resistorSymbol.png",x+460,y+52,100, 55).rotate(90);					
//	var vdd2 = paper.image("images/VDD5V.png",x+490,y,55, 51);
//	
//}else{
////	var t1 = paper.path("M"+(x+70)+" "+(y+300)+"l -60 0  l 0 30").attr({'stroke-width':3});
//	
//	var groundConnection=paper.path("M"+(x+310)+" "+(y+118)+" l 50 -1"
//						+"M"+(x+456)+" "+(y+118)+" l 0 0 ").attr({'stroke-width':3});
//	var resister2=paper.image("images/resistorSymbol.png",x+440,y+90,100, 55);	
//	var t = paper.path("M"+(x+529)+" "+(y+116)+"l  0 38 ").attr({'stroke-width':3});
//	var ground= paper.image("images/ground.png",x+510,y+150,30, 21);				
//	var vdd2 = paper.image("images/VDD5V.png",x+485,y+222,55, 51);
//}
//
//
//resetimg.click(function(){
//	$("#canvas-div").html('');
////	$("#plot").html("");
//		paper.clear();
//		mimic(iPinSelect,oPinSelect,switchConfigSelect,LedConSelect);	
//		$("#plot").prop("hidden",false);
//		setRedflag=false;		
//		statusFlag=false;
//		reset();
//	
//})
//
//
//
//
//
//
//
//
//
//
//
//var cntVal=1;
//function blink() {	
//                if (cntVal%2==0) {
//                    redInputconnection();
////                    console.log("IF cntVal = "+cntVal);
//                } else {
//                    blueInputconnection();
////                    console.log("ELSE cntVal = "+cntVal);
//                }
//                cntVal++;
//                
////                console.log("cntVal = "+cntVal);
//}
//
//var switchpress='';
//var arrowImg;
//var arrowImg1;
//
//
//
//
//
////ardinoPin = paper.image("images/ArdiunoPin.png",x+50,y+72,160, 250);
//var  wrongAttempts = 0;
//
//checkStatus.click(function(){
//	wrongAttempts++;
//
//		
//	if(coorectflg == 3 ){
//		statusFlag=true;				
////		$("#plot").html("");
////		$("#plot").prop("hidden",false);
////		start();
////		start(1,0,1);
//		start(1,0,1);
//		
////		toastr.success("Connection Established Successfully.Now Click on Switch.");	
//		showSwal('Connection Established Successfully.Now Click on Switch.','success');
//		switchpress=paper.text(x+365,y+3,"Click and Hold the Switch").attr({'font-size':14});
//		if(switchConfigSelection == 1){
//			arrowImg=paper.image("images/downArrowIMG.gif",x+385,y+13,50, 40);	
//			arrowImg1 = paper.image("images/upArrow.gif",x+385,y+100,50, 40);
//			arrowImg1.hide();
//		}else{
//			arrowImg=paper.image("images/downArrowIMG.gif",x+385,y+13,50, 40);
//			arrowImg.hide();
//			arrowImg1 = paper.image("images/upArrow.gif",x+385,y+100,50, 40);
//		}
//		
//		
//		disableAllPoints();
//		
//	}else if(coorectflg <= 3 || wrongflg >= 1){
////		toastr.warning("Some Connections are missing.")
//    if(wrongAttempts <= 3){
//		showSwal('Some Connections are missing or wrong','error');
//	}else{
//			Swal.fire({
//					title: 'Appropriate connections',
//					html: `<div>
//                <img src='images/switchCorrect.png' class='img-fluid' 
//                     style='border-style: double; border-color: black; display: block; margin: 10px auto; width: 100%; max-width: 1200px;'>
//           </div>`,
//					width: '80%', // Increases the width of the modal
//					confirmButtonText: 'Try Again'
//				});
//	}
//		
//	}else{
//		showSwal('First Establish Connection. Please Try Again','error');
////		toastr.warning("First Establish Connection. Please Try Again.");
//	}
//	
//});
//
//
//var myInterval;
//switchTopImg.mousedown( function() { 
//	
//	if(statusFlag==true){
//		onTime1 = 1000/1000;
//		offTime1 = 0/1000;
//		switchpress.hide();
//		arrowImg.hide();
//		next.show();
//		
//			setRedflag=true;
////			
//		if(switchConfigSelection == 1){
//			inputPt.show();
//			outputPt.show();
//			
//		switchTopImg.animate({transform: ['t',0, 10]}, 100);
//		}else{
//			arrowImg1.show();
//			setRedflag=true;
//			inputPt.hide();
//			outputPt.hide();
//			
//		switchTopImg.animate({transform: ['t',0, -10]}, 100);	
//		}
//		
//		$("#plot").prop("hidden",false);
//		start(interval_plot1,onTime1,offTime1);
//		//myInterval = setInterval(blink, 100); 
//		
//	}else{
////		toastr.warning("Please Check Connection Status.");
//		showSwal('Please Check Connection Status.','error');
//	}
// })
//
//switchTopImg.mouseup( function() {
//	cntVal=1;
//	
//	
//	if(statusFlag==true){
//		onTime1 = 0/1000;
//		offTime1 = 1000/1000;
//		switchpress.show();
//		arrowImg.show();
//		arrowImg1.hide();		
//
//	//var LedImg1=paper.image("images/offDiode.png", 285, 95, 85, 85);
////		var arrowImg11=paper.rect(x+389,y+7,40, 45).attr({'stroke':'#fff','fill':'#fff'});
//	
//		setRedflag=false;
////		
//		if(switchConfigSelection == 1){
//			inputPt.hide();
//			outputPt.hide();
//		switchTopImg.animate({transform: ['t',0, 0]}, 100);
//		}else{
//			setRedflag=false;
//			inputPt.show();
//			outputPt.show();
//		switchTopImg.animate({transform: ['t',0, 0]}, 100);	
//		}
//		
//	$("#plot").prop("hidden",false);
//	start(interval_plot1,onTime1,offTime1);
//		//reset();		
//	}else{
////		toastr.warning("Please Check Connection Status.");
//		showSwal('Please Check Connection Status.','error');
//	}
//	
// })
//var coorectflg = 0;
//var	wrongflg = 0;
// 
// 
//  // Draw points
//  var points = [
//    paper.circle(x+268, y+270, 5).attr({fill: "red", stroke: "black", "stroke-width": 2}), 
//    paper.circle(x+210, y+274, 0).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d13
//    paper.circle(x+390, y+270, 5).attr({fill: "red", stroke: "black", "stroke-width": 2}),
//    paper.circle(x+420, y+270, 5).attr({fill: "red", stroke: "black", "stroke-width": 2}),
//	paper.circle(x+305, y+118, 5).attr({fill: "blue", stroke: "black", "stroke-width": 2}),
//	paper.circle(x+232, y+133, 0).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d2
//	paper.circle(x+232, y+148, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d3
//	paper.circle(x+232, y+163, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d4
//	paper.circle(x+232, y+177, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d5
//	paper.circle(x+232, y+195, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d6
//	paper.circle(x+232, y+214, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d7
//	paper.circle(x+232, y+232, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}) //d8
////	paper.circle(x+210, y+220, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d9
////	paper.circle(x+210, y+232, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d10
////	paper.circle(x+210, y+245, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d11
////	paper.circle(x+210, y+258, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d12
//  ];
//
//  // Assign IDs
//  points.forEach((p, i) => p.data("id", "P" + (i+1)));
//
//  var firstPoint = null;
//  var connections = [];
//  var  correctSetB =[];
//  var correctSetA = [];	
//  var inputPt , outputPt ; 
////  // ✅ Allowed correct connections
////  var correctConnections = [
////    ["P1", "P2"] , // only P1-P2 is correct
////    ["P3", "P4"],
////    ["P5", "P6"]
////  ];
//
//
//  
//    // ✅ Two different arrays of correct connections
//    
//   if(selectedOutput == 1){
//	    correctSetA = [
//   		 ["P1", "P6"], // d9 to ouput to p1 switch
//   		 ["P3", "P4"] //led to register
//  		];
//  		
//   }else if (selectedOutput == 2){
//	   correctSetA = [
//		["P1", "P7"], // d10 to ouput 
//	    ["P3", "P4"] //led to register
//  		];
//  		outputPt =	paper.circle(x+232, y+148, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2})
//   } else if (selectedOutput == 3){
//	   correctSetA = [
//		["P1", "P8"], // d11 to ouput 
//	    ["P3", "P4"] //led to register
//  		];
//  		outputPt = paper.circle(x+232, y+163, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2})
//   } 
//   else if (selectedOutput == 4){
//	   correctSetA = [
//		["P1", "P9"], // d13 to ouput 
//	    ["P3", "P4"] //led to register
// 		 ]	;
// 		outputPt = paper.circle(x+232, y+177, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2})
//   } else if (selectedOutput == 5){
//	   correctSetA = [
//		["P1", "P10"], // d3 to ouput 
//	    ["P3", "P4"] //led to register
// 		 ]	;
// 		outputPt = paper.circle(x+232, y+195, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2})
//   }else if (selectedOutput == 6){
//	   correctSetA = [
//		["P1", "P11"], // d4 to ouput 
//	    ["P3", "P4"] //led to register
// 		 ]	;
// 		outputPt = paper.circle(x+232, y+214, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2})
//   }else if (selectedOutput == 7){
//	   correctSetA = [
//		["P1", "P12"], // d5 to ouput 
//	    ["P3", "P4"] //led to register
// 		 ]	;
// 		outputPt = paper.circle(x+232, y+232, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2})
//   }
//  
//	
//
//	  if(selectedValue == 1){
//		  correctSetB = [ ["P5", "P6"] // d2 to switch p5
//		 ];
//	  }else if(selectedValue == 2){
//		  
//		  correctSetB = [ ["P5", "P7"] // d3 to switch p5
//		  ];
//		 inputPt= paper.circle(x+232, y+148, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2})
//	  }else if(selectedValue == 3){
//		 
//		  correctSetB = [ ["P5", "P8"] // d4 to switch p5
//		  ];
//		 inputPt = paper.circle(x+232, y+163, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2})
//	  }else if(selectedValue == 4){
//	
//		  correctSetB = [ ["P5", "P9"] // d5 to switch p5
//		  ];
//		inputPt =  paper.circle(x+232, y+177, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2})
//	  }else if(selectedValue == 5){
//		 
//		  correctSetB = [ ["P5", "P10"] // d6 to switch p5
//		  ];
//		inputPt =  paper.circle(x+232, y+195, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2})
//	  }else if(selectedValue == 6){
//		 
//		  correctSetB = [ ["P5", "P11"] // d7 to switch p5
//		  ];
//		inputPt=  paper.circle(x+232, y+214, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2})
//	  }else if(selectedValue == 7){
//		 
//		  correctSetB = [ ["P5", "P12"] // d8 to switch p5
//		  ];
//		 inputPt = paper.circle(x+232, y+232, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2})
//	  }
//
//
//inputPt.hide();
//outputPt.hide();
//  function showConnections() {
////    document.getElementById("output").textContent = "Connections:\n" + 
////      connections.map(c => c.id1 + " ↔ " + c.id2 + (c.correct ? " ✅" : " ❌")).join("\n");
//	console.log(	"Connections:\n" + 
//     connections.map(c => c.id1 + " ↔ " + c.id2 + (c.correct ? " ✅" : " ❌")).join("\n"));
//       updateSummary();
//  }
//
//  function showMessage(msg, color="red") {
//    var msgBox = document.getElementById("message");
//    msgBox.style.color = color;
//    msgBox.textContent = msg;
//    setTimeout(() => msgBox.textContent = "", 2000);
//  }
//  
//    // ✅ Update summary counts
//  function updateSummary() {
//    let correctCount = connections.filter(c => c.correct).length;
//    let wrongCount = connections.filter(c => !c.correct).length;
//    coorectflg = correctCount;
//    wrongflg = wrongCount;
//
//   console.log(
//      "✅ Correct connections: " + correctCount + "<br>" +
//      "❌ Wrong connections: " + wrongCount);
//  }
//
////  function isCorrectConnection(id1, id2) {
////    return correctConnections.some(c =>
////      (c[0] === id1 && c[1] === id2) || (c[0] === id2 && c[1] === id1)
////    );
////  }
//
//  // check if connection belongs to Set A or Set B
//  function checkConnectionSet(id1, id2) {
//    let inSetA = correctSetA.some(c =>
//      (c[0] === id1 && c[1] === id2) || (c[0] === id2 && c[1] === id1)
//    );
//    if (inSetA) return "A";
//
//    let inSetB = correctSetB.some(c =>
//      (c[0] === id1 && c[1] === id2) || (c[0] === id2 && c[1] === id1)
//    );
//    if (inSetB) return "B";
//
//    return null; // wrong
//  }
//
//  // Function to draw a curved path between two points
//  function drawCurve(x1, y1, x2, y2) {
//    var midX = (x1 + x2) / 2;
//    var midY = (y1 + y2) / 2 - 50; // curve height
//    return `M${x1},${y1} Q${midX},${midY} ${x2},${y2}`;
//  }
//	
//
//  function attachClick(point) {
//    point.click(function () {
//      if (firstPoint === null) {
//        firstPoint = this;
//        this.attr({stroke: "orange", "stroke-width": 4});
//      } else {
//        if (firstPoint !== this) {
//          var id1 = firstPoint.data("id");
//          var id2 = this.data("id");
//
//          // Check duplicate
//          var exists = connections.some(c =>
//            (c.id1 === id1 && c.id2 === id2) || (c.id1 === id2 && c.id2 === id1)
//          );
//          if (exists) {
////            showMessage("⚠ Duplicate connection between " + id1 + " and " + id2);
//          } else {
//            // Draw CURVED line instead of straight
//            var path = drawCurve(firstPoint.attr("cx"), firstPoint.attr("cy"), this.attr("cx"), this.attr("cy"));
//            var line = paper.path(path)
//                            .attr({stroke: "black", "stroke-width": 2, cursor: "pointer"});
//
//            // ✅ Send line behind circles
//            line.toBack();
//
//            // Validate connection
////            var correct = isCorrectConnection(id1, id2);
//			 // Validate connection against Set A / Set B
//            var set = checkConnectionSet(id1, id2);
//            var correct = (set !== null);
//            if (correct) {
//              line.attr({stroke: "green", "stroke-width": 3});
//             
//             
////              showMessage("✅ Correct connection: " + id1 + " ↔ " + id2, "green");
//		
//            } else {
//				
//              line.attr({stroke: "red", "stroke-width": 3}); //green 
////              showMessage("❌ Wrong connection: " + id1 + " ↔ " + id2, "red");
//            }
//
//            // Store connection
//            var conn = {id1: id1, id2: id2, line: line, correct: correct};
//            connections.push(conn);
//
//            // Allow deletion on click
//            line.click(function () {
//              line.remove();
//              connections = connections.filter(c => c !== conn);
//              showConnections();
////              showMessage("❌ Connection " + id1 + " ↔ " + id2 + " deleted");
//            });
//          }
//          showConnections();
//        }
//        // Reset highlight
//        firstPoint.attr({stroke: "black", "stroke-width": 2});
//        firstPoint = null;
//      }
//    });
//  }
//
//  // Attach clicks
//  points.forEach(p => attachClick(p));
// 
// function disableAllPoints() {
//  points.forEach(p => {
//    p.unclick(); // removes click event
//    p.attr({cursor: "default"}); // optional: reset cursor
//  });
//}
//
//
//	next.click(function(){
//		resultJson.mimic = wrongAttempts;
//			 $('#plot').prop('hidden',true);
//			  showQuestions();
//		
//	})
//



}
