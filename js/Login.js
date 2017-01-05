$(document).ready(function() {
	$("#btnAccess").click(function() {
		$.get("http://jmserver01/mcpets/api/Authentication?mail=" + $("#txtUser").val() + "&password=" + $("#txtPassword").val(),function( data ) {
			debugger
			if(typeof data.Name != "undefined"){
				window.location.replace("home.html");
			}else{
				alert("Error");
			}
		}).fail(function() {
			alert("User not found");
		});	    
	});
});