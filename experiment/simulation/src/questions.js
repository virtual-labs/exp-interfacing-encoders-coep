	
	$(function() {
		showQuestions = function() {
		
			var flag = false;
			var myRadio = null;
			dataQues = {};
			timerMasterJson.mimic = $("#counter").text();
			seconds = 0;
			 updateCounter();
			 $("#centerText1").html('QUESTIONS');

			$("#canvas-div").html('');
			
				

			var questions = '';
			questions += ''
				+ '<div id = "questionDiv">'

			for (var i = 0; i < QuestionsJSON.data["SEC"].length; i++) {

				for (var j = 0; j < QuestionsJSON.data["SEC"][0].QUES.length; j++) {

					questions += '<div class="col-md-12">'
						+ '<br><span class="queno">Question No : ' + (i + 1) + '</span>'
						+ '<br><div class="queTitle">'

						+ QuestionsJSON.data["SEC"][i].QUES[j].QC
						+ '</div>'

					for (var k = 0; k < QuestionsJSON.data["SEC"][i].QUES[j].ANS.length; k++) {

						questions += '<div>'
							+ '<div class="ansTitle col-md-6">'

							+ "<input class='radioType'  name='radio-" + i + "' id='" + i + "' ANSID='" + QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].ANSID + "' type='radio'"
							+ "' value='"
							+ QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].content
							+ "' >"
							+ '<p style="margin: -20px 0 8px 29px;font-size: 18px;">'
							+ QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].content
							+ '</p>'

							+ '</div>'
							+ '</div>'
					}
					questions += '</div>'
				}
			}

			questions += '<div class="buttonDiv">'
				+ '<button  class="btn btn-danger" id="testSubmit" >Submit Test</button>'
				
				
//				+ '<button id="mimicSubmit" class=" btn btn-danger nextLevelBtn" hidden>Next Level</button>'
		
				
		

			$("#canvas-div").html(questions);

			$('#testSubmit').on('click', function() {		
				$("body").css("padding","0px 0px 0px 0px");
					var arr = [];
					
					for (var i = 0; i < QuestionsJSON.data["SEC"].length; i++) {

						var qid = $('input[name=radio-' + i + ']').attr(
							'id');

						var ansId = $('input[name=radio-' + i + ']:checked').attr(
							'ANSID');

						myRadio = $(
							'input[name=radio-' + i + ']:checked')
							.val();

						if (myRadio == null) {
							flag = flag && false;
							showSwal("Please attempt all the questions","warning");
						
							$("body").css("padding","0px");
							
							break;
						}
						arr.push({
							"QID": qid,
							"ANS": myRadio,
							"ANSId": ansId
						});
					}

					var ansCount = 0;

					if (myRadio != null) {
						for (var i = 0; i < arr.length; i++) {
							if (arr[i].ANSId == "true") {
								ansCount++;
							}
						}
						
						 resultJson.questions = ansCount;
//						 console.log(data);
						 
//						 $("#modelMsg").html("<b class='boldTextGreen'>Test Submitted Successfully . Correct Answers Are : " + ansCount+"</b>");
//						alert("Test Submitted Successfully . Correct Answers Are : " + ansCount);
						showSwal('Test Submitted Successfully','info');
						
						result();
						
						
		   					
					}

						
			});
			
		
			}
				
	});
