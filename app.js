$(document).ready(function(){

hide(".box4");

$("#pass").keyup(function(){
    var pass=$("#pass").val();
    if(pass.length<8){
        $("#msg").show();
        $("#msg").removeClass("positive"); 
    	$("#msg").text("minimum 8 charecter").addClass("negative");
    	// $("#msg").removeClass("red");
    	// $("#msg").addClass("green");

    }
    else{
    	$("#msg").removeClass("negative");
    	// $("#msg2").addClass("positive");
    	$("#msg").hide();
    	$("#msg").css("display", "none");
    }
 });

$("#reset").click(function(){

  $("#name").val("");
  $("#pass").val("");
  // name.hide();
  // $("#name").hide();
  //  $("#pass").hide();


});

$("#login").click(function(){
     var name=$("#name").val();
     var pass=$("#pass").val();
    
       if( name ==''){
			$("#msg2").text(" Name must be required!!").addClass("negative");
		}
		
		if( pass ==''){
			$("#msg2").text("Password must be required!!").addClass("negative");
		}
	else(){
		show("box4");
	}	

});

$("#textarea").keyup(function(){
	//get textarea character number
	var textareaChar = $("#textarea").val().length;
	var remainingChar = counterDefault - textareaChar;

	$("#counter").text(remainingChar).addClass("green").re;

	if (remainingChar < 0) {
		$("#counter").addClass("red").removeClass("green");
	}else{
		$("#counter").addClass("green").removeClass("red");
	}

	
});



$('.fc-mac').frameCarousel({

  images: ['1.jpg', '2.jpg', '3.jpg',]

});



});