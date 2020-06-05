function billWithSettings () {
 
var theCallCost = 0;
var theSmsCost = 0;
var theWarningLevel = 0;
var theCriticalLevel = 0; 

var callCostTotal = 0;
var smsCostTotal = 0;

function setCallCost (callCost) {
        theCallCost = callCost
    }


function getCallCost () {
    return theCallCost
}    

function setSmsCost (smsCost) {
    theSmsCost = smsCost
}


function getSmsCost () {
   return theSmsCost
}   

function setWarningLevel (warningLevel) {

    theWarningLevel = warningLevel;
}

function getWarningLevel (warningLevel) {

    return theWarningLevel;
}

function setCriticalLevel (criticalLevel) {

     theCriticalLevel = criticalLevel;
}

function getCriticalLevel (criticalLevel) {

    return theCriticalLevel;
}
function makeCall () {
     
    callCostTotal += theCallCost

}

function getTotalCost () {
     return callCostTotal

}

function getTotalCallCost () {
     return callCostTotal + smsCostTotal
}

function getTotalSmsCost () {
    return smsCostTotal
}



function sendSms () {

    smsCostTotal += theSmsCost

}

return {
       setCallCost,
       getCallCost,
       setSmsCost,
       getSmsCost,
       setWarningLevel,
       getWarningLevel,
       setCriticalLevel,
       getCriticalLevel,
       makeCall,
       getTotalCost,
       getTotalCallCost,
       getTotalSmsCost,
       sendSms

}

}