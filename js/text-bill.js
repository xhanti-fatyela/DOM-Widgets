const billTypeText = document.querySelector(".billTypeText");
const addToBillBtn = document.querySelector(".addToBillBtn");
const callTotalOne = document.querySelector(".callTotalOne");
const smsTotalOne = document.querySelector(".smsTotalOne");
const totalOne = document.querySelector(".totalOne");
const TotalSpanElement = document.querySelector(".red");

var textBillInstance = textInputBill()

function addToBillBtnClicked() {

    var billText = billTypeText.value;

    if (billText === 'call') {

        textBillInstance.makeCallFour()

    }
    else if (billText === 'sms') {

        textBillInstance.sendSmsFour()

    }

    callTotalOne.innerHTML = textBillInstance.callMadeFour();
    smsTotalOne.innerHTML = textBillInstance.smsSentFour();
    totalOne.innerHTML = textBillInstance.textOverallTotalSum();

    TotalSpanElement.classList.remove("critical")
    TotalSpanElement.classList.remove("warning")

    TotalSpanElement.classList.add(textBillInstance.textShowClassNameTwo())

    TotalSpanElement.classList.add(textBillInstance.textShowClassName())


}

addToBillBtn.addEventListener("click", addToBillBtnClicked);

