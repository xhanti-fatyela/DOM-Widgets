const billItemType = document.querySelector(".billItemType")
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
const callTotalTwo = document.querySelector(".callTotalTwo");
const smsTotalTwo = document.querySelector(".smsTotalTwo");
const totalTwo = document.querySelector(".totalTwo")
const theSpanElement = document.querySelector(".orange")

var raidoBillInstance = billWithRadio();

radioBillAddBtn.addEventListener("click", function () {

       const theCallOrSmsRadio = document.querySelector(".billItemTypeRadio:checked");

       var radioValues = theCallOrSmsRadio.value;

       if (radioValues === 'call') {

              raidoBillInstance.makeCallTwo()

       } else if (radioValues === 'sms') {

              raidoBillInstance.sendSmsTwo()

       }

       callTotalTwo.innerHTML = raidoBillInstance.callMade();
       smsTotalTwo.innerHTML = raidoBillInstance.smsSent();;
       totalTwo.innerHTML = raidoBillInstance.overallTotalSum();;

       theSpanElement.classList.remove("critical")
       theSpanElement.classList.remove("warning")



       theSpanElement.classList.add(raidoBillInstance.showClassName())


       theSpanElement.classList.add(raidoBillInstance.showClassNameTwo())




});