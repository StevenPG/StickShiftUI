/**
 * This file is dedicated to functions regarding the calculator within the site.
 *
 * Many of these functions will be called on ANY change of a related component, updating
 * the state of some other variable.
 */

/**
 * Header value update functions for RPM and MPH/KPH
 */
function onMPHSlide(value) {
  document.getElementById("MPHLabel").innerHTML = value;
}

function onKPHSlide(value) {
  document.getElementById("KPHLabel").innerHTML = value;
}

function onRPMSlide(value) {
  document.getElementById("RPMLabel").innerHTML = value;
}

/**
 * End header value update functions
 */

/**
 * Tire Calculator helper function
 */

function calculateTireDiameter(){
    var tireWidth = parseInt(document.getElementById("tireWidth").value)
    var aspectRatio = parseInt(document.getElementById("aspectRatio").value)
    var wheelDiameter = parseInt(document.getElementById("wheelDiameter").value)
    if( tireWidth.value != "" && aspectRatio.value != "" && wheelDiameter.value != "") {
        var targetUpdateField = document.getElementById("tireDiameter")
        var sectionWidth = tireWidth / 25.4
        var sectionHeight = sectionWidth * (aspectRatio / 100)
        var sectionHeightTwice = sectionHeight * 2
        var result = sectionHeightTwice + wheelDiameter
        targetUpdateField.value = result.toFixed(2)
    }
}

/**
 * End
 */
