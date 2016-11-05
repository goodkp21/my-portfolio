function celsiusToFahr(x){
	var celsiusTemp = (x * 1.8) + 32;
	return(x + " C is equal to " + celsiusTemp + " F" );
}

function fahrToCelsius(j){
	var fahrTemp = (j - 32) / 1.8;
	return(j + " F is equal to " + fahrTemp + " C" );
}


function calculate(){
	var myValue = document.getElementById("myvalue");
	var celsiusVar = myValue.value;
	var farenheitVar = celsiusToFahr(celsiusVar);
	var results = document.getElementById("results");
		results.innerHTML = farenheitVar;
}

var myButton = document.getElementById("my-button");
myButton.onclick = calculate;
