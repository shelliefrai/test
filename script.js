$(document).ready(function() {
  // $("#pagetitle").html("<p>Strictly Interiors</p>");

  $("#pagetitle").css("color", "pink");

  $("#hide").click(function() {
  $(".container").hide();
});

$("#show").click(function() {
  $(".container").show();
});

$("h2").hover(function() {
  $(".imghover").fadeOut(1000);
  $(".imghover").fadeIn(1000);
});
});
