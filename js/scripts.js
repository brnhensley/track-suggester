$(document).ready(function() {
  $("form").submit(function(event) {
    var firstAnswer = $("#q1").val();
    var secondAnswer = $("#q2").val();
    var thirdAnswer = $("#q3").val();
    var fourthAnswer = $("#q4").val();
    var fifthAnswer = $("#q5").val();




    console.log(firstAnswer);
    console.log(secondAnswer);
    console.log(thirdAnswer);
    console.log(fourthAnswer);
    console.log(fifthAnswer);

    event.preventDefault();
  })
})
