function getEmployees(){

	var generateEmployees = [
	{"name":"Melissa", "age":9},
	{"name":"Santiago", "age":2},
	{"name":"Karen", "age":2},
	{"name":"Earle", "age":5},
	{"name":"Danielle", "age":2}

];

	var sum = 0;
		for (var i = 0; i < generateEmployees.length; i++){
			var student = generateEmployees[i].age;
			sum = sum + student;
		}

	var average = sum / generateEmployees.length;

	var results = $("#age-result");
	results.html(average);
}


var myButton = $("#my-button");
myButton.click(getEmployees);