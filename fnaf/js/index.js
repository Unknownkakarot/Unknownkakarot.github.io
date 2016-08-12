$(document).ready(function() {
 $("#Puppet").hide();
 $("#Scott").hide();
 $("#Freddy").hide();
 $("#Bonnie").hide();
 $("#Bonnie2").hide();
 $("#Bonnie3").hide();
 $("#Freddy2").hide();
 $("#Freddy3").hide();
 $("#Freddy4").hide();
 $("#MusicBox").hide();
 $("#jumpscare1").hide();
 $('audio').hide();
  
$("#playbutton").click(function() {   
  $("#playbutton").hide();
  $("#gamename").hide();
  $("#Rules").hide();
  $("body").css({"background-image": "url('http://vignette4.wikia.nocookie.net/freddy-fazbears-pizza/images/4/45/The_Office_2.png/revision/latest?cb=20141111172800')", "background-size": "cover"});
  $("#MusicBox").show();
 $('audio').show();

  
 setTimeout(function () {
   $("#Freddy").show();
 }, 2000);
  
  setTimeout(function () {
   $("#Freddy2").show();
 }, 2000);
  
  setTimeout(function () {
   $("#Freddy3").show();
 }, 15000); 
  
  setTimeout(function () {
   $("#Freddy4").show();
 }, 20000);
  
 setTimeout(function () {
   $("#Bonnie").show();
 }, 2000);
  
  setTimeout(function () {
   $("#Bonnie2").show();
 }, 5000);
  
  setTimeout(function () {
   $("#Bonnie3").show();
 }, 8000);
  
   
 setTimeout(function () {
   $("#Freddy").show();
 }, 2000);
  
 setTimeout(function() {
  $("#Scott").show(); 
 }, 20000);
  

  //Puppet pops out after 2s
  var timeout = setTimeout(function(){ 
    $('body').css({'background-color': '#000000', 'background-image': 'url("#")'})
    $("#Puppet").show();
  }, 2000);
 
  //Click Music Box to reset 
  $("#MusicBox").click(function(){
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      $('body').css({'background-color': '#000000', 'background-image': 'url("#")'});
      $("#Puppet").show();
 }, 2000);
  });
 //Shoot enemies
  $("#Freddy").click(function() {
    $(this).hide('explode');
  });
   
   $("#Freddy2").click(function() {
    $(this).hide('explode');
    
  });
   $("#Freddy3").click(function() {
    $(this).hide('explode');
  });
   $("#Freddy4").click(function() {
    $(this).hide('explode');
  });
   $("#Bonnie").click(function() {
    $(this).hide('explode');
  });
   $("#Bonnie2").click(function() {
    $(this).hide('explode');
  });
   $("#Bonnie3").click(function() {
    $(this).hide('explode');
  });
   $("#Scott").click(function() {
    $(this).hide('explode');
  });
  
  
 //Move Scott
  function moveScottRight() {
    $("#Scott").animate({left: "+=500"}, 2000, moveScottLeft);
  }
  
   function moveScottLeft() { 
    $("#Scott").animate({left: "-=500"}, 2000, moveScottRight);  
  }
  
  moveScottRight();
   
  //Move Freddy
    function moveFreddyRight() {
    $("#Freddy").animate({left: "+=600"}, 2000, moveFreddyRight);
  }
  
   function moveFreddyLeft() { 
    $("#Freddy").animate({left: "-=600"}, 2000, moveFreddyRight);  
  }
  
  moveFreddyRight();
  

  }); 
  
//document ready bracket, don't delete  
});