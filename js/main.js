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
	var listNames = [];
	var listThumbnails = [];
	for(i = 0; i<data.length; i++){
		var currentObj = data[i];
		var projectName = currentObj.name
		var thumbs = currentObj.thumbnail
		listThumbnails = listThumbnails + thumbs;
		listNames = listNames + projectName;
	}


	$("#project1").css("background-image", "url(" + listThumbnails[0] + ")");
	$("#project1").css("content", listNames[0]);


	//alert(listThumbnails);
}




function myErrorListener(xhr,ajaxOptions,thrownError)
{
  alert(thrownError);
}


