$ (document).ready(function(){

var requestURL = "https://goodkp21.github.io/my-portfolio/data.json";
  
  $.ajax({
    method: "GET",
    url: requestURL,
    dataType: "json",
    success: mySuccessListener,
    error: myErrorListener
  });


  
});

function mySuccessListener(data)
{
	// var projectName = getParameterByName('project-id'); // null (absent)
	// var nextProjectName = ""
	var thumbsArray = [];
	var namesArray = [];
	for(i = 0; i<data.length; i++){
		var currentObj = data[i];
		var projectName = currentObj.name
		thumbsArray.push(currentObj.thumbnail);
		namesArray.push(currentObj.name);
	}


	$("#project1").css("background-image", "url(" + thumbsArray[0] + ")");
	$("#project1").hover(function() {
    $(".overlay").toggleClass("on");
    $(".message1").toggleClass("showmessage");
    $(".message1").text(namesArray[0]);
 
 	
  });

	$("#project2").css("background-image", "url(" + thumbsArray[1] + ")");
	$("#project2").hover(function() {
    $(".overlay2").toggleClass("on");
    $(".message2").toggleClass("showmessage");
    $(".message2").text(namesArray[1]);
 
 	
  });


  $("#project3").css("background-image", "url(" + thumbsArray[2] + ")");
  $("#project3").hover(function() {
    $(".overlay3").toggleClass("on");
    $(".message3").toggleClass("showmessage");
    $(".message3").text(namesArray[2]);
 
  
  });

   $("#project4").css("background-image", "url(" + thumbsArray[3] + ")");
  $("#project4").hover(function() {
    $(".overlay4").toggleClass("on");
    $(".message4").toggleClass("showmessage");
    $(".message4").text(namesArray[3]);
 
  
  });

	$("#project5").css("background-image", "url(" + thumbsArray[4] + ")");
	$("#project5").hover(function() {
    $(".overlay5").toggleClass("on");
    $(".message5").toggleClass("showmessage");
    $(".message5").text(namesArray[4]);
 
 	
  });


	//alert(listThumbnails);
}




function myErrorListener(xhr,ajaxOptions,thrownError)
{
  alert(thrownError);
}


