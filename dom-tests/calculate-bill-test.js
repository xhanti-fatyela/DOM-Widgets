describe("the calculate bill factory function", function () {

     it("should be able to give total when 'call' is entered", function () {

          assert.equal(2.75, totalPhoneBill("call"))

     });

     it("should be able to give total when 'sms' is entered", function () {

          assert.equal(0.65, totalPhoneBill("sms"))

     });

     it("should be able to give total when 'call' is entered more than once", function () {

        assert.equal(8.25, totalPhoneBill("call,call,call"))

   });



   it("should be able to give total when 'call,sms,call,sms' is entered more than once", function () {

    assert.equal(6.80, totalPhoneBill("call,sms,call,sms"))

});
});
