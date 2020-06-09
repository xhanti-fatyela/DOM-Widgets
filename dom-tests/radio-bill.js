function billWithRadio(){

    var callCostTwo = 2.75;
    var smsCostTwo = 0.65;
    var callTotal = 0;
    var smsTotal = 0;
    var overallTotal = 0;

function makeCallTwo () {

    callTotal += callCostTwo
    overallTotal += callCostTwo

}

function callMade () {

     return callTotal.toFixed(2)

}

function sendSmsTwo () {

    smsTotal += smsCostTwo
    overallTotal += smsCostTwo
}

function smsSent () {

    return smsTotal.toFixed(2)
}

function overallTotalSum () {

    return overallTotal.toFixed(2)
}

return {
    
    makeCallTwo,
    callMade,
    sendSmsTwo,
    smsSent,
    overallTotalSum
    

}

}