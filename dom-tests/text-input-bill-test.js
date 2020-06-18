describe("the text input bill factory function", function () {

    it("should be able to update apropriete totals when 'call' is entered", function () {

        let textBill = textInputBill();

        textBill.makeCallFour()

        assert.equal(2.75, textBill.callMadeFour())
        assert.equal(0.00, textBill.smsSentFour())
        assert.equal(2.75, textBill.textOverallTotalSum())


    });

    it("should be able to update apropriete totals when 'sms' is entered", function () {

        let textBill = textInputBill();

        textBill.sendSmsFour()

        assert.equal(0.00, textBill.callMadeFour())
        assert.equal(0.65, textBill.smsSentFour())
        assert.equal(0.65, textBill.textOverallTotalSum())


    });

    it("should be able to update apropriete totals when 'call' is entered than 'sms' is entered after", function () {

        let textBill = textInputBill();

        textBill.makeCallFour()
        textBill.sendSmsFour()

        assert.equal(2.75, textBill.callMadeFour())
        assert.equal(0.65, textBill.smsSentFour())
        assert.equal(3.40, textBill.textOverallTotalSum())


    });

    describe("danger & critical level for radio button bill", function () {

        it("should return a class name of 'danger' if danger level is reached", function () {

            let textBill = textInputBill()

            textBill.makeCallFour()
            textBill.makeCallFour()

            assert.equal(5.50, textBill.callMadeFour())
            assert.equal(0.00, textBill.smsSentFour())
            assert.equal(5.50, textBill.textOverallTotalSum())
            assert.equal("danger", textBill.textShowClassNameTwo())


        });

        it("should return a class name of 'warning' if warning level is reached", function () {

            let textBill = textInputBill()

            textBill.makeCallFour()
            textBill.makeCallFour()
            textBill.makeCallFour()
            textBill.makeCallFour()

            assert.equal(11.00, textBill.callMadeFour())
            assert.equal(0.00, textBill.smsSentFour())
            assert.equal(11.00, textBill.textOverallTotalSum())
            assert.equal("warning", textBill.textShowClassName())


        });

    });


});