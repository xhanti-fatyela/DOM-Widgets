function textInputBill(){

    var callCostFour = 2.75;
    var smsCostFour = 0.65;
    var criticalLevelAmountFour = 20;
    var warningLevelAmountFour = 10;


    var textCallTotal = 0;
    var textSmsTotal = 0;
    var textOverallTotal = 0;
    var finalWarningLevel = 30;
    var finalCriticalLevel = 50; 

function makeCallFour () {

    textCallTotal += callCostFour
    textOverallTotal += callCostFour

}

function callMadeFour () {

     return textCallTotal.toFixed(2)

}

function sendSmsFour () {

    textSmsTotal += smsCostFour
    textOverallTotal += smsCostFour
}

function smsSentFour () {

    return textSmsTotal.toFixed(2)
}

function textOverallTotalSum () {

    return textOverallTotal.toFixed(2)
}

function setWarningLevelFour () {
   
    finalWarningLevel = warningLevelAmountFour

}

function getWarningLevelFour () {

    return finalWarningLevel.toFixed(2)

}

function setCriticalLevelFour () {

    finalCriticalLevel = criticalLevelAmountFour;
}

function getCriticalLevelFour () {

   return finalCriticalLevel.toFixed(2)
}

function reachedDangerLevelFour () {

    return Number(textOverallTotalSum()) >= Number(getCriticalLevelFour())

}

function reachedWarningLevelFour () {

    return Number(textOverallTotalSum()) >= Number(getWarningLevelFour())

}

function textShowClassName () {

    if (reachedWarningLevelFour()) {
       
        return "warning"

     }


}

function textShowClassNameTwo () {

    if (reachedDangerLevelFour()) {
       
        return "critical"

     }

}

return {
    
    makeCallFour,
    callMadeFour,
    sendSmsFour,
    smsSentFour,
    textOverallTotalSum,
    setWarningLevelFour,
    getWarningLevelFour,
    setCriticalLevelFour,
    getCriticalLevelFour,
    reachedWarningLevelFour,
    reachedDangerLevelFour,
    textShowClassName,
    textShowClassNameTwo
    

}

}