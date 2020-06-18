describe("the calculate bill factory function", function () {

     it("should be able to give total when 'call' is entered", function () {

          assert.equal(2.75, totalPhoneBill("call"))

     });

     it("should be able to give total when 'sms' is entered", function () {

          assert.equal(0.65, totalPhoneBill("sms"))

     });


});
