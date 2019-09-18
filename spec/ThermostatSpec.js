describe("Thermostat", function () {

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it('Expects to initialize with a temperature of 20', function () {
    expect(thermostat.temperature).toEqual(20)
  });

  it("Expects to initialize with a minimum temperature of 10", function () {
    expect(thermostat.minTemperature).toEqual(10)
  });

  it("Expects to initialize with a maximum temperature of 25", function () {
    expect(thermostat.maxTemperature).toEqual(25)
  });

  it("Expects to initialize with a powerSavingMode of 'on'", function () {
    expect(thermostat.powerSavingMode).toEqual('on')
  });

  describe('#increase', function () {
    it("expects the function to increase by 1 every time it is called", function () {
      thermostat.increase()
      expect(thermostat.temperature).toEqual(21)
    })
  })

  describe('#decrease', function () {
    it("expects the function to decrease by 1 every time it is called", function () {
      thermostat.decrease()
      expect(thermostat.temperature).toEqual(19)
    })
  })

  describe('#powerSavingMode', function () {
    it("expects the maximum temperature to be 25 if the power saving mode is on", function () {
      thermostat.changePowerSaving()
      thermostat.changePowerSaving()
      expect(thermostat.maxTemperature).toEqual(25)
    })

    it("expects the maximum temperature to be 32 if the power saving mode is off", function () {
      thermostat.changePowerSaving()
      expect(thermostat.maxTemperature).toEqual(32)
    })

  });

  describe('#reset', function () {
    it("expects to reset the temperature to 20", function () {
      thermostat.increase()
      thermostat.reset()
      expect(thermostat.temperature).toEqual(20)
    })
  });

  describe('#check_energy_usage', function () {
    it("if temperature is < 18 expects to return usage as low", function () {

      thermostat.decrease()
      thermostat.decrease()
      thermostat.decrease()
      expect(thermostat.checkUsage()).toEqual('low-usage')

    })

    it("if temperature is < 25 and > 18 expects to return usage as medium", function () {

      expect(thermostat.checkUsage()).toEqual('medium-usage')

    })

    it("if temperature is > 25 expects to return usage as high", function () {
      thermostat.increase()
      thermostat.increase()
      thermostat.increase()
      thermostat.increase()
      thermostat.increase()

      expect(thermostat.checkUsage()).toEqual('high-usage')

    })


  });

});