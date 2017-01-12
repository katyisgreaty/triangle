$(document).ready(function(){
  $("#triangle").submit(function(event){
    event.preventDefault();
    var sideOneInput = parseInt($("#side1").val());
    var sideTwoInput = parseInt($("#side2").val());
    var sideThreeInput = parseInt($("#side3").val());

    if ((sideOneInput + sideTwoInput <= sideThreeInput) || (sideOneInput + sideThreeInput <= sideTwoInput) || (sideTwoInput + sideThreeInput <= sideOneInput)) {
      $("#result").text("This is NOT a triangle.")
    } else {
        if (sideOneInput === sideTwoInput &&  sideOneInput === sideThreeInput){
          $("#result").text("Equilateral.")
        } else if ((sideOneInput === sideTwoInput && sideOneInput !== sideThreeInput) || (sideOneInput === sideThreeInput && sideOneInput !== sideTwoInput) || (sideTwoInput === sideThreeInput && sideOneInput !== sideTwoInput)){
          $("#result").text("Isosceles.")
        } else if (sideOneInput !== sideTwoInput && sideTwoInput !== sideThreeInput && sideOneInput !== sideThreeInput) {
          $("#result").text("Scalene.")
        }
    }
  });
});
