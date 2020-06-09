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

    describe("warning & critical level for radio button bill", function(){

        it("should return a class name of 'warning' if warning level is reached", function(){
             
            let radioBill = billWithRadio();
    
            radioBill.getWarningLevelTwo()
            radioBill.getCriticalLevelTwo()
    
            radioBill.makeCallTwo()
            radioBill.makeCallTwo()
            radioBill.makeCallTwo()
        
            radioBill.sendSmsTwo()
            radioBill.sendSmsTwo()
            radioBill.sendSmsTwo()
            
            
            assert.equal(1.95 , radioBill.smsSent())
            assert.equal(8.25 , radioBill.callMade())
            assert.equal(10.20 , radioBill.overallTotalSum())
            assert.equal("warning", radioBill.showClassName());
    
        });

        it("should return a class name of 'critical' if critical level is reached", function(){
             
            let radioBill = billWithRadio();
    
            radioBill.getCriticalLevelTwo()
    
            radioBill.makeCallTwo()
            radioBill.makeCallTwo()
            radioBill.makeCallTwo()
            radioBill.makeCallTwo()
            radioBill.makeCallTwo()
            radioBill.makeCallTwo()

            radioBill.sendSmsTwo()
            radioBill.sendSmsTwo()
            radioBill.sendSmsTwo()
            radioBill.sendSmsTwo()
            radioBill.sendSmsTwo()
            radioBill.sendSmsTwo()
            
            
            assert.equal(3.90 , radioBill.smsSent())
            assert.equal(16.50 , radioBill.callMade())
            assert.equal(20.40 , radioBill.overallTotalSum())
            assert.equal("critical", radioBill.showClassNameTwo());
    
        });
    });    
});