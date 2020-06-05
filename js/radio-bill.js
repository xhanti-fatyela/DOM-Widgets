// get a reference to the sms or call radio buttons
const billItemType = document.querySelector(".billItemType")
//get a reference to the add button
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
const callTotalTwo = document.querySelector(".callTotalTwo");
const smsTotalTwo = document.querySelector(".smsTotalTwo");
const totalTwo = document.querySelector(".totalTwo")
const theSpanElement = document.querySelector(".orange")
//create a variable that will keep track of the total bill
var totalCallTwo = 0;
var totalSmsTwo = 0;
var mainTotalTwo = 0;

//add an event listener for when the add button is pressed
radioBillAddBtn.addEventListener("click", function() {
       const theCallOrSmsRadio = document.querySelector(".billItemTypeRadio:checked");
       
       var radioValues = theCallOrSmsRadio.value;

       if (radioValues === 'call') {

         totalCallTwo += 2.75   
         mainTotalTwo += 2.75
       }
   
       else if (radioValues === 'sms') {

          totalSmsTwo += 0.65
          mainTotalTwo += 0.65

       }

       var roundedCallTotalTwo = totalCallTwo.toFixed(2);
       var roundedSmsTotalTwo = totalSmsTwo.toFixed(2);
       var roundedTotalTwo = mainTotalTwo.toFixed(2);

       callTotalTwo.innerHTML = roundedCallTotalTwo;
       smsTotalTwo.innerHTML = roundedSmsTotalTwo;
       totalTwo.innerHTML = roundedTotalTwo;
       
       const myCurrentTotal = Number(roundedTotalTwo);

       theSpanElement.classList.remove("danger")
       theSpanElement.classList.remove("warning")

       if (myCurrentTotal >= 50) {
          
        theSpanElement.classList.add("danger")

       }

       else if (myCurrentTotal >= 30 && myCurrentTotal < 50) {

              theSpanElement.classList.add("warning") 

       }


});
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
