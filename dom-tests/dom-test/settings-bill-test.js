describe("the bill with settings factory function" , function(){
    it("should be able to set the call cost" , function(){
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(2.85);
        assert.equal(2.85, settingsBill.getCallCost()) 

        let settingsBillTwo = billWithSettings();
        
        settingsBillTwo.setCallCost(3.75);
        assert.equal(3.75, settingsBillTwo.getCallCost()) 

    });


    it("should be able to set the sms cost" , function(){
        let settingsBill = billWithSettings();

        settingsBill.setSmsCost(0.85);
        assert.equal(0.85, settingsBill.getSmsCost()) 


        let settingsBillTwo = billWithSettings();
        
        settingsBillTwo.setSmsCost(0.75);
        assert.equal(0.75, settingsBillTwo.getSmsCost()) 

    });

    it("should be able to set the sms cost and call cost" , function(){
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(3.75);
        settingsBill.setSmsCost(0.85);

        assert.equal(0.85, settingsBill.getSmsCost())
        assert.equal(3.75, settingsBill.getCallCost())  

        let settingsBillTwo = billWithSettings()

        settingsBillTwo.setCallCost(2.75)
        settingsBillTwo.setSmsCost(1.85);

        assert.equal(1.85, settingsBillTwo.getSmsCost())
        assert.equal(2.75, settingsBillTwo.getCallCost())  
    });

    it("should be able to set the warning level" , function(){
        let settingsBill = billWithSettings();
        
        settingsBill.setWarningLevel(30)
       

        assert.equal(30, settingsBill.getWarningLevel())
         
 
    });

    it("should be able to set the critical level" , function(){
        let settingsBill = billWithSettings();
        
        settingsBill.setCriticalLevel(60)
       

        assert.equal(60, settingsBill.getCriticalLevel())
         
 
    });

    it("should be able to set the warning level and critical level" , function(){
        let settingsBill = billWithSettings();
        
        settingsBill.setWarningLevel(30)
        settingsBill.setCriticalLevel(60)
       
   
        assert.equal(30, settingsBill.getWarningLevel())
        assert.equal(60, settingsBill.getCriticalLevel())
         
 
    });

describe ("use values", function(){
    
    it("should be able to use the call cost set", function(){
       
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(3.25);
        settingsBill.setSmsCost(0.25);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

       assert.equal(9.75, settingsBill.getTotalCost());
       assert.equal(9.75, settingsBill.getTotalCallCost());
       assert.equal(0.00, settingsBill.getTotalSmsCost());
       

     });

     it("should be able to use the call cost set for 2 call at 1.35 each", function(){
       
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.25);

        settingsBill.makeCall();
        settingsBill.makeCall();
        

       assert.equal(2.70, settingsBill.getTotalCost());
       assert.equal(2.70, settingsBill.getTotalCallCost());
       assert.equal(0.00, settingsBill.getTotalSmsCost());
       

     });

     it("should be able to send 2 sms's at 0.85 each", function(){
       
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);

        settingsBill.sendSms();
        settingsBill.sendSms();
        

       assert.equal(0.00, settingsBill.getTotalCost());
       assert.equal(0.00, settingsBill.getTotalCallCost());
       assert.equal(1.70, settingsBill.getTotalSmsCost());
       

     });
 });

 


});

