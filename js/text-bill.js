// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText");
//get a reference to the add button
const addToBillBtn = document.querySelector(".addToBillBtn");
const callTotalOne = document.querySelector(".callTotalOne");
const smsTotalOne = document.querySelector(".smsTotalOne");
const totalOne = document.querySelector(".totalOne");
const TotalSpanElement = document.querySelector(".red");
//create a variable that will keep track of the total bill

var textBillInstance = textInputBill()

//add an event listener for when the add button is pressed

function addToBillBtnClicked (){
    
    var billText = billTypeText.value;
    
    if (billText === 'call'){

        textBillInstance.makeCallFour()
        
    }
    else if (billText === 'sms'){
        
        textBillInstance.sendSmsFour()

    }


    //var roundedCallTotalOne = totalCall.toFixed(2);
    //var roundedSmsTotalOne = totalSms.toFixed(2);
    //var roundedTotalOne = mainTotal.toFixed(2);

    callTotalOne.innerHTML = textBillInstance.callMadeFour();
    smsTotalOne.innerHTML = textBillInstance.smsSentFour();
    totalOne.innerHTML = textBillInstance.textOverallTotalSum();

    //const currentTotal = Number(roundedTotalOne);

    TotalSpanElement.classList.remove("critical")
    TotalSpanElement.classList.remove("warning")


        TotalSpanElement.classList.add(textBillInstance.textShowClassNameTwo())
         

  

        TotalSpanElement.classList.add(textBillInstance.textShowClassName())


}
addToBillBtn.addEventListener("click" , addToBillBtnClicked);
       

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
