var triangleName = function(sideOneInput, sideTwoInput, sideThreeInput) {
  if ((sideOneInput + sideTwoInput <= sideThreeInput) || (sideOneInput + sideThreeInput <= sideTwoInput) || (sideTwoInput + sideThreeInput <= sideOneInput)) {
    return "NOT a triangle."
  } else {
    if (sideOneInput === sideTwoInput &&  sideOneInput === sideThreeInput){
      return "Equilateral."
    } else if ((sideOneInput === sideTwoInput && sideOneInput !== sideThreeInput) || (sideOneInput === sideThreeInput && sideOneInput !== sideTwoInput) || (sideTwoInput === sideThreeInput && sideOneInput !== sideTwoInput)){
      return "Isosceles."
    } else if (sideOneInput !== sideTwoInput && sideTwoInput !== sideThreeInput && sideOneInput !== sideThreeInput) {
      return "Scalene."
    }
  }
}


$(document).ready(function(){
  $("#triangle").submit(function(event){
    event.preventDefault();
    var a = parseInt($("#side1").val());
    var b = parseInt($("#side2").val());
    var c = parseInt($("#side3").val());
    $("#result").text("This triangle is " + triangleName(a,b,c));
  });
});
