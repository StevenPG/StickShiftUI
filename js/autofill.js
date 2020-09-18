/**
 * Hard-coded autofill (placeholder until server-side implementation is completed)
 */

 function autoFill2018Mustang() {
    console.log("Temporary -> Auto-filling 2018 Ecoboost Mustang")
    fillCalculator(3.31, 27.2, 4.236, 2.538, 1.665, 1.238, 1.00, 0.834)
 }

 function autoFill2003Mustang() {
    console.log("Temporary -> Auto-filling 2003 v6 Mustang")
    fillCalculator(3.27, 25.74, 3.35, 1.99, 1.33, 1.00, 0.68, 0)
 }

 function autoFill2020SubaruBRZ() {
    console.log("Temporary -> Auto-filling 2020 Subaru BRZ")
    fillCalculator(4.30, 24.6, 3.63, 2.19, 1.54, 1.21, 1.00, 0.77)
 }

 function autoFill2018VWGolfR() {
   console.log("Temporary -> Auto-filling 2018 Volkswagen Golf R")
   fillCalculator(4.24, 25.48, 3.36, 2.09, 1.48, 1.09, 1.1, 0.91)
}

 function fillCalculator(finalDrive, tireDiameter, first, second, third, fourth, fifth, sixth){
    document.getElementById("firstgear").value = first;
    document.getElementById("secondgear").value = second;
    document.getElementById("thirdgear").value = third;
    document.getElementById("fourthgear").value = fourth;
    document.getElementById("fifthgear").value = fifth;
    document.getElementById("sixthgear").value = sixth;
    document.getElementById("finaldrive").value = finalDrive;
    document.getElementById("tireDiameter").value = tireDiameter;
 }