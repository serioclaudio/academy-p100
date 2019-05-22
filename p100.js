$('.requestButton').click(doRequest);

function doRequest()
{
	clearResults();
	
	var request = $.ajax({
		url: "https://www.claudioserio.com/academy/p100/p100x.php",
		dataType: "json",
	    success: doAjaxSuccess,
	    error: doAjaxFail,
	    complete: doAjaxComplete,
	});
}

function doAjaxSuccess(data, textStatus, request)
{
	$('.infoStatus').text("Success! ");
	
	var empInfo = '';

	var oEmp = JSON.parse(request.responseText);
	
	for (var iLoop = 0; iLoop < oEmp.length; iLoop++)
	{
		  empInfo += "First Name: " + oEmp[iLoop].firstname + "<br/>";	
		  empInfo += "Last Name: " + oEmp[iLoop].lastname + "<br/>";	
		  empInfo += "Department: " + oEmp[iLoop].department + "<br/><br/>";	
	}
	
	$('.infoReceived').append(empInfo);
}

function doAjaxFail(jqXHR, status, err)
{
	$('.infoStatus').html("Failed! <br/>");
	$('.infoStatus').append(status + "<br/>");
	
}

function doAjaxComplete()
{
	$('.infoStatus').append("Completed! <br/>");
}

function clearResults()
{
	$('.infoStatus').empty();
	$('.infoReceived').empty();
}