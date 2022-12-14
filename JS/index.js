/* $("a").click(function(){
    alert("hello" + this);
}); */
/* 
$("a").click(function(){
    $(".logo").html("<h1>hello</h1>");
}); */

function hover(element) {
    element.setAttribute('src', 'images/coding2.png');
  }
  
  function unhover(element) {
    element.setAttribute('src', 'images/coding.png');
  }

  

  $(".tog").click(function(){
   $('img',this).toggle();
 });


 $(".navLink").click(function(){
  $("#check").prop("checked", false);
 }); 