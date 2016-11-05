alert("hello!");

function celsiusToFahr(x){
	var celsiusTemp = (x * 1.8) + 32;
	return(x + " C is equal to " + celsiusTemp + " F" );
}

function fahrToCelsius(j){
	var fahrTemp = (j - 32) / 1.8;
	return(j + " F is equal to " + fahrTemp + " C" );
}


function calculate(){
	alert("HEY")
}

var myButton = document.getElementByID("my-button");
myButton.onclick = calculate;


alert("hello!")