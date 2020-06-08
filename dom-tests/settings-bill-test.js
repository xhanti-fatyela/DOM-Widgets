describe("the bill with settings factory function" , function(){
    it("should be able to set the call cost" , function(){
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(2.85);
        settingsBill.setCriticalLevel(10)
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
        settingsBill.setCriticalLevel(10)

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
        settingsBill.setCriticalLevel(10)

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
        settingsBill.setCriticalLevel(10)

        settingsBill.sendSms();
        settingsBill.sendSms();
        

       assert.equal(1.70, settingsBill.getTotalCost());
       assert.equal(0.00, settingsBill.getTotalCallCost());
       assert.equal(1.70, settingsBill.getTotalSmsCost());
       

     });

     it("should be able to send 2 sms's at 0.85 each & make 1 call at 1.35", function(){
       
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10)

        settingsBill.sendSms();
        settingsBill.sendSms();
        settingsBill.makeCall();
        

       assert.equal(3.05, settingsBill.getTotalCost());
       assert.equal(1.35, settingsBill.getTotalCallCost());
       assert.equal(1.70, settingsBill.getTotalSmsCost());
       

     });
 });

 describe("warning & critical level", function(){

    it("should return a class name of 'warning' if warning level is reached", function(){
         
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);
        settingsBill.setWarningLevel(5)
        settingsBill.setCriticalLevel(10)

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        

        assert.equal("warning", settingsBill.totalClassName());

    });

    it("should return a class name of 'critical' if critical level has been reached", function(){
         
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(2.50);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10)
        settingsBill.setWarningLevel(5)


        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        

        assert.equal("critical", settingsBill.totalClassName());

    });

    it("it should stop the Total Call cost from increasing when the critical level has been reached", function(){
         
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(2.50);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10)
        settingsBill.setWarningLevel(5)


        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        

        assert.equal("critical", settingsBill.totalClassName());
        assert.equal(10, settingsBill.getTotalCost())

    });

    it("it should allow the total to increase after reaching the critical level & then upping the critical level", function(){
         
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(2.50);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10)
        settingsBill.setWarningLevel(5)


        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        

        assert.equal("critical", settingsBill.totalClassName());
        assert.equal(10, settingsBill.getTotalCost());

        settingsBill.setCriticalLevel(20)
        assert.equal("warning", settingsBill.totalClassName());

        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(15, settingsBill.getTotalCost());

    });

 });


});