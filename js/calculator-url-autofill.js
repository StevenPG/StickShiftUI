// This function is called on page-load, and retrieves all URL parameters
// Whichever parameters are found are pushed into the calculator on page-load
function getAndFillAllPotentialParameters() {
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
    // Available fields
    /**
     * rpm - Revolutions Per Minute
     * mph - Miles Per House
     * fst - First gear ratio
     * snd - Second gear ratio
     * trd - Third gear ratio
     * fo - Fourth gear ratio
     * fi - Fifth gear ratio
     * sth - Sixth gear ratio
     * fdr - Final drive ration
     * td - Tire Diameter
     * ex. /index.html?rpm=4000&mph=50&fst=3.63&snd=2.19&trd=1.54&fo=1.21&fi=1&sth=0.77&fdr=4.3&td=24.6
     */
    if(urlParams.has('rpm')){
        // TODO - make sure you can only put in the right stuff
        document.getElementById('RPMSlider').value = parseInt(urlParams.get('rpm'))
        document.getElementById('RPMLabel').innerHTML = urlParams.get('rpm')
    }
    if(urlParams.has('mph')){
        // TODO - make sure you can only put in the right stuff
        document.getElementById('MPHSlider').value = parseInt(urlParams.get('mph'))
        document.getElementById('MPHLabel').innerHTML = urlParams.get('mph')
    }
    if(urlParams.has('fst')){
        // TODO - make sure you can only put in the right stuff
        document.getElementById('firstgear').value = parseFloat(urlParams.get('fst'))
    }
    if(urlParams.has('snd')){
        // TODO - make sure you can only put in the right stuff
        document.getElementById('secondgear').value = parseFloat(urlParams.get('snd'))
    }
    if(urlParams.has('trd')){
        // TODO - make sure you can only put in the right stuff
        document.getElementById('thirdgear').value = parseFloat(urlParams.get('trd'))
    }
    if(urlParams.has('fo')){
        // TODO - make sure you can only put in the right stuff
        document.getElementById('fourthgear').value = parseFloat(urlParams.get('fo'))
    }
    if(urlParams.has('fi')){
        // TODO - make sure you can only put in the right stuff
        document.getElementById('fifthgear').value = parseFloat(urlParams.get('fi'))
    }
    if(urlParams.has('sth')){
        // TODO - make sure you can only put in the right stuff
        document.getElementById('sixthgear').value = parseFloat(urlParams.get('sth'))
    }
    if(urlParams.has('fdr')){
        // TODO - make sure you can only put in the right stuff
        document.getElementById('finaldrive').value = parseFloat(urlParams.get('fdr'))
    }
    if(urlParams.has('td')){
        // TODO - make sure you can only put in the right stuff
        document.getElementById('tireDiameter').value = parseFloat(urlParams.get('td'))
    }
}

function generateCalcAutofillURL(){
    // When testing locally, :8080 must be added
    let rpm = document.getElementById('RPMSlider').value
    let mph = document.getElementById('MPHSlider').value
    let fst = document.getElementById('firstgear').value
    let snd = document.getElementById('secondgear').value
    let trd = document.getElementById('thirdgear').value
    let fo = document.getElementById('fourthgear').value
    let fi = document.getElementById('fifthgear').value
    let sth = document.getElementById('sixthgear').value
    let fdr = document.getElementById('finaldrive').value
    let td = document.getElementById('tireDiameter').value
    displayURL = window.location.protocol + "//" + window.location.hostname + 
        "/index.html?rpm=" + String(rpm) + 
        "&mph=50&fst=" + String(fst) + 
        "&snd=" + String(snd) + 
        "&trd=" + String(trd) + 
        "&fo=" + String(fo) + 
        "&fi=" + String(fi) + 
        "&sth=" + String(sth) + 
        "&fdr=" + String(fdr) + 
        "&td=" + String(td)
    document.getElementById("AutoFillUrl").value = displayURL
}

function copyToClipboard() {
    var copyText = document.getElementById("AutoFillUrl");
    copyText.select()
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
}