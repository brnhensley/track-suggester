$(document).ready(function() {
  $("form").submit(function(event) {
    var a1 = $("#q1").val();
    var a2 = $("#q2").val();
    var a3 = $("#q3").val();
    var a4 = $("#q4").val();

    if ((a1 === "csharp") && (a2 ===  "csharp") && (a3 === "csharp") && (a4 = "csharp")) {
      $("#csharp").show();
    }



    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);

    event.preventDefault();
  })
})
