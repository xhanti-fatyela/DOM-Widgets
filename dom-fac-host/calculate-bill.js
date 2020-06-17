function calculteBill(){

var callBill = 2.75;
var smsBill = 0.65;
var dangerLevel = 50;
var warningLevelThree = 30;

var billingTotal = 0;
var billDangerLevel = 0;
var billWarningLevel = 0;

function makeCallThree () {
    
  billingTotal += callBill 
   

}

function callMadeTwo (){

    return billingTotal.toFixed(2)


}

function sendSmsThree () {

    billingTotal += smsBill
}

function smsSentThree () {

    return billingTotal.toFixed(2)
}

function billingOverallTotal () {

    return billingTotal.toFixed(2)
}

function setDangerLevel () {

    billDangerLevel = dangerLevel
}

function getDangerLevel () {

    return billDangerLevel
}

function setWarningLevelThree () {

    billWarningLevel = warningLevelThree

}

function getWarningLevelThree () {

      return billWarningLevel
}

function reachedDangerLevel () {

    return billingOverallTotal() >= getDangerLevel()

}

function billReachedWarningLevel () {

    return billingOverallTotal() >= getWarningLevelThree()

}

function billShowClassName () {

    if (reachedDangerLevel()) {
       
        return "critical"

     }


}

function billShowClassNameTwo () {

    if (billReachedWarningLevel()) {
       
        return "warning"

     }

}

return {

      makeCallThree,
      callMadeTwo,
      sendSmsThree,
      smsSentThree,
      billingOverallTotal,
      setDangerLevel,
      getDangerLevel,
      setWarningLevelThree,
      getWarningLevelThree,
      reachedDangerLevel,
      billReachedWarningLevel,
      billShowClassName,
      billShowClassNameTwo


}

}

