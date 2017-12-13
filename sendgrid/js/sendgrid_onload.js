jQuery(document).ready(function($) {
  // $('#block-search-form').hide();
  $(".close").click(function(){

  	if($('#hidePopup').attr('checked')){
	  	$.ajax({
		      type: 'POST',
		      url: "?",
		      data: "cookie=Yes",
		      dataType: "text",
		      success: function(resultData) { 
		      	// alert(resultData);
		      }
		});
	}
  	$("#popup1").hide();
  });
  
  $('#sendgrid_cancel').click(function(){
      if($('#hidePopup').attr('checked')){
	  	$.ajax({
		      type: 'POST',
		      url: "?",
		      data: "cookie=Yes",
		      dataType: "text",
		      success: function(resultData) { 
		      	// alert(resultData);
		      }
		});
	}
  	$("#popup1").hide();
  });

  $('#sendgrid_submit').click(function(){
  	 var getEmail = $('#email').val();
  	 // Check mail is null or not
  	 if(getEmail==''){
  	 	$('#msg').html("<div class='send_error'>Email address is required.</div>");
  	 	$('#msg').show();
  	 	$('#msg').delay(5000).fadeOut('slow');
  	 	return false;
  	 }
  	 // check mail is valid or not
  	 var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
     if(!emailReg.test( getEmail )) {
        $('#msg').html("<div class='send_error'>Please enter a valid email address.</div>");
        $('#msg').show();
  	 	$('#msg').delay(5000).fadeOut('slow');
        return false;
     }

  	 $('#msg').html('Loading..');
  	 $.ajax({
	      type: 'POST',
	      url: "?",
	      data: "email="+getEmail,
	      dataType: "text",
	      success: function(resultData) { 
	      	$('#msg').html(resultData);
	      	$('#email').val('');
	      	$('#msg').show();
  	 		$('#msg').delay(5000).fadeOut('slow');
	      }
	});


  });
});
