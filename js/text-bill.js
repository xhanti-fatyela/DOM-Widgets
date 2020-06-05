// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText");
//get a reference to the add button
const addToBillBtn = document.querySelector(".addToBillBtn");
const callTotalOne = document.querySelector(".callTotalOne");
const smsTotalOne = document.querySelector(".smsTotalOne");
const totalOne = document.querySelector(".totalOne");
const TotalSpanElement = document.querySelector(".red");
//create a variable that will keep track of the total bill
var totalCall = 0;
var totalSms = 0;
var mainTotal = 0;

//add an event listener for when the add button is pressed

function addToBillBtnClicked (){
    
    var billText = billTypeText.value;
    
    if (billText === 'call'){

        totalCall += 2.75;
        mainTotal += 2.75;
        
    }
    else if (billText === 'sms'){
        
        totalSms += 0.65
        mainTotal += 0.65;

    }


    var roundedCallTotalOne = totalCall.toFixed(2);
    var roundedSmsTotalOne = totalSms.toFixed(2);
    var roundedTotalOne = mainTotal.toFixed(2);

    callTotalOne.innerHTML = roundedCallTotalOne;
    smsTotalOne.innerHTML = roundedSmsTotalOne;
    totalOne.innerHTML = roundedTotalOne;

    const currentTotal = Number(roundedTotalOne);

    TotalSpanElement.classList.remove("danger")
    TotalSpanElement.classList.remove("warning")

    if (currentTotal >= 50 ){

        TotalSpanElement.classList.add("danger")
         

    }
    else if (currentTotal >= 30 && currentTotal < 50){

        TotalSpanElement.classList.add("warning")

    }
}

addToBillBtn.addEventListener("click" , addToBillBtnClicked);
       

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
