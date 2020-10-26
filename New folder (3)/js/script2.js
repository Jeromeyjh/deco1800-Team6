$(document).ready(function(){
	var qldData = JSON.parse(localStorage.getItem("qldData"));

	if (qldData) {
		console.log("Source: localStorage");
		iterateRecords(qldData);
	} else {
		console.log("Source: ajax call");
		var data = {
			resource_id: 'a7a1a283-e645-4f2e-b83e-3d344ea676c9', // the resource id
			limit: 10000, // get 10000 results
		}
		$.ajax({
			url: 'https://www.data.qld.gov.au/api/3/action/datastore_search',
			data: data,
			dataType: 'jsonp',
			cache: true,
			success: function(data) {
				localStorage.setItem("qldData", JSON.stringify(data));
				iterateRecords(data);
			}
		});
	}
});


function iterateRecords(data) {
	console.log(data);
	$.each(data.result.records, function(recordKey, recordValue) {
		var recordNo = recordKey;
		var region = recordValue["Region"]; 
		var robbery= recordValue["Armed Robbery"];
		var years = recordValue["Month Year"];
					
		if(region && years) {
						
			if(recordNo < 6) { // Only get records from the 19th century
						
				$("#records").append(
					$('#table').append(
						$("<tr>").append(
							$('<td>').text(recordNo),
							$('<td>').text(region),
							$('<td>').text(years),	
							$('<td>').text(robbery,
						)							
					)
				))
			}
						
		}
	});
};