// get a reference to the sms or call radio buttons
const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings = document.querySelector(".smsTotalSettings");
const totalSettings = document.querySelector(".totalSettings")
const theSpanElementThree = document.querySelector(".totalColor")
//get a reference to the add button
const theAddButton = document.querySelector(".theAddButton")
//get a reference to the 'Update settings' button
const updateSettingsButton = document.querySelector(".updateSettings")

var settingsBillInstance = BillWithSettings()
// create a variables that will keep track of all the settings



// create a variables that will keep track of all three totals.

//add an event listener for when the add button is pressed
function settingsAddButton (){

    
    const theCallOrSmsRadioThree = document.querySelector(".billItemTypeWithSettings:checked");
    var radioValuesThree = theCallOrSmsRadioThree.value;

    if (radioValuesThree === "call") {


        settingsBillInstance.makeCall()

    
    }

    else if (radioValuesThree === "sms") {

    
        settingsBillInstance.sendSms()

    }

    
    //var roundedCallTotalThree = totalCallThree.toFixed(2);
    
    //var roundedSmsTotalThree = totalSmsThree.toFixed(2);
    //var roundedTotalThree = totalThree.toFixed(2);

    colorChange ()


    
    callTotalSettings.innerHTML = settingsBillInstance.getTotalCallCost().toFixed(2);
    
    smsTotalSettings.innerHTML = settingsBillInstance.getTotalSmsCost().toFixed(2);
    
    totalSettings.innerHTML = settingsBillInstance.getTotalCost().toFixed(2);
     

    
    
};


function colorChange () {

    
    theSpanElementThree.classList.remove("critical");
    theSpanElementThree.classList.remove("warning");
    theSpanElementThree.classList.add(settingsBillInstance.totalClassName());
    };

function settingsUpdate () {

    settingsBillInstance.setCallCost(Number(callCostSetting.value))
    settingsBillInstance.setSmsCost(Number(smsCostSetting.value))
    settingsBillInstance.setWarningLevel(Number(warningLevelSetting.value))
    settingsBillInstance.setCriticalLevel(Number(criticalLevelSetting.value))

    
    colorChange( )



 

}
  
//add an event listener for when the 'Update settings' button is pressed
updateSettingsButton.addEventListener("click" , settingsUpdate);
theAddButton.addEventListener("click" , settingsAddButton);
 //var roundedCallCostThree = callCostThree.toFixed(2);
 
 //callCostSetting.innerHTML = roundedCallCostThree;
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
