describe("the calculate bill factory function" , function(){
 
    it("should be able to give total when 'call' is entered" , function(){

         let calculteBillFac = calculteBill();

         calculteBillFac.makeCallThree()

         assert.equal(2.75 , calculteBillFac.billingOverallTotal())
    });

    it("should be able to give total when 'call' is entered 3 times" , function(){

        let calculteBillFac = calculteBill();

        calculteBillFac.makeCallThree()
        calculteBillFac.makeCallThree()
        calculteBillFac.makeCallThree()


        assert.equal(8.25 , calculteBillFac.billingOverallTotal())

   });

   it("should be able to give total when 'sms' is entered" , function(){

    let calculteBillFac = calculteBill();

    calculteBillFac.sendSmsThree()

    assert.equal(0.65 , calculteBillFac.billingOverallTotal())
});


it("should be able to give total when 'sms' is entered 3 times" , function(){

    let calculteBillFac = calculteBill();
     
    calculteBillFac.sendSmsThree()
    calculteBillFac.sendSmsThree()
    calculteBillFac.sendSmsThree()


    assert.equal(1.95 , calculteBillFac.billingOverallTotal())

});

it("should be able to give total when 'call' & 'sms' is entered" , function(){

    let calculteBillFac = calculteBill();

    calculteBillFac.makeCallThree()
    calculteBillFac.sendSmsThree()

    assert.equal(3.40 , calculteBillFac.billingOverallTotal())
});

describe("danger & critical level for radio button bill", function(){

    it("should return a class name of 'danger' if danger level is reached", function(){
        
        let calculteBillFac = calculteBill()

        calculteBillFac.makeCallThree()
        calculteBillFac.makeCallThree()

        assert.equal(5.50 , calculteBillFac.billingOverallTotal())
        assert.equal("danger" , calculteBillFac.billShowClassName())


    }); 

    it("should return a class name of 'warning' if warning level is reached", function(){
        
        let calculteBillFac = calculteBill()

        calculteBillFac.makeCallThree()
        calculteBillFac.makeCallThree()
        calculteBillFac.makeCallThree()
        calculteBillFac.makeCallThree()

        assert.equal(11.00 , calculteBillFac.billingOverallTotal())
        assert.equal("warning" , calculteBillFac.billShowClassNameTwo())


    }); 

});
});