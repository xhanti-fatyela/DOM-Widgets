function billWithRadio() {

    var callCostTwo = 2.75;
    var smsCostTwo = 0.65;
    var criticalLevelAmount = 20;
    var warningLevelAmount = 10;


    var callTotal = 0;
    var smsTotal = 0;
    var overallTotal = 0;
    var myWarningLevel = 30;
    var myCriticalLevel = 50;

    function makeCallTwo() {

        callTotal += callCostTwo
        overallTotal += callCostTwo

    }

    function callMade() {

        return callTotal.toFixed(2)

    }

    function sendSmsTwo() {

        smsTotal += smsCostTwo
        overallTotal += smsCostTwo
    }

    function smsSent() {

        return smsTotal.toFixed(2)
    }

    function overallTotalSum() {

        return overallTotal.toFixed(2)
    }

    function setWarningLevelTwo() {

        myWarningLevel = warningLevelAmount

    }

    function getWarningLevelTwo() {

        return myWarningLevel.toFixed(2)

    }

    function setCriticalLevelTwo() {

        myCriticalLevel = criticalLevelAmount;
    }

    function getCriticalLevelTwo() {

        return myCriticalLevel.toFixed(2)
    }

    function reachedCriticalLevel() {

        return Number(overallTotalSum()) >= Number(getCriticalLevelTwo());

    }

    function reachedWarningLevel() {

        return Number(overallTotalSum()) >= Number(getWarningLevelTwo());

    }

    function showClassName() {

        if (reachedWarningLevel()) {

            return "warning"

        }


    }

    function showClassNameTwo() {

        if (reachedCriticalLevel()) {

            return "critical"

        }

    }

    return {

        makeCallTwo,
        callMade,
        sendSmsTwo,
        smsSent,
        overallTotalSum,
        setWarningLevelTwo,
        getWarningLevelTwo,
        setCriticalLevelTwo,
        getCriticalLevelTwo,
        reachedWarningLevel,
        reachedCriticalLevel,
        showClassName,
        showClassNameTwo


    }

}