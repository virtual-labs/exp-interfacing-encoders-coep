function updateDateTime() {
      const now = new Date();
      const formatted = now.toLocaleString(); // e.g. "5/5/2025, 10:23:45 AM"
      $('#dateTime').text(formatted);
    }



function result(){
	console.log("result");
	console.log(resultJson);
	timerMasterJson.question=$("#counter").text();
	console.log(timerMasterJson);
	seconds = 0;
	  updateCounter();
	$("#simDemo,#procedure,#counter,#tagDetails,#refresh").prop("hidden",true);
	$("#report").prop("hidden",false);
//	$("#Header").html("<center><span >Inquiry, Quotation, Comparative statement, Purchase orders</span></center>");
	$("#Header").prop("hidden", true);
	
//	var enqAdd =resultJson.flg+resultJson.flg3+resultJson.flg2+resultJson.flg4+resultJson.flg5;
//	console.log(enqAdd);
//		var enquiey1=parseFloat(enqAdd);
//	var quatAdd = resultJson.Qflg1+resultJson.Qpflg1+
//	resultJson.Qsvflg1+ resultJson.Qsflg1+resultJson.Qfflg1;
//	console.log(quatAdd);
//	
//	
//	var quat1=parseFloat(quatAdd);
//	var piping=parseFloat((5/enqAdd)*100);
//	var instr=parseFloat((15/quatAdd)*100);
//	var comp = 100;
//	var purchase = 100;
//	var total = 0;
	
	var configCount = resultJson.configuration;
	var mimicCount = resultJson.mimic;
	var question = resultJson.questions;
	
	var configPer = parseFloat((1/configCount)*100);
	var mimicPer = parseFloat((1/mimicCount)*100);
	var quesPer = parseFloat((question/6)*100)
	
	htm=''
	+'<div class="container-fluid">'
	  +`<div class="row" id="divMis" style="background-color: #2e3539; padding: 10px; display: flex; justify-content: center;">
  <div style="display: flex; align-items: center; gap: 10px; white-space: nowrap;">
    <span style="color: white;font-weight: bold;">Enter Name:</span>
    <input type="text" id="nameInput" style="color: #000; padding: 5px; max-width: 200px;">
<label id="dateTime" style="color:#fff;"></label>

  </div>
</div>`
	+'<div class="container-fluid">'
//	 +' <div class="row titlePart" id="" ><center><span >Inquiry, Quotation, Comparative statement, Purchase orders</span></center></div>' 
	+' <!-- Title -->'

	+'  <h3 class="text-center heading">Interfacing of LED and Switch</h3>'
	
	+`<div>
	 `

	+' <!-- Competency Table -->'
	+' <div class="box">'
	+' <div class="row">'
	+'  <div class="col-sm-6">'
	+' <table class="table table-bordered status-table">'
	+'    <thead>'
	+'     <tr>'
	+'        <th>Competency </th>'
	+'        <th>Status</th>'
	+'        <th>Time</th>'
	+'      </tr>'
	+'    </thead>'
	+'   <tbody>'
	+'      <tr>'
	+'       <td><b>Configuration</b></td>'
	+'        <td id="piping">'
	
	+'		</td>'
	+'        <td id="pipingTimer">'
	
	+'       </td>'
	+'     </tr>'
	+'      <tr>'
	+'        <td> <b>Connections</b></td>'
	+'        <td id="instr">'

	+'		</td>'
    +'        <td id="quatTimer">'
	
	+'       </td>'
	+'      </tr>'

	+'       <tr>'
	+'        <td><b>Questions</b></td>'
	+'        <td id="comp">'
	
    +'		</td>'
  +'        <td id="compareTimer">'
	
	+'       </td>'
   +'     </tr>'
   

          
    +'    </tbody>'
    +'  </table>'
    +' </div>'
    +' <div class="col-sm-6" id="graphDiv">'
	 
    +' </div>'
    +'</div>'
    +'</div>'
  
    +'   <!-- First Row -->'
    +'  <div class="row">'
    +'   <div class="col-md-4" >'
    +'     <div class="box">'
    +'      <h5 class="section-title sectionStyle" >Configuration</h5>'
    +'       <div class="table-container">'
    +'        <table style="border-style: solid;">'
    +'           <tr class="trStyle">'
    +'            <th>Expected</th>'
    +'             <th>Actual</th>'
    +'          </tr>'
    +'           <tr>'
    +'           <td><b> <center><strong class="correct">1</strong> </center></b></td>'
	+'           <td><b> <center><strong class="wrong">'+configCount+'</strong> </center></b></td>'
	  +'         </table>'
    +'      </div>'
    +'    </div>'
    +'   </div>'
    +'  <div class="col-md-4" >'
    +'    <div class="box">'
    +'     <h5 class="section-title sectionStyle" >Connections</h5>'
    +'     <div class="table-container">'
	+'       <table style="border-style: solid;">'
	+'          <tr class="trStyle">'
	+'            <th>Expected</th>'
	+'            <th>Actual</th>'
	+'          </tr>'
	+'          <tr>'
	 +'						  <td><b class="correct">1</b></td>'
	    +'                       <td><b class="wrong">'+mimicCount+'</b></td>'
	  	+'          </tr>'
	+'        </table>'
	+'      </div>'
	+'     </div>'
	+'   </div>'
	    +'  <div class="col-md-4" >'
    +'    <div class="box">'
    +'     <h5 class="section-title sectionStyle" >Questions</h5>'
    +'     <div class="table-container">'
	+'       <table style="border-style: solid;">'
	+'          <tr class="trStyle">'
	+'            <th>Expected</th>'
	+'            <th>Actual</th>'
	+'          </tr>'
	+'          <tr>'
	 +'						  <td><b class="correct">6</b></td>'
	    +'                       <td><b class="wrong">'+question+'</b></td>'
	  	+'          </tr>'
	+'        </table>'
	+'      </div>'
	+'     </div>'
	+'   </div>'
	
//	+' <!-- First Row -->'
//	+'<!-- <div class="row">'
//	+'  <div class="col-md-3">'
//	+'  </div>'
//	+' <div class="col-md-6">'
//	+'   <div class="box">'
//	+'     <h5 class="section-title sectionStyle" >Comparision and Purchase order</h5>'
//	+'     <div class="table-container">'
//	+'       <table style="border-style: solid;">'
//	+'         <tr class="trStyle">'
//	+'           <th>Expected</th>'
//	+'           <th>Actual</th>'
//	+'         </tr>'
//	+'         <tr>'
//	 +'						  <td><b class="correct">2</b></td>'
// +'                       <td><b class="wrong">2</b></td>'
// +'         </tr>'
//	+'       </table>'
//	+'     </div>'
//	+'   </div>'
//	+' </div>'
//	+'  <div class="col-md-3">'
//	+'  </div>'
//	+' </div> -->'

	+'<!-- Graphs Section -->'
	+'<div class="row">'
    +'</div>'
    +'<!-- Pie Chart Section -->'
    +'<div class="row">'
      
    +'</div>'


    $("#mainDiv").html(htm);
	


	if(configPer>=60){
		 var str=''
	 +'	     	<div class="alert alert-success attainedText">'
	+'    			 <center><strong> Attained</strong> </center>'
	+'     		 </div>'
	 $("#piping").html(str);
		 var str1=''
	+'	     	<div class="alert alert-success attainedText">'
	+'    	   <center><strong> '+timerMasterJson.configuration+'</strong> </center>'
	+'     		 </div>'
	 $("#pipingTimer").html(str1); 
		     
	}
	else
		{
		 var str=''
			 +' <div class="alert alert-danger attainedText">'
		    +'  <center><strong>Not Attained</strong> </center>'
		     +'  </div>'
		     $("#piping").html(str);
		 var str1=''
				+'	     	<div class="alert alert-danger attainedText">'
				+'    	   <center><strong> '+timerMasterJson.configuration+'</strong> </center>'
				+'     		 </div>'
							     $("#pipingTimer").html(str1); 
		 
								
		}
	if(mimicPer>=60){
		 var str=''
	 +'	     	<div class="alert alert-success attainedText">'
	+'    			 <center><strong> Attained</strong> </center>'
	+'     		 </div>'
		     $("#instr").html(str);
		 var str1=''
				+'	     	<div class="alert alert-success attainedText">'
				+'    	   <center><strong> '+timerMasterJson.mimic+'</strong> </center>'
				+'     		 </div>'
							     $("#quatTimer").html(str1); 
		 	 
		     
	}
	else
		{
		 var str=''
			 +' <div class="alert alert-danger attainedText">'
		    +'  <center><strong>Not Attained</strong> </center>'
		     +'  </div>'
		     $("#instr").html(str);
		 var str1=''
				+'	     	<div class="alert alert-danger attainedText">'
				+'    	   <center><strong> '+timerMasterJson.mimic+'</strong> </center>'
				+'     		 </div>'
							     $("#quatTimer").html(str1); 
		}
		
		if(quesPer>=60){
				 var str=''
			 +'	     	<div class="alert alert-success attainedText">'
			+'    			 <center><strong> Attained</strong> </center>'
			+'     		 </div>'
				     $("#comp").html(str);
				 var str1=''
						+'	     	<div class="alert alert-success attainedText">'
						+'    	   <center><strong> '+timerMasterJson.question+'</strong> </center>'
						+'     		 </div>'
									     $("#compareTimer").html(str1); 
				 	 
				     
			}
			else
				{
				 var str=''
					 +' <div class="alert alert-danger attainedText">'
				    +'  <center><strong>Not Attained</strong> </center>'
				     +'  </div>'
				     $("#comp").html(str);
				 var str1=''
						+'	     	<div class="alert alert-danger attainedText">'
						+'    	   <center><strong> '+timerMasterJson.question+'</strong> </center>'
						+'     		 </div>'
									     $("#compareTimer").html(str1); 
				}
				

	
//	if(startPer>=100 && datasheetPer>=100 && trendsPer>=100){
//		 var str=''
//	 +'	     	<div class="alert alert-success attainedText">'
//	+'    			 <center><strong> Attained</strong> </center>'
//	+'     		 </div>'
//		     $("#simulation").html(str);
//	var str1=''
//	+'	     	<div class="alert alert-success attainedText">'
//	+'    	   <center><strong> '+timerMasterJson.mimic+'</strong> </center>'
//	+'     		 </div>'
//	 $("#simulationTimer").html(str1); 
//	}
//	else
//		{
//		 var str=''
//			 +' <div class="alert alert-danger attainedText">'
//		    +'  <center><strong>Not Attained</strong> </center>'
//		     +'  </div>'
//		     $("#simulation").html(str);
//		 var str1=''
//				+'	     	<div class="alert alert-danger attainedText">'
//				+'    	   <center><strong> '+timerMasterJson.mimic+'</strong> </center>'
//				+'     		 </div>'
//							     $("#simulationTimer").html(str1); 
//		}
	Highcharts.chart('graphDiv', {
		credits: { enabled: false},
	    chart: {
	        plotBackgroundColor: null,
	        plotBorderWidth: null,
	        plotShadow: false,
	        type: 'pie',
	        backgroundColor: '#f0f0f0'
	    },
		exporting: { enabled: false },
		credits: { enabled: false},
	    title: {
	        text: ' ',
	        align: 'left'
	    },
	    tooltip: {
	    	 enabled: false,
        style: {
            fontFamily: 'Arial, sans-serif', // Set tooltip font family
            fontSize: '12px',                    // Set tooltip font size
            color: '#000',                    // Set tooltip text color
            fontWeight: 'bold',                  // Optional: bold text
            backgroundColor: '#000'           // Optional: tooltip background color
        },
        formatter: function () {
            return `<b>${this.point.name}</b>: ${this.y}%`;
        }
    },
	    accessibility: {
	        point: {
	            valueSuffix: '%'
	        }
	    },
	    plotOptions: {
	        pie: {
	            dataLabels: {
	                enabled: true,
	                style: {
	                    color: '#000',
//	                font-family: 'Arial, sans-serif',
	                fontSize: '14px',
	                /* font-weight: bold; */
	                fill: '#000',
	                },
	                formatter: function () {
	                    return `<span>${this.point.name}: ${this.percentage.toFixed(2)}%</span>`;
	                }
	            }
	        }
	    },

	    series: [{
	        name: '',
	        data: [
	            { name: 'Configuration', y: configPer },
	            { name: 'Connection', y: mimicPer },
	            
	            { name: 'Questions', y:  quesPer}
				
	          
	        ]
	    }]
	});
	
	updateDateTime();
	
$("#report").click(function() {
		tmp = $("#nameInput").val();
		if(tmp != ""){
			
			  // Restore value from localStorage when page loads
			  const savedName = localStorage.getItem("username");
			  if (savedName) {
			    $('#nameInput').val(savedName);
			  }
 
			  // Save input on change
			  $('#nameInput').on('input', function() {
			    localStorage.setItem("username", $(this).val());
			  });
			
 
			console.log("click triggred");
 
			const button = document.getElementById("report");
			button.hidden = true;
 
			html2canvas(document.querySelector("#mainDiv"), {
				useCORS: true,
				allowTaint: false,
				backgroundColor: null
			}).then(canvas => {
				let link = document.createElement('a');
				link.download = 'report.png';
				link.href = canvas.toDataURL("image/png");
				link.click();
//				$("#btnNext").prop("hidden", false);
			}).catch(err => {
				console.error("Screenshot failed:", err);
			}).finally(() => {
				button.hidden = true;
			});
			$("#divMis").prop("hidden",true);
			
			}else{
				alert("Enter MIS Number");
			}
	});
}
