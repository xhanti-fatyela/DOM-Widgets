describe("the radio bill factory function", function(){

    it("should be able to make a call & update appropriate totals", function(){
      
        let radioBill = billWithRadio();
         
        radioBill.makeCallTwo()
        radioBill.makeCallTwo()

        assert.equal(5.5 , radioBill.callMade())
        assert.equal(5.5 , radioBill.overallTotalSum())
    });

    it("should be able to send a sms & update appropriate totals", function(){
      
        let radioBill = billWithRadio();
         
        radioBill.sendSmsTwo()
        radioBill.sendSmsTwo()
        radioBill.sendSmsTwo()

        assert.equal(1.95 , radioBill.smsSent())
        assert.equal(1.95 , radioBill.overallTotalSum())
    });

    it("should be able to send a sms & make a call & update appropriate totals", function(){
      
        let radioBill = billWithRadio();
         
        radioBill.sendSmsTwo()
        radioBill.sendSmsTwo()
        radioBill.makeCallTwo()
        radioBill.makeCallTwo()

        assert.equal(1.30 , radioBill.smsSent())
        assert.equal(5.50 , radioBill.callMade())
        assert.equal(6.80 , radioBill.overallTotalSum())
    });
});