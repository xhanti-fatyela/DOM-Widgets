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
// create a variables that will keep track of all the settings
var totalCallThree = 0;
var totalSmsThree = 0;
var totalThree = 0;
var callCostThree = 0;
var smsCostThree = 0;
var warningLevel = 0;
var criticalLevel = 0;


// create a variables that will keep track of all three totals.

//add an event listener for when the add button is pressed
function settingsAddButton (){
    if (totalThree < criticalLevel) {

    
    const theCallOrSmsRadioThree = document.querySelector(".billItemTypeWithSettings:checked");
    var radioValuesThree = theCallOrSmsRadioThree.value;

    if (radioValuesThree === "call") {

        totalCallThree += callCostThree
        totalThree += callCostThree

    
    }

    else if (radioValuesThree === "sms") {

            totalSmsThree += smsCostThree
            totalThree += smsCostThree

    }

    var roundedCallTotalThree = totalCallThree.toFixed(2);
    
    var roundedSmsTotalThree = totalSmsThree.toFixed(2);
    var roundedTotalThree = totalThree.toFixed(2);

    colorChange ()

    callTotalSettings.innerHTML = roundedCallTotalThree;
    smsTotalSettings.innerHTML = roundedSmsTotalThree;
    totalSettings.innerHTML = roundedTotalThree;
    }
 
     

    
    
};


function colorChange () {

    
        theSpanElementThree.classList.remove("danger");
        theSpanElementThree.classList.remove("warning");
    
          if (totalThree >= criticalLevel) {
              
            theSpanElementThree.classList.add("danger")
    
           }
    
           else if (totalThree >= warningLevel) {
    
            theSpanElementThree.classList.add("warning") 
    
           }
    };

function settingsUpdate () {

    callCostThree = Number(callCostSetting.value)
    smsCostThree = Number(smsCostSetting.value)
    warningLevel = Number(warningLevelSetting.value)
    criticalLevel = Number(criticalLevelSetting.value)
    
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
