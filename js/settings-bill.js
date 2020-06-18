const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings = document.querySelector(".smsTotalSettings");
const totalSettings = document.querySelector(".totalSettings")
const theSpanElementThree = document.querySelector(".totalColor")
const theAddButton = document.querySelector(".theAddButton")
const updateSettingsButton = document.querySelector(".updateSettings")

var settingsBillInstance = BillWithSettings()

function settingsAddButton() {

    const theCallOrSmsRadioThree = document.querySelector(".billItemTypeWithSettings:checked");

    var radioValuesThree = theCallOrSmsRadioThree.value;

    if (radioValuesThree === "call") {

        settingsBillInstance.makeCall()

    }

    else if (radioValuesThree === "sms") {

        settingsBillInstance.sendSms()

    }

    colorChange()

    callTotalSettings.innerHTML = settingsBillInstance.getTotalCallCost().toFixed(2);
    smsTotalSettings.innerHTML = settingsBillInstance.getTotalSmsCost().toFixed(2);
    totalSettings.innerHTML = settingsBillInstance.getTotalCost().toFixed(2);

};


function colorChange() {

    theSpanElementThree.classList.remove("critical");
    theSpanElementThree.classList.remove("warning");

    theSpanElementThree.classList.add(settingsBillInstance.totalClassName());

};

function settingsUpdate() {

    settingsBillInstance.setCallCost(Number(callCostSetting.value))
    settingsBillInstance.setSmsCost(Number(smsCostSetting.value))
    settingsBillInstance.setWarningLevel(Number(warningLevelSetting.value))
    settingsBillInstance.setCriticalLevel(Number(criticalLevelSetting.value))


    colorChange()

}


updateSettingsButton.addEventListener("click", settingsUpdate);
theAddButton.addEventListener("click", settingsAddButton);
