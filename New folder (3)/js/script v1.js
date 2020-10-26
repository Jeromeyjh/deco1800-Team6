//function getCrime(crimeName) {
//	if(crimeName) {
//		return crimeName.match(/[\d]{4}/); // This is regex 
//	}
//}


function iterateRecords(data) {
	var name;

	console.log(data);
	// var $table = $("#records").append($('#table'));
	var $headRow = $('#table tr');
	$.each(data.result.fields, function (recordKey, recordValue) {
		name = recordValue["id"];
		var recordNo = recordKey

		if (name){

			if (recordNo < 1000) { // Only get records from the 19th century
					$headRow.append(
						$('<th>').text(name),
					)
			
			}
		}
	});

	var totalFieldsNum = data.result.fields.length;


	$.each(data.result.records, function (recordKey, recordObject) {
		var allCurrentValue = new Array(totalFieldsNum);
		$.each(data.result.fields, function (fieldIndex, fieldValue) {
			var fieldName = fieldValue["id"];
			var currentValue = recordObject[fieldName];
			allCurrentValue[fieldIndex] = currentValue;
		});

		var $currentRow = $('<tr>').appendTo($("#table"));
		$.each(allCurrentValue, function(index, value) {
			$currentRow.append($('<td>').text(value));
		})
	});
};





$(document).ready(function () {
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
			success: function (data) {
				localStorage.setItem("qldData", JSON.stringify(data));
				iterateRecords(data);
			}
		});
	}
});