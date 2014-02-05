function loginRedirect() {
  window.location = "spotonline.html";
}

function loginFail() {
  window.location = "testfail.html";
}

function register(){
    var username = $('#register-username').val();
    var password = $('#register-password').val();

    if(!username || !password){
        return;
    }
  
    var request = 
	$(document).bind("mobileinit", function() {
	    // Make your jQuery Mobile framework configuration changes here!
	    $.mobile.allowCrossDomainPages = true;
	});

    $.ajax("http://scc330-01.lancs.ac.uk/users/adduser",
    {
        type: "POST",
        data: 
            {
                username : username,
                password : password
            },
        dataType: "JSON"
    });
    
    request.done(function(data){
        if (data.valid == true){
            loginRedirect();
    	} else if(data.valid == false){
        	loginFail();
    	}
    });
}

function login(){

	var username = $('#login-username').val();
    var password = $('#login-password').val();

    if(!username || !password){
        return;
    }
  
    var request = 
    $.ajax("http://scc330-01.lancs.ac.uk/users/login",
    {
        type: "POST",
        data: 
            {
                username : username,
                password : password
            },
        dataType: "JSON"
    });
	request.done(function(data){
        if (data.valid == true){
            loginRedirect();
    	} else if(data.valid == false){
        	loginFail();
    	}
    });
}

$("#register-form").submit(function(event){
    
    event.preventDefault();
    register();

});

$("#login-form").on('submit', function(e){
	e.preventDefault();
	login();
});