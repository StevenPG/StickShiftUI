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

function calculateTireDiameter() {
  var tireWidth = parseInt(document.getElementById("tireWidth").value);
  var aspectRatio = parseInt(document.getElementById("aspectRatio").value);
  var wheelDiameter = parseInt(document.getElementById("wheelDiameter").value);
  var targetUpdateField = document.getElementById("tireDiameter");
  var sectionWidth = tireWidth / 25.4;
  var sectionHeight = sectionWidth * (aspectRatio / 100);
  var sectionHeightTwice = sectionHeight * 2;
  var result = sectionHeightTwice + wheelDiameter;
  targetUpdateField.value = result.toFixed(2);
}

/**
 * End
 */

/**
 * Get the currently selected gear
 */
function selectedGearRatio() {
  var first = document.getElementById("firstgear").value;
  var second = document.getElementById("secondgear").value;
  var third = document.getElementById("thirdgear").value;
  var fourth = document.getElementById("fourthgear").value;
  var fifth = document.getElementById("fifthgear").value;
  var sixth = document.getElementById("sixthgear").value;
  return first;
}

/**
 * Calculation
 *
 * [ (Axle Ratio x Vehicle Speed x Transmission Ratio x 336.13) / Tire Diameter ] for RPM
 **/
function MPHChangeCalculation() {
  var mph = document.getElementById("MPHSlider").value;
  onMPHSlide(mph);

  var finalDrive = document.getElementById("finaldrive").value;
  var tireDiam = document.getElementById("tireDiameter").value;

  var product = mph * finalDrive * selectedGearRatio() * 336.13;
  var rpm = product / tireDiam;
  document.getElementById("RPMSlider").value = rpm;
  onRPMSlide(rpm.toFixed(0));
}

/**
 * Calculation
 *
 * [ (RPM x Tire Diameter )/( Axle Ratio x Transmission Ratio x 336.13) ] for Vehicle Speed
 **/
function RPMChangeCalculation() {
  var rpm = document.getElementById("RPMSlider").value;
  onRPMSlide(rpm);

  var finalDrive = document.getElementById("finaldrive").value;
  var tireDiam = document.getElementById("tireDiameter").value;

  var product = rpm * tireDiam
  var distProduct = selectedGearRatio() * finalDrive * 336.13
  var mph =product / distProduct

  document.getElementById("MPHSlider").value = mph;
  onMPHSlide(mph.toFixed(0));
}
