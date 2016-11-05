var employees = [
	{"name":"Melissa"},
	{"name":"Santiago"},
	{"name":"Karen"},
	{"name":"Earle"},
	{"name":"Danielle"}

]




function celsiusToFahr(x){
	var celsiusTemp = (x * 1.8) + 32;
	return(x + " C is equal to " + celsiusTemp + " F" );
}


function calculate(){
	var myValue = $("#myvalue");
	var celsiusVar = myValue.val();
	var farenheitVar = celsiusToFahr(celsiusVar);
	var results = $("#results");
		results.html = farenheitVar;
}

var myButton = $("#my-button");
myButton.click(calculate)
