

QuestionsJSON = {
		"data": {
			"SEC": [{

				"QUES": [{
					
					"QC": "When a switch is said to be press-to-high, it means:",
					"ANS": [{
						"ANSID": true,
						"content": "Output goes HIGH when switch is pressed"
					}, {
						"ANSID": false,
						"content": "Output goes LOW when switch is pressed"
					}, {
						"ANSID": false,
						"content": "LED always glows when pressed"
					},{
						"ANSID": false,
						"content": "Output stays floating"
					}]
				}]
			}, {

				"QUES": [{
					
					"QC": "In a press-to-low switch, pressing the switch will:",
					"ANS": [{
						"ANSID": false,
						"content": "Pull the signal to Vcc"
					}, {
						"ANSID": true,
						"content": "Pull the signal to GND"
					}, {
						"ANSID": false,
						"content": "Keep output floating"
					}, {
						"ANSID": false,
						"content": "Toggle LED automatically"
					}]
					
				}]
			},{

				"QUES": [{
					
					"QC": "A sourcing input requires the external device to:",
					"ANS": [{
						"ANSID": true,
						"content": "Sink current"
					}, {
						"ANSID": false,
						"content": "Source current"
					}, {
						"ANSID": false,
						"content": "Toggle voltage"
					}, {
						"ANSID": false,
						"content": "Switch polarity"
					}]
					
				}]
			},{

				"QUES": [{
					
					"QC": "A sinking input requires the external device to",
					"ANS": [{
						"ANSID": false,
						"content": "Float the voltage"
					}, {
						"ANSID": true,
						"content": "Source current"
					}, {
						"ANSID": false,
						"content": "Provide resistance"
					}, {
						"ANSID": false,
						"content": "Pull to ground only"
					}]
					
				}]
			},{

				"QUES": [{
					
					"QC": "In a sourcing output, the current flows:",
					"ANS": [{
						"ANSID": false,
						"content": "From load to output"
					}, {
						"ANSID": false,
						"content": "Only to ground"
					}, {
						"ANSID": true,
						"content": "From output to load"
					}, {
						"ANSID": false,
						"content": "Only to Vcc"
					}]
					
				}]
			},{

				"QUES": [{
					
					"QC": "In a sinking output, the current flows:",
					"ANS": [{
						"ANSID": false,
						"content": "From Vcc into output directly"
					}, {
						"ANSID": true,
						"content": "From load into the output and then to ground"
					}, {
						"ANSID": false,
						"content": "From output to Vcc"
					}, {
						"ANSID": false,
						"content": "Between two outputs"
					}]
					
				}]
			}
			]
		}


	}



var ANSWERJSON = {
			
				"0" : "All the points mentioned",
				"1" : "Set the standard output for the required limits of process parameter",
				"2" : "Set majority of the points of the transmitter output in the operating region",
				"3" : "Pump discharge flow and Outlet flow",
				"4" : "Nothing is required to be changed",
				"5" : "Nil"
				
			
}