$(document).ready(function() {
  $("form").submit(function(event) {
    var a1 = $("#q1").val();
    var a2 = $("#q2").val();
    var a3 = $("#q3").val();
    var a4 = $("#q4").val();
    $("body").find("p").hide();

    if (a1 === "noAnswer" || a2 === "noAnswer" || a3 === "noAnswer" || a4 === "noAnswer") {
      $("#klingon").show();
    } else if (a1 === "csharp" && a2 === "csharp" && a3 === "csharp" && a4 === "csharp") {
      $("#csharp").show();
    } else if (a1 === "design" && a2 === "design" && a3 === "design" && a4 === "design") {
      $("#design").show();
    } else if (a1 === "java" && a2 === "java" && a3 === "java") {
      $("#java").show();
    }  else if (a1 === "php" && a2 === "php" && a3 === "php") {
      $("#php").show();
    }  else if (a1 === "ruby" && a2 === "ruby" && a3 === "ruby") {
      $("#ruby").show();
// I'm sorry
    }  else if  (((a1 === "csharp" && a2 === "csharp") && ( a3 === "csharp" || a4 === "csharp" )) || ( a2 === "csharp" && a3 === "csharp" && a4 === "csharp" ) || ( a1 === "csharp" && a3 === "csharp" && a4 === "csharp" )) {
      $("#csharp").show();
    }  else if  (((a1 === "design" && a2 === "design") && ( a3 === "design" || a4 === "design" )) || ( a2 === "design" && a3 === "design" && a4 === "design" ) || ( a1 === "design" && a3 === "design" && a4 === "design" )) {
      $("#design").show();
    }

    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);

    event.preventDefault();
  })
})
