function getCrime(crimeName) {
	if(crimeName) {
		return crimeName.match(/[\d]{4}/); // This is regex 
	}
}

function iterateRecords(data) {

	console.log(data);

	$.each(data.result.records, function(recordValue) {

		var recordRegion = recordValue["Region"];
		var crimeName = getCrime(recordValue["Homicide (Murder)"]);
		var recordDescription = recordValue["Month Year"];

		if(recordRegion && crimeName &&  recordDescription) {
				$(".record").append(
					$('h2').text(crimeName),
					$('h3').text(recordRegion),
					$('h3').text(recordDescription)					
				);
		}

		setTimeout(function () {
			$("body").addClass("loaded");
		}, 20);

		$("#filter-count strong").text($(".record:visible").length);

		$("#filter-text").keyup(function(event) {
			var searchTerm = $(this).val();
			console.log(searchTerm);

			$(".record").hide();
			$(".record:contains('" + searchTerm + "')").show();

			$("#filter-count strong").text($(".record:visible").length);
		});

	});

}

$(document).ready(function() {

	var slqData = JSON.parse(localStorage.getItem("slqData"));

	if (slqData) {
		console.log("Source: localStorage");
		iterateRecords(slqData);
	} else {
		console.log("Source: ajax call");
		var data = {
			resource_id: "a7a1a283-e645-4f2e-b83e-3d344ea676c9",
			limit: 50
		}

          $.ajax({
            url: 'https://www.data.qld.gov.au/api/3/action/datastore_search',
            data: data,
            dataType: 'jsonp',
            success: function(data) {
              alert('Total results found: ' + data.result.total)
            }
          });

	}

});