const calculateBtn = document.querySelector(".calculateBtn");

const billTotalElement = document.querySelector(".billTotal");

const billStringField = document.querySelector(".billString");
const billTotalSpanElement = document.querySelector(".total")

function calculateBtnClicked() {

  var billString = billStringField.value;
  const roundedBillTotal = totalPhoneBill(billString);

  billTotalElement.innerHTML = roundedBillTotal;
  styleTotalColor(roundedBillTotal);

}


function styleTotalColor(roundedBillTotal) {
  const currentTotal = Number(roundedBillTotal);

  billTotalSpanElement.classList.remove("critical")
  billTotalSpanElement.classList.remove("warning")

  if (currentTotal >= 30) {
    billTotalSpanElement.classList.add("critical")

  } else if (currentTotal >= 20 && currentTotal < 30) {
    billTotalSpanElement.classList.add("warning")

  }

}



calculateBtn.addEventListener("click", calculateBtnClicked);