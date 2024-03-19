var gasInputs = document.getElementsByClassName("gasInput");
var elcInputs = document.getElementsByClassName("elcInput");
var sewInputs = document.getElementsByClassName("sewInput");
var gasTotal = document.getElementById("gasTot");
var elecTotal = document.getElementById("elecTot");
var sewTotal = document.getElementById("sewTot");
var utilTotal = document.getElementById("utilTotal");

function updateGasTotal(event){
    var total = 0;
    for (var i = 0; i < gasInputs.length; i++) {
        total += parseInt(gasInputs[i].value);
    }
    gasTotal.textContent = total;
    updateUtilTotal();
}

function updateElecTotal(event){
    var total = 0;
    for (var i = 0; i < elcInputs.length; i++) {
        total += parseInt(elcInputs[i].value);
    }
    elecTotal.textContent = total;
    updateUtilTotal();
}

function updateSewTotal(event){
    var total = 0;
    for (var i = 0; i < sewInputs.length; i++) {
        total += parseInt(sewInputs[i].value);
    }
    sewTotal.textContent = total;
    updateUtilTotal();
}

function updateUtilTotal(){
    utilTotal.textContent = parseInt(gasTotal.textContent) + parseInt(elecTotal.textContent) + parseInt(sewTotal.textContent);
}

for (var i = 0; i < gasInputs.length; i++) {
    gasInputs[i].addEventListener('input', updateGasTotal);
}

for (var i = 0; i < elcInputs.length; i++) {
    elcInputs[i].addEventListener('input', updateElecTotal);
}

for (var i = 0; i < sewInputs.length; i++) {
    sewInputs[i].addEventListener('input', updateSewTotal);
}