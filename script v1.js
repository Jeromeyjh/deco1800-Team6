function getCrime(crimeName) {
	if(crimeName) {
		return crimeName.match(/[\d]{4}/); // This is regex 
	}
}


function iterateRecords(data) {
	var name; 
	/*var recordnumber; 
	var x; 	
		for(x, in name){
			var crimeAmount = recordValue[x];
			text += person[x] + " ";
		}
		document.getElementById("demo").innerHTML = text;*/
	console.log(data);
/*	$.each(data.result.fields, function(recordKey, recordValue) {
		name = recordValue["id"];
		var recordNo = recordKey
	
		if(name) {
	
			if(recordNo < 1000) { // Only get records from the 19th century
	
				$("#records").append(
					$('#table').append(
						$('<th>').text(name),	
					)
				)
			}
		}	
	}); */


	$.each(data.result.records, function(recordKey, recordValue) {
		var recordNo = recordKey;
		recordnumber = recordValue;
		var region = recordValue["Region"]; 
		var crimeAmount = recordValue[name];
		var years = recordValue["Month Year"];
		var homicide = recordValue["Homicide (Murder)"];
		var Other_Homicide = recordValue["Other Homicide"];
		var Attempted_Murder =recordValue["Attempted Murder"];
		var Conspiracy = recordValue["Conspiracy to Murder"];
		var Manslaughter =recordValue["Manslaughter (excl. by driving)"];
		var driving_death =recordValue["Driving Causing Death"];
		var Unlawful= recordValue["Manslaughter Unlawful Striking Causing Death"];
		var assault = recordValue["Assault"];
		var Grievous = recordValue["Grievous Assault"]; 
		var sassualt=recordValue["Serious Assault"];
		var assault_other = recordValue["Serious Assault (Other)"];
		var commona= recordValue["Common Assault'"];
		var sexualoffences = recordValue["Sexual Offences"];
		var Attempted= recordValue['Rape and Attempted Rape'];
		var othersexual= recordValue["Other Sexual Offences"];
		var Robbery = recordValue["Robbery"];
		var Armed= recordValue["Armed Robbery"];
		var unarmed = recordValue["Unarmed Robbery"];
		var Offences =recordValue["Offences Against the Person"];
		var Kidnapping= recordValue["Kidnapping & Abduction etc."];
		var Extortion = recordValue["Extortion"];
		var Stalking = recordValue["Stalking"];
		var Acts = recordValue["Life Endangering Acts"];
		var person = recordValue["Offences Against the Person"];
		var Entry= recordValue["Unlawful Entry"];
		var Dwelling = recordValue["Unlawful Entry With Intent - Dwelling"];
		var Unlawful_Violence = recordValue['Unlawful Entry Without Violence - Dwelling'];
		var Entry_With = recordValue["Unlawful Entry With Violence - Dwelling"];
		var Unlawful_Entry_Shop = recordValue["Unlawful Entry With Intent - Shop"];
		var Unlawful_Intent_Other = recordValue["Unlawful Entry With Intent - Other"]; 
		var Arson = recordValue["Arson"];
		var Other_Property = recordValue["Other Property Damage"];
		var Unlawful_Use = recordValue["Unlawful Use of Motor Vehicle"];
		var Other_Theft = recordValue["Other Theft (excl. Unlawful Entry)"]; 
		var Stealing = recordValue["Stealing from Dwellings"];
		var Vehicles = recordValue["Vehicles (steal from/enter with intent)"];
		var Other_Stealing = recordValue["Other Stealing"];
		var Fraud = recordValue["Fraud"];
		var Fraud_Computer = recordValue["Fraud by Computer"];
		var Fraud_Cheque = recordValue["Fraud by Cheque"];
		var Fraud_CreditCard = recordValue["Fraud by Credit Card"];
		var Identity_Fraud = recordValue["Identity Fraud"];
		var Other_Fraud = recordValue["Other Fraud"];
		var Handling_Stolen_Goods = recordValue["Handling Stolen Goods"];
		var Suspected_Stolen = recordValue["Possess Property Suspected Stolen"];
		var Receiving_Stolen_Property = recordValue["Receiving Stolen Property"];
		var Possess = recordValue["Possess etc. Tainted Property"];
		var Handling_Stolen_Goods = recordValue["Other Handling Stolen Goods"];
		var Offences_Against_Property = recordValue["Offences Against Property"];
		var Drug_Offences = recordValue["Drug Offences"];
		var Trafficking_Drugs = recordValue["Trafficking Drugs"];
		var Possess_Drugs = recordValue["Possess Drugs"];
		var Produce_Drugs = recordValue["Produce Drugs"];
 		var Sell_Supply_Drugs = recordValue["Sell Supply Drugs"];
		var Other_Drug_Offences = recordValue["Other Drug Offences"];
		var Prostitution_Offences = recordValue["Prostitution Offences"];
		var Purpose_Prostitution = recordValue["Found in Places Used for Purpose of Prostitution Offences"];
		var Used_for_Prostitution = recordValue["Have Interest in Premises Used for Prostitution Offences"];
		var Knowingly_Participate_Prostitution = recordValue["Knowingly Participate in Provision Prostitution Offences"];
		var Public_Soliciting = recordValue["Public Soliciting"];
		var Procuring_Prostitution = recordValue["Procuring Prostitution"];
		var Permit_Minor = recordValue["Permit Minor to be at a Place Used for Prostitution Offences"]; 
		var Advertising_Prostitution =recordValue["Advertising Prostitution"];
		var Other_Prostitution_Offences = recordValue["Other Prostitution Offences"];
		var Liquor =recordValue["Liquor (excl. Drunkenness)"];
		var Gaming_Racing = recordValue["Gaming Racing & Betting Offences"];
		var Domestic_Violence = recordValue["Breach Domestic Violence Protection Order"];
		var Trespassing_Vagrancy = recordValue["Trespassing and Vagrancy"];
		var Weapons_Act_Offences = recordValue["Weapons Act Offences"];
		var Concealable_Firearm = recordValue["Unlawful Possess Concealable Firearm"];
		var Unlawful_Firearm = recordValue["Unlawful Possess Firearm - Other"];
		var Bomb_Possess = recordValue["Bomb Possess and/or use of"];


		
		if(years) {
						
			if(recordNo) { // Only get records from the 19th century
							
				$("#records").append(
					$('#table').append(
						$("<tr>").append(
							$('<td>').text(recordNo),
							$('<td>').text(region),
							$('<td>').text(years),
							$('<td>').text(homicide),
							$('<td>').text(Other_Homicide),
							$('<td>').text(Attempted_Murder),
							$('<td>').text(Conspiracy),
							$('<td>').text(Manslaughter),
							$('<td>').text(Unlawful),
							$('<td>').text(driving_death), 
							$('<td>').text(assault),
							$('<td>').text(Grievous),
							$('<td>').text(sassualt),
							$('<td>').text(assault_other), 
							$('<td>').text(commona),
							$('<td>').text(sexualoffences),
							$('<td>').text(Attempted),
							$('<td>').text(othersexual), 
							$('<td>').text(Robbery),
							$('<td>').text(Armed),  
							$('<td>').text(unarmed),
							$('<td>').text(Offences),
							$('<td>').text(Kidnapping),
							$('<td>').text(Extortion),
							$('<td>').text(Stalking),
							$('<td>').text(Acts), 
							$('<td>').text(person),
							$('<td>').text(Entry),
							$('<td>').text(Dwelling),
							$('<td>').text(Unlawful_Violence),
							$('<td>').text(Entry_With),
							$("<td>").text(Unlawful_Entry_Shop),
							$('<td>').text(Arson), 
							$('<td>').text(Other_Property), 
							$("<td>").text(Unlawful_Use), 
							$("<td>").text(Other_Theft),
							$("<td>").text(Stealing), 
							$("<td>").text(Unlawful_Intent_Other),
							$("<td>").text(Vehicles), 
							$("<td>").text(Other_Stealing),
							$("<td>").text(Fraud), 
							$("<td>").text(Fraud_Computer),
							$("<td>").text(Fraud_Cheque),
							$("<td>").text(Fraud_CreditCard),
							$("<td>").text(Identity_Fraud),
							$("<td>").text(Other_Fraud),
							$("<td>").text(Handling_Stolen_Goods),
							$("<td>").text(Suspected_Stolen), 
							$("<td>").text(Receiving_Stolen_Property), 
							$('<td>').text(Possess), 
							$('<td>').text(Handling_Stolen_Goods), 
							$('<td>').text(Offences_Against_Property),
							$('<td>').text(Drug_Offences),
							$('<td>').text(Trafficking_Drugs),
							$('<td>').text(Possess_Drugs),
							$('<td>').text(Produce_Drugs), 
							$('<td>').text(Sell_Supply_Drugs),
							$('<td>').text(Other_Drug_Offences),
							$('<td>').text(Prostitution_Offences),
							$('<td>').text(Purpose_Prostitution), 
							$('<td>').text(Used_for_Prostitution),
							$('<td>').text(Knowingly_Participate_Prostitution),
							$('<td>').text(Public_Soliciting),
							$('<td>').text(Procuring_Prostitution),
							$('<td>').text(Permit_Minor),
							$('<td>').text(Advertising_Prostitution),
							$('<td>').text(Other_Prostitution_Offences),
							$('<td>').text(Liquor),
							$('<td>').text(Gaming_Racing),
							$('<td>').text(Domestic_Violence),
							$('<td>').text(Trespassing_Vagrancy),
							$('<td>').text(crimeAmount),
						)							
					)
				);
			}			
		}	
	});

};		

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