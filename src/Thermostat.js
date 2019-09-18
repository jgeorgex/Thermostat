function Thermostat() {
  this.temperature = 20;
  // this.minTemperature = 10;
  // this.maxTemperature = 25;
  this.powerSavingMode = 'on';
};

Thermostat.prototype.increase = function () {
  this.temperature++
}

Thermostat.prototype.decrease = function () {
  this.temperature--
}

Thermostat.prototype.changePowerSaving = function () {
  if (this.powerSavingMode === 'on') {
    this.maxTemperature = 32
    this.powerSavingMode = 'off'
  } else {
    this.maxTemperature = 25
    this.powerSavingMode = 'on'
  }
}

Thermostat.prototype.reset = function () {
  this.temperature = 20
}

Thermostat.prototype.checkUsage = function () {
  if (this.temperature < 18) {
    return 'low-usage'
  } else if (this.temperature < 25) {
    return 'medium-usage'
  } else {
    return 'high-usage'
  }
}



